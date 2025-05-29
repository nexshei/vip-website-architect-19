
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, Home, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/#services' },
    { name: 'About', path: '/#about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' }
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    if (path.startsWith('/#')) return location.pathname === '/' && location.hash === path.substring(1);
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-luxury-black/90 backdrop-blur-xl border-b border-luxury-gold/30 shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Enhanced Logo */}
          <Link to="/" className="flex items-center space-x-4 hover:opacity-90 transition-all duration-300 group">
            <div className="relative">
              <img 
                src="/lovable-uploads/128c46de-f529-4c6d-9c43-0e87592a70ba.png" 
                alt="Sir Ole VVIP Protocol Ltd" 
                className="h-14 w-auto transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-luxury-gold/20 rounded-full scale-0 group-hover:scale-110 transition-transform duration-500"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-luxury-gold font-playfair font-bold text-2xl tracking-wide relative">
                Sir Ole
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-luxury-gold group-hover:w-full transition-all duration-500"></div>
              </h1>
              <p className="text-luxury-white text-xs tracking-[0.2em] uppercase font-medium opacity-80">
                VVIP PROTOCOL
              </p>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group hover:bg-luxury-gold/10 ${
                  isActive(item.path) 
                    ? 'text-luxury-gold bg-luxury-gold/10' 
                    : 'text-luxury-white hover:text-luxury-gold'
                }`}
              >
                <span className="relative z-10">{item.name}</span>
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-luxury-gold transition-all duration-300 ${
                  isActive(item.path) ? 'w-3/4' : 'group-hover:w-3/4'
                }`}></div>
                <div className="absolute inset-0 bg-luxury-gold/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              </Link>
            ))}
          </nav>

          {/* Enhanced CTA Section */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/book-meeting">
              <Button className="relative bg-gradient-to-r from-luxury-gold to-luxury-gold-light hover:from-luxury-gold-dark hover:to-luxury-gold text-luxury-black font-bold px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-luxury-gold/40 group overflow-hidden">
                <span className="relative z-10 text-sm tracking-wide">Book Meeting</span>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </Button>
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-3 text-luxury-white hover:text-luxury-gold transition-all duration-300 group hover:bg-luxury-gold/10 rounded-lg"
          >
            <div className="relative">
              {isMenuOpen ? (
                <X size={24} className="transition-transform duration-300 group-hover:rotate-90" />
              ) : (
                <Menu size={24} className="transition-transform duration-300 group-hover:scale-110" />
              )}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-luxury-black/95 backdrop-blur-xl border-t border-luxury-gold/30 shadow-2xl animate-fade-in">
            <div className="container mx-auto px-4 py-6">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-6 py-4 text-base font-medium transition-all duration-300 rounded-lg mb-2 hover:bg-luxury-gold/10 hover:translate-x-2 ${
                    isActive(item.path) 
                      ? 'text-luxury-gold bg-luxury-gold/10 border-l-4 border-luxury-gold' 
                      : 'text-luxury-white hover:text-luxury-gold'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center space-x-3">
                    {item.icon && <item.icon size={18} />}
                    <span>{item.name}</span>
                  </div>
                </Link>
              ))}
              <div className="px-6 pt-6 border-t border-luxury-gold/20 mt-6">
                <Link to="/book-meeting" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-luxury-gold to-luxury-gold-light hover:from-luxury-gold-dark hover:to-luxury-gold text-luxury-black font-bold py-4 text-base">
                    Book Meeting
                  </Button>
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
