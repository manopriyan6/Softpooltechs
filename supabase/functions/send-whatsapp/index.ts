import { corsHeaders } from '../_shared/cors.ts';

interface WhatsAppMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, subject, message }: WhatsAppMessage = await req.json();

    const whatsappMessage = `
New Contact Form Submission:
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
    `.trim();

    const response = await fetch('https://softpool.in/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        number: '919385661495',
        type: 'text',
        message: whatsappMessage,
        instance_id: '682C6B9A4D9D8',
        access_token: '660f1622e1665'
      })
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
    });
  }
});