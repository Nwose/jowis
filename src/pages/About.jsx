import { ContactForm } from "../components/ContactForm";
import CosmicFooter from "../components/CosmicFooter";
import HeroSection from "../components/about/HeroSection";
import OurPromise from "../components/about/OurPromises";
import OurValues from "../components/about/OurValues";
import TeamMember from "../components/about/TeamMember";
import SEO from "../components/SEO";

export default function About() {
  return (
    <main className="relative min-h-screen bg-black font-sans">
      <SEO
        title="About Us | Jowis Studio"
        description="Meet the team behind Jowis Studio, an established Nigerian IT solutions and web development company, and the values that guide how we build websites, support ICT infrastructure, and deliver dependable technology for our clients."
        path="/about"
      />
      <HeroSection />
      <OurValues />
      <OurPromise />
      <TeamMember />
      <ContactForm />
      <CosmicFooter />
    </main>
  );
}
