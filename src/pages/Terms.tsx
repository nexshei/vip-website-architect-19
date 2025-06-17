
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <div className="pt-20 min-h-screen bg-luxury-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-black mb-8">
            Terms and Conditions
          </h1>
          
          <div className="prose prose-lg max-w-none text-luxury-black/80">
            <p className="text-lg mb-8">
              <strong>Last Updated:</strong> June 17, 2025
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-luxury-black mb-4">1. Introduction</h2>
              <p>
                Welcome to Sir Ole VVIP Protocol Ltd ("we," "our," or "us"). These Terms and Conditions ("Terms") 
                govern your use of our website, services, and any related applications or platforms operated by 
                Sir Ole VVIP Protocol Ltd, located at Golden Court, Silicon Valley Estate, Eastern Bypass, Nairobi, Kenya.
              </p>
              <p>
                By accessing or using our services, you agree to be bound by these Terms. If you disagree with 
                any part of these terms, then you may not access our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-luxury-black mb-4">2. Services Description</h2>
              <p>
                Sir Ole VVIP Protocol Ltd provides premium luxury protocol and hospitality services including 
                but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>VVIP protocol and concierge services</li>
                <li>Event planning and management</li>
                <li>Luxury hospitality coordination</li>
                <li>Personal assistance and lifestyle management</li>
                <li>Corporate protocol services</li>
                <li>Travel and accommodation arrangements</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-luxury-black mb-4">3. Booking and Reservations</h2>
              <h3 className="text-xl font-semibold text-luxury-black mb-3">3.1 Service Requests</h3>
              <p>
                All service requests must be submitted through our official channels. We reserve the right 
                to accept or decline any service request at our sole discretion.
              </p>
              
              <h3 className="text-xl font-semibold text-luxury-black mb-3">3.2 Confirmation</h3>
              <p>
                Services are confirmed only upon written acceptance by Sir Ole VVIP Protocol Ltd and 
                receipt of any required deposits or payments.
              </p>
              
              <h3 className="text-xl font-semibold text-luxury-black mb-3">3.3 Modifications</h3>
              <p>
                Any changes to confirmed services must be requested at least 48 hours in advance and 
                are subject to availability and additional charges.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-luxury-black mb-4">4. Payment Terms</h2>
              <h3 className="text-xl font-semibold text-luxury-black mb-3">4.1 Pricing</h3>
              <p>
                All prices are quoted in Kenyan Shillings (KES) unless otherwise specified and are 
                subject to change without notice.
              </p>
              
              <h3 className="text-xl font-semibold text-luxury-black mb-3">4.2 Payment Methods</h3>
              <p>
                We accept payments via bank transfer, mobile money, and other approved payment methods. 
                Payment terms will be specified in your service agreement.
              </p>
              
              <h3 className="text-xl font-semibold text-luxury-black mb-3">4.3 Late Payments</h3>
              <p>
                Late payments may incur additional charges and may result in suspension of services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-luxury-black mb-4">5. Cancellation Policy</h2>
              <h3 className="text-xl font-semibold text-luxury-black mb-3">5.1 Client Cancellations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Cancellations made 7+ days before service date: Full refund minus 10% processing fee</li>
                <li>Cancellations made 3-6 days before: 50% refund</li>
                <li>Cancellations made less than 48 hours before: No refund</li>
              </ul>
              
              <h3 className="text-xl font-semibold text-luxury-black mb-3">5.2 Force Majeure</h3>
              <p>
                We reserve the right to cancel or modify services due to circumstances beyond our control, 
                including but not limited to natural disasters, government restrictions, or security concerns.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-luxury-black mb-4">6. Client Responsibilities</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information for service delivery</li>
                <li>Comply with all applicable laws and regulations</li>
                <li>Treat our staff and partners with respect and professionalism</li>
                <li>Arrive punctually for scheduled services</li>
                <li>Provide necessary documentation or permits as required</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-luxury-black mb-4">7. Liability and Insurance</h2>
              <h3 className="text-xl font-semibold text-luxury-black mb-3">7.1 Limitation of Liability</h3>
              <p>
                Our liability is limited to the total amount paid for the specific service in question. 
                We shall not be liable for any indirect, consequential, or punitive damages.
              </p>
              
              <h3 className="text-xl font-semibold text-luxury-black mb-3">7.2 Client Insurance</h3>
              <p>
                Clients are responsible for maintaining appropriate insurance coverage for their events 
                and activities. We recommend comprehensive coverage including public liability.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-luxury-black mb-4">8. Privacy and Confidentiality</h2>
              <p>
                We maintain strict confidentiality regarding all client information and service details. 
                Our Privacy Policy, available separately, governs the collection and use of personal information.
              </p>
              <p>
                Clients agree to maintain confidentiality regarding our operational procedures, staff information, 
                and proprietary methods.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-luxury-black mb-4">9. Intellectual Property</h2>
              <p>
                All content, designs, concepts, and intellectual property developed by Sir Ole VVIP Protocol Ltd 
                remain our exclusive property. Clients may not reproduce, distribute, or use our intellectual 
                property without written permission.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-luxury-black mb-4">10. Dispute Resolution</h2>
              <h3 className="text-xl font-semibold text-luxury-black mb-3">10.1 Governing Law</h3>
              <p>
                These Terms are governed by the laws of Kenya. Any disputes shall be resolved in the 
                courts of Nairobi, Kenya.
              </p>
              
              <h3 className="text-xl font-semibold text-luxury-black mb-3">10.2 Mediation</h3>
              <p>
                We encourage resolution of disputes through mediation before pursuing legal action.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-luxury-black mb-4">11. Website Terms</h2>
              <h3 className="text-xl font-semibold text-luxury-black mb-3">11.1 Acceptable Use</h3>
              <p>
                Users must not use our website for any unlawful purpose or in any way that could damage, 
                disable, or impair our services.
              </p>
              
              <h3 className="text-xl font-semibold text-luxury-black mb-3">11.2 User Content</h3>
              <p>
                Any content you submit through our website must be accurate, lawful, and respectful. 
                You grant us the right to use such content for service delivery purposes.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-luxury-black mb-4">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. Updated terms will be posted on 
                our website with the revision date. Continued use of our services constitutes acceptance 
                of the updated Terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-luxury-black mb-4">13. Contact Information</h2>
              <div className="bg-luxury-black/5 p-6 rounded-lg">
                <p className="font-semibold mb-2">Sir Ole VVIP Protocol Ltd</p>
                <p>Golden Court, Silicon Valley Estate</p>
                <p>Eastern Bypass, Nairobi, Kenya</p>
                <p className="mt-4">
                  <strong>Phone:</strong> +254712063461<br />
                  <strong>Email:</strong> sirolevvipprotocol@gmail.com
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-playfair font-bold text-luxury-black mb-4">14. Severability</h2>
              <p>
                If any provision of these Terms is found to be unenforceable, the remaining provisions 
                will continue in full force and effect.
              </p>
            </section>

            <div className="border-t border-luxury-black/20 pt-8 mt-12">
              <p className="text-center text-luxury-black/60">
                By using our services, you acknowledge that you have read, understood, and agree to be 
                bound by these Terms and Conditions.
              </p>
              
              <div className="text-center mt-8">
                <Link 
                  to="/" 
                  className="inline-block bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-bold px-8 py-3 rounded-lg transition-colors"
                >
                  Return to Homepage
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
