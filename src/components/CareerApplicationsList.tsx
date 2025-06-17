
import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { Calendar, Mail, Phone, User, Briefcase, FileText } from 'lucide-react';

interface CareerApplication {
  id: string;
  full_name: string;
  email: string;
  phone: string | null;
  position: string | null;
  cv_url: string | null;
  professional_photo_url: string | null;
  cover_letter: string | null;
  created_at: string | null;
}

const CareerApplicationsList = () => {
  const [applications, setApplications] = useState<CareerApplication[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchApplications();
  }, []);

  const fetchApplications = async () => {
    try {
      const { data, error } = await supabase
        .from('career_applications')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast({
          title: "Error fetching applications",
          description: error.message,
          variant: "destructive"
        });
        return;
      }

      setApplications(data || []);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to fetch career applications",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Loading Applications...</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  if (applications.length === 0) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>No Applications Yet</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-luxury-black/70">No career applications have been submitted yet.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-playfair font-bold text-luxury-black">
        Career Applications ({applications.length})
      </h2>
      
      <div className="grid gap-4">
        {applications.map((application) => (
          <Card key={application.id} className="border-luxury-black/10">
            <CardHeader>
              <div className="flex items-start justify-between">
                <CardTitle className="text-xl text-luxury-black flex items-center gap-2">
                  <User size={20} />
                  {application.full_name}
                </CardTitle>
                {application.created_at && (
                  <Badge variant="outline" className="flex items-center gap-1">
                    <Calendar size={14} />
                    {new Date(application.created_at).toLocaleDateString()}
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-luxury-black/80">
                  <Mail size={16} />
                  <span>{application.email}</span>
                </div>
                {application.phone && (
                  <div className="flex items-center gap-2 text-luxury-black/80">
                    <Phone size={16} />
                    <span>{application.phone}</span>
                  </div>
                )}
              </div>
              
              {application.position && (
                <div className="flex items-center gap-2 text-luxury-black/80">
                  <Briefcase size={16} />
                  <span className="font-medium">Position: {application.position}</span>
                </div>
              )}
              
              {application.cover_letter && (
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-luxury-black font-medium">
                    <FileText size={16} />
                    Cover Letter:
                  </div>
                  <div className="bg-luxury-black/5 p-3 rounded-lg">
                    <p className="text-luxury-black/80 text-sm whitespace-pre-wrap">
                      {application.cover_letter}
                    </p>
                  </div>
                </div>
              )}
              
              <div className="flex gap-2 pt-2">
                {application.cv_url && (
                  <Badge className="bg-luxury-gold text-luxury-black">
                    CV Uploaded
                  </Badge>
                )}
                {application.professional_photo_url && (
                  <Badge className="bg-luxury-gold text-luxury-black">
                    Photo Uploaded
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CareerApplicationsList;
