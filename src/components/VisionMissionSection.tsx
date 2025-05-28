
import { ChevronRight } from 'lucide-react';

const VisionMissionSection = () => {
  return (
    <section className="py-20 bg-gradient-luxury">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-luxury-white mb-6">
              Our <span className="text-gradient-gold">Foundation</span>
            </h2>
            <div className="w-24 h-1 bg-luxury-gold mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-luxury-white/10 backdrop-blur-sm rounded-2xl p-8 border border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center mr-4">
                  <ChevronRight className="text-luxury-black" size={24} />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-luxury-gold">Our Vision</h3>
              </div>
              <p className="text-luxury-white/90 text-lg leading-relaxed">
                To be the leading luxury protocol and hospitality company in East Africa, setting the benchmark for excellence in VIP services and creating unforgettable experiences that exceed expectations at every touchpoint.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-luxury-white/10 backdrop-blur-sm rounded-2xl p-8 border border-luxury-gold/20 hover:border-luxury-gold/40 transition-all duration-300 hover:scale-105 animate-fade-in">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center mr-4">
                  <ChevronRight className="text-luxury-black" size={24} />
                </div>
                <h3 className="text-2xl font-playfair font-bold text-luxury-gold">Our Mission</h3>
              </div>
              <p className="text-luxury-white/90 text-lg leading-relaxed">
                To deliver impeccable protocol services, ushering excellence, and VIP security solutions that reflect sophistication, professionalism, and attention to detail, ensuring every client receives the royal treatment they deserve.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
