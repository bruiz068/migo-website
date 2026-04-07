import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const data = await request.json()
    const { firstName, lastName, email, company, message } = data
    
    console.log('Contact form submitted:', { firstName, lastName, email, company })

    // Only proceed with email/API calls if environment variables are configured
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.log('Email not configured, storing form data only')
      return NextResponse.json({ 
        ok: true, 
        message: 'Thank you for your message! We will get back to you soon.' 
      })
    }

    // Submit to ActiveCampaign first
    try {
      const activeCampaignResponse = await fetch(`${process.env.ACTIVECAMPAIGN_API_URL}/api/3/contacts`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Api-Token': process.env.ACTIVECAMPAIGN_API_KEY || '',
        },
        body: JSON.stringify({
          contact: {
            email: email,
            firstName: firstName,
            lastName: lastName,
            fieldValues: [
              {
                field: '1', // Assuming field ID 1 is company
                value: company || ''
              },
              {
                field: '2', // Assuming field ID 2 is message  
                value: message
              }
            ]
          }
        })
      })
      
      if (activeCampaignResponse.ok) {
        console.log('Successfully submitted to ActiveCampaign')
      } else {
        console.error('ActiveCampaign submission failed:', await activeCampaignResponse.text())
      }
    } catch (acError) {
      console.error('ActiveCampaign API error:', acError)
      // Continue with email sending even if ActiveCampaign fails
    }

    // Create Gmail transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your migonow.com Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Gmail App Password
      },
    })

    // Email content
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER, // Where to send contact form submissions
      replyTo: email, // User's email for easy reply
      subject: `Migo Ads Inquiry from ${firstName} ${lastName}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'Not provided'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Submitted from Migo Advertisement website</em></p>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)
    
    // Send confirmation email to user
    const confirmationOptions = {
      from: process.env.GMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Migo Advertisement',
      html: `
        <h2>Thank you for your interest!</h2>
        <p>Hi ${firstName},</p>
        <p>We received your message and will get back to you within 24 hours.</p>
        <p><strong>Your message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <br>
        <p>Best regards,<br>Migo Advertisement Team</p>
      `,
    }

    await transporter.sendMail(confirmationOptions)

    return NextResponse.json({ 
      ok: true, 
      message: 'Email sent successfully! Check your inbox for confirmation.' 
    })
  } catch (err) {
    console.error('Error sending email:', err)
    return NextResponse.json({ 
      ok: false, 
      error: 'Failed to send email. Please try again later.' 
    }, { status: 500 })
  }
}
