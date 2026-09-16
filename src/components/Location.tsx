import { Clock, MapPin, Phone } from "lucide-react";
import { brand, hours, mapsEmbedUrl } from "../data/content";
import { Reveal } from "./Reveal";

export function Location() {
  return (
    <section id="localizacao" className="bg-arena-bg py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="text-sm font-semibold uppercase tracking-wider text-arena-yellow">Localização</span>
            <h2 className="font-display mt-3 text-4xl text-arena-ink sm:text-5xl">Venha treinar com a gente</h2>

            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-arena-yellow/10 text-arena-yellow">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="font-bold text-arena-ink">Endereço</p>
                  <p className="text-sm text-arena-muted">{brand.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-arena-yellow/10 text-arena-yellow">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="font-bold text-arena-ink">Horário de funcionamento</p>
                  <ul className="mt-1 space-y-0.5 text-sm text-arena-muted">
                    {hours.map((h) => (
                      <li key={h.label}>
                        {h.label}: <span className="text-arena-ink">{h.value}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-arena-yellow/10 text-arena-yellow">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="font-bold text-arena-ink">Telefone</p>
                  <a href={brand.phoneHref} className="text-sm text-arena-muted transition-colors duration-500 ease-out hover:text-arena-yellow">
                    {brand.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>

            <a
              href={brand.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-arena-yellow px-6 py-3 text-sm font-bold text-arena-bg shadow-lg shadow-arena-yellow/30 transition-transform duration-500 ease-out hover:scale-105 sm:w-auto"
            >
              Ver no Google Maps
            </a>
          </Reveal>

          <Reveal delay={150} className="aspect-square w-full overflow-hidden rounded-3xl border border-arena-border shadow-2xl">
            <iframe
              title="Localização da Arena Fitness no Google Maps"
              src={mapsEmbedUrl}
              className="h-full w-full grayscale invert-92 contrast-90"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
