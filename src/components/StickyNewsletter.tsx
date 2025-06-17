
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { X, Crown, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const StickyNewsletter = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [email, setEmail] = useState('');
  const [subscriberCount, setSubscriberCount] = useState(0);
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

  // Real-time subscriber count
  useEffect(() => {
    // Get initial count
    const getSubscriberCount = async () => {
      const { count } = await supabase
        .from('subscribers')
        .select('*', { count: 'exact', head: true })
        .eq('subscribed', true);
      setSubscriberCount(count || 0);
    };

    getSubscriberCount();

    // Set up real-time subscription
    const channel = supabase
      .channel('subscriber-changes')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'subscribers'
        },
        () => {
          // Refresh count when new subscriber is added
          getSubscriberCount();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const { data, error } = await supabase
        .from('subscribers')
        .insert([
          {
            email: email,
            subscribed: true,
            subscription_tier: 'newsletter'
          }
        ])
        .select();

      if (error) {
        if (error.code === '23505') { // Unique constraint violation
          toast({
            title: "🎩 Already in the Circle!",
            description: "This email is already part of our exclusive VIP community.",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "🎩 Welcome to the Inner Circle!",
          description: "You'll receive exclusive VIP updates and protocol insights.",
        });
      }

      setEmail('');
      setIsVisible(false);
      setIsDismissed(true);
    } catch (error: any) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Subscription failed",
        description: "There was an error joining our VIP list. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-br from-luxury-black via-luxury-black-light to-luxury-black border-t-2 border-luxury-gold shadow-2xl animate-slide-up mobile-safe-area">
      {/* Enhanced decorative top border with animated gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-luxury-gold-dark via-luxury-gold to-luxury-gold-light animate-shimmer"></div>
      
      {/* Close button - made larger and more prominent for mobile */}
      <button
        onClick={handleDismiss}
        className="absolute top-2 right-2 z-50 bg-luxury-gold/20 hover:bg-luxury-gold/40 active:bg-luxury-gold/50 text-luxury-gold hover:text-luxury-white transition-all duration-200 p-3 rounded-full backdrop-blur-sm border border-luxury-gold/40 hover:border-luxury-gold touch-target shadow-lg"
        aria-label="Close newsletter popup"
      >
        <X size={20} className="sm:w-5 sm:h-5" />
      </button>
      
      {/* Mobile-first optimized layout */}
      <div className="container mx-auto px-3 py-4 sm:px-6 sm:py-6">
        <div className="max-w-md mx-auto sm:max-w-6xl">
          
          {/* Header section - centered for mobile */}
          <div className="text-center mb-4 sm:mb-0 sm:flex sm:items-center sm:justify-between sm:text-left pr-8 sm:pr-6">
            
            {/* Icon and text section */}
            <div className="flex flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
              <div className="relative flex-shrink-0">
                <div className="bg-gradient-to-br from-luxury-gold to-luxury-gold-light rounded-full p-3 shadow-xl">
                  <Crown className="text-luxury-black" size={28} />
                </div>
                <div className="absolute -top-1 -right-1">
                  <Sparkles className="text-luxury-gold animate-pulse" size={18} />
                </div>
              </div>
              <div className="text-center sm:text-left">
                <h3 className="text-luxury-gold font-playfair font-bold text-xl sm:text-xl mb-1">
                  Join the Inner Circle
                </h3>
                <p className="text-luxury-white/90 text-sm sm:text-base leading-relaxed max-w-xs sm:max-w-none">
                  Get exclusive updates from <span className="text-luxury-gold font-semibold block sm:inline">Sir Ole VVIP Protocol</span>
                </p>
                {subscriberCount > 0 && (
                  <p className="text-luxury-gold text-xs mt-1">
                    {subscriberCount} VIP members and counting ✨
                  </p>
                )}
              </div>
            </div>

            {/* Form section - full width on mobile */}
            <div className="w-full sm:w-auto mt-4 sm:mt-0">
              <form onSubmit={handleSubscribe} className="space-y-3 sm:flex sm:space-y-0 sm:space-x-3">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full sm:min-w-[280px] bg-luxury-white/15 border-luxury-gold/50 text-luxury-white placeholder:text-luxury-white/70 focus:border-luxury-gold focus:ring-luxury-gold/50 h-12 px-4 rounded-xl backdrop-blur-md text-base"
                    required
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-luxury-gold/10 to-transparent pointer-events-none"></div>
                </div>
                <Button 
                  type="submit"
                  className="w-full sm:w-auto bg-gradient-to-r from-luxury-gold to-luxury-gold-light hover:from-luxury-gold-dark hover:to-luxury-gold text-luxury-black font-bold px-6 py-3 h-12 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-lg hover:shadow-luxury-gold/30 whitespace-nowrap rounded-xl touch-target"
                >
                  Subscribe Now
                </Button>
              </form>
            </div>
          </div>

          {/* Bottom decorative elements - only visible on larger screens */}
          <div className="hidden sm:flex justify-center mt-4 space-x-2">
            <div className="w-2 h-2 bg-luxury-gold rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-luxury-gold/60 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            <div className="w-2 h-2 bg-luxury-gold/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyNewsletter;
