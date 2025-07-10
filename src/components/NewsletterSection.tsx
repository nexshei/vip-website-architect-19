
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { supabase } from '@/integrations/supabase/client';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [unsubscribeEmail, setUnsubscribeEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isUnsubscribing, setIsUnsubscribing] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([{ email, source: 'newsletter_section' }]);

      if (error) {
        throw error;
      }

      toast({
        title: "Successfully subscribed!",
        description: "Thank you for subscribing to our newsletter.",
      });
      setEmail('');
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

  const handleUnsubscribe = async () => {
    if (!unsubscribeEmail) return;

    setIsUnsubscribing(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .update({ is_active: false, unsubscribed_at: new Date().toISOString() })
        .eq('email', unsubscribeEmail)
        .eq('is_active', true);

      if (error) {
        throw error;
      }

      toast({
        title: "Successfully unsubscribed!",
        description: "You have been unsubscribed from our newsletter.",
      });
      setUnsubscribeEmail('');
      setIsDialogOpen(false);
    } catch (error: any) {
      console.error('Error unsubscribing from newsletter:', error);
      toast({
        title: "Error unsubscribing",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsUnsubscribing(false);
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
            We respect your privacy. {' '}
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <button className="text-luxury-gold hover:text-luxury-gold-dark underline transition-colors duration-200">
                  Unsubscribe
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Unsubscribe from Newsletter</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to unsubscribe from receiving exclusive updates on luxury events and VIP services from our website?
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={unsubscribeEmail}
                    onChange={(e) => setUnsubscribeEmail(e.target.value)}
                    required
                  />
                </div>
                <DialogFooter className="flex-col sm:flex-row gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                    className="w-full sm:w-auto"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={handleUnsubscribe}
                    disabled={isUnsubscribing || !unsubscribeEmail}
                    variant="destructive"
                    className="w-full sm:w-auto"
                  >
                    {isUnsubscribing ? 'Unsubscribing...' : 'Confirm Unsubscribe'}
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            {' '} at any time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
