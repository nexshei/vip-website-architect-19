
-- Enable replica identity to capture complete row data during updates
ALTER TABLE public.gallery_photos REPLICA IDENTITY FULL;

-- Add the table to the supabase_realtime publication to activate real-time functionality
ALTER PUBLICATION supabase_realtime ADD TABLE public.gallery_photos;
