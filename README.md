# Arena Fitness — Landing Page

Landing page de alta conversão para a **Arena Fitness Academia** (Sobral/CE), construída com React + TypeScript + Vite + Tailwind CSS v4.

## Rodando o projeto

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173`.

Build de produção:

```bash
npm run build
npm run preview
```

## Estrutura

- `src/data/content.ts` — **edite aqui** para atualizar textos, telefone, WhatsApp, endereço, horários, planos, depoimentos e FAQ sem tocar nos componentes.
- `src/lib/whatsapp.ts` — helper que monta o link `wa.me` com mensagem pré-preenchida.
- `src/components/` — cada seção da página (Header, Hero, Benefícios, Modalidades, Planos, Depoimentos, Localização, FAQ, CTA final, Footer, botão flutuante do WhatsApp).
- `src/index.css` — tokens de marca (cores, fontes) definidos via `@theme` do Tailwind v4.

## Antes de publicar, ajuste:

1. **Número de WhatsApp** em `src/data/content.ts` (`whatsappNumber`) — hoje está usando o telefone fixo encontrado publicamente ((88) 3614-1069); troque pelo WhatsApp real da recepção.
2. **Fotos**: o Hero e as Modalidades usam imagens de banco (Unsplash) como placeholder. Substitua por fotos reais da academia e dos alunos para aumentar a conversão e a autenticidade.
3. **Depoimentos**: os três depoimentos em `content.ts` são ilustrativos — troque por relatos reais de alunos (idealmente com print/avaliação do Google).
4. **Planos e preços**: os valores em `content.ts` (`plans`) são placeholders — atualize com os preços reais praticados.
5. **Mapa**: o embed do Google Maps usa busca por nome/endereço; se preferir, gere o embed oficial pelo Google Maps ("Compartilhar" → "Incorporar um mapa") e cole a URL em `mapsEmbedUrl`.

## Identidade visual

Paleta preto + amarelo vibrante + dourado (confirmada pelo usuário como a identidade real da marca), com fonte condensada (Bebas Neue) nos títulos. Os tokens ficam em `src/index.css` (`@theme`): `--color-arena-yellow`, `--color-arena-gold` etc. — ajuste os valores hex ali para calibrar o tom exato do amarelo do logo.
