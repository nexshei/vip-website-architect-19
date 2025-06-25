
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

  // Updated hero photos collection with the new uploaded images
  const heroPhotos = [
    "/lovable-uploads/10c82e62-1255-46d1-bc7c-eaac26571dd0.png",
    "/lovable-uploads/cc5e796b-d6a3-4b75-9269-0d3919a8f16d.png",
    "/lovable-uploads/c2fca5bf-fa16-4aaa-b7b9-b08a8cf584df.png",
    "/lovable-uploads/bae22750-f71e-41f0-a5c7-2f6be59700a1.png",
    "/lovable-uploads/eb29c827-3393-42f6-83bc-bf998935ba5d.png",
    "/lovable-uploads/34c98434-5ae9-4d0c-b834-b055ea974ecf.png"
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
    }, 4000); // Slightly faster transition for better visual flow
    return () => clearInterval(interval);
  }, [heroPhotos.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-luxury overflow-hidden">
      {/* Enhanced Sliding Photo Background with better aspect ratio handling */}
      <div className="absolute inset-0 z-0">
        {heroPhotos.map((photo, index) => (
          <div
            key={photo}
            className={`absolute inset-0 transition-opacity duration-1500 ease-in-out ${
              index === currentPhotoIndex 
                ? 'opacity-60' 
                : 'opacity-0'
            }`}
          >
            <img
              src={photo}
              alt="VIP Protocol Service"
              className="w-full h-full object-cover object-center"
              style={{
                filter: 'brightness(0.7) contrast(1.1)',
              }}
            />
          </div>
        ))}
      </div>

      {/* Enhanced Dark Overlay with Gradient for Better Text Visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-luxury-black/60 via-luxury-black/50 to-luxury-black/70 z-1"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-luxury-white mb-4 sm:mb-6 leading-tight px-2">
            <span className="block mb-2 sm:mb-4 drop-shadow-lg">The Power for Your Event</span>
            <span className="text-gradient-gold block mt-2 transition-all duration-1000 ease-in-out transform text-2xl sm:text-3xl md:text-4xl lg:text-5xl drop-shadow-lg">
              {heroTexts[currentTextIndex]}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-white/95 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300 px-4 drop-shadow-md">
            Where luxury meets logistics. Experience flawless VVIP service that transforms every occasion into an unforgettable moment of excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center mb-8 sm:mb-12 animate-fade-in delay-500 px-4">
            <Link to="/book-meeting" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto group bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-luxury-gold/40 relative overflow-hidden">
                <span className="relative z-10">Book VVIP Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="outline" 
              onClick={scrollToPortfolio}
              className="w-full sm:w-auto border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 backdrop-blur-sm"
            >
              Discover Excellence
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 mb-8 sm:mb-12 animate-fade-in delay-700 px-4">
            <div className="flex items-center justify-center space-x-2 text-luxury-white/90">
              <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium drop-shadow-sm">5+ Years Excellence</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-luxury-white/90">
              <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium drop-shadow-sm">24/7 Premium Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-luxury-white/90">
              <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium drop-shadow-sm">500+ VVIP Events</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={scrollToPortfolio}
              className="inline-flex flex-col items-center text-luxury-white/80 hover:text-luxury-gold transition-all duration-300 group"
            >
              <span className="text-xs sm:text-sm font-medium mb-2 group-hover:scale-110 transition-transform drop-shadow-sm">Discover Excellence</span>
              <div className="relative">
                <ChevronDown size={20} className="sm:w-6 sm:h-6 animate-pulse" />
                <div className="absolute inset-0 bg-luxury-gold/30 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Simplified decorative elements for better performance */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 border-2 border-luxury-gold/30 rounded-full animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-32 right-10 w-24 h-24 border-2 border-luxury-gold/40 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
