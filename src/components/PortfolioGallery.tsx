
import { useState } from 'react';

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

  // Static photo data with the uploaded images
  const photos: Photo[] = [
    {
      id: '1',
      src: '/lovable-uploads/10c82e62-1255-46d1-bc7c-eaac26571dd0.png',
      alt_text: 'Protocol officers with distinguished guest in professional setting',
      category: 'government'
    },
    {
      id: '2', 
      src: '/lovable-uploads/cc5e796b-d6a3-4b75-9269-0d3919a8f16d.png',
      alt_text: 'Luxury event venue with elegant chandelier and formal dining setup',
      category: 'corporate'
    },
    {
      id: '3',
      src: '/lovable-uploads/c2fca5bf-fa16-4aaa-b7b9-b08a8cf584df.png',
      alt_text: 'VIP protocol service with professional team greeting distinguished guest',
      category: 'diplomatic'
    },
    {
      id: '4',
      src: '/lovable-uploads/bae22750-f71e-41f0-a5c7-2f6be59700a1.png',
      alt_text: 'Elegant table setting with luxury dining arrangement and gold accents',
      category: 'private'
    },
    {
      id: '5',
      src: '/lovable-uploads/eb29c827-3393-42f6-83bc-bf998935ba5d.png',
      alt_text: 'Wedding ceremony with professional hosts and microphone setup',
      category: 'wedding'
    },
    {
      id: '6',
      src: '/lovable-uploads/34c98434-5ae9-4d0c-b834-b055ea974ecf.png',
      alt_text: 'Traditional wedding party in orange attire with cultural ceremony elements',
      category: 'wedding'
    }
  ];

  const categories = ['all', 'corporate', 'diplomatic', 'wedding', 'government', 'private'];

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  // If it's homepage, don't show any gallery - only hero section shows photos
  if (isHomepage) {
    return null;
  }

  return (
    <section className="py-20 bg-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-luxury-gold text-luxury-black'
                  : 'bg-luxury-black/10 text-luxury-black hover:bg-luxury-gold/20'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <img
                src={photo.src}
                alt={photo.alt_text}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6 text-white">
                  <p className="text-sm font-medium">{photo.alt_text}</p>
                  <p className="text-xs text-white/80 mt-1 capitalize">{photo.category}</p>
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
