"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock, Star, PhoneCall, Calendar, BarChart3, ShieldCheck, CheckCircle, Menu, X, Sparkles } from "lucide-react";

export default function AILeadResponsePage() {
  const [form, setForm] = useState({ firstName: "", email: "", company: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: "",
          email: form.email,
          company: form.company,
          message: "AI Lead Response early access request",
          source: "ai-lead-response-waitlist",
        }),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("ok");
      setForm({ firstName: "", email: "", company: "" });
    } catch {
      setStatus("error");
    }
  }

  const features = [
    {
      icon: Clock,
      color: "text-emerald-400",
      bg: "bg-emerald-500/20",
      border: "border-emerald-400/30",
      title: "Responds in Seconds",
      description: "Every new lead gets an instant, personalized reply — day or night, weekends included. Never lose a lead to slow response time again.",
    },
    {
      icon: Star,
      color: "text-teal-400",
      bg: "bg-teal-500/20",
      border: "border-teal-400/30",
      title: "Lead Qualification",
      description: "AI asks the right questions to score and qualify leads automatically, so your team only spends time on prospects that are ready to buy.",
    },
    {
      icon: Calendar,
      color: "text-cyan-400",
      bg: "bg-cyan-500/20",
      border: "border-cyan-400/30",
      title: "Automatic Appointment Booking",
      description: "The AI books calls and meetings directly into your calendar — no back-and-forth, no missed opportunities.",
    },
    {
      icon: PhoneCall,
      color: "text-green-400",
      bg: "bg-green-500/20",
      border: "border-green-400/30",
      title: "Multi-Channel Outreach",
      description: "Responds to leads via email, SMS, and web chat from a single platform. Meet leads wherever they reach out.",
    },
    {
      icon: BarChart3,
      color: "text-emerald-400",
      bg: "bg-emerald-500/20",
      border: "border-emerald-400/30",
      title: "Lead Intelligence Dashboard",
      description: "See every lead interaction, qualification score, and conversion status in a clean, real-time dashboard.",
    },
    {
      icon: ShieldCheck,
      color: "text-teal-400",
      bg: "bg-teal-500/20",
      border: "border-teal-400/30",
      title: "CRM Integration",
      description: "Automatically syncs qualified leads and conversation history into your existing CRM — no manual data entry.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-neutral-950 via-emerald-950/20 to-neutral-950 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-neutral-900/95 via-emerald-900/20 to-teal-900/20 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <img
              src="https://i.imgur.com/clZNuAZ.png?v=2"
              alt="Migo Logo"
              className="h-12 w-auto"
            />
            <span className="font-extrabold tracking-tight text-xl text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              AI Lead Response
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <Link href="/" className="hover:text-white font-semibold">← All Services</Link>
            <a href="#features" className="hover:text-emerald-400">Features</a>
            <a href="#contact" className="hover:text-teal-400">Get Started</a>
            <a
              href="#contact"
              className="ml-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all duration-300"
            >
              Get Started
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white/80 hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-neutral-900/95 backdrop-blur">
            <nav className="px-6 py-4 space-y-3">
              <Link href="/" className="block text-white/80 hover:text-white font-semibold py-2" onClick={() => setMobileMenuOpen(false)}>← All Services</Link>
              <a href="#features" className="block text-white/80 hover:text-emerald-400 py-2" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#contact" className="block text-white/80 hover:text-teal-400 py-2" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
              <a
                href="#contact"
                className="block mt-2 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Live Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-emerald-600/20 via-teal-600/20 to-cyan-600/20 border-b border-emerald-500/30">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-center gap-3">
          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-emerald-400 font-bold text-sm uppercase tracking-wide">Now Live</span>
          <span className="text-white/60 text-sm">— Sign up and get started today</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-emerald-600/25" />
          <div className="absolute top-1/2 -right-24 h-72 w-72 rounded-full blur-3xl bg-teal-500/25" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">
          <p className="inline-flex items-center gap-2 text-xs md:text-sm rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-6">
            <Sparkles size={14} /> AI that works while you sleep
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto">
            Never miss a lead{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              again.
            </span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Our AI responds to every inbound lead in seconds, qualifies them automatically, and books appointments — so your sales pipeline never goes cold.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300"
            >
              Get Started <ArrowRight size={18} />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 border border-white/15 hover:bg-white/5 transition-all duration-300"
            >
              See Features
            </a>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: "78%", label: "of customers buy from the first business that responds" },
              { value: "5 min", label: "response window before lead interest drops significantly" },
              { value: "24/7", label: "AI availability — no nights, weekends, or holidays off" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Your always-on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              sales assistant
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Built for local businesses that can't afford to have a full-time sales team — but can't afford to miss a lead either.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className={`p-6 rounded-2xl border ${f.border} bg-neutral-900/50 hover:bg-neutral-900 transition-all duration-300`}
            >
              <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                <f.icon size={22} className={f.color} />
              </div>
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-sm text-white/60">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How it works</h2>
          <p className="text-white/60 max-w-xl mx-auto">From inbound lead to booked appointment — fully automated.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {[
            { step: "1", title: "Lead comes in", desc: "A potential customer fills out a form, sends a text, or starts a chat." },
            { step: "2", title: "AI responds instantly", desc: "A personalized reply goes out within seconds — before they contact anyone else." },
            { step: "3", title: "AI qualifies them", desc: "Smart questions determine budget, timeline, and fit automatically." },
            { step: "4", title: "Appointment booked", desc: "Ready leads get a booking link or get scheduled directly into your calendar." },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 flex items-center justify-center text-xl font-extrabold">
                {s.step}
              </div>
              <h3 className="font-semibold text-base mb-2">{s.title}</h3>
              <p className="text-sm text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist */}
      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-400/30 bg-emerald-500/10 text-emerald-400 text-sm font-semibold mb-6">
            <CheckCircle size={14} /> Now accepting new customers
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              never miss a lead?
            </span>
          </h2>
          <p className="text-white/60 mb-8">
            Get started today. Our team will have your AI responding to leads within 24 hours.
          </p>

          {status === "ok" ? (
            <div className="p-6 rounded-2xl border border-green-400/30 bg-green-500/10 text-green-400 font-semibold text-lg">
              Thanks! We'll be in touch shortly. 🎉
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                required
                placeholder="First name"
                value={form.firstName}
                onChange={(e) => setForm((v) => ({ ...v, firstName: e.target.value }))}
                className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-emerald-400/50"
              />
              <input
                required
                type="email"
                placeholder="Work email"
                value={form.email}
                onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
                className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-emerald-400/50"
              />
              <input
                placeholder="Company name"
                value={form.company}
                onChange={(e) => setForm((v) => ({ ...v, company: e.target.value }))}
                className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-teal-400/50"
              />
              <button
                disabled={status === "sending"}
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 font-semibold shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 transition-all duration-300"
              >
                {status === "sending" ? "Sending…" : "Get Started"} <ArrowRight size={18} />
              </button>
              {status === "error" && (
                <p className="text-sm text-rose-400">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/60 text-sm">
          <p>© {new Date().getFullYear()} Migo Advertisement — All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-emerald-400">Privacy</Link>
            <Link href="/terms" className="hover:text-teal-400">Terms</Link>
            <Link href="/contact" className="hover:text-cyan-400">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
