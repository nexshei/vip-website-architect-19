
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Users, Shield, Clock, Calendar, ArrowLeft, Phone, Mail } from 'lucide-react';

interface ServiceDetailModalProps {
  service: {
    id: string;
    title: string;
    description: string;
    icon: any;
    stats: string;
    rating: string;
    features: string[];
    testimonial: string;
    detailDescription: string;
    keyFeatures: string[];
  };
  isOpen: boolean;
  onClose: () => void;
  onRequestService: () => void;
}

const ServiceDetailModal = ({ service, isOpen, onClose, onRequestService }: ServiceDetailModalProps) => {
  const getServiceStats = () => {
    switch (service.id) {
      case 'professional-ushering':
        return { events: '200+', satisfaction: '99%', clients: '150+' };
      case 'vip-security':
        return { events: '150+', satisfaction: '100%', clients: '75+' };
      case 'high-profile-protocol':
        return { events: '100+', satisfaction: '98%', clients: '80+' };
      case 'luxury-event-management':
        return { events: '300+', satisfaction: '97%', clients: '200+' };
      default:
        return { events: '100+', satisfaction: '98%', clients: '50+' };
    }
  };

  const stats = getServiceStats();

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl h-[85vh] bg-black text-white overflow-hidden">
        <DialogHeader className="border-b border-gray-800 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-luxury-gold to-yellow-500 rounded-full flex items-center justify-center shadow-lg">
                <service.icon className="w-8 h-8 text-black" />
              </div>
              <div>
                <DialogTitle className="text-3xl font-playfair text-luxury-gold mb-1">{service.title}</DialogTitle>
                <p className="text-gray-400 text-lg">Comprehensive Service Details & Information</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Button 
                onClick={() => window.open('tel:+254712063461', '_self')}
                variant="outline" 
                className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black transition-all duration-300"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button 
                onClick={onClose}
                variant="outline" 
                className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-luxury-gold transition-all duration-300"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Services
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-900 mb-6">
              <TabsTrigger value="overview" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-black font-semibold">Overview</TabsTrigger>
              <TabsTrigger value="services" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-black font-semibold">Features</TabsTrigger>
              <TabsTrigger value="process" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-black font-semibold">Process</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6 space-y-8">
              <div className="flex items-start space-x-3 mb-6">
                <Shield className="w-6 h-6 text-luxury-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-luxury-gold mb-3">Service Overview</h3>
                  <p className="text-gray-300 leading-relaxed text-lg">{service.detailDescription}</p>
                </div>
              </div>

              <div className="mb-8">
                <h4 className="text-xl font-semibold text-luxury-gold mb-4">Key Features & Capabilities:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-gray-900/50 p-4 rounded-lg">
                      <div className="w-3 h-3 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-luxury-gold/20">
                  <h4 className="text-xl font-semibold text-luxury-gold mb-4">Client Testimonial</h4>
                  <blockquote className="text-gray-300 italic border-l-4 border-luxury-gold pl-6 text-lg leading-relaxed">
                    "{service.testimonial}"
                  </blockquote>
                  <div className="mt-4 flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-luxury-gold fill-current" />
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-lg border border-luxury-gold/20">
                  <h4 className="text-xl font-semibold text-luxury-gold mb-4">Performance Statistics</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Events Completed:</span>
                      <span className="text-white font-bold text-lg">{stats.events}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Client Satisfaction:</span>
                      <span className="text-luxury-gold font-bold text-lg">{stats.satisfaction}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Active Clients:</span>
                      <span className="text-white font-bold text-lg">{stats.clients}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={onRequestService}
                  className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105"
                >
                  Request This Service
                </Button>
                <Button 
                  onClick={() => window.open('mailto:sirolevipprotocol@gmail.com', '_self')}
                  variant="outline"
                  className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-black font-semibold px-8 py-4 text-lg transition-all duration-300"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Email Inquiry
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-luxury-gold">Service Inclusions & Benefits</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg border-l-4 border-luxury-gold">
                      <div className="flex items-center space-x-3">
                        <Star className="w-6 h-6 text-luxury-gold" />
                        <span className="text-white font-semibold text-lg">{feature}</span>
                      </div>
                      <p className="text-gray-400 mt-2 ml-9">
                        Professional {feature.toLowerCase()} with attention to detail and excellence.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="process" className="mt-6">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-luxury-gold">Our Professional Process</h3>
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg border-l-4 border-luxury-gold">
                    <h4 className="text-luxury-gold font-bold text-lg mb-3">1. Initial Consultation & Assessment</h4>
                    <p className="text-gray-300 leading-relaxed">
                      We begin with a comprehensive discussion of your requirements, expectations, and event specifics to ensure we fully understand your vision.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg border-l-4 border-luxury-gold">
                    <h4 className="text-luxury-gold font-bold text-lg mb-3">2. Custom Planning & Strategy Development</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Our expert team develops a tailored service plan specific to your event needs, considering all logistical and protocol requirements.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg border-l-4 border-luxury-gold">
                    <h4 className="text-luxury-gold font-bold text-lg mb-3">3. Professional Execution & Monitoring</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Seamless delivery of services with continuous monitoring, quality assurance, and real-time adjustments to ensure perfection.
                    </p>
                  </div>
                  <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg border-l-4 border-luxury-gold">
                    <h4 className="text-luxury-gold font-bold text-lg mb-3">4. Follow-up Support & Future Planning</h4>
                    <p className="text-gray-300 leading-relaxed">
                      Post-event analysis, feedback collection, and ongoing support for future requirements to build lasting partnerships.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;
