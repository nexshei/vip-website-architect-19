
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, Home, X, Sparkles } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-black/80 backdrop-blur-2xl border-b border-luxury-gold/40 shadow-2xl shadow-luxury-gold/20' 
        : 'bg-gradient-to-b from-black/90 via-black/70 to-transparent backdrop-blur-xl'
    }`}>
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/5 via-transparent to-luxury-gold/5 opacity-50"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-shimmer"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          {/* Enhanced Logo Section */}
          <Link to="/" className="flex items-center space-x-3 sm:space-x-4 hover:opacity-90 transition-all duration-500 group flex-shrink-0 relative">
            <div className="relative perspective-1000">
              {/* Glowing background effect */}
              <div className="absolute inset-0 bg-gradient-radial from-luxury-gold/30 via-luxury-gold/10 to-transparent rounded-full scale-0 group-hover:scale-150 transition-all duration-700 blur-xl"></div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/128c46de-f529-4c6d-9c43-0e87592a70ba.png" 
                  alt="Sir Ole VVIP Protocol Ltd" 
                  className="h-10 sm:h-12 lg:h-14 w-auto transition-all duration-500 group-hover:scale-110 group-hover:brightness-110 filter drop-shadow-lg group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.5)]"
                />
                {/* Floating particles effect */}
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles size={16} className="text-luxury-gold animate-pulse" />
                </div>
              </div>
            </div>
            
            <div className="hidden xs:block sm:block">
              <h1 className="text-luxury-gold font-playfair font-bold text-lg sm:text-xl lg:text-2xl tracking-wide relative">
                <span className="bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold bg-clip-text text-transparent">
                  Sir Ole
                </span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-luxury-gold to-luxury-gold-light group-hover:w-full transition-all duration-700"></div>
              </h1>
              <p className="text-luxury-white text-xs tracking-[0.15em] sm:tracking-[0.25em] uppercase font-medium opacity-90 bg-gradient-to-r from-luxury-white to-luxury-gold/70 bg-clip-text text-transparent">
                VVIP PROTOCOL
              </p>
            </div>
          </Link>

          {/* Futuristic Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-black/20 backdrop-blur-xl rounded-2xl px-2 py-2 border border-luxury-gold/20">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-4 xl:px-6 py-3 text-sm font-medium transition-all duration-300 rounded-xl group overflow-hidden ${
                  isActive(item.path) 
                    ? 'text-black bg-gradient-to-r from-luxury-gold to-luxury-gold-light shadow-lg shadow-luxury-gold/30' 
                    : 'text-luxury-white hover:text-luxury-gold'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Hover background effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-luxury-gold/20 to-luxury-gold-light/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-300 ${
                  isActive(item.path) ? 'scale-100' : ''
                }`}></div>
                
                {/* Animated border */}
                <div className={`absolute inset-0 rounded-xl border border-luxury-gold/30 scale-0 group-hover:scale-100 transition-transform duration-300 ${
                  isActive(item.path) ? 'scale-100 border-luxury-gold/50' : ''
                }`}></div>
                
                <span className="relative z-10 font-semibold">{item.name}</span>
                
                {/* Active indicator */}
                <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-luxury-gold transition-all duration-300 ${
                  isActive(item.path) ? 'w-3/4' : 'group-hover:w-1/2'
                }`}></div>
              </Link>
            ))}
          </nav>

          {/* Enhanced CTA Section */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/book-meeting">
              <Button className="relative bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold hover:from-luxury-gold-dark hover:via-luxury-gold hover:to-luxury-gold-light text-black font-bold px-6 lg:px-8 py-3 lg:py-4 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-luxury-gold/50 group overflow-hidden rounded-xl border border-luxury-gold/30">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-luxury-gold/20 rounded-xl scale-0 group-hover:scale-110 transition-transform duration-500 blur-xl"></div>
                
                <span className="relative z-10 text-sm font-bold tracking-wider flex items-center space-x-2">
                  <span>Book Meeting</span>
                  <Sparkles size={16} className="opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </Button>
            </Link>
          </div>

          {/* Futuristic Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-3 text-luxury-white hover:text-luxury-gold transition-all duration-300 group hover:bg-luxury-gold/10 rounded-xl border border-transparent hover:border-luxury-gold/30 backdrop-blur-sm"
          >
            <div className="relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-luxury-gold/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 blur-md"></div>
              
              {isMenuOpen ? (
                <X size={24} className="relative z-10 transition-all duration-300 group-hover:rotate-90" />
              ) : (
                <Menu size={24} className="relative z-10 transition-all duration-300 group-hover:scale-110" />
              )}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-t border-luxury-gold/30 shadow-2xl animate-fade-in rounded-b-2xl overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-b from-luxury-gold/10 via-transparent to-luxury-gold/5"></div>
            
            <div className="container mx-auto px-4 py-6 relative">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-6 py-4 text-base font-medium transition-all duration-300 rounded-xl mb-2 hover:bg-luxury-gold/10 hover:translate-x-2 hover:shadow-lg group relative overflow-hidden ${
                    isActive(item.path) 
                      ? 'text-black bg-gradient-to-r from-luxury-gold to-luxury-gold-light border-l-4 border-luxury-gold shadow-lg shadow-luxury-gold/30' 
                      : 'text-luxury-white hover:text-luxury-gold'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  
                  <div className="flex items-center space-x-3 relative z-10">
                    {item.icon && <item.icon size={18} className="group-hover:scale-110 transition-transform duration-300" />}
                    <span className="font-semibold">{item.name}</span>
                  </div>
                </Link>
              ))}
              
              <div className="px-6 pt-6 border-t border-luxury-gold/20 mt-6">
                <Link to="/book-meeting" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-luxury-gold to-luxury-gold-light hover:from-luxury-gold-dark hover:to-luxury-gold text-black font-bold py-4 text-base rounded-xl shadow-lg shadow-luxury-gold/30 hover:shadow-xl hover:shadow-luxury-gold/40 transition-all duration-300">
                    <span className="flex items-center justify-center space-x-2">
                      <span>Book Meeting</span>
                      <Sparkles size={18} />
                    </span>
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
