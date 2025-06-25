import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const heroTexts = [
    "New Standard of Sophistication",
    "Pinnacle of Excellence",
    "Legacy of Distinction"
  ];

  // Enhanced hero photos collection with your new uploaded images
  const heroPhotos = [
    // Existing photos
    "/lovable-uploads/10c82e62-1255-46d1-bc7c-eaac26571dd0.png",
    "/lovable-uploads/cc5e796b-d6a3-4b75-9269-0d3919a8f16d.png",
    "/lovable-uploads/c2fca5bf-fa16-4aaa-b7b9-b08a8cf584df.png",
    "/lovable-uploads/bae22750-f71e-41f0-a5c7-2f6be59700a1.png",
    "/lovable-uploads/eb29c827-3393-42f6-83bc-bf998935ba5d.png",
    "/lovable-uploads/34c98434-5ae9-4d0c-b834-b055ea974ecf.png",
    // New uploaded photos for enhanced visual appeal
    "/lovable-uploads/aac3f7a9-ba36-4ed8-a16e-ace88dc00a86.png",
    "/lovable-uploads/b9ba68f8-b176-49d5-a8ff-c9f8318086aa.png",
    "/lovable-uploads/a986df73-48b9-47e1-9217-a017116e525b.png",
    "/lovable-uploads/106281aa-04c2-4533-92e5-e1044566520f.png",
    "/lovable-uploads/b7c270ed-d140-46b1-adc8-3123807ffd1a.png",
    "/lovable-uploads/9adfbdd8-7ff7-41c3-8228-65e5803640f3.png",
    "/lovable-uploads/2417aefe-5fed-43f0-b77b-4c8ee078ddcb.png"
  ];

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [heroTexts.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhotoIndex((prev) => (prev + 1) % heroPhotos.length);
    }, 3500); // Slightly slower transition for better visual impact
    return () => clearInterval(interval);
  }, [heroPhotos.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-luxury overflow-hidden">
      {/* Enhanced Sliding Photo Background with Ken Burns effect */}
      <div className="absolute inset-0 z-0">
        {heroPhotos.map((photo, index) => (
          <div
            key={photo}
            className={`absolute inset-0 transition-all duration-2000 ease-in-out ${
              index === currentPhotoIndex 
                ? 'opacity-70 scale-105' 
                : 'opacity-0 scale-100'
            }`}
          >
            <img
              src={photo}
              alt="VIP Protocol Service Excellence"
              className="w-full h-full object-cover object-center transition-transform duration-2000"
              style={{
                filter: 'brightness(0.6) contrast(1.2) saturate(1.1)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Enhanced Dark Overlay with Professional Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-luxury-black/70 via-luxury-black/50 to-luxury-black/80 z-1"></div>
      
      {/* Subtle Pattern Overlay for Premium Feel */}
      <div className="absolute inset-0 opacity-10 z-2" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Main Headline with Enhanced Typography */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-luxury-white mb-4 sm:mb-6 leading-tight px-2">
            <span className="block mb-2 sm:mb-4 drop-shadow-2xl">The Power for Your Event</span>
            <span className="text-gradient-gold block mt-2 transition-all duration-1000 ease-in-out transform text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-2xl animate-pulse">
              {heroTexts[currentTextIndex]}
            </span>
          </h1>

          {/* Enhanced Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-white/95 mb-6 sm:mb-8 max-w-4xl mx-auto leading-relaxed animate-fade-in delay-300 px-4 drop-shadow-lg font-light">
            Where luxury meets logistics. Experience flawless VVIP service that transforms every occasion into an unforgettable moment of excellence.
          </p>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-6 justify-center items-center mb-8 sm:mb-12 animate-fade-in delay-500 px-4">
            <Link to="/book-meeting" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto group bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-bold px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-luxury-gold/50 relative overflow-hidden rounded-full">
                <span className="relative z-10">Book VVIP Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToPortfolio}
              className="w-full sm:w-auto border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black px-8 sm:px-10 py-4 sm:py-5 text-base sm:text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm rounded-full font-semibold"
            >
              Discover Excellence
            </Button>
          </div>

          {/* Enhanced Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 sm:gap-10 mb-8 sm:mb-12 animate-fade-in delay-700 px-4">
            <div className="flex items-center justify-center space-x-3 text-luxury-white/95 group hover:text-luxury-gold transition-colors duration-300">
              <div className="w-3 h-3 bg-luxury-gold rounded-full flex-shrink-0 group-hover:animate-pulse"></div>
              <span className="text-sm font-semibold drop-shadow-sm">5+ Years Excellence</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-luxury-white/95 group hover:text-luxury-gold transition-colors duration-300">
              <div className="w-3 h-3 bg-luxury-gold rounded-full flex-shrink-0 group-hover:animate-pulse"></div>
              <span className="text-sm font-semibold drop-shadow-sm">24/7 Premium Support</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-luxury-white/95 group hover:text-luxury-gold transition-colors duration-300">
              <div className="w-3 h-3 bg-luxury-gold rounded-full flex-shrink-0 group-hover:animate-pulse"></div>
              <span className="text-sm font-semibold drop-shadow-sm">500+ VVIP Events</span>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={scrollToPortfolio}
              className="inline-flex flex-col items-center text-luxury-white/80 hover:text-luxury-gold transition-all duration-300 group"
            >
              <span className="text-xs sm:text-sm font-semibold mb-3 group-hover:scale-110 transition-transform drop-shadow-sm">Discover Excellence</span>
              <div className="relative">
                <ChevronDown size={24} className="sm:w-7 sm:h-7 animate-pulse" />
                <div className="absolute inset-0 bg-luxury-gold/40 rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="hidden lg:block absolute top-20 left-10 w-40 h-40 border-2 border-luxury-gold/30 rounded-full animate-pulse"></div>
      <div className="hidden lg:block absolute bottom-32 right-10 w-32 h-32 border-2 border-luxury-gold/40 rounded-full animate-pulse delay-1000"></div>
      <div className="hidden lg:block absolute top-1/2 left-20 w-6 h-6 bg-luxury-gold/20 rounded-full animate-float"></div>
      <div className="hidden lg:block absolute bottom-1/4 right-32 w-4 h-4 bg-luxury-gold/30 rounded-full animate-float delay-500"></div>
    </section>
  );
};

export default HeroSection;
