# Arena Fitness — Landing Page

Landing page de alta conversão para a **Arena Fitness Academia** (Redenção/CE), construída com React + TypeScript + Vite + Tailwind CSS v4.

## Rodando o projeto

```bash
pnpm install
pnpm dev
```

Acesse `http://localhost:5173`.

Build de produção:

```bash
pnpm build
pnpm preview
```

Outros comandos:

```bash
pnpm lint   # oxlint
```

## Estrutura

- `src/data/content.ts` — **edite aqui** para atualizar textos, telefone, WhatsApp, endereço, horários, planos, depoimentos, FAQ e IDs de analytics, sem tocar nos componentes.
- `src/lib/whatsapp.ts` — helper que monta o link `wa.me` com mensagem pré-preenchida.
- `src/lib/analytics.ts` — carrega GA4 e Meta Pixel (só se os IDs estiverem preenchidos em `content.ts`) e expõe `trackWhatsAppClick` para eventos de conversão.
- `src/components/` — cada seção da página (Header, Hero, prova social, Benefícios, Modalidades, Planos, Depoimentos, Localização, FAQ, CTA final, Footer, botão flutuante do WhatsApp, banner de cookies).
- `src/components/icons/` — ícones de marca (WhatsApp, Instagram) que não existem no lucide-react.
- `src/hooks/` — `useInView` (scroll reveal) e `useSmoothScroll` (scroll suave via Lenis).
- `src/pages/PrivacyPolicy.tsx` — conteúdo da política de privacidade, servida como entry separada (`privacidade.html`, ver `vite.config.ts`).
- `src/index.css` — tokens de marca (cores, fontes) definidos via `@theme` do Tailwind v4.
- `public/` — favicon, imagem de Open Graph, `robots.txt` e `sitemap.xml`.

## Funcionalidades

- **Planos e Modalidades**: no mobile/tablet (`< lg`), viram um carrossel de cards empilhados (Swiper, efeito `cards`) com loop infinito e setas de navegação; no desktop, grid estático.
- **Analytics com consentimento**: GA4 e Meta Pixel só carregam depois que o visitante aceita cookies no banner (`CookieConsent`); os scripts ficam inativos enquanto os IDs em `content.ts` estiverem vazios.
- **SEO**: JSON-LD (`LocalBusiness`), canonical, Open Graph/Twitter card e `sitemap.xml`/`robots.txt` em `index.html` e `public/`.
- **Política de privacidade**: página estática separada em `privacidade.html`, com build próprio via Vite multi-entry.

## Antes de publicar, ajuste:

1. **IDs de analytics** em `src/data/content.ts` (`ga4MeasurementId`, `metaPixelId`) — deixe em branco até criar as contas reais; enquanto vazios, nenhum script é carregado.
2. **Fotos**: o Hero e as Modalidades usam imagens de banco (Unsplash) como placeholder. Substitua por fotos reais da academia e dos alunos para aumentar a conversão e a autenticidade.
3. **Depoimentos**: os três depoimentos em `content.ts` são ilustrativos — troque por relatos reais de alunos (idealmente com print/avaliação do Google).
4. **Planos e preços**: os valores em `content.ts` (`plans`) são placeholders — atualize com os preços reais praticados.
5. **Mapa**: o embed do Google Maps usa busca por nome/endereço; se preferir, gere o embed oficial pelo Google Maps ("Compartilhar" → "Incorporar um mapa") e cole a URL em `mapsEmbedUrl`.

## Identidade visual

Paleta preto + amarelo vibrante + dourado (confirmada pelo usuário como a identidade real da marca), com fonte condensada (Bebas Neue) nos títulos. Os tokens ficam em `src/index.css` (`@theme`): `--color-arena-yellow`, `--color-arena-gold` etc. — ajuste os valores hex ali para calibrar o tom exato do amarelo do logo.
