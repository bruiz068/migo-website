"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Zap, Mail, RefreshCw, Users, BarChart3, Clock, CheckCircle, Menu, X, Sparkles } from "lucide-react";

export default function AutomationsPage() {
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
          message: "Automations early access request",
          source: "automations-waitlist",
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
      icon: Mail,
      color: "text-pink-400",
      bg: "bg-pink-500/20",
      border: "border-pink-400/30",
      title: "Email Sequences",
      description: "Automatically nurture leads with drip campaigns triggered by behavior, time, or custom events.",
    },
    {
      icon: RefreshCw,
      color: "text-purple-400",
      bg: "bg-purple-500/20",
      border: "border-purple-400/30",
      title: "Follow-Up Automation",
      description: "Never let a lead go cold. Auto-send personalized follow-ups based on opens, clicks, or no response.",
    },
    {
      icon: Users,
      color: "text-sky-400",
      bg: "bg-sky-500/20",
      border: "border-sky-400/30",
      title: "CRM Workflows",
      description: "Automatically move contacts through your pipeline, assign tasks, and update deal stages.",
    },
    {
      icon: BarChart3,
      color: "text-green-400",
      bg: "bg-green-500/20",
      border: "border-green-400/30",
      title: "Performance Analytics",
      description: "See open rates, click-throughs, and conversion data in one clean dashboard.",
    },
    {
      icon: Clock,
      color: "text-yellow-400",
      bg: "bg-yellow-500/20",
      border: "border-yellow-400/30",
      title: "Smart Scheduling",
      description: "Send messages at the optimal time for each contact based on their past engagement patterns.",
    },
    {
      icon: Zap,
      color: "text-orange-400",
      bg: "bg-orange-500/20",
      border: "border-orange-400/30",
      title: "Instant Triggers",
      description: "React in real-time to form submissions, website visits, purchases, and more.",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-neutral-950 via-purple-950/20 to-sky-950/20 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-neutral-900/95 via-purple-900/30 to-sky-900/30 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image
              src="https://i.imgur.com/clZNuAZ.png?v=2"
              alt="Migo Logo"
              width={200}
              height={48}
              className="h-12 w-auto"
            />
            <span className="font-extrabold tracking-tight text-xl text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400">
              Automations
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
            <Link href="/" className="hover:text-white font-semibold">← All Services</Link>
            <a href="#features" className="hover:text-sky-400">Features</a>
            <a href="#contact" className="hover:text-purple-400">Get Started</a>
            <a
              href="#contact"
              className="ml-2 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 text-white font-semibold hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300"
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
              <a href="#features" className="block text-white/80 hover:text-sky-400 py-2" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#contact" className="block text-white/80 hover:text-purple-400 py-2" onClick={() => setMobileMenuOpen(false)}>Get Started</a>
              <a
                href="#contact"
                className="block mt-2 text-center px-4 py-3 rounded-xl bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 text-white font-semibold"
                onClick={() => setMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Live Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-sky-600/20 via-purple-600/20 to-pink-600/20 border-b border-sky-500/30">
        <div className="mx-auto max-w-7xl px-6 py-3 flex items-center justify-center gap-3">
          <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
          <span className="text-sky-400 font-bold text-sm uppercase tracking-wide">Now Live</span>
          <span className="text-white/60 text-sm">— Sign up and start automating today</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full blur-3xl bg-sky-600/30" />
          <div className="absolute top-1/2 -right-24 h-72 w-72 rounded-full blur-3xl bg-purple-500/30" />
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">
          <p className="inline-flex items-center gap-2 text-xs md:text-sm rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-6">
            <Sparkles size={14} /> Marketing automation built for growing businesses
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl mx-auto">
            Put your marketing on{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400">
              autopilot.
            </span>
          </h1>
          <p className="mt-6 text-white/70 text-lg max-w-2xl mx-auto">
            Automate email sequences, follow-ups, and CRM workflows so you can focus on running your business — not chasing leads.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 font-semibold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all duration-300"
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

          {/* Stats row */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { value: "80%", label: "of leads need 5+ follow-ups before converting" },
              { value: "3×", label: "more revenue from automated email sequences" },
              { value: "10 hrs", label: "saved per week with automated workflows" },
            ].map((stat) => (
              <div key={stat.label} className="p-6 rounded-2xl border border-white/10 bg-white/5">
                <div className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-purple-400 mb-2">
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
            Everything you need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-pink-400">
              automate growth
            </span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            One platform to handle all your marketing automation — from first touch to closed deal.
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
          <p className="text-white/60 max-w-xl mx-auto">Set it up once, let it run forever.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { step: "1", title: "Connect your tools", desc: "Link your CRM, email, and website in minutes with our no-code integrations." },
            { step: "2", title: "Build your workflows", desc: "Use our visual builder to create sequences triggered by any action your contacts take." },
            { step: "3", title: "Watch leads convert", desc: "Sit back while personalized messages go out at exactly the right time." },
          ].map((s) => (
            <div key={s.step} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 flex items-center justify-center text-xl font-extrabold">
                {s.step}
              </div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-sm text-white/60">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Waitlist / CTA */}
      <section id="contact" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="max-w-xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-400/30 bg-sky-500/10 text-sky-400 text-sm font-semibold mb-6">
            <CheckCircle size={14} /> Now accepting new customers
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400">
              automate your marketing?
            </span>
          </h2>
          <p className="text-white/60 mb-8">
            Get started today. Our team will help you set up your first automation in under an hour.
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
                className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-sky-400/50"
              />
              <input
                required
                type="email"
                placeholder="Work email"
                value={form.email}
                onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
                className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-sky-400/50"
              />
              <input
                placeholder="Company name"
                value={form.company}
                onChange={(e) => setForm((v) => ({ ...v, company: e.target.value }))}
                className="w-full rounded-xl bg-neutral-900 border border-white/10 px-4 py-3 outline-none focus:border-purple-400/50"
              />
              <button
                disabled={status === "sending"}
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 font-semibold shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 transition-all duration-300"
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
            <Link href="/privacy" className="hover:text-sky-400">Privacy</Link>
            <Link href="/terms" className="hover:text-purple-400">Terms</Link>
            <Link href="/contact" className="hover:text-pink-400">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
