
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ArrowRight, ChevronLeft, ChevronRight, X, ZoomIn, Calendar, Tag, Eye, Play, Pause } from 'lucide-react';

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
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Static photos for homepage - only 8 photos
  const homepagePhotos: Photo[] = [
    {
      id: '1',
      src: '/lovable-uploads/aac3f7a9-ba36-4ed8-a16e-ace88dc00a86.png',
      alt_text: 'Professional consultation meeting with protocol officers reviewing event plans',
      category: 'corporate'
    },
    {
      id: '2',
      src: '/lovable-uploads/b9ba68f8-b176-49d5-a8ff-c9f8318086aa.png',
      alt_text: 'Professional protocol team in navy suits at corporate health event',
      category: 'corporate'
    },
    {
      id: '3',
      src: '/lovable-uploads/a986df73-48b9-47e1-9217-a017116e525b.png',
      alt_text: 'Distinguished VIP protocol team at health junction corporate event',
      category: 'corporate'
    },
    {
      id: '4',
      src: '/lovable-uploads/106281aa-04c2-4533-92e5-e1044566520f.png',
      alt_text: 'VIP protocol officers with guests at luxury corporate reception',
      category: 'private'
    },
    {
      id: '5',
      src: '/lovable-uploads/b7c270ed-d140-46b1-adc8-3123807ffd1a.png',
      alt_text: 'Professional team in traditional orange attire for cultural ceremony',
      category: 'cultural'
    },
    {
      id: '6',
      src: '/lovable-uploads/9adfbdd8-7ff7-41c3-8228-65e5803640f3.png',
      alt_text: 'Elegant bridal party in matching orange gowns for traditional wedding ceremony',
      category: 'wedding'
    },
    {
      id: '7',
      src: '/lovable-uploads/016009e8-2075-462b-bfa8-f2fe1a37581c.png',
      alt_text: 'Professional protocol officers at corporate registration desk',
      category: 'corporate'
    },
    {
      id: '8',
      src: '/lovable-uploads/2417aefe-5fed-43f0-b77b-4c8ee078ddcb.png',
      alt_text: 'VIP protocol team with distinguished guests at welcome reception',
      category: 'diplomatic'
    }
  ];

  // All photos for gallery page
  const allPhotos: Photo[] = [
    ...homepagePhotos,
    {
      id: '9',
      src: '/lovable-uploads/b69edc0b-0e29-4f2d-ab0d-abd974ef5133.png',
      alt_text: 'Professional protocol team with security personnel at VIP event',
      category: 'government'
    },
    {
      id: '10',
      src: '/lovable-uploads/c8c41d47-43d1-4ff8-9931-38d6933001fb.png',
      alt_text: 'Cultural protocol team in traditional African attire for special ceremony',
      category: 'cultural'
    },
    {
      id: '11',
      src: '/lovable-uploads/f0a0780f-b1f0-4d8a-b394-db906dc05116.png',
      alt_text: 'Professional VIP protocol officers conducting ceremonial presentation at luxury event',
      category: 'corporate'
    },
    {
      id: '12',
      src: '/lovable-uploads/9ec281e9-4c07-4198-89a1-573dbc8e61de.png',
      alt_text: 'Elegant protocol team in white and gold uniforms with luxury throne setup',
      category: 'private'
    }
  ];

  const displayPhotos = isHomepage ? homepagePhotos : allPhotos;

  // Auto-slide functionality for hero section
  useEffect(() => {
    if (isHomepage && isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % homepagePhotos.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isHomepage, isAutoPlay, homepagePhotos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % homepagePhotos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + homepagePhotos.length) % homepagePhotos.length);
  };

  const openImageModal = (photo: Photo) => {
    setSelectedImage(photo);
    setCurrentImageIndex(displayPhotos.findIndex(p => p.id === photo.id));
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % displayPhotos.length;
    } else {
      newIndex = (currentImageIndex - 1 + displayPhotos.length) % displayPhotos.length;
    }
    setCurrentImageIndex(newIndex);
    setSelectedImage(displayPhotos[newIndex]);
  };

  if (isHomepage) {
    return (
      <section className="py-32 bg-gradient-to-br from-luxury-white via-luxury-gold/5 to-luxury-white relative overflow-hidden">
        {/* Professional Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-luxury-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-luxury-gold/8 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Premium Section Header */}
          <div className="text-center mb-24">
            <div className="inline-block mb-6">
              <span className="inline-flex items-center px-6 py-3 rounded-full bg-luxury-gold/20 text-luxury-gold font-bold text-sm tracking-widest uppercase border border-luxury-gold/30">
                <Eye className="mr-2" size={16} />
                Portfolio Showcase
              </span>
            </div>
            <h2 className="text-6xl sm:text-7xl lg:text-8xl font-playfair font-bold text-luxury-black mb-10 leading-tight">
              Excellence in <span className="bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold bg-clip-text text-transparent">Motion</span>
            </h2>
            <div className="flex items-center justify-center mb-8">
              <div className="h-px bg-luxury-gold/30 w-24"></div>
              <div className="mx-4 w-3 h-3 bg-luxury-gold rounded-full"></div>
              <div className="h-px bg-luxury-gold/30 w-24"></div>
            </div>
            <p className="text-2xl sm:text-3xl text-luxury-black/70 max-w-5xl mx-auto leading-relaxed font-light">
              Witness the artistry of VIP protocol service through our curated collection of distinguished events
            </p>
          </div>

          {/* Hero Sliding Section */}
          <div className="mb-32 max-w-7xl mx-auto">
            <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-3xl border-4 border-luxury-gold/30">
              {/* Sliding Images */}
              <div className="relative w-full h-full">
                {homepagePhotos.map((photo, index) => (
                  <div
                    key={photo.id}
                    className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                      index === currentSlide 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-110'
                    }`}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt_text}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent"></div>
                    
                    {/* Slide Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                      <div className="max-w-4xl">
                        <div className="flex items-center space-x-3 text-luxury-gold text-lg mb-6">
                          <Tag size={18} />
                          <span className="font-bold uppercase tracking-widest">{photo.category}</span>
                        </div>
                        <h3 className="text-4xl sm:text-5xl font-playfair font-bold mb-6 leading-tight">
                          {photo.alt_text}
                        </h3>
                        <div className="flex items-center text-luxury-gold/90 text-lg font-medium">
                          <Calendar size={18} className="mr-3" />
                          <span>Professional Excellence in VIP Protocol</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Controls */}
              <button
                onClick={prevSlide}
                className="absolute left-8 top-1/2 -translate-y-1/2 bg-luxury-gold/30 hover:bg-luxury-gold/50 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 z-10"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-8 top-1/2 -translate-y-1/2 bg-luxury-gold/30 hover:bg-luxury-gold/50 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 z-10"
              >
                <ChevronRight size={28} />
              </button>

              {/* Auto-play Control */}
              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="absolute top-8 right-8 bg-luxury-gold/30 hover:bg-luxury-gold/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 z-10"
              >
                {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
              </button>

              {/* Slide Indicators */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
                {homepagePhotos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-luxury-gold scale-125' 
                        : 'bg-white/50 hover:bg-white/80'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Professional Image Grid - Only 8 photos */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="text-center mb-16">
              <h3 className="text-4xl sm:text-5xl font-playfair font-bold text-luxury-black mb-6">
                Featured <span className="text-luxury-gold">Portfolio</span>
              </h3>
              <p className="text-xl text-luxury-black/70 max-w-3xl mx-auto">
                A curated selection of our finest work in VIP protocol and event management
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {homepagePhotos.map((photo, index) => (
                <div
                  key={photo.id}
                  className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-6 cursor-pointer bg-white border border-luxury-gold/20 hover:border-luxury-gold/60"
                  onClick={() => openImageModal(photo)}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={photo.src}
                      alt={photo.alt_text}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-out"
                      loading="lazy"
                    />
                    
                    {/* Professional Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                    
                    {/* Premium Icons */}
                    <div className="absolute top-6 right-6 bg-luxury-gold/95 text-luxury-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                      <ZoomIn size={18} />
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3 text-luxury-gold text-sm">
                          <Tag size={14} />
                          <span className="font-bold uppercase tracking-wider">{photo.category}</span>
                        </div>
                        <p className="text-white text-base font-medium leading-relaxed line-clamp-2">
                          {photo.alt_text}
                        </p>
                        <div className="flex items-center text-luxury-gold/90 text-sm font-medium">
                          <Calendar size={14} className="mr-2" />
                          <span>Professional Event</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-luxury-gold to-luxury-gold-light text-luxury-black text-sm font-bold px-4 py-2 rounded-full backdrop-blur-sm border border-white/40 shadow-xl transform group-hover:scale-110 transition-all duration-300">
                    {photo.category.charAt(0).toUpperCase() + photo.category.slice(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-white via-luxury-gold/10 to-white rounded-3xl p-16 backdrop-blur-sm border-2 border-luxury-gold/30 shadow-3xl relative overflow-hidden max-w-5xl mx-auto">
              {/* CTA Background Effects */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-luxury-gold/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-luxury-gold/15 rounded-full blur-2xl"></div>
              
              <div className="relative z-10">
                <div className="mb-8">
                  <span className="inline-flex items-center px-6 py-3 rounded-full bg-luxury-gold/20 text-luxury-gold font-bold text-sm tracking-widest uppercase border border-luxury-gold/30 mb-6">
                    <Eye className="mr-2" size={16} />
                    View Complete Portfolio
                  </span>
                </div>
                <h3 className="text-5xl sm:text-6xl font-playfair font-bold text-luxury-black mb-8 leading-tight">
                  Explore Our Complete <span className="bg-gradient-to-r from-luxury-gold to-luxury-gold-light bg-clip-text text-transparent">Gallery</span>
                </h3>
                <p className="text-luxury-black/70 mb-12 max-w-3xl mx-auto text-2xl leading-relaxed">
                  Discover our extensive collection showcasing years of excellence in VIP protocol services across diverse events and distinguished clientele
                </p>
                <Link to="/gallery">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold hover:from-luxury-gold-dark hover:via-luxury-gold hover:to-luxury-gold-dark text-luxury-black font-bold px-16 py-8 text-2xl transition-all duration-500 hover:scale-110 hover:shadow-3xl group rounded-full border-2 border-luxury-gold-dark/40 shadow-2xl"
                  >
                    View All Photos
                    <ArrowRight className="ml-4 group-hover:translate-x-3 transition-transform duration-500 group-hover:animate-pulse" size={28} />
                  </Button>
                </Link>
                <p className="text-luxury-black/50 text-lg mt-6 font-medium">
                  Professional Portfolio • Premium Events
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={closeImageModal}>
          <DialogContent className="max-w-7xl max-h-[95vh] p-0 bg-luxury-black/98 border-luxury-gold/50 border-2 shadow-3xl rounded-2xl">
            <DialogTitle className="sr-only">
              {selectedImage?.alt_text || 'Gallery Image'}
            </DialogTitle>
            <div className="relative">
              {/* Modal Navigation */}
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-luxury-gold/30 hover:bg-luxury-gold/50 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
              >
                <ChevronLeft size={28} />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-luxury-gold/30 hover:bg-luxury-gold/50 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
              >
                <ChevronRight size={28} />
              </button>
              <button
                onClick={closeImageModal}
                className="absolute top-8 right-8 z-20 bg-luxury-gold/30 hover:bg-luxury-gold/50 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110"
              >
                <X size={28} />
              </button>
              
              {selectedImage && (
                <div className="flex flex-col">
                  <div className="relative">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt_text}
                      className="w-full h-auto max-h-[75vh] object-contain rounded-t-2xl"
                    />
                    <div className="absolute bottom-6 left-6 bg-luxury-gold/95 text-luxury-black px-6 py-3 rounded-full text-lg font-bold">
                      {currentImageIndex + 1} of {homepagePhotos.length}
                    </div>
                  </div>
                  <div className="p-10 bg-gradient-to-r from-luxury-black to-luxury-black/95 rounded-b-2xl">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-3xl font-bold text-luxury-gold capitalize flex items-center">
                        <Tag className="mr-3" size={24} />
                        {selectedImage.category}
                      </h3>
                      <div className="flex items-center text-luxury-gold/80 text-lg">
                        <Calendar size={18} className="mr-2" />
                        Professional Event
                      </div>
                    </div>
                    <p className="text-luxury-white/90 leading-relaxed text-xl">
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

  // Gallery page layout - no category filters, just show all photos
  return (
    <section className="py-24 bg-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {allPhotos.map((photo, index) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-700 bg-white transform hover:-translate-y-3 cursor-pointer border-2 border-luxury-gold/20 hover:border-luxury-gold"
              onClick={() => openImageModal(photo)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img
                  src={photo.src}
                  alt={photo.alt_text}
                  className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-1000"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-end">
                  <div className="p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                    <div className="flex items-center space-x-2 text-luxury-gold text-xs mb-2">
                      <Tag size={12} />
                      <span className="font-bold uppercase tracking-wider">{photo.category}</span>
                    </div>
                    <p className="text-sm font-medium leading-relaxed">{photo.alt_text}</p>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-luxury-gold/90 text-luxury-black p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                  <ZoomIn size={16} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Image Modal for Gallery Page */}
        <Dialog open={!!selectedImage} onOpenChange={closeImageModal}>
          <DialogContent className="max-w-6xl max-h-[95vh] p-0 bg-luxury-black/98 border-luxury-gold/50 border-2">
            <DialogTitle className="sr-only">
              {selectedImage?.alt_text || 'Gallery Image'}
            </DialogTitle>
            <div className="relative">
              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-luxury-gold/20 hover:bg-luxury-gold/40 text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-luxury-gold/20 hover:bg-luxury-gold/40 text-white p-3 rounded-full transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
              <button
                onClick={closeImageModal}
                className="absolute top-6 right-6 z-20 bg-luxury-gold/20 hover:bg-luxury-gold/40 text-white p-3 rounded-full transition-all duration-300"
              >
                <X size={24} />
              </button>
              
              {selectedImage && (
                <div className="flex flex-col">
                  <div className="relative">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt_text}
                      className="w-full h-auto max-h-[75vh] object-contain rounded-t-lg"
                    />
                    <div className="absolute bottom-4 left-4 bg-luxury-gold/90 text-luxury-black px-4 py-2 rounded-full text-sm font-bold">
                      {currentImageIndex + 1} of {allPhotos.length}
                    </div>
                  </div>
                  <div className="p-8 bg-gradient-to-r from-luxury-black to-luxury-black/90">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-luxury-gold capitalize flex items-center">
                        <Tag className="mr-2" size={20} />
                        {selectedImage.category}
                      </h3>
                      <div className="flex items-center text-luxury-gold/80 text-sm">
                        <Calendar size={16} className="mr-2" />
                        Professional Event
                      </div>
                    </div>
                    <p className="text-luxury-white/90 leading-relaxed text-lg">
                      {selectedImage.alt_text}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default PortfolioGallery;
