
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';

interface GalleryPhoto {
  id: string;
  src: string;
  category: string;
  alt_text?: string;
  display_order: number;
  is_featured: boolean;
}

// Mock gallery data
const mockGalleryPhotos: GalleryPhoto[] = [
  { id: '1', src: '/lovable-uploads/2835e50b-8540-4a20-b379-264f22d6a1e9.png', category: 'Team Services', is_featured: true, display_order: 1 },
  { id: '2', src: '/lovable-uploads/ebbab88b-0596-40bf-b0b7-2f7812c15cde.png', category: 'VVIP Protocol', is_featured: true, display_order: 2 },
  { id: '3', src: '/lovable-uploads/c4bf5383-4aef-4c73-8242-83c4de363bfa.png', category: 'Executive Meetings', is_featured: true, display_order: 3 },
  { id: '4', src: '/lovable-uploads/c02cf92c-6efb-4a58-b4cf-e12866d1164c.png', category: 'Red Carpet Events', is_featured: true, display_order: 4 },
  { id: '5', src: '/lovable-uploads/f47d4502-0c8b-4ba8-becc-584a00a22418.png', category: 'Luxury Events', is_featured: true, display_order: 5 },
  { id: '6', src: '/lovable-uploads/02da9a98-f3d5-4a34-9909-5c798ce596c4.png', category: 'Wedding Ceremonies', is_featured: true, display_order: 6 },
  { id: '7', src: '/lovable-uploads/1c51a4d7-6e98-495a-b619-d798e08c8b19.png', category: 'Cultural Events', is_featured: false, display_order: 7 },
  { id: '8', src: '/lovable-uploads/3c79f6f7-1682-4d4f-954c-ea88a6d0cb8e.png', category: 'Corporate Events', is_featured: false, display_order: 8 },
  { id: '9', src: '/lovable-uploads/608158d2-48ae-425b-a7d8-41d1453d06f4.png', category: 'Luxury Events', is_featured: false, display_order: 9 },
  { id: '10', src: '/lovable-uploads/d4fdfea7-8670-4110-9791-f0516ec43e1e.png', category: 'VVIP Team Services', is_featured: false, display_order: 10 },
];

const PortfolioGallery = ({ isHomepage = false }: { isHomepage?: boolean }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [carouselImages, setCarouselImages] = useState<GalleryPhoto[]>([]);
  const [portfolioImages, setPortfolioImages] = useState<GalleryPhoto[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading and set mock data
    const loadGalleryData = () => {
      setIsLoading(true);
      
      // Featured photos for carousel
      const featuredPhotos = mockGalleryPhotos.filter(photo => photo.is_featured);
      setCarouselImages(featuredPhotos);
      
      // Portfolio photos (limit to 6 for homepage, all for gallery page)
      const photosToShow = isHomepage ? mockGalleryPhotos.slice(0, 6) : mockGalleryPhotos;
      setPortfolioImages(photosToShow);
      
      setIsLoading(false);
    };

    loadGalleryData();
  }, [isHomepage]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  useEffect(() => {
    if (carouselImages.length > 0) {
      const interval = setInterval(nextSlide, 5000);
      return () => clearInterval(interval);
    }
  }, [carouselImages.length]);

  if (isLoading) {
    return (
      <section className="py-20 bg-luxury-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-luxury-gold mx-auto mb-4"></div>
            <p className="text-luxury-black">Loading gallery...</p>
          </div>
        </div>
      </section>
    );
  }

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

        {/* Enhanced 3D Carousel */}
        {carouselImages.length > 0 && (
          <div className="relative h-80 sm:h-96 md:h-[500px] mb-16 perspective-1000">
            <div className="relative w-full h-full">
              {carouselImages.map((image, index) => {
                const offset = index - currentSlide;
                const absOffset = Math.abs(offset);
                const isVisible = absOffset <= 2;
                
                return (
                  <div
                    key={image.id}
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
                        alt={image.alt_text || image.category}
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

            {/* Navigation Buttons */}
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

            {/* Slide Indicators */}
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
        )}

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedImage(image.src)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt_text || image.category}
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
