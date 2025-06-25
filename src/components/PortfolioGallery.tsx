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

  // Updated photo data with your new uploaded images
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
    },
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
