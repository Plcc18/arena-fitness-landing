import { modalities } from "../data/content";

const images = [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1550345332-09e3ac987658?auto=format&fit=crop&w=800&q=80",
];

export function Modalities() {
  return (
    <section id="modalidades" className="bg-arena-surface py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-arena-yellow">Modalidades</span>
          <h2 className="font-display mt-3 text-4xl text-arena-ink sm:text-5xl">Treine do seu jeito</h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modalities.map((modality, index) => (
            <div
              key={modality.title}
              className="group relative aspect-3/4 overflow-hidden rounded-2xl border border-arena-border"
            >
              <img
                src={images[index]}
                alt={modality.title}
                className="h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-linear-to-t from-arena-bg via-arena-bg/40 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-lg font-bold text-arena-ink">{modality.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-arena-muted">{modality.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
