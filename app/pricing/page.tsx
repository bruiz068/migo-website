"use client";

import { useState } from "react";
import Link from "next/link";
import PasswordProtection from "./components/PasswordProtection";

import { 
  ArrowRight, 
  ArrowLeft,
  Check, 
  X, 
  Smartphone, 
  QrCode, 
  MapPin, 
  Clock, 
  Zap,
  Shield,
  Star,
  Lock,
  Mail,
  Phone,
  Globe
} from "lucide-react";

export default function PricingPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  // If not authenticated, show password protection
  if (!isAuthenticated) {
    return <PasswordProtection onAuthenticated={() => setIsAuthenticated(true)} />;
  }

  const frequencyTiers = [
    {
      name: "Standard",
      price: 0,
      period: "per campaign",
      description: "Perfect for budget-conscious campaigns",
      features: [
        { text: "Standard rotation in available time slots", included: true },
        { text: "Basic campaign frequency", included: true },
        { text: "Perfect for budget-conscious campaigns", included: true },
        { text: "Split screen display only", included: false },
        { text: "QR code integration", included: false },
        { text: "Geo tracking", included: false },
        { text: "Priority scheduling", included: false }
      ],
      gradient: "from-gray-500 to-gray-600",
      borderColor: "border-gray-300"
    },
    {
      name: "Enhanced Frequency",
      price: 79,
      period: "per campaign",
      description: "50% more ad plays than Standard",
      features: [
        { text: "50% more ad plays than Standard", included: true },
        { text: "Priority over Standard campaigns", included: true },
        { text: "Better time slot allocation", included: true },
        { text: "QR code integration", included: true },
        { text: "Basic geo tracking", included: true },
        { text: "Ideal for promotional events", included: true }
      ],
      gradient: "from-blue-500 to-blue-600",
      borderColor: "border-blue-300"
    },
    {
      name: "High Frequency",
      price: 149,
      period: "per campaign",
      description: "100% more ad plays than Standard",
      popular: true,
      features: [
        { text: "100% more ad plays than Standard", included: true },
        { text: "Priority scheduling over lower tiers", included: true },
        { text: "Peak hour time slot access", included: true },
        { text: "Advanced QR code features", included: true },
        { text: "Detailed geo tracking", included: true },
        { text: "Best for time-sensitive campaigns", included: true }
      ],
      gradient: "from-purple-500 to-purple-600",
      borderColor: "border-purple-400"
    },
    {
      name: "Maximum Frequency",
      price: 299,
      period: "per campaign",
      description: "200% more ad plays than Standard",
      features: [
        { text: "200% more ad plays than Standard", included: true },
        { text: "First priority on all time slots", included: true },
        { text: "Guaranteed peak hour placement", included: true },
        { text: "Premium QR code & analytics", included: true },
        { text: "Real-time geo tracking", included: true },
        { text: "Dominates the advertising space", included: true }
      ],
      gradient: "from-pink-500 to-pink-600",
      borderColor: "border-pink-400"
    }
  ];

  const cpiRates = [
    {
      rate: "$0.018",
      type: "Shared Screen Ad (5s)",
      description: "Maximum value for constant exposure",
      color: "text-green-500"
    },
    {
      rate: "$0.035",
      type: "5-Second Still Image",
      description: "Static ad display, quick impression",
      color: "text-blue-500"
    },
    {
      rate: "$0.070",
      type: "10-Second Still Image",
      description: "Extended static display, standard engagement",
      color: "text-purple-500"
    },
    {
      rate: "$0.140",
      type: "20-Second Video (No Sound)",
      description: "Silent video content, visual engagement",
      color: "text-orange-500"
    },
    {
      rate: "$0.250",
      type: "30-Second Video (With Sound)",
      description: "Full audio-visual experience, maximum impact",
      color: "text-pink-500"
    }
  ];

  const addOnServices = [
    {
      service: "Custom Ad Design",
      description: "Professional design optimized for Samsung A9+ tablets",
      price: "$75 - $150"
    },
    {
      service: "QR Code Setup & Landing Page",
      description: "Custom QR code with mobile-optimized landing page",
      price: "$50 - $100"
    },
    {
      service: "Campaign Analytics & Reporting",
      description: "Detailed performance metrics and route analysis",
      price: "$25/day"
    },
    {
      service: "Rush Design Service",
      description: "24-48 hour turnaround for urgent campaigns",
      price: "+50% fee"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-neutral-900/95 via-purple-900/30 to-pink-900/30 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <ArrowLeft size={20} className="text-white/60" />
              <div className="flex items-center gap-3">
                <img 
                  src="https://i.imgur.com/clZNuAZ.png?v=2" 
                  alt="Migo Logo" 
                  className="h-12 w-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="font-extrabold tracking-tight text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400">Advertisement</span>
                <div className="hidden flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-sky-400 shadow-lg shadow-pink-500/30" />
                  <span className="font-extrabold tracking-tight text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400">Migo Advertisement</span>
                </div>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <Link href="/pricing" className="text-pink-400 font-semibold">Pricing</Link>
              <Link href="/ad-specs" className="hover:text-purple-400 font-semibold">Ad Specs</Link>
              <Link href="/driver-earnings" className="hover:text-sky-400 font-semibold">Driver Earnings</Link>
              <Link href="/faq" className="hover:text-cyan-400 font-semibold">FAQ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20"></div>
        <div className="relative z-10 container mx-auto px-6 py-16 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://i.imgur.com/clZNuAZ.png?v=2" 
              alt="Migo Logo" 
              className="max-w-[200px] h-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3">
              <div className="text-2xl font-bold text-white tracking-wider">📱 MIGO</div>
              <div className="text-xs text-white/80 tracking-wide">MOBILE BILLBOARD</div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Mobile Billboard Advertising
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Professional Mobile Advertising Solutions - Pricing & Service Plans
          </p>
          
          {/* Network Status */}
          <div className="max-w-3xl mx-auto p-4 rounded-2xl border border-purple-400/30 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10">
            <div className="text-center">
              <h3 className="text-lg font-bold text-purple-400 mb-1">📊 Network Status & Growth Plan</h3>
              <div className="text-pink-400 font-semibold mb-1">🗓️ Estimated Launch: January 15, 2026</div>
              <div className="text-white/50 text-xs mb-3">*30-day written notice provided if launch date changes</div>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-pink-400 font-semibold">Pre-Launch Testing</div>
                  <div className="text-white/80">3 tablets active</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 font-semibold">Launch 2026</div>
                  <div className="text-white/80">10 tablets deployment</div>
                </div>
                <div className="text-center">
                  <div className="text-blue-400 font-semibold">Year 2 Goal</div>
                  <div className="text-white/80">50 tablets target</div>
                </div>
                <div className="text-center">
                  <div className="text-cyan-400 font-semibold">Long-term Vision</div>
                  <div className="text-white/80">100+ tablets citywide</div>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-2">Secure your pre-launch pricing before estimated launch</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        
        {/* Price Lock Guarantee Banner */}
        <div className="mb-16 bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Lock className="w-8 h-8 text-pink-400" />
            <h2 className="text-2xl font-bold text-pink-400">FIRST 100 CUSTOMERS - SPECIAL OFFER!</h2>
          </div>
          <div className="bg-pink-500/20 rounded-xl p-6 mb-4">
            <p className="text-lg font-semibold text-white">
              ⭐ PRICE LOCK GUARANTEE: One full year of locked pricing for our first 100 customers! 
              Your rate stays the same for 12 months - no price increases, guaranteed.
            </p>
          </div>
        </div>

        {/* Frequency Tiers */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            🎯 Frequency Tiers
          </h2>
          <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Choose your campaign's frequency level. Higher tiers guarantee more ad plays during your campaign period. 
            Pay once per campaign - no monthly commitments.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {frequencyTiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`relative bg-gray-900 border-2 ${tier.borderColor} rounded-2xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  tier.popular ? 'ring-2 ring-purple-400 ring-offset-2 ring-offset-black' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-yellow-400">${tier.price}</span>
                    <span className="text-gray-400 text-sm">{tier.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">{tier.description}</p>
                </div>

                <div className="space-y-3">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? 'text-white' : 'text-gray-400'}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedPlan(tier.name)}
                  className={`w-full mt-6 py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                    tier.popular
                      ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                  }`}
                >
                  Select Plan
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CPI Pricing */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            💰 Cost-Per-Impression (CPI) Pricing
          </h2>
          <p className="text-gray-300 text-center mb-8 max-w-3xl mx-auto">
            Our CPI rates are structured based on content format and average viewing time duration, 
            allowing you to optimize for engagement level and media richness.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
            {cpiRates.map((rate, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl p-6 text-center hover:border-purple-400 transition-colors">
                <div className={`text-2xl font-bold ${rate.color} mb-2`}>{rate.rate}</div>
                <div className="text-white font-medium mb-2">{rate.type}</div>
                <div className="text-gray-400 text-sm">{rate.description}</div>
              </div>
            ))}
          </div>

          {/* Example Calculation */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-blue-500/30 rounded-xl p-6">
            <h4 className="text-xl font-bold text-blue-400 mb-4">📊 Example Campaign Cost Calculation:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2 text-gray-200">
                <p><strong>Content Type:</strong> 20-second video without sound ($0.140 CPI)</p>
                <p><strong>Campaign Duration:</strong> 8 hours × 5 days = 40 hours</p>
              </div>
              <div className="space-y-2 text-gray-200">
                <p><strong>Estimated Impressions:</strong> 40 hours × 150 views/hour = 6,000 impressions</p>
                <p><strong>Total CPI Cost:</strong> 6,000 × $0.140 = <span className="text-blue-400 font-bold text-xl">$840</span></p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Creation Service - NEW */}
        <section className="mb-16">
          <div className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 border-2 border-amber-400/50 rounded-2xl p-8 mb-8">
            <div className="text-center mb-6">
              <span className="bg-amber-400 text-black px-3 py-1 rounded-full text-sm font-bold uppercase tracking-wide">✨ NEW FEATURE</span>
              <h2 className="text-3xl font-bold text-amber-400 mt-4 mb-2">🎨 Professional Content Creation</h2>
              <p className="text-gray-300 text-lg">Custom-designed videos & graphics that boost engagement by 40-60%</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-900 border border-amber-400/30 rounded-xl p-6 text-center hover:border-amber-400 transition-colors">
                <h3 className="text-xl font-bold text-amber-400 mb-3">Basic Package</h3>
                <div className="text-3xl font-bold text-white mb-2">$200</div>
                <div className="text-gray-300 text-sm mb-4">per campaign</div>
                <ul className="text-left text-gray-300 space-y-2 text-sm">
                  <li>• Simple animated graphics</li>
                  <li>• Basic text overlays</li>
                  <li>• Standard templates</li>
                  <li>• 2 revision rounds</li>
                </ul>
              </div>

              <div className="bg-gray-900 border-2 border-amber-400 rounded-xl p-6 text-center relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-amber-400 text-black px-3 py-1 rounded-full text-xs font-bold">POPULAR</div>
                <h3 className="text-xl font-bold text-amber-400 mb-3">Professional Package</h3>
                <div className="text-3xl font-bold text-white mb-2">$350</div>
                <div className="text-gray-300 text-sm mb-4">per campaign</div>
                <ul className="text-left text-gray-300 space-y-2 text-sm">
                  <li>• Custom video animations</li>
                  <li>• Brand-aligned design</li>
                  <li>• Motion graphics</li>
                  <li>• 4 revision rounds</li>
                  <li>• Performance optimization</li>
                </ul>
              </div>

              <div className="bg-gray-900 border border-amber-400/30 rounded-xl p-6 text-center hover:border-amber-400 transition-colors">
                <h3 className="text-xl font-bold text-amber-400 mb-3">Premium Package</h3>
                <div className="text-3xl font-bold text-white mb-2">$500</div>
                <div className="text-gray-300 text-sm mb-4">per campaign</div>
                <ul className="text-left text-gray-300 space-y-2 text-sm">
                  <li>• Full video production</li>
                  <li>• 3D animations</li>
                  <li>• Voice-over integration</li>
                  <li>• Multiple format exports</li>
                  <li>• Unlimited revisions</li>
                  <li>• A/B testing variants</li>
                </ul>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-amber-400 font-semibold">💡 Professionally designed content typically performs 40-60% better than basic graphics</p>
            </div>
          </div>
        </section>

        {/* Add-on Services */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            🛠️ Additional Services & Add-ons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOnServices.map((service, index) => (
              <div key={index} className="bg-gray-900 border border-gray-700 rounded-xl p-6 hover:border-green-400 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-bold text-white">{service.service}</h4>
                  <span className="text-green-400 font-bold text-lg">{service.price}</span>
                </div>
                <p className="text-gray-300 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-black border border-purple-500/30 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">Ready to Drive Results? 🎯</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Contact us today for a custom quote and start reaching thousands of customers with mobile billboard advertising!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:bernardo@migonow.com?subject=Mobile Billboard Quote Request"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <Mail className="w-5 h-5" />
                Get Free Quote
              </a>
              <a
                href="tel:+14806472380"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" />
                Call: (480) 647-2380
              </a>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>bernardo@migonow.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>(480) 647-2380</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>migonow.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Disclaimers */}
        <section className="mt-12">
          <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 border border-orange-500/30 rounded-xl p-6">
            <h4 className="text-orange-400 font-bold text-lg mb-4 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Important Pricing Disclaimers
            </h4>
            <div className="space-y-3 text-sm text-orange-100">
              <p><strong>CPI Estimates:</strong> All impression counts and CPI calculations are estimates based on historical data and may vary significantly based on actual traffic conditions, route changes, and market factors.</p>
              <p><strong>Service Availability:</strong> Campaign availability subject to driver network capacity and route scheduling. Premium locations and peak hour slots limited and allocated on first-come, first-served basis.</p>
              <p><strong>Pre-Launch Offer:</strong> FREE Starter plan availability limited to pre-launch period. Terms subject to change upon full market launch.</p>
              <p><strong>Pricing Changes:</strong> All pricing subject to change with 30-day notice. Existing campaigns honored at original contracted rates.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
