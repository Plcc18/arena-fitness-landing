import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../lib/whatsapp";
import { Reveal } from "./Reveal";

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-arena-bg py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-arena-yellow/20 via-transparent to-arena-gold/10" />
      <Reveal className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-4xl text-arena-ink sm:text-5xl">
          Sua consistência começa <span className="text-gradient-yellow">hoje.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-arena-muted">
          Fale agora com a nossa equipe pelo WhatsApp e garanta sua aula experimental gratuita na Arena Fitness.
        </p>
        <a
          href={whatsappUrl()}
          target="_blank"
          rel="noreferrer"
          className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-arena-yellow px-8 py-4 text-base font-bold text-arena-bg shadow-xl shadow-arena-yellow/30 transition-transform duration-500 ease-out hover:scale-105 sm:w-auto sm:px-10"
        >
          <MessageCircle size={20} />
          Falar no WhatsApp
        </a>
      </Reveal>
    </section>
  );
}
