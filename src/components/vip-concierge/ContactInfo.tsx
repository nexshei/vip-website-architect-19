
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface Props {
  state: any;
  formErrors: any;
  handleChange: (field: string, value: string) => void;
}
const ContactInfo = ({ state, formErrors, handleChange }: Props) => (
  <div className="grid md:grid-cols-2 gap-4">
    <div>
      <Label htmlFor="fullName" className="text-luxury-black font-medium">Full Name</Label>
      <Input
        id="fullName"
        required
        value={state.fullName}
        onChange={e => handleChange('fullName', e.target.value)}
        maxLength={70}
        className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
        aria-invalid={!!formErrors.fullName}
        aria-describedby={formErrors.fullName && "vip-form-fullname-error"}
      />
      {formErrors.fullName && (
        <div id="vip-form-fullname-error" className="text-sm text-destructive mt-1">
          {formErrors.fullName}
        </div>
      )}
    </div>
    <div>
      <Label htmlFor="email" className="text-luxury-black font-medium">Email Address</Label>
      <Input
        id="email"
        type="email"
        required
        value={state.email}
        onChange={e => handleChange('email', e.target.value)}
        maxLength={254}
        className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
        aria-invalid={!!formErrors.email}
        aria-describedby={formErrors.email && "vip-form-email-error"}
      />
      {formErrors.email && (
        <div id="vip-form-email-error" className="text-sm text-destructive mt-1">
          {formErrors.email}
        </div>
      )}
    </div>
    <div>
      <Label htmlFor="phone" className="text-luxury-black font-medium">Phone Number</Label>
      <Input
        id="phone"
        type="tel"
        required
        value={state.phone}
        onChange={e => handleChange('phone', e.target.value)}
        maxLength={15}
        className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
        aria-invalid={!!formErrors.phone}
        aria-describedby={formErrors.phone && "vip-form-phone-error"}
      />
      {formErrors.phone && (
        <div id="vip-form-phone-error" className="text-sm text-destructive mt-1">
          {formErrors.phone}
        </div>
      )}
    </div>
  </div>
);

export default ContactInfo;
