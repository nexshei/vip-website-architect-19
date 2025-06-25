
import SEO from '../components/SEO';
import PortfolioGallery from '../components/PortfolioGallery';

const Gallery = () => {
  const gallerySchemaData = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "name": "Sir Ole VVIP Protocol Event Gallery",
    "description": "Showcasing our excellence in VIP protocol services, corporate events, diplomatic ceremonies, and luxury hospitality across Nairobi",
    "publisher": {
      "@type": "Organization",
      "name": "Sir Ole VVIP Protocol Ltd"
    }
  };

  return (
    <>
      <SEO
        title="Event Gallery | VIP Protocol & Luxury Events Portfolio - Sir Ole VVIP"
        description="Explore our stunning gallery showcasing VIP protocol services, corporate events, diplomatic ceremonies, and luxury hospitality events in Nairobi. View our professional event portfolio."
        keywords="VIP event gallery, protocol services portfolio, corporate event photos, diplomatic ceremony images, luxury event photography, Nairobi event management gallery"
        url="https://sirolevvipprotocol.com/gallery"
        schemaData={gallerySchemaData}
      />
      <div className="pt-20">
        <header className="bg-gradient-luxury py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl sm:text-6xl font-playfair font-bold text-luxury-white mb-6">
              Event <span className="text-luxury-gold">Gallery</span>
            </h1>
            <p className="text-xl text-luxury-white/90 max-w-3xl mx-auto">
              Discover the artistry and excellence behind our VIP protocol and event management services
            </p>
          </div>
        </header>
        <PortfolioGallery />
      </div>
    </>
  );
};

export default Gallery;
