import { useState } from 'react';
import ImageGrid from './portfolio/ImageGrid';
import ImageModal from './portfolio/ImageModal';
import PortfolioHeader from './portfolio/PortfolioHeader';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

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

  // Static photos for homepage - EXACTLY 4 photos
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
    }
  ];

  // All photos for gallery page - excluding the 4 newly uploaded photos
  const allPhotos: Photo[] = [
    ...homepagePhotos,
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
    },
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
      <section className="py-24 bg-gradient-to-br from-luxury-white via-luxury-gold/5 to-luxury-white relative overflow-hidden">
        {/* Professional Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-luxury-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-luxury-gold/8 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h3 className="text-4xl sm:text-5xl font-playfair font-bold text-luxury-black mb-6">
              Featured <span className="text-luxury-gold">Portfolio</span>
            </h3>
            <p className="text-xl text-luxury-black/70 max-w-3xl mx-auto">
              A curated selection of our finest work in VIP protocol and event management
            </p>
          </div>
          
          {/* Gallery Grid - SINGLE ROW */}
          <div className="flex flex-wrap justify-center gap-8 mb-16">
            {homepagePhotos.map((photo, index) => (
              <div
                key={photo.id}
                className="group relative overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-6 cursor-pointer bg-white border border-luxury-gold/20 hover:border-luxury-gold/60 w-72"
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
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/90 via-luxury-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                  
                  {/* Zoom Icon */}
                  <div className="absolute top-6 right-6 bg-luxury-gold/95 text-luxury-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>

                  {/* Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-all duration-700 transform translate-y-8 group-hover:translate-y-0">
                    <p className="text-white text-base font-medium leading-relaxed line-clamp-2">
                      {photo.alt_text}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Prominent View Full Gallery Button */}
          <div className="text-center">
            <Link to="/gallery">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold hover:from-luxury-gold-dark hover:via-luxury-gold hover:to-luxury-gold-dark text-luxury-black font-bold px-16 py-8 text-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl group rounded-full border-2 border-luxury-gold-dark/40 shadow-xl"
              >
                View Full Gallery
                <ArrowRight className="ml-4 group-hover:translate-x-2 transition-transform duration-300" size={28} />
              </Button>
            </Link>
          </div>
        </div>

        <ImageModal
          selectedImage={selectedImage}
          currentImageIndex={currentImageIndex}
          totalImages={homepagePhotos.length}
          isHomepage={true}
          onClose={closeImageModal}
          onNavigate={navigateImage}
        />
      </section>
    );
  }

  // Gallery page layout - show all photos
  return (
    <section className="py-24 bg-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ImageGrid photos={allPhotos} onImageClick={openImageModal} />
        <ImageModal
          selectedImage={selectedImage}
          currentImageIndex={currentImageIndex}
          totalImages={allPhotos.length}
          onClose={closeImageModal}
          onNavigate={navigateImage}
        />
      </div>
    </section>
  );
};

export default PortfolioGallery;
