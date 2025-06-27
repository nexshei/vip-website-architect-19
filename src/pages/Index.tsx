
import SEO from '../components/SEO';
import HeroSection from '../components/HeroSection';
import PortfolioGallery from '../components/PortfolioGallery';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import NewsletterSection from '../components/NewsletterSection';

const Index = () => {
  const homeSchemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sir Ole VVIP Protocol Ltd",
    "url": "https://sirolevvipprotocol.com",
    "logo": "https://sirolevvipprotocol.com/lovable-uploads/90cb1db2-764a-49f9-bfac-59422a9850b8.png",
    "description": "Premier luxury protocol, VIP security, ushering, and hospitality company in Nairobi offering distinguished event management services.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Golden Court, Silicon Valley Estate, Eastern Bypass",
      "addressLocality": "Nairobi",
      "addressCountry": "Kenya"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+254712063461",
      "email": "info@sirolevvipprotocolltd.co.ke",
      "contactType": "customer service"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50"
    }
  };

  return (
    <>
      <SEO
        title="Sir Ole VVIP Protocol Ltd - Premier Luxury Protocol & VIP Services in Nairobi"
        description="Leading luxury protocol, VIP security, ushering, and hospitality company in Nairobi. Offering distinguished event management, diplomatic protocol, and premium concierge services with unmatched sophistication."
        keywords="VIP protocol services Nairobi, luxury event management Kenya, diplomatic protocol services, VIP security Nairobi, corporate event ushering, premium hospitality services, luxury concierge Kenya"
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
