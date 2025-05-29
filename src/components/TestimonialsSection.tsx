
import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Corporate Event Director",
      content: "Exceptional service that transformed our annual gala into an unforgettable experience.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "Embassy Protocol Officer",
      content: "Professional excellence in every detail. Their diplomatic protocol expertise is unmatched.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "Luxury Brand Manager",
      content: "Flawless execution from start to finish. Our VIP clients were thoroughly impressed.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-luxury">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-luxury-white mb-6">
            Client <span className="text-luxury-gold">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-luxury-white/90 max-w-3xl mx-auto">
            Hear from our satisfied clients about their exceptional experiences
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-luxury-white/10 backdrop-blur-sm border-luxury-white/20 hover:bg-luxury-white/20 transition-all duration-300">
              <CardContent className="p-8">
                <Quote className="text-luxury-gold mb-4" size={32} />
                <p className="text-luxury-white/90 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-luxury-gold fill-current" size={16} />
                  ))}
                </div>
                <div className="border-t border-luxury-white/20 pt-4">
                  <h4 className="text-luxury-gold font-semibold">{testimonial.name}</h4>
                  <p className="text-luxury-white/70 text-sm">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
