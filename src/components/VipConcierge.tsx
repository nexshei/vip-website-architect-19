
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import ContactInfo from './vip-concierge/ContactInfo';
import EventDetails from './vip-concierge/EventDetails';
import ServiceDetails from './vip-concierge/ServiceDetails';
import Requirements from './vip-concierge/Requirements';
import ContactSection from './vip-concierge/ContactSection';
import { useVipConciergeForm } from './vip-concierge/useVipConciergeForm';

const VipConcierge = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    state,
    isLoading,
    formErrors,
    handleChange,
    handleSubmit,
  } = useVipConciergeForm(setIsOpen);

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Request VVIP Service
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-luxury-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-gradient-luxury p-6 rounded-t-2xl">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-playfair font-bold text-luxury-gold">VVIP Service Request</h2>
            <Button
              onClick={() => setIsOpen(false)}
              variant="ghost"
              size="icon"
              className="text-luxury-white hover:bg-luxury-white/20"
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
          <p className="text-luxury-white/80 mt-2">
            Let us know how we can assist you with our premium protocol services.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-6" noValidate>
          <ContactInfo
            state={state}
            formErrors={formErrors}
            handleChange={handleChange}
          />
          <EventDetails
            state={state}
            formErrors={formErrors}
            handleChange={handleChange}
          />
          <ServiceDetails
            state={state}
            formErrors={formErrors}
            handleChange={handleChange}
          />
          <Requirements
            state={state}
            formErrors={formErrors}
            handleChange={handleChange}
          />
          
          {/* Consent Checkbox */}
          <div className="flex items-start space-x-3 p-4 bg-luxury-black/5 rounded-lg border border-luxury-black/10">
            <Checkbox 
              id="vipConsent" 
              checked={state.consentGiven}
              onCheckedChange={(checked) => handleChange('consentGiven', checked as boolean)}
              className="mt-1"
            />
            <Label htmlFor="vipConsent" className="text-sm text-luxury-black leading-relaxed cursor-pointer">
              I consent to Sir Ole VVIP Protocol Ltd collecting and processing my personal details for the purpose of providing VVIP services and responding to my request. I understand my data will be handled in accordance with your privacy policy.
            </Label>
          </div>
          {formErrors.consentGiven && (
            <div className="text-sm text-destructive">{formErrors.consentGiven}</div>
          )}

          <Button
            type="submit"
            disabled={isLoading || !state.consentGiven}
            className="w-full bg-luxury-gold hover:bg-luxury-gold-dark text-luxury-black font-semibold py-3 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Submitting Request...' : 'Submit Service Request'}
          </Button>
        </form>
        <ContactSection />
      </div>
    </div>
  );
};

export default VipConcierge;
