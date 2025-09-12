"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Smartphone, QrCode, MapPin, Clock, Rocket, Sparkles, DollarSign, Mail, ShieldCheck } from "lucide-react";

export default function Page() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string>("");
  const [currentSlide, setCurrentSlide] = useState(0);

  // Slideshow ads data - DEMO EXAMPLES ONLY
  const ads = [
    {
      business: "Tony's Pizza",
      tagline: "Authentic Italian",
      emoji: "🍕",
      offer: "30% OFF TODAY",
      gradient: "from-orange-400 via-red-500 to-pink-600",
      bgGradient: "from-orange-500/90 to-red-600/90"
    },
    {
      business: "FreshMart",
      tagline: "Organic Groceries",
      emoji: "🥬",
      offer: "FREE DELIVERY",
      gradient: "from-green-400 via-emerald-500 to-teal-600",
      bgGradient: "from-green-500/90 to-emerald-600/90"
    },
    {
      business: "AutoFix Pro",
      tagline: "Car Repair & Service",
      emoji: "🔧",
      offer: "$50 OFF SERVICE",
      gradient: "from-blue-400 via-indigo-500 to-purple-600",
      bgGradient: "from-blue-500/90 to-indigo-600/90"
    },
    {
      business: "Coffee Corner",
      tagline: "Premium Coffee",
      emoji: "☕",
      offer: "BUY 1 GET 1 FREE",
      gradient: "from-amber-400 via-orange-500 to-red-600",
      bgGradient: "from-amber-500/90 to-orange-600/90"
    }
  ];

  // Auto-rotate slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % ads.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          company: form.company,
          message: form.message,
          source: "landing",
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      
      setStatus("ok");
      setForm({ firstName: "", lastName: "", email: "", company: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong.");
    }
  }

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-neutral-950 via-purple-950/20 to-pink-950/20 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-neutral-900/95 via-purple-900/30 to-pink-900/30 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
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
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <Link href="/pricing" className="hover:text-pink-400 font-semibold">Pricing</Link>
            <Link href="/ad-specs" className="hover:text-purple-400 font-semibold">Ad Specs</Link>
            <Link href="/driver-earnings" className="hover:text-sky-400 font-semibold">Driver Earnings</Link>
            <Link href="/service-area" className="hover:text-green-400 font-semibold">Service Area</Link>
            <Link href="/about" className="hover:text-blue-400 font-semibold">About</Link>
            <Link href="/testimonials" className="hover:text-yellow-400 font-semibold">Testimonials</Link>
            <Link href="/faq" className="hover:text-cyan-400 font-semibold">FAQ</Link>
            <a href="#video" className="hover:text-pink-400">Demo</a>
            <a href="#features" className="hover:text-purple-400">Features</a>
            <a href="#contact" className="hover:text-purple-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* EXCLUSIVE PRELAUNCH OFFER BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-sky-600/20 border-b border-pink-500/30">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-sky-500/10" />
        <div className="mx-auto max-w-7xl px-6 py-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
                <span className="text-pink-400 font-bold text-sm uppercase tracking-wide">🔥 EXCLUSIVE PRELAUNCH</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-white/20" />
              <div>
                <span className="text-white font-bold text-lg">FIRST 50 CUSTOMERS:</span>
                <span className="ml-2 text-yellow-400 font-extrabold text-lg">$150 FREE CAMPAIGN CREDITS</span>
                <span className="ml-2 text-white/80">+ Price Lock Guarantee!</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-white/60 text-xs uppercase tracking-wide">Spots Remaining</div>
                <div className="text-pink-400 font-bold text-xl">47</div>
              </div>
              <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold text-white shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105">
                Claim Your Spot →
              </a>
            </div>
          </div>
        </div>
      </div>

      <section id="cta" className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-pink-600/30" />
          <div className="absolute top-1/2 -right-24 h-72 w-72 rounded-full blur-3xl bg-sky-500/30" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-7">
            <p className="inline-flex items-center gap-2 text-xs md:text-sm rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-4">
              <Sparkles size={14}/> One-stop creative + advertising hub
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Turn every rideshare <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400">ride</span> into a customer.
            </h1>
            <p className="mt-5 text-white/80 text-lg max-w-xl">
              We design ads, build websites & apps, and showcase your brand on our in-car <strong>Mobile Billboard</strong> network.
            </p>
            
            {/* PRELAUNCH OFFER & Growth Stats */}
            <div className="mt-6 space-y-4">
              {/* Exclusive Prelaunch Offer */}
              <div className="p-6 rounded-2xl border-2 border-yellow-400/40 bg-gradient-to-r from-yellow-500/10 via-pink-500/10 to-purple-500/10 relative overflow-hidden">
                <div className="absolute top-2 right-2">
                  <div className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded-full animate-pulse">
                    LIMITED TIME
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-yellow-400 mb-2">
                    🎯 FOUNDING PARTNER EXCLUSIVE
                  </div>
                  <div className="text-lg font-bold text-white mb-3">
                    First 50 Customers Get Everything:
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-3 bg-green-500/20 rounded-xl border border-green-400/30">
                      <div className="text-green-400 font-bold text-lg">$150 FREE</div>
                      <div className="text-white/80 text-sm">Campaign Credits</div>
                    </div>
                    <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-400/30">
                      <div className="text-blue-400 font-bold text-lg">1 YEAR</div>
                      <div className="text-white/80 text-sm">Price Lock Guarantee</div>
                    </div>
                    <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-400/30">
                      <div className="text-purple-400 font-bold text-lg">PRIORITY</div>
                      <div className="text-white/80 text-sm">Launch Access</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-red-400 rounded-full" />
                      <span className="text-white/80">Only <span className="text-red-400 font-bold">47 spots</span> remaining</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-white/80">No contracts required</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Growth Timeline */}
              <div className="p-4 rounded-2xl border border-pink-400/30 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-sky-500/10">
                <div className="text-center mb-3">
                  <div className="text-lg font-bold text-pink-400 mb-1">🗓️ Estimated Launch: January 15, 2026</div>
                  <div className="text-white/60 text-sm">Join us for the future of mobile advertising</div>
                  <div className="text-white/50 text-xs mt-1">*30-day written notice provided if launch date changes</div>
                </div>
              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-pink-400">📊 PREPARING:</span>
                  <span className="text-white/80">Platform development active</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">🚀 LAUNCH 2026:</span>
                  <span className="text-white/80">10 tablets ready</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">📈 YEAR 2:</span>
                  <span className="text-white/80">Scale to 50 tablets</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sky-400">🎯 VISION:</span>
                  <span className="text-white/80">100+ tablets citywide</span>
                </div>
              </div>
            </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 font-semibold shadow-lg shadow-pink-500/30">
                Get started today <ArrowRight size={18}/>
              </a>
              <a href="#features" className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 border border-white/15 hover:bg-white/5">
                Explore features
              </a>
            </div>
            <p className="mt-4 text-xs text-white/60">Impression-based pricing with frequency tiers, no monthly charges.</p>
          </div>
          <div className="md:col-span-5">
            <div className="relative mx-auto max-w-lg">
              <div className="aspect-[16/10] rounded-2xl border border-white/10 bg-gradient-to-b from-neutral-900 to-neutral-800 p-3 shadow-2xl">
                <div className="h-full w-full rounded-xl bg-neutral-950 overflow-hidden">
                  {/* DEMO: Mobile billboard interface with example businesses */}
                  <div className="h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative">
                    {/* Current ad display with smooth transitions */}
                    <div className={`absolute inset-3 bg-gradient-to-br ${ads[currentSlide].gradient} rounded-lg overflow-hidden transition-all duration-500 ease-in-out`}>
                      {/* Simulated business image background */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${ads[currentSlide].bgGradient}`}></div>
                      <div className="relative h-full flex items-center justify-between p-6">
                        {/* Left side - Business branding */}
                        <div className="flex-1">
                          <div className="bg-white/20 rounded-lg p-4 backdrop-blur-sm">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="w-12 h-12 bg-white/30 rounded-full flex items-center justify-center text-2xl">
                                {ads[currentSlide].emoji}
                              </div>
                              <div>
                                <h3 className="text-white font-bold text-lg">{ads[currentSlide].business}</h3>
                                <p className="text-white/90 text-sm">{ads[currentSlide].tagline}</p>
                              </div>
                            </div>
                            <div className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold inline-block">
                              {ads[currentSlide].offer}
                            </div>
                          </div>
                        </div>
                        
                        {/* Right side - QR code */}
                        <div className="bg-white rounded-lg p-4 text-center ml-4">
                          <QrCode size={48} className="text-black mx-auto mb-2"/>
                          <p className="text-black text-xs font-semibold">SCAN TO ORDER</p>
                          <p className="text-gray-600 text-xs">Get Directions</p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Slide indicators */}
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                      {ads.map((_, index) => (
                        <div
                          key={index}
                          className={`w-2 h-2 rounded-full transition-all duration-300 ${
                            index === currentSlide ? 'bg-white' : 'bg-white/30'
                          }`}
                        />
                      ))}
                    </div>
                    
                    {/* Status bar simulation */}
                    <div className="absolute top-2 left-4 right-4 flex justify-between items-center text-xs text-white/60">
                      <span>📍 Main Street • Downtown</span>
                      <span>⚡ Live • {new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-3 -left-4 rounded-2xl bg-pink-500/10 backdrop-blur border border-pink-500/20 px-4 py-3 text-sm flex items-center gap-2">
                <QrCode size={16} className="text-pink-400"/> Interactive QR codes
              </div>
              <div className="absolute -top-3 -right-4 rounded-2xl bg-sky-500/10 backdrop-blur border border-sky-500/20 px-4 py-3 text-sm flex items-center gap-2">
                <MapPin size={16} className="text-sky-400"/> Auto-rotating ads
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="video" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            See <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-sky-400">Migo Advertisement</span> in Action
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Watch how our mobile billboard network transforms rideshare vehicles into powerful advertising platforms
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl shadow-pink-500/20">
            <video 
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              playsInline
            >
              <source src="/demo-video.mp4" type="video/mp4" />
              <source src="/demo-video.webm" type="video/webm" />
              <div className="flex items-center justify-center h-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-sky-500/20">
                <div className="text-center p-8">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r from-pink-500 to-sky-500 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Demo Video</h3>
                  <p className="text-white/70">Place your demo-video.mp4 in the public folder</p>
                </div>
              </div>
            </video>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 rounded-xl border border-white/10 bg-neutral-900/50">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-pink-500/20 flex items-center justify-center">
                <MapPin size={20} className="text-pink-400"/>
              </div>
              <h4 className="font-semibold mb-2">Geo-Targeted</h4>
              <p className="text-sm text-white/70">Ads show based on location and route</p>
            </div>
            
            <div className="text-center p-6 rounded-xl border border-white/10 bg-neutral-900/50">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-500/20 flex items-center justify-center">
                <QrCode size={20} className="text-purple-400"/>
              </div>
              <h4 className="font-semibold mb-2">Interactive</h4>
              <p className="text-sm text-white/70">QR codes for instant engagement</p>
            </div>
            
            <div className="text-center p-6 rounded-xl border border-white/10 bg-neutral-900/50">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-sky-500/20 flex items-center justify-center">
                <Rocket size={20} className="text-sky-400"/>
              </div>
              <h4 className="font-semibold mb-2">Scalable</h4>
              <p className="text-sm text-white/70">From single rides to city-wide campaigns</p>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400">Complete Advertising Solution</h2>
          <p className="mt-3 text-white/80 max-w-2xl mx-auto">From professional content creation to targeted mobile billboard delivery — we handle everything so you can focus on growing your business.</p>
        </div>
        
        {/* Premium Content Creation Feature */}
        <div className="mb-12 rounded-3xl border border-amber-400/30 bg-gradient-to-br from-amber-500/10 to-orange-500/10 p-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 text-xs rounded-full border border-amber-400/30 bg-amber-500/10 px-3 py-1 mb-4">
                <Sparkles size={14} className="text-amber-400"/> NEW FEATURE
              </div>
              <h3 className="text-2xl font-bold text-amber-400 mb-3">Professional Content Creation</h3>
              <p className="text-white/80 mb-4">Our expert design team creates eye-catching videos, animations, and graphics specifically optimized for mobile billboard displays. No design skills needed — we handle everything.</p>
              <ul className="space-y-2 text-sm text-white/70">
                <li>✨ Custom video ads with your branding</li>
                <li>🎨 Professional graphic design and animations</li>
                <li>📱 Mobile-optimized formats and sizing</li>
                <li>🚀 40-60% better campaign performance</li>
                <li>⚡ 2-3 day turnaround time</li>
              </ul>
            </div>
            <div className="bg-neutral-900 rounded-2xl p-6 border border-amber-400/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400 mb-2">$200-500</div>
                <div className="text-white/60 text-sm mb-4">per campaign</div>
                <div className="bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-lg p-4">
                  <div className="text-amber-400 font-semibold mb-2">Package Options:</div>
                  <div className="text-xs text-white/70 space-y-1">
                    <div>📄 Basic: Static graphics ($200)</div>
                    <div>🎬 Professional: Animated content ($350)</div>
                    <div>🎥 Premium: Custom video production ($500)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {icon: MapPin, title: "Geo-targeted Mobile Billboard", desc: "Tablets in rideshare vehicles show ads by city, neighborhood, or route for maximum relevance."},
            {icon: QrCode, title: "QR codes that convert", desc: "Passengers scan and land on promos, menus, apps, or booking pages in seconds."},
            {icon: Clock, title: "Time-slot scheduling", desc: "Choose exact hours and days to match foot traffic and campaign windows."},
            {icon: ShieldCheck, title: "Brand-safe delivery", desc: "Clear guidelines and approvals ensure quality placements and content."},
            {icon: Rocket, title: "Ready to scale", desc: "From 10 to hundreds of tablets — manage campaigns with ease."},
            {icon: DollarSign, title: "Performance tracking", desc: "Detailed reports show impression delivery, route coverage, and campaign effectiveness."},
          ].map((f, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-neutral-900 p-6 hover:border-pink-400/30 transition">
              <div className="h-10 w-10 grid place-items-center rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-sky-400 mb-4"><f.icon size={18}/></div>
              <h3 className="font-semibold text-lg">{f.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="offer" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="rounded-3xl border border-pink-400/30 bg-gradient-to-br from-neutral-900 to-neutral-800 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400">Professional Mobile Billboard Advertising</h2>
              <p className="mt-3 text-white/80 max-w-2xl">Start advertising with our professional mobile billboard platform. During our launch period, <strong>impression-based pricing starting at $0.140 CPI</strong> — just a simple one-time kickoff fee to get started. Bring your ads — we’ll handle design support if you need it.</p>
            </div>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 text-white font-semibold">
              I’m interested <ArrowRight size={18}/>
            </a>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400">Get early access</h2>
            <p className="mt-2 text-white/80">Tell us where to reach you and we’ll follow up with next steps, ad specs, and testing timelines.</p>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-3" name="early-access-form">
              <div className="grid sm:grid-cols-2 gap-3">
                <input required placeholder="First name" value={form.firstName} onChange={(e)=>setForm(v=>({...v, firstName: e.target.value}))} className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-pink-400/50" name="firstName"/>
                <input required placeholder="Last name" value={form.lastName} onChange={(e)=>setForm(v=>({...v, lastName: e.target.value}))} className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-pink-400/50" name="lastName"/>
              </div>
              <input required type="email" placeholder="Work email" value={form.email} onChange={(e)=>setForm(v=>({...v, email: e.target.value}))} className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-sky-400/50" name="email"/>
              <input placeholder="Company" value={form.company} onChange={(e)=>setForm(v=>({...v, company: e.target.value}))} className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-sky-400/50" name="company"/>
              <textarea placeholder="What would you like to promote?" rows={4} value={form.message} onChange={(e)=>setForm(v=>({...v, message: e.target.value}))} className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-purple-400/50" name="message"/>
              <button disabled={status==="sending"} type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 font-semibold shadow-lg shadow-pink-500/30">
                {status === "sending" ? "Sending…" : "Request early access"} <ArrowRight size={18}/>
              </button>
              {status === "ok" && <p className="text-sm text-emerald-400">Thanks! We’ll be in touch shortly.</p>}
              {status === "error" && <p className="text-sm text-rose-400">{error || "Something went wrong."}</p>}
              <p className="text-xs text-white/60 mt-2"><Mail className="inline mr-1" size={12}/> We’ll reply from a branded address once your domain is set up.</p>
            </form>
          </div>
          <div className="md:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-neutral-900 p-6">
              <h3 className="font-semibold text-lg text-pink-400">What you’ll get</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/75">
                <li>• Ad spec sheet (sizes, QR best practices)</li>
                <li>• Time-slot planning template</li>
                <li>• Creative checklist (copy & visuals)</li>
                <li>• Driver earnings overview</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section id="testimonials" className="py-20 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Real Success Stories
            </h2>
            <p className="text-white/60 text-lg">
              Drivers earning extra income and businesses growing with mobile billboard advertising
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Driver Testimonial */}
            <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-green-400/30 p-6">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1494790108755-2616b332c74c?w=150&h=150&fit=crop&crop=face" 
                  alt="Maria Rodriguez"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">Maria Rodriguez</h3>
                  <p className="text-green-400 font-semibold">Uber Driver</p>
                  <p className="text-white/60 text-sm">Phoenix, AZ</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 text-yellow-400">★</div>
                ))}
              </div>
              
              <p className="text-white/80 mb-4 italic">
                "Since joining Migo Advertisement, I've been earning $25 per day per active campaign. Simple equipment financing and I own the tablet when paid off!"
              </p>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">$25/day per campaign</div>
                <div className="text-white/60 text-sm">Potential: $300+/month</div>
              </div>
            </div>

            {/* Business Testimonial */}
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-blue-400/30 p-6">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face" 
                  alt="Tony Martinez"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold text-white">Tony Martinez</h3>
                  <p className="text-blue-400 font-semibold">Tony's Authentic Pizza</p>
                  <p className="text-white/60 text-sm">Owner • Phoenix, AZ</p>
                </div>
              </div>
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 text-yellow-400">★</div>
                ))}
              </div>
              
              <p className="text-white/80 mb-4 italic">
                "Our mobile billboard campaign brought in 40% more customers in the first campaign period. Much better ROI than traditional billboards!"
              </p>
              
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">40% increase</div>
                <div className="text-white/60 text-sm">New Customers</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              href="/testimonials"
              className="inline-flex items-center gap-2 rounded-2xl px-6 py-3 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow"
            >
              Read More Success Stories
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Migo Advertisement — All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-pink-400">Privacy</Link>
            <Link href="/terms" className="hover:text-purple-400">Terms</Link>
            <Link href="/contact" className="hover:text-sky-400">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
