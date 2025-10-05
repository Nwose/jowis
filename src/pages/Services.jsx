import CanonicalTag from "../components/CanonicalTag";
import { ContactForm } from "../components/ContactForm";
import CosmicFooter from "../components/CosmicFooter";
import ProjectShowcase from "../components/ProjectShowcase";
import CosmicHero from "../components/service/CosmicHero";
import WhyUsSection from "../components/service/WhyUsSection";

export default function Home() {
  return (
    <>
      {/* ✅ Canonical tag for Services page */}
      <CanonicalTag url="https://www.jowistudio.com/services" />

      <main className="relative min-h-screen bg-black font-sans">
        <WhyUsSection />
        <CosmicHero />
        <ProjectShowcase />
        <ContactForm />
        <CosmicFooter />
      </main>
    </>
  );
}
