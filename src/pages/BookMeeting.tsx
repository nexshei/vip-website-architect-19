
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';

const BookMeeting = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    eventDate: '',
    eventType: '',
    location: '',
    protocolOfficers: '',
    vision: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission delay
    setTimeout(() => {
      toast({
        title: "Meeting request submitted!",
        description: "Thank you for your request. We'll contact you within 24 hours.",
      });

      setFormData({
        fullName: '', email: '', phone: '', eventDate: '', 
        eventType: '', location: '', protocolOfficers: '', vision: ''
      });
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="pt-20">
      <div className="bg-gradient-luxury py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-playfair font-bold text-luxury-white mb-6">
            Book a <span className="text-luxury-gold">Meeting</span>
          </h1>
          <p className="text-xl text-luxury-white/90 max-w-3xl mx-auto">
            Schedule a consultation to discuss your VIP protocol and event management needs
          </p>
        </div>
      </div>

      <div className="py-20 bg-luxury-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  placeholder="Full Name"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                />
                <Input
                  type="date"
                  placeholder="Preferred Event Date"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Select value={formData.eventType} onValueChange={(value) => setFormData({ ...formData, eventType: value })}>
                  <SelectTrigger className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold">
                    <SelectValue placeholder="Event Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="corporate">Corporate Event</SelectItem>
                    <SelectItem value="wedding">Wedding</SelectItem>
                    <SelectItem value="diplomatic">Diplomatic Function</SelectItem>
                    <SelectItem value="private">Private Celebration</SelectItem>
                    <SelectItem value="government">Government Function</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>

                <Input
                  placeholder="Location/Venue"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                />
              </div>

              <Select value={formData.protocolOfficers} onValueChange={(value) => setFormData({ ...formData, protocolOfficers: value })}>
                <SelectTrigger className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold">
                  <SelectValue placeholder="Number of Protocol Officers Needed" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-5">1-5 Officers</SelectItem>
                  <SelectItem value="5-10">5-10 Officers</SelectItem>
                  <SelectItem value="10-20">10-20 Officers</SelectItem>
                  <SelectItem value="20+">20+ Officers</SelectItem>
                </SelectContent>
              </Select>

              <Textarea
                placeholder="Tell us about your vision and specific requirements..."
                rows={4}
                value={formData.vision}
                onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold resize-none"
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold py-3 transition-all duration-300"
              >
                {isLoading ? 'Submitting...' : 'Schedule Meeting'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookMeeting;
