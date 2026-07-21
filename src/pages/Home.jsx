import Hero from "../components/Hero";
import SubBase from "../components/SubBase";
import ServicesSection from "../components/ServicesSection";
import ProjectShowcase from "../components/ProjectShowcase";
import { ContactForm } from "../components/ContactForm";
import CosmicFooter from "../components/CosmicFooter";
import SEO from "../components/SEO";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black font-sans">
      <SEO
        title="Jowis Studio | Web Development & ICT Support in Akure, Nigeria"
        description="Jowis Studio designs fast, mobile-ready websites and delivers reliable ICT support, network setup, and IT consulting for growing businesses in Akure, Ondo State and beyond."
        path="/"
      />
      <Hero />
      <SubBase />
      <ServicesSection />
      <ProjectShowcase />
      <ContactForm />
      <CosmicFooter />
    </main>
  );
}
