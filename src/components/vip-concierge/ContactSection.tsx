
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactSection = () => (
  <div className="p-6 border-t border-luxury-black/10">
    <h3 className="text-xl font-playfair font-bold text-luxury-black mb-4">Contact Us</h3>
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-luxury-black/80">
        <Phone className="h-5 w-5" />
        <a href="tel:0712063461" className="hover:text-luxury-gold transition-colors">
          0712063461
        </a>
      </div>
      <div className="flex items-center gap-2 text-luxury-black/80">
        <Mail className="h-5 w-5" />
        <a href="mailto:sirolevvipprotocol@gmail.com" className="hover:text-luxury-gold transition-colors">
          sirolevvipprotocol@gmail.com
        </a>
      </div>
      <div className="flex items-center gap-2 text-luxury-black/80">
        <MapPin className="h-5 w-5" />
        <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="hover:text-luxury-gold transition-colors">
          Golden Court, Silicon Valley Estate, Eastern Bypass, Nairobi
        </a>
      </div>
    </div>
  </div>
);

export default ContactSection;
