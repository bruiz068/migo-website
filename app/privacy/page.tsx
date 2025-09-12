"use client";

import Link from "next/link";
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-900/90 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="https://i.imgur.com/clZNuAZ.png?v=2" 
                alt="Migo Logo" 
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
                Advertisement
              </span>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 max-w-4xl">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Shield className="text-green-400" size={32} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
          <p className="text-white/60 text-lg">
            Last updated: September 11, 2025
          </p>
        </div>

        {/* Privacy Content */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-green-400/30 p-6 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <Lock className="text-green-400" size={20} />
              <h2 className="text-xl font-semibold text-white mb-0">Your Privacy Matters</h2>
            </div>
            <p className="text-white/80 mb-0">
              Migo Advertisement is committed to protecting your privacy and handling your personal information responsibly. This policy explains how we collect, use, and protect your data.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-green-400 mb-4">1. Information We Collect</h2>
            <div className="text-white/80 space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Personal Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Name, email address, phone number</li>
                  <li>Business information (company name, role)</li>
                  <li>Driver license and insurance information (drivers only)</li>
                  <li>Payment and banking details</li>
                </ul>
              </div>
              
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Technical Information</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>GPS location data (for advertisement tracking)</li>
                  <li>Device information and tablet performance data</li>
                  <li>Website usage analytics</li>
                  <li>IP address and browser information</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">2. How We Use Your Information</h2>
            <div className="text-white/80 space-y-3">
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Provide Services:</strong> Manage mobile billboard advertising campaigns</li>
                <li><strong>Driver Management:</strong> Track performance, calculate earnings, process payments</li>
                <li><strong>Advertiser Services:</strong> Campaign reporting, performance analytics, billing</li>
                <li><strong>Communication:</strong> Service updates, support, and promotional materials</li>
                <li><strong>Compliance:</strong> Meet legal requirements and prevent fraud</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">3. Data Sharing and Disclosure</h2>
            <div className="text-white/80 space-y-4">
              <div className="bg-red-900/20 border border-red-400/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-400 mb-2">We DO NOT sell your personal information</h3>
                <p>Your data is never sold to third parties for marketing purposes.</p>
              </div>
              
              <p>We may share information with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> Payment processors, cloud hosting, analytics</li>
                <li><strong>Legal Requirements:</strong> When required by law or legal process</li>
                <li><strong>Business Partners:</strong> Rideshare platforms (driver verification only)</li>
                <li><strong>Aggregated Data:</strong> Anonymous statistics for performance reporting</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. Location Data and Tracking</h2>
            <div className="text-white/80 space-y-3">
              <p><strong>Driver Location:</strong> GPS tracking is essential for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Advertisement impression counting</li>
                <li>Route verification and earnings calculation</li>
                <li>Performance reporting to advertisers</li>
                <li>Equipment security and recovery</li>
              </ul>
              <p><strong>Data Retention:</strong> Location data is retained for 12 months for reporting and audit purposes.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">5. Data Security</h2>
            <div className="text-white/80 space-y-3">
              <p>We protect your information using:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>SSL encryption for all data transmission</li>
                <li>Secure cloud storage with access controls</li>
                <li>Regular security audits and updates</li>
                <li>Limited employee access on need-to-know basis</li>
                <li>Multi-factor authentication for admin accounts</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">6. Your Rights and Choices</h2>
            <div className="text-white/80 space-y-3">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request copies of your personal data</li>
                <li><strong>Correct:</strong> Update or correct inaccurate information</li>
                <li><strong>Delete:</strong> Request deletion of your data (subject to legal requirements)</li>
                <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                <li><strong>Data Portability:</strong> Receive your data in a portable format</li>
              </ul>
              <p className="mt-4">
                <strong>Important:</strong> Drivers cannot opt-out of location tracking while active, as it's essential for service operation.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-green-400 mb-4">7. Cookies and Analytics</h2>
            <div className="text-white/80 space-y-3">
              <p>We use cookies and similar technologies for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Website functionality and user preferences</li>
                <li>Analytics to improve our services</li>
                <li>Authentication and security</li>
                <li>Performance monitoring</li>
              </ul>
              <p>You can control cookies through your browser settings.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">8. Data Retention</h2>
            <div className="text-white/80 space-y-3">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Driver Data:</strong> Retained for 3 years after service ends</li>
                <li><strong>Advertiser Data:</strong> Retained for 7 years for tax/accounting purposes</li>
                <li><strong>Location Data:</strong> 12 months for reporting and analytics</li>
                <li><strong>Website Analytics:</strong> 24 months for service improvement</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">9. Third-Party Services</h2>
            <div className="text-white/80 space-y-3">
              <p>We use trusted third-party services:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Payment Processing:</strong> Stripe, PayPal (PCI compliant)</li>
                <li><strong>Cloud Storage:</strong> AWS, Google Cloud (SOC 2 certified)</li>
                <li><strong>Analytics:</strong> Google Analytics (anonymized data)</li>
                <li><strong>Email Services:</strong> Professional email providers</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">10. Updates to This Policy</h2>
            <div className="text-white/80 space-y-3">
              <p>We may update this privacy policy to reflect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Changes in our services or business practices</li>
                <li>Legal or regulatory requirements</li>
                <li>Enhanced security measures</li>
              </ul>
              <p><strong>Notice:</strong> We'll provide 30-day advance notice of material changes via email.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">11. Contact Us</h2>
            <div className="text-white/80 space-y-3">
              <p>For privacy-related questions or requests:</p>
              <div className="bg-gray-900/50 rounded-lg p-4">
                <ul className="list-none space-y-2">
                  <li><strong>Privacy Officer:</strong> Bernardo Ruiz</li>
                  <li><strong>Email:</strong> bernardo@migonow.com</li>
                  <li><strong>Phone:</strong> 480-647-2380</li>
                  <li><strong>Business:</strong> Migo Advertisement LLC</li>
                  <li><strong>Response Time:</strong> Within 30 days of request</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <ArrowLeft size={16} />
              Return to Homepage
            </Link>
            <div className="flex gap-4">
              <Link href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-pink-400 hover:text-pink-300 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
