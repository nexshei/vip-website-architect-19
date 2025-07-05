
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

        {/* CEO Section */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/20 to-luxury-gold-light/20 rounded-full blur-2xl transform scale-110"></div>
            <img 
              src="/lovable-uploads/569bcb82-cebd-48f6-9d3b-7a1d0c566fd4.png" 
              alt="Dennis Olele - CEO of Sir Ole VVIP Protocol Ltd" 
              className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 object-cover object-[center_20%] rounded-full border-4 border-luxury-gold shadow-2xl mx-auto mb-6 animate-scale-in"
            />
          </div>
          <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-luxury-black mb-2">
            Dennis Olele
          </h3>
          <p className="text-lg text-luxury-gold font-semibold mb-4 tracking-wide">
            Chief Executive Officer & Founder
          </p>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-luxury-black/80 leading-relaxed italic">
              "Visionary leader dedicated to redefining excellence in luxury protocol services. Under his leadership, Sir Ole VVIP Protocol Ltd has become synonymous with sophistication, precision, and unparalleled service delivery."
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg text-luxury-black/80 leading-relaxed">
              At Sir Ole VVIP Protocol Ltd, we redefine the art of hospitality and protocol services. Our commitment to excellence has established us as Nairobi's premier provider of luxury protocol, ushering, VVIP security, and event management services.
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

        {/* Cabinet Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl sm:text-4xl font-playfair font-bold text-luxury-black mb-4">
              Our Distinguished <span className="text-gradient-gold">Cabinet</span>
            </h3>
            <div className="w-20 h-1 bg-luxury-gold mx-auto mb-6"></div>
            <p className="text-lg text-luxury-black/70 max-w-2xl mx-auto">
              Meet the exceptional leaders who drive our vision of excellence and ensure the highest standards in luxury protocol services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 max-w-7xl mx-auto">
            {/* Cabinet Member 1 */}
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/30 to-luxury-gold-light/30 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-300"></div>
                <div className="relative bg-gradient-to-br from-luxury-white to-luxury-gold/5 p-1 rounded-2xl shadow-xl">
                  <img 
                    src="/lovable-uploads/0d88121d-a8c1-47b3-a487-4b9ce6c5a80b.png" 
                    alt="Cabinet Member" 
                    className="w-full h-96 object-cover object-[center_15%] rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <h4 className="text-xl font-playfair font-bold text-luxury-black mb-2">
                Distinguished Leader
              </h4>
              <p className="text-luxury-gold font-semibold mb-3">Executive Cabinet Member</p>
              <p className="text-sm text-luxury-black/70 leading-relaxed">
                Bringing exceptional expertise in luxury protocol management and client relations to ensure unparalleled service delivery.
              </p>
            </div>

            {/* Cabinet Member 2 */}
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/30 to-luxury-gold-light/30 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-300"></div>
                <div className="relative bg-gradient-to-br from-luxury-white to-luxury-gold/5 p-1 rounded-2xl shadow-xl">
                  <img 
                    src="/lovable-uploads/31ccd523-69b9-4809-b449-0da8be63b767.png" 
                    alt="Cabinet Member" 
                    className="w-full h-96 object-cover object-[center_25%] rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <h4 className="text-xl font-playfair font-bold text-luxury-black mb-2">
                Master of Ceremonies
              </h4>
              <p className="text-luxury-gold font-semibold mb-3">MC</p>
              <p className="text-sm text-luxury-black/70 leading-relaxed">
                Expert in diplomatic protocol and corporate event management, ensuring seamless execution of high-profile occasions.
              </p>
            </div>

            {/* Cabinet Member 3 */}
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/30 to-luxury-gold-light/30 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-300"></div>
                <div className="relative bg-gradient-to-br from-luxury-white to-luxury-gold/5 p-1 rounded-2xl shadow-xl">
                  <img 
                    src="/lovable-uploads/a424ff8a-15ff-4c76-9e44-fdfa05ac9655.png" 
                    alt="Protocol Specialist" 
                    className="w-full h-96 object-cover object-[center_15%] rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <h4 className="text-xl font-playfair font-bold text-luxury-black mb-2">
                Protocol Specialist
              </h4>
              <p className="text-luxury-gold font-semibold mb-3">Senior Cabinet Member</p>
              <p className="text-sm text-luxury-black/70 leading-relaxed">
                Dedicated professional specializing in VIP protocol services and luxury event coordination with exceptional attention to detail.
              </p>
            </div>

            {/* Cabinet Member 4 - Geoffrey Njoroge */}
            <div className="group text-center">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/30 to-luxury-gold-light/30 rounded-2xl blur-xl transform group-hover:scale-110 transition-transform duration-300"></div>
                <div className="relative bg-gradient-to-br from-luxury-white to-luxury-gold/5 p-1 rounded-2xl shadow-xl">
                  <img 
                    src="/lovable-uploads/bf7d08f5-f1f7-44af-a022-ca29ca823fe9.png" 
                    alt="Geoffrey Njoroge - Logistics & IT Manager" 
                    className="w-full h-96 object-cover object-[center_20%] rounded-xl transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <h4 className="text-xl font-playfair font-bold text-luxury-black mb-2">
                Geoffrey Njoroge
              </h4>
              <p className="text-luxury-gold font-semibold mb-3">Logistics & IT Manager</p>
              <p className="text-sm text-luxury-black/70 leading-relaxed">
                Expert in logistics coordination and IT systems management, ensuring seamless technical operations and efficient event logistics for all VIP protocol services.
              </p>
            </div>
          </div>

          {/* Decorative Element */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4">
              <div className="w-12 h-px bg-luxury-gold"></div>
              <div className="w-3 h-3 bg-luxury-gold rounded-full"></div>
              <div className="w-12 h-px bg-luxury-gold"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
