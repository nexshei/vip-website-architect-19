
-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow public uploads to documents bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow public access to documents bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow public uploads to photos bucket" ON storage.objects;
DROP POLICY IF EXISTS "Allow public access to photos bucket" ON storage.objects;

-- Create comprehensive policies for documents bucket
CREATE POLICY "Enable insert for documents bucket" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'documents');

CREATE POLICY "Enable select for documents bucket" ON storage.objects
FOR SELECT USING (bucket_id = 'documents');

CREATE POLICY "Enable update for documents bucket" ON storage.objects
FOR UPDATE USING (bucket_id = 'documents');

CREATE POLICY "Enable delete for documents bucket" ON storage.objects
FOR DELETE USING (bucket_id = 'documents');

-- Create comprehensive policies for photos bucket
CREATE POLICY "Enable insert for photos bucket" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'photos');

CREATE POLICY "Enable select for photos bucket" ON storage.objects
FOR SELECT USING (bucket_id = 'photos');

CREATE POLICY "Enable update for photos bucket" ON storage.objects
FOR UPDATE USING (bucket_id = 'photos');

CREATE POLICY "Enable delete for photos bucket" ON storage.objects
FOR DELETE USING (bucket_id = 'photos');
