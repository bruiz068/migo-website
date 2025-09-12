"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Mail, Phone, MapPin, Clock, Send, User, Building, MessageSquare, Shield, CheckCircle } from "lucide-react";
import { useTracking } from '../hooks/useTracking';

export default function ContactPage() {
  const { trackContactForm, trackPhoneClick, trackEmailClick } = useTracking();
  const [form, setForm] = useState({ 
    firstName: "", 
    lastName: "", 
    email: "", 
    phone: "",
    company: "", 
    inquiryType: "",
    message: "" 
  });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.lastName || !form.email || !form.inquiryType || !form.message) {
      setError("Please fill in all required fields.");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "contact-page",
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      
      // Track successful form submission
      trackContactForm(form.inquiryType);
      
      setStatus("ok");
      setForm({ firstName: "", lastName: "", email: "", phone: "", company: "", inquiryType: "", message: "" });
    } catch (err: any) {
      setStatus("error");
      setError(err?.message || "Something went wrong.");
    }
  }

  const inquiryTypes = [
    { value: "driver", label: "Driver Application", icon: User, color: "text-blue-400" },
    { value: "advertiser", label: "Advertising Inquiry", icon: Building, color: "text-green-400" },
    { value: "partnership", label: "Partnership Opportunity", icon: Shield, color: "text-purple-400" },
    { value: "support", label: "General Support", icon: MessageSquare, color: "text-cyan-400" },
    { value: "media", label: "Media/Press Inquiry", icon: Mail, color: "text-pink-400" }
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
              <Link href="/service-area" className="hover:text-green-400 font-semibold">Service Area</Link>
              <Link href="/about" className="hover:text-blue-400 font-semibold">About</Link>
              <Link href="/testimonials" className="hover:text-yellow-400 font-semibold">Testimonials</Link>
              <Link href="/faq" className="hover:text-cyan-400 font-semibold">FAQ</Link>
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
            <Mail className="text-pink-400" size={32} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Contact Us
            </h1>
          </div>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Ready to join the mobile advertising revolution? Get in touch with our team for personalized assistance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            {/* Business Contact */}
            <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl border border-pink-400/30 p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                <Building size={20} />
                Business Contact
              </h3>
              <div className="space-y-3 text-white/80">
                <div className="flex items-center gap-3">
                  <Mail className="text-pink-400" size={16} />
                  <div>
                    <div className="font-semibold">General Inquiries</div>
                    <a 
                      href="mailto:bernardo@migonow.com" 
                      className="text-pink-400 hover:text-pink-300"
                      onClick={trackEmailClick}
                    >
                      bernardo@migonow.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-purple-400" size={16} />
                  <div>
                    <div className="font-semibold">Business Line</div>
                    <a 
                      href="tel:480-647-2380" 
                      className="text-purple-400 hover:text-purple-300"
                      onClick={trackPhoneClick}
                    >
                      (480) 647-2380
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Building className="text-blue-400" size={16} />
                  <div>
                    <div className="font-semibold">Company</div>
                    <div className="text-white/60">Migo Advertisement LLC</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-2xl border border-blue-400/30 p-6">
              <h3 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                <Clock size={20} />
                Response Times
              </h3>
              <div className="space-y-3 text-white/80">
                <div className="flex justify-between">
                  <span>Driver Applications:</span>
                  <span className="text-green-400">24-48 hours</span>
                </div>
                <div className="flex justify-between">
                  <span>Advertiser Inquiries:</span>
                  <span className="text-blue-400">Same day</span>
                </div>
                <div className="flex justify-between">
                  <span>General Support:</span>
                  <span className="text-purple-400">1-2 business days</span>
                </div>
                <div className="flex justify-between">
                  <span>Partnerships:</span>
                  <span className="text-cyan-400">2-3 business days</span>
                </div>
              </div>
            </div>

            {/* Service Area */}
            <div className="bg-gradient-to-r from-green-500/10 via-emerald-500/10 to-teal-500/10 rounded-2xl border border-green-400/30 p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                <MapPin size={20} />
                Service Area
              </h3>
              <div className="space-y-3 text-white/80">
                <div>
                  <div className="font-semibold text-green-400">Currently Serving:</div>
                  <div>Phoenix, Arizona Metropolitan Area</div>
                </div>
                <div>
                  <div className="font-semibold text-blue-400">Expansion Plans:</div>
                  <div className="text-sm">Mesa and additional surrounding areas</div>
                </div>
                <div>
                  <div className="font-semibold text-purple-400">Future Markets:</div>
                  <div className="text-sm">Additional cities based on demand</div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-2xl border border-purple-400/30 p-6">
              <h3 className="text-xl font-bold text-purple-400 mb-4">Quick Access</h3>
              <div className="space-y-2">
                <Link href="/driver-earnings" className="block text-blue-400 hover:text-blue-300 transition-colors">
                  → Driver Application Info
                </Link>
                <Link href="/pricing" className="block text-green-400 hover:text-green-300 transition-colors">
                  → Advertiser Pricing
                </Link>
                <Link href="/faq" className="block text-cyan-400 hover:text-cyan-300 transition-colors">
                  → Frequently Asked Questions
                </Link>
                <Link href="/terms" className="block text-pink-400 hover:text-pink-300 transition-colors">
                  → Terms & Privacy
                </Link>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-white/10 p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Send className="text-purple-400" size={24} />
                Send us a Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.firstName}
                      onChange={(e) => setForm({...form, firstName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-white/40 focus:border-pink-400 focus:outline-none"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.lastName}
                      onChange={(e) => setForm({...form, lastName: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-white/40 focus:border-pink-400 focus:outline-none"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({...form, email: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-white/40 focus:border-pink-400 focus:outline-none"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={(e) => setForm({...form, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-white/40 focus:border-purple-400 focus:outline-none"
                      placeholder="(480) 555-0123"
                    />
                  </div>
                </div>

                {/* Company and Inquiry Type */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">
                      Company/Organization
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({...form, company: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-white/40 focus:border-purple-400 focus:outline-none"
                      placeholder="Company name (optional)"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-white/80 mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      required
                      value={form.inquiryType}
                      onChange={(e) => setForm({...form, inquiryType: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white focus:border-blue-400 focus:outline-none"
                    >
                      <option value="">Select inquiry type</option>
                      {inquiryTypes.map((type) => (
                        <option key={type.value} value={type.value}>
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-white/80 mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({...form, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-white/40 focus:border-blue-400 focus:outline-none resize-none"
                    placeholder="Tell us about your needs, questions, or how we can help..."
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col gap-4">
                  <button 
                    type="submit" 
                    disabled={status === "sending"}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 font-semibold shadow-lg shadow-pink-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"} 
                    <Send size={18}/>
                  </button>
                  
                  {status === "ok" && (
                    <div className="flex items-center gap-2 text-green-400 bg-green-400/10 rounded-xl p-3">
                      <CheckCircle size={16} />
                      <span className="text-sm">Message sent successfully! We'll respond within our standard timeframe.</span>
                    </div>
                  )}
                  
                  {status === "error" && (
                    <div className="text-red-400 bg-red-400/10 rounded-xl p-3">
                      <span className="text-sm">{error || "Something went wrong. Please try again."}</span>
                    </div>
                  )}

                  <p className="text-xs text-white/60 text-center">
                    * Required fields. We respect your privacy and never share your information.
                  </p>
                </div>
              </form>
            </div>

            {/* Inquiry Type Guide */}
            <div className="mt-8 bg-gradient-to-r from-gray-900/30 to-gray-800/30 rounded-2xl border border-white/10 p-6">
              <h4 className="text-lg font-bold text-white mb-4">Choose the Right Inquiry Type:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                {inquiryTypes.map((type) => (
                  <div key={type.value} className="flex items-start gap-3">
                    <type.icon className={`${type.color} mt-1`} size={16} />
                    <div>
                      <div className={`font-semibold ${type.color}`}>{type.label}</div>
                      <div className="text-sm text-white/60">
                        {type.value === "driver" && "Applications, requirements, earnings questions"}
                        {type.value === "advertiser" && "Pricing, campaigns, targeting options"}
                        {type.value === "partnership" && "Business partnerships, collaborations"}
                        {type.value === "support" && "Technical support, account issues"}
                        {type.value === "media" && "Press inquiries, interviews, media kits"}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
              <Link href="/faq" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                FAQ
              </Link>
              <Link href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors">
                Terms
              </Link>
              <Link href="/privacy" className="text-pink-400 hover:text-pink-300 transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
