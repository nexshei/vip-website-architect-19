
-- Add new columns for storing image data directly in the database
ALTER TABLE public.gallery_photos 
ADD COLUMN image_data BYTEA,
ADD COLUMN content_type TEXT,
ADD COLUMN file_size INTEGER;

-- Add an index for better performance when querying by content type
CREATE INDEX idx_gallery_photos_content_type ON public.gallery_photos(content_type);

-- Update existing records to set a default content type based on file extension
UPDATE public.gallery_photos 
SET content_type = CASE 
  WHEN src LIKE '%.png' THEN 'image/png'
  WHEN src LIKE '%.jpg' OR src LIKE '%.jpeg' THEN 'image/jpeg'
  WHEN src LIKE '%.gif' THEN 'image/gif'
  WHEN src LIKE '%.webp' THEN 'image/webp'
  ELSE 'image/png'
END
WHERE content_type IS NULL;

-- Make content_type not nullable with a default value
ALTER TABLE public.gallery_photos 
ALTER COLUMN content_type SET DEFAULT 'image/png',
ALTER COLUMN content_type SET NOT NULL;

-- Add a constraint to ensure valid content types
ALTER TABLE public.gallery_photos 
ADD CONSTRAINT valid_content_type 
CHECK (content_type IN ('image/jpeg', 'image/png', 'image/gif', 'image/webp'));
