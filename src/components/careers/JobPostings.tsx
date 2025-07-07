import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { MapPin, Calendar, Users, Clock } from 'lucide-react';

interface JobPosting {
  id: string;
  title: string;
  description: string;
  department: string;
  location: string;
  employment_type: string;
  salary_range: string;
  requirements: string[];
  application_deadline: string;
  status: string;
  created_at: string;
}

const JobPostings = () => {
  const [jobPostings, setJobPostings] = useState<JobPosting[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedJob, setSelectedJob] = useState<JobPosting | null>(null);

  useEffect(() => {
    fetchJobPostings();
    updateJobPostings();
  }, []);

  const updateJobPostings = async () => {
    try {
      // Update the first job posting
      const { error: error1 } = await supabase
        .from('job_postings')
        .update({
          title: 'VIP Protocol Officer',
          description: 'We are seeking a dedicated VIP Protocol Officer to join our team in managing high-profile events and providing exceptional protocol services to distinguished clients. This role requires attention to detail, professional demeanor, and expertise in diplomatic and corporate protocol procedures.',
          requirements: [
            'Bachelor\'s degree in International Relations, Hospitality Management, or related field',
            'Minimum 2 years experience in protocol services or luxury hospitality',
            'Excellent communication and interpersonal skills',
            'Professional appearance and demeanor',
            'Knowledge of diplomatic and corporate protocol procedures',
            'Fluency in English and Swahili; additional languages preferred',
            'Flexibility to work evenings, weekends, and travel as required',
            'Strong organizational and time management skills'
          ]
        })
        .eq('title', 'lkjhgf');

      // Update the second job posting
      const { error: error2 } = await supabase
        .from('job_postings')
        .update({
          title: 'Event Coordinator',
          description: 'Join our dynamic team as an Event Coordinator where you will be responsible for planning, coordinating, and executing luxury events and VIP services. This position offers the opportunity to work with high-profile clients and create memorable experiences.',
          requirements: [
            'Diploma or degree in Event Management, Hospitality, or related field',
            'Minimum 1-2 years experience in event planning or coordination',
            'Strong project management and organizational skills',
            'Excellent verbal and written communication abilities',
            'Proficiency in event management software and MS Office Suite',
            'Creative problem-solving skills and attention to detail',
            'Ability to work under pressure and meet tight deadlines',
            'Professional network within the events and hospitality industry preferred'
          ]
        })
        .eq('title', 'Testing');

      if (error1) console.error('Error updating first job:', error1);
      if (error2) console.error('Error updating second job:', error2);
      
      // Refresh the job postings after update
      setTimeout(() => {
        fetchJobPostings();
      }, 1000);
    } catch (error) {
      console.error('Error updating job postings:', error);
    }
  };

  const fetchJobPostings = async () => {
    try {
      const { data, error } = await supabase
        .from('job_postings')
        .select('*')
        .eq('status', 'active')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching job postings:', error);
        return;
      }

      setJobPostings(data || []);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEmploymentTypeColor = (type: string) => {
    switch (type?.toLowerCase()) {
      case 'full-time':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'part-time':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'contract':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'internship':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-luxury-gold"></div>
      </div>
    );
  }

  if (jobPostings.length === 0) {
    return (
      <div className="text-center py-20">
        <h3 className="text-2xl font-playfair font-bold text-luxury-black mb-4">
          No Current Openings
        </h3>
        <p className="text-luxury-black/70 max-w-md mx-auto">
          We don't have any active job postings at the moment, but we're always looking for talented individuals. 
          Feel free to submit your application below and we'll keep it on file for future opportunities.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-playfair font-bold text-luxury-black mb-4">
          Current <span className="text-luxury-gold">Openings</span>
        </h2>
        <p className="text-xl text-luxury-black/80 max-w-2xl mx-auto">
          Discover exciting career opportunities and join our team of professionals
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {jobPostings.map((job) => (
          <Card key={job.id} className="group hover:shadow-xl transition-all duration-300 border-luxury-black/10 hover:border-luxury-gold/30">
            <CardHeader className="pb-4">
              <div className="flex justify-between items-start mb-2">
                <Badge className={`${getEmploymentTypeColor(job.employment_type)} border`}>
                  {job.employment_type}
                </Badge>
                {job.department && (
                  <Badge variant="outline" className="border-luxury-gold/30 text-luxury-black">
                    {job.department}
                  </Badge>
                )}
              </div>
              <CardTitle className="text-xl font-playfair text-luxury-black group-hover:text-luxury-gold transition-colors">
                {job.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent className="pt-0">
              <div className="space-y-3 mb-6">
                {job.location && (
                  <div className="flex items-center gap-2 text-luxury-black/70">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                )}
                
                {job.application_deadline && (
                  <div className="flex items-center gap-2 text-luxury-black/70">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">Apply by {formatDate(job.application_deadline)}</span>
                  </div>
                )}
              </div>

              {job.description && (
                <p className="text-luxury-black/70 text-sm mb-4 line-clamp-3">
                  {job.description.substring(0, 120)}...
                </p>
              )}

              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold transition-all duration-300"
                    onClick={() => setSelectedJob(job)}
                  >
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-2xl font-playfair text-luxury-black">
                      {job.title}
                    </DialogTitle>
                    <DialogDescription className="flex flex-wrap gap-2 mt-2">
                      <Badge className={`${getEmploymentTypeColor(job.employment_type)} border`}>
                        {job.employment_type}
                      </Badge>
                      {job.department && (
                        <Badge variant="outline" className="border-luxury-gold/30">
                          {job.department}
                        </Badge>
                      )}
                    </DialogDescription>
                  </DialogHeader>
                  
                  <div className="space-y-6 mt-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {job.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-luxury-gold" />
                          <span className="text-luxury-black">{job.location}</span>
                        </div>
                      )}
                      
                      {job.application_deadline && (
                        <div className="flex items-center gap-2">
                          <Calendar className="w-5 h-5 text-luxury-gold" />
                          <span className="text-luxury-black">Apply by {formatDate(job.application_deadline)}</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2">
                        <Clock className="w-5 h-5 text-luxury-gold" />
                        <span className="text-luxury-black">Posted {formatDate(job.created_at)}</span>
                      </div>
                    </div>

                    <Separator />

                    {job.description && (
                      <div>
                        <h4 className="font-semibold text-luxury-black mb-2">Job Description</h4>
                        <p className="text-luxury-black/80 whitespace-pre-line">{job.description}</p>
                      </div>
                    )}

                    {job.requirements && job.requirements.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-luxury-black mb-2">Requirements</h4>
                        <ul className="space-y-1">
                          {job.requirements.map((requirement, index) => (
                            <li key={index} className="flex items-start gap-2 text-luxury-black/80">
                              <span className="text-luxury-gold mt-1">•</span>
                              <span>{requirement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4 border-t">
                      <p className="text-sm text-luxury-black/70 mb-4">
                        Interested in this position? Fill out the application form below to apply.
                      </p>
                      <Button 
                        className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold"
                        onClick={() => {
                          const applicationSection = document.getElementById('application-form');
                          if (applicationSection) {
                            applicationSection.scrollIntoView({ behavior: 'smooth' });
                          }
                        }}
                      >
                        Apply Now
                      </Button>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default JobPostings;
