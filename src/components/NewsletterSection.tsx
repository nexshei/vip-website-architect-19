
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Crown, Sparkles, Mail } from 'lucide-react';

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
    <section className="relative py-20 sm:py-24 bg-gradient-to-br from-luxury-black via-luxury-black-light to-luxury-black overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-luxury-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-luxury-gold-light rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-luxury-gold/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header with icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="bg-gradient-to-r from-luxury-gold to-luxury-gold-light rounded-full p-4 shadow-2xl">
                <Crown className="text-luxury-black" size={32} />
              </div>
              <div className="absolute -top-2 -right-2">
                <Sparkles className="text-luxury-gold animate-pulse" size={20} />
              </div>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-luxury-white mb-4 sm:mb-6">
            Be Our <span className="text-gradient-gold">VVIP Insider</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-luxury-white/90 mb-8 sm:mb-10 max-w-3xl mx-auto leading-relaxed">
            Get exclusive updates on our luxury events, services, and protocol tips delivered directly to your inbox. 
            <span className="block mt-2 text-luxury-gold font-medium">Join our elite community today.</span>
          </p>

          {/* Enhanced form */}
          <div className="max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-luxury-gold" size={20} />
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-luxury-white/10 border-luxury-gold/40 text-luxury-white placeholder:text-luxury-white/70 focus:border-luxury-gold focus:ring-luxury-gold/50 h-14 text-base rounded-lg backdrop-blur-sm"
                  required
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-luxury-gold/5 to-transparent pointer-events-none"></div>
              </div>
              
              <Button 
                type="submit" 
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-luxury-gold to-luxury-gold-light hover:from-luxury-gold-dark hover:to-luxury-gold text-luxury-black font-bold px-8 py-4 h-14 text-base transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-luxury-gold/40 relative overflow-hidden group"
              >
                <span className="relative z-10">
                  {isLoading ? 'Subscribing...' : 'Subscribe Now'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </form>

            <p className="text-luxury-white/70 text-sm mt-6 leading-relaxed">
              Join our exclusive community and stay informed about upcoming VVIP events and hospitality insights.
              <span className="block mt-1 text-luxury-gold">✨ No spam, only premium content</span>
            </p>
          </div>

          {/* Decorative bottom elements */}
          <div className="flex justify-center mt-12 space-x-3">
            <div className="w-3 h-3 bg-luxury-gold rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-luxury-gold/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-3 h-3 bg-luxury-gold/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
