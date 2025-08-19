import { ContactForm } from "../components/ContactForm";
import CosmicFooter from "../components/CosmicFooter";
import ProjectShowcase from "../components/ProjectShowcase";
import CosmicHero from "../components/service/CosmicHero";
import WhyUsSection from "../components/service/WhyUsSection";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black font-sans">
      <WhyUsSection />
      <CosmicHero />
      <ProjectShowcase />
      <ContactForm />
      <CosmicFooter />
    </main>
  );
}
