"use client";

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { pageview } from '../../lib/analytics'

export default function Analytics() {
  const pathname = usePathname()

  useEffect(() => {
    // Track page views on route changes
    pageview(pathname)
  }, [pathname])

  useEffect(() => {
    // Performance monitoring
    if (typeof window !== 'undefined') {
      // Core Web Vitals tracking
      const trackWebVital = (metric: any) => {
        if (window.gtag) {
          window.gtag('event', metric.name, {
            event_category: 'Web Vitals',
            value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
            event_label: metric.id,
            non_interaction: true,
          })
        }
      }

      // Track page load performance
      window.addEventListener('load', () => {
        // Track page load time
        const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
        if (window.gtag && loadTime > 0) {
          window.gtag('event', 'page_load_time', {
            event_category: 'Performance',
            value: loadTime,
            non_interaction: true,
          })
        }

        // Track First Contentful Paint
        const paintEntries = performance.getEntriesByType('paint')
        const fcpEntry = paintEntries.find(entry => entry.name === 'first-contentful-paint')
        if (fcpEntry && window.gtag) {
          window.gtag('event', 'first_contentful_paint', {
            event_category: 'Performance',
            value: Math.round(fcpEntry.startTime),
            non_interaction: true,
          })
        }
      })

      // Track user engagement time
      let startTime = Date.now()
      const trackEngagement = () => {
        const engagementTime = Date.now() - startTime
        if (window.gtag && engagementTime > 10000) { // Only track if user stayed more than 10 seconds
          window.gtag('event', 'engagement_time', {
            event_category: 'Engagement',
            value: Math.round(engagementTime / 1000), // Convert to seconds
            non_interaction: true,
          })
        }
      }

      // Track when user leaves the page
      window.addEventListener('beforeunload', trackEngagement)
      
      // Track when user becomes inactive
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'hidden') {
          trackEngagement()
          startTime = Date.now() // Reset start time
        }
      })

      // Error tracking
      window.addEventListener('error', (event) => {
        if (window.gtag) {
          window.gtag('event', 'javascript_error', {
            event_category: 'Error',
            event_label: event.message,
            value: 1,
            non_interaction: true,
          })
        }
      })

      // Unhandled promise rejection tracking
      window.addEventListener('unhandledrejection', (event) => {
        if (window.gtag) {
          window.gtag('event', 'promise_rejection', {
            event_category: 'Error',
            event_label: event.reason?.toString() || 'Unknown error',
            value: 1,
            non_interaction: true,
          })
        }
      })
    }
  }, [])

  return null // This component doesn't render anything
}
