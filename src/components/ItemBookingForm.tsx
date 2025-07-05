
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { 
  Calendar, 
  Armchair, 
  Square, 
  Home, 
  Utensils, 
  Coffee, 
  Volume2, 
  Lightbulb, 
  Zap, 
  Droplets, 
  Shirt, 
  Flower 
} from 'lucide-react';

const itemBookingSchema = z.object({
  full_name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  phone: z.string().min(10, 'Please enter a valid phone number').optional().or(z.literal('')),
  event_date: z.string().min(1, 'Event date is required'),
  chairs: z.number().min(0).default(0),
  tables: z.number().min(0).default(0),
  tents: z.number().min(0).default(0),
  plates: z.number().min(0).default(0),
  cups: z.number().min(0).default(0),
  forks_spoons: z.number().min(0).default(0),
  sound_system: z.number().min(0).default(0),
  lighting_equipment: z.number().min(0).default(0),
  extension_cables: z.number().min(0).default(0),
  water_dispensers: z.number().min(0).default(0),
  tablecloths: z.number().min(0).default(0),
  decoration_items: z.number().min(0).default(0),
  additional_notes: z.string().optional(),
  terms_agreed: z.boolean().refine(val => val === true, 'You must agree to the terms')
}).refine(data => data.email || data.phone, {
  message: "Please provide either email or phone number",
  path: ["email"]
});

type ItemBookingFormData = z.infer<typeof itemBookingSchema>;

const ItemBookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ItemBookingFormData>({
    resolver: zodResolver(itemBookingSchema),
    defaultValues: {
      full_name: '',
      email: '',
      phone: '',
      event_date: '',
      chairs: 0,
      tables: 0,
      tents: 0,
      plates: 0,
      cups: 0,
      forks_spoons: 0,
      sound_system: 0,
      lighting_equipment: 0,
      extension_cables: 0,
      water_dispensers: 0,
      tablecloths: 0,
      decoration_items: 0,
      additional_notes: '',
      terms_agreed: false
    }
  });

  const onSubmit = async (data: ItemBookingFormData) => {
    setIsSubmitting(true);
    try {
      // Transform the data to match database expectations
      const bookingData = {
        full_name: data.full_name,
        email: data.email || null,
        phone: data.phone || null,
        event_date: data.event_date,
        chairs: data.chairs,
        tables: data.tables,
        tents: data.tents,
        plates: data.plates,
        cups: data.cups,
        forks_spoons: data.forks_spoons,
        sound_system: data.sound_system,
        lighting_equipment: data.lighting_equipment,
        extension_cables: data.extension_cables,
        water_dispensers: data.water_dispensers,
        tablecloths: data.tablecloths,
        decoration_items: data.decoration_items,
        additional_notes: data.additional_notes || null,
        terms_agreed: data.terms_agreed
      };

      const { error } = await supabase
        .from('item_bookings')
        .insert(bookingData);

      if (error) throw error;

      toast({
        title: "Booking Submitted Successfully!",
        description: "Your item booking has been received. We'll contact you soon to confirm details.",
      });

      form.reset();
    } catch (error) {
      console.error('Error submitting booking:', error);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const items = [
    { name: 'chairs', label: 'Chairs', icon: Armchair },
    { name: 'tables', label: 'Tables', icon: Square },
    { name: 'tents', label: 'Tents', icon: Home },
    { name: 'plates', label: 'Plates', icon: Utensils },
    { name: 'cups', label: 'Cups', icon: Coffee },
    { name: 'forks_spoons', label: 'Forks & Spoons', icon: Utensils },
    { name: 'sound_system', label: 'Sound System', icon: Volume2 },
    { name: 'lighting_equipment', label: 'Lighting Equipment', icon: Lightbulb },
    { name: 'extension_cables', label: 'Extension Cables', icon: Zap },
    { name: 'water_dispensers', label: 'Water Dispensers', icon: Droplets },
    { name: 'tablecloths', label: 'Tablecloths', icon: Shirt },
    { name: 'decoration_items', label: 'Decoration Items', icon: Flower }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-luxury-white rounded-2xl shadow-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-playfair font-bold text-luxury-black mb-4">
          Book Event Items
        </h2>
        <p className="text-luxury-black/70 max-w-2xl mx-auto">
          Reserve the items you need for your upcoming event. Our professional team will ensure 
          everything is ready for your special occasion.
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          {/* Contact Information */}
          <div className="bg-luxury-black/5 p-6 rounded-xl">
            <h3 className="text-xl font-playfair font-bold text-luxury-black mb-6 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-luxury-gold" />
              Event & Contact Details
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="full_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Full Name *</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="event_date"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Event Date *</FormLabel>
                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="your.email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input placeholder="+254 xxx xxx xxx" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          {/* Items Selection */}
          <div className="bg-luxury-black/5 p-6 rounded-xl">
            <h3 className="text-xl font-playfair font-bold text-luxury-black mb-6">
              Select Items & Quantities
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6">
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <FormField
                    key={item.name}
                    control={form.control}
                    name={item.name as keyof ItemBookingFormData}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Icon className="w-4 h-4 text-luxury-gold" />
                          {item.label}
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="0"
                            placeholder="0"
                            value={field.value as number}
                            onChange={(e) => field.onChange(parseInt(e.target.value) || 0)}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                );
              })}
            </div>
          </div>

          {/* Additional Notes */}
          <div className="bg-luxury-black/5 p-6 rounded-xl">
            <FormField
              control={form.control}
              name="additional_notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Additional Notes or Special Requests</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Please specify any additional items, special requirements, or instructions for your event..."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Terms Agreement */}
          <div className="bg-luxury-black/5 p-6 rounded-xl">
            <FormField
              control={form.control}
              name="terms_agreed"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I agree to the terms and conditions *
                    </FormLabel>
                    <p className="text-sm text-luxury-black/60">
                      By checking this box, you agree to our booking terms, cancellation policy, 
                      and confirm that all information provided is accurate.
                    </p>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="text-center">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-gradient-luxury hover:opacity-90 text-luxury-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ItemBookingForm;
