import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, Home, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-luxury-white/95 backdrop-blur-md shadow-xl border-b border-luxury-gold/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img 
              src="/lovable-uploads/128c46de-f529-4c6d-9c43-0e87592a70ba.png" 
              alt="Sir Ole VVIP Protocol Ltd" 
              className="h-12 w-auto transform group-hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium transition-colors duration-300 hover:text-luxury-gold ${
                  isActive(item.path)
                    ? 'text-luxury-gold'
                    : isScrolled 
                      ? 'text-luxury-black' 
                      : 'text-luxury-white'
                } group`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gold transition-all duration-300 group-hover:w-full ${
                  isActive(item.path) ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/book-meeting"
              className="bg-gradient-luxury hover:opacity-90 text-luxury-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Book Meeting
            </Link>
            <Link 
              to="/book-items"
              className="border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black px-6 py-2 rounded-full text-sm font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Book Items
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-luxury-black' : 'text-luxury-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-luxury-black' : 'text-luxury-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-luxury-white/95 backdrop-blur-md shadow-xl border-t border-luxury-gold/20">
            <div className="py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`block px-6 py-3 text-luxury-black hover:text-luxury-gold hover:bg-luxury-gold/10 transition-colors duration-300 ${
                    isActive(item.path) ? 'text-luxury-gold bg-luxury-gold/10' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="px-6 py-3 space-y-3">
                <Link 
                  to="/book-meeting"
                  className="block w-full bg-gradient-luxury hover:opacity-90 text-luxury-white px-4 py-2 rounded-full text-sm font-semibold text-center shadow-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Meeting
                </Link>
                <Link 
                  to="/book-items"
                  className="block w-full border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-luxury-black px-4 py-2 rounded-full text-sm font-semibold text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Book Items
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
