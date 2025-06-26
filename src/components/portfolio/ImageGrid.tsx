
import { ZoomIn } from 'lucide-react';

interface Photo {
  id: string;
  src: string;
  alt_text: string;
  category: string;
}

interface ImageGridProps {
  photos: Photo[];
  onImageClick: (photo: Photo) => void;
  isHomepage?: boolean;
}

const ImageGrid = ({ photos, onImageClick, isHomepage = false }: ImageGridProps) => {
  return (
    <div className="max-w-7xl mx-auto mb-20">
      {isHomepage && (
        <div className="text-center mb-16">
          <h3 className="text-4xl sm:text-5xl font-playfair font-bold text-luxury-black mb-6">
            Featured <span className="text-luxury-gold">Portfolio</span>
          </h3>
          <p className="text-xl text-luxury-black/70 max-w-3xl mx-auto">
            A curated selection of our finest work in VIP protocol and event management
          </p>
        </div>
      )}
      
      <div className={`grid ${isHomepage ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'} gap-8`}>
        {photos.map((photo, index) => (
          <div
            key={photo.id}
            className={`group relative overflow-hidden ${isHomepage ? 'rounded-3xl shadow-2xl hover:shadow-3xl' : 'rounded-2xl shadow-xl hover:shadow-2xl'} transition-all duration-700 transform ${isHomepage ? 'hover:-translate-y-6' : 'hover:-translate-y-3'} cursor-pointer bg-white border ${isHomepage ? 'border-luxury-gold/20 hover:border-luxury-gold/60' : 'border-2 border-luxury-gold/20 hover:border-luxury-gold'}`}
            onClick={() => onImageClick(photo)}
            style={{ animationDelay: `${index * (isHomepage ? 150 : 50)}ms` }}
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img
                src={photo.src}
                alt={photo.alt_text}
                className={`w-full h-full object-cover ${isHomepage ? 'group-hover:scale-110' : 'group-hover:scale-125'} transition-all duration-1000 ease-out`}
                loading="lazy"
              />
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-luxury-black/90 ${isHomepage ? 'via-luxury-black/20' : 'via-luxury-black/30'} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700`}></div>
              
              {/* Zoom Icon */}
              <div className={`absolute ${isHomepage ? 'top-6 right-6' : 'top-4 right-4'} bg-luxury-gold/95 text-luxury-black p-${isHomepage ? '3' : '2'} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100`}>
                <ZoomIn size={isHomepage ? 18 : 16} />
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
    </div>
  );
};

export default ImageGrid;
