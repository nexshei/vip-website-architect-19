
-- Delete all existing photos from the gallery_photos table
DELETE FROM public.gallery_photos;

-- Add the new uploaded photos to the gallery_photos table with appropriate categories
INSERT INTO public.gallery_photos (src, alt_text, category) VALUES
('/lovable-uploads/10c82e62-1255-46d1-bc7c-eaac26571dd0.png', 'Protocol officers with distinguished guest in professional setting', 'government'),
('/lovable-uploads/cc5e796b-d6a3-4b75-9269-0d3919a8f16d.png', 'Luxury event venue with elegant chandelier and formal dining setup', 'corporate'),
('/lovable-uploads/c2fca5bf-fa16-4aaa-b7b9-b08a8cf584df.png', 'VIP protocol service with professional team greeting distinguished guest', 'diplomatic'),
('/lovable-uploads/bae22750-f71e-41f0-a5c7-2f6be59700a1.png', 'Elegant table setting with luxury dining arrangement and gold accents', 'private'),
('/lovable-uploads/eb29c827-3393-42f6-83bc-bf998935ba5d.png', 'Wedding ceremony with professional hosts and microphone setup', 'wedding'),
('/lovable-uploads/34c98434-5ae9-4d0c-b834-b055ea974ecf.png', 'Traditional wedding party in orange attire with cultural ceremony elements', 'wedding');
