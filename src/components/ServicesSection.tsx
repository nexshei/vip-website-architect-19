
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Shield, Clock, Calendar, Star, Mic, Utensils, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ServiceDetailModal from './ServiceDetailModal';

// Static services data
const staticServices = [
  {
    id: '1',
    title: 'Professional Ushering',
    description: 'Expert ushering services for corporate events, weddings, and VIP functions with trained multilingual staff.',
    icon: Users,
    stats: '200+ Events',
    rating: '99%',
    color: 'border-luxury-gold bg-luxury-gold/5',
    badge: '98%',
    features: ['Multilingual staff', 'Event coordination', 'Formal training', 'Guest assistance'],
    testimonial: "Exceptional service that exceeded our expectations",
    detailDescription: 'Expert ushering services for corporate events, weddings, and VIP functions with trained multilingual staff.',
    keyFeatures: [
      'Multilingual staff fluent in major international languages',
      'Comprehensive event coordination and crowd management',
      'Formal protocol training and etiquette expertise',
      'Personalized guest assistance and VIP handling'
    ]
  },
  {
    id: '2',
    title: 'VIP Security Services',
    description: 'Professional security services for high-profile events and VIP protection with experienced personnel.',
    icon: Shield,
    stats: '150+ Events',
    rating: '100%',
    color: 'border-gray-300 bg-gray-50/5',
    badge: 'VIP',
    features: ['Executive protection', 'Threat assessment', 'Discrete surveillance', 'Emergency response'],
    testimonial: "Professional and unobtrusive protection",
    detailDescription: 'Professional security services for high-profile events and VIP protection with experienced personnel.',
    keyFeatures: [
      'Former law enforcement and military professionals',
      'Comprehensive threat assessment and risk management',
      'Discrete surveillance and crowd monitoring',
      'Rapid emergency response and evacuation protocols'
    ]
  },
  {
    id: '3',
    title: 'High-Profile Protocol',
    description: 'Diplomatic and ceremonial protocol services for government and corporate high-level events.',
    icon: Clock,
    stats: '100+ Events',
    rating: '98%',
    color: 'border-luxury-gold bg-luxury-gold/5',
    badge: '98%',
    features: ['Diplomatic protocol', 'Ceremonial coordination', 'Cultural sensitivity', 'Protocol advisory'],
    testimonial: "Impeccable attention to diplomatic detail",
    detailDescription: 'Diplomatic and ceremonial protocol services for government and corporate high-level events.',
    keyFeatures: [
      'International diplomatic protocol expertise',
      'Ceremonial coordination and flag protocols',
      'Cultural sensitivity and customs awareness',
      'Protocol advisory and planning consultation'
    ]
  },
  {
    id: '4',
    title: 'Luxury Event Management',
    description: 'Complete event planning and management services for luxury corporate and private events.',
    icon: Calendar,
    stats: '300+ Events',
    rating: '97%',
    color: 'border-gray-300 bg-gray-50/5',
    badge: 'LUXURY',
    features: ['Full event planning', 'Vendor coordination', 'Timeline management', 'Quality assurance'],
    testimonial: "Transformed our vision into spectacular reality",
    detailDescription: 'Complete event planning and management services for luxury corporate and private events.',
    keyFeatures: [
      'Comprehensive event planning from concept to completion',
      'Premium vendor coordination and management',
      'Detailed timeline management and execution',
      'Rigorous quality assurance and contingency planning'
    ]
  },
  {
    id: '5',
    title: 'MC Services',
    description: 'Professional master of ceremonies services for corporate events, weddings, and special occasions.',
    icon: Mic,
    stats: '180+ Events',
    rating: '96%',
    color: 'border-luxury-gold bg-luxury-gold/5',
    badge: 'MC',
    features: ['Charismatic hosting', 'Script writing', 'Crowd engagement', 'Multilingual services'],
    testimonial: "Kept our guests entertained throughout the event",
    detailDescription: 'Professional master of ceremonies services for corporate events, weddings, and special occasions.',
    keyFeatures: [
      'Experienced and charismatic event hosts',
      'Custom script writing and event planning',
      'Expert crowd engagement and entertainment',
      'Multilingual hosting capabilities'
    ]
  },
  {
    id: '6',
    title: 'Cutlery & Catering Services',
    description: 'Premium catering and cutlery services for luxury events with gourmet cuisine and elegant presentation.',
    icon: Utensils,
    stats: '250+ Events',
    rating: '95%',
    color: 'border-gray-300 bg-gray-50/5',
    badge: 'PREMIUM',
    features: ['Gourmet cuisine', 'Premium cutlery', 'Table styling', 'Dietary accommodations'],
    testimonial: "Exquisite cuisine and presentation",
    detailDescription: 'Premium catering and cutlery services for luxury events with gourmet cuisine and elegant presentation.',
    keyFeatures: [
      'Gourmet cuisine crafted by expert chefs',
      'Premium cutlery and elegant tableware',
      'Professional table styling and setup',
      'Comprehensive dietary accommodation options'
    ]
  },
  {
    id: '7',
    title: 'Bridal Party Coordination',
    description: 'Specialized wedding coordination services focusing on bridal party management and seamless ceremony execution.',
    icon: Heart,
    stats: '120+ Weddings',
    rating: '99%',
    color: 'border-luxury-gold bg-luxury-gold/5',
    badge: 'BRIDAL',
    features: ['Wedding coordination', 'Bridal party management', 'Timeline orchestration', 'Vendor liaison'],
    testimonial: "Made our wedding day absolutely perfect",
    detailDescription: 'Specialized wedding coordination services focusing on bridal party management and seamless ceremony execution.',
    keyFeatures: [
      'Complete wedding day coordination and planning',
      'Professional bridal party management and guidance',
      'Detailed timeline orchestration and execution',
      'Expert vendor liaison and communication'
    ]
  }
];

const ServicesSection = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string | null>(null);

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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {staticServices.map((service, index) => (
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
          service={staticServices.find(s => s.id === selectedService)!}
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          onRequestService={handleRequestService}
        />
      )}
    </>
  );
};

export default ServicesSection;
