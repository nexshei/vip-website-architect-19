
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-luxury overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23D4AF37" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="1"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] repeat"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-luxury-white mb-6 leading-tight">
            Elevating Protocol to a 
            <span className="text-gradient-gold block mt-2">
              New Standard of Sophistication
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-luxury-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Where luxury meets logistics. Experience flawless VIP service that transforms every occasion into an unforgettable moment of excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/book-meeting">
              <Button size="lg" className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-luxury-gold/25">
                Book a Meeting
              </Button>
            </Link>
            <Link to="/#services">
              <Button size="lg" variant="outline" className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black px-8 py-4 text-lg transition-all duration-300 hover:scale-105">
                Explore Services
              </Button>
            </Link>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <a href="#about" className="inline-flex flex-col items-center text-luxury-white/70 hover:text-luxury-gold transition-colors">
              <span className="text-sm font-medium mb-2">Discover Excellence</span>
              <ChevronDown size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border-2 border-luxury-gold/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-10 w-24 h-24 border-2 border-luxury-gold/30 rounded-full animate-pulse delay-1000"></div>
    </section>
  );
};

export default HeroSection;
