
import React from 'react';
import { Helmet } from 'react-helmet-async';
import ItemBookingForm from '@/components/ItemBookingForm';

const BookItems = () => {
  return (
    <>
      <Helmet>
        <title>Book Event Items | Sir Ole VVIP Protocol Ltd - Event Equipment Rental Kenya</title>
        <meta 
          name="description" 
          content="Book chairs, tables, tents, sound systems, and other event items for your function in Kenya. Professional event equipment rental services by Sir Ole VVIP Protocol Ltd." 
        />
        <meta 
          name="keywords" 
          content="event equipment rental Kenya, chairs tables tents booking, sound system rental Nairobi, event items hire Kenya, party equipment rental" 
        />
      </Helmet>
      
      <div className="min-h-screen bg-luxury-white py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ItemBookingForm />
        </div>
      </div>
    </>
  );
};

export default BookItems;
