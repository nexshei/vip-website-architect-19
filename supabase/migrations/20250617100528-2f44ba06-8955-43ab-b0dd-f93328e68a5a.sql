
-- Create a table for gallery photos
CREATE TABLE public.gallery_photos (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  src TEXT NOT NULL,
  category TEXT NOT NULL,
  alt_text TEXT,
  display_order INTEGER DEFAULT 0,
  is_featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Add Row Level Security (RLS) - making it public readable for gallery display
ALTER TABLE public.gallery_photos ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to gallery photos
CREATE POLICY "Gallery photos are publicly readable" 
  ON public.gallery_photos 
  FOR SELECT 
  USING (true);

-- Create policy for authenticated users to manage gallery photos (admin access)
CREATE POLICY "Authenticated users can manage gallery photos" 
  ON public.gallery_photos 
  FOR ALL 
  USING (auth.role() = 'authenticated');

-- Insert all the existing gallery photos from the component
INSERT INTO public.gallery_photos (src, category, is_featured, display_order) VALUES
  ('/lovable-uploads/2835e50b-8540-4a20-b379-264f22d6a1e9.png', 'Team Services', true, 1),
  ('/lovable-uploads/ebbab88b-0596-40bf-b0b7-2f7812c15cde.png', 'VVIP Protocol', true, 2),
  ('/lovable-uploads/c4bf5383-4aef-4c73-8242-83c4de363bfa.png', 'Executive Meetings', true, 3),
  ('/lovable-uploads/c02cf92c-6efb-4a58-b4cf-e12866d1164c.png', 'Red Carpet Events', true, 4),
  ('/lovable-uploads/f47d4502-0c8b-4ba8-becc-584a00a22418.png', 'Luxury Events', true, 5),
  ('/lovable-uploads/02da9a98-f3d5-4a34-9909-5c798ce596c4.png', 'Wedding Ceremonies', true, 6),
  ('/lovable-uploads/1c51a4d7-6e98-495a-b619-d798e08c8b19.png', 'Cultural Events', false, 7),
  ('/lovable-uploads/3c79f6f7-1682-4d4f-954c-ea88a6d0cb8e.png', 'Corporate Events', false, 8),
  ('/lovable-uploads/608158d2-48ae-425b-a7d8-41d1453d06f4.png', 'Luxury Events', false, 9),
  ('/lovable-uploads/d4fdfea7-8670-4110-9791-f0516ec43e1e.png', 'VVIP Team Services', false, 10),
  ('/lovable-uploads/48401841-d864-4dae-a945-f26d5cb259d6.png', 'Premium Events', false, 11),
  ('/lovable-uploads/6ff20f4d-d952-4b11-92d2-2f27d64dcc6b.png', 'Special Occasions', false, 12),
  ('/lovable-uploads/7180f2a2-8891-4fbe-b526-982d6e0b1115.png', 'Red Carpet Events', false, 13),
  ('/lovable-uploads/b4119590-f054-4bc0-a7a4-918f72e228c4.png', 'Award Presentations', false, 14),
  ('/lovable-uploads/a31b9767-b414-4e49-8c46-114c537e874d.png', 'VVIP Ceremonies', false, 15),
  ('/lovable-uploads/90867b2a-97b6-45dd-9957-212c10041118.png', 'VVIP Protocol Events', false, 16),
  ('/lovable-uploads/ed8ef56f-af69-4845-8d6d-f82dc85bd2ec.png', 'Elite Services', false, 17),
  ('/lovable-uploads/2c464c3c-77bd-401b-9eb1-551ce786b145.png', 'Professional Team', false, 18),
  ('/lovable-uploads/9b257c2a-c3de-4707-8212-a13c99b9cce7.png', 'Client Relations', false, 19),
  ('/lovable-uploads/3d39933e-766d-4f71-b99f-200eda86b8d9.png', 'Executive Services', false, 20),
  ('/lovable-uploads/c0f0c868-ff27-41b0-9da0-2920d4a91c4f.png', 'Premium Protocol', false, 21),
  ('/lovable-uploads/0db3978f-fddb-459e-b8bb-85802bf3c090.png', 'Event Management', false, 22),
  ('/lovable-uploads/349eca6a-8be0-41b8-b658-6812782f24bd.png', 'Luxury Venues', false, 23),
  ('/lovable-uploads/ebe0fd91-a90a-4892-918e-0ba9efc3f528.png', 'Fine Dining Events', false, 24),
  ('/lovable-uploads/3f9c5810-d649-4491-b362-4c8c4e225b10.png', 'Executive Consultations', false, 25),
  ('/lovable-uploads/17424ed7-79a7-4d95-aca3-6ee75c76a993.png', 'Corporate Events', false, 26),
  ('/lovable-uploads/3f496f60-258f-43f1-9bc8-45a2caf5c12c.png', 'Professional Team', false, 27),
  ('/lovable-uploads/6c652822-67dd-4e67-bda3-699b33f9443b.png', 'Corporate Events', false, 28),
  ('/lovable-uploads/603a03a5-c27b-4781-a1d6-4a19cc5e1f82.png', 'Special Events', false, 29),
  ('/lovable-uploads/9d6016dd-51b9-4c53-9522-b10dc988cdf6.png', 'Cultural Events', false, 30),
  ('/lovable-uploads/ee21f0eb-6c46-4895-806e-880518233329.png', 'Executive Meetings', false, 31),
  ('/lovable-uploads/81855db5-1e20-411a-8d6c-abce0c628a01.png', 'Special Occasions', false, 32),
  ('/lovable-uploads/68a145e1-eade-4a21-a6b2-36e303f8c208.png', 'Cultural Events', false, 33);

-- Create an index for better performance when querying by category
CREATE INDEX idx_gallery_photos_category ON public.gallery_photos(category);

-- Create an index for display order
CREATE INDEX idx_gallery_photos_display_order ON public.gallery_photos(display_order);

-- Create an index for featured photos
CREATE INDEX idx_gallery_photos_featured ON public.gallery_photos(is_featured);
