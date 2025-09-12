import Script from 'next/script'

interface LocalBusinessSchemaProps {
  name: string
  description: string
  address?: {
    streetAddress?: string
    addressLocality: string
    addressRegion: string
    postalCode?: string
    addressCountry: string
  }
  telephone?: string
  email?: string
  url?: string
  image?: string
  priceRange?: string
  serviceArea?: {
    latitude: number
    longitude: number
    radius: number
  }
}

export default function LocalBusinessSchema({
  name,
  description,
  address,
  telephone,
  email,
  url,
  image,
  priceRange,
  serviceArea
}: LocalBusinessSchemaProps) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": name,
    "description": description,
    "image": image,
    "telephone": telephone,
    "email": email,
    "url": url,
    "priceRange": priceRange,
    "address": address ? {
      "@type": "PostalAddress",
      ...address
    } : undefined,
    "serviceArea": serviceArea ? {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": serviceArea.latitude,
        "longitude": serviceArea.longitude
      },
      "geoRadius": serviceArea.radius.toString()
    } : undefined
  }

  // Remove undefined values
  const cleanSchemaData = JSON.parse(JSON.stringify(schemaData))

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(cleanSchemaData)
      }}
    />
  )
}
