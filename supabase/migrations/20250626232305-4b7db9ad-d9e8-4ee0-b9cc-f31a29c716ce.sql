
-- Create enum types for better data integrity
CREATE TYPE public.event_type AS ENUM (
  'corporate',
  'wedding', 
  'diplomatic',
  'private',
  'government',
  'other'
);

CREATE TYPE public.protocol_officers_range AS ENUM (
  '1-5',
  '5-10', 
  '10-20',
  '20+'
);

CREATE TYPE public.service_type AS ENUM (
  'full_protocol',
  'event_management',
  'vip_escort',
  'security_coordination',
  'logistics_support',
  'diplomatic_protocol'
);

CREATE TYPE public.request_status AS ENUM (
  'pending',
  'reviewing',
  'approved',
  'in_progress',
  'completed',
  'cancelled'
);

-- 1. Contact Form Submissions
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT,
  message TEXT NOT NULL,
  status request_status DEFAULT 'pending',
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Newsletter Subscriptions
CREATE TABLE public.newsletter_subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  is_active BOOLEAN DEFAULT true,
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  source TEXT DEFAULT 'website'
);

-- 3. Career Applications
CREATE TABLE public.career_applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  position TEXT,
  cv_url TEXT,
  professional_photo_url TEXT,
  cover_letter TEXT,
  status request_status DEFAULT 'pending',
  admin_notes TEXT,
  interview_date TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Meeting Requests
CREATE TABLE public.meeting_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  event_type event_type,
  event_date DATE,
  location TEXT,
  protocol_officers protocol_officers_range,
  vision TEXT,
  status request_status DEFAULT 'pending',
  meeting_scheduled_at TIMESTAMP WITH TIME ZONE,
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 5. VVIP Service Requests
CREATE TABLE public.vvip_service_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  event_date DATE,
  event_type event_type,
  service_type service_type,
  location TEXT,
  protocol_officers protocol_officers_range,
  requirements TEXT,
  status request_status DEFAULT 'pending',
  estimated_cost DECIMAL(10,2),
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 6. Admin Users (for managing requests)
CREATE TABLE public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  role TEXT DEFAULT 'admin',
  is_active BOOLEAN DEFAULT true,
  last_login TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 7. Email Notifications Log
CREATE TABLE public.email_notifications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  recipient_email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message_type TEXT NOT NULL,
  reference_id UUID,
  reference_table TEXT,
  status TEXT DEFAULT 'sent',
  sent_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  error_message TEXT
);

-- 8. System Settings
CREATE TABLE public.system_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  setting_key TEXT UNIQUE NOT NULL,
  setting_value TEXT NOT NULL,
  description TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default system settings
INSERT INTO public.system_settings (setting_key, setting_value, description) VALUES
('company_email', 'info@sirolevvipprotocolltd.co.ke', 'Main company email for notifications'),
('company_phone', '0712063461', 'Main company phone number'),
('company_address', 'Golden Court, Silicon Valley Estate, Eastern Bypass, Nairobi', 'Company physical address'),
('notification_enabled', 'true', 'Enable/disable email notifications');

-- Enable Row Level Security (RLS)
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meeting_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vvip_service_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.email_notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.system_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for public form submissions (allow anyone to insert)
CREATE POLICY "Allow public to submit contact forms" ON public.contact_submissions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to subscribe to newsletter" ON public.newsletter_subscriptions
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to submit career applications" ON public.career_applications
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to request meetings" ON public.meeting_requests
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public to request VVIP services" ON public.vvip_service_requests
  FOR INSERT WITH CHECK (true);

-- Admin-only access policies (service_role only for now)
CREATE POLICY "Service role can manage contact submissions" ON public.contact_submissions
  FOR ALL TO service_role USING (true);

CREATE POLICY "Service role can manage newsletter subscriptions" ON public.newsletter_subscriptions
  FOR ALL TO service_role USING (true);

CREATE POLICY "Service role can manage career applications" ON public.career_applications
  FOR ALL TO service_role USING (true);

CREATE POLICY "Service role can manage meeting requests" ON public.meeting_requests
  FOR ALL TO service_role USING (true);

CREATE POLICY "Service role can manage VVIP service requests" ON public.vvip_service_requests
  FOR ALL TO service_role USING (true);

CREATE POLICY "Service role can manage admin users" ON public.admin_users
  FOR ALL TO service_role USING (true);

CREATE POLICY "Service role can manage email notifications" ON public.email_notifications
  FOR ALL TO service_role USING (true);

CREATE POLICY "Service role can manage system settings" ON public.system_settings
  FOR ALL TO service_role USING (true);

-- Create indexes for better performance
CREATE INDEX idx_contact_submissions_created_at ON public.contact_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_status ON public.contact_submissions(status);
CREATE INDEX idx_newsletter_subscriptions_email ON public.newsletter_subscriptions(email);
CREATE INDEX idx_career_applications_created_at ON public.career_applications(created_at DESC);
CREATE INDEX idx_career_applications_status ON public.career_applications(status);
CREATE INDEX idx_meeting_requests_created_at ON public.meeting_requests(created_at DESC);
CREATE INDEX idx_meeting_requests_status ON public.meeting_requests(status);
CREATE INDEX idx_vvip_service_requests_created_at ON public.vvip_service_requests(created_at DESC);
CREATE INDEX idx_vvip_service_requests_status ON public.vvip_service_requests(status);
CREATE INDEX idx_email_notifications_sent_at ON public.email_notifications(sent_at DESC);

-- Create trigger function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers to automatically update updated_at columns
CREATE TRIGGER update_contact_submissions_updated_at
    BEFORE UPDATE ON public.contact_submissions
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_career_applications_updated_at
    BEFORE UPDATE ON public.career_applications
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_meeting_requests_updated_at
    BEFORE UPDATE ON public.meeting_requests
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_vvip_service_requests_updated_at
    BEFORE UPDATE ON public.vvip_service_requests
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_system_settings_updated_at
    BEFORE UPDATE ON public.system_settings
    FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Enable realtime for all tables
ALTER TABLE public.contact_submissions REPLICA IDENTITY FULL;
ALTER TABLE public.newsletter_subscriptions REPLICA IDENTITY FULL;
ALTER TABLE public.career_applications REPLICA IDENTITY FULL;
ALTER TABLE public.meeting_requests REPLICA IDENTITY FULL;
ALTER TABLE public.vvip_service_requests REPLICA IDENTITY FULL;
ALTER TABLE public.admin_users REPLICA IDENTITY FULL;
ALTER TABLE public.email_notifications REPLICA IDENTITY FULL;
ALTER TABLE public.system_settings REPLICA IDENTITY FULL;

-- Add tables to realtime publication
ALTER PUBLICATION supabase_realtime ADD TABLE public.contact_submissions;
ALTER PUBLICATION supabase_realtime ADD TABLE public.newsletter_subscriptions;
ALTER PUBLICATION supabase_realtime ADD TABLE public.career_applications;
ALTER PUBLICATION supabase_realtime ADD TABLE public.meeting_requests;
ALTER PUBLICATION supabase_realtime ADD TABLE public.vvip_service_requests;
ALTER PUBLICATION supabase_realtime ADD TABLE public.admin_users;
ALTER PUBLICATION supabase_realtime ADD TABLE public.email_notifications;
ALTER PUBLICATION supabase_realtime ADD TABLE public.system_settings;
