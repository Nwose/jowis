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
        description="Website design & development, branding, IT consulting, network setup & management, ICT support, and email administration (Zoho & Microsoft) — the core services Jowis Studio delivers for businesses across Nigeria."
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
