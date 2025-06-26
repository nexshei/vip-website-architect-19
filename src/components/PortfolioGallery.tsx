
import { useState } from 'react';
import HeroSlider from './portfolio/HeroSlider';
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

  // Static photos for homepage - only 4 photos
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

  // All photos for gallery page
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
      <section className="py-32 bg-gradient-to-br from-luxury-white via-luxury-gold/5 to-luxury-white relative overflow-hidden">
        {/* Professional Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-luxury-gold/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-luxury-gold/8 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-luxury-gold/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <PortfolioHeader />
          <ImageGrid photos={homepagePhotos} onImageClick={openImageModal} isHomepage={true} />
          
          {/* View Gallery Button */}
          <div className="text-center mt-16">
            <Link to="/gallery">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold hover:from-luxury-gold-dark hover:via-luxury-gold hover:to-luxury-gold-dark text-luxury-black font-bold px-12 py-6 text-xl transition-all duration-500 hover:scale-110 hover:shadow-2xl group rounded-full border-2 border-luxury-gold-dark/40 shadow-xl"
              >
                View Gallery
                <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform duration-300" size={24} />
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
