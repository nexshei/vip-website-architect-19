
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-luxury-black flex items-center justify-center z-50">
      <div className="flex flex-col items-center space-y-4">
        {/* Gold spinning circle */}
        <div className="w-16 h-16 border-4 border-luxury-gold/30 border-t-luxury-gold rounded-full animate-spin"></div>
        
        {/* Loading text */}
        <div className="text-luxury-gold font-playfair text-xl">
          Loading Excellence...
        </div>
        
        {/* Progress dots */}
        <div className="flex space-x-2">
          <div className="w-2 h-2 bg-luxury-gold rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-luxury-gold rounded-full animate-pulse delay-100"></div>
          <div className="w-2 h-2 bg-luxury-gold rounded-full animate-pulse delay-200"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
