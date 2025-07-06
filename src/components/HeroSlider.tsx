
import { useState, useEffect } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Photos from the gallery that will look good as hero slides
  const heroPhotos = [
    {
      id: '1',
      src: '/lovable-uploads/aac3f7a9-ba36-4ed8-a16e-ace88dc00a86.png',
      title: 'Professional Protocol Consultation',
      description: 'Excellence in VIP protocol and event management services'
    },
    {
      id: '2',
      src: '/lovable-uploads/b9ba68f8-b176-49d5-a8ff-c9f8318086aa.png',
      title: 'Corporate Event Excellence',
      description: 'Sophisticated protocol services for distinguished corporate events'
    },
    {
      id: '3',
      src: '/lovable-uploads/a986df73-48b9-47e1-9217-a017116e525b.png',
      title: 'VIP Protocol Team',
      description: 'Professional team delivering unparalleled luxury protocol services'
    },
    {
      id: '4',
      src: '/lovable-uploads/106281aa-04c2-4533-92e5-e1044566520f.png',
      title: 'Luxury Reception Services',
      description: 'Creating extraordinary experiences with precision and elegance'
    },
    {
      id: '5',
      src: '/lovable-uploads/f0a0780f-b1f0-4d8a-b394-db906dc05116.png',
      title: 'Ceremonial Protocol',
      description: 'Masterful execution of high-profile ceremonial events'
    }
  ];

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % heroPhotos.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, heroPhotos.length]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Sliding Images */}
      <div className="absolute inset-0">
        {heroPhotos.map((photo, index) => (
          <div
            key={photo.id}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentSlide 
                ? 'opacity-100 scale-100' 
                : 'opacity-0 scale-110'
            }`}
          >
            <img
              src={photo.src}
              alt={photo.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/80 via-luxury-black/60 to-luxury-black/40"></div>
          </div>
        ))}
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo */}
          <div className="mb-8 animate-fade-in">
            <img 
              src="/lovable-uploads/128c46de-f529-4c6d-9c43-0e87592a70ba.png" 
              alt="Sir Ole VVIP Protocol Ltd" 
              className="h-20 sm:h-24 lg:h-28 mx-auto drop-shadow-2xl"
            />
          </div>

          {/* Dynamic Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold text-luxury-white mb-6">
              {heroPhotos[currentSlide].title}
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-luxury-gold mb-8 font-light">
              {heroPhotos[currentSlide].description}
            </p>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up animation-delay-600">
            <button className="group bg-gradient-luxury hover:opacity-90 text-luxury-white px-8 py-4 rounded-full text-lg font-semibold shadow-2xl hover:shadow-luxury-gold/20 transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
              Book Consultation
            </button>
            
            <button className="group border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black px-8 py-4 rounded-full text-lg font-semibold shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-3">
              Our Services
            </button>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {heroPhotos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-luxury-gold scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
