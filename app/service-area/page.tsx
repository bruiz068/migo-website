"use client";

import Link from "next/link";
import { ArrowLeft, MapPin, Navigation, Clock, TrendingUp, Users, Building, Car, Map } from "lucide-react";

export default function ServiceAreaPage() {
  const currentCoverage = [
    { area: "Downtown Phoenix", status: "Active", routes: "Business District, Convention Center", traffic: "High" },
    { area: "Camelback Corridor", status: "Active", routes: "Medical Centers, Offices", traffic: "Medium-High" }
  ];

  const expansionPlan = [
    { 
      phase: "Phase 1", 
      timeline: "Launch 2026", 
      areas: ["Central Phoenix", "Downtown", "Midtown"], 
      tablets: 10,
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/30"
    },
    { 
      phase: "Phase 2", 
      timeline: "Q2 2026", 
      areas: ["Paradise Valley", "Ahwatukee"], 
      tablets: 15,
      color: "text-blue-400",
      bgColor: "bg-blue-400/10",
      borderColor: "border-blue-400/30"
    },
    { 
      phase: "Phase 3", 
      timeline: "Q4 2026", 
      areas: ["Mesa", "Chandler"], 
      tablets: 25,
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/30"
    },
    { 
      phase: "Phase 4", 
      timeline: "2027", 
      areas: ["Full Metro Coverage", "Surrounding Cities"], 
      tablets: "50+",
      color: "text-pink-400",
      bgColor: "bg-pink-400/10",
      borderColor: "border-pink-400/30"
    }
  ];

  const keyRoutes = [
    { name: "I-10 Corridor", description: "Main east-west artery through Phoenix", impact: "High visibility commuter route" },
    { name: "Loop 101", description: "Circumferential freeway around Phoenix metro", impact: "Suburban shopping and business access" },
    { name: "Central Avenue", description: "Major north-south arterial", impact: "Downtown and midtown business district" },
    { name: "Camelback Road", description: "Premium east-west corridor", impact: "High-income residential and retail" },
    { name: "7th Street/7th Avenue", description: "North-south Phoenix arterials", impact: "Central business and residential corridors" }
  ];

  const demographics = [
    { metric: "Metro Population", value: "5.0M+", description: "Phoenix Metropolitan Area" },
    { metric: "Daily Commuters", value: "2.1M+", description: "Rideshare-accessible population" },
    { metric: "Average Income", value: "$65K+", description: "Target advertising demographics" },
    { metric: "Tourism Annual", value: "46M+", description: "Visitors to Phoenix area yearly" }
  ];

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
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <Link href="/pricing" className="hover:text-pink-400 font-semibold">Pricing</Link>
              <Link href="/ad-specs" className="hover:text-purple-400 font-semibold">Ad Specs</Link>
              <Link href="/driver-earnings" className="hover:text-sky-400 font-semibold">Driver Earnings</Link>
              <Link href="/about" className="hover:text-blue-400 font-semibold">About</Link>
              <Link href="/testimonials" className="hover:text-yellow-400 font-semibold">Testimonials</Link>
              <Link href="/faq" className="hover:text-cyan-400 font-semibold">FAQ</Link>
              <Link href="/contact" className="hover:text-orange-400 font-semibold">Contact</Link>
              <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <ArrowLeft size={16} />
                Home
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 max-w-7xl">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <MapPin className="text-green-400" size={32} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Service Coverage Area
            </h1>
          </div>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Strategic mobile billboard placement across Phoenix Metropolitan Area's highest-traffic routes and business districts.
          </p>
        </div>

        {/* Current Testing Phase */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-2xl border border-orange-400/30 p-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-orange-400 mb-2 flex items-center justify-center gap-2">
                <Navigation size={24} />
                Current Testing Phase
              </h2>
              <p className="text-white/80">3 tablets actively testing system reliability and performance</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {currentCoverage.map((area, index) => (
                <div key={index} className="bg-black/30 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <h3 className="font-semibold text-white">{area.area}</h3>
                  </div>
                  <div className="text-sm space-y-1">
                    <div className="text-white/60">Routes: {area.routes}</div>
                    <div className="text-green-400">Traffic: {area.traffic}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Expansion Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8 flex items-center justify-center gap-2">
            <TrendingUp className="text-blue-400" size={28} />
            Expansion Timeline
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expansionPlan.map((phase, index) => (
              <div key={index} className={`${phase.bgColor} rounded-2xl border ${phase.borderColor} p-6`}>
                <div className="text-center">
                  <h3 className={`text-xl font-bold ${phase.color} mb-2`}>{phase.phase}</h3>
                  <div className="text-white/60 text-sm mb-4">{phase.timeline}</div>
                  <div className={`text-2xl font-bold ${phase.color} mb-4`}>
                    {typeof phase.tablets === 'number' ? `${phase.tablets} tablets` : phase.tablets}
                  </div>
                  <div className="space-y-1">
                    {phase.areas.map((area, areaIndex) => (
                      <div key={areaIndex} className="text-white/80 text-sm">
                        {area}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Routes */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8 flex items-center justify-center gap-2">
            <Map className="text-purple-400" size={28} />
            High-Impact Routes
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyRoutes.map((route, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl border border-purple-400/30 p-6">
                <h3 className="text-lg font-bold text-purple-400 mb-2 flex items-center gap-2">
                  <Car size={18} />
                  {route.name}
                </h3>
                <p className="text-white/80 text-sm mb-3">{route.description}</p>
                <div className="text-blue-400 text-sm font-semibold">{route.impact}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Market Demographics */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8 flex items-center justify-center gap-2">
            <Users className="text-cyan-400" size={28} />
            Market Demographics
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demographics.map((demo, index) => (
              <div key={index} className="bg-gradient-to-r from-cyan-500/10 to-teal-500/10 rounded-2xl border border-cyan-400/30 p-6 text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">{demo.value}</div>
                <div className="font-semibold text-white mb-1">{demo.metric}</div>
                <div className="text-white/60 text-sm">{demo.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Coverage Benefits */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-green-400/30 p-8">
            <h2 className="text-2xl font-bold text-center text-white mb-8 flex items-center justify-center gap-2">
              <Building className="text-green-400" size={24} />
              Strategic Coverage Benefits
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-green-400 font-bold text-lg mb-2">Business Districts</div>
                <p className="text-white/80 text-sm">
                  Downtown Phoenix and Central Phoenix business centers for B2B advertising reach
                </p>
              </div>
              <div className="text-center">
                <div className="text-blue-400 font-bold text-lg mb-2">Shopping Centers</div>
                <p className="text-white/80 text-sm">
                  Major retail hubs including Biltmore and neighborhood centers throughout Phoenix
                </p>
              </div>
              <div className="text-center">
                <div className="text-purple-400 font-bold text-lg mb-2">Entertainment</div>
                <p className="text-white/80 text-sm">
                  Sports venues, restaurants, nightlife districts, and tourist attractions
                </p>
              </div>
              <div className="text-center">
                <div className="text-cyan-400 font-bold text-lg mb-2">Residential</div>
                <p className="text-white/80 text-sm">
                  Affluent neighborhoods in Paradise Valley, Arcadia, and Central Phoenix
                </p>
              </div>
              <div className="text-center">
                <div className="text-pink-400 font-bold text-lg mb-2">Transportation</div>
                <p className="text-white/80 text-sm">
                  Airport routes, major freeways, and high-traffic arterial roads
                </p>
              </div>
              <div className="text-center">
                <div className="text-orange-400 font-bold text-lg mb-2">Healthcare</div>
                <p className="text-white/80 text-sm">
                  Medical centers, hospitals, and healthcare campuses throughout the metro
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Launch Timeline */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl border border-pink-400/30 p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-pink-400 mb-4 flex items-center justify-center gap-2">
                <Clock size={24} />
                Launch Schedule
              </h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-lg font-bold text-blue-400 mb-1">Pre-Launch Testing</div>
                  <div className="text-white/80">Current - January 2026</div>
                  <div className="text-sm text-white/60 mt-1">3 tablets validating system</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-purple-400 mb-1">Estimated Launch</div>
                  <div className="text-white/80">January 15, 2026</div>
                  <div className="text-sm text-white/60 mt-1">10 tablets initial deployment</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-pink-400 mb-1">Full Scale Target</div>
                  <div className="text-white/80">End of 2027</div>
                  <div className="text-sm text-white/60 mt-1">50+ tablets metro-wide</div>
                </div>
              </div>
              <p className="text-white/50 text-sm mt-4">
                *30-day written notice provided if launch timeline changes
              </p>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want Coverage in Your Area?
            </h3>
            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
              Contact us about priority placement in specific routes or neighborhoods. Early partners get preferred scheduling and pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 font-semibold shadow-lg shadow-pink-500/30"
              >
                Request Coverage Info
              </Link>
              <Link 
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 border border-purple-400/30 font-semibold hover:bg-purple-500/10 transition-colors"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <ArrowLeft size={16} />
              Return to Homepage
            </Link>
            <div className="flex gap-4">
              <Link href="/driver-earnings" className="text-blue-400 hover:text-blue-300 transition-colors">
                Driver Info
              </Link>
              <Link href="/pricing" className="text-green-400 hover:text-green-300 transition-colors">
                Advertiser Pricing
              </Link>
              <Link href="/contact" className="text-purple-400 hover:text-purple-300 transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
