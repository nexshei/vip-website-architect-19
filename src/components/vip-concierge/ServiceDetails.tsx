
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface Props {
  state: any;
  formErrors: any;
  handleChange: (field: string, value: string) => void;
}

const ServiceDetails = ({ state, formErrors, handleChange }: Props) => (
  <div className="grid md:grid-cols-2 gap-4">
    <div>
      <Label htmlFor="serviceType" className="text-luxury-black font-medium">Service Type</Label>
      <Select value={state.serviceType} onValueChange={val => handleChange('serviceType', val)}>
        <SelectTrigger className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold">
          <SelectValue placeholder="Select service type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="vvip-protocol">VVIP Protocol Management</SelectItem>
          <SelectItem value="diplomatic-protocol">Diplomatic Protocol Services</SelectItem>
          <SelectItem value="corporate-protocol">Corporate Protocol Services</SelectItem>
          <SelectItem value="event-coordination">Event Coordination & Management</SelectItem>
          <SelectItem value="security-management">Security & Logistics Management</SelectItem>
          <SelectItem value="hospitality">Premium Hospitality Services</SelectItem>
          <SelectItem value="consultation">Protocol Consultation</SelectItem>
          <SelectItem value="training">Protocol Training & Development</SelectItem>
          <SelectItem value="full-service">Full-Service Protocol Package</SelectItem>
        </SelectContent>
      </Select>
      {formErrors.serviceType && (
        <div className="text-sm text-destructive mt-1">{formErrors.serviceType}</div>
      )}
    </div>
    <div>
      <Label htmlFor="location" className="text-luxury-black font-medium">Location / Venue</Label>
      <Input
        id="location"
        value={state.location}
        onChange={e => handleChange('location', e.target.value)}
        maxLength={120}
        className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
        aria-invalid={!!formErrors.location}
        aria-describedby={formErrors.location && "vip-form-location-error"}
      />
      {formErrors.location && (
        <div id="vip-form-location-error" className="text-sm text-destructive mt-1">
          {formErrors.location}
        </div>
      )}
    </div>
    <div>
      <Label htmlFor="protocolOfficers" className="text-luxury-black font-medium">Number of Protocol Officers Needed</Label>
      <Select value={state.protocolOfficers} onValueChange={val => handleChange('protocolOfficers', val)}>
        <SelectTrigger className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold">
          <SelectValue placeholder="Select range" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1-5">1-5</SelectItem>
          <SelectItem value="5-10">5-10</SelectItem>
          <SelectItem value="10-20">10-20</SelectItem>
        </SelectContent>
      </Select>
      {formErrors.protocolOfficers && (
        <div className="text-sm text-destructive mt-1">{formErrors.protocolOfficers}</div>
      )}
    </div>
  </div>
);

export default ServiceDetails;
