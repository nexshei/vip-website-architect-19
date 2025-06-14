
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { useToast } from '@/hooks/use-toast';
import { Users, Book, Clock, MapPin, Mic, Utensils, Heart } from 'lucide-react';

const Careers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const jobPositions = [
    {
      title: "Protocol Officer",
      icon: Book,
      type: "Full-time",
      location: "Nairobi",
      description: "Lead diplomatic and corporate protocol services, ensuring adherence to international etiquette standards and managing high-profile events with precision.",
      requirements: [
        "Bachelor's degree in International Relations, Communications, or related field",
        "3+ years experience in protocol or diplomatic services",
        "Excellent communication and interpersonal skills",
        "Knowledge of international etiquette and cultural sensitivity",
        "Fluency in English and Swahili; additional languages preferred"
      ]
    },
    {
      title: "Professional Usher",
      icon: Users,
      type: "Full-time / Part-time",
      location: "Nairobi",
      description: "Provide exceptional guest assistance and guidance at luxury events, maintaining the highest standards of professionalism and customer service.",
      requirements: [
        "High school diploma or equivalent",
        "Previous experience in hospitality or customer service",
        "Excellent presentation and communication skills",
        "Professional appearance and demeanor",
        "Ability to work flexible hours including evenings and weekends"
      ]
    },
    {
      title: "Event Manager",
      icon: Clock,
      type: "Full-time",
      location: "Nairobi",
      description: "Oversee complete event planning and execution, coordinating with vendors, managing timelines, and ensuring flawless delivery of luxury events.",
      requirements: [
        "Bachelor's degree in Event Management, Hospitality, or related field",
        "5+ years experience in luxury event management",
        "Strong project management and organizational skills",
        "Experience with vendor management and budget oversight",
        "Creative problem-solving abilities and attention to detail"
      ]
    },
    {
      title: "VIP Security Specialist",
      icon: MapPin,
      type: "Full-time",
      location: "Nairobi",
      description: "Provide discrete security services for high-profile clients and events, ensuring safety while maintaining an elegant and unobtrusive presence.",
      requirements: [
        "Certified security training and relevant licenses",
        "5+ years experience in executive protection or VIP security",
        "Physical fitness and professional appearance",
        "Excellent situational awareness and crisis management skills",
        "Ability to work under pressure while maintaining professionalism"
      ]
    },
    {
      title: "Master of Ceremonies (MC)",
      icon: Mic,
      type: "Full-time / Freelance",
      location: "Nairobi",
      description: "Lead events as a charismatic and professional MC, ensuring smooth flow and engaging entertainment throughout luxury events and celebrations.",
      requirements: [
        "Bachelor's degree in Communications, Theater Arts, or related field",
        "3+ years experience in event hosting or public speaking",
        "Exceptional verbal communication and presentation skills",
        "Charismatic personality with strong stage presence",
        "Ability to engage diverse audiences and adapt to different event types"
      ]
    },
    {
      title: "Catering Coordinator",
      icon: Utensils,
      type: "Full-time",
      location: "Nairobi",
      description: "Manage premium catering services, coordinate with chefs and service staff, and ensure exceptional culinary experiences at luxury events.",
      requirements: [
        "Diploma in Hospitality Management, Culinary Arts, or related field",
        "4+ years experience in catering or food service management",
        "Knowledge of food safety regulations and dietary requirements",
        "Strong organizational and vendor management skills",
        "Experience with high-end catering and event coordination"
      ]
    },
    {
      title: "Bridal Coordinator",
      icon: Heart,
      type: "Full-time / Part-time",
      location: "Nairobi",
      description: "Specialize in wedding coordination, managing bridal parties, and ensuring every detail of the special day is perfectly executed with elegance and grace.",
      requirements: [
        "Certificate in Wedding Planning or Event Management",
        "2+ years experience in wedding coordination or bridal services",
        "Exceptional attention to detail and organizational skills",
        "Strong interpersonal skills and ability to work under pressure",
        "Knowledge of wedding traditions and cultural customs"
      ]
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Application Submitted Successfully!",
      description: "Thank you for your interest in joining Sir Ole VVIP Protocol. Our HR team will review your application and contact you soon.",
    });
    
    setIsLoading(false);
  };

  return (
    <div className="pt-20 min-h-screen bg-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-playfair font-bold text-luxury-black mb-6">
            Work with <span className="text-gradient-gold">Excellence</span>
          </h1>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-6"></div>
          <p className="text-xl text-luxury-black/70 max-w-3xl mx-auto">
            Join the most refined protocol and hospitality team in Kenya. At Sir Ole, we value etiquette, attention to detail, and passionate service.
          </p>
        </div>

        {/* Company Culture */}
        <div className="bg-gradient-luxury rounded-2xl p-8 mb-16 text-center">
          <h2 className="text-3xl font-playfair font-bold text-luxury-gold mb-4">Our Culture</h2>
          <p className="text-luxury-white/90 text-lg max-w-3xl mx-auto">
            At Sir Ole, we believe that excellence is not just a goal—it's a way of life. Our team members are passionate professionals who take pride in creating extraordinary experiences. We foster an environment of continuous learning, mutual respect, and collective achievement.
          </p>
        </div>

        {/* Job Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-playfair font-bold text-luxury-black text-center mb-12">
            Available <span className="text-gradient-gold">Positions</span>
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            {jobPositions.map((job, index) => (
              <AccordionItem key={index} value={`job-${index}`} className="border border-luxury-black/10 rounded-lg">
                <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-luxury-black/5 rounded-lg">
                  <div className="flex items-center space-x-4 text-left">
                    <div className="w-12 h-12 bg-gradient-luxury rounded-full flex items-center justify-center">
                      <job.icon className="text-luxury-gold" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-playfair font-semibold text-luxury-black">{job.title}</h3>
                      <div className="flex space-x-4 text-sm text-luxury-black/60">
                        <span>{job.type}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-4">
                    <p className="text-luxury-black/80">{job.description}</p>
                    <div>
                      <h4 className="font-semibold text-luxury-black mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="text-luxury-black/70 flex items-start">
                            <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Application Form */}
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-luxury-black/10">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-playfair text-luxury-black">
                Apply <span className="text-gradient-gold">Now</span>
              </CardTitle>
              <CardDescription className="text-luxury-black/70">
                Take the first step towards joining our team of excellence
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName" className="text-luxury-black font-medium">Full Name</Label>
                    <Input 
                      id="fullName" 
                      required 
                      className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-luxury-black font-medium">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      required 
                      className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-luxury-black font-medium">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      required 
                      className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                    />
                  </div>
                  <div>
                    <Label htmlFor="position" className="text-luxury-black font-medium">Position Applying For</Label>
                    <Select required>
                      <SelectTrigger className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold">
                        <SelectValue placeholder="Select position" />
                      </SelectTrigger>
                      <SelectContent>
                        {jobPositions.map((job, index) => (
                          <SelectItem key={index} value={job.title.toLowerCase().replace(/\s+/g, '-')}>
                            {job.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="cv" className="text-luxury-black font-medium">Upload CV</Label>
                  <Input 
                    id="cv" 
                    type="file" 
                    accept=".pdf,.doc,.docx"
                    required 
                    className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
                  />
                </div>

                <div>
                  <Label htmlFor="coverLetter" className="text-luxury-black font-medium">Cover Letter / Message</Label>
                  <Textarea 
                    id="coverLetter" 
                    rows={5}
                    placeholder="Tell us why you want to join Sir Ole VVIP Protocol and what unique qualities you would bring to our team..."
                    className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold py-3 text-lg transition-all duration-300 hover:scale-105"
                >
                  {isLoading ? 'Submitting Application...' : 'Apply Now'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Careers;
