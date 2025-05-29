
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Shield, Clock, Calendar, Star, ArrowRight, Trophy, CheckCircle, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ServiceDetailModal from './ServiceDetailModal';

const ServicesSection = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const services = [
    {
      id: 'professional-ushering',
      title: 'Professional Ushering',
      description: 'Our expertly trained ushers provide seamless guidance and assistance, ensuring your guests feel welcomed and properly directed throughout your event with grace and professionalism.',
      icon: Users,
      stats: '200+ Events',
      rating: '99%',
      color: 'from-luxury-gold/20 to-luxury-gold/5',
      borderColor: 'border-luxury-gold/30',
      iconBg: 'bg-gradient-to-br from-luxury-gold to-luxury-gold-dark',
      badge: '98% Success',
      badgeColor: 'bg-luxury-gold text-black',
      features: [
        'Multilingual staff',
        'Event coordination', 
        'Formal training',
        'Guest assistance'
      ],
      testimonial: "Exceptional service that exceeded our expectations",
      detailDescription: 'Our expertly trained ushers provide seamless guidance and assistance, ensuring your guests feel welcomed and properly directed throughout your event with grace and professionalism.',
      keyFeatures: [
        'Multilingual staff fluent in major international languages',
        'Comprehensive event coordination and crowd management',
        'Formal protocol training and etiquette expertise',
        'Personalized guest assistance and VIP handling'
      ],
      price: 'From $150/hour',
      highlight: 'Most Popular'
    },
    {
      id: 'vip-security',
      title: 'VIP Security Services',
      description: 'Discrete and professional security solutions tailored for high-profile individuals and events, providing world-class protection with unmatched discretion and professionalism.',
      icon: Shield,
      stats: '150+ Events',
      rating: '100%',
      color: 'from-gray-900/20 to-gray-700/5',
      borderColor: 'border-gray-400/30',
      iconBg: 'bg-gradient-to-br from-gray-800 to-black',
      badge: 'Premium VIP',
      badgeColor: 'bg-black text-luxury-gold',
      features: [
        'Executive protection',
        'Threat assessment',
        'Discrete surveillance', 
        'Emergency response'
      ],
      testimonial: "Professional and unobtrusive protection",
      detailDescription: 'Our VIP Security Services provide world-class protection with unmatched discretion. Our team includes former law enforcement and military professionals trained in executive protection protocols.',
      keyFeatures: [
        'Former law enforcement and military professionals',
        'Comprehensive threat assessment and risk management',
        'Discrete surveillance and crowd monitoring',
        'Rapid emergency response and evacuation protocols'
      ],
      price: 'From $300/hour',
      highlight: 'Elite Service'
    },
    {
      id: 'high-profile-protocol',
      title: 'High-Profile Protocol',
      description: 'Sophisticated protocol management for diplomatic events, corporate functions, and exclusive gatherings, ensuring flawless execution of formal procedures.',
      icon: Trophy,
      stats: '100+ Events',
      rating: '98%',
      color: 'from-luxury-gold/15 to-amber-100/5',
      borderColor: 'border-amber-400/30',
      iconBg: 'bg-gradient-to-br from-amber-500 to-luxury-gold',
      badge: 'Diplomatic',
      badgeColor: 'bg-amber-500 text-white',
      features: [
        'Diplomatic protocol',
        'Ceremonial coordination',
        'Cultural sensitivity',
        'Protocol advisory'
      ],
      testimonial: "Impeccable attention to diplomatic detail",
      detailDescription: 'Sophisticated protocol management for diplomatic events, corporate functions, and exclusive gatherings, ensuring flawless execution of formal procedures and cultural sensitivity.',
      keyFeatures: [
        'International diplomatic protocol expertise',
        'Ceremonial coordination and flag protocols',
        'Cultural sensitivity and customs awareness',
        'Protocol advisory and planning consultation'
      ],
      price: 'From $250/hour',
      highlight: 'Expert Level'
    },
    {
      id: 'luxury-event-management',
      title: 'Luxury Event Management',
      description: 'End-to-end event planning and execution services that transform your vision into reality, creating unforgettable experiences with meticulous attention to detail.',
      icon: Calendar,
      stats: '300+ Events',
      rating: '97%',
      color: 'from-purple-900/15 to-purple-100/5',
      borderColor: 'border-purple-400/30',
      iconBg: 'bg-gradient-to-br from-purple-600 to-purple-800',
      badge: 'Full Service',
      badgeColor: 'bg-purple-600 text-white',
      features: [
        'Full event planning',
        'Vendor coordination',
        'Timeline management',
        'Quality assurance'
      ],
      testimonial: "Transformed our vision into spectacular reality",
      detailDescription: 'End-to-end event planning and execution services that transform your vision into reality, creating unforgettable experiences with meticulous attention to every detail.',
      keyFeatures: [
        'Comprehensive event planning from concept to completion',
        'Premium vendor coordination and management',
        'Detailed timeline management and execution',
        'Rigorous quality assurance and contingency planning'
      ],
      price: 'Custom Packages',
      highlight: 'Comprehensive'
    }
  ];

  const handleRequestService = () => {
    navigate('/book-meeting');
  };

  const handleLearnMore = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  return (
    <>
      <section className="relative py-24 bg-gradient-to-br from-white via-gray-50 to-luxury-gold/5 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-luxury-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gray-900/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Enhanced Header Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-luxury-gold/10 text-luxury-gold px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Premium Services
            </div>
            
            <h2 className="text-6xl md:text-7xl font-playfair font-bold text-black mb-6">
              Our <span className="text-gradient-gold">Excellence</span>
            </h2>
            
            <div className="w-24 h-1 bg-gradient-to-r from-luxury-gold-dark via-luxury-gold to-luxury-gold-light mx-auto mb-8"></div>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Comprehensive luxury services designed to elevate every aspect of your event experience with 
              <span className="text-luxury-gold font-semibold"> unmatched precision</span> and 
              <span className="text-luxury-gold font-semibold"> professional excellence</span>
            </p>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">750+</div>
                <div className="text-gray-600 text-sm uppercase tracking-wide">Events Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">98.5%</div>
                <div className="text-gray-600 text-sm uppercase tracking-wide">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">500+</div>
                <div className="text-gray-600 text-sm uppercase tracking-wide">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-luxury-gold mb-2">24/7</div>
                <div className="text-gray-600 text-sm uppercase tracking-wide">Support Available</div>
              </div>
            </div>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-8xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={service.id} 
                className={`group relative overflow-hidden bg-gradient-to-br ${service.color} ${service.borderColor} border-2 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 cursor-pointer`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Highlight Badge */}
                {service.highlight && (
                  <div className="absolute -top-2 -right-2 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12 z-10">
                    {service.highlight}
                  </div>
                )}

                {/* Animated Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <CardHeader className="relative text-center pb-4 z-10">
                  {/* Enhanced Icon */}
                  <div className={`w-20 h-20 ${service.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Service Badge */}
                  <Badge className={`${service.badgeColor} mb-4 px-3 py-1 text-xs font-semibold`}>
                    {service.badge}
                  </Badge>
                  
                  <CardTitle className="text-xl font-playfair text-black mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                  
                  <CardDescription className="text-gray-600 text-sm leading-relaxed line-clamp-4 group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="relative text-center pt-0 z-10">
                  {/* Stats and Rating */}
                  <div className="flex justify-between items-center mb-6 text-xs">
                    <div className="flex items-center text-gray-500">
                      <CheckCircle className="w-3 h-3 text-green-500 mr-1" />
                      <span>{service.stats}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-luxury-gold mr-1 fill-current" />
                      <span className="text-gray-500">{service.rating}</span>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-center mb-6">
                    <div className="text-lg font-bold text-luxury-gold">{service.price}</div>
                  </div>
                  
                  {/* Enhanced Action Buttons */}
                  <div className="space-y-3">
                    <Button 
                      onClick={() => handleLearnMore(service.id)}
                      variant="outline" 
                      className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black text-sm py-2 group/btn transition-all duration-300"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                    
                    <Button 
                      onClick={handleRequestService}
                      className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold text-sm py-2 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Request This Service
                    </Button>
                  </div>

                  {/* Hover Features List */}
                  <div className={`mt-6 space-y-2 transition-all duration-500 ${hoveredCard === service.id ? 'opacity-100 max-h-48' : 'opacity-0 max-h-0 overflow-hidden'}`}>
                    <div className="text-xs font-semibold text-gray-700 mb-2">Key Features:</div>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-600">
                        <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>

                {/* Animated Border Effect */}
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 rounded-lg border-2 border-luxury-gold animate-pulse"></div>
                </div>
              </Card>
            ))}
          </div>

          {/* Call to Action Section */}
          <div className="text-center mt-20">
            <div className="bg-gradient-to-r from-luxury-gold/10 via-white to-luxury-gold/10 rounded-2xl p-8 max-w-4xl mx-auto border border-luxury-gold/20">
              <h3 className="text-3xl font-playfair font-bold text-black mb-4">
                Ready to Experience Excellence?
              </h3>
              <p className="text-gray-600 mb-6 text-lg">
                Let us create an unforgettable experience tailored to your unique requirements
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={handleRequestService}
                  className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-8 py-3 text-lg"
                >
                  Book Consultation
                </Button>
                <Button 
                  variant="outline"
                  className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black px-8 py-3 text-lg"
                >
                  View Portfolio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {selectedService && (
        <ServiceDetailModal 
          service={services.find(s => s.id === selectedService)!}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          onRequestService={handleRequestService}
        />
      )}
    </>
  );
};

export default ServicesSection;
