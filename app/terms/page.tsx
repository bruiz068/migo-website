"use client";

import Link from "next/link";
import { ArrowLeft, Scale, ShieldCheck, FileText } from "lucide-react";

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
              Terms of Service
            </h1>
          </div>
          <p className="text-white/60 text-lg">
            Last updated: September 11, 2025
          </p>
        </div>

        {/* Terms Content */}
        <div className="prose prose-invert max-w-none">
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-2xl border border-purple-400/30 p-6 mb-8">
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="text-green-400" size={20} />
              <h2 className="text-xl font-semibold text-white mb-0">Agreement to Terms</h2>
            </div>
            <p className="text-white/80 mb-0">
              By accessing or using Migo Advertisement services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
          </div>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">1. Service Description</h2>
            <div className="text-white/80 space-y-3">
              <p>Migo Advertisement operates a mobile billboard advertising network using tablets mounted on rideshare vehicles. Our services include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Mobile billboard advertising placement</li>
                <li>Driver recruitment and management</li>
                <li>Advertisement content management</li>
                <li>Performance tracking and reporting</li>
              </ul>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">2. Equipment and Liability</h2>
            <div className="text-white/80 space-y-3">
              <p><strong>Equipment Financing:</strong> Tablets are provided through a financing arrangement. Equipment ownership transfers to driver upon full payment.</p>
              <p><strong>Equipment Coverage:</strong> Equipment insurance is provided through our tablet provider. Company covers equipment failure and manufacturing defects. Drivers are responsible for damage from negligence, misuse, or accidents.</p>
              <p><strong>Theft Policy:</strong> Basic theft coverage included through provider insurance. Enhanced tablet coverage available for additional monthly fee (deducted from earnings).</p>
              <p><strong>Damage Policy:</strong> Normal wear and tear is covered. Intentional damage, negligence, or misuse may result in repair costs charged to driver.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">3. Driver Terms</h2>
            <div className="text-white/80 space-y-3">
              <p><strong>Eligibility:</strong> Must be active driver (rideshare, delivery, or personal vehicle) with valid license and current auto insurance.</p>
              <p><strong>Insurance Requirements:</strong> Drivers must maintain their own vehicle insurance appropriate for their driving activities. Migo Advertisement is not responsible for driver insurance requirements or coverage.</p>
              <p><strong>Installation:</strong> Professional tablet installation required at approved locations.</p>
              <p><strong>Safety Requirements:</strong> Drivers must prioritize road safety over equipment interaction. No touching, adjusting, or interacting with advertising equipment while driving. Drivers are solely responsible for any accidents caused by equipment distraction.</p>
              <p><strong>Equipment Maintenance:</strong> Drivers must ensure secure mounting and report loose installations immediately. Any modification of installation or unsafe mounting is prohibited and voids all protections.</p>
              <p><strong>Performance:</strong> Minimum driving hours and route compliance required for optimal ad visibility.</p>
              <p><strong>Payment:</strong> Earnings paid monthly based on verified driving data and ad impressions.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">4. Advertiser Terms</h2>
            <div className="text-white/80 space-y-3">
              <p><strong>Content Standards:</strong> All advertisements must comply with local laws and our content guidelines.</p>
              <p><strong>Pricing:</strong> Pre-launch pricing locked for first 100 customers for one year with written agreement.</p>
              <p><strong>Performance:</strong> No guarantees on specific impression counts, but reporting provided.</p>
              <p><strong>Cancellation:</strong> 30-day written notice required for service changes.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-green-400 mb-4">5. Data Collection and QR Code Interactions</h2>
            <div className="text-white/80 space-y-3">
              <p><strong>Voluntary Data Collection:</strong> Migo Advertisement only collects customer data when individuals voluntarily scan QR codes displayed on advertisements.</p>
              <p><strong>Consent Process:</strong> Upon scanning a QR code, users receive a clear message stating they agree to share their information with Migo Advertisement and advertising partners.</p>
              <p><strong>Data Collected:</strong> Information provided by the user plus GPS location where the QR code was scanned for advertiser analytics and campaign optimization.</p>
              <p><strong>Data Sharing:</strong> Collected information is shared with relevant advertisers as part of campaign services. Users consent to this sharing when scanning QR codes.</p>
              <p><strong>No Driver Data:</strong> We do not collect or store customer data from drivers' transportation activities. All driver data relates only to advertising campaign participation.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-pink-400 mb-4">6. Launch Timeline</h2>
            <div className="text-white/80 space-y-3">
              <p><strong>Estimated Launch:</strong> January 15, 2026 (subject to change)</p>
              <p><strong>Notice Policy:</strong> Minimum 30-day written notice provided if launch date changes.</p>
              <p><strong>Pre-Launch:</strong> Testing phase with 3 tablets currently active.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-orange-400 mb-4">7. Indemnification</h2>
            <div className="text-white/80 space-y-3">
              <p><strong>Driver Indemnification:</strong> By participating in Migo Advertisement campaigns, drivers agree to indemnify, defend, and hold harmless Migo Advertisement, its officers, directors, employees, and agents from any and all claims, damages, losses, costs, and expenses (including reasonable attorney fees) arising from or related to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Driver's operation of their vehicle while displaying advertisements</li>
                <li>Any accidents, injuries, or property damage caused by driver's actions</li>
                <li>Driver's violation of traffic laws or regulations</li>
                <li>Driver's breach of these Terms of Service</li>
                <li>Any claims by third parties related to driver's participation in campaigns</li>
                <li>Misuse or improper installation of advertising equipment</li>
              </ul>
              <p><strong>Business Indemnification:</strong> Business advertisers agree to indemnify Migo Advertisement for any claims arising from their advertisement content, including but not limited to copyright infringement, false advertising, or regulatory violations.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-purple-400 mb-4">8. Limitation of Liability</h2>
            <div className="text-white/80 space-y-3">
              <p>Migo Advertisement's liability is limited to the amount paid for services. We are not liable for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Lost profits or business opportunities</li>
                <li>Third-party actions or accidents of any kind</li>
                <li>Technology failures or service interruptions</li>
                <li>Changes in rideshare platform policies</li>
                <li>Accidents or incidents caused by equipment distraction or driver inattention</li>
                <li>Comparative negligence scenarios involving driver behavior</li>
                <li>Installation-related damage or safety issues</li>
                <li>Equipment failure leading to accidents or incidents</li>
                <li>Driver failure to follow safety protocols or installation guidelines</li>
              </ul>
              <p><strong>Driver Safety Responsibility:</strong> Drivers acknowledge that displaying advertisements requires attention to road safety and agree to prioritize safe driving over equipment interaction. Any accidents or incidents resulting from equipment distraction are solely the driver's responsibility.</p>
              <p><strong>Installation Safety:</strong> Professional installation is provided, but drivers are responsible for ensuring continued safe mounting and reporting any installation issues immediately. Migo Advertisement is not liable for accidents caused by equipment failure, loose mounting, or driver modification of installation.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-blue-400 mb-4">9. Modifications</h2>
            <div className="text-white/80 space-y-3">
              <p>We reserve the right to modify these terms with 30-day notice. Continued use constitutes acceptance of updated terms.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-yellow-400 mb-4">10. Dispute Resolution</h2>
            <div className="text-white/80 space-y-3">
              <p><strong>Mandatory Arbitration:</strong> All disputes, claims, or controversies arising from or relating to these Terms of Service or participation in Migo Advertisement services shall be resolved exclusively through binding arbitration, not in court.</p>
              
              <p><strong>Arbitration Process:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Arbitration administered by American Arbitration Association (AAA) under Commercial Arbitration Rules</li>
                <li>Single arbitrator selected through AAA procedures</li>
                <li>Arbitration conducted in Phoenix, Arizona</li>
                <li>Arizona state law governs all proceedings</li>
              </ul>

              <p><strong>Mediation Requirement:</strong> Before initiating arbitration, parties must attempt good faith mediation for 30 days. Mediation costs shared equally between parties.</p>

              <p><strong>Fee Allocation:</strong></p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Each party pays their own attorney fees and costs</li>
                <li>Arbitration fees allocated per AAA rules</li>
                <li>Frivolous claims may result in fee shifting to filing party</li>
              </ul>

              <p><strong>Class Action Waiver:</strong> All parties waive right to participate in class action lawsuits or class-wide arbitration. Disputes must be resolved individually.</p>

              <p><strong>Jurisdiction:</strong> Any matters not subject to arbitration shall be exclusively handled in state or federal courts located in Maricopa County, Arizona.</p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">11. Contact Information</h2>
            <div className="text-white/80 space-y-3">
              <p>For questions about these terms:</p>
              <ul className="list-none space-y-2">
                <li><strong>Email:</strong> bernardo@migonow.com</li>
                <li><strong>Phone:</strong> 480-647-2380</li>
                <li><strong>Business:</strong> Migo Advertisement LLC</li>
              </ul>
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
