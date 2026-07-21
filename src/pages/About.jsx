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
        description="Meet the team behind Jowis Studio and the values that guide how we build websites, support ICT infrastructure, and help businesses in Akure, Nigeria grow with technology."
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
