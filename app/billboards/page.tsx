"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Smartphone, QrCode, MapPin, Clock, Rocket, Sparkles, DollarSign, Mail, ShieldCheck, Menu, X } from "lucide-react";

export default function BillboardsPage() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", company: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string>("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
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
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <Link href="/pricing" className="hover:text-pink-400 font-semibold">Pricing</Link>
            <Link href="/ad-specs" className="hover:text-purple-400 font-semibold">Ad Specs</Link>
            <Link href="/driver-earnings" className="hover:text-sky-400 font-semibold">Driver Earnings</Link>
            <Link href="/service-area" className="hover:text-green-400 font-semibold">Service Area</Link>
            <Link href="/about" className="hover:text-blue-400 font-semibold">About</Link>
            <Link href="/faq" className="hover:text-cyan-400 font-semibold">FAQ</Link>
            <a href="#demo" className="hover:text-green-400">Free Demo</a>
            <a href="#features" className="hover:text-purple-400">Features</a>
            <a href="#contact" className="hover:text-purple-400">Contact</a>
            <a href="https://app.migonow.com/signup/advertiser" className="ml-2 px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 text-white font-semibold hover:shadow-lg hover:shadow-pink-500/25 transition-all duration-300">Sign Up Free</a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-neutral-900/95 backdrop-blur">
            <nav className="px-6 py-4 space-y-3">
              <Link href="/pricing" className="block text-white/80 hover:text-pink-400 font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>Pricing</Link>
              <Link href="/ad-specs" className="block text-white/80 hover:text-purple-400 font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>Ad Specs</Link>
              <Link href="/driver-earnings" className="block text-white/80 hover:text-sky-400 font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>Driver Earnings</Link>
              <Link href="/service-area" className="block text-white/80 hover:text-green-400 font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>Service Area</Link>
              <Link href="/about" className="block text-white/80 hover:text-blue-400 font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/faq" className="block text-white/80 hover:text-cyan-400 font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>FAQ</Link>
              <a href="#demo" className="block text-white/80 hover:text-green-400 py-2" onClick={() => setMobileMenuOpen(false)}>Free Demo</a>
              <a href="#features" className="block text-white/80 hover:text-purple-400 py-2" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#contact" className="block text-white/80 hover:text-purple-400 py-2" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <a href="https://app.migonow.com/signup/advertiser" className="block mt-2 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 text-white font-semibold" onClick={() => setMobileMenuOpen(false)}>Sign Up Free</a>
            </nav>
          </div>
        )}
      </header>

      {/* EXCLUSIVE PRELAUNCH OFFER BANNER */}
      <div className="relative overflow-hidden bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-sky-600/20 border-b border-pink-500/30">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-sky-500/10" />
        <div className="mx-auto max-w-7xl px-6 py-4 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-center md:text-left">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-pink-400 rounded-full animate-pulse" />
                <span className="text-pink-400 font-bold text-sm uppercase tracking-wide">🔥 NOW LIVE IN PHOENIX</span>
              </div>
              <div className="hidden md:block w-px h-8 bg-white/20" />
              <div>
                <span className="text-white font-bold text-lg">IMPRESSION PACKS:</span>
                <span className="ml-2 text-yellow-400 font-extrabold text-lg">Starting at $149/mo</span>
                <span className="ml-2 text-white/80">500 impressions included</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-white/60 text-xs uppercase tracking-wide">Limited Spots</div>
                <div className="text-pink-400 font-bold text-xl">Available</div>
              </div>
              <a href="https://app.migonow.com/signup/advertiser" className="px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold text-white shadow-lg hover:shadow-pink-500/25 transition-all duration-300 transform hover:scale-105">
                Sign Up Now →
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
              We provide advertising platform access and professional ad design services, and showcase your brand on our in-car <strong>Mobile Billboard</strong> network.
            </p>
            
            {/* PRICING HIGHLIGHT & Growth Stats */}
            <div className="mt-6 space-y-4">
              {/* Impression Packs Overview */}
              <div className="p-6 rounded-2xl border-2 border-purple-400/40 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 relative overflow-hidden">
                <div className="text-center">
                  <div className="text-2xl font-extrabold text-purple-400 mb-2">
                    🎯 IMPRESSION PACKS
                  </div>
                  <div className="text-lg font-bold text-white mb-3">
                    Pick a pack. Your ads play until your balance runs out.
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-400/30">
                      <div className="text-blue-400 font-bold text-lg">STARTER</div>
                      <div className="text-white font-bold">$149/mo</div>
                      <div className="text-white/60 text-sm">500 impressions</div>
                    </div>
                    <div className="p-3 bg-purple-500/20 rounded-xl border-2 border-purple-400/50 relative">
                      <div className="absolute -top-2 right-2 px-2 py-0.5 bg-purple-500 text-white text-[10px] font-bold rounded-full">POPULAR</div>
                      <div className="text-purple-400 font-bold text-lg">GROWTH</div>
                      <div className="text-white font-bold">$349/mo</div>
                      <div className="text-white/60 text-sm">1,500 impressions</div>
                    </div>
                    <div className="p-3 bg-pink-500/20 rounded-xl border border-pink-400/30">
                      <div className="text-pink-400 font-bold text-lg">PRO</div>
                      <div className="text-white font-bold">$799/mo</div>
                      <div className="text-white/60 text-sm">4,000 impressions</div>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-white/80"><span className="text-green-400 font-bold">Now live</span> in Phoenix Metro</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-white/80">Cancel anytime</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                      <span className="text-white/80">Buy boosts for extra impressions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Network Stats */}
              <div className="p-4 rounded-2xl border border-pink-400/30 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-sky-500/10">
                <div className="text-center mb-3">
                  <div className="text-lg font-bold text-pink-400 mb-1">📊 Growing Network</div>
                  <div className="text-white/60 text-sm">Mobile billboards across Phoenix metro</div>
                </div>
              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-pink-400">🚗 ACTIVE:</span>
                  <span className="text-white/80">Tablets live in Phoenix</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-purple-400">📈 GROWING:</span>
                  <span className="text-white/80">Expanding driver network</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-blue-400">🎯 COVERAGE:</span>
                  <span className="text-white/80">Scottsdale, Tempe, Mesa &amp; more</span>
                </div>
              </div>
            </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href="https://app.migonow.com/signup/advertiser" className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 font-semibold shadow-lg shadow-pink-500/30">
                Sign Up Free <ArrowRight size={18}/>
              </a>
              <a href="#demo" className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 border border-white/15 hover:bg-white/5">
                Schedule a Demo
              </a>
            </div>
            <p className="mt-4 text-xs text-white/60">Impression packs starting at $149/mo. Buy boosts anytime for extra reach.</p>
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


      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400">Get in Touch</h2>
            <p className="mt-2 text-white/80">Have questions or want a custom demo? Drop us a line and we'll follow up with next steps.</p>
            <form onSubmit={handleSubmit} className="mt-6 grid gap-3" name="early-access-form">
              <div className="grid sm:grid-cols-2 gap-3">
                <input required placeholder="First name" value={form.firstName} onChange={(e)=>setForm(v=>({...v, firstName: e.target.value}))} className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-pink-400/50" name="firstName"/>
                <input required placeholder="Last name" value={form.lastName} onChange={(e)=>setForm(v=>({...v, lastName: e.target.value}))} className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-pink-400/50" name="lastName"/>
              </div>
              <input required type="email" placeholder="Work email" value={form.email} onChange={(e)=>setForm(v=>({...v, email: e.target.value}))} className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-sky-400/50" name="email"/>
              <input placeholder="Company" value={form.company} onChange={(e)=>setForm(v=>({...v, company: e.target.value}))} className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-sky-400/50" name="company"/>
              <textarea placeholder="What would you like to promote?" rows={4} value={form.message} onChange={(e)=>setForm(v=>({...v, message: e.target.value}))} className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-purple-400/50" name="message"/>
              <button disabled={status==="sending"} type="submit" className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 font-semibold shadow-lg shadow-pink-500/30">
                {status === "sending" ? "Sending…" : "Send Message"} <ArrowRight size={18}/>
              </button>
              {status === "ok" && <p className="text-sm text-emerald-400">Thanks! We'll be in touch shortly.</p>}
              {status === "error" && <p className="text-sm text-rose-400">{error || "Something went wrong."}</p>}
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
