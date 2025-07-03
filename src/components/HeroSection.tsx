
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Package } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-r from-luxury-black via-luxury-black/95 to-luxury-black/90 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/lovable-uploads/569bcb82-cebd-48f6-9d3b-7a1d0c566fd4.png')`
        }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/80 via-luxury-black/60 to-luxury-black/40" />
      
      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/128c46de-f529-4c6d-9c43-0e87592a70ba.png" 
              alt="Sir Ole VVIP Protocol Ltd" 
              className="h-20 sm:h-24 lg:h-28 mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-luxury-white mb-6 animate-fade-in-up">
            Excellence in <span className="text-gradient-gold">Protocol</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-luxury-gold mb-8 font-light animate-fade-in-up animation-delay-200">
            Defining Sophistication Through Impeccable Service
          </p>
          
          {/* Description */}
          <p className="text-lg sm:text-xl text-luxury-white/90 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animation-delay-400">
            Sir Ole VVIP Protocol Ltd delivers world-class protocol services, executive protection, 
            and luxury event management with unparalleled attention to detail and sophistication.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-600">
            <Link 
              to="/book-meeting"
              className="group bg-gradient-luxury hover:opacity-90 text-luxury-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-luxury-gold/20 transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              Book Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/book-items"
              className="group border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black px-8 py-4 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              Book Event Items
              <Package className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/services"
              className="group border-2 border-luxury-white/30 text-luxury-white hover:bg-luxury-white hover:text-luxury-black px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm transform hover:scale-105 transition-all duration-300 flex items-center gap-3"
            >
              Our Services
              <Shield className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-luxury-gold/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-luxury-gold/10 rounded-full animate-bounce animation-delay-1000"></div>
      <div className="absolute top-1/2 right-20 w-12 h-12 border border-luxury-gold/30 rotate-45 animate-spin-slow"></div>
    </section>
  );
};

export default HeroSection;
