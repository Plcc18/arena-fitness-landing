import { ArrowRight, MessageCircle } from "lucide-react";
import { brand } from "../data/content";
import { trackWhatsAppClick } from "../lib/analytics";
import { whatsappUrl } from "../lib/whatsapp";

export function Hero() {
  return (
    <section
      id="topo"
      className="animate-fade-in-up relative overflow-hidden bg-arena-bg pt-32 pb-20 sm:pt-40 sm:pb-28"
    >
      <div className="bg-noise pointer-events-none absolute inset-0 opacity-40" />
      <div className="pointer-events-none absolute -top-40 right-0 h-128 w-lg rounded-full bg-arena-yellow/20 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-96 w-96 rounded-full bg-arena-gold/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-arena-border bg-arena-surface px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-arena-gold">
            {/* <Star size={14} className="fill-arena-gold text-arena-gold" /> */}
            {brand.instagramHandle} · {brand.city}/{brand.state}
          </div>

          <h1 className="font-display mt-6 text-4xl leading-[0.95] text-arena-ink sm:text-5xl md:text-6xl lg:text-7xl">
            NÃO PRECISA SER PERFEITO,
            <br />
            <span className="text-gradient-yellow">SÓ CONSISTENTE.</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg text-arena-muted">
            Treine na <strong className="text-arena-ink">{brand.fullName}</strong>, no {brand.city}/{brand.state},
            com estrutura completa, professores atentos e horário estendido das 5h às 23h. Comece hoje sua
            transformação.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href={whatsappUrl("Olá! Quero garantir minha aula experimental gratuita 💪")}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackWhatsAppClick("hero")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-arena-yellow px-6 py-4 text-base font-bold text-arena-bg shadow-xl shadow-arena-yellow/30 transition-transform duration-500 ease-out hover:scale-105 sm:w-auto sm:px-8"
            >
              <MessageCircle size={20} />
              Quero treinar grátis hoje
            </a>
            <a
              href="#planos"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-arena-border px-6 py-4 text-base font-bold text-arena-ink transition-colors duration-500 ease-out hover:border-arena-yellow sm:w-auto sm:px-8"
            >
              Ver planos
              <ArrowRight size={18} />
            </a>
          </div>

          <p className="mt-4 text-sm text-arena-muted">
            🔥 Matrícula com <strong className="text-arena-gold">50% OFF</strong> para quem está retornando à
            academia.
          </p>
        </div>

        <div className="relative">
          <div className="aspect-4/5 w-full overflow-hidden rounded-3xl border border-arena-border bg-linear-to-br from-arena-surface to-arena-surface-2 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=900&q=80"
              alt="Aluno treinando musculação na Arena Fitness"
              className="h-full w-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
          </div>
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-2xl border border-arena-border bg-arena-surface p-5 shadow-xl">
            <p className="font-display text-3xl text-arena-yellow">5h–23h</p>
            <p className="text-xs text-arena-muted">Horário estendido de seg. a sex.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
