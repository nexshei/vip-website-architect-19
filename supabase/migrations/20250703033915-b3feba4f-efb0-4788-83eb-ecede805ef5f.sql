
-- Create a table for item bookings
CREATE TABLE public.item_bookings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT,
  phone TEXT,
  event_date DATE NOT NULL,
  chairs INTEGER DEFAULT 0,
  tables INTEGER DEFAULT 0,
  tents INTEGER DEFAULT 0,
  plates INTEGER DEFAULT 0,
  cups INTEGER DEFAULT 0,
  forks_spoons INTEGER DEFAULT 0,
  sound_system INTEGER DEFAULT 0,
  lighting_equipment INTEGER DEFAULT 0,
  extension_cables INTEGER DEFAULT 0,
  water_dispensers INTEGER DEFAULT 0,
  tablecloths INTEGER DEFAULT 0,
  decoration_items INTEGER DEFAULT 0,
  additional_notes TEXT,
  terms_agreed BOOLEAN DEFAULT false,
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS)
ALTER TABLE public.item_bookings ENABLE ROW LEVEL SECURITY;

-- Create policy that allows public to submit item bookings
CREATE POLICY "Allow public to submit item bookings" 
  ON public.item_bookings 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy for service role to manage all item bookings
CREATE POLICY "Service role can manage item bookings" 
  ON public.item_bookings 
  FOR ALL 
  USING (true);

-- Add trigger for updated_at
CREATE TRIGGER update_item_bookings_updated_at
  BEFORE UPDATE ON public.item_bookings
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();
