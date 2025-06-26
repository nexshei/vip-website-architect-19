import { useState } from 'react';
import SEO from '../components/SEO';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const contactSchemaData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "Sir Ole VVIP Protocol Ltd",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+254712063461",
        "email": "info@sirolevvipprotocolltd.co.ke",
        "contactType": "customer service",
        "availableLanguage": "English"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Golden Court, Silicon Valley Estate, Eastern Bypass",
        "addressLocality": "Nairobi",
        "addressCountry": "Kenya"
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Store in database
      const { error } = await supabase
        .from('contact_messages')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          message: formData.message
        });

      if (error) throw error;

      // Send email notification
      try {
        const { error: notificationError } = await supabase.functions.invoke('send-notifications', {
          body: {
            type: 'contact',
            name: formData.fullName,
            email: formData.email,
            message: formData.message
          }
        });

        if (notificationError) {
          console.error('Email notification error:', notificationError);
        }
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      setFormData({ fullName: '', email: '', message: '' });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Contact Sir Ole VVIP Protocol Ltd | Get Quote for VIP Services Nairobi"
        description="Contact Sir Ole VVIP Protocol Ltd for premium VIP protocol services, corporate event management, and luxury hospitality in Nairobi. Get a personalized quote today."
        keywords="contact VIP protocol services, Sir Ole contact information, VIP services quote Nairobi, protocol services inquiry, luxury event management contact"
        url="https://sirolevvipprotocol.com/contact"
        schemaData={contactSchemaData}
      />
      <div className="pt-20">
        <header className="bg-gradient-luxury py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl font-playfair font-bold text-luxury-white mb-6">
              Contact <span className="text-luxury-gold">Us</span>
            </h1>
            <p className="text-xl text-luxury-white/90 max-w-3xl mx-auto">
              Get in touch with our team for inquiries about our VIP protocol and event management services
            </p>
          </div>
        </header>

        <section className="py-20 bg-luxury-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-playfair font-bold text-luxury-black mb-6">Get In Touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                        <span className="text-luxury-black font-bold">📧</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-luxury-black">Email</h3>
                        <p className="text-luxury-black/70">info@sirolevvipprotocolltd.co.ke</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-center justify-center">
                        <span className="text-luxury-black font-bold">📱</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-luxury-black">Phone</h3>
                        <p className="text-luxury-black/70">0712063461</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-luxury-gold rounded-full flex items-centered justify-center">
                        <span className="text-luxury-black font-bold">📍</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-luxury-black">Address</h3>
                        <p className="text-luxury-black/70">Golden Court, Silicon Valley Estate, Eastern Bypass, Nairobi</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Input
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                        aria-label="Full Name"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                        aria-label="Email Address"
                      />
                    </div>
                    <div>
                      <Textarea
                        placeholder="Your Message"
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold resize-none"
                        aria-label="Your Message"
                      />
                    </div>
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold py-3 transition-all duration-300"
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
