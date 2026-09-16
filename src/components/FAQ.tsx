import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { faqs } from "../data/content";
import { Reveal } from "./Reveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-arena-surface py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-arena-yellow">Dúvidas frequentes</span>
          <h2 className="font-display mt-3 text-4xl text-arena-ink sm:text-5xl">Ainda com dúvidas?</h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={faq.question} delay={(index % 6) * 80}>
                <div className="overflow-hidden rounded-2xl border border-arena-border bg-arena-bg">
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-arena-ink">{faq.question}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-arena-yellow transition-transform duration-500 ease-out ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    aria-hidden={!isOpen}
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-arena-muted">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
