
import { Shield, Clock, Award, Users } from 'lucide-react';

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Shield,
      title: "Unmatched Reliability",
      description: "5+ years of flawless event execution with zero compromises on quality."
    },
    {
      icon: Clock,
      title: "24/7 Premium Support",
      description: "Round-the-clock dedicated assistance for all your VIP needs."
    },
    {
      icon: Award,
      title: "Excellence Guaranteed",
      description: "Award-winning service that exceeds expectations every single time."
    },
    {
      icon: Users,
      title: "Elite Network",
      description: "Access to exclusive venues, top vendors, and luxury service providers."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-luxury-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-white mb-6">
            Why Choose <span className="text-gradient-gold">Excellence</span>
          </h2>
          <p className="text-xl text-luxury-white/80 max-w-3xl mx-auto">
            Experience the difference that true luxury service makes
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-luxury-white/5 backdrop-blur-sm rounded-xl p-8 border border-luxury-gold/20 hover:border-luxury-gold/50 transition-all duration-300 hover:scale-105"
            >
              <feature.icon className="w-12 h-12 text-luxury-gold mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-xl font-semibold text-luxury-white mb-4">{feature.title}</h3>
              <p className="text-luxury-white/70 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
