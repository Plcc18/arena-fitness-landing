import { ClipboardCheck, Clock, Dumbbell, Flame, MapPin, Users, type LucideIcon } from "lucide-react";
import { benefits } from "../data/content";
import { Reveal } from "./Reveal";

const iconMap: Record<string, LucideIcon> = {
  Clock,
  Users,
  Dumbbell,
  MapPin,
  Flame,
  ClipboardCheck,
};

export function Benefits() {
  return (
    <section id="beneficios" className="bg-arena-bg py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-arena-yellow">
            Por que treinar aqui
          </span>
          <h2 className="font-display mt-3 text-4xl text-arena-ink sm:text-5xl">
            Estrutura e acompanhamento para você não desistir
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = iconMap[benefit.icon];
            return (
              <Reveal key={benefit.title} delay={(index % 3) * 100}>
                <div className="group h-full rounded-2xl border border-arena-border bg-arena-surface p-6 transition-colors duration-500 ease-out hover:border-arena-yellow/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-arena-yellow/10 text-arena-yellow transition-colors duration-500 ease-out group-hover:bg-arena-yellow group-hover:text-arena-bg">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-arena-ink">{benefit.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-arena-muted">{benefit.description}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
