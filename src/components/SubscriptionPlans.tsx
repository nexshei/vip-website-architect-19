
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Crown, Star, Diamond } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const plans = [
  {
    id: 'basic',
    name: 'Basic Protocol',
    price: 150,
    interval: 'month',
    description: 'Essential protocol services for small events',
    features: [
      'Basic event protocol guidance',
      '1-2 protocol officers',
      'Standard guest management',
      'Email support',
      'Basic ceremony coordination'
    ],
    icon: Star,
    popular: false
  },
  {
    id: 'premium',
    name: 'Premium Protocol',
    price: 350,
    interval: 'month',
    description: 'Comprehensive protocol services for important events',
    features: [
      'Advanced protocol management',
      '3-5 experienced protocol officers',
      'VIP guest handling',
      'Priority phone support',
      'Full ceremony coordination',
      'Security liaison services',
      'Custom protocol planning'
    ],
    icon: Crown,
    popular: true
  },
  {
    id: 'elite',
    name: 'Elite Protocol',
    price: 750,
    interval: 'month',
    description: 'Ultimate protocol services for high-profile events',
    features: [
      'Complete protocol suite',
      '5+ senior protocol officers',
      'Diplomatic protocol expertise',
      '24/7 dedicated support',
      'Full event management',
      'Advanced security coordination',
      'International protocol standards',
      'Crisis management support',
      'Custom training sessions'
    ],
    icon: Diamond,
    popular: false
  }
];

const SubscriptionPlans = () => {
  const [isLoading, setIsLoading] = useState<string | null>(null);
  const { user } = useAuth();
  const { toast } = useToast();

  const handleSubscribe = async (planId: string, priceId: string) => {
    if (!user) {
      toast({
        title: "Authentication Required",
        description: "Please sign in to subscribe to a plan.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(planId);

    try {
      const { data, error } = await supabase.functions.invoke('create-stripe-subscription', {
        body: {
          priceId,
          userId: user.id,
          email: user.email
        }
      });

      if (error) throw error;

      if (data?.url) {
        window.open(data.url, '_blank');
      }
    } catch (error) {
      console.error('Subscription error:', error);
      toast({
        title: "Subscription Error",
        description: "Failed to create subscription. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <section className="py-16 bg-luxury-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-playfair font-bold text-luxury-black mb-4">
            Choose Your Protocol Plan
          </h2>
          <p className="text-xl text-luxury-black/70 max-w-3xl mx-auto">
            Select the perfect protocol service level for your events. All plans include our commitment to excellence and attention to detail.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const Icon = plan.icon;
            return (
              <Card 
                key={plan.id} 
                className={`relative ${plan.popular ? 'ring-2 ring-luxury-gold scale-105' : ''} bg-white shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-luxury-gold text-luxury-black">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-luxury-gold/10 rounded-full w-fit">
                    <Icon className="w-8 h-8 text-luxury-gold" />
                  </div>
                  <CardTitle className="text-2xl font-playfair text-luxury-black">
                    {plan.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-luxury-black">
                    ${plan.price}
                    <span className="text-lg font-normal text-luxury-black/60">/{plan.interval}</span>
                  </div>
                  <CardDescription className="text-luxury-black/70">
                    {plan.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-luxury-gold flex-shrink-0 mt-0.5" />
                        <span className="text-luxury-black/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() => handleSubscribe(plan.id, `price_${plan.id}`)}
                    disabled={isLoading === plan.id}
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black' 
                        : 'bg-luxury-black hover:bg-luxury-black/80 text-luxury-white'
                    }`}
                  >
                    {isLoading === plan.id ? 'Processing...' : 'Subscribe Now'}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-luxury-black/60">
            All plans include a 7-day free trial. Cancel anytime. Custom enterprise solutions available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionPlans;
