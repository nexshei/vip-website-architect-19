import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const BookMeeting = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Controlled form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [location, setLocation] = useState('');
  const [protocolOfficers, setProtocolOfficers] = useState('');
  const [vision, setVision] = useState('');

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setEventType('');
    setEventDate('');
    setLocation('');
    setProtocolOfficers('');
    setVision('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await supabase.from('meeting_requests').insert([
      {
        full_name: fullName,
        email,
        phone,
        event_type: eventType || null,
        event_date: eventDate || null,
        location: location || null,
        protocol_officers: protocolOfficers || null,
        vision: vision || null,
      }
    ]);

    setIsLoading(false);

    if (error) {
      toast({
        title: "Error submitting meeting request",
        description: error.message,
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Meeting Request Submitted!",
      description: "Thank you for your interest. Our VVIP consultation team will contact you within 24 hours to schedule your meeting.",
    });

    resetForm();
  };

  return (
    <div className="pt-20 min-h-screen bg-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-luxury-black mb-6">
              Book Your <span className="text-gradient-gold">VVIP Consultation</span>
            </h1>
            <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
            <p className="text-xl text-luxury-black/70 max-w-2xl mx-auto">
              Let's discuss how we can elevate your next event to extraordinary heights of sophistication and excellence.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-luxury-white shadow-2xl rounded-2xl p-8 border border-luxury-black/10">
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    <Label htmlFor="eventType" className="text-luxury-black font-medium">Type of Event</Label>
                    <Select value={eventType} onValueChange={setEventType}>
                      <SelectTrigger className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="corporate">Corporate Event</SelectItem>
                        <SelectItem value="wedding">Wedding</SelectItem>
                        <SelectItem value="diplomatic">Diplomatic Function</SelectItem>
                        <SelectItem value="private">Private Celebration</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
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
                  <div>
                    <Label htmlFor="location" className="text-luxury-black font-medium">Location / Venue</Label>
                    <Input
                      id="location"
                      value={location}
                      onChange={e => setLocation(e.target.value)}
                      className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>
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

                <div>
                  <Label htmlFor="vision" className="text-luxury-black font-medium">Describe Your Vision</Label>
                  <Textarea
                    id="vision"
                    rows={5}
                    placeholder="Tell us about your event vision, expected number of guests, specific requirements, and how we can help make it extraordinary..."
                    value={vision}
                    onChange={e => setVision(e.target.value)}
                    className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold py-3 text-lg transition-all duration-300 hover:scale-105"
                >
                  {isLoading ? 'Submitting Request...' : 'Request VVIP Consultation'}
                </Button>
              </form>
            </div>

            {/* Info Panel */}
            <div className="bg-gradient-luxury rounded-2xl p-8 text-luxury-white">
              <h3 className="text-2xl font-playfair font-bold text-luxury-gold mb-6">Why Choose Sir Ole?</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-luxury-gold mb-2">Unmatched Excellence</h4>
                  <p className="text-luxury-white/80">Years of experience serving high-profile clients and diplomatic functions with impeccable attention to detail.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-luxury-gold mb-2">Personalized Service</h4>
                  <p className="text-luxury-white/80">Every event is tailored to your unique vision and requirements, ensuring a truly bespoke experience.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-luxury-gold mb-2">Professional Team</h4>
                  <p className="text-luxury-white/80">Our highly trained professionals bring expertise in protocol, security, and hospitality management.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-luxury-gold mb-2">Comprehensive Solutions</h4>
                  <p className="text-luxury-white/80">From planning to execution, we handle every aspect to ensure a seamless and memorable event.</p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-luxury-white/10 rounded-lg border border-luxury-gold/20">
                <h4 className="font-semibold text-luxury-gold mb-2">Quick Response Guarantee</h4>
                <p className="text-luxury-white/80 text-sm">We respond to all consultation requests within 24 hours and offer flexible meeting arrangements to suit your schedule.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMeeting;
