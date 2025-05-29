
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Users, Shield, Clock, Calendar } from 'lucide-react';

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
      <DialogContent className="max-w-6xl h-[80vh] bg-black text-white overflow-hidden">
        <DialogHeader className="border-b border-gray-800 pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                <service.icon className="w-6 h-6 text-black" />
              </div>
              <div>
                <DialogTitle className="text-2xl font-playfair text-luxury-gold">{service.title}</DialogTitle>
                <p className="text-gray-400">Comprehensive Service Details</p>
              </div>
            </div>
            <Button 
              onClick={onClose}
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800"
            >
              Back to Overview
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-900">
              <TabsTrigger value="overview" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-black">Overview</TabsTrigger>
              <TabsTrigger value="services" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-black">Services</TabsTrigger>
              <TabsTrigger value="process" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-black">Process</TabsTrigger>
              <TabsTrigger value="pricing" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-black">Pricing</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-6 space-y-6">
              <div className="flex items-start space-x-2 mb-4">
                <Shield className="w-5 h-5 text-luxury-gold mt-1" />
                <div>
                  <h3 className="text-lg font-semibold text-luxury-gold mb-2">Service Overview</h3>
                  <p className="text-gray-300 leading-relaxed">{service.detailDescription}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-luxury-gold mb-3">Key Features:</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-2">
                      <div className="w-2 h-2 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-luxury-gold mb-2">Client Testimonial</h4>
                  <blockquote className="text-gray-300 italic border-l-2 border-luxury-gold pl-4">
                    "{service.testimonial}"
                  </blockquote>
                </div>

                <div className="bg-gray-900 p-4 rounded-lg">
                  <h4 className="text-lg font-semibold text-luxury-gold mb-3">Performance Stats</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Events Completed:</span>
                      <span className="text-white font-semibold">{stats.events}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Client Satisfaction:</span>
                      <span className="text-white font-semibold">{stats.satisfaction}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Active Clients:</span>
                      <span className="text-white font-semibold">{stats.clients}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Button 
                  onClick={onRequestService}
                  className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold px-8 py-3"
                >
                  Request This Service
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-luxury-gold">Service Inclusions</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="bg-gray-900 p-4 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-luxury-gold" />
                        <span className="text-white font-medium">{feature}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="process" className="mt-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-luxury-gold">Our Process</h3>
                <div className="space-y-4">
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <h4 className="text-luxury-gold font-semibold mb-2">1. Initial Consultation</h4>
                    <p className="text-gray-300">We begin with a comprehensive discussion of your requirements and expectations.</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <h4 className="text-luxury-gold font-semibold mb-2">2. Custom Planning</h4>
                    <p className="text-gray-300">Our team develops a tailored service plan specific to your event needs.</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <h4 className="text-luxury-gold font-semibold mb-2">3. Professional Execution</h4>
                    <p className="text-gray-300">Seamless delivery of services with continuous monitoring and quality assurance.</p>
                  </div>
                  <div className="bg-gray-900 p-4 rounded-lg">
                    <h4 className="text-luxury-gold font-semibold mb-2">4. Follow-up Support</h4>
                    <p className="text-gray-300">Post-event analysis and ongoing support for future requirements.</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="pricing" className="mt-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-luxury-gold">Investment Information</h3>
                <div className="bg-gray-900 p-6 rounded-lg">
                  <p className="text-gray-300 mb-4">
                    Our pricing is customized based on your specific requirements, event size, duration, and complexity. 
                    We offer transparent, competitive rates with no hidden fees.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Base Service Rate:</span>
                      <span className="text-white">Custom Quote</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Minimum Engagement:</span>
                      <span className="text-white">4 Hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Advance Booking:</span>
                      <span className="text-white">Recommended</span>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button 
                      onClick={onRequestService}
                      className="bg-luxury-gold hover:bg-luxury-gold-dark text-black font-semibold"
                    >
                      Get Custom Quote
                    </Button>
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
