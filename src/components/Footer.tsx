import { Phone } from "lucide-react";
import { brand } from "../data/content";
import { InstagramIcon } from "./icons/InstagramIcon";
import { Reveal } from "./Reveal";

export function Footer() {
  return (
    <footer className="border-t border-arena-border bg-arena-bg py-12">
      <Reveal className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:px-6 lg:flex-row lg:justify-between lg:px-8">
        <div className="text-center lg:text-left">
          <p className="flex items-center justify-center gap-2 font-display text-2xl text-arena-ink lg:justify-start">
            <img src="/arena-icon.png" alt="" className="h-9 w-9 object-contain" />
            ARENA<span className="text-arena-yellow">FITNESS</span>
          </p>
          <p className="mt-1 text-sm text-arena-muted">{brand.address}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={brand.instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-arena-border text-arena-ink transition-colors duration-500 ease-out hover:border-arena-yellow hover:text-arena-yellow"
            aria-label="Instagram da Arena Fitness"
          >
            <InstagramIcon size={18} />
          </a>
          <a
            href={brand.phoneHref}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-arena-border text-arena-ink transition-colors duration-500 ease-out hover:border-arena-yellow hover:text-arena-yellow"
            aria-label="Ligar para a Arena Fitness"
          >
            <Phone size={18} />
          </a>
        </div>
      </Reveal>

      <p className="mt-8 text-center text-xs text-arena-muted">
        © {new Date().getFullYear()} {brand.fullName}. Todos os direitos reservados. ·{" "}
        <a href="/privacidade.html" className="underline hover:text-arena-ink">
          Política de Privacidade
        </a>
      </p>
    </footer>
  );
}
