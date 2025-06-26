
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/send-notifications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'newsletter',
          email: email
        }),
      });

      if (response.ok) {
        toast({
          title: "Successfully subscribed!",
          description: "Thank you for subscribing to our newsletter.",
        });
        setEmail('');
      } else {
        throw new Error('Failed to subscribe');
      }
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Error subscribing",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-luxury">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-luxury-white mb-6">
            Stay Updated with Our Latest <span className="text-luxury-gold">Events</span>
          </h2>
          <p className="text-xl text-luxury-white/90 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive events, 
            luxury experiences, and VIP services.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-luxury-white border-luxury-white text-luxury-black placeholder:text-luxury-black/60 focus:ring-luxury-gold focus:border-luxury-gold"
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold px-8 py-3 whitespace-nowrap transition-all duration-300"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>
          
          <p className="text-luxury-white/70 text-sm mt-4">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
