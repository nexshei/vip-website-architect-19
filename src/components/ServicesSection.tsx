
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Users, MapPin, Clock, Star, Shield } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      id: 'vip-events',
      title: 'VIP Event Planning',
      description: 'Exclusive event planning with premium vendor coordination',
      icon: Calendar,
    },
    {
      id: 'concierge',
      title: 'Personal Concierge',
      description: '24/7 luxury lifestyle management and personal assistance',
      icon: Users,
    },
    {
      id: 'corporate',
      title: 'Corporate Solutions',
      description: 'High-end corporate event management and executive services',
      icon: MapPin,
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-luxury-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-white mb-6">
            Premium <span className="text-gradient-gold">Services</span>
          </h2>
          <p className="text-xl text-luxury-white/80 max-w-3xl mx-auto">
            Discover our comprehensive suite of luxury services designed to exceed your every expectation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <Card key={service.id} className="group bg-luxury-white/5 border-luxury-gold/20 hover:border-luxury-gold/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <service.icon className="w-12 h-12 text-luxury-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <CardTitle className="text-luxury-white text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-luxury-white/70">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button 
                  variant="outline" 
                  className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <Clock className="w-8 h-8 text-luxury-gold mb-3" />
            <h3 className="text-luxury-white font-semibold mb-2">24/7 Support</h3>
            <p className="text-luxury-white/70">Round-the-clock assistance</p>
          </div>
          <div className="flex flex-col items-center">
            <Shield className="w-8 h-8 text-luxury-gold mb-3" />
            <h3 className="text-luxury-white font-semibold mb-2">Guaranteed Excellence</h3>
            <p className="text-luxury-white/70">100% satisfaction promise</p>
          </div>
          <div className="flex flex-col items-center">
            <Star className="w-8 h-8 text-luxury-gold mb-3" />
            <h3 className="text-luxury-white font-semibold mb-2">Premium Quality</h3>
            <p className="text-luxury-white/70">Only the finest standards</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
