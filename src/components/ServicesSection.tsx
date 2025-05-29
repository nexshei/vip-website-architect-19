
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Shield, Clock, Calendar, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ServiceDetailModal from './ServiceDetailModal';

const ServicesSection = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const services = [
    {
      id: 'professional-ushering',
      title: 'Professional Ushering',
      description: 'Our expertly trained ushers provide seamless guidance and assistance, ensuring your guests feel welcomed and properly directed throughout your event with grace and professionalism.',
      icon: Users,
      stats: '200+ Events',
      rating: '99%',
      color: 'border-luxury-gold bg-luxury-gold/5',
      badge: '98%',
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
      ]
    },
    {
      id: 'vip-security',
      title: 'VIP Security Services',
      description: 'Discrete and professional security solutions tailored for high-profile individuals and events, providing world-class protection with unmatched discretion and professionalism.',
      icon: Shield,
      stats: '150+ Events',
      rating: '100%',
      color: 'border-gray-300 bg-gray-50/5',
      badge: 'VIP',
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
      ]
    },
    {
      id: 'high-profile-protocol',
      title: 'High-Profile Protocol',
      description: 'Sophisticated protocol management for diplomatic events, corporate functions, and exclusive gatherings, ensuring flawless execution of formal procedures.',
      icon: Clock,
      stats: '100+ Events',
      rating: '98%',
      color: 'border-luxury-gold bg-luxury-gold/5',
      badge: '98%',
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
      ]
    },
    {
      id: 'luxury-event-management',
      title: 'Luxury Event Management',
      description: 'End-to-end event planning and execution services that transform your vision into reality, creating unforgettable experiences with meticulous attention to detail.',
      icon: Calendar,
      stats: '300+ Events',
      rating: '97%',
      color: 'border-gray-300 bg-gray-50/5',
      badge: 'LUXURY',
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
      ]
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-playfair font-bold text-black mb-4">
              Our <span className="text-luxury-gold">Excellence</span>
            </h2>
            <div className="w-16 h-1 bg-luxury-gold mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive luxury services designed to elevate every aspect of your event experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={service.id} className={`relative overflow-hidden ${service.color} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="absolute top-4 right-4 bg-luxury-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {service.badge}
                </div>
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-luxury-gold" />
                  </div>
                  <CardTitle className="text-lg font-playfair text-black mb-3 leading-tight">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="text-center pt-0">
                  <div className="flex justify-between items-center mb-4 text-xs text-gray-500">
                    <span>{service.stats}</span>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 text-luxury-gold mr-1" />
                      <span>{service.rating}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Button 
                      onClick={() => handleLearnMore(service.id)}
                      variant="outline" 
                      className="w-full border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black text-sm py-2"
                    >
                      Learn More
                      <span className="ml-2">→</span>
                    </Button>
                    
                    <Button 
                      onClick={handleRequestService}
                      className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold text-sm py-2"
                    >
                      Request This Service
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
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
