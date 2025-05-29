
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Users, Shield, Clock, Calendar, ArrowLeft, X } from 'lucide-react';

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
      <DialogContent className="max-w-6xl w-full h-full sm:h-[85vh] bg-black text-white overflow-hidden p-0 sm:p-6">
        {/* Mobile-optimized header */}
        <DialogHeader className="border-b border-gray-800 p-4 sm:p-6 sm:pb-6">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start space-x-3 flex-1 min-w-0">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-luxury-gold to-yellow-500 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
              </div>
              <div className="min-w-0 flex-1">
                <DialogTitle className="text-xl sm:text-3xl font-playfair text-luxury-gold mb-1 leading-tight">{service.title}</DialogTitle>
                <p className="text-gray-400 text-sm sm:text-lg">Comprehensive Service Details & Information</p>
              </div>
            </div>
            
            {/* Close button - mobile friendly */}
            <Button 
              onClick={onClose}
              variant="ghost" 
              size="icon"
              className="text-gray-300 hover:bg-gray-800 hover:text-luxury-gold transition-all duration-300 flex-shrink-0 h-10 w-10"
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
          
          {/* Back button - full width on mobile */}
          <div className="mt-4 sm:hidden">
            <Button 
              onClick={onClose}
              variant="outline" 
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-luxury-gold transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </div>
          
          {/* Desktop back button */}
          <div className="hidden sm:block absolute top-6 right-16">
            <Button 
              onClick={onClose}
              variant="outline" 
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:border-luxury-gold transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Button>
          </div>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto p-4 sm:p-0">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-900 mb-4 sm:mb-6 mx-0">
              <TabsTrigger value="overview" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-black font-semibold text-sm sm:text-base">Overview</TabsTrigger>
              <TabsTrigger value="services" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-black font-semibold text-sm sm:text-base">Features</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="mt-4 sm:mt-6 space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-3 mb-4 sm:mb-6">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-gold mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-luxury-gold mb-2 sm:mb-3">Service Overview</h3>
                  <p className="text-gray-300 leading-relaxed text-sm sm:text-lg">{service.detailDescription}</p>
                </div>
              </div>

              <div className="mb-6 sm:mb-8">
                <h4 className="text-lg sm:text-xl font-semibold text-luxury-gold mb-3 sm:mb-4">Key Features & Capabilities:</h4>
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  {service.keyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-gray-900/50 p-3 sm:p-4 rounded-lg">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-luxury-gold rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300 text-xs sm:text-sm leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:gap-8">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-lg border border-luxury-gold/20">
                  <h4 className="text-lg sm:text-xl font-semibold text-luxury-gold mb-3 sm:mb-4">Client Testimonial</h4>
                  <blockquote className="text-gray-300 italic border-l-4 border-luxury-gold pl-4 sm:pl-6 text-sm sm:text-lg leading-relaxed">
                    "{service.testimonial}"
                  </blockquote>
                  <div className="mt-3 sm:mt-4 flex items-center space-x-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-luxury-gold fill-current" />
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-4 sm:p-6 rounded-lg border border-luxury-gold/20">
                  <h4 className="text-lg sm:text-xl font-semibold text-luxury-gold mb-3 sm:mb-4">Performance Statistics</h4>
                  <div className="space-y-3 sm:space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm sm:text-base">Events Completed:</span>
                      <span className="text-white font-bold text-sm sm:text-lg">{stats.events}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm sm:text-base">Client Satisfaction:</span>
                      <span className="text-luxury-gold font-bold text-sm sm:text-lg">{stats.satisfaction}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400 text-sm sm:text-base">Active Clients:</span>
                      <span className="text-white font-bold text-sm sm:text-lg">{stats.clients}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 sm:pt-6">
                <Button 
                  onClick={onRequestService}
                  className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-lg transition-all duration-300 hover:scale-105"
                >
                  Request This Service
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="services" className="mt-4 sm:mt-6">
              <div className="space-y-4 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-luxury-gold">Service Inclusions & Benefits</h3>
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
                  {service.features.map((feature, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 sm:p-6 rounded-lg border-l-4 border-luxury-gold">
                      <div className="flex items-center space-x-3">
                        <Star className="w-5 h-5 sm:w-6 sm:h-6 text-luxury-gold" />
                        <span className="text-white font-semibold text-sm sm:text-lg">{feature}</span>
                      </div>
                      <p className="text-gray-400 mt-2 ml-8 sm:ml-9 text-xs sm:text-sm">
                        Professional {feature.toLowerCase()} with attention to detail and excellence.
                      </p>
                    </div>
                  ))}
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
