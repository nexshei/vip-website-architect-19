
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ArrowRight, ChevronLeft, ChevronRight, X, ZoomIn, Calendar, Tag, Eye } from 'lucide-react';

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredPhotos, setFilteredPhotos] = useState<Photo[]>([]);

  // All photos - showing 8 on homepage, all on gallery page
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
    // Additional photos for gallery page only
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
    },
    // New photos from uploads
    {
      id: '17',
      src: '/lovable-uploads/f0a0780f-b1f0-4d8a-b394-db906dc05116.png',
      alt_text: 'Professional VIP protocol officers conducting ceremonial presentation at luxury event',
      category: 'corporate'
    },
    {
      id: '18',
      src: '/lovable-uploads/9ec281e9-4c07-4198-89a1-573dbc8e61de.png',
      alt_text: 'Elegant protocol team in white and gold uniforms with luxury throne setup',
      category: 'private'
    },
    {
      id: '19',
      src: '/lovable-uploads/ccf892db-d8ea-4189-ae45-50344ced9a88.png',
      alt_text: 'VIP protocol team with client in white attire at birthday celebration event',
      category: 'private'
    },
    {
      id: '20',
      src: '/lovable-uploads/c7d19e2e-f161-4be2-a50d-1c6a85320e6b.png',
      alt_text: 'Professional wedding protocol team accompanying bride and groom in elegant ceremony',
      category: 'wedding'
    },
    {
      id: '21',
      src: '/lovable-uploads/432f85c5-49c0-4dd6-81f9-8d6d6fbf2bbe.png',
      alt_text: 'VIP protocol officers leading red carpet entrance at premium event venue',
      category: 'corporate'
    },
    {
      id: '22',
      src: '/lovable-uploads/ddf4396c-ee99-4aef-be02-86b8d78d6d86.png',
      alt_text: 'Protocol team presenting award recognition at distinguished corporate ceremony',
      category: 'corporate'
    },
    {
      id: '23',
      src: '/lovable-uploads/bbbd1877-da98-4cfc-be25-35dc5bd41a96.png',
      alt_text: 'Professional protocol officers with ceremonial presentations at special event',
      category: 'corporate'
    },
    {
      id: '24',
      src: '/lovable-uploads/307ff290-d4b5-4d20-9cd2-1784dc0e3bf9.png',
      alt_text: 'VIP protocol team with government officials at formal red carpet ceremony',
      category: 'government'
    },
    {
      id: '25',
      src: '/lovable-uploads/e6684cf4-f8ff-4d1a-bd1e-961f57426619.png',
      alt_text: 'Professional protocol team in black and gold attire at corporate gathering',
      category: 'corporate'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Events', count: photos.length },
    { id: 'corporate', name: 'Corporate', count: photos.filter(p => p.category === 'corporate').length },
    { id: 'diplomatic', name: 'Diplomatic', count: photos.filter(p => p.category === 'diplomatic').length },
    { id: 'wedding', name: 'Weddings', count: photos.filter(p => p.category === 'wedding').length },
    { id: 'government', name: 'Government', count: photos.filter(p => p.category === 'government').length },
    { id: 'private', name: 'Private Events', count: photos.filter(p => p.category === 'private').length },
    { id: 'cultural', name: 'Cultural', count: photos.filter(p => p.category === 'cultural').length }
  ];

  // Filter photos with smooth transition
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      const filtered = selectedCategory === 'all' 
        ? photos 
        : photos.filter(photo => photo.category === selectedCategory);
      setFilteredPhotos(filtered);
      setIsLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  // For homepage: show only first 8 photos
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
    const displayPhotos = isHomepage ? homepagePhotos : filteredPhotos;
    setCurrentImageIndex(displayPhotos.findIndex(p => p.id === photo.id));
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const displayPhotos = isHomepage ? homepagePhotos : filteredPhotos;
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

          {/* Professional Image Grid */}
          <div className="max-w-7xl mx-auto mb-20">
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
                  {photos.length} Professional Events • Premium Portfolio
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

  // Gallery page layout with all photos including new ones
  return (
    <section className="py-24 bg-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filter */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-luxury-black mb-8 text-center">Filter by Category</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`group relative px-8 py-4 rounded-full font-semibold transition-all duration-500 transform hover:scale-105 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-luxury-gold to-luxury-gold-light text-luxury-black shadow-xl scale-105 border-2 border-luxury-gold-dark'
                    : 'bg-luxury-black/10 text-luxury-black hover:bg-luxury-gold/20 hover:shadow-lg border-2 border-transparent hover:border-luxury-gold/30'
                }`}
              >
                <span className="relative z-10 flex items-center">
                  {category.name}
                  <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    selectedCategory === category.id 
                      ? 'bg-luxury-black/20 text-luxury-black' 
                      : 'bg-luxury-gold/20 text-luxury-gold'
                  }`}>
                    {category.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Grid with Loading State */}
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-4 border-luxury-gold border-t-transparent"></div>
            </div>
          )}
          
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 transition-all duration-500 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
            {filteredPhotos.map((photo, index) => (
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
                      {currentImageIndex + 1} of {filteredPhotos.length}
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
