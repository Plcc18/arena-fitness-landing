import { analytics } from "../data/content";

type FbqFn = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  loaded: boolean;
  version: string;
};

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

let initialized = false;

// Carrega o GA4 e o Meta Pixel — só entra em ação se os IDs em src/data/content.ts
// estiverem preenchidos. Chame apenas depois que o visitante aceitar cookies
// (veja src/components/CookieConsent.tsx).
export function initAnalytics() {
  if (initialized) return;
  initialized = true;

  if (analytics.ga4MeasurementId) {
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${analytics.ga4MeasurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args);
    };
    window.gtag("js", new Date());
    window.gtag("config", analytics.ga4MeasurementId);
  }

  if (analytics.metaPixelId) {
    const fbq = function (...args: unknown[]) {
      if (fbq.callMethod) {
        fbq.callMethod(...args);
      } else {
        fbq.queue.push(args);
      }
    } as FbqFn;
    fbq.queue = [];
    fbq.loaded = true;
    fbq.version = "2.0";
    window.fbq = fbq;
    window._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    document.head.appendChild(script);

    window.fbq("init", analytics.metaPixelId);
    window.fbq("track", "PageView");
  }
}

// Dispara um evento de conversão quando o visitante clica em um CTA de WhatsApp.
// `location` identifica de onde veio o clique (ex: "hero", "plano_trimestral").
export function trackWhatsAppClick(location: string) {
  window.gtag?.("event", "whatsapp_click", {
    event_category: "engagement",
    event_label: location,
  });
  window.fbq?.("track", "Contact", { content_name: location });
}
