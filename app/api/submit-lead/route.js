import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    // Build the data object exactly as shown in the curl example
    const dataToSend = {
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      timestamp: new Date().toISOString(),
      source: 'Production AI Website'
    };
    
    console.log('Sending to Zapier:', JSON.stringify(dataToSend));
    
    // Send to Zapier webhook as JSON (matching the curl example)
    const zapierResponse = await fetch('https://hooks.zapier.com/hooks/catch/16697629/uy70dor/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend)
    });
    
    // Log the response for debugging
    const responseText = await zapierResponse.text();
    console.log('Zapier response status:', zapierResponse.status);
    console.log('Zapier response:', responseText);
    
    if (!zapierResponse.ok) {
      throw new Error(`Zapier webhook failed: ${responseText}`);
    }
    
    // Return success response
    return NextResponse.json(
      { success: true, message: 'Lead submitted successfully' },
      { status: 200 }
    );
    
  } catch (error) {
    console.error('Lead submission error:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to submit lead' },
      { status: 500 }
    );
  }
}