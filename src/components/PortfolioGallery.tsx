
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';

const PortfolioGallery = ({ isHomepage = false }: { isHomepage?: boolean }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Limited carousel images to 5 selected images
  const carouselImages = [
    {
      src: '/lovable-uploads/2835e50b-8540-4a20-b379-264f22d6a1e9.png',
      category: 'Team Services'
    },
    {
      src: '/lovable-uploads/ebbab88b-0596-40bf-b0b7-2f7812c15cde.png',
      category: 'VVIP Protocol'
    },
    {
      src: '/lovable-uploads/608158d2-48ae-425b-a7d8-41d1453d06f4.png',
      category: 'Luxury Events'
    },
    {
      src: '/lovable-uploads/c0d7cb75-3be2-4849-984d-aba7507a74a7.png',
      category: 'Award Ceremonies'
    },
    {
      src: '/lovable-uploads/349eca6a-8be0-41b8-b658-6812782f24bd.png',
      category: 'Luxury Venues'
    }
  ];

  // Extended portfolio images using all uploaded photos
  const allPortfolioImages = [
    {
      src: '/lovable-uploads/2835e50b-8540-4a20-b379-264f22d6a1e9.png',
      category: 'Team Services'
    },
    {
      src: '/lovable-uploads/1c51a4d7-6e98-495a-b619-d798e08c8b19.png',
      category: 'Cultural Events'
    },
    {
      src: '/lovable-uploads/ebbab88b-0596-40bf-b0b7-2f7812c15cde.png',
      category: 'VVIP Protocol'
    },
    {
      src: '/lovable-uploads/3c79f6f7-1682-4d4f-954c-ea88a6d0cb8e.png',
      category: 'Corporate Events'
    },
    {
      src: '/lovable-uploads/39f351a6-b6df-4ed8-9267-ec7d84f67b55.png',
      category: 'Event Hosting'
    },
    {
      src: '/lovable-uploads/608158d2-48ae-425b-a7d8-41d1453d06f4.png',
      category: 'Luxury Events'
    },
    {
      src: '/lovable-uploads/c0d7cb75-3be2-4849-984d-aba7507a74a7.png',
      category: 'Award Ceremonies'
    },
    {
      src: '/lovable-uploads/d4fdfea7-8670-4110-9791-f0516ec43e1e.png',
      category: 'VVIP Team Services'
    },
    {
      src: '/lovable-uploads/48401841-d864-4dae-a945-f26d5cb259d6.png',
      category: 'Premium Events'
    },
    {
      src: '/lovable-uploads/6ff20f4d-d952-4b11-92d2-2f27d64dcc6b.png',
      category: 'Special Occasions'
    },
    {
      src: '/lovable-uploads/7180f2a2-8891-4fbe-b526-982d6e0b1115.png',
      category: 'Red Carpet Events'
    },
    {
      src: '/lovable-uploads/b4119590-f054-4bc0-a7a4-918f72e228c4.png',
      category: 'Award Presentations'
    },
    {
      src: '/lovable-uploads/a31b9767-b414-4e49-8c46-114c537e874d.png',
      category: 'VVIP Ceremonies'
    },
    {
      src: '/lovable-uploads/c4bf5383-4aef-4c73-8242-83c4de363bfa.png',
      category: 'Executive Meetings'
    },
    {
      src: '/lovable-uploads/90867b2a-97b6-45dd-9957-212c10041118.png',
      category: 'VVIP Protocol Events'
    },
    {
      src: '/lovable-uploads/ed8ef56f-af69-4845-8d6d-f82dc85bd2ec.png',
      category: 'Elite Services'
    },
    {
      src: '/lovable-uploads/2c464c3c-77bd-401b-9eb1-551ce786b145.png',
      category: 'Professional Team'
    },
    {
      src: '/lovable-uploads/9b257c2a-c3de-4707-8212-a13c99b9cce7.png',
      category: 'Client Relations'
    },
    {
      src: '/lovable-uploads/3d39933e-766d-4f71-b99f-200eda86b8d9.png',
      category: 'Executive Services'
    },
    {
      src: '/lovable-uploads/c0f0c868-ff27-41b0-9da0-2920d4a91c4f.png',
      category: 'Premium Protocol'
    },
    {
      src: '/lovable-uploads/0db3978f-fddb-459e-b8bb-85802bf3c090.png',
      category: 'Event Management'
    },
    {
      src: '/lovable-uploads/349eca6a-8be0-41b8-b658-6812782f24bd.png',
      category: 'Luxury Venues'
    },
    {
      src: '/lovable-uploads/ebe0fd91-a90a-4892-918e-0ba9efc3f528.png',
      category: 'Fine Dining Events'
    },
    {
      src: '/lovable-uploads/3f9c5810-d649-4491-b362-4c8c4e225b10.png',
      category: 'Executive Consultations'
    }
  ];

  // Limit to 6 images for homepage, show all for gallery page
  const portfolioImages = isHomepage ? allPortfolioImages.slice(0, 6) : allPortfolioImages;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
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
            Witness the excellence of our VVIP protocol and event management services through these memorable moments
          </p>
        </div>

        {/* Enhanced 3D Carousel with better mobile navigation */}
        <div className="relative h-80 sm:h-96 md:h-[500px] mb-16 perspective-1000">
          <div className="relative w-full h-full">
            {carouselImages.map((image, index) => {
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
                      translateX(${offset * 250}px) 
                      translateZ(${-absOffset * 80}px) 
                      rotateY(${offset * 12}deg)
                      scale(${1 - absOffset * 0.15})
                    `,
                    zIndex: 10 - absOffset,
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl group cursor-pointer mx-4 sm:mx-8"
                       onClick={() => setSelectedImage(image.src)}>
                    <img
                      src={image.src}
                      alt={image.category}
                      className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/70 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 text-luxury-white">
                      <span className="inline-block bg-luxury-gold text-luxury-black px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-semibold">
                        {image.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Expand className="text-luxury-white" size={20} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Navigation Buttons - larger and more prominent for mobile */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-luxury-black/70 hover:bg-luxury-gold active:bg-luxury-gold-dark text-luxury-white hover:text-luxury-black p-3 sm:p-3 rounded-full transition-all duration-300 touch-target shadow-lg backdrop-blur-sm"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="sm:w-6 sm:h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-luxury-black/70 hover:bg-luxury-gold active:bg-luxury-gold-dark text-luxury-white hover:text-luxury-black p-3 sm:p-3 rounded-full transition-all duration-300 touch-target shadow-lg backdrop-blur-sm"
            aria-label="Next image"
          >
            <ChevronRight size={24} className="sm:w-6 sm:h-6" />
          </button>

          {/* Enhanced Slide Indicators */}
          <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 flex space-x-2 bg-luxury-black/30 px-3 py-2 rounded-full backdrop-blur-sm">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 touch-target ${
                  currentSlide === index ? 'bg-luxury-gold scale-125' : 'bg-luxury-white/60 hover:bg-luxury-white/80'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
                  alt={image.category}
                  className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="text-luxury-gold text-sm">{image.category}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action - only show on homepage */}
        {isHomepage && (
          <div className="text-center mt-16">
            <Link to="/gallery">
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold px-8 py-4 text-lg">
                View All Projects
              </Button>
            </Link>
          </div>
        )}
      </div>

      {/* Enhanced Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-luxury-black/95 flex items-center justify-center p-4 mobile-safe-area"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img
              src={selectedImage}
              alt="Portfolio Image"
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 text-luxury-white hover:text-luxury-gold text-2xl sm:text-3xl bg-luxury-black/50 rounded-full p-2 touch-target"
              aria-label="Close image"
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
