import { stats } from "../data/content";

export function SocialProof() {
  return (
    <section className="border-y border-arena-border bg-arena-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-8 px-4 py-10 sm:px-6 md:grid-cols-4 lg:px-8">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="animate-fade-in-up text-center md:text-left"
            style={{ animationDelay: `${300 + index * 100}ms` }}
          >
            <p className="font-display text-3xl text-arena-yellow sm:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm text-arena-muted">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
