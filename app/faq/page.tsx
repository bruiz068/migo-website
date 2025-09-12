"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, HelpCircle, ChevronDown, ChevronUp, Users, DollarSign, Smartphone, Calendar, Shield, MapPin } from "lucide-react";

export default function FAQPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqCategories = [
    {
      title: "General Questions",
      icon: HelpCircle,
      color: "text-purple-400",
      faqs: [
        {
          question: "What is Migo Advertisement?",
          answer: "Migo Advertisement operates a mobile billboard advertising network using tablets mounted on rideshare vehicles. We connect advertisers with drivers to display targeted ads during rides, creating a new revenue stream for drivers while providing cost-effective advertising for businesses."
        },
        {
          question: "How does the mobile billboard system work?",
          answer: "Professional tablets are mounted on rideshare vehicles displaying rotating advertisements. GPS tracking ensures ads show in targeted areas, and drivers earn money based on their driving time and routes. Advertisers get real-time reporting on ad performance and reach."
        },
        {
          question: "When will the service launch?",
          answer: "Our estimated launch date is January 15, 2026. We're currently testing with 3 tablets and will provide 30-day written notice if any timeline changes are needed. We'll launch with 10 tablets and scale to 50 by year 2."
        },
        {
          question: "What areas will be covered?",
          answer: "We're launching in Phoenix, Arizona with plans to expand to other major cities. Our tablets will cover high-traffic routes, business districts, and popular destinations where rideshare activity is highest."
        }
      ]
    },
    {
      title: "For Drivers",
      icon: Users,
      color: "text-blue-400",
      faqs: [
        {
          question: "How much can I earn as a driver?",
          answer: "Earnings vary based on driving hours and active campaigns, but we estimate $200-800+ monthly for active drivers. Founding drivers get higher rates, and earnings are paid monthly based on verified GPS data. No quotas or minimum requirements."
        },
        {
          question: "What are the requirements to become a driver?",
          answer: "You must be an active driver (rideshare, delivery, or personal vehicle) with a valid driver's license and current auto insurance. Your vehicle must pass our installation requirements for tablet mounting. We are an advertising platform, not a transportation company."
        },
        {
          question: "Who owns the tablet equipment?",
          answer: "Tablets are provided through a financing arrangement. Equipment ownership transfers to you upon full payment. Company covers equipment failures and manufacturing defects. You're responsible for damage from negligence, misuse, or accidents. Optional tablet coverage available for theft protection."
        },
        {
          question: "How is the tablet installed?",
          answer: "Professional installation is provided at approved locations. The tablet mounts securely without damaging your vehicle and can be removed if needed. Installation takes about 30 minutes."
        },
        {
          question: "What if the tablet gets damaged?",
          answer: "Company covers equipment failures and manufacturing defects. You're responsible for damage from negligence, misuse, or accidents. Theft is not covered, but optional tablet coverage is available for a monthly fee deducted from earnings."
        },
        {
          question: "Can I choose which ads to display?",
          answer: "Ad content is managed by our system to ensure advertiser requirements are met. All ads meet our content standards and comply with local regulations. You'll never display inappropriate content."
        },
        {
          question: "Is the equipment safe while driving?",
          answer: "Yes, tablets are professionally installed for safety. Drivers must never interact with equipment while driving. The display is passive - no touching, adjusting, or interaction required. Drivers are responsible for prioritizing road safety and any accidents caused by distraction."
        }
      ]
    },
    {
      title: "For Advertisers",
      icon: DollarSign,
      color: "text-green-400",
      faqs: [
        {
          question: "How much does advertising cost?",
          answer: "Pre-launch pricing starts at competitive rates with a price lock guarantee for the first 100 customers. Final pricing depends on campaign duration, targeting, and ad specifications. Contact us for detailed pricing."
        },
        {
          question: "What ad formats are supported?",
          answer: "We support high-resolution images, videos, and interactive QR code campaigns. Ads are optimized for mobile viewing with bright, eye-catching displays. Our creative team can help design effective advertisements."
        },
        {
          question: "How do I track ad performance?",
          answer: "Real-time dashboard shows impressions, geographic coverage, time-based analytics, and QR code engagement. Campaign progress reports include detailed metrics and ROI analysis."
        },
        {
          question: "Can I target specific areas or times?",
          answer: "Yes! Target by geographic zones, time of day, day of week, and route types. Our GPS tracking ensures your ads display exactly where and when you want them."
        },
        {
          question: "What's the minimum campaign length?",
          answer: "Minimum campaign is 30 days. We recommend 90+ days for optimal brand awareness and customer acquisition. Longer campaigns receive better pricing and priority placement."
        },
        {
          question: "Do you guarantee impression counts?",
          answer: "While we don't guarantee specific impression numbers, we provide transparent reporting on actual performance. Our growing network ensures increasing reach as we scale from 10 to 50+ tablets."
        }
      ]
    },
    {
      title: "Technical & Equipment",
      icon: Smartphone,
      color: "text-cyan-400",
      faqs: [
        {
          question: "What type of tablets are used?",
          answer: "High-brightness, weatherproof tablets designed for automotive use. They feature GPS tracking, 4G connectivity, anti-glare screens, and professional mounting systems."
        },
        {
          question: "How is GPS tracking handled?",
          answer: "Secure GPS tracking ensures accurate location reporting and impression counting. Data is encrypted and only used for service operation and performance reporting. Driver privacy is protected."
        },
        {
          question: "What happens if there's no internet connection?",
          answer: "Tablets store ads locally and continue displaying content. GPS data is cached and uploaded when connectivity returns. The system is designed to work reliably even with intermittent connections."
        },
        {
          question: "How often are ads updated?",
          answer: "Ads rotate based on advertiser campaigns and targeting rules. New campaigns can be pushed to tablets within hours. The system automatically manages content scheduling and rotation."
        },
        {
          question: "Is the equipment secure?",
          answer: "Yes, tablets have anti-theft mounting, remote wipe capabilities, and GPS tracking for recovery. The system monitors for tampering and unauthorized removal."
        }
      ]
    },
    {
      title: "Business & Legal",
      icon: Shield,
      color: "text-orange-400",
      faqs: [
        {
          question: "Is this legal in all areas?",
          answer: "We operate in compliance with local advertising and vehicle modification regulations. Our legal team ensures all installations and content meet municipal requirements."
        },
        {
          question: "What insurance coverage is provided?",
          answer: "Equipment insurance is handled through our tablet provider (Verizon). Company covers equipment failures and manufacturing defects. Drivers maintain their own vehicle insurance and are responsible for damage from negligence or accidents. Optional enhanced tablet coverage available for theft protection (monthly fee applies)."
        },
        {
          question: "How are payments processed?",
          answer: "Driver payments are processed monthly via direct deposit or digital payment platforms. Advertiser billing is handled through secure payment processors with enterprise-grade security."
        },
        {
          question: "What if I want to cancel service?",
          answer: "30-day written notice required for service changes. Drivers can cancel anytime but keep tablet ownership once financing is complete. Advertisers have flexible campaign options."
        },
        {
          question: "How do you handle disputes?",
          answer: "We follow a structured dispute resolution process: first, direct communication with our support team; then mediation if needed; and finally binding arbitration in Phoenix, Arizona. This process protects all parties while keeping resolution costs reasonable."
        }
      ]
    },
    {
      title: "Launch & Growth",
      icon: Calendar,
      color: "text-pink-400",
      faqs: [
        {
          question: "What's the growth timeline?",
          answer: "Phase 1: Testing with 3 tablets (current). Phase 2: Launch with 10 tablets (Jan 2026). Phase 3: Scale to 50 tablets (2027). Phase 4: Expand to 100+ tablets citywide."
        },
        {
          question: "How do I secure pre-launch pricing?",
          answer: "The first 100 customers receive price lock guarantees for one year. Early drivers get founding member benefits and higher earning rates. Contact us to reserve your spot."
        },
        {
          question: "What if the launch date changes?",
          answer: "We'll provide minimum 30-day written notice of any timeline changes. Our current testing phase is progressing well, and we're confident in the January 2026 estimated launch."
        },
        {
          question: "Will you expand to other cities?",
          answer: "Yes! After establishing our Phoenix network, we plan expansion to other major cities based on demand and success metrics. Early partners get priority for new market launches."
        },
        {
          question: "How can I stay updated on progress?",
          answer: "Join our early access list for regular updates on testing progress, launch preparations, and new opportunities. Follow our website and contact us for detailed information."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-900/90 backdrop-blur">
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
            <Link href="/" className="flex items-center gap-2 text-white/60 hover:text-white transition-colors">
              <ArrowLeft size={16} />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <HelpCircle className="text-purple-400" size={32} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Everything you need to know about Migo Advertisement's mobile billboard network
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-white/10 p-6">
              <div className="flex items-center gap-3 mb-6">
                <category.icon className={category.color} size={24} />
                <h2 className={`text-2xl font-bold ${category.color}`}>
                  {category.title}
                </h2>
              </div>
              
              <div className="space-y-4">
                {category.faqs.map((faq, faqIndex) => {
                  const globalIndex = categoryIndex * 100 + faqIndex;
                  return (
                    <div 
                      key={faqIndex}
                      className="border border-white/10 rounded-xl overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(globalIndex)}
                        className="w-full px-6 py-4 text-left bg-gray-900/30 hover:bg-gray-800/50 transition-colors flex items-center justify-between"
                      >
                        <span className="font-semibold text-white pr-4">
                          {faq.question}
                        </span>
                        {openFAQ === globalIndex ? (
                          <ChevronUp className="text-purple-400 flex-shrink-0" size={20} />
                        ) : (
                          <ChevronDown className="text-purple-400 flex-shrink-0" size={20} />
                        )}
                      </button>
                      
                      {openFAQ === globalIndex && (
                        <div className="px-6 py-4 bg-gray-900/20 border-t border-white/10">
                          <p className="text-white/80 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 rounded-2xl border border-purple-400/30 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-white/60 mb-6 max-w-2xl mx-auto">
              Our team is here to help! Contact us for personalized answers about becoming a driver, advertising opportunities, or technical details.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:bernardo@migonow.com"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 bg-gradient-to-r from-pink-500 via-purple-500 to-sky-500 font-semibold shadow-lg shadow-pink-500/30"
              >
                Email Us
              </a>
              <a 
                href="tel:480-647-2380"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-6 py-3 border border-purple-400/30 font-semibold hover:bg-purple-500/10 transition-colors"
              >
                Call 480-647-2380
              </a>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-white/10">
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
              <Link href="/ad-specs" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                Ad Specifications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
