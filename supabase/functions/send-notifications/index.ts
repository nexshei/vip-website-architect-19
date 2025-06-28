
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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

interface CareerNotification {
  type: 'career';
  fullName: string;
  email: string;
  phone: string;
  coverLetter: string;
  hasResume?: boolean;
  hasPhoto?: boolean;
}

interface VvipNotification {
  type: 'vvip';
  fullName: string;
  email: string;
  phone: string;
  eventDate?: string;
  eventType?: string;
  serviceType?: string;
  location?: string;
  protocolOfficers?: string;
  requirements?: string;
}

interface NewsletterNotification {
  type: 'newsletter';
  email: string;
}

const handler = async (req: Request): Promise<Response> => {
  console.log("Send notifications function called");
  
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const notification: ContactNotification | MeetingNotification | CareerNotification | VvipNotification | NewsletterNotification = await req.json();
    console.log("Received notification:", notification);
    
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
    } else if (notification.type === 'career') {
      emailSubject = 'New Career Application Submission';
      emailContent = `
        <h2>New Career Application</h2>
        <p><strong>Name:</strong> ${notification.fullName}</p>
        <p><strong>Email:</strong> ${notification.email}</p>
        <p><strong>Phone:</strong> ${notification.phone}</p>
        <p><strong>Resume Attached:</strong> ${notification.hasResume ? 'Yes' : 'No'}</p>
        <p><strong>Photo Attached:</strong> ${notification.hasPhoto ? 'Yes' : 'No'}</p>
        <p><strong>Cover Letter:</strong></p>
        <p>${notification.coverLetter.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>This application was submitted through the Sir Ole VVIP Protocol career portal.</em></p>
      `;
    } else if (notification.type === 'vvip') {
      emailSubject = 'New VVIP Service Request';
      emailContent = `
        <h2>New VVIP Service Request</h2>
        <p><strong>Name:</strong> ${notification.fullName}</p>
        <p><strong>Email:</strong> ${notification.email}</p>
        <p><strong>Phone:</strong> ${notification.phone}</p>
        ${notification.eventDate ? `<p><strong>Event Date:</strong> ${notification.eventDate}</p>` : ''}
        ${notification.eventType ? `<p><strong>Event Type:</strong> ${notification.eventType}</p>` : ''}
        ${notification.serviceType ? `<p><strong>Service Type:</strong> ${notification.serviceType}</p>` : ''}
        ${notification.location ? `<p><strong>Location:</strong> ${notification.location}</p>` : ''}
        ${notification.protocolOfficers ? `<p><strong>Protocol Officers:</strong> ${notification.protocolOfficers}</p>` : ''}
        ${notification.requirements ? `<p><strong>Requirements:</strong></p><p>${notification.requirements.replace(/\n/g, '<br>')}</p>` : ''}
        <hr>
        <p><em>This request was submitted through the VVIP Service Request form.</em></p>
      `;
    } else if (notification.type === 'newsletter') {
      emailSubject = 'New Newsletter Subscription';
      emailContent = `
        <h2>New Newsletter Subscription</h2>
        <p><strong>Email:</strong> ${notification.email}</p>
        <hr>
        <p><em>This subscription was made through the Sir Ole VVIP Protocol website.</em></p>
      `;
    }

    console.log("Sending email with subject:", emailSubject);

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
