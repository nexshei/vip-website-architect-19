
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
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Successfully subscribed!",
      description: "Welcome to the Sir Ole VVIP family. You'll receive our exclusive updates soon.",
    });
    
    setEmail('');
    setIsLoading(false);
  };

  return (
    <section className="py-20 bg-gradient-luxury">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-luxury-white mb-6">
            Be Our <span className="text-gradient-gold">VIP Insider</span>
          </h2>
          <p className="text-xl text-luxury-white/80 mb-8 max-w-2xl mx-auto">
            Get exclusive updates on our luxury events, services, and protocol tips delivered directly to your inbox.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-luxury-white/10 border-luxury-gold/30 text-luxury-white placeholder:text-luxury-white/60 focus:border-luxury-gold focus:ring-luxury-gold"
              required
            />
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold px-8 py-2 transition-all duration-300 hover:scale-105"
            >
              {isLoading ? 'Subscribing...' : 'Subscribe'}
            </Button>
          </form>

          <p className="text-luxury-white/60 text-sm mt-4">
            Join our exclusive community and stay informed about upcoming VIP events and hospitality insights.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
