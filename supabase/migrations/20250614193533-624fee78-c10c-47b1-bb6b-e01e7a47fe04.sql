
-- 1. Table for Contact Form submissions
CREATE TABLE public.contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamp with time zone DEFAULT now()
);

-- 2. Table for Careers (Job Applications)
CREATE TABLE public.career_applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text,
  position text,
  cv_url text,
  professional_photo_url text,
  cover_letter text,
  created_at timestamp with time zone DEFAULT now()
);

-- 3. Table for Book Meeting requests
CREATE TABLE public.meeting_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  event_type text,
  event_date date,
  location text,
  protocol_officers text,
  vision text,
  created_at timestamp with time zone DEFAULT now()
);

-- 4. Table for VVIP Service Requests
CREATE TABLE public.vvip_service_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  event_date date,
  event_type text,
  service_type text,
  location text,
  protocol_officers text,
  requirements text,
  created_at timestamp with time zone DEFAULT now()
);

-- Enable Row-Level Security for each
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.career_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.meeting_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vvip_service_requests ENABLE ROW LEVEL SECURITY;

-- Policy: Allow inserts from anyone (public-facing forms)
CREATE POLICY "Allow insert to all" ON public.contact_submissions FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert to all" ON public.career_applications FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert to all" ON public.meeting_requests FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert to all" ON public.vvip_service_requests FOR INSERT WITH CHECK (true);

-- Policy: Allow read access only with service_role (NOT anon/public)
-- (by default, only service_role can read when no SELECT policy is present)
