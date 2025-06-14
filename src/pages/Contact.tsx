import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Mail, Clock, Users } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Controlled state for form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const resetForm = () => {
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { error } = await supabase.from('contact_submissions').insert([
      { name, email, subject: subject || null, message }
    ]);

    setIsLoading(false);

    if (error) {
      toast({
        title: "Error submitting message",
        description: error.message,
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting Sir Ole VVIP Protocol. We will respond to your inquiry within 24 hours.",
    });
    resetForm();
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["Golden Court, Silicon Valley Estate", "Eastern Bypass, Nairobi", "Kenya"]
    },
    {
      icon: Users,
      title: "Phone",
      details: ["+254712063461", "Available 24/7 for emergencies"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["sirolevipprotocol@gmail.com", "Response within 24 hours"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Mon-Fri: 8:00 AM - 6:00 PM", "Sat: 9:00 AM - 4:00 PM", "Sun: By Appointment"]
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-luxury-black mb-6">
            Contact <span className="text-gradient-gold">Sir Ole</span>
          </h1>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p className="text-xl text-luxury-black/70 max-w-3xl mx-auto">
            Ready to elevate your next event? Get in touch with our team of luxury protocol experts. We're here to make your vision a reality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-playfair font-bold text-luxury-black mb-8">Get in Touch</h2>
              <p className="text-luxury-black/70 text-lg mb-8">
                Whether you're planning a corporate event, diplomatic function, or private celebration, our team is ready to provide you with unmatched service excellence.
              </p>
            </div>

            <div className="grid gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-luxury-black/10 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center flex-shrink-0">
                        <info.icon className="text-luxury-gold" size={24} />
                      </div>
                      <div>
                        <h3 className="font-playfair font-semibold text-luxury-black text-lg mb-2">{info.title}</h3>
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-luxury-black/70">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <Card className="border-luxury-black/10">
              <CardContent className="p-0">
                <div className="bg-gradient-luxury h-64 rounded-lg flex items-center justify-center">
                  <div className="text-center text-luxury-white">
                    <MapPin className="mx-auto mb-4 text-luxury-gold" size={48} />
                    <h3 className="text-xl font-playfair font-semibold mb-2">Visit Our Office</h3>
                    <p className="text-luxury-white/80">
                      Golden Court, Silicon Valley Estate<br />
                      Eastern Bypass, Nairobi
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-2xl border-luxury-black/10">
              <CardHeader>
                <CardTitle className="text-2xl font-playfair text-luxury-black text-center">
                  Send Us a <span className="text-gradient-gold">Message</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-luxury-black font-medium">Name</Label>
                      <Input
                        id="name"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-luxury-black font-medium">Email</Label>
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
                  <div>
                    <Label htmlFor="subject" className="text-luxury-black font-medium">Subject</Label>
                    <Input
                      id="subject"
                      required
                      value={subject}
                      onChange={e => setSubject(e.target.value)}
                      className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message" className="text-luxury-black font-medium">Message</Label>
                    <Textarea
                      id="message"
                      rows={6}
                      required
                      placeholder="Tell us about your event or inquiry. Include details about dates, location, type of event, and any specific requirements..."
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold py-3 text-lg transition-all duration-300 hover:scale-105"
                  >
                    {isLoading ? 'Sending Message...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <div className="mt-8 bg-gradient-luxury rounded-xl p-6 text-luxury-white">
              <h3 className="text-xl font-playfair font-semibold text-luxury-gold mb-4">Why Contact Sir Ole?</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                  24-hour response guarantee
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                  Free initial consultation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                  Customized service proposals
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-luxury-gold rounded-full mr-3"></div>
                  Transparent pricing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
