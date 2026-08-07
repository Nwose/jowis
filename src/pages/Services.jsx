import { ContactForm } from "../components/ContactForm";
import CosmicFooter from "../components/CosmicFooter";
import ProjectShowcase from "../components/ProjectShowcase";
import DetailedServicesSection from "../components/service/DetailedServicesSection";
import WhyUsSection from "../components/service/WhyUsSection";
import PartnersSection from "../components/service/PartnersSection";
import ClientsCarousel from "../components/service/ClientsCarousel";
import SEO from "../components/SEO";
import { services } from "../data/servicesData";

const SITE_URL = "https://www.jowistudio.com";

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: services.map((service, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Service",
      name: service.title,
      description: service.description,
      provider: {
        "@type": "Organization",
        name: "Jowis Studio",
        url: SITE_URL,
      },
      areaServed: "NG",
    },
  })),
};

export default function Services() {
  return (
    <main className="relative min-h-screen bg-black font-sans">
      <SEO
        title="Our Services | Jowis Studio"
        description="Website design & development, branding, IT consulting, network setup & management, ICT support, and email administration (Zoho & Microsoft) — the core services Jowis Studio delivers for businesses across Nigeria."
        path="/services"
      />
      <script type="application/ld+json">
        {JSON.stringify(servicesJsonLd)}
      </script>
      <WhyUsSection />
      <DetailedServicesSection />
      <PartnersSection />
      <ClientsCarousel />
      <ProjectShowcase />
      <ContactForm />
      <CosmicFooter />
    </main>
  );
}
