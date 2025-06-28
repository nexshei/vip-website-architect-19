
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  validateTextField,
  validateEmail,
  validatePhone,
  canSubmit
} from '@/utils/validation';

export const FORM_KEY = "vip_concierge";

const initialState = {
  fullName: '',
  email: '',
  phone: '',
  eventDate: '',
  eventType: '',
  serviceType: '',
  location: '',
  protocolOfficers: '',
  requirements: '',
  consentGiven: false,
};

export function useVipConciergeForm(setIsOpen: (open: boolean) => void) {
  const [state, setState] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState<{[k: string]: string}>({});
  const { toast } = useToast();

  const resetForm = () => {
    setState(initialState);
    setFormErrors({});
  };

  function validateAllFields() {
    const errors: {[k: string]: string} = {};
    if (!validateTextField(state.fullName, 70)) errors.fullName = "Full name is required (max 70 chars)";
    if (!validateEmail(state.email)) errors.email = "Invalid email address";
    if (!validatePhone(state.phone)) errors.phone = "Please use a valid Kenyan phone number";
    if (state.location && !validateTextField(state.location, 120)) errors.location = "Location: max 120 chars";
    if (state.eventType && !validateTextField(state.eventType, 40)) errors.eventType = "Event type: max 40 chars";
    if (state.serviceType && !validateTextField(state.serviceType, 40)) errors.serviceType = "Service type: max 40 chars";
    if (state.protocolOfficers && !['1-5','5-10','10-20',''].includes(state.protocolOfficers)) errors.protocolOfficers = "Select a valid range";
    if (state.requirements && !validateTextField(state.requirements, 500)) errors.requirements = "Requirements: max 500 chars";
    if (!state.consentGiven) errors.consentGiven = "Consent is required to proceed";
    return errors;
  }

  const handleChange = (field: string, value: string | boolean) => {
    setState(prev => ({ ...prev, [field]: value }));
    setFormErrors(prev => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const errors = validateAllFields();
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      toast({
        title: "Validation Error",
        description: Object.values(errors).join(', '),
        variant: "destructive",
      });
      return;
    }

    if (!canSubmit(FORM_KEY, 12000)) {
      toast({
        title: "Slow down!",
        description: "You can only submit a request every 12 seconds. Please wait before trying again.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('vvip_service_requests')
        .insert({
          full_name: state.fullName,
          email: state.email,
          phone: state.phone,
          event_date: state.eventDate || null,
          event_type: state.eventType as any || null,
          service_type: state.serviceType as any || null,
          location: state.location || null,
          protocol_officers: state.protocolOfficers as any || null,
          requirements: state.requirements || null
        });

      if (error) {
        throw error;
      }

      // Send email notification
      try {
        const { error: emailError } = await supabase.functions.invoke('send-notifications', {
          body: {
            type: 'vvip',
            fullName: state.fullName,
            email: state.email,
            phone: state.phone,
            eventDate: state.eventDate,
            eventType: state.eventType,
            serviceType: state.serviceType,
            location: state.location,
            protocolOfficers: state.protocolOfficers,
            requirements: state.requirements
          }
        });

        if (emailError) {
          console.error('Email notification error:', emailError);
        }
      } catch (emailError) {
        console.error('Failed to send email notification:', emailError);
      }

      toast({
        title: "Service Request Submitted!",
        description: "Thank you for your request. Our team will contact you within 24 hours to discuss your requirements.",
      });
      setIsOpen(false);
      resetForm();
    } catch (error: any) {
      console.error('Error submitting VVIP service request:', error);
      toast({
        title: "Error submitting request",
        description: error.message || "Please try again or contact us directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    state,
    isLoading,
    formErrors,
    handleChange,
    handleSubmit,
    resetForm,
    setFormErrors,
    setState,
  };
}
