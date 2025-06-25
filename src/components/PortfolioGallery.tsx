
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';

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
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

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

  // For homepage: show only 8 photos in carousel
  const homepagePhotos = photos.slice(0, 8);
  const photosPerSlide = 4;
  const totalSlides = Math.ceil(homepagePhotos.length / photosPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const openImageModal = (photo: Photo) => {
    setSelectedImage(photo);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
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

          {/* Enhanced Carousel Container */}
          <div className="relative max-w-7xl mx-auto">
            <div className="overflow-hidden rounded-3xl shadow-2xl bg-gradient-to-br from-luxury-black/5 to-luxury-gold/10 p-6">
              <div 
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="flex-none w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {homepagePhotos.slice(slideIndex * photosPerSlide, slideIndex * photosPerSlide + photosPerSlide).map((photo) => (
                        <div
                          key={photo.id}
                          className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 cursor-pointer bg-white border border-luxury-gold/20"
                          onClick={() => openImageModal(photo)}
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
                          <div className="absolute top-3 left-3 bg-luxury-gold/90 text-luxury-black text-xs font-bold px-3 py-1 rounded-full backdrop-blur-sm">
                            {photo.category.charAt(0).toUpperCase() + photo.category.slice(1)}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Carousel Navigation */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-20 border-2 border-white"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 z-20 border-2 border-white"
            >
              <ChevronRight size={24} />
            </button>

            {/* Enhanced Slide indicators */}
            <div className="flex justify-center mt-8 space-x-3">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-luxury-gold scale-125 shadow-lg' 
                      : 'bg-luxury-gold/30 hover:bg-luxury-gold/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-luxury-black/5 via-luxury-gold/10 to-luxury-black/5 rounded-3xl p-10 backdrop-blur-sm border border-luxury-gold/20">
              <h3 className="text-3xl sm:text-4xl font-playfair font-bold text-luxury-black mb-6">
                Discover Our Complete Portfolio
              </h3>
              <p className="text-luxury-black/70 mb-8 max-w-2xl mx-auto text-lg">
                Explore our extensive gallery showcasing years of excellence in VIP protocol services across diverse events and distinguished clientele
              </p>
              <Link to="/gallery">
                <Button 
                  size="lg" 
                  className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-bold px-10 py-6 text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl group rounded-full border-2 border-luxury-gold-dark"
                >
                  View All Photos
                  <ArrowRight className="ml-3 group-hover:translate-x-1 transition-transform duration-300" size={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={closeImageModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-luxury-black/95 border-luxury-gold/30">
            <DialogTitle className="sr-only">
              {selectedImage?.alt_text || 'Gallery Image'}
            </DialogTitle>
            <div className="relative">
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 z-10 bg-luxury-gold/20 hover:bg-luxury-gold/40 text-white p-2 rounded-full transition-all duration-300"
              >
                <X size={20} />
              </button>
              {selectedImage && (
                <div className="flex flex-col">
                  <div className="relative">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt_text}
                      className="w-full h-auto max-h-[70vh] object-contain rounded-t-lg"
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-r from-luxury-black to-luxury-black/80">
                    <h3 className="text-xl font-bold text-luxury-gold mb-2 capitalize">
                      {selectedImage.category}
                    </h3>
                    <p className="text-luxury-white/90 leading-relaxed">
                      {selectedImage.alt_text}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
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
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-white transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openImageModal(photo)}
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

        {/* Image Modal for Gallery Page */}
        <Dialog open={!!selectedImage} onOpenChange={closeImageModal}>
          <DialogContent className="max-w-4xl max-h-[90vh] p-0 bg-luxury-black/95 border-luxury-gold/30">
            <DialogTitle className="sr-only">
              {selectedImage?.alt_text || 'Gallery Image'}
            </DialogTitle>
            <div className="relative">
              <button
                onClick={closeImageModal}
                className="absolute top-4 right-4 z-10 bg-luxury-gold/20 hover:bg-luxury-gold/40 text-white p-2 rounded-full transition-all duration-300"
              >
                <X size={20} />
              </button>
              {selectedImage && (
                <div className="flex flex-col">
                  <div className="relative">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt_text}
                      className="w-full h-auto max-h-[70vh] object-contain rounded-t-lg"
                    />
                  </div>
                  <div className="p-6 bg-gradient-to-r from-luxury-black to-luxury-black/80">
                    <h3 className="text-xl font-bold text-luxury-gold mb-2 capitalize">
                      {selectedImage.category}
                    </h3>
                    <p className="text-luxury-white/90 leading-relaxed">
                      {selectedImage.alt_text}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Dialog>
      </div>
    </section>
  );
};

export default PortfolioGallery;
