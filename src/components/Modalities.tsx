import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, type CSSProperties } from "react";
import { EffectCards, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import { modalities } from "../data/content";
import { Reveal } from "./Reveal";

import "swiper/css";
import "swiper/css/effect-cards";

const images = [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=800&q=80",
];

function ModalityCard({ modality, image }: { modality: (typeof modalities)[number]; image: string }) {
  return (
    <div className="group relative aspect-3/4 overflow-hidden rounded-2xl border border-arena-border">
      <img
        src={image}
        alt={modality.title}
        className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-linear-to-t from-arena-bg from-10% via-arena-bg/70 via-45% to-transparent" />
      <div className="absolute inset-x-0 bottom-0 flex min-h-[55%] flex-col justify-end p-5">
        <h3 className="text-2xl font-bold text-arena-ink">{modality.title}</h3>
        <p className="mt-2 text-base leading-relaxed text-arena-muted">{modality.description}</p>
      </div>
    </div>
  );
}

// Repetimos as modalidades e, assim que o slide ativo muda (ou ao tocar numa ponta),
// reposicionamos (sem animação) de volta para o conjunto do meio — dá a sensação de
// carrossel infinito sem usar o `loop` nativo do Swiper, que reordena os slides no DOM
// a cada arrasto e quebra a transição do efeito cards. `rewind` fica como rede de
// segurança caso o usuário consiga, de alguma forma, chegar numa ponta real do array.
const CAROUSEL_REPEATS = 9;
const carouselMiddleRepeat = Math.floor(CAROUSEL_REPEATS / 2);
const carouselModalities = Array.from({ length: CAROUSEL_REPEATS }, (_, repeat) =>
  modalities.map((modality, index) => ({
    ...modality,
    image: images[index],
    carouselKey: `${modality.title}-${repeat}`,
  })),
).flat();
const carouselInitialSlide = carouselMiddleRepeat * modalities.length;

function recenterCarousel(swiper: SwiperClass) {
  const currentRepeat = Math.floor(swiper.activeIndex / modalities.length);
  if (currentRepeat !== carouselMiddleRepeat) {
    const relativeIndex = swiper.activeIndex % modalities.length;
    swiper.slideTo(carouselMiddleRepeat * modalities.length + relativeIndex, 0, false);
  }
}

// Opacidade contínua por card, proporcional à distância real (`progress`) até o
// ativo — atualizada a cada frame do arrasto, então o próximo card vai sendo
// revelado suavemente enquanto você arrasta, não só depois de soltar.
function updateStackedOpacity(swiper: SwiperClass) {
  swiper.slides.forEach((slideEl) => {
    const distance = Math.abs(slideEl.progress ?? 0);
    const opacity = Math.max(0, Math.min(1, 2 - distance));
    slideEl.style.opacity = String(opacity);
    slideEl.style.pointerEvents = opacity < 0.05 ? "none" : "auto";
  });
}

// Mantém a duração da transição de opacidade sempre igual à que o Swiper está
// usando no momento (0 durante o arrasto, `speed` ao soltar/recentralizar).
function syncStackedTransition(swiper: SwiperClass, duration: number) {
  swiper.slides.forEach((slideEl) => {
    slideEl.style.transitionDuration = `${duration}ms`;
  });
}

export function Modalities() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="modalidades" className="bg-arena-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-arena-yellow">Modalidades</span>
          <h2 className="font-display mt-3 text-4xl text-arena-ink sm:text-5xl">Treine do seu jeito</h2>
        </Reveal>

        {/* Mobile/tablet: carrossel de cartões empilhados (Swiper effect-cards) */}
        <div className="relative mt-16 lg:hidden">
          <button
            ref={prevRef}
            type="button"
            aria-label="Modalidade anterior"
            className="absolute left-0 top-1/2 z-10 flex size-13 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-arena-border bg-arena-surface text-arena-ink shadow-lg transition-colors hover:border-arena-yellow hover:text-arena-yellow"
          >
            <ChevronLeft size={25} />
          </button>
          <button
            ref={nextRef}
            type="button"
            aria-label="Próxima modalidade"
            className="absolute right-0 top-1/2 z-10 flex size-13 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-arena-border bg-arena-surface text-arena-ink shadow-lg transition-colors hover:border-arena-yellow hover:text-arena-yellow"
          >
            <ChevronRight size={25} />
          </button>

          <Swiper
            modules={[EffectCards, Navigation]}
            effect="cards"
            cardsEffect={{ slideShadows: true, perSlideOffset: 8, perSlideRotate: 2 }}
            grabCursor
            autoHeight
            speed={650}
            initialSlide={carouselInitialSlide}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper: SwiperClass) => {
              if (typeof swiper.params.navigation === "object") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            rewind
            onSlideChange={recenterCarousel}
            onReachBeginning={recenterCarousel}
            onReachEnd={recenterCarousel}
            onSetTranslate={updateStackedOpacity}
            onSetTransition={syncStackedTransition}
            style={{ "--swiper-wrapper-transition-timing-function": "cubic-bezier(0.22, 1, 0.36, 1)" } as CSSProperties}
            className="stacked-carousel mx-auto w-full max-w-xs"
          >
            {carouselModalities.map((modality) => (
              <SwiperSlide key={modality.carouselKey} className="rounded-2xl">
                <ModalityCard modality={modality} image={modality.image} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: grid estático, sem carrossel */}
        <div className="mt-16 hidden gap-6 lg:grid lg:grid-cols-4">
          {modalities.map((modality, index) => (
            <Reveal key={modality.title} delay={index * 100}>
              <ModalityCard modality={modality} image={images[index]} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
