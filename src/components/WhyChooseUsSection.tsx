
import React from 'react';
import { Shield, Clock, Users, Award, Star, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Unmatched Security",
      description: "Professional security protocols for high-profile events"
    },
    {
      icon: Clock,
      title: "Punctual Excellence",
      description: "Always on time, every time with precision planning"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Trained professionals with years of luxury service experience"
    },
    {
      icon: Award,
      title: "Premium Quality",
      description: "Award-winning service that exceeds expectations"
    }
  ];

  return (
    <section className="py-20 bg-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-luxury-black mb-6">
            Why Choose <span className="text-gradient-gold">Our Services</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-luxury-black/70 max-w-3xl mx-auto">
            Experience the difference that comes with true professional excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="group bg-luxury-white hover:bg-gradient-luxury hover:text-luxury-white transition-all duration-300 transform hover:-translate-y-2 shadow-lg hover:shadow-2xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <reason.icon className="text-luxury-black" size={32} />
                </div>
                <h3 className="text-xl font-playfair font-bold mb-4 group-hover:text-luxury-gold">
                  {reason.title}
                </h3>
                <p className="text-luxury-black/70 group-hover:text-luxury-white/90">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
