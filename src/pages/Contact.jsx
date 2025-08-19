import OurPromise from "../components/about/OurPromises";
import Index from "../components/contact/Index";
import WorksSection from "../components/contact/WorkStation";
import { ContactForm } from "../components/ContactForm";
import CosmicFooter from "../components/CosmicFooter";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black font-sans">
      <Index />
      <WorksSection />
      <OurPromise />
      <ContactForm />
      <CosmicFooter />
    </main>
  );
}
