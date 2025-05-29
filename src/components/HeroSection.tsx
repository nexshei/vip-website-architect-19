
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Play, Pause } from 'lucide-react';

const HeroSection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  const heroTexts = [
    "Excellence Redefined",
    "Luxury Perfected",
    "Service Beyond Compare"
  ];

  // Optimized images - using smaller, faster loading images
  const heroPhotos = [
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&q=80",
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1200&q=80",
    "https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&q=80",
    "https://images.unsplash.com/photo-1549451371-64aa98a6f532?w=1200&q=80"
  ];

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

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-luxury overflow-hidden">
      {/* Optimized Background Images */}
      <div className="absolute inset-0 z-0">
        {heroPhotos.map((photo, index) => (
          <div
            key={photo}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentPhotoIndex 
                ? 'opacity-30 scale-105' 
                : 'opacity-0 scale-100'
            }`}
            style={{
              backgroundImage: `url('${photo}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat'
            }}
          />
        ))}
      </div>

      {/* Enhanced Dark Overlay */}
      <div className="absolute inset-0 bg-luxury-black/60 z-1"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-5xl mx-auto animate-fade-in">
          {/* Simplified Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-playfair font-bold text-luxury-white mb-6 leading-tight">
            <span className="block mb-4">VIP Event Excellence</span>
            <span className="text-gradient-gold block transition-all duration-1000 ease-in-out transform text-3xl sm:text-4xl lg:text-5xl">
              {heroTexts[currentTextIndex]}
            </span>
          </h1>

          {/* Concise Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-luxury-white/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
            Premium event services with unmatched attention to detail
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in delay-500">
            <Link to="/book-meeting">
              <Button size="lg" className="w-full sm:w-auto group bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-luxury-gold/40">
                Book Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
                Our Services
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in delay-700">
            <div className="flex items-center space-x-2 text-luxury-white/80">
              <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
              <span className="text-sm font-medium">500+ Events</span>
            </div>
            <div className="flex items-center space-x-2 text-luxury-white/80">
              <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
              <span className="text-sm font-medium">24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 text-luxury-white/80">
              <div className="w-2 h-2 bg-luxury-gold rounded-full"></div>
              <span className="text-sm font-medium">VIP Protocol</span>
            </div>
          </div>

          {/* Fixed Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={scrollToPortfolio}
              className="inline-flex flex-col items-center text-luxury-white/70 hover:text-luxury-gold transition-all duration-300 group cursor-pointer"
            >
              <span className="text-sm font-medium mb-2 group-hover:scale-110 transition-transform">View Our Work</span>
              <ChevronDown size={24} className="animate-pulse" />
            </button>
          </div>
        </div>
      </div>

      {/* Simplified Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-luxury-gold/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-luxury-gold/30 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
