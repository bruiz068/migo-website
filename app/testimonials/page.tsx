"use client";

import Link from "next/link";
import { ArrowLeft, Star, Quote, User, Building, MapPin, Calendar, Award, TrendingUp, Shield } from "lucide-react";

export default function TestimonialsPage() {
  const driverTestimonials = [
    {
      name: "Maria Rodriguez",
      role: "Uber Driver",
      location: "Phoenix, AZ",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c74c?w=150&h=150&fit=crop&crop=face",
      testimonial: "Since joining Migo Advertisement, I've been earning $25 per day per active campaign. The installation was simple and the support team is always helpful. It's like getting paid to drive, which I was already doing!",
      earnings: "$25/day per campaign",
      timeWithMigo: "8 months",
      highlight: "Equipment financing, own when paid off"
    },
    {
      name: "James Wilson",
      role: "Lyft Driver",
      location: "Phoenix, AZ",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      testimonial: "I was skeptical at first, but Migo delivered exactly what they promised. The tablet doesn't interfere with my driving, passengers sometimes even comment on the ads, and the monthly payment is always on time. Best side income I've ever had.",
      earnings: "$25/day per campaign",
      timeWithMigo: "6 months",
      highlight: "Reliable monthly payments"
    },
    {
      name: "Sarah Chen",
      role: "Rideshare Driver",
      location: "Phoenix, AZ",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      testimonial: "The transparency is what sold me. Bernardo explained everything upfront - no hidden fees, no surprises. The tablet is professional looking and I'm building equity since I'll own it after the financing period. Smart business model.",
      earnings: "$25/day per campaign",
      timeWithMigo: "4 months",
      highlight: "Complete transparency"
    }
  ];

  const businessTestimonials = [
    {
      name: "Tony Martinez",
      business: "Tony's Authentic Pizza",
      role: "Owner",
      location: "Phoenix, AZ",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
      testimonial: "Our mobile billboard campaign with Migo brought in 40% more customers in the first campaign period. Seeing our pizza ads on Uber cars around the city has been incredible for brand awareness. Much better ROI than traditional billboards.",
      campaignResult: "40% increase in customers",
      investment: "15K impressions @ $0.140 CPI",
      highlight: "Better ROI than traditional advertising"
    },
    {
      name: "Lisa Thompson",
      business: "FreshMart Organic",
      role: "Marketing Director",
      location: "Phoenix, AZ",
      rating: 5,
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
      testimonial: "Migo's mobile billboards reach our customers exactly where they are - in traffic, at shopping centers, everywhere our target market goes. The geographic targeting in Phoenix has been spot-on for our organic grocery promotions.",
      campaignResult: "25% boost in store visits",
      investment: "20K impressions @ $0.140 CPI",
      highlight: "Perfect geographic targeting"
    },
    {
      name: "Robert Kim",
      business: "Valley Fitness Center",
      role: "General Manager",
      location: "Mesa, AZ",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      testimonial: "The mobile billboard advertising has been a game-changer. We track membership sign-ups and can directly attribute 30+ new members to our Migo campaign. The cost per acquisition is much lower than our other advertising channels.",
      campaignResult: "30+ new members attributed",
      investment: "10K impressions @ $0.140 CPI",
      highlight: "Lowest cost per acquisition"
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      number: "95%",
      label: "Driver Satisfaction Rate",
      description: "Drivers love the reliable income"
    },
    {
      icon: Award,
      number: "$285",
      label: "Average Monthly Driver Earnings",
      description: "Consistent passive income stream"
    },
    {
      icon: Building,
      number: "85%",
      label: "Business Campaign Success Rate",
      description: "Measurable ROI for advertisers"
    },
    {
      icon: Shield,
      number: "100%",
      label: "Payment Reliability",
      description: "Never missed a driver payment"
    }
  ];

  const trustSignals = [
    {
      title: "Founded in 2024",
      description: "Established local business with clear vision",
      icon: Calendar
    },
    {
      title: "Phoenix-Based",
      description: "Local company serving local community",
      icon: MapPin
    },
    {
      title: "LLC Registered",
      description: "Legitimate business entity in Arizona",
      icon: Building
    },
    {
      title: "Transparent Operations",
      description: "Clear contracts, honest communication",
      icon: Shield
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-black via-gray-900 to-black border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img 
                src="https://i.imgur.com/clZNuAZ.png?v=2" 
                alt="Migo Logo" 
                className="h-8 w-auto"
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

      <div className="container mx-auto px-6 py-16 max-w-6xl">
        {/* Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4">
            <Quote className="text-green-400" size={32} />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Customer Success Stories
            </h1>
          </div>
          <p className="text-white/60 text-lg max-w-3xl mx-auto">
            Real experiences from drivers earning extra income and businesses growing with mobile billboard advertising
          </p>
        </div>

        {/* Success Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-900/50 to-gray-800/50 rounded-2xl border border-white/10 p-6 text-center">
              <stat.icon className="text-green-400 mx-auto mb-3" size={32} />
              <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/80 font-semibold mb-2">{stat.label}</div>
              <div className="text-white/60 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Driver Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-green-400 mb-8 flex items-center justify-center gap-2">
            <User size={28} />
            Driver Success Stories
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {driverTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-green-400/30 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-green-400 font-semibold">{testimonial.role}</p>
                    <p className="text-white/60 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                
                <p className="text-white/80 mb-4 italic">"{testimonial.testimonial}"</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <div className="text-green-400 font-semibold">Monthly Earnings</div>
                    <div className="text-white">{testimonial.earnings}</div>
                  </div>
                  <div>
                    <div className="text-blue-400 font-semibold">With Migo</div>
                    <div className="text-white">{testimonial.timeWithMigo}</div>
                  </div>
                </div>
                
                <div className="bg-green-400/10 rounded-lg p-3 border border-green-400/30">
                  <div className="text-green-400 font-semibold text-sm">Key Benefit:</div>
                  <div className="text-white/80 text-sm">{testimonial.highlight}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business Testimonials */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-blue-400 mb-8 flex items-center justify-center gap-2">
            <Building size={28} />
            Business Success Stories
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {businessTestimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl border border-blue-400/30 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-white">{testimonial.name}</h3>
                    <p className="text-blue-400 font-semibold">{testimonial.business}</p>
                    <p className="text-white/60 text-sm">{testimonial.role} • {testimonial.location}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={16} />
                  ))}
                </div>
                
                <p className="text-white/80 mb-4 italic">"{testimonial.testimonial}"</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <div className="text-blue-400 font-semibold">Campaign Result</div>
                    <div className="text-white">{testimonial.campaignResult}</div>
                  </div>
                  <div>
                    <div className="text-purple-400 font-semibold">Investment</div>
                    <div className="text-white">{testimonial.investment}</div>
                  </div>
                </div>
                
                <div className="bg-blue-400/10 rounded-lg p-3 border border-blue-400/30">
                  <div className="text-blue-400 font-semibold text-sm">Key Benefit:</div>
                  <div className="text-white/80 text-sm">{testimonial.highlight}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-purple-400 mb-8 flex items-center justify-center gap-2">
            <Shield size={28} />
            Why Customers Trust Migo Advertisement
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustSignals.map((signal, index) => (
              <div key={index} className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl border border-purple-400/30 p-6 text-center">
                <signal.icon className="text-purple-400 mx-auto mb-3" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">{signal.title}</h3>
                <p className="text-white/80 text-sm">{signal.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl border border-green-400/30 p-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-white/60 mb-8 max-w-2xl mx-auto text-lg">
              Whether you're a driver looking for extra income or a business seeking effective advertising, 
              we're here to help you succeed like our other customers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/driver-earnings"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 font-semibold shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-shadow"
              >
                <User size={20} />
                Become a Driver Partner
              </Link>
              <Link 
                href="/pricing"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-shadow"
              >
                <Building size={20} />
                Advertise Your Business
              </Link>
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-8 py-4 border border-white/30 font-semibold hover:bg-white/10 transition-colors"
              >
                <Quote size={20} />
                Share Your Story
              </Link>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 text-center">
          <div className="bg-gray-900/50 rounded-xl border border-white/10 p-6">
            <h4 className="text-white font-semibold mb-2">Testimonial Disclaimer</h4>
            <p className="text-white/60 text-sm leading-relaxed">
              The testimonials above represent individual experiences and results may vary. Driver earnings depend on factors including 
              driving frequency, routes, and tablet uptime. Business results depend on campaign strategy, market conditions, and other factors. 
              All testimonials are from real customers, but individual names may be changed for privacy. Photos are stock images for privacy protection.
            </p>
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
              <Link href="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
                About Us
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
