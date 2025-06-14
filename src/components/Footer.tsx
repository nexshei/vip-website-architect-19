import { Link } from 'react-router-dom';
import { MapPin, Mail, Clock, Users } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Careers', path: '/careers' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book Meeting', path: '/book-meeting' }
  ];

  return (
    <footer className="bg-luxury-black text-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/lovable-uploads/128c46de-f529-4c6d-9c43-0e87592a70ba.png" 
                alt="Sir Ole VVIP Protocol Ltd" 
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-luxury-gold font-playfair font-bold text-xl">Sir Ole</h3>
                <p className="text-luxury-white text-xs tracking-wider">VVIP PROTOCOL</p>
              </div>
            </div>
            
            <p className="text-luxury-white/70 mb-6 max-w-md">
              Premier luxury protocol and hospitality company in Nairobi, setting the gold standard for VVIP services and creating unforgettable experiences of sophistication.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="text-luxury-gold" size={20} />
                <span className="text-luxury-white/80">Golden Court, Silicon Valley Estate, Eastern Bypass, Nairobi</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-luxury-gold" size={20} />
                <a href="mailto:sirolevipprotocol@gmail.com" className="text-luxury-white/80 hover:text-luxury-gold transition-colors">
                  sirolevipprotocol@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="text-luxury-gold" size={20} />
                <span className="text-luxury-white/80">+254712063461</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-luxury-gold font-playfair font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-luxury-white/70 hover:text-luxury-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Working Hours */}
          <div>
            <h4 className="text-luxury-gold font-playfair font-semibold text-lg mb-6">Working Hours</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Clock className="text-luxury-gold" size={16} />
                <div>
                  <p className="text-luxury-white/80 text-sm">Monday - Friday</p>
                  <p className="text-luxury-white/60 text-sm">8:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-luxury-gold" size={16} />
                <div>
                  <p className="text-luxury-white/80 text-sm">Saturday</p>
                  <p className="text-luxury-white/60 text-sm">9:00 AM - 4:00 PM</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="text-luxury-gold" size={16} />
                <div>
                  <p className="text-luxury-white/80 text-sm">Sunday</p>
                  <p className="text-luxury-white/60 text-sm">By Appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-luxury-gold/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-luxury-white/60 text-sm">
              © 2025 Sir Ole VVIP Protocol Ltd. All rights reserved.
            </p>
            <p className="text-luxury-white/60 text-sm mt-4 md:mt-0">
              Elevating Excellence Since Inception
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
