"use client";

import Link from "next/link";
import { ArrowLeft, Scale, ShieldCheck, FileText, MessageSquare, CreditCard } from "lucide-react";

export default function TermsPage() {
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
            <Scale className="text-purple-400" size={32} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Terms &amp; Conditions
            </h1>
          </div>
          <p className="text-white/60 text-lg">Last updated: May 5, 2026</p>
          <p className="text-white/50 text-sm mt-1">Effective: May 5, 2026</p>
        </div>

        {/* Agreement Banner */}
        <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-2xl border border-purple-400/30 p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <ShieldCheck className="text-green-400" size={20} />
            <h2 className="text-xl font-semibold text-white mb-0">Agreement to These Terms</h2>
          </div>
          <p className="text-white/80 mb-0">
            By visiting migonow.com, creating an account, submitting a contact form, or using any Migo Advertisement service, you agree to be bound by these Terms &amp; Conditions and our <Link href="/privacy" className="text-purple-400 hover:text-purple-300 underline">Privacy Policy</Link>. If you do not agree, do not use our website or services. These Terms apply to U.S. residents only.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="bg-gray-900/50 rounded-xl border border-white/10 p-5 mb-10">
          <h2 className="text-lg font-semibold text-white/80 mb-3">Table of Contents</h2>
          <ol className="list-decimal pl-5 space-y-1 text-sm text-purple-300">
            <li><a href="#services" className="hover:text-purple-200 transition-colors">Services Description</a></li>
            <li><a href="#accounts" className="hover:text-purple-200 transition-colors">Accounts and Eligibility</a></li>
            <li><a href="#advertiser-terms" className="hover:text-purple-200 transition-colors">Advertiser Terms</a></li>
            <li><a href="#billing" className="hover:text-purple-200 transition-colors">Fees, Billing, and Refund Policy</a></li>
            <li><a href="#driver-terms" className="hover:text-purple-200 transition-colors">Driver Terms</a></li>
            <li><a href="#equipment" className="hover:text-purple-200 transition-colors">Equipment and Liability</a></li>
            <li><a href="#sms-consent" className="hover:text-purple-200 transition-colors">SMS Marketing Consent</a></li>
            <li><a href="#prohibited" className="hover:text-purple-200 transition-colors">Prohibited Uses</a></li>
            <li><a href="#ip" className="hover:text-purple-200 transition-colors">Intellectual Property</a></li>
            <li><a href="#qr" className="hover:text-purple-200 transition-colors">QR Code Data Collection</a></li>
            <li><a href="#indemnification" className="hover:text-purple-200 transition-colors">Indemnification</a></li>
            <li><a href="#sms-notifications" className="hover:text-purple-200 transition-colors">SMS Messaging Terms</a></li>
            <li><a href="#liability" className="hover:text-purple-200 transition-colors">Limitation of Liability</a></li>
            <li><a href="#disclaimer" className="hover:text-purple-200 transition-colors">Disclaimers</a></li>
            <li><a href="#termination" className="hover:text-purple-200 transition-colors">Termination</a></li>
            <li><a href="#disputes" className="hover:text-purple-200 transition-colors">Dispute Resolution and Arbitration</a></li>
            <li><a href="#governing-law" className="hover:text-purple-200 transition-colors">Governing Law</a></li>
            <li><a href="#modifications" className="hover:text-purple-200 transition-colors">Modifications to Terms</a></li>
            <li><a href="#contact-terms" className="hover:text-purple-200 transition-colors">Contact Information</a></li>
          </ol>
        </div>

        <div className="prose prose-invert max-w-none">

          {/* Section 1 */}
          <section id="services" className="mb-8">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">1. Services Description</h2>
            <div className="text-white/80 space-y-3">
              <p>Migo Advertisement LLC ("<strong>Migo</strong>," "<strong>we</strong>," "<strong>us</strong>," or "<strong>our</strong>") operates a mobile billboard advertising network using digital display tablets mounted on participating vehicles. Our services include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mobile billboard advertising placement and campaign management.</li>
                <li>Driver recruitment, onboarding, and earnings management.</li>
                <li>Advertisement content creation, hosting, and rotation.</li>
                <li>Performance tracking, impression reporting, and analytics.</li>
                <li>QR code campaign integrations for advertisers.</li>
              </ul>
              <p>We reserve the right to modify, suspend, or discontinue any feature or service at any time with reasonable notice.</p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="accounts" className="mb-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">2. Accounts and Eligibility</h2>
            <div className="text-white/80 space-y-3">
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Age:</strong> You must be at least 18 years old to create an account or use our services.</li>
                <li><strong>Business authority:</strong> If registering on behalf of a company, you represent that you have authority to bind that company to these Terms.</li>
                <li><strong>Accurate information:</strong> You agree to provide accurate, current, and complete information when creating an account and to keep it up to date.</li>
                <li><strong>Account security:</strong> You are responsible for maintaining the confidentiality of your account credentials and for all activity under your account. Notify us immediately at bernardo@migonow.com if you suspect unauthorized access.</li>
                <li><strong>One account per user:</strong> Creating multiple accounts to circumvent restrictions or penalties is prohibited.</li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="advertiser-terms" className="mb-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">3. Advertiser Terms</h2>
            <div className="text-white/80 space-y-3">
              <p><strong>Content Standards:</strong> All advertisement content submitted by advertisers must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Comply with all applicable U.S. federal, state, and local laws.</li>
                <li>Not be false, deceptive, misleading, or defamatory.</li>
                <li>Not infringe any third-party copyright, trademark, or other intellectual property rights.</li>
                <li>Not contain adult content, hate speech, illegal solicitation, or content promoting violence or discrimination.</li>
              </ul>
              <p className="mt-3"><strong>Content Approval:</strong> Migo reserves the right to reject or remove any advertisement that violates our content standards without refund of amounts attributable to the rejected content period.</p>
              <p><strong>Asset Delivery:</strong> Advertisers must provide final creative assets in the required format at least 5 business days before the campaign start date. Delays caused by late asset delivery are not grounds for a refund or campaign extension.</p>
              <p><strong>Performance:</strong> We do not guarantee specific impression counts, click-through rates, or business outcomes from campaigns. Performance reports are provided as informational data.</p>
              <p><strong>Pre-launch pricing lock:</strong> Pricing locked in a written agreement for the first 100 customers will be honored for the term specified in that agreement.</p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="billing" className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              <span className="inline-flex items-center gap-2">
                <CreditCard size={22} />
                4. Fees, Billing, and Refund Policy
              </span>
            </h2>
            <div className="text-white/80 space-y-4">
              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">Billing</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>All fees are stated in U.S. dollars and are exclusive of applicable taxes unless otherwise noted.</li>
                  <li>Billing occurs on the schedule stated in your campaign agreement (monthly, prepaid, or custom).</li>
                  <li>You authorize us to charge your payment method on file for all fees due.</li>
                  <li>Invoices unpaid after 15 days accrue a 1.5% monthly late fee (18% annually) or the maximum permitted by Arizona law, whichever is less.</li>
                  <li>Accounts past due by 30 days or more may be suspended until the balance is paid.</li>
                </ul>
              </div>

              <div className="bg-green-900/20 border border-green-400/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-green-300 mb-2">Cancellation Policy</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Written notice required:</strong> To cancel a campaign or service subscription, you must provide at least <strong>30 days' written notice</strong> via email to bernardo@migonow.com.</li>
                  <li><strong>During the notice period:</strong> Your campaign will continue to run and you remain responsible for fees accrued during that 30-day period.</li>
                  <li><strong>Immediate cancellation:</strong> We may grant immediate cancellation requests at our sole discretion. In that case, fees for the current billing period in progress are still due and non-refundable.</li>
                </ul>
              </div>

              <div className="bg-yellow-900/20 border border-yellow-400/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-yellow-300 mb-2">Refund Policy</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Prepaid campaigns:</strong> If you cancel with 30 days' written notice, we will issue a prorated credit or refund for any <em>full, unused campaign days</em> remaining beyond the 30-day notice period. Partial days are not refunded.</li>
                  <li><strong>No refunds for completed services:</strong> Fees for advertising already delivered are non-refundable.</li>
                  <li><strong>Service failures:</strong> If we fail to deliver a campaign for reasons within our control (e.g., platform outage exceeding 48 hours in a billing period), we will issue a prorated service credit for the affected period.</li>
                  <li><strong>No refunds for content rejection:</strong> If your advertisement is removed for violating our content standards, no refund is issued for the removed content period.</li>
                  <li><strong>Refund method:</strong> All approved refunds are issued to the original payment method within 10 business days of approval.</li>
                </ul>
              </div>

              <div className="bg-gray-900/50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-purple-300 mb-2">Chargebacks</h3>
                <p>If you initiate a chargeback with your bank or credit card issuer for a valid charge, your account will be immediately suspended and a $35 chargeback processing fee will be added to your balance. Continued chargebacks may result in permanent account termination and referral to collections.</p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="driver-terms" className="mb-8">
            <h2 className="text-2xl font-bold text-green-400 mb-4">5. Driver Terms</h2>
            <div className="text-white/80 space-y-3">
              <p><strong>Eligibility:</strong> Drivers must be at least 18 years old, hold a valid U.S. driver's license, maintain current personal auto insurance meeting their state's minimum requirements, and operate a vehicle in roadworthy condition.</p>
              <p><strong>Independent contractor status:</strong> Drivers participate as independent contractors, not employees of Migo Advertisement. Migo is not responsible for drivers' tax obligations, insurance requirements, or compliance with rideshare platform rules.</p>
              <p><strong>Safety â€” non-negotiable rule:</strong> Drivers must never touch, adjust, or interact with the advertising tablet while the vehicle is in motion. Road safety is the driver's sole responsibility at all times while operating the vehicle.</p>
              <p><strong>Installation:</strong> Tablets must be installed only at Migo-approved locations. Unauthorized modification of any installation voids all equipment protections and indemnification coverage.</p>
              <p><strong>Equipment reporting:</strong> Drivers must immediately report loose, damaged, or malfunctioning equipment via the designated support channel.</p>
              <p><strong>Minimum performance:</strong> Minimum driving hours or route compliance thresholds may apply as specified in your driver agreement. Failure to meet minimums may affect earnings calculations.</p>
              <p><strong>Earnings and payment:</strong> Driver earnings are calculated monthly based on verified GPS driving data and confirmed ad impressions and are paid within 10 business days after the end of each calendar month.</p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="equipment" className="mb-8">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">6. Equipment and Liability</h2>
            <div className="text-white/80 space-y-3">
              <p><strong>Equipment financing:</strong> Tablets are provided through a financing arrangement. Ownership transfers to the driver upon completion of all financing payments as specified in the driver's equipment agreement.</p>
              <p><strong>Covered by Migo:</strong> Manufacturing defects and equipment failures not caused by driver action.</p>
              <p><strong>Driver responsibility:</strong> Damage caused by negligence, misuse, improper handling, unauthorized modification, or accidents. Repair or replacement costs may be deducted from driver earnings.</p>
              <p><strong>Theft:</strong> Basic theft coverage is included through the equipment provider's insurance. Enhanced coverage may be available for an additional monthly fee as specified in your driver agreement.</p>
              <p><strong>Return of equipment:</strong> Upon termination of the driver agreement (for any reason), the driver must return all Migo-owned equipment within 7 days. Failure to return equipment may result in the outstanding retail value being charged against the driver's account and/or reported to the appropriate authorities.</p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="sms-consent" className="mb-8">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">
              <span className="inline-flex items-center gap-2">
                <MessageSquare size={22} />
                7. SMS Marketing Consent
              </span>
            </h2>
            <div className="text-white/80 space-y-3">
              <p>By providing your mobile phone number and checking the SMS opt-in box on any Migo form, you expressly consent to receive recurring automated marketing text messages from Migo Advertisement LLC at the number provided. Consent is not a condition of any purchase or service.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Message frequency:</strong> Up to 4 marketing messages per month, plus transactional messages.</li>
                <li><strong>Message and data rates may apply</strong> depending on your mobile carrier and plan.</li>
                <li><strong>To opt out:</strong> Reply <strong>STOP</strong> to any SMS. You will receive one confirmation and no further marketing messages.</li>
                <li><strong>For help:</strong> Reply <strong>HELP</strong> or contact bernardo@migonow.com.</li>
              </ul>
              <p>Full SMS terms are also described in our <Link href="/privacy" className="text-pink-400 hover:text-pink-300 underline">Privacy Policy</Link>.</p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="prohibited" className="mb-8">
            <h2 className="text-2xl font-bold text-red-400 mb-4">8. Prohibited Uses</h2>
            <div className="text-white/80 space-y-3">
              <p>You may not use our website or services to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable federal, state, or local law or regulation.</li>
                <li>Submit false, deceptive, or fraudulent information.</li>
                <li>Infringe on any third party's intellectual property rights.</li>
                <li>Transmit spam, malware, viruses, or other malicious code.</li>
                <li>Scrape, crawl, or data-mine the website without written permission.</li>
                <li>Reverse-engineer, decompile, or attempt to extract source code from any part of our platform.</li>
                <li>Harass, threaten, or harm any person.</li>
                <li>Circumvent any security or access control measure.</li>
                <li>Use the services for any purpose that competes with Migo Advertisement without prior written consent.</li>
              </ul>
              <p>Violations may result in immediate account termination and, where appropriate, legal action.</p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="ip" className="mb-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">9. Intellectual Property</h2>
            <div className="text-white/80 space-y-3">
              <p><strong>Migo's property:</strong> All content on migonow.com â€” including text, graphics, logos, the Migo name and brand, software, and service designs â€” is owned by or licensed to Migo Advertisement LLC and is protected by U.S. copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without prior written permission.</p>
              <p><strong>Your content:</strong> You retain ownership of creative assets, logos, and content you submit for advertising campaigns. By submitting content, you grant Migo Advertisement a non-exclusive, royalty-free, worldwide license to host, display, and distribute that content solely for the purpose of running your campaign as agreed.</p>
              <p><strong>Your representation:</strong> By submitting content, you represent and warrant that you own or have sufficient rights to that content and that its use by Migo will not infringe any third-party rights.</p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="qr" className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">10. QR Code Data Collection</h2>
            <div className="text-white/80 space-y-3">
              <p><strong>Voluntary interaction only:</strong> Data is collected from viewers only when they voluntarily scan a QR code displayed on one of our advertising tablets.</p>
              <p><strong>Consent at point of scan:</strong> Upon scanning, users are presented with a clear notice explaining that by proceeding they agree to share their submitted information with Migo Advertisement and the relevant advertiser.</p>
              <p><strong>Data shared with advertiser:</strong> Information submitted via a QR code scan, along with the approximate GPS location of the scan, is provided to the advertiser whose campaign generated the QR code as part of our reporting services.</p>
              <p><strong>No driver data included:</strong> We do not collect or share data about drivers' personal transportation activities. All driver-related data relates solely to advertising campaign participation.</p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="indemnification" className="mb-8">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">11. Indemnification</h2>
            <div className="text-white/80 space-y-3">
              <p>You agree to indemnify, defend, and hold harmless Migo Advertisement LLC, and its officers, directors, employees, and agents from and against any and all claims, damages, losses, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your use of or access to our website or services.</li>
                <li>Your violation of these Terms or any applicable law.</li>
                <li>Your advertisement content, including any claims of copyright infringement, false advertising, or regulatory violation.</li>
                <li><strong>Drivers:</strong> Your operation of a vehicle while displaying Migo advertisements, including any accidents, injuries, or property damage caused by your actions or inactions.</li>
                <li><strong>Drivers:</strong> Your misuse, unauthorized modification, or improper handling of advertising equipment.</li>
                <li>Any claim by a third party arising from your breach of these Terms.</li>
              </ul>
            </div>
          </section>

          {/* Section 12 */}
          <section id="sms-notifications" className="mb-8">
            <h2 className="text-2xl font-bold text-sky-400 mb-4">
              <span className="inline-flex items-center gap-2">
                <MessageSquare size={22} />
                12. SMS Messaging Terms
              </span>
            </h2>
            <div className="text-white/80 space-y-3">
              <p>Migo Advertisement operates automated SMS notification services for business clients.</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Program description:</strong> Automated SMS call summaries sent to registered business operators after AI-assisted phone calls.</li>
                <li><strong>Message frequency:</strong> Messages are sent on a per-call basis and vary based on call volume.</li>
                <li><strong>Message and data rates may apply.</strong> Contact your wireless carrier for details.</li>
                <li><strong>To opt out:</strong> Reply <strong>STOP</strong> to any message to unsubscribe. You will receive no further messages.</li>
                <li><strong>For help:</strong> Reply <strong>HELP</strong> for assistance or contact <a href="mailto:bernardo@migonow.com" className="text-sky-400 hover:text-sky-300 underline">bernardo@migonow.com</a>.</li>
              </ul>
              <div className="bg-gray-900/50 rounded-lg p-4 mt-2">
                <p className="mb-0"><strong>Support:</strong> For questions contact <a href="mailto:bernardo@migonow.com" className="text-sky-400 hover:text-sky-300 underline">bernardo@migonow.com</a> or 480-647-2380.</p>
              </div>
            </div>
          </section>

          {/* Section 13 */}
          <section id="liability" className="mb-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">13. Limitation of Liability</h2>
            <div className="text-white/80 space-y-3">
              <p>To the fullest extent permitted by applicable law, Migo Advertisement LLC's total liability to you for any claim arising out of or relating to these Terms or our services shall not exceed the greater of (a) the total fees you paid to Migo in the 3 months immediately preceding the claim, or (b) $100.</p>
              <p>In no event shall Migo Advertisement LLC be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, loss of data, loss of goodwill, business interruption, or the cost of substitute services, even if advised of the possibility of such damages.</p>
              <p>We are not liable for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Campaign performance outcomes or business results.</li>
                <li>Third-party actions or accidents of any kind.</li>
                <li>Technology failures, service interruptions, or data loss beyond our reasonable control.</li>
                <li>Changes in rideshare or delivery platform policies that affect driver participation.</li>
                <li>Accidents or incidents involving driver vehicles, including those where the advertising tablet was present.</li>
                <li>Equipment failure, loose mounting, or damage resulting from driver modification or negligence.</li>
              </ul>
            </div>
          </section>

          {/* Section 14 */}
          <section id="disclaimer" className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">14. Disclaimers</h2>
            <div className="text-white/80 space-y-3">
              <p>Our website and services are provided on an "<strong>as is</strong>" and "<strong>as available</strong>" basis without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</p>
              <p>We do not warrant that our website will be uninterrupted, error-free, or free of viruses or other harmful components. We do not warrant the accuracy or completeness of any content on the site.</p>
            </div>
          </section>

          {/* Section 15 */}
          <section id="termination" className="mb-8">
            <h2 className="text-2xl font-bold text-red-400 mb-4">15. Termination</h2>
            <div className="text-white/80 space-y-3">
              <p>Either party may terminate this agreement by providing 30 days' written notice as described in the cancellation policy in Section 4.</p>
              <p>Migo reserves the right to immediately suspend or terminate your account and access to services, without notice or liability, if you:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Breach any provision of these Terms.</li>
                <li>Fail to pay any amount due within 30 days of the due date.</li>
                <li>Engage in fraudulent, abusive, or illegal conduct.</li>
                <li>Pose a risk to the safety of drivers, the public, or the Migo platform.</li>
              </ul>
              <p>Upon termination: (a) your right to access the services immediately ceases; (b) all outstanding fees become immediately due and payable; (c) drivers must return all Migo-owned equipment within 7 days; (d) all outstanding earnings due to drivers will be paid within the next regular payment cycle.</p>
            </div>
          </section>

          {/* Section 16 */}
          <section id="disputes" className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">16. Dispute Resolution and Binding Arbitration</h2>
            <div className="text-white/80 space-y-4">
              <div className="bg-yellow-900/20 border border-yellow-400/30 rounded-lg p-4">
                <p className="font-semibold text-yellow-300">PLEASE READ THIS SECTION CAREFULLY â€” IT AFFECTS YOUR LEGAL RIGHTS.</p>
              </div>

              <p><strong>Informal resolution first:</strong> Before initiating any formal proceeding, the parties agree to attempt to resolve the dispute informally by contacting Migo at bernardo@migonow.com with a written description of the claim. We will attempt to resolve the dispute within 30 days. If unresolved after 30 days, either party may proceed to arbitration.</p>

              <p><strong>Binding arbitration:</strong> Except for claims that qualify for small claims court, all disputes, claims, or controversies arising out of or relating to these Terms or your use of Migo's services shall be resolved exclusively through final and binding arbitration administered by the American Arbitration Association (AAA) under its Commercial Arbitration Rules.</p>

              <ul className="list-disc pl-6 space-y-2">
                <li>Arbitration shall be conducted by a single neutral arbitrator selected per AAA procedures.</li>
                <li>Arbitration shall take place in Phoenix, Maricopa County, Arizona.</li>
                <li>Arizona state law governs all substantive issues.</li>
                <li>The arbitrator's decision is final and binding and may be entered as a judgment in any court of competent jurisdiction.</li>
                <li>Each party shall bear its own attorneys' fees and costs. AAA filing fees are allocated per AAA rules.</li>
              </ul>

              <div className="bg-red-900/20 border border-red-400/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-red-300 mb-2">Class Action Waiver</h3>
                <p className="mb-0">YOU AND MIGO ADVERTISEMENT EACH WAIVE THE RIGHT TO PARTICIPATE IN A CLASS ACTION LAWSUIT OR CLASS-WIDE ARBITRATION. ALL DISPUTES MUST BE BROUGHT ON AN INDIVIDUAL BASIS ONLY. This waiver is a material term of this agreement.</p>
              </div>

              <p><strong>Exceptions:</strong> Either party may seek emergency injunctive or equitable relief in any court of competent jurisdiction to protect intellectual property rights or prevent imminent harm, without waiving the right to arbitrate other claims.</p>
            </div>
          </section>

          {/* Section 17 */}
          <section id="governing-law" className="mb-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">17. Governing Law</h2>
            <div className="text-white/80 space-y-3">
              <p>These Terms are governed by and construed in accordance with the laws of the State of Arizona, without regard to its conflict of law principles. For any matters not subject to arbitration, you consent to the exclusive jurisdiction and venue of the state and federal courts located in Maricopa County, Arizona.</p>
            </div>
          </section>

          {/* Section 18 */}
          <section id="modifications" className="mb-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">18. Modifications to These Terms</h2>
            <div className="text-white/80 space-y-3">
              <p>We reserve the right to modify these Terms at any time. When we make material changes, we will:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Update the "Last updated" date at the top of this page.</li>
                <li>Notify registered users by email at the address on file at least 30 days before changes take effect.</li>
              </ul>
              <p>Your continued use of our services after the effective date of any modification constitutes your acceptance of the updated Terms. If you do not agree to the modified Terms, you must stop using the services and cancel your account before the effective date.</p>
            </div>
          </section>

          {/* Section 19 */}
          <section id="contact-terms" className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">
              <span className="inline-flex items-center gap-2">
                <FileText size={22} />
                19. Contact Information
              </span>
            </h2>
            <div className="text-white/80 space-y-3">
              <p>For questions, notices, or legal correspondence regarding these Terms:</p>
              <div className="bg-gray-900/50 rounded-lg p-5">
                <ul className="list-none space-y-2">
                  <li><strong>Business:</strong> Migo Advertisement LLC</li>
                  <li><strong>Contact:</strong> Bernardo Ruiz</li>
                  <li>
                    <strong>Email:</strong>{" "}
                    <a href="mailto:bernardo@migonow.com" className="text-cyan-400 hover:text-cyan-300 underline">
                      bernardo@migonow.com
                    </a>
                  </li>
                  <li><strong>Phone:</strong> 480-647-2380</li>
                  <li><strong>Address:</strong> 34293 S Bertha St, Black Canyon City, Arizona 85324</li>
                </ul>
              </div>
              <p className="text-white/50 text-sm mt-4">These Terms constitute the entire agreement between you and Migo Advertisement LLC with respect to our services and supersede all prior agreements. If any provision is found to be unenforceable, the remaining provisions remain in full effect.</p>
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
              <Link href="/privacy" className="text-purple-400 hover:text-purple-300 transition-colors">
                Privacy Policy
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
