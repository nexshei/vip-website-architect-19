
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
      scrolled 
        ? 'bg-black/90 backdrop-blur-3xl border-b border-luxury-gold/50 shadow-2xl shadow-luxury-gold/30' 
        : 'bg-gradient-to-b from-black/95 via-black/80 to-transparent backdrop-blur-2xl'
    }`}>
      {/* Enhanced animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/10 via-transparent to-luxury-gold/10 opacity-60"></div>
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.15)_50%,transparent_75%)] bg-[length:30px_30px] animate-shimmer"></div>
      
      <div className="container mx-auto px-3 sm:px-6 lg:px-8 relative">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Enhanced Logo Section with better mobile spacing */}
          <Link to="/" className="flex items-center space-x-2 sm:space-x-3 hover:opacity-90 transition-all duration-500 group flex-shrink-0 relative">
            <div className="relative perspective-1000">
              {/* Enhanced glowing background effect */}
              <div className="absolute inset-0 bg-gradient-radial from-luxury-gold/40 via-luxury-gold/15 to-transparent rounded-full scale-0 group-hover:scale-150 transition-all duration-700 blur-2xl"></div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/128c46de-f529-4c6d-9c43-0e87592a70ba.png" 
                  alt="Sir Ole VVIP Protocol Ltd" 
                  className="h-8 sm:h-10 lg:h-12 w-auto transition-all duration-500 group-hover:scale-110 group-hover:brightness-125 filter drop-shadow-lg group-hover:drop-shadow-[0_0_20px_rgba(212,175,55,0.6)]"
                />
                {/* Enhanced floating particles effect */}
                <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <Sparkles size={12} className="text-luxury-gold animate-pulse" />
                </div>
              </div>
            </div>
            
            <div className="hidden xs:block">
              <h1 className="text-luxury-gold font-playfair font-bold text-base sm:text-lg lg:text-xl tracking-wide relative">
                <span className="bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold bg-clip-text text-transparent">
                  Sir Ole
                </span>
                <div className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-gradient-to-r from-luxury-gold to-luxury-gold-light group-hover:w-full transition-all duration-700"></div>
              </h1>
              <p className="text-luxury-white text-[10px] sm:text-xs tracking-[0.1em] sm:tracking-[0.2em] uppercase font-medium opacity-90 bg-gradient-to-r from-luxury-white to-luxury-gold/70 bg-clip-text text-transparent">
                VVIP PROTOCOL
              </p>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation with better styling */}
          <nav className="hidden lg:flex items-center space-x-0.5 bg-black/30 backdrop-blur-2xl rounded-2xl px-2 py-2 border border-luxury-gold/30 shadow-lg shadow-luxury-gold/20">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 xl:px-5 py-2.5 text-sm font-semibold transition-all duration-400 rounded-xl group overflow-hidden ${
                  isActive(item.path) 
                    ? 'text-black bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold shadow-lg shadow-luxury-gold/40 scale-105' 
                    : 'text-luxury-white hover:text-luxury-gold hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 80}ms` }}
              >
                {/* Enhanced hover background effect */}
                <div className={`absolute inset-0 bg-gradient-to-r from-luxury-gold/25 to-luxury-gold-light/25 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-400 ${
                  isActive(item.path) ? 'scale-100' : ''
                }`}></div>
                
                {/* Enhanced animated border */}
                <div className={`absolute inset-0 rounded-xl border border-luxury-gold/40 scale-0 group-hover:scale-100 transition-transform duration-400 ${
                  isActive(item.path) ? 'scale-100 border-luxury-gold/60' : ''
                }`}></div>
                
                <span className="relative z-10 font-bold tracking-wide">{item.name}</span>
                
                {/* Enhanced active indicator */}
                <div className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-luxury-gold to-luxury-gold-light transition-all duration-400 ${
                  isActive(item.path) ? 'w-4/5' : 'group-hover:w-2/3'
                }`}></div>
              </Link>
            ))}
          </nav>

          {/* Enhanced CTA Section with better mobile visibility */}
          <div className="hidden sm:flex items-center space-x-3">
            <Link to="/book-meeting">
              <Button className="relative bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold hover:from-luxury-gold-dark hover:via-luxury-gold hover:to-luxury-gold-light text-black font-bold px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-luxury-gold/60 group overflow-hidden rounded-xl border border-luxury-gold/40 text-sm lg:text-base">
                {/* Enhanced shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1200"></div>
                
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-luxury-gold/30 rounded-xl scale-0 group-hover:scale-125 transition-transform duration-600 blur-xl"></div>
                
                <span className="relative z-10 font-bold tracking-wider flex items-center space-x-2">
                  <span>Book Meeting</span>
                  <Sparkles size={14} className="opacity-70 group-hover:opacity-100 transition-opacity duration-300" />
                </span>
              </Button>
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button with better touch target */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-2.5 text-luxury-white hover:text-luxury-gold transition-all duration-300 group hover:bg-luxury-gold/15 rounded-xl border border-transparent hover:border-luxury-gold/40 backdrop-blur-sm touch-target"
          >
            <div className="relative">
              {/* Enhanced background glow */}
              <div className="absolute inset-0 bg-luxury-gold/25 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 blur-lg"></div>
              
              {isMenuOpen ? (
                <X size={22} className="relative z-10 transition-all duration-300 group-hover:rotate-90" />
              ) : (
                <Menu size={22} className="relative z-10 transition-all duration-300 group-hover:scale-110" />
              )}
            </div>
          </button>
        </div>

        {/* Enhanced Mobile Menu with better design */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/96 backdrop-blur-3xl border-t border-luxury-gold/40 shadow-2xl shadow-luxury-gold/30 animate-fade-in rounded-b-2xl overflow-hidden mx-2 sm:mx-0">
            {/* Enhanced animated background */}
            <div className="absolute inset-0 bg-gradient-to-b from-luxury-gold/15 via-transparent to-luxury-gold/10"></div>
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(212,175,55,0.1)_50%,transparent_75%)] bg-[length:20px_20px] animate-shimmer"></div>
            
            <div className="container mx-auto px-4 py-5 relative">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-5 py-3.5 text-base font-semibold transition-all duration-300 rounded-xl mb-2 hover:bg-luxury-gold/15 hover:translate-x-2 hover:shadow-lg group relative overflow-hidden touch-target ${
                    isActive(item.path) 
                      ? 'text-black bg-gradient-to-r from-luxury-gold via-luxury-gold-light to-luxury-gold border-l-4 border-luxury-gold shadow-lg shadow-luxury-gold/40' 
                      : 'text-luxury-white hover:text-luxury-gold'
                  }`}
                  style={{ animationDelay: `${index * 80}ms` }}
                >
                  {/* Enhanced hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/25 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  
                  <div className="flex items-center space-x-3 relative z-10">
                    {item.icon && <item.icon size={18} className="group-hover:scale-110 transition-transform duration-300" />}
                    <span className="font-bold tracking-wide">{item.name}</span>
                  </div>
                </Link>
              ))}
              
              <div className="px-5 pt-5 border-t border-luxury-gold/30 mt-5">
                <Link to="/book-meeting" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full bg-gradient-to-r from-luxury-gold to-luxury-gold-light hover:from-luxury-gold-dark hover:to-luxury-gold text-black font-bold py-4 text-base rounded-xl shadow-lg shadow-luxury-gold/40 hover:shadow-xl hover:shadow-luxury-gold/50 transition-all duration-300 hover:scale-105 touch-target">
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
