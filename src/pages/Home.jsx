import CanonicalTag from "../components/CanonicalTag";
import Hero from "../components/Hero";
import SubBase from "../components/SubBase";
import ServicesSection from "../components/ServicesSection";
import ProjectShowcase from "../components/ProjectShowcase";
import { ContactForm } from "../components/ContactForm";
import CosmicFooter from "../components/CosmicFooter";

export default function Home() {
  return (
    <>
      {/* ✅ Canonical tag for homepage */}
      <CanonicalTag url="https://www.jowistudio.com/" />


      <main className="relative min-h-screen bg-black font-sans">
        <Hero />
        <SubBase />
        <ServicesSection />
        <ProjectShowcase />
        <ContactForm />
        <CosmicFooter />
      </main>
    </>  
  );
}
