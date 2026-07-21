import { ContactForm } from "../components/ContactForm";
import CosmicFooter from "../components/CosmicFooter";
import ProjectShowcase from "../components/ProjectShowcase";
import CosmicHero from "../components/service/CosmicHero";
import WhyUsSection from "../components/service/WhyUsSection";
import SEO from "../components/SEO";

export default function Services() {
  return (
    <main className="relative min-h-screen bg-black font-sans">
      <SEO
        title="Our Services | Jowis Studio"
        description="Website design & development, ICT support, network setup & management, and IT consulting — Jowis Studio's core services for businesses ready to grow with reliable technology."
        path="/services"
      />
      <WhyUsSection />
      <CosmicHero />
      <ProjectShowcase />
      <ContactForm />
      <CosmicFooter />
    </main>
  );
}
