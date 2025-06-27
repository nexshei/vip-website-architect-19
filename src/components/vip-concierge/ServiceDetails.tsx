
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface ServiceDetailsProps {
  state: any;
  formErrors: any;
  handleChange: (field: string, value: string) => void;
}

const ServiceDetails = ({ state, formErrors, handleChange }: ServiceDetailsProps) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-luxury-black">Service Details</h3>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="serviceType" className="text-luxury-black">Service Type</Label>
          <Select value={state.serviceType} onValueChange={(value) => handleChange('serviceType', value)}>
            <SelectTrigger className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold">
              <SelectValue placeholder="Select Service Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="full_protocol">Full Protocol Service</SelectItem>
              <SelectItem value="event_management">Event Management</SelectItem>
              <SelectItem value="vip_escort">VIP Escort</SelectItem>
              <SelectItem value="security_coordination">Security Coordination</SelectItem>
              <SelectItem value="logistics_support">Logistics Support</SelectItem>
              <SelectItem value="diplomatic_protocol">Diplomatic Protocol</SelectItem>
            </SelectContent>
          </Select>
          {formErrors.serviceType && (
            <div className="text-sm text-destructive mt-1">{formErrors.serviceType}</div>
          )}
        </div>

        <div>
          <Label htmlFor="protocolOfficers" className="text-luxury-black">Number of Protocol Officers</Label>
          <Select value={state.protocolOfficers} onValueChange={(value) => handleChange('protocolOfficers', value)}>
            <SelectTrigger className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold">
              <SelectValue placeholder="Select Number of Officers" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1-5">1-5 Officers</SelectItem>
              <SelectItem value="5-10">5-10 Officers</SelectItem>
              <SelectItem value="10-20">10-20 Officers</SelectItem>
              <SelectItem value="20+">20+ Officers</SelectItem>
            </SelectContent>
          </Select>
          {formErrors.protocolOfficers && (
            <div className="text-sm text-destructive mt-1">{formErrors.protocolOfficers}</div>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="location" className="text-luxury-black">Location/Venue</Label>
        <Input
          id="location"
          placeholder="Enter event location or venue"
          value={state.location}
          onChange={(e) => handleChange('location', e.target.value)}
          className="border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
        />
        {formErrors.location && (
          <div className="text-sm text-destructive mt-1">{formErrors.location}</div>
        )}
      </div>
    </div>
  );
};

export default ServiceDetails;
