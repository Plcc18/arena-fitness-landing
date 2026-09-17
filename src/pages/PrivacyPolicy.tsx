import { brand } from "../data/content";
import { Footer } from "../components/Footer";
import { whatsappUrl } from "../lib/whatsapp";

const lastUpdated = "17 de setembro de 2026";

export function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-arena-bg">
      <header className="border-b border-arena-border">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4 sm:px-6">
          <a href="/" className="flex items-center gap-2 font-display text-2xl tracking-wide text-arena-ink">
            <img src="/arena-icon.png" alt="" className="h-9 w-9 object-contain" />
            ARENA<span className="text-arena-yellow">FITNESS</span>
          </a>
          <a href="/" className="text-sm font-medium text-arena-muted transition-colors duration-500 hover:text-arena-ink">
            Voltar para o site
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <span className="text-sm font-semibold uppercase tracking-wider text-arena-yellow">Legal</span>
        <h1 className="font-display mt-3 text-4xl text-arena-ink sm:text-5xl">Política de Privacidade</h1>
        <p className="mt-4 text-sm text-arena-muted">Última atualização: {lastUpdated}</p>

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-arena-muted">
          <section>
            <h2 className="text-lg font-bold text-arena-ink">1. Quem somos</h2>
            <p className="mt-2">
              Esta política se aplica ao site da {brand.fullName}, localizada em {brand.address}. Ela explica quais
              dados coletamos quando você visita este site e como você pode exercer seus direitos previstos na Lei
              Geral de Proteção de Dados (LGPD, Lei 13.709/2018).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-arena-ink">2. Quais dados coletamos</h2>
            <p className="mt-2">Este site não possui formulários de cadastro. Os dados que podem ser tratados são:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong className="text-arena-ink">Dados de navegação</strong> (páginas visitadas, tempo de
                permanência, dispositivo e origem do acesso), coletados por ferramentas de análise como Google
                Analytics, quando você aceita o uso de cookies no banner exibido no site.
              </li>
              <li>
                <strong className="text-arena-ink">Dados de conversas via WhatsApp</strong>: ao clicar em um botão
                "Falar no WhatsApp", você é direcionado ao aplicativo WhatsApp para iniciar uma conversa diretamente
                com a nossa equipe. Essa conversa acontece na plataforma do WhatsApp, sujeita à política de
                privacidade da Meta/WhatsApp — nós não temos acesso a esses dados através deste site.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-arena-ink">3. Cookies e ferramentas de análise</h2>
            <p className="mt-2">
              Ao aceitar cookies no banner exibido ao acessar o site, podemos utilizar o Google Analytics e/ou o Meta
              Pixel para entender como os visitantes usam o site (por exemplo, quais páginas são mais acessadas e
              quantas pessoas clicam nos botões de WhatsApp). Essas ferramentas usam cookies e identificadores
              anônimos de navegador. Você pode recusar o uso de cookies não essenciais no próprio banner, ou
              limpá-los a qualquer momento nas configurações do seu navegador.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-arena-ink">4. Com quem compartilhamos dados</h2>
            <p className="mt-2">
              Não vendemos nem compartilhamos seus dados com terceiros para fins de marketing. Os dados de navegação
              coletados com o seu consentimento são processados pelo Google (Google Analytics) e/ou pela Meta (Meta
              Pixel), conforme as políticas de privacidade dessas empresas.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-arena-ink">5. Seus direitos</h2>
            <p className="mt-2">De acordo com a LGPD, você tem direito a:</p>
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>Confirmar a existência de tratamento dos seus dados;</li>
              <li>Acessar, corrigir ou solicitar a exclusão dos seus dados;</li>
              <li>Revogar o consentimento dado para uso de cookies a qualquer momento;</li>
              <li>Solicitar informações sobre com quem compartilhamos seus dados.</li>
            </ul>
            <p className="mt-2">
              Para exercer qualquer um desses direitos, entre em contato pelo telefone{" "}
              <a href={brand.phoneHref} className="font-semibold text-arena-ink hover:text-arena-yellow">
                {brand.phoneDisplay}
              </a>{" "}
              ou pelo{" "}
              <a
                href={whatsappUrl("Olá! Gostaria de falar sobre meus dados / privacidade.")}
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-arena-ink hover:text-arena-yellow"
              >
                WhatsApp
              </a>{" "}
              da recepção.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-arena-ink">6. Alterações nesta política</h2>
            <p className="mt-2">
              Podemos atualizar esta política periodicamente para refletir mudanças nas ferramentas que usamos ou na
              legislação aplicável. A data da última atualização está sempre indicada no topo desta página.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
