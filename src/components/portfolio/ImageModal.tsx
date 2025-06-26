
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X, Tag, Calendar } from 'lucide-react';

interface Photo {
  id: string;
  src: string;
  alt_text: string;
  category: string;
}

interface ImageModalProps {
  selectedImage: Photo | null;
  currentImageIndex: number;
  totalImages: number;
  isHomepage?: boolean;
  onClose: () => void;
  onNavigate: (direction: 'prev' | 'next') => void;
}

const ImageModal = ({ 
  selectedImage, 
  currentImageIndex, 
  totalImages, 
  isHomepage = false,
  onClose, 
  onNavigate 
}: ImageModalProps) => {
  if (!selectedImage) return null;

  const buttonSize = isHomepage ? 28 : 24;
  const paddingClass = isHomepage ? 'p-4' : 'p-3';
  const topClass = isHomepage ? 'top-8' : 'top-6';
  const sideClass = isHomepage ? 'left-6 right-6' : 'left-4 right-4';

  return (
    <Dialog open={!!selectedImage} onOpenChange={onClose}>
      <DialogContent className={`${isHomepage ? 'max-w-7xl' : 'max-w-6xl'} max-h-[95vh] p-0 bg-luxury-black/98 border-luxury-gold/50 border-2 ${isHomepage ? 'shadow-3xl rounded-2xl' : ''}`}>
        <DialogTitle className="sr-only">
          {selectedImage.alt_text}
        </DialogTitle>
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => onNavigate('prev')}
            className={`absolute ${sideClass.split(' ')[0]} top-1/2 -translate-y-1/2 z-20 bg-luxury-gold/30 hover:bg-luxury-gold/50 text-white ${paddingClass} rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110`}
          >
            <ChevronLeft size={buttonSize} />
          </button>
          <button
            onClick={() => onNavigate('next')}
            className={`absolute ${sideClass.split(' ')[1]} top-1/2 -translate-y-1/2 z-20 bg-luxury-gold/30 hover:bg-luxury-gold/50 text-white ${paddingClass} rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110`}
          >
            <ChevronRight size={buttonSize} />
          </button>
          <button
            onClick={onClose}
            className={`absolute ${topClass} right-${isHomepage ? '8' : '6'} z-20 bg-luxury-gold/30 hover:bg-luxury-gold/50 text-white ${paddingClass} rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110`}
          >
            <X size={buttonSize} />
          </button>
          
          <div className="flex flex-col">
            <div className="relative">
              <img
                src={selectedImage.src}
                alt={selectedImage.alt_text}
                className={`w-full h-auto max-h-[75vh] object-contain ${isHomepage ? 'rounded-t-2xl' : 'rounded-t-lg'}`}
              />
              <div className={`absolute ${isHomepage ? 'bottom-6 left-6' : 'bottom-4 left-4'} bg-luxury-gold/95 text-luxury-black px-${isHomepage ? '6' : '4'} py-${isHomepage ? '3' : '2'} rounded-full text-${isHomepage ? 'lg' : 'sm'} font-bold`}>
                {currentImageIndex + 1} of {totalImages}
              </div>
            </div>
            <div className={`p-${isHomepage ? '10' : '8'} bg-gradient-to-r from-luxury-black to-luxury-black/${isHomepage ? '95' : '90'} ${isHomepage ? 'rounded-b-2xl' : ''}`}>
              <div className="flex items-center justify-between mb-${isHomepage ? '6' : '4'}">
                <h3 className={`text-${isHomepage ? '3xl' : '2xl'} font-bold text-luxury-gold capitalize flex items-center`}>
                  <Tag className="mr-${isHomepage ? '3' : '2'}" size={isHomepage ? 24 : 20} />
                  {selectedImage.category}
                </h3>
                <div className={`flex items-center text-luxury-gold/80 text-${isHomepage ? 'lg' : 'sm'}`}>
                  <Calendar size={isHomepage ? 18 : 16} className="mr-2" />
                  Professional Event
                </div>
              </div>
              <p className={`text-luxury-white/90 leading-relaxed text-${isHomepage ? 'xl' : 'lg'}`}>
                {selectedImage.alt_text}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageModal;
