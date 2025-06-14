
import { useEffect, useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, CreditCard, Crown, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import SubscriptionPlans from '@/components/SubscriptionPlans';

interface SubscriptionData {
  subscribed: boolean;
  subscription_tier: string | null;
  subscription_end: string | null;
  stripe_customer_id: string | null;
}

const Subscription = () => {
  const { user, loading } = useAuth();
  const [subscription, setSubscription] = useState<SubscriptionData | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    if (user) {
      fetchSubscription();
    }
  }, [user]);

  const fetchSubscription = async () => {
    if (!user) return;

    try {
      const { data, error } = await supabase
        .from('subscribers')
        .select('*')
        .eq('user_id', user.id)
        .maybeSingle();

      if (error && error.code !== 'PGRST116') {
        console.error('Error fetching subscription:', error);
        return;
      }

      setSubscription(data);
    } catch (error) {
      console.error('Error fetching subscription:', error);
    }
  };

  const handleManageSubscription = async () => {
    if (!user || !subscription?.stripe_customer_id) return;

    setIsLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('manage-stripe-subscription', {
        body: {
          customerId: subscription.stripe_customer_id
        }
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Error managing subscription:', error);
      toast({
        title: "Error",
        description: "Failed to open subscription management. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-luxury flex items-center justify-center">
        <div className="text-luxury-gold text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gradient-luxury flex items-center justify-center">
        <Card className="max-w-md mx-auto bg-luxury-white/95 backdrop-blur-sm">
          <CardHeader className="text-center">
            <AlertCircle className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
            <CardTitle className="text-luxury-black">Authentication Required</CardTitle>
            <CardDescription>Please sign in to view your subscription.</CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black">
              Sign In
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-luxury">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-playfair font-bold text-luxury-gold mb-4">
              My Subscription
            </h1>
            <p className="text-luxury-white/80">
              Manage your Sir Ole VVIP Protocol subscription
            </p>
          </div>

          {subscription?.subscribed ? (
            <Card className="bg-luxury-white/95 backdrop-blur-sm shadow-2xl mb-8">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Crown className="w-8 h-8 text-luxury-gold" />
                    <div>
                      <CardTitle className="text-2xl text-luxury-black">
                        Active Subscription
                      </CardTitle>
                      <CardDescription>
                        You have access to premium protocol services
                      </CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Crown className="w-5 h-5 text-luxury-gold" />
                    <div>
                      <p className="font-medium text-luxury-black">Plan</p>
                      <p className="text-luxury-black/70 capitalize">
                        {subscription.subscription_tier || 'Premium Protocol'}
                      </p>
                    </div>
                  </div>
                  {subscription.subscription_end && (
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-luxury-gold" />
                      <div>
                        <p className="font-medium text-luxury-black">Next Billing</p>
                        <p className="text-luxury-black/70">
                          {new Date(subscription.subscription_end).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="pt-4 border-t">
                  <Button
                    onClick={handleManageSubscription}
                    disabled={isLoading}
                    className="bg-luxury-black hover:bg-luxury-black/80 text-luxury-white"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    {isLoading ? 'Loading...' : 'Manage Subscription'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="bg-luxury-white/95 backdrop-blur-sm shadow-2xl mb-8">
              <CardHeader className="text-center">
                <AlertCircle className="w-12 h-12 text-luxury-gold mx-auto mb-4" />
                <CardTitle className="text-2xl text-luxury-black">No Active Subscription</CardTitle>
                <CardDescription>
                  Subscribe to access our premium protocol services
                </CardDescription>
              </CardHeader>
            </Card>
          )}

          <SubscriptionPlans />
        </div>
      </div>
    </div>
  );
};

export default Subscription;
