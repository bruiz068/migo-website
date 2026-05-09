"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, MessageSquare, Shield, CheckCircle, Phone, User } from "lucide-react";

export default function SofiaSmsConsentPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    businessName: "",
    consent: false,
  });
  const [status, setStatus] = useState<"idle" | "sending" | "ok" | "error">("idle");
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!form.firstName || !form.lastName || !form.phone) {
      setError("Please fill in your name and mobile number.");
      setStatus("error");
      return;
    }

    if (!form.consent) {
      setError("You must check the SMS consent box to continue. SMS consent is required to receive Sofia AI call summary notifications.");
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/sofia-sms-consent", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName.trim(),
          lastName: form.lastName.trim(),
          phone: form.phone.trim(),
          businessName: form.businessName.trim(),
          consentGivenAt: new Date().toISOString(),
          source: "sofia-sms-consent-page",
        }),
      });

      const data = await res.json();

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Submission failed.");
      }

      setStatus("ok");
      setForm({ firstName: "", lastName: "", phone: "", businessName: "", consent: false });
    } catch (err: unknown) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-neutral-900/95 via-purple-900/30 to-pink-900/30 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="https://i.imgur.com/clZNuAZ.png?v=2"
                alt="Migo Logo"
                width={200}
                height={48}
                className="h-12 w-auto"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-pink-400 via-purple-400 to-sky-400 bg-clip-text text-transparent">
                Advertisement
              </span>
            </Link>
            <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 max-w-3xl">
        {/* Title */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-3 mb-4">
            <MessageSquare className="text-sky-400" size={32} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-sky-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Sofia AI SMS Consent
            </h1>
          </div>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Operator-only consent form for Sofia AI call-summary text notifications.
          </p>
        </div>

        {/* Context banner — clarifies who this page is for */}
        <div className="bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-sky-400/30 p-6 mb-8">
          <div className="flex items-center gap-2 mb-3">
            <Shield className="text-sky-400" size={20} />
            <h2 className="text-xl font-semibold text-white mb-0">What this form is for</h2>
          </div>
          <p className="text-white/80 mb-3">
            This is a dedicated, standalone SMS consent step for business operators who use the Sofia AI voice agent service from Migo Advertisement LLC. Sofia AI answers your business phone calls and sends you a text message summarizing each call.
          </p>
          <p className="text-white/80 mb-0">
            By submitting this form, you provide affirmative, written consent to receive those SMS notifications at the mobile number you enter below. <strong>This consent is separate from the Sofia AI service agreement</strong> and is a single-purpose authorization for SMS messaging only.
          </p>
        </div>

        {/* The Disclosure (full SMS disclosure shown above the consent box) */}
        <div className="bg-gray-900/60 rounded-xl border border-white/10 p-6 mb-8">
          <h2 className="text-lg font-semibold text-pink-300 mb-3 flex items-center gap-2">
            <MessageSquare size={18} />
            SMS Consent Disclosure
          </h2>
          <div className="text-white/80 space-y-3 text-sm leading-relaxed">
            <p>
              By checking the box below and submitting this form, you agree to receive recurring automated SMS text messages from Migo Advertisement LLC, sent through the Sofia AI service, at the mobile number you provide. These messages contain AI-generated summaries of inbound phone calls answered by Sofia on your behalf, including caller name, callback number, lead intent, listing or service of interest, and recommended next steps.
            </p>
            <p>
              <strong>Message frequency varies</strong> based on your call volume — typically 1 to 20 messages per day.
              {" "}
              <strong>Message and data rates may apply.</strong>
              {" "}
              Reply <strong>STOP</strong> at any time to unsubscribe; you will receive one final confirmation and no further messages.
              {" "}
              Reply <strong>HELP</strong> for help, or contact <a href="mailto:bernardo@migonow.com" className="text-sky-400 hover:text-sky-300 underline">bernardo@migonow.com</a> or 480-647-2380.
            </p>
            <p>
              Consent to receive SMS is not a condition of any purchase or service. Mobile information and SMS consent will not be shared with third parties or affiliates for marketing or promotional purposes. See our{" "}
              <Link href="/privacy" className="text-sky-400 hover:text-sky-300 underline">Privacy Policy</Link>
              {" "}and{" "}
              <Link href="/terms" className="text-sky-400 hover:text-sky-300 underline">Terms of Service</Link>
              {" "}for full details.
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-white/10 p-8 space-y-6"
        >
          {/* Name fields */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-white/80 mb-2">
                First Name <span className="text-pink-400">*</span>
              </label>
              <input
                type="text"
                required
                autoComplete="given-name"
                value={form.firstName}
                onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-white/40 focus:border-sky-400 focus:outline-none"
                placeholder="Your first name"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-white/80 mb-2">
                Last Name <span className="text-pink-400">*</span>
              </label>
              <input
                type="text"
                required
                autoComplete="family-name"
                value={form.lastName}
                onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-white/40 focus:border-sky-400 focus:outline-none"
                placeholder="Your last name"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">
              <Phone size={14} className="inline -mt-1 mr-1" />
              Mobile Phone Number <span className="text-pink-400">*</span>
            </label>
            <input
              type="tel"
              required
              autoComplete="tel"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-white/40 focus:border-sky-400 focus:outline-none"
              placeholder="+1 (555) 555-1234"
            />
            <p className="text-xs text-white/50 mt-1">
              U.S. mobile numbers only. This is the number Sofia AI will text with call summaries.
            </p>
          </div>

          {/* Business Name */}
          <div>
            <label className="block text-sm font-semibold text-white/80 mb-2">
              <User size={14} className="inline -mt-1 mr-1" />
              Business / Brokerage Name <span className="text-white/40">(optional)</span>
            </label>
            <input
              type="text"
              value={form.businessName}
              onChange={(e) => setForm({ ...form, businessName: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/20 text-white placeholder-white/40 focus:border-sky-400 focus:outline-none"
              placeholder="e.g. Luis Realty Group"
            />
          </div>

          {/* Dedicated SMS consent checkbox — single purpose, unchecked by default */}
          <div className="bg-pink-900/15 border border-pink-400/30 rounded-xl p-5">
            <label className="flex items-start gap-3 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                className="mt-1 h-5 w-5 rounded border-white/30 bg-black/50 text-pink-500 focus:ring-pink-400 focus:ring-offset-0 cursor-pointer"
              />
              <span className="text-white/90 text-sm leading-relaxed">
                <strong>I agree to receive SMS messages from Sofia AI (Migo Advertisement LLC) as described in the SMS Consent Disclosure above.</strong>
                {" "}I understand message frequency varies, message and data rates may apply, I can reply STOP to opt out at any time, and I can reply HELP for help. I confirm this consent is not a condition of any purchase or service, and that this consent is being given separately from any service agreement.
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="flex flex-col gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-4 bg-gradient-to-r from-sky-500 via-purple-500 to-pink-500 font-semibold shadow-lg shadow-purple-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "sending" ? "Submitting..." : "Submit SMS Consent"}
            </button>

            {status === "ok" && (
              <div className="flex items-start gap-2 text-green-400 bg-green-400/10 border border-green-400/30 rounded-xl p-4">
                <CheckCircle size={18} className="mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <strong>SMS consent recorded.</strong> Watch your phone — you should receive a confirmation text within a minute. Reply STOP at any time to unsubscribe.
                </div>
              </div>
            )}

            {status === "error" && (
              <div className="text-red-400 bg-red-400/10 border border-red-400/30 rounded-xl p-4 text-sm">
                {error || "Something went wrong. Please try again."}
              </div>
            )}

            <p className="text-xs text-white/50 text-center">
              <span className="text-pink-400">*</span> Required. By submitting, the timestamp and your IP address are stored as part of the SMS consent record.
            </p>
          </div>
        </form>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
            <Link href="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <ArrowLeft size={16} />
              Return to Homepage
            </Link>
            <div className="flex gap-4">
              <Link href="/privacy" className="text-sky-400 hover:text-sky-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-purple-400 hover:text-purple-300 transition-colors">
                Terms
              </Link>
              <Link href="/contact" className="text-pink-400 hover:text-pink-300 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
