"use client";

import Link from "next/link";
import { ArrowLeft, User, Target, Lightbulb, TrendingUp, Shield, Award, Building, Phone, Mail, Calendar, MapPin } from "lucide-react";

export default function AboutPage() {
  const milestones = [
    { 
      date: "2024", 
      title: "Concept Development", 
      description: "Identified opportunity in mobile billboard advertising for rideshare vehicles",
      icon: Lightbulb,
      color: "text-yellow-400"
    },
    { 
      date: "Early 2025", 
      title: "Technology Development", 
      description: "Developed secure tablet mounting system and GPS tracking platform",
      icon: Building,
      color: "text-blue-400"
    },
    { 
      date: "September 2025", 
      title: "Testing Phase", 
      description: "Currently testing with 3 tablets validating system reliability",
      icon: Award,
      color: "text-green-400"
    },
    { 
      date: "January 2026", 
      title: "Estimated Launch", 
      description: "Full service launch with 10 tablets across Phoenix metro area",
      icon: TrendingUp,
      color: "text-purple-400"
    }
  ];

  const values = [
    {
      title: "Driver-First Approach",
      description: "Drivers own their tablets after financing and assume no liability during normal operation",
      icon: User,
      color: "text-blue-400"
    },
    {
      title: "Transparent Partnerships",
      description: "Clear pricing, honest timelines, and 30-day notice for any changes",
      icon: Shield,
      color: "text-green-400"
    },
    {
      title: "Technology Innovation",
      description: "Cutting-edge GPS tracking, secure mounting, and real-time performance analytics",
      icon: Target,
      color: "text-purple-400"
    },
    {
      title: "Sustainable Growth",
      description: "Realistic scaling from 3 to 10 to 50+ tablets with proven market validation",
      icon: TrendingUp,
      color: "text-cyan-400"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-neutral-900/95 via-purple-900/30 to-pink-900/30 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-3">
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
          </div>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <Link href="/pricing" className="hover:text-pink-400 font-semibold">Pricing</Link>
              <Link href="/ad-specs" className="hover:text-purple-400 font-semibold">Ad Specs</Link>
              <Link href="/driver-earnings" className="hover:text-sky-400 font-semibold">Driver Earnings</Link>
              <Link href="/service-area" className="hover:text-green-400 font-semibold">Service Area</Link>
              <Link href="/testimonials" className="hover:text-yellow-400 font-semibold">Testimonials</Link>
              <Link href="/faq" className="hover:text-cyan-400 font-semibold">FAQ</Link>
              <Link href="/contact" className="hover:text-orange-400 font-semibold">Contact</Link>
              <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
                <ArrowLeft size={16} />
                Home
              </Link>
            </nav>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Building className="text-blue-400" size={32} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Migo Advertisement
            </h1>
          </div>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Pioneering the future of mobile advertising through innovative rideshare billboard technology
          </p>
        </div>

        {/* Mission Statement */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-blue-400/30 p-8 text-center">
            <h2 className="text-3xl font-bold text-blue-400 mb-6">Our Mission</h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto">
              To revolutionize mobile advertising by creating a sustainable revenue stream for rideshare drivers while providing businesses with cost-effective, targeted advertising that reaches customers exactly where they are. We believe in driver ownership, transparent partnerships, and technology that works reliably in the real world.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-white/10 p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-pink-400 mb-4 flex items-center gap-2">
                  <User size={24} />
                  Meet the Founder
                </h2>
                <div className="space-y-4 text-white/80">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Bernardo Ruiz</h3>
                    <p className="text-purple-400 font-semibold mb-3">Founder & CEO, Migo Advertisement LLC</p>
                  </div>
                  <p className="leading-relaxed">
                    Bernardo identified the untapped potential in mobile billboard advertising for rideshare vehicles, 
                    recognizing that traditional advertising was missing opportunities to reach customers during their daily commutes 
                    and travels throughout the city.
                  </p>
                  <p className="leading-relaxed">
                    With a focus on creating win-win partnerships, Bernardo designed a system where drivers truly benefit 
                    through equipment ownership and transparent earnings, while advertisers gain access to targeted, 
                    mobile reach that traditional billboards can't provide.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <a 
                      href="mailto:bernardo@migonow.com"
                      className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition-colors"
                    >
                      <Mail size={16} />
                      bernardo@migonow.com
                    </a>
                    <a 
                      href="tel:480-647-2380"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      <Phone size={16} />
                      (480) 647-2380
                    </a>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl border border-pink-400/30 p-6">
                <h4 className="text-lg font-bold text-pink-400 mb-4">Leadership Philosophy</h4>
                <div className="space-y-3 text-white/80 text-sm">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Driver success is company success - we grow together</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Technology should be reliable and simple to use</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Honest communication builds lasting partnerships</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Sustainable growth creates long-term value</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Company Timeline */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8 flex items-center justify-center gap-2">
            <Calendar className="text-green-400" size={28} />
            Our Journey
          </h2>
          
          <div className="space-y-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0">
                  <div className={`w-12 h-12 rounded-full bg-gray-900 border-2 border-current ${milestone.color} flex items-center justify-center`}>
                    <milestone.icon size={20} />
                  </div>
                </div>
                <div className="flex-grow">
                  <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-xl border border-white/10 p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-3">
                      <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                      <span className={`text-sm font-semibold px-3 py-1 rounded-full bg-current/10 ${milestone.color}`}>
                        {milestone.date}
                      </span>
                    </div>
                    <p className="text-white/80">{milestone.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8 flex items-center justify-center gap-2">
            <Shield className="text-purple-400" size={28} />
            Our Values
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-white/10 p-6">
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-current/10 ${value.color}`}>
                    <value.icon size={24} />
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 ${value.color}`}>{value.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Information */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl border border-purple-400/30 p-8">
            <h2 className="text-2xl font-bold text-center text-purple-400 mb-8">Business Information</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <Building className="text-purple-400 mx-auto mb-3" size={24} />
                <div className="font-semibold text-white mb-1">Legal Entity</div>
                <div className="text-white/80 text-sm">Migo Advertisement LLC</div>
              </div>
              <div className="text-center">
                <MapPin className="text-blue-400 mx-auto mb-3" size={24} />
                <div className="font-semibold text-white mb-1">Headquarters</div>
                <div className="text-white/80 text-sm">Phoenix, Arizona</div>
              </div>
              <div className="text-center">
                <Calendar className="text-cyan-400 mx-auto mb-3" size={24} />
                <div className="font-semibold text-white mb-1">Founded</div>
                <div className="text-white/80 text-sm">2024</div>
              </div>
              <div className="text-center">
                <Target className="text-green-400 mx-auto mb-3" size={24} />
                <div className="font-semibold text-white mb-1">Industry</div>
                <div className="text-white/80 text-sm">Mobile Advertising Technology</div>
              </div>
              <div className="text-center">
                <User className="text-pink-400 mx-auto mb-3" size={24} />
                <div className="font-semibold text-white mb-1">Leadership</div>
                <div className="text-white/80 text-sm">Founder-Led</div>
              </div>
              <div className="text-center">
                <Shield className="text-orange-400 mx-auto mb-3" size={24} />
                <div className="font-semibold text-white mb-1">Business Model</div>
                <div className="text-white/80 text-sm">B2B2C Platform</div>
              </div>
            </div>
          </div>
        </div>

        {/* Vision Statement */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl border border-pink-400/30 p-8 text-center">
            <h2 className="text-3xl font-bold text-pink-400 mb-6">Our Vision</h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-4xl mx-auto mb-6">
              To become the leading mobile billboard advertising platform in major metropolitan areas, 
              creating thousands of new income opportunities for drivers while helping businesses reach 
              customers more effectively than traditional advertising methods.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-2xl font-bold text-blue-400 mb-2">2026</div>
                <div className="text-white/60 text-sm">Phoenix Metro Launch</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-purple-400 mb-2">2027</div>
                <div className="text-white/60 text-sm">50+ Tablets Active</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-pink-400 mb-2">Future</div>
                <div className="text-white/60 text-sm">Multi-City Expansion</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-white/10 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Mission?
            </h3>
            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
              Whether you're a driver looking for additional income or a business seeking innovative advertising, 
              we'd love to hear from you and discuss how we can work together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 font-semibold shadow-lg shadow-pink-500/30"
              >
                Get in Touch
              </Link>
              <Link 
                href="/driver-earnings"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 border border-blue-400/30 font-semibold hover:bg-blue-500/10 transition-colors"
              >
                Become a Driver
              </Link>
              <Link 
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 border border-purple-400/30 font-semibold hover:bg-purple-500/10 transition-colors"
              >
                Advertise With Us
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
              <Link href="/service-area" className="text-green-400 hover:text-green-300 transition-colors">
                Service Area
              </Link>
              <Link href="/faq" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                FAQ
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
