
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

interface Props {
  state: any;
  formErrors: any;
  handleChange: (field: string, value: string) => void;
}
const EventDetails = ({ state, formErrors, handleChange }: Props) => (
  <div className="grid md:grid-cols-2 gap-4">
    <div>
      <Label htmlFor="eventDate" className="text-luxury-black font-medium">Preferred Event Date</Label>
      <Input
        id="eventDate"
        type="date"
        value={state.eventDate}
        onChange={e => handleChange('eventDate', e.target.value)}
        className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold"
      />
    </div>
    <div>
      <Label htmlFor="eventType" className="text-luxury-black font-medium">Event Type</Label>
      <Select value={state.eventType} onValueChange={val => handleChange('eventType', val)}>
        <SelectTrigger className="mt-2 border-luxury-black/20 focus:border-luxury-gold focus:ring-luxury-gold">
          <SelectValue placeholder="Select event type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="corporate">Corporate Event</SelectItem>
          <SelectItem value="wedding">Wedding</SelectItem>
          <SelectItem value="diplomatic">Diplomatic Function</SelectItem>
          <SelectItem value="private">Private Celebration</SelectItem>
          <SelectItem value="government">Government Function</SelectItem>
          <SelectItem value="international">International Conference</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>
      {formErrors.eventType && (
        <div className="text-sm text-destructive mt-1">{formErrors.eventType}</div>
      )}
    </div>
  </div>
);

export default EventDetails;
