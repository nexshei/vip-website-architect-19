
import { ZoomIn, Tag, Calendar } from 'lucide-react';

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
              <div className={`absolute inset-0 bg-gradient-to-t from-luxury-black/90 ${isHomepage ? 'via-luxury-black/20' : 'via-luxury-black/30'} to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 ${isHomepage ? '' : 'flex items-end'}`}></div>
              
              {/* Zoom Icon */}
              <div className={`absolute ${isHomepage ? 'top-6 right-6' : 'top-4 right-4'} bg-luxury-gold/95 text-luxury-black p-${isHomepage ? '3' : '2'} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100`}>
                <ZoomIn size={isHomepage ? 18 : 16} />
              </div>

              {/* Content Overlay */}
              {isHomepage ? (
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
              ) : (
                <div className="p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700">
                  <div className="flex items-center space-x-2 text-luxury-gold text-xs mb-2">
                    <Tag size={12} />
                    <span className="font-bold uppercase tracking-wider">{photo.category}</span>
                  </div>
                  <p className="text-sm font-medium leading-relaxed">{photo.alt_text}</p>
                </div>
              )}
            </div>
            
            {/* Category Badge */}
            <div className={`absolute ${isHomepage ? 'top-6 left-6' : 'top-4 left-4'} bg-gradient-to-r from-luxury-gold to-luxury-gold-light text-luxury-black text-sm font-bold px-4 py-2 rounded-full backdrop-blur-sm border border-white/40 shadow-xl transform group-hover:scale-110 transition-all duration-300`}>
              {photo.category.charAt(0).toUpperCase() + photo.category.slice(1)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
