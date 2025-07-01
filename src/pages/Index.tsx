
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import PortfolioGallery from '../components/PortfolioGallery';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import NewsletterSection from '../components/NewsletterSection';

const Index = () => {
  const homeSchemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://sirolevvipprotocol.com/#organization",
        "name": "Sir Ole VVIP Protocol Ltd",
        "alternateName": ["Sirolev VIP Protocol", "Sir Ole Protocol"],
        "url": "https://sirolevvipprotocol.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://sirolevvipprotocol.com/lovable-uploads/90cb1db2-764a-49f9-bfac-59422a9850b8.png",
          "width": 300,
          "height": 300
        },
        "description": "Leading VIP protocol, executive protection, corporate security, and event management company in Kenya providing professional bodyguard services, VIP transport, and diplomatic protocol solutions.",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Golden Court, Silicon Valley Estate, Eastern Bypass",
          "addressLocality": "Nairobi",
          "addressRegion": "Nairobi County",
          "postalCode": "00100",
          "addressCountry": "Kenya"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -1.286389,
          "longitude": 36.817223
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+254712063461",
            "email": "info@sirolevvipprotocolltd.co.ke",
            "contactType": "customer service",
            "availableLanguage": ["English", "Swahili"],
            "areaServed": "Kenya"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/sirolevvipprotocol",
          "https://www.instagram.com/sirolevvipprotocol",
          "https://www.linkedin.com/company/sirolevvipprotocol"
        ],
        "foundingDate": "2020",
        "numberOfEmployees": "50-100",
        "industry": "Security Services",
        "serviceArea": {
          "@type": "Place",
          "name": "Kenya",
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": -0.0236,
            "longitude": 37.9062
          }
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "VIP Protocol and Security Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Executive Protection Services",
                "description": "Professional bodyguard and close protection services for VIPs, executives, and high-profile individuals in Kenya",
                "serviceType": "Security Service",
                "provider": {
                  "@id": "https://sirolevvipprotocol.com/#organization"
                }
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "VIP Transport Services",
                "description": "Secure VIP transportation and escort services throughout Kenya",
                "serviceType": "Transportation Service"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Corporate Security Services",
                "description": "Comprehensive corporate security solutions and risk management for businesses in Kenya",
                "serviceType": "Security Service"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Event Security Management",
                "description": "Professional event security and crowd management for corporate and private events",
                "serviceType": "Event Service"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Diplomatic Protocol Services",
                "description": "High-level diplomatic protocol and ceremonial services for government and international events",
                "serviceType": "Protocol Service"
              }
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "bestRating": "5",
          "ratingCount": "127",
          "reviewCount": "89"
        },
        "knowsAbout": [
          "VIP Security Kenya",
          "Executive Protection",
          "Corporate Security",
          "Event Management",
          "Diplomatic Protocol",
          "Close Protection",
          "Risk Assessment",
          "Threat Analysis",
          "VIP Transport",
          "Security Consultancy"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://sirolevvipprotocol.com/#localbusiness",
        "name": "Sir Ole VVIP Protocol Ltd",
        "image": "https://sirolevvipprotocol.com/lovable-uploads/128c46de-f529-4c6d-9c43-0e87592a70ba.png",
        "telephone": "+254712063461",
        "email": "info@sirolevvipprotocolltd.co.ke",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Golden Court, Silicon Valley Estate, Eastern Bypass",
          "addressLocality": "Nairobi",
          "addressRegion": "Nairobi County",
          "postalCode": "00100",
          "addressCountry": "KE"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": -1.286389,
          "longitude": 36.817223
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "08:00",
            "closes": "18:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "09:00",
            "closes": "17:00"
          }
        ],
        "priceRange": "$$$$",
        "currenciesAccepted": "KES, USD",
        "paymentAccepted": "Cash, Credit Card, Bank Transfer"
      },
      {
        "@type": "WebSite",
        "@id": "https://sirolevvipprotocol.com/#website",
        "url": "https://sirolevvipprotocol.com",
        "name": "Sir Ole VVIP Protocol Ltd",
        "description": "Premier VIP protocol, executive protection, and security services in Kenya",
        "publisher": {
          "@id": "https://sirolevvipprotocol.com/#organization"
        },
        "inLanguage": "en-KE",
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://sirolevvipprotocol.com/search?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <>
      <SEO
        title="VIP Protocol Services Kenya | Executive Protection & Event Security - Sir Ole VVIP"
        description="Leading VIP protocol, executive protection, corporate security, and event management company in Kenya. Professional bodyguard services, VIP transport, diplomatic protocol, and close protection in Nairobi. ISO certified security solutions."
        keywords="VIP protocol services Kenya, executive protection Nairobi, bodyguard services Kenya, corporate security Nairobi, VIP transport Kenya, close protection officer Kenya, event security services, diplomatic protocol Kenya, presidential security Kenya, VIP security company Nairobi"
        url="https://sirolevvipprotocol.com/"
        schemaData={homeSchemaData}
      />
      <div className="pt-20">
        <HeroSection />
        <div id="portfolio">
          <PortfolioGallery isHomepage={true} />
        </div>
        <WhyChooseUsSection />
        <TestimonialsSection />
        <NewsletterSection />
      </div>
    </>
  );
};

export default Index;
