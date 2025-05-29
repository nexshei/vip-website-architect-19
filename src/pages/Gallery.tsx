
import PortfolioGallery from '../components/PortfolioGallery';

const Gallery = () => {
  return (
    <div className="pt-20">
      <div className="bg-gradient-luxury py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-playfair font-bold text-luxury-white mb-6">
            Event <span className="text-luxury-gold">Gallery</span>
          </h1>
          <p className="text-xl text-luxury-white/90 max-w-3xl mx-auto">
            Discover the artistry and excellence behind our VIP protocol and event management services
          </p>
        </div>
      </div>
      <PortfolioGallery />
    </div>
  );
};

export default Gallery;
