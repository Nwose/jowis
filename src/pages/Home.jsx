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
        title="Jowis Studio | IT Solutions, Web Development & ICT Support in Nigeria"
        description="Jowis Studio is an established Nigerian IT solutions and web development company, delivering website design, ICT support, network setup, IT consulting, and email administration for businesses that need technology to work."
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
