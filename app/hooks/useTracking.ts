"use client";

import { useCallback } from 'react'
import { trackEvents } from '../../lib/analytics'

export function useTracking() {
  const trackContactForm = useCallback((inquiryType: string) => {
    trackEvents.contactFormSubmit(inquiryType)
  }, [])

  const trackDriverApplication = useCallback(() => {
    trackEvents.driverApplicationStart()
  }, [])

  const trackQuoteRequest = useCallback((serviceType: string) => {
    trackEvents.quoteRequest(serviceType)
  }, [])

  const trackPhoneClick = useCallback(() => {
    trackEvents.phoneClick()
  }, [])

  const trackEmailClick = useCallback(() => {
    trackEvents.emailClick()
  }, [])

  const trackNavigation = useCallback((page: string) => {
    trackEvents.navigationClick(page)
  }, [])

  const trackVideoPlay = useCallback(() => {
    trackEvents.demoVideoPlay()
  }, [])

  const trackVideoComplete = useCallback(() => {
    trackEvents.demoVideoComplete()
  }, [])

  const trackPriceSheetDownload = useCallback(() => {
    trackEvents.downloadPriceSheet()
  }, [])

  const trackFAQExpand = useCallback((question: string) => {
    trackEvents.faqExpand(question)
  }, [])

  const trackServiceAreaCheck = useCallback((city: string) => {
    trackEvents.serviceAreaCheck(city)
  }, [])

  return {
    trackContactForm,
    trackDriverApplication,
    trackQuoteRequest,
    trackPhoneClick,
    trackEmailClick,
    trackNavigation,
    trackVideoPlay,
    trackVideoComplete,
    trackPriceSheetDownload,
    trackFAQExpand,
    trackServiceAreaCheck
  }
}
