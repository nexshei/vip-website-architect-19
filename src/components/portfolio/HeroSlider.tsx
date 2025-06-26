
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, Tag, Calendar } from 'lucide-react';

interface Photo {
  id: string;
  src: string;
  alt_text: string;
  category: string;
}

interface HeroSliderProps {
  photos: Photo[];
  onImageClick: (photo: Photo) => void;
}

const HeroSlider = ({ photos, onImageClick }: HeroSliderProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % photos.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, photos.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="mb-32 max-w-7xl mx-auto">
      <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-3xl border-4 border-luxury-gold/30">
        {/* Sliding Images */}
        <div className="relative w-full h-full">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out cursor-pointer ${
                index === currentSlide 
                  ? 'opacity-100 scale-100' 
                  : 'opacity-0 scale-110'
              }`}
              onClick={() => onImageClick(photo)}
            >
              <img
                src={photo.src}
                alt={photo.alt_text}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent"></div>
              
              {/* Slide Content */}
              <div className="absolute bottom-0 left-0 right-0 p-12 text-white">
                <div className="max-w-4xl">
                  <div className="flex items-center space-x-3 text-luxury-gold text-lg mb-6">
                    <Tag size={18} />
                    <span className="font-bold uppercase tracking-widest">{photo.category}</span>
                  </div>
                  <h3 className="text-4xl sm:text-5xl font-playfair font-bold mb-6 leading-tight">
                    {photo.alt_text}
                  </h3>
                  <div className="flex items-center text-luxury-gold/90 text-lg font-medium">
                    <Calendar size={18} className="mr-3" />
                    <span>Professional Excellence in VIP Protocol</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 bg-luxury-gold/30 hover:bg-luxury-gold/50 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 z-10"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 bg-luxury-gold/30 hover:bg-luxury-gold/50 text-white p-4 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 z-10"
        >
          <ChevronRight size={28} />
        </button>

        {/* Auto-play Control */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="absolute top-8 right-8 bg-luxury-gold/30 hover:bg-luxury-gold/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm hover:scale-110 z-10"
        >
          {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-10">
          {photos.map((_, index) => (
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
      </div>
    </div>
  );
};

export default HeroSlider;
