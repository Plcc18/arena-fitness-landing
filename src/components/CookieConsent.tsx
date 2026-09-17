import { useEffect, useState } from "react";
import { initAnalytics } from "../lib/analytics";

const CONSENT_KEY = "arena-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted") {
      initAnalytics();
    } else if (stored !== "rejected") {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    initAnalytics();
    setVisible(false);
  }

  function reject() {
    localStorage.setItem(CONSENT_KEY, "rejected");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-60 border-t border-arena-border bg-arena-surface px-4 py-4 shadow-2xl sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 sm:flex-row sm:justify-between">
        <p className="text-center text-sm text-arena-muted sm:text-left">
          Usamos cookies para melhorar sua experiência e analisar o tráfego do site. Ao continuar navegando, você
          concorda com nossa{" "}
          <a href="/privacidade.html" className="font-semibold text-arena-ink underline hover:text-arena-yellow">
            Política de Privacidade
          </a>
          .
        </p>
        <div className="flex shrink-0 items-center gap-3">
          <button
            type="button"
            onClick={reject}
            className="rounded-full border border-arena-border px-4 py-2 text-sm font-semibold text-arena-ink transition-colors duration-500 ease-out hover:border-arena-yellow"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={accept}
            className="rounded-full bg-arena-yellow px-4 py-2 text-sm font-bold text-arena-bg transition-transform duration-500 ease-out hover:scale-105"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
