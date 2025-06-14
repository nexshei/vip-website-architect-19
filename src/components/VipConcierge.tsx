
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { X, Phone, Mail, MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const VipConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Controlled form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventType, setEventType] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [location, setLocation] = useState('');
  const [protocolOfficers, setProtocolOfficers] = useState('');
  const [requirements, setRequirements] = useState('');

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setEventDate('');
    setEventType('');
    setServiceType('');
    setLocation('');
    setProtocolOfficers('');
    setRequirements('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await supabase.from('vvip_service_requests').insert([
      {
        full_name: fullName,
        email,
        phone,
        event_date: eventDate || null,
        event_type: eventType || null,
        service_type: serviceType || null,
        location: location || null,
        protocol_officers: protocolOfficers || null,
        requirements: requirements || null,
      }
    ]);

    setIsLoading(false);

    if (error) {
      toast({
        title: "Error submitting request",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Service Request Submitted!",
      description: "Thank you for your request. Our team will contact you within 24 hours to discuss your requirements.",
    });

    setIsOpen(false);
    resetForm();
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Request VVIP Service
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-luxury-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-luxury p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-playfair font-bold text-luxury-gold">VVIP Service Request</h2>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="text-luxury-white hover:bg-luxury-white/20"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <p className="text-luxury-white/80 mt-2">
            Let us know how we can assist you with our premium protocol services.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName" className="text-luxury-black font-medium">Full Name</Label>
              <Input 
                id="fullName"
                required
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-luxury-black font-medium">Email Address</Label>
              <Input 
                id="email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="text-luxury-black font-medium">Phone Number</Label>
              <Input 
                id="phone"
                type="tel"
                required
                value={phone}
                onChange={e => setPhone(e.target.value)}
                className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
              />
            </div>
            <div>
              <Label htmlFor="eventDate" className="text-luxury-black font-medium">Preferred Event Date</Label>
              <Input 
                id="eventDate"
                type="date"
                value={eventDate}
                onChange={e => setEventDate(e.target.value)}
                className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="eventType" className="text-luxury-black font-medium">Event Type</Label>
              <Select value={eventType} onValueChange={setEventType}>
                <SelectTrigger className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold">
                  <SelectValue placeholder="Select event type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="corporate">Corporate Event</SelectItem>
                  <SelectItem value="wedding">Wedding</SelectItem>
                  <SelectItem value="diplomatic">Diplomatic Function</SelectItem>
                  <SelectItem value="private">Private Celebration</SelectItem>
                  <SelectItem value="government">Government Function</SelectItem>
                  <SelectItem value="international">International Conference</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="serviceType" className="text-luxury-black font-medium">Service Type</Label>
              <Select value={serviceType} onValueChange={setServiceType}>
                <SelectTrigger className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold">
                  <SelectValue placeholder="Select service type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="vvip-protocol">VVIP Protocol Management</SelectItem>
                  <SelectItem value="diplomatic-protocol">Diplomatic Protocol Services</SelectItem>
                  <SelectItem value="corporate-protocol">Corporate Protocol Services</SelectItem>
                  <SelectItem value="event-coordination">Event Coordination & Management</SelectItem>
                  <SelectItem value="security-management">Security & Logistics Management</SelectItem>
                  <SelectItem value="hospitality">Premium Hospitality Services</SelectItem>
                  <SelectItem value="consultation">Protocol Consultation</SelectItem>
                  <SelectItem value="training">Protocol Training & Development</SelectItem>
                  <SelectItem value="full-service">Full-Service Protocol Package</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="location" className="text-luxury-black font-medium">Location / Venue</Label>
              <Input 
                id="location"
                value={location}
                onChange={e => setLocation(e.target.value)}
                className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
              />
            </div>
            <div>
              <Label htmlFor="protocolOfficers" className="text-luxury-black font-medium">Number of Protocol Officers Needed</Label>
              <Select value={protocolOfficers} onValueChange={setProtocolOfficers}>
                <SelectTrigger className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold">
                  <SelectValue placeholder="Select range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-5">1-5</SelectItem>
                  <SelectItem value="5-10">5-10</SelectItem>
                  <SelectItem value="10-20">10-20</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label htmlFor="requirements" className="text-luxury-black font-medium">Service Requirements</Label>
            <Textarea 
              id="requirements"
              rows={4}
              placeholder="Please describe your specific requirements, expected number of guests, and any special considerations..."
              value={requirements}
              onChange={e => setRequirements(e.target.value)}
              className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold resize-none"
            />
          </div>

          <Button 
            type="submit" 
            disabled={isLoading}
            className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold py-3 transition-all duration-300"
          >
            {isLoading ? 'Submitting Request...' : 'Submit Service Request'}
          </Button>
        </form>

        <div className="p-6 border-t border-luxury-black/10">
          <h3 className="text-xl font-playfair font-bold text-luxury-black mb-4">Contact Us</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-luxury-black/80">
              <Phone className="h-5 w-5" />
              <a href="tel:0712063461" className="hover:text-luxury-gold transition-colors">
                0712063461
              </a>
            </div>
            <div className="flex items-center gap-2 text-luxury-black/80">
              <Mail className="h-5 w-5" />
              <a href="mailto:sirolevvipprotocol@gmail.com" className="hover:text-luxury-gold transition-colors">
                sirolevvipprotocol@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-luxury-black/80">
              <MapPin className="h-5 w-5" />
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors">
                Golden Court, Silicon Valley Estate, Eastern Bypass, Nairobi
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VipConcierge;
