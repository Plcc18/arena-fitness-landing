import { Check, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { EffectCards, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, type SwiperClass } from "swiper/react";
import { plans } from "../data/content";
import { trackWhatsAppClick } from "../lib/analytics";
import { whatsappUrl } from "../lib/whatsapp";
import { Reveal } from "./Reveal";

import "swiper/css";
import "swiper/css/effect-cards";

function PlanCard({ plan, solid = false }: { plan: (typeof plans)[number]; solid?: boolean }) {
  return (
    <div
      className={`relative flex h-full flex-col rounded-3xl border p-6 sm:p-8 ${
        plan.highlight
          ? "border-arena-yellow bg-arena-surface shadow-2xl shadow-arena-yellow/20 lg:-translate-y-4"
          : `border-arena-border ${solid ? "bg-arena-surface" : "bg-arena-surface/60"}`
      }`}
    >
      {plan.badge && (
        <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-arena-yellow px-4 py-1 text-xs font-bold uppercase tracking-wide text-arena-bg">
          {plan.badge}
        </span>
      )}

      <h3 className="text-lg font-bold text-arena-ink">{plan.name}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="font-display text-5xl text-arena-ink">{plan.price}</span>
        <span className="text-sm text-arena-muted">{plan.period}</span>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm text-arena-muted">
            <Check size={18} className="mt-0.5 shrink-0 text-arena-yellow" />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href={whatsappUrl(`Olá! Tenho interesse no plano ${plan.name} da Arena Fitness.`)}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackWhatsAppClick(`plano_${plan.name.toLowerCase()}`)}
        className={`mt-8 inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition-all duration-500 ease-out hover:scale-105 ${
          plan.highlight
            ? "bg-arena-yellow text-arena-bg shadow-lg shadow-arena-yellow/30"
            : "border border-arena-border text-arena-ink hover:border-arena-yellow"
        }`}
      >
        Quero esse plano
      </a>
    </div>
  );
}

// Repetido para dar "massa" suficiente ao loop do carrossel: o efeito cards precisa de
// bem mais slides do que os 3 planos reais para girar sem travar/saltar.
const carouselPlans = [...plans, ...plans, ...plans].map((plan, index) => ({
  ...plan,
  carouselKey: `${plan.name}-${index}`,
}));
const carouselInitialSlide = plans.length + plans.findIndex((plan) => plan.highlight);

export function Plans() {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <section id="planos" className="bg-arena-bg py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-arena-yellow">Planos</span>
          <h2 className="font-display mt-3 text-4xl text-arena-ink sm:text-5xl">
            Escolha o plano ideal para o seu ritmo
          </h2>
          <p className="mt-4 text-arena-muted">
            Matrícula com <strong className="text-arena-gold">50% de desconto</strong> para alunos que estão
            retornando. Fale com a recepção para confirmar as condições vigentes.
          </p>
        </Reveal>

        {/* Mobile/tablet: carrossel de cartões empilhados (Swiper effect-cards) */}
        <div className="relative mt-16 lg:hidden">
          <button
            ref={prevRef}
            type="button"
            aria-label="Plano anterior"
            className="absolute left-0 top-1/2 z-10 flex size-13 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-arena-border bg-arena-surface text-arena-ink shadow-lg transition-colors hover:border-arena-yellow hover:text-arena-yellow"
          >
            <ChevronLeft size={25} />
          </button>
          <button
            ref={nextRef}
            type="button"
            aria-label="Próximo plano"
            className="absolute right-0 top-1/2 z-10 flex size-13 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-arena-border bg-arena-surface text-arena-ink shadow-lg transition-colors hover:border-arena-yellow hover:text-arena-yellow"
          >
            <ChevronRight size={25} />
          </button>

          <Swiper
            modules={[EffectCards, Navigation]}
            effect="cards"
            cardsEffect={{ slideShadows: false, perSlideOffset: 8, perSlideRotate: 2 }}
            loop
            grabCursor
            autoHeight
            initialSlide={carouselInitialSlide}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onBeforeInit={(swiper: SwiperClass) => {
              if (typeof swiper.params.navigation === "object") {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
            className="mx-auto w-full max-w-xs"
          >
            {carouselPlans.map((plan) => (
              <SwiperSlide key={plan.carouselKey} className="rounded-3xl">
                <PlanCard plan={plan} solid />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Desktop: grid estático, sem carrossel */}
        <div className="mx-auto mt-16 hidden max-w-xl gap-8 lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 100}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
