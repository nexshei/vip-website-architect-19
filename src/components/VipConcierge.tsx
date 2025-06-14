
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { X, MessageCircle, Calendar, Users, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const VVIPConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    eventType: '',
    guestCount: '',
    date: '',
    location: '',
    services: [],
    name: '',
    email: '',
    phone: ''
  });
  const { toast } = useToast();

  const eventTypes = [
    'Corporate Event',
    'Diplomatic Function',
    'Private Celebration',
    'Wedding',
    'Gala Dinner',
    'Conference',
    'Product Launch',
    'Other'
  ];

  const services = [
    'Professional Ushering',
    'VVIP Security',
    'Protocol Management',
    'Event Planning',
    'Catering Coordination',
    'Transportation'
  ];

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = () => {
    toast({
      title: "Thank you for your inquiry!",
      description: "Your VVIP Concierge will contact you within 2 hours to discuss your requirements.",
    });
    setIsOpen(false);
    setCurrentStep(1);
    setFormData({
      eventType: '',
      guestCount: '',
      date: '',
      location: '',
      services: [],
      name: '',
      email: '',
      phone: ''
    });
  };

  const toggleService = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  return (
    <>
      {/* Floating Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group"
      >
        <MessageCircle size={24} />
        <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
          VVIP
        </div>
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-luxury-black text-luxury-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-300">
          Your Protocol Concierge
        </div>
      </button>

      {/* Chat Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
          <Card className="w-full max-w-md bg-luxury-white border-luxury-gold/20 shadow-2xl">
            <CardHeader className="bg-gradient-luxury text-luxury-white relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-3 right-3 z-10 bg-luxury-white/20 hover:bg-luxury-white/30 text-luxury-white p-2 rounded-full transition-all duration-200 touch-target backdrop-blur-sm border border-luxury-white/40"
                aria-label="Close modal"
              >
                <X size={18} className="font-bold" />
              </button>
              <CardTitle className="text-center pr-12">
                🎩 Your VVIP Protocol Concierge
              </CardTitle>
              <p className="text-center text-luxury-white/80 text-sm pr-12">
                Let's create something extraordinary together
              </p>
              
              {/* Progress Bar */}
              <div className="flex space-x-2 mt-4">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`flex-1 h-2 rounded-full ${
                      step <= currentStep ? 'bg-luxury-gold' : 'bg-luxury-white/30'
                    }`}
                  />
                ))}
              </div>
            </CardHeader>

            <CardContent className="p-6">
              {currentStep === 1 && (
                <div className="space-y-4">
                  <h3 className="font-playfair font-semibold text-luxury-black mb-4">
                    Tell us about your event
                  </h3>
                  
                  <div>
                    <Label className="text-luxury-black">Event Type</Label>
                    <Select onValueChange={(value) => setFormData(prev => ({ ...prev, eventType: value }))}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        {eventTypes.map((type) => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label className="text-luxury-black">Expected Guests</Label>
                      <Input
                        type="number"
                        placeholder="50"
                        value={formData.guestCount}
                        onChange={(e) => setFormData(prev => ({ ...prev, guestCount: e.target.value }))}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label className="text-luxury-black">Event Date</Label>
                      <Input
                        type="date"
                        value={formData.date}
                        onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label className="text-luxury-black">Location</Label>
                    <Input
                      placeholder="Nairobi, Kenya"
                      value={formData.location}
                      onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                      className="mt-2"
                    />
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-4">
                  <h3 className="font-playfair font-semibold text-luxury-black mb-4">
                    Select your services
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-3">
                    {services.map((service) => (
                      <label
                        key={service}
                        className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                          formData.services.includes(service)
                            ? 'border-luxury-gold bg-luxury-gold/10'
                            : 'border-gray-200 hover:border-luxury-gold/50'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => toggleService(service)}
                          className="sr-only"
                        />
                        <div className={`w-4 h-4 rounded border-2 mr-3 flex items-center justify-center ${
                          formData.services.includes(service)
                            ? 'border-luxury-gold bg-luxury-gold'
                            : 'border-gray-300'
                        }`}>
                          {formData.services.includes(service) && (
                            <div className="w-2 h-2 bg-white rounded-sm"></div>
                          )}
                        </div>
                        <span className="text-sm font-medium text-luxury-black">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-4">
                  <h3 className="font-playfair font-semibold text-luxury-black mb-4">
                    Your contact details
                  </h3>
                  
                  <div>
                    <Label className="text-luxury-black">Full Name</Label>
                    <Input
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label className="text-luxury-black">Email</Label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label className="text-luxury-black">Phone</Label>
                    <Input
                      type="tel"
                      placeholder="+254 700 000 000"
                      value={formData.phone}
                      onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                      className="mt-2"
                    />
                  </div>
                </div>
              )}

              <div className="flex justify-between mt-6 pt-4 border-t">
                {currentStep > 1 && (
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(currentStep - 1)}
                  >
                    Previous
                  </Button>
                )}
                
                <Button
                  onClick={currentStep === 3 ? handleSubmit : handleNext}
                  className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black ml-auto"
                >
                  {currentStep === 3 ? 'Submit Request' : 'Next Step'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default VVIPConcierge;
