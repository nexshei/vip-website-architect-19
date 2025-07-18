
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import JobPostings from '@/components/careers/JobPostings';

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resumeFile: null as File | null,
    photoFile: null as File | null
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fileType: 'resume' | 'photo') => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (50MB max)
      if (file.size > 50 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please select a file smaller than 50MB.",
          variant: "destructive",
        });
        return;
      }

      if (fileType === 'resume') {
        // Validate resume file types
        const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        if (!allowedTypes.includes(file.type)) {
          toast({
            title: "Invalid file type",
            description: "Please upload a PDF, DOC, or DOCX file for your resume.",
            variant: "destructive",
          });
          return;
        }
        setFormData({ ...formData, resumeFile: file });
      } else {
        // Validate photo file types
        const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];
        if (!allowedTypes.includes(file.type)) {
          toast({
            title: "Invalid file type",
            description: "Please upload a JPG, PNG, or WEBP file for your photo.",
            variant: "destructive",
          });
          return;
        }
        setFormData({ ...formData, photoFile: file });
      }
    }
  };

  const uploadFile = async (file: File, bucket: string, folder: string) => {
    // Generate a unique filename to avoid conflicts
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 15);
    const fileExtension = file.name.split('.').pop();
    const fileName = `${folder}/${timestamp}_${randomString}.${fileExtension}`;
    
    console.log(`Attempting to upload file to ${bucket}/${fileName}`);
    
    try {
      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(fileName, file, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        console.error(`Upload error for ${fileName}:`, error);
        throw new Error(`Failed to upload ${file.name}: ${error.message}`);
      }

      console.log(`Successfully uploaded file:`, data);

      // Get public URL
      const { data: urlData } = supabase.storage
        .from(bucket)
        .getPublicUrl(fileName);

      console.log(`Generated public URL:`, urlData.publicUrl);
      return urlData.publicUrl;
    } catch (uploadError) {
      console.error(`File upload failed:`, uploadError);
      throw uploadError;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.coverLetter) {
      toast({
        title: "Required fields missing",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);

    try {
      let resumeUrl = null;
      let photoUrl = null;

      // Upload resume file if provided
      if (formData.resumeFile) {
        console.log('Uploading resume file...');
        resumeUrl = await uploadFile(formData.resumeFile, 'documents', 'career_applications');
        console.log('Resume uploaded successfully:', resumeUrl);
      }

      // Upload photo file if provided  
      if (formData.photoFile) {
        console.log('Uploading photo file...');
        photoUrl = await uploadFile(formData.photoFile, 'photos', 'career_applications');
        console.log('Photo uploaded successfully:', photoUrl);
      }

      // Insert career application data
      console.log('Inserting career application data...');
      const applicationData = {
        full_name: formData.fullName,
        email: formData.email,
        phone: formData.phone || null,
        cover_letter: formData.coverLetter,
        cv_url: resumeUrl,
        professional_photo_url: photoUrl
      };
      
      console.log('Application data to insert:', applicationData);
      
      const { error } = await supabase
        .from('career_applications')
        .insert(applicationData);

      if (error) {
        console.error('Database insert error:', error);
        throw error;
      }

      // Send email notification
      try {
        const { error: emailError } = await supabase.functions.invoke('send-notifications', {
          body: {
            type: 'career',
            fullName: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            coverLetter: formData.coverLetter,
            hasResume: !!formData.resumeFile,
            hasPhoto: !!formData.photoFile
          }
        });

        if (emailError) {
          console.error('Email notification error:', emailError);
        }
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
      }

      console.log('Career application submitted successfully');
      toast({
        title: "Application submitted successfully!",
        description: "Thank you for your interest. We'll review your application and get back to you.",
      });
      
      // Reset form
      setFormData({ 
        fullName: '', 
        email: '', 
        phone: '', 
        coverLetter: '', 
        resumeFile: null, 
        photoFile: null 
      });
      
      // Reset file inputs
      const fileInputs = document.querySelectorAll('input[type="file"]') as NodeListOf<HTMLInputElement>;
      fileInputs.forEach(input => input.value = '');
      
    } catch (error: any) {
      console.error('Error submitting application:', error);
      toast({
        title: "Error submitting application",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-20">
      <div className="bg-gradient-luxury py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-playfair font-bold text-luxury-white mb-6">
            Join Our <span className="text-luxury-gold">Team</span>
          </h1>
          <p className="text-xl text-luxury-white/90 max-w-3xl mx-auto">
            Become part of Kenya's premier VIP protocol and event management company
          </p>
        </div>
      </div>

      <div className="py-20 bg-luxury-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Job Postings Section */}
            <JobPostings />
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-playfair font-bold text-luxury-black mb-6">Why Work With Us?</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-luxury-black font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-luxury-black mb-2">Professional Development</h3>
                      <p className="text-luxury-black/70">Grow your skills in luxury hospitality and protocol management</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-luxury-black font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-luxury-black mb-2">Prestigious Events</h3>
                      <p className="text-luxury-black/70">Work on high-profile events with distinguished guests</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-luxury-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-luxury-black font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-luxury-black mb-2">Competitive Compensation</h3>
                      <p className="text-luxury-black/70">Attractive packages with performance incentives</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="application-form">
                <h2 className="text-3xl font-playfair font-bold text-luxury-black mb-6">Apply Now</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                  />
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                  />
                  <div>
                    <Input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileChange(e, 'resume')}
                      className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                    <p className="text-sm text-luxury-black/60 mt-1">
                      Upload your resume (PDF, DOC, DOCX) - Max 50MB
                      {formData.resumeFile && <span className="text-green-600 ml-2">✓ {formData.resumeFile.name}</span>}
                    </p>
                  </div>
                  <div>
                    <Input
                      type="file"
                      accept=".jpg,.jpeg,.png,.webp"
                      onChange={(e) => handleFileChange(e, 'photo')}
                      className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                    <p className="text-sm text-luxury-black/60 mt-1">
                      Upload your professional photo (JPG, PNG, WEBP) - Max 50MB
                      {formData.photoFile && <span className="text-green-600 ml-2">✓ {formData.photoFile.name}</span>}
                    </p>
                  </div>
                  <Textarea
                    placeholder="Cover Letter * - Tell us why you want to join our team..."
                    rows={6}
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    required
                    className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold resize-none"
                  />
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold py-3 transition-all duration-300"
                  >
                    {isLoading ? 'Submitting...' : 'Submit Application'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
