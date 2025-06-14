
-- PHASE 1: CRITICAL RLS POLICY IMPLEMENTATION

-- CONTACT_SUBMISSIONS
-- Remove existing policies if needed
DROP POLICY IF EXISTS "Allow insert to all" ON public.contact_submissions;
DROP POLICY IF EXISTS "Allow insert to all" ON public.contact_submissions;
DROP POLICY IF EXISTS "Allow update to all" ON public.contact_submissions;
DROP POLICY IF EXISTS "Allow delete to all" ON public.contact_submissions;
DROP POLICY IF EXISTS "Allow select to all" ON public.contact_submissions;

-- Insert policy for public: anyone can submit
CREATE POLICY "Allow insert to all"
  ON public.contact_submissions
  FOR INSERT
  WITH CHECK (true);

-- Read: Only service_role key (never client) can SELECT
CREATE POLICY "Service role can select contact submissions"
  ON public.contact_submissions
  FOR SELECT
  TO service_role
  USING (true);

-- Update/Delete: Only service_role
CREATE POLICY "Service role can update contact submissions"
  ON public.contact_submissions
  FOR UPDATE
  TO service_role
  USING (true);

CREATE POLICY "Service role can delete contact submissions"
  ON public.contact_submissions
  FOR DELETE
  TO service_role
  USING (true);


-- CAREER_APPLICATIONS
DROP POLICY IF EXISTS "Allow insert to all" ON public.career_applications;
DROP POLICY IF EXISTS "Allow update to all" ON public.career_applications;
DROP POLICY IF EXISTS "Allow delete to all" ON public.career_applications;
DROP POLICY IF EXISTS "Allow select to all" ON public.career_applications;

CREATE POLICY "Allow insert to all"
  ON public.career_applications
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Service role can select career applications"
  ON public.career_applications
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can update career applications"
  ON public.career_applications
  FOR UPDATE
  TO service_role
  USING (true);

CREATE POLICY "Service role can delete career applications"
  ON public.career_applications
  FOR DELETE
  TO service_role
  USING (true);


-- MEETING_REQUESTS
DROP POLICY IF EXISTS "Allow insert to all" ON public.meeting_requests;
DROP POLICY IF EXISTS "Allow update to all" ON public.meeting_requests;
DROP POLICY IF EXISTS "Allow delete to all" ON public.meeting_requests;
DROP POLICY IF EXISTS "Allow select to all" ON public.meeting_requests;

CREATE POLICY "Allow insert to all"
  ON public.meeting_requests
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Service role can select meeting requests"
  ON public.meeting_requests
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can update meeting requests"
  ON public.meeting_requests
  FOR UPDATE
  TO service_role
  USING (true);

CREATE POLICY "Service role can delete meeting requests"
  ON public.meeting_requests
  FOR DELETE
  TO service_role
  USING (true);


-- VVIP_SERVICE_REQUESTS
DROP POLICY IF EXISTS "Allow insert to all" ON public.vvip_service_requests;
DROP POLICY IF EXISTS "Allow update to all" ON public.vvip_service_requests;
DROP POLICY IF EXISTS "Allow delete to all" ON public.vvip_service_requests;
DROP POLICY IF EXISTS "Allow select to all" ON public.vvip_service_requests;

CREATE POLICY "Allow insert to all"
  ON public.vvip_service_requests
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Service role can select VVIP service requests"
  ON public.vvip_service_requests
  FOR SELECT
  TO service_role
  USING (true);

CREATE POLICY "Service role can update VVIP service requests"
  ON public.vvip_service_requests
  FOR UPDATE
  TO service_role
  USING (true);

CREATE POLICY "Service role can delete VVIP service requests"
  ON public.vvip_service_requests
  FOR DELETE
  TO service_role
  USING (true);

