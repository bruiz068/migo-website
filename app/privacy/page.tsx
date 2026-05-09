"use client";

import Image from "next/image";
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
              <Image
                src="https://i.imgur.com/clZNuAZ.png?v=2"
                alt="Migo Logo"
                width={200}
                height={48}
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
          <p className="text-white/60 text-lg">Last updated: May 5, 2026</p>
          <p className="text-white/50 text-sm mt-1">Effective: May 5, 2026</p>
        </div>

        {/* Plain-English Summary */}
        <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-green-400/30 p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Lock className="text-green-400" size={20} />
            <h2 className="text-xl font-semibold text-white mb-0">Plain-English Summary</h2>
          </div>
          <ul className="text-white/80 space-y-1 list-disc pl-5 mb-0">
            <li>We collect your name, email, phone, and business details when you contact us, create an account, or sign up for our services.</li>
            <li>We use Google Analytics to understand how visitors use our site — no personal info is tied to analytics data.</li>
            <li>If you opt in, we may send you SMS and email updates. You can opt out any time.</li>
            <li>If you operate a business using our Sofia AI voice agent, we use your business phone number only to send you call summaries and service notifications — never to market to you, and never shared with anyone.</li>
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
            <li><a href="#sms" className="hover:text-purple-200 transition-colors">Marketing Communications (SMS and Email)</a></li>
            <li><a href="#sofia" className="hover:text-purple-200 transition-colors">Sofia AI Voice Agent — Service Notifications</a></li>
            <li><a href="#sharing" className="hover:text-purple-200 transition-colors">Data Sharing and Disclosure</a></li>
            <li><a href="#analytics" className="hover:text-purple-200 transition-colors">Cookies and Google Analytics</a></li>
            <li><a href="#location" className="hover:text-purple-200 transition-colors">Location Data</a></li>
            <li><a href="#retention" className="hover:text-purple-200 transition-colors">Data Retention</a></li>
            <li><a href="#security" className="hover:text-purple-200 transition-colors">Security</a></li>
            <li><a href="#rights" className="hover:text-purple-200 transition-colors">Your Rights and Choices</a></li>
            <li><a href="#children" className="hover:text-purple-200 transition-colors">Children&apos;s Privacy</a></li>
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
                  <li><strong>Driver applications:</strong> Driver&apos;s license number, vehicle information, insurance details, and banking/payment information for earnings disbursement.</li>
                  <li><strong>Advertiser onboarding:</strong> Business name, billing address, payment method, and campaign creative assets.</li>
                  <li><strong>Sofia AI client onboarding:</strong> Business name, operator name, business phone number, listing or service information, and service-agreement records.</li>
                  <li><strong>SMS opt-in:</strong> Mobile phone number and consent record when you opt in to text message communications.</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Information Collected Automatically</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>IP address, browser type and version, operating system, and referring URLs.</li>
                  <li>Pages visited, time on site, and interaction events via Google Analytics (see Section 6).</li>
                  <li>Device identifiers and tablet performance data (for drivers).</li>
                  <li>GPS location data during active advertising sessions (for drivers — see Section 7).</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-sky-400 mb-2">Information from Inbound Phone Calls (Sofia AI)</h3>
                <p>When a consumer calls a phone number routed through our Sofia AI voice agent on behalf of a business operator, we collect the caller&apos;s phone number, the audio of the call, an automated transcript of the call, and any information the caller voluntarily provides during the call (such as name, callback preference, or inquiry details). This information is used to generate a call summary that is sent to the business operator who deployed Sofia. Callers are not added to any marketing list and never receive SMS messages from Sofia.</p>
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
                <li><strong>Service delivery:</strong> Operate and manage mobile billboard campaigns, process driver applications and payments, fulfill advertiser contracts, and operate the Sofia AI voice agent service for business clients.</li>
                <li><strong>Account management:</strong> Create and maintain your account, authenticate logins, and provide customer support.</li>
                <li><strong>Communications:</strong> Send transactional messages (receipts, account updates, Sofia AI call summaries), respond to inquiries, and — where you have opted in — send marketing emails and SMS messages.</li>
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
                3. Marketing Communications (SMS and Email)
              </span>
            </h2>
            <div className="text-white/80 space-y-4">
              <div className="bg-pink-900/20 border border-pink-400/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-pink-300 mb-2">Marketing Text Messages (SMS)</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Consent required:</strong> We only send marketing SMS messages to users who have explicitly opted in. Consent is obtained separately from any other agreement and is not a condition of any purchase.</li>
                  <li><strong>Message frequency:</strong> Message frequency may vary. You may receive up to 4 marketing messages per month.</li>
                  <li><strong>Carrier fees:</strong> Message and data rates may apply depending on your carrier and plan.</li>
                  <li><strong>Opt-out:</strong> Reply <strong>STOP</strong> at any time to cancel. After opting out, you will receive one final confirmation message and no further marketing texts will be sent.</li>
                  <li><strong>Help:</strong> Reply <strong>HELP</strong> for assistance or contact us at bernardo@migonow.com.</li>
                  <li><strong>No sharing:</strong> No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">Email Marketing</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We may send promotional emails to users who provide their email address and have not opted out.</li>
                  <li>Every marketing email contains an unsubscribe link. Click it at any time to stop receiving promotional emails.</li>
                  <li>Transactional emails (receipts, account notices, security alerts, Sofia AI call summaries) are not marketing and will still be sent regardless of marketing opt-out status.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="sofia" className="mb-8">
            <h2 className="text-2xl font-bold text-sky-400 mb-4">
              <span className="inline-flex items-center gap-2">
                <MessageSquare size={24} />
                4. Sofia AI Voice Agent — Service Notifications
              </span>
            </h2>
            <div className="text-white/80 space-y-4">
              <p>Sofia AI is an automated voice agent operated by Migo Advertisement LLC that answers business phone calls on behalf of clients (real estate agents and other small businesses) and sends SMS notifications summarizing each call to the business operator. The notifications described in this section are transactional / service messages, not marketing.</p>

              <div className="bg-sky-900/20 border border-sky-400/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-sky-300 mb-2">Who Receives Sofia AI SMS Notifications</h3>
                <p className="mb-0">Only the business operator (the client who has signed a Sofia AI service agreement and provided express written consent to receive these notifications) receives SMS messages from Sofia. End consumers who call into the Sofia AI system do not receive any SMS messages from us.</p>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-blue-400 mb-2">What Is Sent</h3>
                <p>AI-generated summaries of inbound phone calls received by Sofia on the operator&apos;s behalf, including: caller name, callback number, lead intent, listing or service of interest, and recommended next steps. Frequency varies based on the operator&apos;s call volume — typically 1 to 20 messages per day.</p>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-purple-400 mb-2">How Consent Is Obtained</h3>
                <p>
                  Operators provide affirmative SMS consent through a dedicated, standalone consent step at{" "}
                  <Link href="/sofia-sms-consent" className="text-sky-400 hover:text-sky-300 underline">
                    https://migonow.com/sofia-sms-consent
                  </Link>
                  . SMS consent is obtained separately from the Sofia AI service agreement and is a single-purpose authorization for SMS messaging only. Operators must check a dedicated, unchecked-by-default consent box that is not bundled with any other agreement, terms acceptance, or marketing checkbox. The page displays the following SMS consent disclosure directly above the consent box:
                </p>
                <blockquote className="border-l-4 border-sky-400/50 pl-4 mt-3 text-white/70 italic">
                  &ldquo;By checking the box and submitting this form, you agree to receive recurring automated SMS text messages from Migo Advertisement LLC, sent through the Sofia AI service, at the mobile number you provide. These messages contain AI-generated summaries of inbound phone calls answered by Sofia on your behalf. Message frequency varies based on call volume — typically 1 to 20 messages per day. Message and data rates may apply. Reply STOP at any time to unsubscribe. Reply HELP for help. Consent to receive SMS is not a condition of any purchase or service.&rdquo;
                </blockquote>
                <p className="mt-3">
                  After consent is captured, the operator immediately receives a confirmation SMS. The consent record (timestamp, IP address, mobile number, and the disclosure text shown to the operator) is retained for at least four (4) years to demonstrate compliance with carrier and TCPA recordkeeping requirements.
                </p>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-pink-400 mb-2">Opt-Out</h3>
                <p>Reply <strong>STOP</strong> to any Sofia AI SMS message to immediately stop all future notifications. After opting out, you will receive one final confirmation message and no further notifications will be sent. You may also email bernardo@migonow.com to disable SMS notifications and switch to email-only delivery.</p>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-400 mb-2">Help</h3>
                <p>Reply <strong>HELP</strong> to any Sofia AI SMS message, or contact{" "}
                  <a href="mailto:bernardo@migonow.com" className="text-green-400 hover:text-green-300 underline">bernardo@migonow.com</a>{" "}
                  or 480-647-2380 for assistance.
                </p>
              </div>

              <div className="bg-red-900/20 border border-red-400/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-400 mb-2">Data Sharing</h3>
                <p className="mb-0">Phone numbers, SMS opt-in records, and call data collected through the Sofia AI service are never sold, rented, or shared with third parties for marketing or promotional purposes. The only third parties that process this data are the named service providers listed in Section 5, who are contractually bound to use the data solely to deliver the Sofia AI service on our behalf.</p>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-orange-400 mb-2">Retention</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Operator phone numbers are retained for the duration of the active service agreement plus four (4) years thereafter to comply with SMS recordkeeping requirements, then permanently deleted.</li>
                  <li>Call audio is retained for 90 days.</li>
                  <li>Call transcripts and lead summaries are retained for 24 months unless the operator requests earlier deletion.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sharing" className="mb-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">5. Data Sharing and Disclosure</h2>
            <div className="text-white/80 space-y-4">
              <div className="bg-red-900/20 border border-red-400/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-400 mb-2">We DO NOT sell your personal information</h3>
                <p>We do not sell, rent, or trade your personal data to any third party for their marketing purposes. In addition, mobile phone numbers and SMS consent records are categorically excluded from any data sharing — including with affiliates, advertisers, or business partners — under any circumstances.</p>
                <p className="mb-0 mt-2 text-white/70 text-sm">No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.</p>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Limited Sharing With Service Providers</h3>
                <p className="mb-3">We share information only with vendors necessary to operate our business. Each provider is contractually bound to protect your data and use it only on our behalf. Our key service providers include:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Twilio Inc.</strong> — SMS message delivery and telephony infrastructure.</li>
                  <li><strong>OpenAI</strong> — speech-to-text transcription (Whisper) and language model processing for the Sofia AI service.</li>
                  <li><strong>Make.com (Celonis SE)</strong> — workflow automation and inter-service data routing.</li>
                  <li><strong>Google LLC</strong> — website analytics (Google Analytics) and, where applicable, calendar integration (Google Calendar).</li>
                  <li><strong>Stripe Inc.</strong> — payment processing and billing.</li>
                  <li><strong>Cloud hosting and email infrastructure providers</strong> — for website, database, and transactional email delivery.</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-white/70 mb-2">Other Limited Disclosure</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Advertisers (aggregated/anonymized):</strong> We provide advertisers with campaign performance reports. These reports contain aggregated, de-identified data — not individual personal information.</li>
                  <li><strong>Legal requirements:</strong> If required by law, court order, or government authority, we may disclose information as legally required. We will notify you where permitted.</li>
                  <li><strong>Business transfer:</strong> If Migo Advertisement LLC is acquired, merged, or its assets are transferred, your information may be transferred as part of that transaction. You will be notified in advance.</li>
                  <li><strong>Protection of rights:</strong> To enforce our Terms, protect the rights or safety of Migo Advertisement, our users, or the public.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="analytics" className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              <span className="inline-flex items-center gap-2">
                <BarChart2 size={24} />
                6. Cookies and Google Analytics
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

          {/* Section 7 */}
          <section id="location" className="mb-8">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">7. Location Data</h2>
            <div className="text-white/80 space-y-3">
              <p>GPS location data is collected exclusively from drivers who participate in active advertising campaigns. This data is used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Count and verify advertisement impressions by geographic area.</li>
                <li>Calculate driver earnings based on verified route data.</li>
                <li>Generate anonymized performance reports for advertisers (no driver-identifying information is included in advertiser reports).</li>
                <li>Recover or secure equipment in the event of theft or loss.</li>
              </ul>
              <p><strong>Active-session only:</strong> Location tracking is active only while a driver&apos;s session is running. Drivers cannot opt out of location tracking during active campaigns, as it is technically required to provide the service.</p>
              <p><strong>Retention:</strong> Location data is retained for 12 months, then permanently deleted.</p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="retention" className="mb-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">8. Data Retention</h2>
            <div className="text-white/80">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Contact form inquiries:</strong> 2 years from last contact, then deleted.</li>
                  <li><strong>Account data (active):</strong> Retained for the life of the account.</li>
                  <li><strong>Account data (closed):</strong> Retained for 3 years after account closure, then deleted.</li>
                  <li><strong>Driver records:</strong> Retained for 3 years after the driver&apos;s last active campaign.</li>
                  <li><strong>Advertiser billing records:</strong> Retained for 7 years to comply with U.S. tax and accounting requirements.</li>
                  <li><strong>Sofia AI operator phone numbers:</strong> Duration of service agreement plus 4 years for SMS compliance recordkeeping.</li>
                  <li><strong>Sofia AI call audio:</strong> 90 days.</li>
                  <li><strong>Sofia AI call transcripts and summaries:</strong> 24 months unless earlier deletion is requested.</li>
                  <li><strong>Location data:</strong> 12 months from collection date.</li>
                  <li><strong>Google Analytics data:</strong> 26 months (per Google&apos;s default retention setting).</li>
                  <li><strong>SMS opt-in/opt-out records:</strong> 4 years to demonstrate compliance.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Section 9 */}
          <section id="security" className="mb-8">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">9. Security</h2>
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

          {/* Section 10 */}
          <section id="rights" className="mb-8">
            <h2 className="text-2xl font-bold text-green-400 mb-4">10. Your Rights and Choices</h2>
            <div className="text-white/80 space-y-3">
              <p>Regardless of which U.S. state you are in, you may:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
                <li><strong>Correct:</strong> Request correction of inaccurate or incomplete data.</li>
                <li><strong>Delete:</strong> Request deletion of your personal data, subject to legal retention obligations (e.g., tax records).</li>
                <li><strong>Opt out of marketing SMS:</strong> Reply STOP to any marketing SMS message at any time.</li>
                <li><strong>Opt out of Sofia AI service SMS:</strong> Reply STOP to any Sofia AI message, or email bernardo@migonow.com to switch to email-only delivery.</li>
                <li><strong>Opt out of marketing email:</strong> Click the unsubscribe link in any marketing email.</li>
                <li><strong>Data portability:</strong> Request your data in a common machine-readable format.</li>
              </ul>
              <div className="bg-yellow-900/20 border border-yellow-400/30 rounded-lg p-4 mt-4">
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">California Residents (CCPA)</h3>
                <p>California residents have additional rights under the California Consumer Privacy Act (CCPA), including the right to know what categories of personal information we collect and disclose, the right to opt out of the &ldquo;sale&rdquo; of personal information (we do not sell), and the right to non-discrimination for exercising your rights. To submit a CCPA request, contact us at the email below.</p>
              </div>
              <p className="mt-3">To exercise any of these rights, email <a href="mailto:bernardo@migonow.com" className="text-green-400 hover:text-green-300 underline">bernardo@migonow.com</a> with the subject line <em>&ldquo;Privacy Request.&rdquo;</em> We will respond within 30 days.</p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="children" className="mb-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">11. Children&apos;s Privacy</h2>
            <div className="text-white/80 space-y-3">
              <p>Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will delete that information promptly. If you believe a child has provided us personal information, please contact us at bernardo@migonow.com.</p>
            </div>
          </section>

          {/* Section 12 */}
          <section id="changes" className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">12. Changes to This Policy</h2>
            <div className="text-white/80 space-y-3">
              <p>We may update this Privacy Policy from time to time. When we make material changes, we will:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Update the &ldquo;Last updated&rdquo; date at the top of this page.</li>
                <li>Send a notice to the email address on file at least 30 days before the change takes effect.</li>
                <li>For significant changes to the SMS program (including Sofia AI service notifications), we will request renewed opt-in consent rather than relying on a passive policy update.</li>
                <li>For other significant changes, request renewed consent where required by law.</li>
              </ul>
              <p>Your continued use of our website or services after the effective date of any update constitutes your acceptance of the revised policy.</p>
            </div>
          </section>

          {/* Section 13 */}
          <section id="contact-privacy" className="mb-8">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              <span className="inline-flex items-center gap-2">
                <Mail size={22} />
                13. Contact Us
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
