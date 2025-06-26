
import { Eye } from 'lucide-react';

const PortfolioHeader = () => {
  return (
    <div className="text-center mb-24">
      <div className="inline-block mb-6">
        <span className="inline-flex items-center px-6 py-3 rounded-full bg-luxury-gold/20 text-luxury-gold font-bold text-sm tracking-widest uppercase border border-luxury-gold/30">
          <Eye className="mr-2" size={16} />
          Portfolio Showcase
        </span>
      </div>
      <h2 className="text-6xl sm:text-7xl lg:text-8xl font-playfair font-bold text-luxury-black mb-10 leading-tight">
        Excellence in <span className="bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold bg-clip-text text-transparent">Motion</span>
      </h2>
      <div className="flex items-center justify-center mb-8">
        <div className="h-px bg-luxury-gold/30 w-24"></div>
        <div className="mx-4 w-3 h-3 bg-luxury-gold rounded-full"></div>
        <div className="h-px bg-luxury-gold/30 w-24"></div>
      </div>
      <p className="text-2xl sm:text-3xl text-luxury-black/70 max-w-5xl mx-auto leading-relaxed font-light">
        Witness the artistry of VIP protocol service through our curated collection of distinguished events
      </p>
    </div>
  );
};

export default PortfolioHeader;
