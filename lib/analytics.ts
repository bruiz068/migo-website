// Google Analytics 4 Configuration
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}

// Track custom events
export const event = (action: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, parameters)
  }
}

// Predefined events for Migo Advertisement
export const trackEvents = {
  // Lead generation events
  contactFormSubmit: (inquiryType: string) => 
    event('contact_form_submit', {
      event_category: 'lead_generation',
      inquiry_type: inquiryType,
      value: 1
    }),

  driverApplicationStart: () =>
    event('driver_application_start', {
      event_category: 'driver_acquisition',
      value: 1
    }),

  pricingPageView: () =>
    event('pricing_page_view', {
      event_category: 'engagement',
      value: 1
    }),

  // Business engagement events
  quoteRequest: (serviceType: string) =>
    event('quote_request', {
      event_category: 'lead_generation',
      service_type: serviceType,
      value: 1
    }),

  phoneClick: () =>
    event('phone_click', {
      event_category: 'contact',
      value: 1
    }),

  emailClick: () =>
    event('email_click', {
      event_category: 'contact',
      value: 1
    }),

  // Navigation events
  navigationClick: (page: string) =>
    event('navigation_click', {
      event_category: 'navigation',
      page_name: page
    }),

  // Video engagement
  demoVideoPlay: () =>
    event('demo_video_play', {
      event_category: 'engagement',
      value: 1
    }),

  demoVideoComplete: () =>
    event('demo_video_complete', {
      event_category: 'engagement',
      value: 1
    }),

  // Download events
  downloadPriceSheet: () =>
    event('download_price_sheet', {
      event_category: 'content_download',
      value: 1
    }),

  // FAQ engagement
  faqExpand: (question: string) =>
    event('faq_expand', {
      event_category: 'engagement',
      question_topic: question
    }),

  // Service area interest
  serviceAreaCheck: (city: string) =>
    event('service_area_check', {
      event_category: 'geographic_interest',
      city: city
    })
}

// Declare gtag type for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
