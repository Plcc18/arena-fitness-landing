import { brand } from "../data/content";

export function whatsappUrl(message: string = brand.whatsappMessage) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${brand.whatsappNumber}?text=${encoded}`;
}
