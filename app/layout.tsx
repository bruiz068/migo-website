import './globals.css'
import Script from 'next/script'
import type { Metadata } from 'next'
import Analytics from './components/Analytics'

export const metadata: Metadata = {
  title: {
    default: 'Migo Advertisement - Mobile Billboard Advertising for Rideshare Vehicles',
    template: '%s | Migo Advertisement'
  },
  description: 'Transform your rideshare vehicle into a mobile billboard with Migo Advertisement. Earn extra income while driving in Phoenix, Arizona. Professional tablet advertising system with GPS tracking.',
  keywords: [
    'mobile billboard advertising',
    'rideshare advertising',
    'Phoenix advertising',
    'tablet advertising',
    'driver income',
    'mobile marketing',
    'billboard advertising',
    'Arizona advertising',
    'vehicle advertising',
    'digital billboards',
    'outdoor advertising',
    'Uber advertising',
    'Lyft advertising'
  ],
  authors: [{ name: 'Migo Advertisement LLC' }],
  creator: 'Migo Advertisement LLC',
  publisher: 'Migo Advertisement LLC',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://migonow.com',
    siteName: 'Migo Advertisement',
    title: 'Migo Advertisement - Mobile Billboard Advertising for Rideshare Vehicles',
    description: 'Transform your rideshare vehicle into a mobile billboard with Migo Advertisement. Earn extra income while driving in Phoenix, Arizona.',
    images: [
      {
        url: 'https://i.imgur.com/clZNuAZ.png',
        width: 1200,
        height: 630,
        alt: 'Migo Advertisement - Mobile Billboard Advertising',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Migo Advertisement - Mobile Billboard Advertising',
    description: 'Transform your rideshare vehicle into a mobile billboard. Earn extra income while driving in Phoenix, Arizona.',
    images: ['https://i.imgur.com/clZNuAZ.png'],
    creator: '@MigoAdvertisement',
  },
  verification: {
    google: 'verification-code-placeholder',
  },
  alternates: {
    canonical: 'https://migonow.com',
  },
  category: 'Advertising Technology',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <Script
          id="structured-data"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Migo Advertisement LLC",
              "image": "https://i.imgur.com/clZNuAZ.png",
              "description": "Mobile billboard advertising for rideshare vehicles in Phoenix, Arizona. Transform your vehicle into a mobile billboard and earn extra income while driving.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Phoenix",
                "addressRegion": "AZ",
                "addressCountry": "US"
              },
              "telephone": "+1-480-647-2380",
              "email": "bernardo@migonow.com",
              "url": "https://migonow.com",
              "founder": {
                "@type": "Person",
                "name": "Bernardo Ruiz"
              },
              "foundingDate": "2024",
              "industry": "Advertising Technology",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 33.4484,
                  "longitude": -112.0740
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Mobile Billboard Advertising Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "name": "Driver Partnership Program",
                    "description": "Earn $200-400 per month by displaying ads on your rideshare vehicle"
                  },
                  {
                    "@type": "Offer", 
                    "name": "Business Advertising Solutions",
                    "description": "Mobile billboard advertising starting at $0.140 CPI for local businesses"
                  }
                ]
              }
            })
          }}
        />
        
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        
        {/* Microsoft Clarity */}
        {process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
            `}
          </Script>
        )}
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://i.imgur.com" />
        
        {/* Favicon and App Icons */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="theme-color" content="#1a1a1a" />
        <meta name="msapplication-TileColor" content="#1a1a1a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body>
        <Analytics />
        {children}
      </body>
    </html>
  )
}
