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

  // Extended hero photos collection with all existing and new uploaded images
  const heroPhotos = [
    "/lovable-uploads/2835e50b-8540-4a20-b379-264f22d6a1e9.png",
    "/lovable-uploads/1c51a4d7-6e98-495a-b619-d798e08c8b19.png",
    "/lovable-uploads/ebbab88b-0596-40bf-b0b7-2f7812c15cde.png",
    "/lovable-uploads/3c79f6f7-1682-4d4f-954c-ea88a6d0cb8e.png",
    "/lovable-uploads/39f351a6-b6df-4ed8-9267-ec7d84f67b55.png",
    "/lovable-uploads/608158d2-48ae-425b-a7d8-41d1453d06f4.png",
    "/lovable-uploads/c0d7cb75-3be2-4849-984d-aba7507a74a7.png",
    "/lovable-uploads/d4fdfea7-8670-4110-9791-f0516ec43e1e.png",
    "/lovable-uploads/48401841-d864-4dae-a945-f26d5cb259d6.png",
    "/lovable-uploads/6ff20f4d-d952-4b11-92d2-2f27d64dcc6b.png",
    "/lovable-uploads/7180f2a2-8891-4fbe-b526-982d6e0b1115.png",
    "/lovable-uploads/b4119590-f054-4bc0-a7a4-918f72e228c4.png",
    "/lovable-uploads/a31b9767-b414-4e49-8c46-114c537e874d.png",
    "/lovable-uploads/c4bf5383-4aef-4c73-8242-83c4de363bfa.png",
    "/lovable-uploads/90867b2a-97b6-45dd-9957-212c10041118.png",
    "/lovable-uploads/ed8ef56f-af69-4845-8d6d-f82dc85bd2ec.png",
    "/lovable-uploads/2c464c3c-77bd-401b-9eb1-551ce786b145.png",
    "/lovable-uploads/9b257c2a-c3de-4707-8212-a13c99b9cce7.png",
    "/lovable-uploads/3d39933e-766d-4f71-b99f-200eda86b8d9.png",
    "/lovable-uploads/c0f0c868-ff27-41b0-9da0-2920d4a91c4f.png",
    "/lovable-uploads/0db3978f-fddb-459e-b8bb-85802bf3c090.png",
    "/lovable-uploads/349eca6a-8be0-41b8-b658-6812782f24bd.png",
    "/lovable-uploads/ebe0fd91-a90a-4892-918e-0ba9efc3f528.png",
    "/lovable-uploads/3f9c5810-d649-4491-b362-4c8c4e225b10.png",
    "/lovable-uploads/17424ed7-79a7-4d95-aca3-6ee75c76a993.png",
    "/lovable-uploads/3f496f60-258f-43f1-9bc8-45a2caf5c12c.png",
    "/lovable-uploads/6c652822-67dd-4e67-bda3-699b33f9443b.png",
    "/lovable-uploads/603a03a5-c27b-4781-a1d6-4a19cc5e1f82.png",
    "/lovable-uploads/9d6016dd-51b9-4c53-9522-b10dc988cdf6.png"
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
    }, 4000);
    return () => clearInterval(interval);
  }, [heroPhotos.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-luxury overflow-hidden">
      {/* Optimized Sliding Photo Background with Mobile-Friendly Sizing */}
      <div className="absolute inset-0 z-0">
        {heroPhotos.map((photo, index) => (
          <div
            key={photo}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentPhotoIndex 
                ? 'opacity-50 sm:opacity-40 scale-105' 
                : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url('${photo}')`,
              backgroundSize: window.innerWidth < 640 ? 'cover' : 'cover',
              backgroundPosition: window.innerWidth < 640 ? 'center top' : 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </div>

      {/* Dark Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-luxury-black/40 sm:bg-luxury-black/50 z-1"></div>

      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10 z-2">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEFGMzciIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] repeat"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-luxury-white mb-4 sm:mb-6 leading-tight px-2">
            <span className="block mb-2 sm:mb-4">The Power for Your Event</span>
            <span className="text-gradient-gold block mt-2 transition-all duration-1000 ease-in-out transform text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {heroTexts[currentTextIndex]}
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300 px-4">
            Where luxury meets logistics. Experience flawless VIP service that transforms every occasion into an unforgettable moment of excellence.
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
            <div className="flex items-center justify-center space-x-2 text-luxury-white/80">
              <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium">5+ Years Excellence</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-luxury-white/80">
              <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium">24/7 Premium Support</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-luxury-white/80">
              <div className="w-2 h-2 bg-luxury-gold rounded-full flex-shrink-0"></div>
              <span className="text-sm font-medium">500+ VIP Events</span>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={scrollToPortfolio}
              className="inline-flex flex-col items-center text-luxury-white/70 hover:text-luxury-gold transition-all duration-300 group"
            >
              <span className="text-xs sm:text-sm font-medium mb-2 group-hover:scale-110 transition-transform">Discover Excellence</span>
              <div className="relative">
                <ChevronDown size={20} className="sm:w-6 sm:h-6 animate-pulse" />
                <div className="absolute inset-0 bg-luxury-gold/30 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500"></div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 border-2 border-luxury-gold/30 rounded-full animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-32 right-10 w-24 h-24 border-2 border-luxury-gold/40 rounded-full animate-pulse delay-1000"></div>
      <div className="hidden md:block absolute top-1/2 left-4 w-16 h-16 border border-luxury-gold/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="hidden lg:block absolute bottom-1/4 right-1/4 w-8 h-8 bg-luxury-gold/20 rounded-full animate-ping delay-2000"></div>
      
      {/* Mobile decorative elements */}
      <div className="sm:hidden absolute top-24 right-4 w-16 h-16 border border-luxury-gold/20 rounded-full animate-pulse"></div>
      <div className="sm:hidden absolute bottom-24 left-4 w-12 h-12 border border-luxury-gold/30 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
