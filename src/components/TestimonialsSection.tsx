import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "James Mwangi",
      role: "CEO, Tech Innovations",
      content: "Absolutely flawless execution. Every detail was perfect, and the VIP treatment exceeded all our expectations.",
      rating: 5
    },
    {
      name: "Mary Kibe",
      role: "Event Director",
      content: "The level of sophistication and attention to detail is unmatched. They transformed our vision into reality.",
      rating: 5
    },
    {
      name: "Anthony Njenga",
      role: "Marketing Executive",
      content: "Professional, reliable, and truly exceptional service. Our guests were amazed by the luxury experience.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-black mb-6">
            Client <span className="text-gradient-gold">Testimonials</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from those who experienced our exceptional service
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-luxury-black to-gray-900 rounded-xl p-8 text-center hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-luxury-gold fill-current" />
                ))}
              </div>
              <p className="text-luxury-white/90 mb-6 italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div>
                <h4 className="text-luxury-gold font-semibold">{testimonial.name}</h4>
                <p className="text-luxury-white/70 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
