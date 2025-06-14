
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface Props {
  state: any;
  formErrors: any;
  handleChange: (field: string, value: string) => void;
}

const Requirements = ({ state, formErrors, handleChange }: Props) => (
  <div>
    <Label htmlFor="requirements" className="text-luxury-black font-medium">Service Requirements</Label>
    <Textarea
      id="requirements"
      rows={4}
      placeholder="Please describe your specific requirements, expected number of guests, and any special considerations..."
      value={state.requirements}
      onChange={e => handleChange('requirements', e.target.value)}
      maxLength={500}
      className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold resize-none"
      aria-invalid={!!formErrors.requirements}
      aria-describedby={formErrors.requirements && "vip-form-requirements-error"}
    />
    {formErrors.requirements && (
      <div id="vip-form-requirements-error" className="text-sm text-destructive mt-1">
        {formErrors.requirements}
      </div>
    )}
  </div>
);

export default Requirements;
