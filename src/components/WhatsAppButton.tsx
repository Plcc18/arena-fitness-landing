import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { whatsappUrl } from "../lib/whatsapp";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar no WhatsApp"
      style={{ animationDelay: "700ms" }}
      className="animate-fade-in-up fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/40 transition-transform duration-500 ease-out hover:scale-110"
    >
      <WhatsAppIcon size={28} />
    </a>
  );
}
