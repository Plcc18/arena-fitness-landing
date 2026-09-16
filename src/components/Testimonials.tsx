import { Quote, Star } from "lucide-react";
import { testimonials } from "../data/content";
import { Reveal } from "./Reveal";

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-arena-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-arena-yellow">Quem treina, aprova</span>
          <h2 className="font-display mt-3 text-4xl text-arena-ink sm:text-5xl">Resultado de quem é consistente</h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Reveal key={testimonial.name} delay={(index % 3) * 100}>
              <figure className="flex h-full flex-col rounded-2xl border border-arena-border bg-arena-bg p-6">
                <Quote className="text-arena-yellow" size={28} />
                <div className="mt-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className="fill-arena-gold text-arena-gold" />
                  ))}
                </div>
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-arena-muted">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-5">
                  <p className="text-sm font-bold text-arena-ink">{testimonial.name}</p>
                  <p className="text-xs text-arena-muted">{testimonial.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-arena-muted">
          Depoimentos ilustrativos. Substitua pelos relatos reais dos seus alunos.
        </p>
      </div>
    </section>
  );
}
