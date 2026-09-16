import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand } from "../data/content";

const links = [
  { href: "#beneficios", label: "Benefícios" },
  { href: "#modalidades", label: "Modalidades" },
  { href: "#planos", label: "Planos" },
  { href: "#depoimentos", label: "Alunos" },
  { href: "#localizacao", label: "Localização" },
  { href: "#faq", label: "Dúvidas" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`animate-fade-in-down fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        scrolled ? "bg-arena-bg/90 backdrop-blur border-b border-arena-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#topo" className="flex items-center gap-2 font-display text-2xl tracking-wide text-arena-ink">
          <img src="/arena-icon.png" alt="" className="h-9 w-9 object-contain" />
          ARENA<span className="text-arena-yellow">FITNESS</span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-arena-muted transition-colors duration-500 ease-out hover:text-arena-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={brand.phoneHref}
            className="flex items-center gap-2 text-sm font-medium text-arena-muted transition-colors duration-500 ease-out hover:text-arena-ink"
          >
            <Phone size={16} />
            {brand.phoneDisplay}
          </a>
          <a
            href="#planos"
            className="rounded-full bg-arena-yellow px-5 py-2.5 text-sm font-bold text-arena-bg shadow-lg shadow-arena-yellow/30 transition-transform duration-500 ease-out hover:scale-105"
          >
            Matricule-se
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          className="-mr-2 p-2 text-arena-ink lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-7 w-7">
            <Menu
              size={28}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                open ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
              }`}
            />
            <X
              size={28}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                open ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        aria-hidden={!open}
        className={`grid transition-all duration-500 ease-in-out lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-arena-border bg-arena-bg px-4 pb-6 pt-2">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-arena-ink transition-colors duration-500 ease-out hover:bg-arena-surface"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <a
              href="#planos"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="mt-4 block rounded-full bg-arena-yellow px-5 py-3 text-center text-sm font-bold text-arena-bg"
            >
              Matricule-se agora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
