"use client";

import Link from "next/link";
import { ArrowLeft, Shield, Lock, MessageSquare, BarChart2, Mail } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-neutral-900/95 via-purple-900/30 to-pink-900/30 backdrop-blur">
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
          <p className="text-white/60 text-lg">Last updated: April 24, 2026</p>
          <p className="text-white/50 text-sm mt-1">Effective: April 24, 2026</p>
        </div>

        {/* Plain-English Summary */}
        <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-green-400/30 p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Lock className="text-green-400" size={20} />
            <h2 className="text-xl font-semibold text-white mb-0">Plain-English Summary</h2>
          </div>
          <ul className="text-white/80 space-y-1 list-disc pl-5 mb-0">
            <li>We collect your name, email, phone, and business details when you contact us or create an account.</li>
            <li>We use Google Analytics to understand how visitors use our site — no personal info is tied to analytics data.</li>
            <li>If you opt in, we may send you SMS and email updates. You can opt out any time.</li>
            <li>We do <strong>not</strong> sell your personal information. Ever.</li>
            <li>This policy applies to U.S. residents only. Our services are not directed to children under 13.</li>
          </ul>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-900/50 rounded-xl border border-white/10 p-5 mb-10">
          <h2 className="text-lg font-semibold text-white/80 mb-3">Table of Contents</h2>
          <ol className="list-decimal pl-5 space-y-1 text-sm text-purple-300">
            <li><a href="#collect" className="hover:text-purple-200 transition-colors">Information We Collect</a></li>
            <li><a href="#use" className="hover:text-purple-200 transition-colors">How We Use Your Information</a></li>
            <li><a href="#sms" className="hover:text-purple-200 transition-colors">SMS and Email Marketing</a></li>
            <li><a href="#sharing" className="hover:text-purple-200 transition-colors">Data Sharing and Disclosure</a></li>
            <li><a href="#analytics" className="hover:text-purple-200 transition-colors">Cookies and Google Analytics</a></li>
            <li><a href="#location" className="hover:text-purple-200 transition-colors">Location Data</a></li>
            <li><a href="#retention" className="hover:text-purple-200 transition-colors">Data Retention</a></li>
            <li><a href="#security" className="hover:text-purple-200 transition-colors">Security</a></li>
            <li><a href="#rights" className="hover:text-purple-200 transition-colors">Your Rights and Choices</a></li>
            <li><a href="#children" className="hover:text-purple-200 transition-colors">Children's Privacy</a></li>
            <li><a href="#changes" className="hover:text-purple-200 transition-colors">Changes to This Policy</a></li>
            <li><a href="#contact-privacy" className="hover:text-purple-200 transition-colors">Contact Us</a></li>
          </ol>
        </div>

        <div className="prose prose-invert max-w-none">

          {/* Section 1 */}
          <section id="collect" className="mb-8">
            <h2 className="text-2xl font-bold text-green-400 mb-4">1. Information We Collect</h2>
            <div className="text-white/80 space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Information You Provide Directly</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact forms:</strong> Name, email address, phone number, company name, and message content.</li>
                  <li><strong>Account registration:</strong> Username, password (hashed), email, phone number, and business details.</li>
                  <li><strong>Driver applications:</strong> Driver's license number, vehicle information, insurance details, and banking/payment information for earnings disbursement.</li>
                  <li><strong>Advertiser onboarding:</strong> Business name, billing address, payment method, and campaign creative assets.</li>
                  <li><strong>SMS opt-in:</strong> Mobile phone number and consent record when you opt in to text message communications.</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address, browser type and version, operating system, and referring URLs.</li>
                  <li>Pages visited, time on site, and interaction events via Google Analytics (see Section 5).</li>
                  <li>Device identifiers and tablet performance data (for drivers).</li>
                  <li>GPS location data during active advertising sessions (for drivers — see Section 6).</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2">Information from QR Code Scans</h3>
                <p>When a viewer voluntarily scans a QR code displayed on one of our mobile billboards, we collect the information they submit through the linked page, along with the approximate GPS location of the scan. A clear consent notice is displayed at the point of scan.</p>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="use" className="mb-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">2. How We Use Your Information</h2>
            <div className="text-white/80 space-y-3">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service delivery:</strong> Operate and manage mobile billboard campaigns, process driver applications and payments, and fulfill advertiser contracts.</li>
                <li><strong>Account management:</strong> Create and maintain your account, authenticate logins, and provide customer support.</li>
                <li><strong>Communications:</strong> Send transactional messages (receipts, account updates), respond to inquiries, and — where you have opted in — send marketing emails and SMS messages.</li>
                <li><strong>Analytics and improvement:</strong> Understand how our site and services are used so we can make them better.</li>
                <li><strong>Billing and payments:</strong> Process invoices, manage payment methods, and maintain financial records.</li>
                <li><strong>Fraud prevention and legal compliance:</strong> Detect and prevent fraudulent activity, enforce our Terms, and comply with applicable U.S. law.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="sms" className="mb-8">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              <span className="inline-flex items-center gap-2">
                <MessageSquare size={24} />
                3. SMS and Email Marketing
              </span>
            </h2>
            <div className="text-white/80 space-y-4">
              <div className="bg-pink-900/20 border border-pink-400/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-pink-300 mb-2">Text Message (SMS) Communications</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Consent required:</strong> We only send marketing SMS messages to users who have explicitly opted in. Consent is obtained separately from any other agreement.</li>
                  <li><strong>Message frequency:</strong> Message frequency may vary. You may receive up to 4 marketing messages per month, plus transactional messages related to your account or active campaigns.</li>
                  <li><strong>Carrier fees:</strong> Message and data rates may apply depending on your carrier and plan.</li>
                  <li><strong>Opt-out:</strong> Reply <strong>STOP</strong> at any time to cancel. After opting out, you will receive one final confirmation message and no further marketing texts will be sent.</li>
                  <li><strong>Help:</strong> Reply <strong>HELP</strong> for assistance or contact us at bernardo@migonow.com.</li>
                  <li><strong>No sharing:</strong> Your mobile number collected for SMS is not shared with third parties for their own marketing purposes.</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Email Marketing</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We may send promotional emails to users who provide their email address and have not opted out.</li>
                  <li>Every marketing email contains an unsubscribe link. Click it at any time to stop receiving promotional emails.</li>
                  <li>Transactional emails (receipts, account notices, security alerts) are not marketing and will still be sent regardless of marketing opt-out status.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="sharing" className="mb-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">4. Data Sharing and Disclosure</h2>
            <div className="text-white/80 space-y-4">
              <div className="bg-red-900/20 border border-red-400/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-400 mb-2">We DO NOT sell your personal information</h3>
                <p className="mb-0">We do not sell, rent, or trade your personal data to any third party for their marketing purposes.</p>
              </div>

              <p>We may share your information only in these limited circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service providers:</strong> Vendors we use to operate our business (payment processors, cloud hosting, analytics tools, email/SMS platforms) who are contractually bound to protect your data and use it only on our behalf.</li>
                <li><strong>Advertisers (aggregated/anonymized):</strong> We provide advertisers with campaign performance reports. These reports contain aggregated, de-identified data — not individual personal information.</li>
                <li><strong>Legal requirements:</strong> If required by law, court order, or government authority, we may disclose information as legally required. We will notify you where permitted.</li>
                <li><strong>Business transfer:</strong> If Migo Advertisement LLC is acquired, merged, or its assets are transferred, your information may be transferred as part of that transaction. You will be notified in advance.</li>
                <li><strong>Protection of rights:</strong> To enforce our Terms, protect the rights or safety of Migo Advertisement, our users, or the public.</li>
              </ul>
            </div>
          </section>

          {/* Section 5 */}
          <section id="analytics" className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              <span className="inline-flex items-center gap-2">
                <BarChart2 size={24} />
                5. Cookies and Google Analytics
              </span>
            </h2>
            <div className="text-white/80 space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">Cookies We Use</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Essential cookies:</strong> Required for the website to function (session management, authentication). Cannot be disabled.</li>
                  <li><strong>Analytics cookies:</strong> Used by Google Analytics to collect anonymized data about how visitors use our site (pages visited, time on site, browser type). This data does not identify you personally.</li>
                  <li><strong>Preference cookies:</strong> Remember your settings and preferences for a better experience.</li>
                </ul>
              </div>

              <div className="bg-blue-900/20 border border-blue-400/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-300 mb-2">Google Analytics</h3>
                <p>We use Google Analytics (provided by Google LLC) to understand how visitors interact with our website. Google Analytics collects information such as how often users visit the site, what pages they visit, and what other sites they used prior to arriving. We use this information to improve migonow.com.</p>
                <p className="mt-2">Google Analytics collects only the IP address assigned to you on the date you visit our site, not your name or other identifying information. We do not combine the information collected through Google Analytics with personally identifiable information.</p>
                <p className="mt-2">
                  You can opt out of Google Analytics by installing the{" "}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 underline"
                  >
                    Google Analytics Opt-out Browser Add-on
                  </a>
                  . You can also manage cookie preferences through your browser settings.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="location" className="mb-8">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">6. Location Data</h2>
            <div className="text-white/80 space-y-3">
              <p>GPS location data is collected exclusively from drivers who participate in active advertising campaigns. This data is used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Count and verify advertisement impressions by geographic area.</li>
                <li>Calculate driver earnings based on verified route data.</li>
                <li>Generate anonymized performance reports for advertisers (no driver-identifying information is included in advertiser reports).</li>
                <li>Recover or secure equipment in the event of theft or loss.</li>
              </ul>
              <p><strong>Active-session only:</strong> Location tracking is active only while a driver's session is running. Drivers cannot opt out of location tracking during active campaigns, as it is technically required to provide the service.</p>
              <p><strong>Retention:</strong> Location data is retained for 12 months, then permanently deleted.</p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="retention" className="mb-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">7. Data Retention</h2>
            <div className="text-white/80">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact form inquiries:</strong> 2 years from last contact, then deleted.</li>
                  <li><strong>Account data (active):</strong> Retained for the life of the account.</li>
                  <li><strong>Account data (closed):</strong> Retained for 3 years after account closure, then deleted.</li>
                  <li><strong>Driver records:</strong> Retained for 3 years after the driver's last active campaign.</li>
                  <li><strong>Advertiser billing records:</strong> Retained for 7 years to comply with U.S. tax and accounting requirements.</li>
                  <li><strong>Location data:</strong> 12 months from collection date.</li>
                  <li><strong>Google Analytics data:</strong> 26 months (per Google's default retention setting).</li>
                  <li><strong>SMS opt-in/opt-out records:</strong> Retained for 4 years to demonstrate compliance.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 8 */}
          <section id="security" className="mb-8">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">8. Security</h2>
            <div className="text-white/80 space-y-3">
              <p>We implement reasonable administrative, technical, and physical safeguards to protect your information, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>TLS/SSL encryption for all data in transit.</li>
                <li>Hashed storage of passwords (never stored in plain text).</li>
                <li>Role-based access controls — employees access only what their role requires.</li>
                <li>Multi-factor authentication for administrative accounts.</li>
                <li>Regular security reviews and software updates.</li>
              </ul>
              <p className="mt-2 text-white/60 text-sm">No method of transmission over the internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.</p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="rights" className="mb-8">
            <h2 className="text-2xl font-bold text-green-400 mb-4">9. Your Rights and Choices</h2>
            <div className="text-white/80 space-y-3">
              <p>Regardless of which U.S. state you are in, you may:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Correct:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Delete:</strong> Request deletion of your personal data, subject to legal retention obligations (e.g., tax records).</li>
                <li><strong>Opt out of marketing SMS:</strong> Reply STOP to any SMS message at any time.</li>
                <li><strong>Opt out of marketing email:</strong> Click the unsubscribe link in any marketing email.</li>
                <li><strong>Data portability:</strong> Request your data in a common machine-readable format.</li>
              </ul>
              <div className="bg-yellow-900/20 border border-yellow-400/30 rounded-lg p-4 mt-4">
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">California Residents (CCPA)</h3>
                <p>California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what categories of personal information we collect and disclose, the right to opt out of the "sale" of personal information (we do not sell), and the right to non-discrimination for exercising your rights. To submit a CCPA request, contact us at the email below.</p>
              </div>
              <p className="mt-3">To exercise any of these rights, email <a href="mailto:bernardo@migonow.com" className="text-green-400 hover:text-green-300 underline">bernardo@migonow.com</a> with the subject line <em>"Privacy Request."</em> We will respond within 30 days.</p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="children" className="mb-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">10. Children's Privacy</h2>
            <div className="text-white/80 space-y-3">
              <p>Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will delete that information promptly. If you believe a child has provided us personal information, please contact us at bernardo@migonow.com.</p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="changes" className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">11. Changes to This Policy</h2>
            <div className="text-white/80 space-y-3">
              <p>We may update this Privacy Policy from time to time. When we make material changes, we will:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Update the "Last updated" date at the top of this page.</li>
                <li>Send a notice to the email address on file at least 30 days before the change takes effect.</li>
                <li>For significant changes, request renewed consent where required by law.</li>
              </ul>
              <p>Your continued use of our website or services after the effective date of any update constitutes your acceptance of the revised policy.</p>
            </div>
          </section>

          {/* Section 12 */}
          <section id="contact-privacy" className="mb-8">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              <span className="inline-flex items-center gap-2">
                <Mail size={22} />
                12. Contact Us
              </span>
            </h2>
            <div className="text-white/80 space-y-3">
              <p>For privacy-related questions, requests, or concerns:</p>
              <div className="bg-gray-900/50 rounded-lg p-5">
                <ul className="list-none space-y-2">
                  <li><strong>Business:</strong> Migo Advertisement LLC</li>
                  <li><strong>Privacy Contact:</strong> Bernardo Ruiz</li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:bernardo@migonow.com" className="text-pink-400 hover:text-pink-300 underline">
                      bernardo@migonow.com
                    </a>
                  </li>
                  <li><strong>Phone:</strong> 480-647-2380</li>
                  <li><strong>Mailing Address:</strong> 34293 S Bertha St, Black Canyon City, Arizona 85324</li>
                  <li><strong>Response time:</strong> Within 30 days of receipt</li>
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
                Terms &amp; Conditions
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
