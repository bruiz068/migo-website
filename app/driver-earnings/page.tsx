"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Clock, DollarSign, Car, Calendar, MapPin, CheckCircle, AlertTriangle, Shield, Users, Smartphone, TrendingUp } from "lucide-react";

export default function DriverEarnings() {
  const [activeTab, setActiveTab] = useState("overview");

  const earningsScenarios = [
    {
      schedule: "Part-Time",
      hours: "15-20 hours/week",
      potential: "$180-240*",
      description: "Perfect for supplementing income"
    },
    {
      schedule: "Regular",
      hours: "25-35 hours/week", 
      potential: "$300-420*",
      description: "Steady additional income stream"
    },
    {
      schedule: "Full-Time",
      hours: "40+ hours/week",
      potential: "$480+*",
      description: "Maximum earning potential"
    }
  ];

  const gettingStartedSteps = [
    {
      step: 1,
      title: "Apply Online",
      description: "Submit your application with basic vehicle and driver information",
      icon: Users
    },
    {
      step: 2,
      title: "Vehicle Inspection",
      description: "Quick inspection to ensure your vehicle meets our safety standards",
      icon: Car
    },
    {
      step: 3,
      title: "Training Session",
      description: "Learn how to use the equipment and maximize your earnings",
      icon: Smartphone
    },
    {
      step: 4,
      title: "Equipment Setup",
      description: "We install the mobile billboard display in your vehicle",
      icon: CheckCircle
    },
    {
      step: 5,
      title: "Start Earning",
      description: "Begin driving and earning additional income with every ride",
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-950 text-white">
      {/* Header */}
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
              <Link href="/pricing" className="hover:text-pink-400 font-semibold">Pricing</Link>
              <Link href="/ad-specs" className="hover:text-purple-400 font-semibold">Ad Specs</Link>
              <Link href="/driver-earnings" className="text-sky-400 font-semibold">Driver Earnings</Link>
              <Link href="/service-area" className="hover:text-cyan-400 font-semibold">Service Area</Link>
              <Link href="/about" className="hover:text-green-400 font-semibold">About</Link>
              <Link href="/faq" className="hover:text-yellow-400 font-semibold">FAQ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-pink-600/30" />
          <div className="absolute top-1/2 -right-24 h-72 w-72 rounded-full blur-3xl bg-sky-500/30" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Earn Extra Income as a <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400">Migo Driver</span>
            </h1>
            <p className="mt-6 text-xl text-white/80 max-w-3xl mx-auto">
              Turn your rideshare vehicle into a mobile billboard and earn additional income with every drive. 
              Join our network of drivers and start earning today.
            </p>
            
            {/* Founding Driver Opportunity */}
            <div className="mt-6 p-4 rounded-2xl border border-sky-400/30 bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-pink-500/10 max-w-2xl mx-auto">
              <div className="text-center">
                <h3 className="text-lg font-bold text-sky-400 mb-1">🚀 Be a Founding Driver</h3>
                <div className="text-pink-400 font-semibold mb-1">🗓️ Estimated Launch: January 15, 2026</div>
                <div className="text-white/50 text-xs mb-3">*30-day written notice provided if launch date changes</div>
                <div className="flex flex-col sm:flex-row gap-4 text-sm justify-center">
                  <span className="text-white/80">📊 Testing: 3 tablets</span>
                  <span className="text-white/80">🚀 Launch 2026: 10 spots</span>
                  <span className="text-white/80">📈 Year 2: 50 tablets</span>
                  <span className="text-white/80">🎯 Vision: 100+ tablets</span>
                </div>
                <p className="text-white/60 text-sm mt-2">Apply now for exclusive founding driver benefits</p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#apply" className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 font-semibold shadow-lg shadow-pink-500/30">
                Apply to Become a Driver
              </a>
              <a href="#overview" className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 border border-white/15 hover:bg-white/5">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: "overview", label: "Earnings Overview", icon: DollarSign },
            { id: "schedule", label: "Flexible Schedule", icon: Calendar },
            { id: "requirements", label: "Requirements", icon: CheckCircle },
            { id: "process", label: "Getting Started", icon: Users }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-pink-500 to-sky-500 text-white"
                  : "border border-white/10 text-white/70 hover:text-white hover:border-white/20"
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Content Based on Active Tab */}
      <section id="overview" className="mx-auto max-w-7xl px-6 pb-16">
        {activeTab === "overview" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Earnings <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400">Potential</span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Your earnings are based on actual view time and ad impressions during your drive time
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {earningsScenarios.map((scenario, index) => (
                <div key={index} className="rounded-2xl border border-white/10 bg-neutral-900 p-6 hover:border-pink-400/30 transition">
                  <div className="text-center">
                    <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400 mb-2">
                      {scenario.schedule}
                    </h3>
                    <div className="text-3xl font-bold mb-2">{scenario.potential}</div>
                    <div className="text-white/60 text-sm mb-4">{scenario.hours}</div>
                    <p className="text-white/70 text-sm">{scenario.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-center">How Earnings Work</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-pink-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock size={16} className="text-pink-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">View Time Based</h4>
                      <p className="text-white/70 text-sm">Earnings calculated on actual time ads are viewed by passengers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <MapPin size={16} className="text-purple-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Route Dependent</h4>
                      <p className="text-white/70 text-sm">Higher traffic areas and popular routes typically generate more earnings</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <TrendingUp size={16} className="text-sky-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Campaign Activity</h4>
                      <p className="text-white/70 text-sm">More active advertising campaigns mean higher earning potential</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                      <DollarSign size={16} className="text-green-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Weekly Payouts</h4>
                      <p className="text-white/70 text-sm">Receive earnings weekly via direct deposit or preferred payment method</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "schedule" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400">Flexible</span> Schedule Options
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Work when you want, where you want. Our system adapts to your existing rideshare schedule.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="rounded-2xl border border-white/10 bg-neutral-900 p-8">
                <h3 className="text-xl font-bold mb-6">Peak Hours (Higher Rates)</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Monday - Friday</span>
                    <span className="text-pink-400 font-semibold">7-9 AM, 5-7 PM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Saturday - Sunday</span>
                    <span className="text-purple-400 font-semibold">10 AM - 10 PM</span>
                  </div>
                  <div className="text-sm text-white/60 mt-4">
                    Peak hours typically generate 25-40% higher earnings due to increased passenger volume
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-neutral-900 p-8">
                <h3 className="text-xl font-bold mb-6">Off-Peak Hours</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Late Night</span>
                    <span className="text-sky-400 font-semibold">10 PM - 2 AM</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Early Morning</span>
                    <span className="text-green-400 font-semibold">5 AM - 7 AM</span>
                  </div>
                  <div className="text-sm text-white/60 mt-4">
                    Still earning potential during off-peak times, especially in entertainment districts
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-center">Schedule Benefits</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-pink-500/20 flex items-center justify-center">
                    <Calendar size={20} className="text-pink-400"/>
                  </div>
                  <h4 className="font-semibold mb-2">No Minimum Hours</h4>
                  <p className="text-sm text-white/70">Drive as little or as much as you want</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <Clock size={20} className="text-purple-400"/>
                  </div>
                  <h4 className="font-semibold mb-2">24/7 Availability</h4>
                  <p className="text-sm text-white/70">Earn around the clock, anytime you drive</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-sky-500/20 flex items-center justify-center">
                    <MapPin size={20} className="text-sky-400"/>
                  </div>
                  <h4 className="font-semibold mb-2">Any Location</h4>
                  <p className="text-sm text-white/70">Earn wherever your rides take you</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "requirements" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Driver <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400">Requirements</span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Simple requirements to ensure safety and quality service for all participants
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="rounded-2xl border border-white/10 bg-neutral-900 p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Car className="text-pink-400" size={24} />
                  Vehicle Requirements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    <span>4-door vehicle (sedan, SUV, or hatchback)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    <span>2015 or newer model year</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    <span>Valid registration and current auto insurance</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    <span>Clean interior and exterior condition</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    <span>Functioning air conditioning and heating</span>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-neutral-900 p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <Users className="text-purple-400" size={24} />
                  Driver Requirements
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    <span>Valid driver's license (21+ years old)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    <span>Active rideshare driver (Uber, Lyft, etc.)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    <span>Smartphone with internet connection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    <span>Professional driving record</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle size={16} className="text-green-400 flex-shrink-0" />
                    <span>Commitment to providing excellent service</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 border border-white/10">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                <Shield className="text-sky-400" size={24} />
                Insurance & Liability
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Your Responsibility</h4>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>• Maintain appropriate auto insurance for your driving activities</li>
                    <li>• Follow all traffic laws and regulations</li>
                    <li>• Prioritize road safety - never interact with equipment while driving</li>
                    <li>• Report any equipment issues or loose mounting immediately</li>
                    <li>• Care for financed tablet equipment</li>
                    <li>• Accept full responsibility for any accidents caused by distraction</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Equipment Financing</h4>
                  <ul className="text-white/70 text-sm space-y-2">
                    <li>• Tablet is financed to driver (not company-owned)</li>
                    <li>• Small payments deducted from earnings until paid off</li>
                    <li>• Driver keeps tablet permanently once fully paid off</li>
                    <li>• Technical support and maintenance guidance</li>
                    <li>• 24/7 customer service assistance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "process" && (
          <div>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400">Get Started</span>
              </h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">
                Simple 5-step process to start earning extra income as a Migo driver
              </p>
            </div>

            <div className="space-y-8">
              {gettingStartedSteps.map((step, index) => (
                <div key={index} className="flex gap-6 p-6 rounded-2xl border border-white/10 bg-neutral-900 hover:border-pink-400/30 transition">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-500 to-sky-500 flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <step.icon size={20} className="text-pink-400" />
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-white/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Disclaimers */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="bg-neutral-900/60 border border-white/10 rounded-2xl p-8">
          <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
            <AlertTriangle className="text-yellow-400" size={20} />
            Important Disclaimers
          </h3>
          <div className="space-y-4 text-sm text-white/70">
            <p>
              <strong>Earnings Disclaimer:</strong> All earnings figures shown are estimates only and not guaranteed. 
              Actual earnings may vary significantly based on routes, market demand, campaign availability, and driver participation. 
              Past performance does not guarantee future results.
            </p>
            <p>
              <strong>Insurance & Liability:</strong> Drivers are responsible for maintaining their own auto insurance appropriate for their driving activities. 
              Migo Advertisement is an advertising platform, not a transportation company. We assume no liability for accidents, damages, or incidents that may occur during campaign participation.
            </p>
            <p>
              <strong>Equipment & Service:</strong> Tablets are financed to drivers, not company-owned. Small payments are deducted from earnings until device is paid off. 
              Once fully paid off, drivers keep the tablet permanently, even if they stop driving. Company covers equipment failures and manufacturing defects. 
              Drivers are responsible for damage from negligence, misuse, or accidents. Theft is not covered by company. Optional tablet coverage available for monthly fee (deducted from earnings). 
              Service availability subject to business operations and inventory.
            </p>
            <p>
              <strong>View Time Calculations:</strong> Earnings are calculated based on actual view time and ad impressions during your drive time. 
              Amounts shown are estimates and may vary based on routes, traffic, and campaign activity.
            </p>
            <p>
              <strong>⚠️ PRE-LAUNCH DISCLAIMER:</strong> All rates and terms are subject to change. 
              Final pricing structure will be confirmed upon official market launch.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="apply" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400">Earning?</span>
          </h2>
          <p className="text-white/70 text-lg mb-8 max-w-2xl mx-auto">
            Join our network of mobile billboard drivers and start earning additional income today
          </p>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:bernardo@migonow.com?subject=Driver Application - Migo Advertisement" 
                 className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 font-semibold shadow-lg shadow-pink-500/30">
                Apply to Become a Driver
              </a>
              <a href="tel:+14806472380" 
                 className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 border border-white/15 hover:bg-white/5">
                Call (480) 647-2380
              </a>
            </div>
            <p className="text-white/60 text-sm">
              Questions? Email us at <a href="mailto:bernardo@migonow.com" className="text-pink-400 hover:underline">bernardo@migonow.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
