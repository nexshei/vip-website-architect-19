
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.0';

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));
const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const supabase = createClient(supabaseUrl, supabaseServiceKey);

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactNotification {
  type: 'contact';
  name: string;
  email: string;
  subject?: string;
  message: string;
}

interface MeetingNotification {
  type: 'meeting';
  fullName: string;
  email: string;
  phone: string;
  eventType?: string;
  eventDate?: string;
  location?: string;
  protocolOfficers?: string;
  vision?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const notification: ContactNotification | MeetingNotification = await req.json();
    
    let emailContent = '';
    let emailSubject = '';

    if (notification.type === 'contact') {
      emailSubject = `New Contact Form Submission${notification.subject ? `: ${notification.subject}` : ''}`;
      emailContent = `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${notification.name}</p>
        <p><strong>Email:</strong> ${notification.email}</p>
        ${notification.subject ? `<p><strong>Subject:</strong> ${notification.subject}</p>` : ''}
        <p><strong>Message:</strong></p>
        <p>${notification.message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This message was sent from the Sir Ole VVIP Protocol website contact form.</em></p>
      `;
    } else if (notification.type === 'meeting') {
      emailSubject = 'New VVIP Consultation Request';
      emailContent = `
        <h2>New VVIP Consultation Request</h2>
        <p><strong>Name:</strong> ${notification.fullName}</p>
        <p><strong>Email:</strong> ${notification.email}</p>
        <p><strong>Phone:</strong> ${notification.phone}</p>
        ${notification.eventType ? `<p><strong>Event Type:</strong> ${notification.eventType}</p>` : ''}
        ${notification.eventDate ? `<p><strong>Preferred Event Date:</strong> ${notification.eventDate}</p>` : ''}
        ${notification.location ? `<p><strong>Location:</strong> ${notification.location}</p>` : ''}
        ${notification.protocolOfficers ? `<p><strong>Protocol Officers Needed:</strong> ${notification.protocolOfficers}</p>` : ''}
        ${notification.vision ? `<p><strong>Vision/Requirements:</strong></p><p>${notification.vision.replace(/\n/g, '<br>')}</p>` : ''}
        <hr>
        <p><em>This request was submitted through the Sir Ole VVIP Protocol booking system.</em></p>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "Sir Ole VVIP Protocol <onboarding@resend.dev>",
      to: ["info@sirolevvipprotocolltd.co.ke"],
      subject: emailSubject,
      html: emailContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-notifications function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
