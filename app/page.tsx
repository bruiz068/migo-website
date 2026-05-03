import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Tablet, Zap, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Migo — Choose Your Service",
      description: "Mobile billboard advertising, marketing automation, and AI lead response services for businesses in Phoenix, Arizona.",
  alternates: { canonical: "https://migonow.com" },
};

export default function HomePage() {
  const services = [
    {
      href: "/billboards",
      gradient: "from-pink-500 via-purple-500 to-sky-500",
      borderColor: "border-pink-500/30 hover:border-pink-400/60",
      bgColor: "hover:bg-pink-500/5",
      glowColor: "bg-pink-600/30",
      glowColor2: "bg-purple-600/20",
      iconName: "Tablet",
      iconColor: "text-pink-400",
      iconBg: "bg-pink-500/20",
      badge: "🧪 Currently Testing",
      badgeColor: "border-yellow-400/30 bg-yellow-500/10 text-yellow-400",
      title: "Mobile Billboards",
      subtitle: "In-car advertising network",
      description:
        "Put your brand in front of thousands of riders across Phoenix. Our tablet-based billboard network turns every rideshare vehicle into a moving ad for your business.",
      highlights: [
        "Impression packs from $149/mo",
        "Geo-targeted ads across Phoenix metro",
        "Interactive QR codes for instant engagement",
        "Real-time analytics dashboard",
      ],
      cta: "Join the Waitlist",
    },
    {
      href: "/automations",
      gradient: "from-sky-500 via-purple-500 to-pink-500",
      borderColor: "border-sky-500/30 hover:border-sky-400/60",
      bgColor: "hover:bg-sky-500/5",
      glowColor: "bg-sky-600/30",
      glowColor2: "bg-purple-600/20",
      iconName: "Zap",
      iconColor: "text-sky-400",
      iconBg: "bg-sky-500/20",
      badge: "🔥 Now Live",
      badgeColor: "border-sky-400/30 bg-sky-500/10 text-sky-400",
      title: "Automations",
      subtitle: "Marketing automation platform",
      description:
        "Stop chasing leads manually. Automate your email sequences, follow-ups, and CRM workflows so your marketing runs 24/7 — even when you're not working.",
      highlights: [
        "Automated email drip sequences",
        "Smart follow-up triggers",
        "CRM workflow automation",
        "Performance analytics",
      ],
      cta: "Explore Automations",
    },
    {
      href: "/ai-lead-response",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      borderColor: "border-emerald-500/30 hover:border-emerald-400/60",
      bgColor: "hover:bg-emerald-500/5",
      glowColor: "bg-emerald-600/30",
      glowColor2: "bg-teal-600/20",
      iconName: "Bot",
      iconColor: "text-emerald-400",
      iconBg: "bg-emerald-500/20",
      badge: "🔥 Now Live",
      badgeColor: "border-emerald-400/30 bg-emerald-500/10 text-emerald-400",
      title: "AI Lead Response",
      subtitle: "Instant AI-powered lead engagement",
      description:
        "Respond to every inbound lead in seconds — 24/7. Our AI qualifies, answers questions, and books appointments before your competitors even open their inbox.",
      highlights: [
        "Instant auto-replies to new leads",
        "AI qualifies and scores each lead",
        "Books appointments automatically",
        "Integrates with your existing CRM",
      ],
      cta: "Explore AI Lead Response",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-neutral-950 via-purple-950/20 to-neutral-950 text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-neutral-900/80 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://i.imgur.com/clZNuAZ.png?v=2"
              alt="Migo Logo"
              className="h-12 w-auto"
            />
            <span className="font-extrabold tracking-tight text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400">
              Migo
            </span>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/about" className="text-white/60 hover:text-white transition-colors">About</Link>
            <Link href="/contact" className="text-white/60 hover:text-white transition-colors">Contact</Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 text-center">
        <div className="relative">
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full blur-3xl bg-purple-600/20 -z-10" />
        </div>
        <p className="inline-flex items-center gap-2 text-xs md:text-sm rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-6 text-white/60">
          ✦ Growing your business starts here
        </p>
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-3xl mx-auto">
          What can{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400">
            Migo
          </span>{" "}
          help you with?
        </h1>
        <p className="mt-4 text-white/60 text-lg max-w-xl mx-auto">
          Choose the service that fits your business goals.
        </p>
      </section>

      {/* Service Cards */}
      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`group relative flex flex-col p-8 rounded-3xl border ${s.borderColor} ${s.bgColor} bg-neutral-900/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl`}
            >
              {/* Badge */}
              <span className={`self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-semibold mb-6 ${s.badgeColor}`}>
                {s.badge}
              </span>

              {/* Icon area */}
              <div className={`w-14 h-14 rounded-2xl ${s.iconBg} flex items-center justify-center mb-5`}>
                {s.iconName === "Tablet" ? (
                  <Tablet size={26} className={s.iconColor} />
                ) : s.iconName === "Bot" ? (
                  <Bot size={26} className={s.iconColor} />
                ) : (
                  <Zap size={26} className={s.iconColor} />
                )}
              </div>

              {/* Title */}
              <h2 className="text-2xl font-extrabold mb-1">{s.title}</h2>
              <p className="text-sm text-white/40 mb-4 font-medium uppercase tracking-wide">{s.subtitle}</p>

              {/* Description */}
              <p className="text-white/70 mb-6 leading-relaxed">{s.description}</p>

              {/* Highlights */}
              <ul className="space-y-2 mb-8 flex-1">
                {s.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-sm text-white/60">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${s.gradient} flex-shrink-0`} />
                    {h}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-gradient-to-r ${s.gradient} text-white font-semibold text-sm w-fit`}
              >
                {s.cta} <ArrowRight size={16} />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-white/40 text-sm">
          <p>© {new Date().getFullYear()} Migo Advertisement — All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-pink-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-purple-400 transition-colors">Terms</Link>
            <Link href="/contact" className="hover:text-sky-400 transition-colors">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
