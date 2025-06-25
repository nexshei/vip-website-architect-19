
import SEO from '../components/SEO';
import ServicesSection from '../components/ServicesSection';

const Services = () => {
  const servicesSchemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "VIP Protocol and Event Management Services",
    "provider": {
      "@type": "Organization",
      "name": "Sir Ole VVIP Protocol Ltd"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "VIP Protocol Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "VIP Protocol Services",
            "description": "Comprehensive VIP protocol and ceremonial services for high-profile events"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Event Management",
            "description": "Professional corporate event planning, coordination, and execution services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "VIP Security Services",
            "description": "Discreet and professional VIP security and close protection services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diplomatic Protocol",
            "description": "High-level diplomatic protocol and ceremonial services for government events"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="VIP Protocol Services | Corporate Events & Diplomatic Protocol - Sir Ole VVIP"
        description="Comprehensive VIP protocol services including corporate event management, diplomatic protocol, VIP security, and luxury hospitality services in Nairobi. Professional event coordination."
        keywords="VIP protocol services, corporate event management Nairobi, diplomatic protocol Kenya, VIP security services, luxury hospitality, professional ushering services, event coordination"
        url="https://sirolevvipprotocol.com/services"
        schemaData={servicesSchemaData}
      />
      <div className="pt-20">
        <ServicesSection />
      </div>
    </>
  );
};

export default Services;
