
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Shield, Clock, Calendar, Star, Mic, Utensils, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import ServiceDetailModal from './ServiceDetailModal';

// Icon mapping for services
const iconMap: { [key: string]: any } = {
  'Professional Ushering': Users,
  'VIP Security Services': Shield,
  'High-Profile Protocol': Clock,
  'Luxury Event Management': Calendar,
  'MC Services': Mic,
  'Cutlery & Catering Services': Utensils,
  'Bridal Party Coordination': Heart,
};

// Enhanced service data mapping
const serviceEnhancements: { [key: string]: any } = {
  'Professional Ushering': {
    stats: '200+ Events',
    rating: '99%',
    color: 'border-luxury-gold bg-luxury-gold/5',
    badge: '98%',
    features: ['Multilingual staff', 'Event coordination', 'Formal training', 'Guest assistance'],
    testimonial: "Exceptional service that exceeded our expectations",
    keyFeatures: [
      'Multilingual staff fluent in major international languages',
      'Comprehensive event coordination and crowd management',
      'Formal protocol training and etiquette expertise',
      'Personalized guest assistance and VIP handling'
    ]
  },
  'VIP Security Services': {
    stats: '150+ Events',
    rating: '100%',
    color: 'border-gray-300 bg-gray-50/5',
    badge: 'VIP',
    features: ['Executive protection', 'Threat assessment', 'Discrete surveillance', 'Emergency response'],
    testimonial: "Professional and unobtrusive protection",
    keyFeatures: [
      'Former law enforcement and military professionals',
      'Comprehensive threat assessment and risk management',
      'Discrete surveillance and crowd monitoring',
      'Rapid emergency response and evacuation protocols'
    ]
  },
  'High-Profile Protocol': {
    stats: '100+ Events',
    rating: '98%',
    color: 'border-luxury-gold bg-luxury-gold/5',
    badge: '98%',
    features: ['Diplomatic protocol', 'Ceremonial coordination', 'Cultural sensitivity', 'Protocol advisory'],
    testimonial: "Impeccable attention to diplomatic detail",
    keyFeatures: [
      'International diplomatic protocol expertise',
      'Ceremonial coordination and flag protocols',
      'Cultural sensitivity and customs awareness',
      'Protocol advisory and planning consultation'
    ]
  },
  'Luxury Event Management': {
    stats: '300+ Events',
    rating: '97%',
    color: 'border-gray-300 bg-gray-50/5',
    badge: 'LUXURY',
    features: ['Full event planning', 'Vendor coordination', 'Timeline management', 'Quality assurance'],
    testimonial: "Transformed our vision into spectacular reality",
    keyFeatures: [
      'Comprehensive event planning from concept to completion',
      'Premium vendor coordination and management',
      'Detailed timeline management and execution',
      'Rigorous quality assurance and contingency planning'
    ]
  },
  'MC Services': {
    stats: '180+ Events',
    rating: '96%',
    color: 'border-luxury-gold bg-luxury-gold/5',
    badge: 'MC',
    features: ['Charismatic hosting', 'Script writing', 'Crowd engagement', 'Multilingual services'],
    testimonial: "Kept our guests entertained throughout the event",
    keyFeatures: [
      'Experienced and charismatic event hosts',
      'Custom script writing and event planning',
      'Expert crowd engagement and entertainment',
      'Multilingual hosting capabilities'
    ]
  },
  'Cutlery & Catering Services': {
    stats: '250+ Events',
    rating: '95%',
    color: 'border-gray-300 bg-gray-50/5',
    badge: 'PREMIUM',
    features: ['Gourmet cuisine', 'Premium cutlery', 'Table styling', 'Dietary accommodations'],
    testimonial: "Exquisite cuisine and presentation",
    keyFeatures: [
      'Gourmet cuisine crafted by expert chefs',
      'Premium cutlery and elegant tableware',
      'Professional table styling and setup',
      'Comprehensive dietary accommodation options'
    ]
  },
  'Bridal Party Coordination': {
    stats: '120+ Weddings',
    rating: '99%',
    color: 'border-luxury-gold bg-luxury-gold/5',
    badge: 'BRIDAL',
    features: ['Wedding coordination', 'Bridal party management', 'Timeline orchestration', 'Vendor liaison'],
    testimonial: "Made our wedding day absolutely perfect",
    keyFeatures: [
      'Complete wedding day coordination and planning',
      'Professional bridal party management and guidance',
      'Detailed timeline orchestration and execution',
      'Expert vendor liaison and communication'
    ]
  }
};

const ServicesSection = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  // Fetch services from database
  const { data: servicesData, isLoading, error } = useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .order('created_at', { ascending: true });
      
      if (error) throw error;
      return data;
    }
  });

  // Transform database services to match component structure
  const services = servicesData?.map(service => {
    const enhancement = serviceEnhancements[service.title] || {};
    const IconComponent = iconMap[service.title] || Calendar;
    
    return {
      id: service.id,
      title: service.title,
      description: service.description,
      icon: IconComponent,
      stats: enhancement.stats || '50+ Events',
      rating: enhancement.rating || '95%',
      color: enhancement.color || 'border-gray-300 bg-gray-50/5',
      badge: enhancement.badge || 'NEW',
      features: enhancement.features || ['Professional service', 'Quality assurance', 'Expert staff', 'Customer satisfaction'],
      testimonial: enhancement.testimonial || "Outstanding professional service",
      detailDescription: service.description,
      keyFeatures: enhancement.keyFeatures || [
        'Professional and experienced staff',
        'Comprehensive service delivery',
        'Quality assurance and customer satisfaction',
        'Flexible and customized solutions'
      ]
    };
  }) || [];

  const handleRequestService = () => {
    navigate('/book-meeting');
  };

  const handleLearnMore = (serviceId: string) => {
    setSelectedService(serviceId);
  };

  if (isLoading) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-luxury-gold mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading our premium services...</p>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-red-600">Unable to load services. Please try again later.</p>
          </div>
        </div>
      </section>
    );
  }

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
