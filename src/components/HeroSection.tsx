
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Play, Pause } from 'lucide-react';

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const heroTexts = [
    "New Standard of Sophistication",
    "Pinnacle of Excellence",
    "Legacy of Distinction"
  ];

  const heroPhotos = [
    "/lovable-uploads/2329957a-d7b8-4f7d-972b-f79e1a8b71c1.png",
    "/lovable-uploads/f71bd9cd-c4c9-4a59-a24d-a6e49d984afe.png",
    "/lovable-uploads/6e96cbc3-ee8c-4b1d-9a6b-90f007484103.png",
    "/lovable-uploads/b497ba4d-222d-4316-97e0-44f8c7702e39.png",
    "/lovable-uploads/708a5110-0565-429e-992d-87435f5589f7.png",
    "/lovable-uploads/475bce6f-35e6-4346-8222-5a767e5436d8.png",
    "/lovable-uploads/d084cfa3-6cee-48c5-9c3a-56d0feda1b64.png",
    "/lovable-uploads/346ca5d4-e00c-4bf5-b69f-9323b41f5a0d.png",
    "/lovable-uploads/a5e3f981-4aeb-4cda-9adf-1b029a56bb53.png",
    "/lovable-uploads/af01b67f-4af7-452d-b158-b89ae3a59f89.png",
    "/lovable-uploads/6864805a-44c1-40a3-8732-fda9a70877a2.png",
    "/lovable-uploads/fbad488a-e195-4543-ae37-1a3c1311b2f0.png",
    "/lovable-uploads/8e33446b-211d-488c-b275-c3708205f324.png"
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
      {/* Mobile-Optimized Sliding Photo Background */}
      <div className="absolute inset-0 z-0">
        {heroPhotos.map((photo, index) => (
          <div
            key={photo}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentPhotoIndex 
                ? 'opacity-60 sm:opacity-40 scale-105 sm:scale-110' 
                : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url('${photo}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              backgroundAttachment: 'fixed'
            }}
          />
        ))}
        
        {/* Video Overlay (Hidden on mobile for performance) */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className={`hidden sm:block w-full h-full object-cover transition-opacity duration-500 ${
            isVideoPlaying ? 'opacity-20' : 'opacity-0'
          }`}
        >
          <source src="/api/placeholder/video/luxury-event.mp4" type="video/mp4" />
        </video>
        
        {/* Video Controls (Hidden on mobile) */}
        <button
          onClick={() => setIsVideoPlaying(!isVideoPlaying)}
          className="hidden sm:block absolute top-4 right-4 z-10 bg-luxury-black/50 hover:bg-luxury-black/70 text-luxury-white p-2 rounded-full transition-all duration-300"
        >
          {isVideoPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
      </div>

      {/* Reduced Dark Overlay for Better Mobile Visibility */}
      <div className="absolute inset-0 bg-luxury-black/30 sm:bg-luxury-black/40 z-1"></div>

      {/* Background Pattern Overlay (Simplified for mobile) */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10 z-2">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENEFGMzciIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIxIi8+PC9nPjwvZz48L3N2Zz4=')] repeat"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Mobile-Optimized Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-playfair font-bold text-luxury-white mb-4 sm:mb-6 leading-tight px-2">
            <span className="block mb-2 sm:mb-4">The Power for Your Event</span>
            <span className="text-gradient-gold block mt-2 transition-all duration-1000 ease-in-out transform text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              {heroTexts[currentTextIndex]}
            </span>
          </h1>

          {/* Mobile-Optimized Subheadline */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-luxury-white/90 mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300 px-4">
            Where luxury meets logistics. Experience flawless VIP service that transforms every occasion into an unforgettable moment of excellence.
          </p>

          {/* Mobile-Optimized CTA Buttons */}
          <div className="flex flex-col gap-3 sm:flex-row sm:gap-4 justify-center items-center mb-8 sm:mb-12 animate-fade-in delay-500 px-4">
            <Link to="/book-meeting" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto group bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-luxury-gold/40 relative overflow-hidden">
                <span className="relative z-10">Book VIP Consultation</span>
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

          {/* Mobile-Optimized Trust Indicators */}
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

          {/* Mobile-Optimized Scroll Indicator */}
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

      {/* Mobile-Optimized Decorative Elements */}
      <div className="hidden sm:block absolute top-20 left-10 w-32 h-32 border-2 border-luxury-gold/30 rounded-full animate-pulse"></div>
      <div className="hidden sm:block absolute bottom-32 right-10 w-24 h-24 border-2 border-luxury-gold/40 rounded-full animate-pulse delay-1000"></div>
      <div className="hidden md:block absolute top-1/2 left-4 w-16 h-16 border border-luxury-gold/20 rounded-full animate-spin" style={{ animationDuration: '20s' }}></div>
      <div className="hidden lg:block absolute bottom-1/4 right-1/4 w-8 h-8 bg-luxury-gold/20 rounded-full animate-ping delay-2000"></div>
      
      {/* Mobile-specific decorative elements */}
      <div className="sm:hidden absolute top-24 right-4 w-16 h-16 border border-luxury-gold/20 rounded-full animate-pulse"></div>
      <div className="sm:hidden absolute bottom-24 left-4 w-12 h-12 border border-luxury-gold/30 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
