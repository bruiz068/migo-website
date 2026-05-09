"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ArrowLeft,
  Check,
  X,
  MapPin,
  Zap,
  Shield,
  Star,
  Mail,
  Phone,
  Globe,
  Sparkles,
  TrendingUp,
  BarChart3,
  Video,
  Target,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function PricingPage() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "quarterly">("monthly");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 149,
      quarterlyPrice: 129,
      description: "Perfect for neighborhood businesses testing mobile advertising",
      icon: MapPin,
      color: "blue",
      gradient: "from-blue-500 to-cyan-500",
      borderColor: "border-blue-500/30",
      hoverBorder: "hover:border-blue-400",
      bestFor: "Coffee shops, barbers, local restaurants",
      impressions: 500,
      cpi: "$0.30",
      features: [
        { text: "500 impressions / month", included: true },
        { text: "30-second video or image ad", included: true },
        { text: "1 geo-zone (2-mile radius)", included: true },
        { text: "Basic analytics dashboard", included: true },
        { text: "Standard ad rotation", included: true },
        { text: "QR code integration", included: false },
        { text: "Creative design assistance", included: false },
      ],
    },
    {
      name: "Growth",
      monthlyPrice: 349,
      quarterlyPrice: 299,
      description: "For established businesses ready to expand their reach and track results",
      icon: TrendingUp,
      color: "purple",
      gradient: "from-purple-500 to-pink-500",
      borderColor: "border-purple-500/30",
      hoverBorder: "hover:border-purple-400",
      popular: true,
      bestFor: "Restaurants, gyms, dental offices, salons",
      impressions: 1500,
      cpi: "$0.23",
      features: [
        { text: "1,500 impressions / month", included: true },
        { text: "30-second video ad", included: true },
        { text: "3 geo-zones", included: true },
        { text: "Full analytics dashboard", included: true },
        { text: "QR code with landing page", included: true },
        { text: "Priority ad rotation", included: true },
        { text: "Creative design assistance", included: false },
      ],
    },
    {
      name: "Pro",
      monthlyPrice: 799,
      quarterlyPrice: 699,
      description: "Maximum visibility with full creative support and citywide coverage",
      icon: Zap,
      color: "pink",
      gradient: "from-pink-500 to-orange-500",
      borderColor: "border-pink-500/30",
      hoverBorder: "hover:border-pink-400",
      bestFor: "Dealerships, franchises, multi-location brands",
      impressions: 4000,
      cpi: "$0.20",
      features: [
        { text: "4,000 impressions / month", included: true },
        { text: "60-second video with sound", included: true },
        { text: "Unlimited geo-zones", included: true },
        { text: "Real-time analytics dashboard", included: true },
        { text: "QR code + lead tracking", included: true },
        { text: "First priority + peak hours", included: true },
        { text: "Full creative design included", included: true },
      ],
    },
  ];

  const comparisons = [
    {
      channel: "Google Ads",
      cost: "$1,000 - $3,000/mo",
      attention: "2-3 seconds (scroll past)",
      targeting: "Interest-based",
    },
    {
      channel: "Facebook/Instagram Ads",
      cost: "$500 - $2,000/mo",
      attention: "1-2 seconds (thumb scroll)",
      targeting: "Demographic",
    },
    {
      channel: "Static Billboard",
      cost: "$1,000 - $3,000/mo",
      attention: "0.5 seconds (driving by)",
      targeting: "None — fixed location",
    },
    {
      channel: "Migo Mobile Billboard",
      cost: "$149 - $799/mo",
      attention: "15 minutes (captive audience)",
      targeting: "Geo-fenced + route-based",
      highlight: true,
    },
  ];

  const faqs = [
    {
      q: "How does billing work?",
      a: "Simple monthly billing via credit card. No contracts — cancel anytime. Quarterly plans get a discounted rate and are billed every 3 months. Each plan includes a set number of impressions that reset every billing cycle.",
    },
    {
      q: "What if I don't have a video ad ready?",
      a: "No problem. Starter and Growth plans can use our template library. Pro includes full creative design by our team. You can also add one-time creative production starting at $200.",
    },
    {
      q: "How are impressions counted?",
      a: "An impression is counted each time your ad plays on a tablet during a passenger ride. Your dashboard shows your remaining balance in real-time.",
    },
    {
      q: "What happens when I use all my impressions?",
      a: "Your ads pause until your next billing cycle resets your balance. Need more right away? Purchase a Boost Pack for instant additional impressions — no plan change needed.",
    },
    {
      q: "What are Boost Packs?",
      a: "Boost Packs are one-time impression top-ups you can buy anytime. Choose from 250, 750, or 2,000 extra impressions. They're added to your balance instantly and never expire.",
    },
    {
      q: "Can I change my plan later?",
      a: "Yes. Upgrade or downgrade anytime. Your unused impressions are pro-rated to your new plan. Changes take effect immediately.",
    },
    {
      q: "What areas do you cover?",
      a: "We currently operate in the Phoenix metro area including Scottsdale, Tempe, Mesa, Chandler, and Gilbert. Coverage expands as our driver network grows.",
    },
    {
      q: "How is this different from a regular billboard?",
      a: "Your ad is displayed on a tablet screen inside rideshare vehicles — a true captive audience sitting 2 feet from the screen for an average of 15 minutes. Plus, you get geo-targeting, QR codes for direct engagement, and real analytics.",
    },
  ];

  const price = (plan: (typeof plans)[0]) =>
    billingPeriod === "monthly" ? plan.monthlyPrice : plan.quarterlyPrice;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-neutral-900/95 via-purple-900/30 to-pink-900/30 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <ArrowLeft size={20} className="text-white/60" />
              <div className="flex items-center gap-3">
                <Image
                  src="https://i.imgur.com/clZNuAZ.png?v=2"
                  alt="Migo Logo"
                  width={200}
                  height={48}
                  className="h-12 w-auto"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    e.currentTarget.nextElementSibling?.classList.remove("hidden");
                  }}
                />
                <span className="font-extrabold tracking-tight text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400">
                  Advertisement
                </span>
                <div className="hidden flex items-center gap-3">
                  <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-sky-400 shadow-lg shadow-pink-500/30" />
                  <span className="font-extrabold tracking-tight text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400">
                    Migo Advertisement
                  </span>
                </div>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <Link href="/pricing" className="text-pink-400 font-semibold">
                Pricing
              </Link>
              <Link href="/ad-specs" className="hover:text-purple-400 font-semibold">
                Ad Specs
              </Link>
              <Link href="/driver-earnings" className="hover:text-sky-400 font-semibold">
                Driver Earnings
              </Link>
              <Link href="/faq" className="hover:text-cyan-400 font-semibold">
                FAQ
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-blue-500/20" />
        <div className="relative z-10 container mx-auto px-6 py-16 text-center">
          <div className="flex justify-center mb-8">
            <Image
              src="https://i.imgur.com/clZNuAZ.png?v=2"
              alt="Migo Logo"
              width={200}
              height={67}
              className="max-w-[200px] h-auto"
              onError={(e) => {
                e.currentTarget.style.display = "none";
              }}
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Pick an Impression Pack. Your ads play until your balance runs out. Need more? Buy a Boost anytime.
          </p>

          {/* Key value prop */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 mb-8">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>No setup fees</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Cancel anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>15-min captive audience</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4 text-green-400" />
              <span>Real analytics</span>
            </div>
          </div>

          {/* Founding Partner Banner */}
          <div className="max-w-3xl mx-auto p-4 rounded-2xl border border-green-400/30 bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-green-400" />
              <h3 className="text-lg font-bold text-green-400">Founding Partner Program</h3>
            </div>
            <p className="text-white/80 text-sm mb-1">
              Join during our testing phase and <strong className="text-green-400">advertise for free</strong>. When we launch paid plans, founding partners lock in a discounted rate for life.
            </p>
            <p className="text-white/50 text-xs">Limited spots available in Phoenix metro area</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        {/* Billing Toggle */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <button
            onClick={() => setBillingPeriod("monthly")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              billingPeriod === "monthly"
                ? "bg-white text-black"
                : "bg-white/10 text-white/60 hover:bg-white/20"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod("quarterly")}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 ${
              billingPeriod === "quarterly"
                ? "bg-white text-black"
                : "bg-white/10 text-white/60 hover:bg-white/20"
            }`}
          >
            Quarterly
            <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full">Save up to 17%</span>
          </button>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {plans.map((plan) => {
            const Icon = plan.icon;
            const currentPrice = price(plan);
            return (
              <div
                key={plan.name}
                className={`relative bg-gray-900/80 border-2 ${plan.borderColor} ${plan.hoverBorder} rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                  plan.popular ? "ring-2 ring-purple-400 ring-offset-2 ring-offset-black" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      MOST POPULAR
                    </div>
                  </div>
                )}

                <div className="text-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${plan.gradient} mb-4`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold text-white">${currentPrice}</span>
                    <span className="text-gray-400 text-sm">/mo</span>
                  </div>
                  {billingPeriod === "quarterly" && (
                    <p className="text-green-400 text-xs mt-1">
                      Billed ${currentPrice * 3}/quarter &mdash; save ${(plan.monthlyPrice - plan.quarterlyPrice) * 3}/yr
                    </p>
                  )}
                  <p className="text-gray-500 text-xs mt-1">{plan.impressions.toLocaleString()} impressions &middot; {plan.cpi}/impression</p>
                </div>

                {/* Best for badge */}
                <div className="bg-white/5 rounded-lg px-3 py-2 mb-6 text-center">
                  <span className="text-xs text-gray-400">Best for: </span>
                  <span className="text-xs text-white/80">{plan.bestFor}</span>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                      ) : (
                        <X className="w-5 h-5 text-gray-600 mt-0.5 flex-shrink-0" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-white" : "text-gray-500"}`}>
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href={`mailto:bernardo@migonow.com?subject=Migo Ads — Interested in the ${plan.name} Plan`}
                  className={`block w-full text-center py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  Get Started
                </a>
              </div>
            );
          })}
        </div>

        {/* Boost Packs */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-3">
              Need More Impressions?
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Running low before your next renewal? Buy a Boost Pack anytime — impressions are added to your balance instantly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Small Boost", impressions: 250, price: 99, cpi: "$0.40" },
              { name: "Medium Boost", impressions: 750, price: 249, cpi: "$0.33", popular: true },
              { name: "Large Boost", impressions: 2000, price: 499, cpi: "$0.25" },
            ].map((boost) => (
              <div
                key={boost.name}
                className={`bg-gray-900/80 border rounded-xl p-6 text-center transition-all hover:scale-[1.02] ${
                  boost.popular
                    ? "border-amber-400/50 ring-1 ring-amber-400/30"
                    : "border-white/10 hover:border-amber-400/30"
                }`}
              >
                {boost.popular && (
                  <div className="text-xs text-amber-400 font-bold mb-2">BEST VALUE</div>
                )}
                <h3 className="text-lg font-bold text-white mb-1">{boost.name}</h3>
                <div className="text-3xl font-bold text-amber-400 mb-1">${boost.price}</div>
                <div className="text-gray-400 text-sm mb-2">one-time</div>
                <div className="text-white/70 text-sm">{boost.impressions.toLocaleString()} impressions</div>
                <div className="text-gray-500 text-xs mt-1">{boost.cpi} per impression</div>
              </div>
            ))}
          </div>
        </section>

        {/* Enterprise CTA */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 border border-white/10 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise &amp; Agencies</h3>
              <p className="text-gray-400">
                Multi-location brands, agencies, or regional campaigns? Let&apos;s build a custom plan with volume pricing, dedicated support, and white-label reporting.
              </p>
            </div>
            <a
              href="mailto:bernardo@migonow.com?subject=Enterprise Inquiry — Migo Ads"
              className="flex-shrink-0 bg-white text-black px-8 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
            >
              Contact Sales
            </a>
          </div>
        </div>

        {/* Why Migo > Other Channels */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-4 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Why Mobile Billboard Ads?
          </h2>
          <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
            Your ad plays on a tablet screen 2 feet from a passenger sitting still for 15 minutes. No scrolling past. No skipping. No ad blockers.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full max-w-5xl mx-auto text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Channel</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Typical Monthly Cost</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Avg. Attention</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Targeting</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr
                    key={i}
                    className={`border-b border-white/5 ${
                      row.highlight
                        ? "bg-gradient-to-r from-purple-500/10 to-pink-500/10"
                        : ""
                    }`}
                  >
                    <td className={`py-4 px-4 font-medium ${row.highlight ? "text-purple-400" : "text-white"}`}>
                      {row.highlight && <Star className="w-4 h-4 inline mr-1 text-yellow-400" />}
                      {row.channel}
                    </td>
                    <td className="py-4 px-4 text-gray-300">{row.cost}</td>
                    <td className={`py-4 px-4 ${row.highlight ? "text-green-400 font-semibold" : "text-gray-300"}`}>
                      {row.attention}
                    </td>
                    <td className="py-4 px-4 text-gray-300">{row.targeting}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-center text-gray-500 text-xs mt-4 max-w-2xl mx-auto">
            CPM looks higher on paper, but the quality of attention is unmatched. A Facebook &ldquo;impression&rdquo; is a thumb scrolling past in 1 second. A Migo impression is a passenger watching your ad for 30-60 seconds with nothing else to do.
          </p>
        </section>

        {/* How It Works */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Pick a Pack",
                desc: "Choose Starter, Growth, or Pro based on how many impressions you need.",
                icon: Target,
              },
              {
                step: "2",
                title: "Send Your Ad",
                desc: "Upload your video or image — or let our team create one for you.",
                icon: Video,
              },
              {
                step: "3",
                title: "We Deploy",
                desc: "Your ad goes live on tablets in rideshare vehicles across your target zones.",
                icon: Zap,
              },
              {
                step: "4",
                title: "Track Results",
                desc: "Watch impressions, QR scans, and engagement in your dashboard.",
                icon: BarChart3,
              },
            ].map((item, i) => {
              const StepIcon = item.icon;
              return (
                <div key={i} className="text-center">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-4">
                    <StepIcon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="text-xs text-purple-400 font-semibold mb-1">STEP {item.step}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Content Creation Add-on */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-400/30 rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 text-xs rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 mb-4">
                  <Sparkles size={14} className="text-amber-400" /> ADD-ON
                </div>
                <h3 className="text-2xl font-bold text-amber-400 mb-3">Need an Ad Created?</h3>
                <p className="text-white/80 mb-4">
                  Don&apos;t have a video ad? Our design team creates scroll-stopping content optimized for in-vehicle displays. Professionally designed ads perform 40-60% better.
                </p>
                <ul className="space-y-2 text-sm text-white/70">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Custom video or animated graphic</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Optimized for tablet screens</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> 2-3 day turnaround</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-amber-400" /> Revision rounds included</li>
                </ul>
              </div>
              <div className="flex-shrink-0 bg-neutral-900 rounded-xl p-6 border border-amber-400/20 text-center min-w-[220px]">
                <div className="text-sm text-gray-400 mb-2">Starting at</div>
                <div className="text-4xl font-bold text-amber-400 mb-1">$200</div>
                <div className="text-gray-400 text-sm mb-4">one-time</div>
                <div className="text-xs text-white/50 space-y-1">
                  <div>Basic graphics &mdash; $200</div>
                  <div>Animated content &mdash; $350</div>
                  <div>Full video production &mdash; $500</div>
                </div>
                <p className="text-green-400 text-xs mt-3 font-semibold">FREE for Pro plan</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-20 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium text-white">{faq.q}</span>
                  {openFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-400 text-sm">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-black border border-purple-500/30 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Reach Thousands of Customers?</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Get started today &mdash; or join as a founding partner and advertise for free during our testing phase.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:bernardo@migonow.com?subject=Migo Ads — Get Started"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <Mail className="w-5 h-5" />
                Get a Free Quote
              </a>
              <a
                href="tel:+14806472380"
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" />
                (480) 647-2380
              </a>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-400 text-sm">
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

        {/* Disclaimer */}
        <section className="mt-12">
          <div className="bg-gray-900/50 border border-white/5 rounded-xl p-6">
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-4 h-4 text-gray-500" />
              <h4 className="text-gray-500 font-medium text-sm">Pricing Notes</h4>
            </div>
            <div className="space-y-2 text-xs text-gray-500">
              <p>Each plan includes a fixed number of impressions per billing cycle. When your balance reaches zero, ads pause until your next renewal or a Boost purchase.</p>
              <p>Boost Pack impressions are added to your balance instantly and never expire — they carry over across billing cycles.</p>
              <p>All plans are month-to-month unless a quarterly term is selected. No long-term contracts required. Pricing subject to change with 30 days written notice.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
