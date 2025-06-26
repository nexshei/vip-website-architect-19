
import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const StickyNewsletter = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email, source: 'sticky_newsletter' }]);

      if (error) {
        throw error;
      }

      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
      setIsVisible(false);
    } catch (error: any) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Error subscribing",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-40 max-w-sm mx-auto">
      <div className="bg-luxury-gold p-4 rounded-lg shadow-lg border border-luxury-black/10">
        <div className="flex justify-between items-start mb-3">
          <h3 className="font-semibold text-luxury-black">Stay Updated!</h3>
          <button
            onClick={() => setIsVisible(false)}
            className="text-luxury-black/60 hover:text-luxury-black transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <p className="text-sm text-luxury-black/80 mb-3">
          Get exclusive updates on luxury events and VIP services.
        </p>
        <form onSubmit={handleSubmit} className="space-y-2">
          <Input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-luxury-white border-luxury-black/20 text-luxury-black placeholder:text-luxury-black/60 focus:ring-luxury-black focus:border-luxury-black text-sm"
          />
          <Button
            type="submit"
            disabled={isLoading}
            className="w-full bg-luxury-black hover:bg-luxury-black/90 text-luxury-white font-medium py-2 text-sm transition-all duration-300"
          >
            {isLoading ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default StickyNewsletter;
