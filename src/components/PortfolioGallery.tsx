
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface Photo {
  id: string;
  src: string;
  alt_text: string;
  category: string;
}

interface PortfolioGalleryProps {
  isHomepage?: boolean;
}

const PortfolioGallery = ({ isHomepage = false }: PortfolioGalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  // Updated photo data with only the new visible images
  const photos: Photo[] = [
    {
      id: '7',
      src: '/lovable-uploads/aac3f7a9-ba36-4ed8-a16e-ace88dc00a86.png',
      alt_text: 'Professional consultation meeting with protocol officers reviewing event plans',
      category: 'corporate'
    },
    {
      id: '8',
      src: '/lovable-uploads/b9ba68f8-b176-49d5-a8ff-c9f8318086aa.png',
      alt_text: 'Professional protocol team in navy suits at corporate health event',
      category: 'corporate'
    },
    {
      id: '9',
      src: '/lovable-uploads/a986df73-48b9-47e1-9217-a017116e525b.png',
      alt_text: 'Distinguished VIP protocol team at health junction corporate event',
      category: 'corporate'
    },
    {
      id: '10',
      src: '/lovable-uploads/106281aa-04c2-4533-92e5-e1044566520f.png',
      alt_text: 'VIP protocol officers with guests at luxury corporate reception',
      category: 'private'
    },
    {
      id: '11',
      src: '/lovable-uploads/b7c270ed-d140-46b1-adc8-3123807ffd1a.png',
      alt_text: 'Professional team in traditional orange attire for cultural ceremony',
      category: 'cultural'
    },
    {
      id: '12',
      src: '/lovable-uploads/9adfbdd8-7ff7-41c3-8228-65e5803640f3.png',
      alt_text: 'Elegant bridal party in matching orange gowns for traditional wedding ceremony',
      category: 'wedding'
    },
    {
      id: '13',
      src: '/lovable-uploads/016009e8-2075-462b-bfa8-f2fe1a37581c.png',
      alt_text: 'Professional protocol officers at corporate registration desk',
      category: 'corporate'
    },
    {
      id: '14',
      src: '/lovable-uploads/2417aefe-5fed-43f0-b77b-4c8ee078ddcb.png',
      alt_text: 'VIP protocol team with distinguished guests at welcome reception',
      category: 'diplomatic'
    },
    {
      id: '15',
      src: '/lovable-uploads/b69edc0b-0e29-4f2d-ab0d-abd974ef5133.png',
      alt_text: 'Professional protocol team with security personnel at VIP event',
      category: 'government'
    },
    {
      id: '16',
      src: '/lovable-uploads/c8c41d47-43d1-4ff8-9931-38d6933001fb.png',
      alt_text: 'Cultural protocol team in traditional African attire for special ceremony',
      category: 'cultural'
    }
  ];

  const categories = ['all', 'corporate', 'diplomatic', 'wedding', 'government', 'private', 'cultural'];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  // For homepage: show only 6 photos in carousel
  const homepagePhotos = photos.slice(0, 6);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(homepagePhotos.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(homepagePhotos.length / 3)) % Math.ceil(homepagePhotos.length / 3));
  };

  if (isHomepage) {
    return (
      <section className="py-20 bg-gradient-to-br from-luxury-white via-luxury-gold/5 to-luxury-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-luxury-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-luxury-gold/20 rounded-full blur-2xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-luxury-black mb-6">
              Excellence in <span className="text-gradient-gold">Action</span>
            </h2>
            <p className="text-lg sm:text-xl text-luxury-black/80 max-w-3xl mx-auto leading-relaxed">
              Witness the pinnacle of VIP protocol service through our curated gallery of distinguished events
            </p>
          </div>

          {/* Carousel Container */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-2xl">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(homepagePhotos.length / 3) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="flex-none w-full">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gradient-to-br from-luxury-black/5 to-luxury-gold/10">
                      {homepagePhotos.slice(slideIndex * 3, slideIndex * 3 + 3).map((photo, index) => (
                        <div
                          key={photo.id}
                          className={`group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                            index === 1 ? 'md:scale-110 md:z-10' : ''
                          }`}
                        >
                          <div className="aspect-[4/3] overflow-hidden">
                            <img
                              src={photo.src}
                              alt={photo.alt_text}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                              loading="lazy"
                            />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                            <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                              <p className="text-sm font-medium leading-relaxed line-clamp-2">{photo.alt_text}</p>
                              <p className="text-xs text-luxury-gold mt-2 capitalize font-semibold">{photo.category}</p>
                            </div>
                          </div>
                          {/* Floating category badge */}
                          <div className="absolute top-4 left-4 bg-luxury-gold/90 text-luxury-black text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                            {photo.category.charAt(0).toUpperCase() + photo.category.slice(1)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Carousel Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-luxury-gold/90 hover:bg-luxury-gold text-luxury-black p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-luxury-gold/90 hover:bg-luxury-gold text-luxury-black p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-20"
            >
              <ChevronRight size={20} />
            </button>

            {/* Slide indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(homepagePhotos.length / 3) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-luxury-gold scale-125' 
                      : 'bg-luxury-gold/30 hover:bg-luxury-gold/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-luxury-black/5 via-luxury-gold/10 to-luxury-black/5 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-luxury-black mb-4">
                Discover Our Complete Portfolio
              </h3>
              <p className="text-luxury-black/70 mb-6 max-w-2xl mx-auto">
                Explore our extensive gallery showcasing years of excellence in VIP protocol services across diverse events and distinguished clientele
              </p>
              <Link to="/gallery">
                <Button 
                  size="lg" 
                  className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-bold px-8 py-4 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group rounded-full"
                >
                  View Complete Gallery
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-luxury-gold text-luxury-black shadow-lg transform scale-105'
                  : 'bg-luxury-black/10 text-luxury-black hover:bg-luxury-gold/20 hover:shadow-md'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt_text}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <p className="text-sm font-medium leading-relaxed">{photo.alt_text}</p>
                  <p className="text-xs text-luxury-gold mt-2 capitalize font-semibold">{photo.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery;
