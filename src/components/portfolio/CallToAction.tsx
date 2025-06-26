
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye } from 'lucide-react';

const CallToAction = () => {
  return (
    <div className="text-center">
      <div className="bg-gradient-to-br from-white via-luxury-gold/10 to-white rounded-3xl p-16 backdrop-blur-sm border-2 border-luxury-gold/30 shadow-3xl relative overflow-hidden max-w-5xl mx-auto">
        {/* CTA Background Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-luxury-gold/15 rounded-full blur-2xl"></div>
        
        <div className="relative z-10">
          <div className="mb-8">
            <span className="inline-flex items-center px-6 py-3 rounded-full bg-luxury-gold/20 text-luxury-gold font-bold text-sm tracking-widest uppercase border border-luxury-gold/30 mb-6">
              <Eye className="mr-2" size={16} />
              View Complete Portfolio
            </span>
          </div>
          <h3 className="text-5xl sm:text-6xl font-playfair font-bold text-luxury-black mb-8 leading-tight">
            Explore Our Complete <span className="bg-gradient-to-r from-luxury-gold to-luxury-gold-light bg-clip-text text-transparent">Gallery</span>
          </h3>
          <p className="text-luxury-black/70 mb-12 max-w-3xl mx-auto text-2xl leading-relaxed">
            Discover our extensive collection showcasing years of excellence in VIP protocol services across diverse events and distinguished clientele
          </p>
          <Link to="/gallery">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold hover:from-luxury-gold-dark hover:via-luxury-gold hover:to-luxury-gold-dark text-luxury-black font-bold px-16 py-8 text-2xl transition-all duration-500 hover:scale-110 hover:shadow-3xl group rounded-full border-2 border-luxury-gold-dark/40 shadow-2xl"
            >
              View All Photos
              <ArrowRight className="ml-4 group-hover:translate-x-3 transition-transform duration-500 group-hover:animate-pulse" size={28} />
            </Button>
          </Link>
          <p className="text-luxury-black/50 text-lg mt-6 font-medium">
            Professional Portfolio • Premium Events
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
