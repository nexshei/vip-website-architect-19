import React, { useState } from 'react';
import { Users, Shield, Clock, Calendar, ChevronRight, Star, Award, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [showDetails, setShowDetails] = useState(false);

  const services = [
    {
      icon: Users,
      title: "Professional Ushering",
      description: "Our expertly trained ushers provide seamless guidance and assistance, ensuring your guests feel welcomed and properly directed throughout your event with grace and professionalism.",
      features: ["Multilingual staff", "Formal training", "Event coordination", "Guest assistance"],
      testimonial: "Used at Presidential Gala 2023",
      clientQuote: "Exceptional service that exceeded our expectations",
      image: "/api/placeholder/400/300",
      stats: { events: "200+", satisfaction: "99%" },
      detailedInfo: {
        overview: "Our Professional Ushering service represents the gold standard in event hospitality. Our carefully selected and extensively trained ushers ensure every guest receives personalized attention from arrival to departure.",
        serviceIncludes: [
          "Pre-event venue familiarization and briefing",
          "Professional attire and grooming standards",
          "Multilingual capabilities (English, French, Spanish, German)",
          "Digital guest management systems",
          "Real-time coordination with event management",
          "VIP and special needs assistance",
          "Emergency protocol training",
          "Post-event feedback collection"
        ],
        process: [
          "Initial consultation and requirements assessment",
          "Custom staffing plan development",
          "Team selection and specialized training",
          "Pre-event rehearsal and briefing",
          "Day-of coordination and supervision",
          "Post-event analysis and reporting"
        ],
        pricing: "Starting from $150 per usher per event",
        duration: "Minimum 4-hour engagements"
      }
    },
    {
      icon: Shield,
      title: "VIP Security Services", 
      description: "Discrete and professional security solutions tailored for high-profile individuals and events, providing peace of mind without compromising the elegance of your occasion.",
      features: ["Executive protection", "Event security", "Risk assessment", "Discrete operations"],
      testimonial: "Trusted by diplomatic missions",
      clientQuote: "Professional and unobtrusive protection",
      image: "/api/placeholder/400/300",
      stats: { events: "150+", satisfaction: "100%" },
      detailedInfo: {
        overview: "Our VIP Security Services provide world-class protection with unmatched discretion. Our team includes former law enforcement and military professionals trained in executive protection protocols.",
        serviceIncludes: [
          "Comprehensive threat and risk assessment",
          "Advanced security planning and coordination",
          "Close protection for VIPs and dignitaries",
          "Venue security sweeps and monitoring",
          "Emergency response and evacuation protocols",
          "Coordination with local law enforcement",
          "Cybersecurity awareness and protocols",
          "24/7 security command center support"
        ],
        process: [
          "Security consultation and threat analysis",
          "Custom security plan development",
          "Team deployment and positioning",
          "Real-time monitoring and response",
          "Incident management and reporting",
          "Post-event security debrief"
        ],
        pricing: "Custom pricing based on security requirements",
        duration: "Flexible arrangements from single events to ongoing protection"
      }
    },
    {
      icon: Clock,
      title: "High-Profile Protocol",
      description: "Sophisticated protocol management for diplomatic events, corporate functions, and exclusive gatherings, ensuring every detail aligns with international standards of excellence.",
      features: ["Diplomatic protocol", "Corporate events", "Cultural sensitivity", "International standards"],
      testimonial: "Embassy events specialist",
      clientQuote: "Flawless execution of complex protocols",
      image: "/api/placeholder/400/300",
      stats: { events: "100+", satisfaction: "98%" },
      detailedInfo: {
        overview: "Our High-Profile Protocol service ensures your events meet the highest international standards of diplomatic and corporate etiquette. We specialize in complex multi-cultural events requiring precise protocol management.",
        serviceIncludes: [
          "International diplomatic protocol expertise",
          "Cultural sensitivity training and implementation",
          "Flag protocols and ceremonial arrangements",
          "Precedence and seating arrangements",
          "Translation and interpretation coordination",
          "Gift exchange and presentation protocols",
          "Media and photography protocol management",
          "Religious and cultural accommodation planning"
        ],
        process: [
          "Protocol requirements analysis",
          "Cultural and diplomatic research",
          "Detailed protocol manual creation",
          "Staff training and rehearsals",
          "Event execution and monitoring",
          "Protocol compliance verification"
        ],
        pricing: "Starting from $2,500 per event",
        duration: "Comprehensive planning begins 4-6 weeks prior to event"
      }
    },
    {
      icon: Calendar,
      title: "Luxury Event Management",
      description: "End-to-end event planning and execution services that transform your vision into reality, creating unforgettable experiences with meticulous attention to detail.",
      features: ["Full event planning", "Vendor coordination", "Timeline management", "Quality assurance"],
      testimonial: "Corporate launch expert",
      clientQuote: "Transformed our vision into reality",
      image: "/api/placeholder/400/300",
      stats: { events: "300+", satisfaction: "97%" },
      detailedInfo: {
        overview: "Our Luxury Event Management service provides complete end-to-end event planning and execution. From intimate gatherings to large-scale galas, we handle every detail with precision and elegance.",
        serviceIncludes: [
          "Comprehensive event design and planning",
          "Venue selection and negotiation",
          "Premium vendor network coordination",
          "Custom décor and floral arrangements",
          "Gourmet catering and beverage service",
          "Entertainment and speaker coordination",
          "Transportation and accommodation planning",
          "On-site event management and coordination"
        ],
        process: [
          "Vision consultation and concept development",
          "Budget planning and vendor selection",
          "Design development and approval",
          "Timeline creation and management",
          "Final preparations and setup",
          "Event execution and real-time management"
        ],
        pricing: "Starting from $10,000 for intimate events",
        duration: "Planning begins 8-12 weeks prior to event date"
      }
    }
  ];

  const handleLearnMore = (serviceIndex: number) => {
    setActiveService(serviceIndex);
    setShowDetails(true);
  };

  return (
    <section id="services" className="py-20 bg-luxury-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-luxury-black mb-6">
            Our <span className="text-gradient-gold">Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-luxury-black/70 max-w-3xl mx-auto">
            Comprehensive luxury services designed to elevate every aspect of your event experience
          </p>
        </div>

        {!showDetails ? (
          <>
            {/* Service Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className={`group bg-luxury-white rounded-2xl p-6 shadow-lg border transition-all duration-500 cursor-pointer transform ${
                    hoveredCard === index 
                      ? 'border-luxury-gold/80 shadow-2xl shadow-luxury-gold/20 -translate-y-4 scale-105' 
                      : 'border-luxury-black/10 hover:border-luxury-gold/50'
                  } ${activeService === index ? 'ring-2 ring-luxury-gold' : ''}`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  onClick={() => setActiveService(index)}
                >
                  <CardContent className="p-0">
                    <div className="text-center">
                      <div className="relative w-20 h-20 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="text-luxury-gold" size={32} />
                        
                        {/* Floating stats on hover */}
                        <div className={`absolute -top-2 -right-2 bg-luxury-gold text-luxury-black text-xs px-2 py-1 rounded-full font-semibold transition-all duration-300 ${
                          hoveredCard === index ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                        }`}>
                          {service.stats.satisfaction}
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-playfair font-bold text-luxury-black mb-4 group-hover:text-luxury-gold transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-luxury-black/70 mb-4 leading-relaxed text-sm">
                        {service.description.slice(0, 100)}...
                      </p>

                      {/* Service stats */}
                      <div className="flex justify-between items-center mb-4 text-xs text-luxury-black/60">
                        <span>{service.stats.events} Events</span>
                        <div className="flex items-center space-x-1">
                          <Star className="text-luxury-gold" size={12} />
                          <span>{service.stats.satisfaction}</span>
                        </div>
                      </div>

                      <Button
                        variant="outline"
                        size="sm"
                        className="border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black transition-all duration-300"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleLearnMore(index);
                        }}
                      >
                        Learn More <ChevronRight size={16} className="ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Detailed Service View */}
            <div className="bg-gradient-luxury rounded-3xl p-8 lg:p-12 text-luxury-white">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mr-4">
                      {React.createElement(services[activeService].icon, { 
                        className: "text-luxury-black", 
                        size: 32 
                      })}
                    </div>
                    <div>
                      <h3 className="text-3xl font-playfair font-bold text-luxury-gold mb-2">
                        {services[activeService].title}
                      </h3>
                      <p className="text-luxury-white/80">
                        Comprehensive Service Details
                      </p>
                    </div>
                  </div>

                  <p className="text-luxury-white/90 mb-6 leading-relaxed">
                    {services[activeService].description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-luxury-gold font-semibold mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {services[activeService].features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-luxury-white/80">
                          <div className="w-2 h-2 bg-luxury-gold rounded-full mr-2"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  <blockquote className="border-l-4 border-luxury-gold pl-4 italic text-luxury-white/90 mb-6">
                    "{services[activeService].clientQuote}"
                  </blockquote>

                  <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold">
                    Request This Service
                  </Button>
                </div>

                <div className="relative">
                  <div className="aspect-video bg-luxury-black/20 rounded-2xl overflow-hidden">
                    <img 
                      src={services[activeService].image} 
                      alt={services[activeService].title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/50 to-transparent"></div>
                  </div>
                  
                  {/* Service selector tabs */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {services.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveService(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          activeService === index ? 'bg-luxury-gold scale-125' : 'bg-luxury-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          /* Detailed Service Information */
          <div className="bg-gradient-luxury rounded-3xl p-8 lg:p-12 text-luxury-white">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center">
                <div className="w-16 h-16 bg-luxury-gold rounded-full flex items-center justify-center mr-4">
                  {React.createElement(services[activeService].icon, { 
                    className: "text-luxury-black", 
                    size: 32 
                  })}
                </div>
                <div>
                  <h3 className="text-3xl font-playfair font-bold text-luxury-gold mb-2">
                    {services[activeService].title}
                  </h3>
                  <p className="text-luxury-white/80">
                    Comprehensive Service Details
                  </p>
                </div>
              </div>
              <Button
                onClick={() => setShowDetails(false)}
                className="bg-luxury-white/10 hover:bg-luxury-white/20 text-luxury-white border border-luxury-white/20"
              >
                Back to Overview
              </Button>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="grid w-full grid-cols-4 bg-luxury-white/10 mb-8">
                <TabsTrigger value="overview" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-black">Overview</TabsTrigger>
                <TabsTrigger value="services" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-black">Services</TabsTrigger>
                <TabsTrigger value="process" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-black">Process</TabsTrigger>
                <TabsTrigger value="pricing" className="data-[state=active]:bg-luxury-gold data-[state=active]:text-luxury-black">Pricing</TabsTrigger>
              </TabsList>

              <TabsContent value="overview" className="space-y-6">
                <div className="bg-luxury-white/5 rounded-xl p-6">
                  <h4 className="text-xl font-playfair font-bold text-luxury-gold mb-4 flex items-center">
                    <Award className="mr-2" size={24} />
                    Service Overview
                  </h4>
                  <p className="text-luxury-white/90 leading-relaxed">
                    {services[activeService].detailedInfo.overview}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-luxury-white/5 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-luxury-gold mb-3">Client Testimonial</h5>
                    <blockquote className="text-luxury-white/90 italic">
                      "{services[activeService].clientQuote}"
                    </blockquote>
                    <p className="text-luxury-gold text-sm mt-2">{services[activeService].testimonial}</p>
                  </div>
                  
                  <div className="bg-luxury-white/5 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-luxury-gold mb-3">Performance Stats</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-luxury-white/80">Events Completed:</span>
                        <span className="text-luxury-gold font-semibold">{services[activeService].stats.events}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-luxury-white/80">Client Satisfaction:</span>
                        <span className="text-luxury-gold font-semibold">{services[activeService].stats.satisfaction}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="services" className="space-y-4">
                <h4 className="text-xl font-playfair font-bold text-luxury-gold mb-6">What's Included</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {services[activeService].detailedInfo.serviceIncludes.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 bg-luxury-white/5 rounded-lg p-4">
                      <CheckCircle className="text-luxury-gold mt-1 flex-shrink-0" size={16} />
                      <span className="text-luxury-white/90">{item}</span>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="process" className="space-y-6">
                <h4 className="text-xl font-playfair font-bold text-luxury-gold mb-6">Our Process</h4>
                <div className="space-y-4">
                  {services[activeService].detailedInfo.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-4 bg-luxury-white/5 rounded-lg p-6">
                      <div className="bg-luxury-gold text-luxury-black rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm flex-shrink-0">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-luxury-white/90">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="pricing" className="space-y-6">
                <h4 className="text-xl font-playfair font-bold text-luxury-gold mb-6">Investment & Timeline</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-luxury-white/5 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-luxury-gold mb-4">Pricing</h5>
                    <p className="text-luxury-white/90 mb-4">{services[activeService].detailedInfo.pricing}</p>
                    <p className="text-luxury-white/70 text-sm">
                      Custom packages available based on specific requirements and event complexity.
                    </p>
                  </div>
                  
                  <div className="bg-luxury-white/5 rounded-xl p-6">
                    <h5 className="text-lg font-semibold text-luxury-gold mb-4">Timeline</h5>
                    <p className="text-luxury-white/90 mb-4">{services[activeService].detailedInfo.duration}</p>
                    <p className="text-luxury-white/70 text-sm">
                      Rush orders may be accommodated with additional coordination fees.
                    </p>
                  </div>
                </div>
                
                <div className="bg-luxury-gold/10 border border-luxury-gold/30 rounded-xl p-6">
                  <h5 className="text-lg font-semibold text-luxury-gold mb-3">Ready to Get Started?</h5>
                  <p className="text-luxury-white/90 mb-4">
                    Contact us for a personalized consultation and custom quote for your specific needs.
                  </p>
                  <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold">
                    Request Consultation
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
