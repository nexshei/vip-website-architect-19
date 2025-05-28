import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, Home } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/#services' },
    { name: 'About', path: '/#about' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('/#')) return location.pathname === '/' && location.hash === path.substring(1);
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/95 backdrop-blur-md border-b border-luxury-gold/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/128c46de-f529-4c6d-9c43-0e87592a70ba.png" 
              alt="Sir Ole VVIP Protocol Ltd" 
              className="h-12 w-auto"
            />
            <div className="hidden sm:block">
              <h1 className="text-luxury-gold font-playfair font-bold text-xl">Sir Ole</h1>
              <p className="text-luxury-white text-xs tracking-wider">VVIP PROTOCOL</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium transition-colors hover:text-luxury-gold ${
                  isActive(item.path) ? 'text-luxury-gold' : 'text-luxury-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/book-meeting">
              <Button className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold px-6 py-2 transition-all duration-300 hover:scale-105">
                Book Meeting
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-luxury-white hover:text-luxury-gold transition-colors"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-luxury-black-light border-t border-luxury-gold/20 py-4 animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 text-sm font-medium transition-colors hover:text-luxury-gold hover:bg-luxury-gold/10 ${
                  isActive(item.path) ? 'text-luxury-gold bg-luxury-gold/10' : 'text-luxury-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-4 pt-4 border-t border-luxury-gold/20 mt-4">
              <Link to="/book-meeting" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold">
                  Book Meeting
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
