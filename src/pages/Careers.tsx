
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

const Careers = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    coverLetter: '',
    resumeFile: null as File | null
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, resumeFile: file });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      let resumeUrl = '';
      
      // Upload resume if provided
      if (formData.resumeFile) {
        const fileExt = formData.resumeFile.name.split('.').pop();
        const fileName = `${Date.now()}.${fileExt}`;
        
        const { data, error: uploadError } = await supabase.storage
          .from('documents')
          .upload(`resumes/${fileName}`, formData.resumeFile);

        if (uploadError) throw uploadError;
        resumeUrl = data.path;
      }

      const { error } = await supabase
        .from('career_applications')
        .insert({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          cover_letter: formData.coverLetter,
          resume_url: resumeUrl
        });

      if (error) throw error;

      toast({
        title: "Application submitted successfully!",
        description: "Thank you for your interest. We'll review your application and get back to you.",
      });

      setFormData({ fullName: '', email: '', phone: '', coverLetter: '', resumeFile: null });
    } catch (error) {
      toast({
        title: "Error submitting application",
        description: "Please try again later.",
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
          <div className="max-w-4xl mx-auto">
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

              <div>
                <h2 className="text-3xl font-playfair font-bold text-luxury-black mb-6">Apply Now</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <Input
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                    className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                  />
                  <Input
                    type="email"
                    placeholder="Email Address"
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
                      onChange={handleFileChange}
                      className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                    <p className="text-sm text-luxury-black/60 mt-1">Upload your resume (PDF, DOC, DOCX)</p>
                  </div>
                  <Textarea
                    placeholder="Cover Letter - Tell us why you want to join our team..."
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
