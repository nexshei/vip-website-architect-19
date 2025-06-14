
import { useState, useEffect } from 'react';

export const usePageLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Clear various caches
    const clearCaches = async () => {
      try {
        // Clear service worker caches if available
        if ('caches' in window) {
          const cacheNames = await caches.keys();
          await Promise.all(
            cacheNames.map(cacheName => caches.delete(cacheName))
          );
        }
      } catch (error) {
        console.log('Cache clearing not available:', error);
      }
    };

    // Simulate minimum loading time for better UX
    const minLoadTime = new Promise(resolve => setTimeout(resolve, 1500));
    
    // Wait for page to be fully loaded
    const pageLoadTime = new Promise(resolve => {
      if (document.readyState === 'complete') {
        resolve(null);
      } else {
        window.addEventListener('load', () => resolve(null));
      }
    });

    // Clear caches and wait for loading
    Promise.all([clearCaches(), minLoadTime, pageLoadTime]).then(() => {
      setIsLoading(false);
    });

    return () => {
      window.removeEventListener('load', () => {});
    };
  }, []);

  return { isLoading };
};
