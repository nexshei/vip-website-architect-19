
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

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
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);

  const categories = ['all', 'corporate', 'diplomatic', 'wedding', 'government', 'private'];

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_photos')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      setPhotos(data || []);
    } catch (error) {
      console.error('Error fetching photos:', error);
      // Fallback to default photos if database is empty
      setPhotos([
        {
          id: '1',
          src: '/lovable-uploads/1c51a4d7-6e98-495a-b619-d798e08c8b19.png',
          alt_text: 'Corporate event management',
          category: 'corporate'
        },
        {
          id: '2',
          src: '/lovable-uploads/2259eca1-3ecc-488d-815f-6fd0e5318d30.png',
          alt_text: 'Diplomatic protocol service',
          category: 'diplomatic'
        },
        {
          id: '3',
          src: '/lovable-uploads/23d3c715-3441-4a3f-a717-6a466c149137.png',
          alt_text: 'Wedding ceremony coordination',
          category: 'wedding'
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  const displayPhotos = isHomepage ? filteredPhotos.slice(0, 6) : filteredPhotos;

  if (isLoading) {
    return (
      <section className="py-20 bg-luxury-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-luxury-black">Loading gallery...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {!isHomepage && (
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
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayPhotos.map((photo) => (
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
                </div>
              </div>
            </div>
          ))}
        </div>

        {isHomepage && (
          <div className="text-center mt-12">
            <a
              href="/gallery"
              className="inline-block bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold px-8 py-3 rounded-lg transition-all duration-300"
            >
              View Full Gallery
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGallery;
