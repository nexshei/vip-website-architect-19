
import HeroSection from '../components/HeroSection';
import PortfolioGallery from '../components/PortfolioGallery';
import WhyChooseUsSection from '../components/WhyChooseUsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import NewsletterSection from '../components/NewsletterSection';

const Index = () => {
  return (
    <div className="pt-20">
      <HeroSection />
      <div id="portfolio">
        <PortfolioGallery />
      </div>
      <WhyChooseUsSection />
      <TestimonialsSection />
      <NewsletterSection />
    </div>
  );
};

export default Index;
