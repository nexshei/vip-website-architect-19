
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Crown, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const StickyNewsletter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling down 50% of viewport height
      if (scrollPosition > windowHeight * 0.5 && !isDismissed) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    toast({
      title: "🎩 Welcome to the Inner Circle!",
      description: "You'll receive exclusive VIP updates and protocol insights.",
    });

    setEmail('');
    setIsVisible(false);
    setIsDismissed(true);
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-luxury-black via-luxury-black-light to-luxury-black border-t-2 border-luxury-gold shadow-2xl animate-slide-up">
      {/* Decorative top border with gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-luxury-gold-dark via-luxury-gold to-luxury-gold-light"></div>
      
      {/* Mobile-optimized layout */}
      <div className="container mx-auto px-4 py-4 sm:py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-6xl mx-auto gap-4 sm:gap-6">
          
          {/* Left section with icon and text */}
          <div className="flex items-center space-x-4 text-center sm:text-left">
            <div className="relative">
              <div className="bg-gradient-to-r from-luxury-gold to-luxury-gold-light rounded-full p-3 shadow-lg">
                <Crown className="text-luxury-black" size={24} />
              </div>
              <div className="absolute -top-1 -right-1">
                <Sparkles className="text-luxury-gold animate-pulse" size={16} />
              </div>
            </div>
            <div className="flex-1">
              <h3 className="text-luxury-gold font-playfair font-bold text-lg sm:text-xl mb-1">
                Join the Inner Circle
              </h3>
              <p className="text-luxury-white/90 text-sm sm:text-base leading-relaxed">
                Get exclusive updates from <span className="text-luxury-gold font-semibold">Sir Ole VVIP Protocol</span>
              </p>
            </div>
          </div>

          {/* Right section with form and close button */}
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <div className="relative w-full sm:w-auto">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full sm:min-w-[250px] bg-luxury-white/10 border-luxury-gold/40 text-luxury-white placeholder:text-luxury-white/70 focus:border-luxury-gold focus:ring-luxury-gold/50 h-12 px-4 rounded-lg backdrop-blur-sm"
                  required
                />
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-luxury-gold/5 to-transparent pointer-events-none"></div>
              </div>
              <Button 
                type="submit"
                className="w-full sm:w-auto bg-gradient-to-r from-luxury-gold to-luxury-gold-light hover:from-luxury-gold-dark hover:to-luxury-gold text-luxury-black font-bold px-6 py-3 h-12 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-luxury-gold/30 whitespace-nowrap"
              >
                Subscribe Now
              </Button>
            </form>

            {/* Close button */}
            <button
              onClick={handleDismiss}
              className="text-luxury-white/70 hover:text-luxury-gold transition-colors p-2 hover:bg-luxury-gold/10 rounded-lg ml-2"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Bottom decorative elements */}
        <div className="hidden sm:flex justify-center mt-4 space-x-2">
          <div className="w-2 h-2 bg-luxury-gold rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-luxury-gold/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="w-2 h-2 bg-luxury-gold/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default StickyNewsletter;
