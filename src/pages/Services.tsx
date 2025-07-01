
import SEO from '../components/SEO';
import ServicesSection from '../components/ServicesSection';

const Services = () => {
  const servicesSchemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "VIP Protocol and Security Services",
    "provider": {
      "@type": "Organization",
      "name": "Sir Ole VVIP Protocol Ltd",
      "url": "https://sirolevvipprotocol.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Nairobi",
        "addressCountry": "Kenya"
      }
    },
    "areaServed": {
      "@type": "Country",
      "name": "Kenya"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Security and Protocol Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Executive Protection Services Kenya",
            "description": "Professional bodyguard and close protection services for executives, VIPs, and high-profile individuals throughout Kenya. Trained security personnel with extensive experience in threat assessment and risk management.",
            "serviceType": "Security Service",
            "category": "Executive Protection"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "VIP Transport Services Nairobi",
            "description": "Secure VIP transportation services with armored vehicles and professional drivers. Safe escort services for VIPs, diplomats, and corporate executives in Nairobi and throughout Kenya.",
            "serviceType": "Transportation Service",
            "category": "VIP Transport"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Corporate Security Services Kenya",
            "description": "Comprehensive corporate security solutions including risk assessment, security consulting, and on-site security personnel for businesses and corporations in Kenya.",
            "serviceType": "Security Service",
            "category": "Corporate Security"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Event Security Management Kenya",
            "description": "Professional event security services for corporate events, conferences, weddings, and private functions. Experienced security team for crowd control and venue protection.",
            "serviceType": "Event Service",
            "category": "Event Security"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Diplomatic Protocol Services Kenya",
            "description": "High-level diplomatic protocol services for government officials, ambassadors, and international delegations. Professional ceremonial and protocol management for official events.",
            "serviceType": "Protocol Service",
            "category": "Diplomatic Protocol"
          }
        }
      ]
    }
  };

  return (
    <>
      <SEO
        title="Professional Security Services Kenya | VIP Protection & Corporate Security - Sir Ole"
        description="Comprehensive security services in Kenya including executive protection, VIP transport, corporate security, event management, and diplomatic protocol. Professional bodyguard services and security consulting in Nairobi."
        keywords="security services Kenya, executive protection Nairobi, bodyguard services Kenya, VIP transport security, corporate security services Kenya, event security management, diplomatic protocol services Kenya, close protection Kenya, personal security Kenya, security consulting Nairobi"
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
