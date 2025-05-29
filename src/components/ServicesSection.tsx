
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Shield, Star } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 'professional-ushering',
      title: 'Professional Ushering',
      description: 'Our expertly trained ushers provide seamless guidance and assistance, ensuring your guests feel welcomed and valued throughout the entire event experience.',
      icon: Users,
      stats: '200+ Events',
      rating: '99%',
      badgeText: '99%'
    },
    {
      id: 'vip-security',
      title: 'VIP Security Services',
      description: 'Discrete and professional security solutions tailored for high-profile individuals and events, providing peace of mind without compromising the experience.',
      icon: Shield,
      stats: '150+ Events',
      rating: '100%',
      badgeText: 'VIP'
    }
  ];

  return (
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <Card key={service.id} className={`relative overflow-hidden ${index === 0 ? 'border-2 border-luxury-gold' : 'border border-gray-200'} hover:shadow-lg transition-all duration-300`}>
              {index === 0 && (
                <div className="absolute top-4 right-4 bg-luxury-gold text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {service.badgeText}
                </div>
              )}
              {index === 1 && (
                <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {service.badgeText}
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <service.icon className="w-8 h-8 text-luxury-gold" />
                </div>
                <CardTitle className="text-2xl font-playfair text-black mb-4">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="text-center pt-0">
                <div className="flex justify-between items-center mb-6 text-sm text-gray-500">
                  <span>{service.stats}</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-luxury-gold mr-1" />
                    <span>{service.rating}</span>
                  </div>
                </div>
                
                <Button 
                  variant="outline" 
                  className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black px-8 py-2"
                >
                  Learn More
                  <span className="ml-2">→</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
