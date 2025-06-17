
-- Add RLS policy to allow anyone to insert newsletter subscriptions
CREATE POLICY "allow_newsletter_subscription" ON public.subscribers
FOR INSERT
WITH CHECK (subscription_tier = 'newsletter');

-- Add RLS policy to allow public read access for newsletter subscriptions (if needed for counting)
CREATE POLICY "allow_public_newsletter_read" ON public.subscribers
FOR SELECT
USING (subscription_tier = 'newsletter');
