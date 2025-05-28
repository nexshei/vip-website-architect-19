
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Crown } from 'lucide-react';
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
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-luxury border-t-2 border-luxury-gold shadow-2xl animate-slide-up">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="bg-luxury-gold rounded-full p-2">
              <Crown className="text-luxury-black" size={20} />
            </div>
            <div>
              <h3 className="text-luxury-gold font-playfair font-semibold">Join the Inner Circle</h3>
              <p className="text-luxury-white/80 text-sm">Get exclusive updates from Sir Ole VVIP Protocol</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <form onSubmit={handleSubscribe} className="flex items-center space-x-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-luxury-white/10 border-luxury-gold/30 text-luxury-white placeholder:text-luxury-white/60 focus:border-luxury-gold min-w-[200px]"
                required
              />
              <Button 
                type="submit"
                className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>

            <button
              onClick={handleDismiss}
              className="text-luxury-white/70 hover:text-luxury-gold transition-colors ml-2"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNewsletter;
