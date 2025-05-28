
import { useState } from 'react';
import { Users, Shield, Clock, Calendar, ChevronRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Users,
      title: "Professional Ushering",
      description: "Our expertly trained ushers provide seamless guidance and assistance, ensuring your guests feel welcomed and properly directed throughout your event with grace and professionalism.",
      features: ["Multilingual staff", "Formal training", "Event coordination", "Guest assistance"],
      testimonial: "Used at Presidential Gala 2023",
      clientQuote: "Exceptional service that exceeded our expectations",
      image: "/api/placeholder/400/300",
      stats: { events: "200+", satisfaction: "99%" }
    },
    {
      icon: Shield,
      title: "VIP Security Services", 
      description: "Discrete and professional security solutions tailored for high-profile individuals and events, providing peace of mind without compromising the elegance of your occasion.",
      features: ["Executive protection", "Event security", "Risk assessment", "Discrete operations"],
      testimonial: "Trusted by diplomatic missions",
      clientQuote: "Professional and unobtrusive protection",
      image: "/api/placeholder/400/300",
      stats: { events: "150+", satisfaction: "100%" }
    },
    {
      icon: Clock,
      title: "High-Profile Protocol",
      description: "Sophisticated protocol management for diplomatic events, corporate functions, and exclusive gatherings, ensuring every detail aligns with international standards of excellence.",
      features: ["Diplomatic protocol", "Corporate events", "Cultural sensitivity", "International standards"],
      testimonial: "Embassy events specialist",
      clientQuote: "Flawless execution of complex protocols",
      image: "/api/placeholder/400/300",
      stats: { events: "100+", satisfaction: "98%" }
    },
    {
      icon: Calendar,
      title: "Luxury Event Management",
      description: "End-to-end event planning and execution services that transform your vision into reality, creating unforgettable experiences with meticulous attention to detail.",
      features: ["Full event planning", "Vendor coordination", "Timeline management", "Quality assurance"],
      testimonial: "Corporate launch expert",
      clientQuote: "Transformed our vision into reality",
      image: "/api/placeholder/400/300",
      stats: { events: "300+", satisfaction: "97%" }
    }
  ];

  return (
    <section id="services" className="py-20 bg-luxury-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-luxury-black mb-6">
            Our <span className="text-gradient-gold">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-luxury-black/70 max-w-3xl mx-auto">
            Comprehensive luxury services designed to elevate every aspect of your event experience
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`group bg-luxury-white rounded-2xl p-6 shadow-lg border transition-all duration-500 cursor-pointer transform ${
                hoveredCard === index 
                  ? 'border-luxury-gold/80 shadow-2xl shadow-luxury-gold/20 -translate-y-4 scale-105' 
                  : 'border-luxury-black/10 hover:border-luxury-gold/50'
              } ${activeService === index ? 'ring-2 ring-luxury-gold' : ''}`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => setActiveService(index)}
            >
              <CardContent className="p-0">
                <div className="text-center">
                  <div className="relative w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="text-luxury-gold" size={32} />
                    
                    {/* Floating stats on hover */}
                    <div className={`absolute -top-2 -right-2 bg-luxury-gold text-luxury-black text-xs px-2 py-1 rounded-full font-semibold transition-all duration-300 ${
                      hoveredCard === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                    }`}>
                      {service.stats.satisfaction}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-playfair font-bold text-luxury-black mb-4 group-hover:text-luxury-gold transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-luxury-black/70 mb-4 leading-relaxed text-sm">
                    {service.description.slice(0, 100)}...
                  </p>

                  {/* Service stats */}
                  <div className="flex justify-between items-center mb-4 text-xs text-luxury-black/60">
                    <span>{service.stats.events} Events</span>
                    <div className="flex items-center space-x-1">
                      <Star className="text-luxury-gold" size={12} />
                      <span>{service.stats.satisfaction}</span>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300"
                  >
                    Learn More <ChevronRight size={16} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Detailed Service View */}
        <div className="bg-gradient-luxury rounded-3xl p-8 lg:p-12 text-luxury-white">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mr-4">
                  {React.createElement(services[activeService].icon, { 
                    className: "text-luxury-black", 
                    size: 32 
                  })}
                </div>
                <div>
                  <h3 className="text-3xl font-playfair font-bold text-luxury-gold mb-2">
                    {services[activeService].title}
                  </h3>
                  <p className="text-luxury-white/80 text-sm">
                    {services[activeService].testimonial}
                  </p>
                </div>
              </div>

              <p className="text-luxury-white/90 mb-6 leading-relaxed">
                {services[activeService].description}
              </p>

              <div className="mb-6">
                <h4 className="text-luxury-gold font-semibold mb-3">Key Features:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {services[activeService].features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-luxury-white/80">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="border-l-4 border-luxury-gold pl-4 italic text-luxury-white/90 mb-6">
                "{services[activeService].clientQuote}"
              </blockquote>

              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold">
                Request This Service
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-video bg-luxury-black/20 rounded-2xl overflow-hidden">
                <img 
                  src={services[activeService].image} 
                  alt={services[activeService].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/50 to-transparent"></div>
              </div>
              
              {/* Service selector tabs */}
              <div className="flex justify-center mt-6 space-x-2">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeService === index ? 'bg-luxury-gold scale-125' : 'bg-luxury-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
