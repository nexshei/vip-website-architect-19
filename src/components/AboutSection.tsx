
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-luxury-black mb-6">
            About <span className="text-gradient-gold">Sir Ole VVIP Protocol Ltd</span>
          </h2>
          <div className="w-24 h-1 bg-luxury-gold mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-luxury-black/80 leading-relaxed">
              At Sir Ole VVIP Protocol Ltd, we redefine the art of hospitality and protocol services. Our commitment to excellence has established us as Nairobi's premier provider of luxury protocol, ushering, VIP security, and event management services.
            </p>
            
            <p className="text-lg text-luxury-black/80 leading-relaxed">
              We understand that every detail matters when it comes to creating extraordinary experiences. Our team of highly trained professionals brings together years of expertise in diplomatic protocol, corporate events, and luxury hospitality to ensure that every occasion we touch becomes a masterpiece of sophistication.
            </p>

            <p className="text-lg text-luxury-black/80 leading-relaxed">
              From intimate corporate gatherings to grand diplomatic receptions, we orchestrate events with precision, elegance, and an unwavering attention to detail that sets the gold standard in the industry.
            </p>

            <div className="bg-luxury-black/5 p-6 rounded-lg border-l-4 border-luxury-gold">
              <p className="text-lg text-luxury-black/90 italic">
                "Excellence is not a skill, it's an attitude. At Sir Ole, we don't just meet expectations – we transcend them, creating moments of pure sophistication that leave lasting impressions."
              </p>
              <p className="text-luxury-gold font-semibold mt-4">— Dennis Olele, CEO</p>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="bg-gradient-luxury p-8 rounded-2xl shadow-2xl">
              <div className="text-center text-luxury-white">
                <div className="flex justify-center mb-6">
                  <img 
                    src="/lovable-uploads/128c46de-f529-4c6d-9c43-0e87592a70ba.png" 
                    alt="Sir Ole VVIP Protocol" 
                    className="h-24 w-auto"
                  />
                </div>
                <h3 className="text-2xl font-playfair font-bold mb-4 text-luxury-gold">Our Promise</h3>
                <p className="text-luxury-white/90 leading-relaxed">
                  We pledge to deliver unparalleled service excellence, ensuring that every protocol we manage reflects the highest standards of professionalism and sophistication that our clients deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
