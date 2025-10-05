import CanonicalTag from "../components/CanonicalTag";
import { ContactForm } from "../components/ContactForm";
import CosmicFooter from "../components/CosmicFooter";
import HeroSection from "../components/about/HeroSection";
import OurPromise from "../components/about/OurPromises";
import OurValues from "../components/about/OurValues";
import TeamMember from "../components/about/TeamMember";

export default function Home() {
  return (
    <>
      {/* ✅ Canonical tag for About page */}
      <CanonicalTag url="https://www.jowistudio.com/about" />

      <main className="relative min-h-screen bg-black font-sans">
        <HeroSection />
        <OurValues />
        <OurPromise />
        <TeamMember />
        <ContactForm />
        <CosmicFooter />
      </main>
    </>
  );
}
