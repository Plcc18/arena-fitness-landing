import { Benefits } from "./components/Benefits";
import { CTASection } from "./components/CTASection";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Location } from "./components/Location";
import { Modalities } from "./components/Modalities";
import { Plans } from "./components/Plans";
import { SocialProof } from "./components/SocialProof";
import { Testimonials } from "./components/Testimonials";
import { WhatsAppButton } from "./components/WhatsAppButton";

function App() {
  return (
    <div className="min-h-screen bg-arena-bg">
      <Header />
      <main>
        <Hero />
        <SocialProof />
        <Benefits />
        <Modalities />
        <Plans />
        <Testimonials />
        <Location />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
