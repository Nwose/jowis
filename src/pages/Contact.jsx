import OurPromise from "../components/about/OurPromises";
import Index from "../components/contact/Index";
import WorksSection from "../components/contact/WorkStation";
import { ContactForm } from "../components/ContactForm";
import CosmicFooter from "../components/CosmicFooter";
import SEO from "../components/SEO";

export default function Contact() {
  return (
    <main className="relative min-h-screen bg-black font-sans">
      <SEO
        title="Contact Us | Jowis Studio"
        description="Get in touch with Jowis Studio — our office is in Akure, Ondo State, and we work with clients across Nigeria and beyond. Tell us about your website, ICT support, or network project and we'll get back to you fast."
        path="/contact"
      />
      <Index />
      <WorksSection />
      <OurPromise />
      <ContactForm />
      <CosmicFooter />
    </main>
  );
}
