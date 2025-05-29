
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';

const PortfolioGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const portfolioImages = [
    {
      src: '/lovable-uploads/2329957a-d7b8-4f7d-972b-f79e1a8b71c1.png',
      title: 'Cultural Ceremony Excellence',
      description: 'Professional ushering team in traditional attire showcasing our cultural protocol expertise',
      category: 'Cultural Events'
    },
    {
      src: '/lovable-uploads/f71bd9cd-c4c9-4a59-a24d-a6e49d984afe.png',
      title: 'Joyful Celebrations',
      description: 'Creating memorable moments with our skilled event coordination team',
      category: 'Celebrations'
    },
    {
      src: '/lovable-uploads/6e96cbc3-ee8c-4b1d-9a6b-90f007484103.png',
      title: 'Luxury Dining Setup',
      description: 'Elegant table arrangements and premium event setup for VIP occasions',
      category: 'Luxury Events'
    },
    {
      src: '/lovable-uploads/b497ba4d-222d-4316-97e0-44f8c7702e39.png',
      title: 'VIP Guest Services',
      description: 'Professional couple coordination and guest hospitality services',
      category: 'VIP Services'
    },
    {
      src: '/lovable-uploads/708a5110-0565-429e-992d-87435f5589f7.png',
      title: 'Ceremonial Protocol',
      description: 'Expert protocol management for traditional and diplomatic ceremonies',
      category: 'Protocol Events'
    },
    {
      src: '/lovable-uploads/379e1683-234b-486a-b76f-2db1512b9fbd.png',
      title: 'Grand Event Management',
      description: 'Full-scale event coordination with red carpet treatment and crowd management',
      category: 'Grand Events'
    },
    {
      src: '/lovable-uploads/86c39f3e-19f5-4d04-bacc-36e8996ed3dc.png',
      title: 'Master of Ceremonies',
      description: 'Professional MC services and event hosting for premium occasions',
      category: 'MC Services'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioImages.length) % portfolioImages.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-luxury-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-luxury-black mb-6">
            Our <span className="text-gradient-gold">Portfolio</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
          <p className="text-xl text-luxury-black/70 max-w-3xl mx-auto">
            Witness the excellence of our VIP protocol and event management services through these memorable moments
          </p>
        </div>

        {/* 3D Carousel */}
        <div className="relative h-96 md:h-[500px] mb-16 perspective-1000">
          <div className="relative w-full h-full">
            {portfolioImages.map((image, index) => {
              const offset = index - currentSlide;
              const absOffset = Math.abs(offset);
              const isVisible = absOffset <= 2;
              
              return (
                <div
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 transform-gpu ${
                    isVisible ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    transform: `
                      translateX(${offset * 300}px) 
                      translateZ(${-absOffset * 100}px) 
                      rotateY(${offset * 15}deg)
                      scale(${1 - absOffset * 0.2})
                    `,
                    zIndex: 10 - absOffset,
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group cursor-pointer"
                       onClick={() => setSelectedImage(image.src)}>
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-luxury-white">
                      <h3 className="text-2xl font-playfair font-bold mb-2">{image.title}</h3>
                      <p className="text-luxury-white/90 mb-2">{image.description}</p>
                      <span className="inline-block bg-luxury-gold text-luxury-black px-3 py-1 rounded-full text-sm font-semibold">
                        {image.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Expand className="text-luxury-white" size={24} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-luxury-black/50 hover:bg-luxury-gold text-luxury-white hover:text-luxury-black p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-luxury-black/50 hover:bg-luxury-gold text-luxury-white hover:text-luxury-black p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
            {portfolioImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index ? 'bg-luxury-gold scale-125' : 'bg-luxury-white/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedImage(image.src)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-luxury-white font-playfair font-bold mb-1">{image.title}</h3>
                  <span className="text-luxury-gold text-sm">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold px-8 py-4 text-lg">
            View All Projects
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-luxury-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Portfolio Image"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-luxury-white hover:text-luxury-gold text-3xl"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioGallery;
