import { Users, Book, Clock, MapPin } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Users,
      title: "Professional Ushering",
      description: "Our expertly trained ushers provide seamless guidance and assistance, ensuring your guests feel welcomed and properly directed throughout your event with grace and professionalism.",
      features: ["Multilingual staff", "Formal training", "Event coordination", "Guest assistance"]
    },
    {
      icon: Book,
      title: "VIP Security Services", 
      description: "Discrete and professional security solutions tailored for high-profile individuals and events, providing peace of mind without compromising the elegance of your occasion.",
      features: ["Executive protection", "Event security", "Risk assessment", "Discrete operations"]
    },
    {
      icon: Clock,
      title: "High-Profile Protocol",
      description: "Sophisticated protocol management for diplomatic events, corporate functions, and exclusive gatherings, ensuring every detail aligns with international standards of excellence.",
      features: ["Diplomatic protocol", "Corporate events", "Cultural sensitivity", "International standards"]
    },
    {
      icon: MapPin,
      title: "Luxury Event Management",
      description: "End-to-end event planning and execution services that transform your vision into reality, creating unforgettable experiences with meticulous attention to detail.",
      features: ["Full event planning", "Vendor coordination", "Timeline management", "Quality assurance"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-luxury-black mb-6">
            Our <span className="text-gradient-gold">Services</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-luxury-black/70 max-w-3xl mx-auto">
            Comprehensive luxury services designed to elevate every aspect of your event experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-luxury-white rounded-2xl p-8 shadow-lg border border-luxury-black/10 hover:border-luxury-gold/50 hover:shadow-2xl hover:shadow-luxury-gold/10 transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-luxury-gold" size={32} />
                </div>
                
                <h3 className="text-xl font-playfair font-bold text-luxury-black mb-4 group-hover:text-luxury-gold transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-luxury-black/70 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-luxury-black/60 flex items-center">
                      <div className="w-1.5 h-1.5 bg-luxury-gold rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
