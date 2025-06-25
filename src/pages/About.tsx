
import SEO from '../components/SEO';
import AboutSection from '../components/AboutSection';
import VisionMissionSection from '../components/VisionMissionSection';

const About = () => {
  const aboutSchemaData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Sir Ole VVIP Protocol Ltd",
      "description": "Established luxury protocol company with years of experience in VIP services, event management, and diplomatic protocol in Nairobi, Kenya.",
      "foundingDate": "2020",
      "founder": {
        "@type": "Person",
        "name": "Sir Ole"
      }
    }
  };

  return (
    <>
      <SEO
        title="About Sir Ole VVIP Protocol Ltd - Our Story & Mission | Luxury Event Services"
        description="Learn about Sir Ole VVIP Protocol Ltd's journey in providing exceptional luxury protocol services, VIP security, and event management in Nairobi. Discover our mission and values."
        keywords="about Sir Ole protocol, luxury event company history, VIP services Nairobi, protocol company mission, professional event management team"
        url="https://sirolevvipprotocol.com/about"
        schemaData={aboutSchemaData}
      />
      <div className="pt-20">
        <AboutSection />
        <VisionMissionSection />
      </div>
    </>
  );
};

export default About;
