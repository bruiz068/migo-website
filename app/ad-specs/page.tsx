"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Download, 
  FileImage, 
  FileVideo, 
  FileText,
  Monitor,
  Smartphone,
  AlertCircle,
  CheckCircle,
  Info,
  Mail,
  Phone,
  Globe,
  ArrowLeft
} from "lucide-react";

export default function AdSpecsPage() {
  const [activeTab, setActiveTab] = useState("specs");

  const specs = [
    {
      title: "Screen Dimensions",
      value: "11-inch Samsung Galaxy Tab A9+",
      icon: <Monitor className="w-5 h-5" />
    },
    {
      title: "Resolution",
      value: "1920 x 1200 pixels (WUXGA)",
      icon: <Monitor className="w-5 h-5" />
    },
    {
      title: "Aspect Ratio",
      value: "16:10 (Landscape Orientation)",
      icon: <Monitor className="w-5 h-5" />
    },
    {
      title: "Display Type",
      value: "TFT LCD, 90Hz refresh rate",
      icon: <Monitor className="w-5 h-5" />
    }
  ];

  const fileFormats = [
    {
      type: "Images",
      formats: ["JPEG", "PNG", "GIF"],
      icon: <FileImage className="w-8 h-8" />,
      color: "text-blue-400"
    },
    {
      type: "Videos",
      formats: ["MP4", "MOV", "AVI"],
      icon: <FileVideo className="w-8 h-8" />,
      color: "text-green-400"
    },
    {
      type: "Documents",
      formats: ["PDF", "AI", "PSD"],
      icon: <FileText className="w-8 h-8" />,
      color: "text-purple-400"
    }
  ];

  const requirements = [
    {
      category: "Image Requirements",
      items: [
        "Minimum resolution: 1920 x 1200 pixels",
        "Maximum file size: 50MB per image",
        "DPI: 72-150 for optimal display",
        "Color space: RGB (not CMYK)",
        "Logo sized for 11\" display"
      ],
      icon: <FileImage className="w-6 h-6 text-blue-400" />
    },
    {
      category: "Video Requirements",
      items: [
        "Resolution: 1920 x 1200 pixels (landscape)",
        "Duration: 5-30 seconds maximum",
        "Format: MP4 (H.264 codec preferred)",
        "Maximum file size: 500MB",
        "Frame rate: 24-30 fps"
      ],
      icon: <FileVideo className="w-6 h-6 text-green-400" />
    },
    {
      category: "Content Guidelines",
      items: [
        "Text should be large and readable",
        "High contrast colors recommended",
        "Avoid small details that won't be visible",
        "Include clear call-to-action",
        "Brand logo prominently displayed"
      ],
      icon: <AlertCircle className="w-6 h-6 text-yellow-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-gradient-to-r from-neutral-900/95 via-purple-900/30 to-pink-900/30 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <ArrowLeft size={20} className="text-white/60" />
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
            </Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
              <Link href="/pricing" className="hover:text-pink-400 font-semibold">Pricing</Link>
              <Link href="/ad-specs" className="text-purple-400 font-semibold">Ad Specs</Link>
              <Link href="/driver-earnings" className="hover:text-sky-400 font-semibold">Driver Earnings</Link>
              <Link href="/service-area" className="hover:text-cyan-400 font-semibold">Service Area</Link>
              <Link href="/about" className="hover:text-green-400 font-semibold">About</Link>
              <Link href="/faq" className="hover:text-yellow-400 font-semibold">FAQ</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20"></div>
        <div className="relative z-10 container mx-auto px-6 py-16 text-center">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img 
              src="https://i.imgur.com/clZNuAZ.png?v=2" 
              alt="Migo Logo" 
              className="max-w-[200px] h-auto"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-6 py-3">
              <div className="text-2xl font-bold text-white tracking-wider">📱 MIGO</div>
              <div className="text-xs text-white/80 tracking-wide">MOBILE BILLBOARD</div>
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
            Mobile Billboard
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Advertisement Specifications & Requirements
          </p>
          
          {/* Network Capacity */}
          <div className="max-w-3xl mx-auto p-4 rounded-2xl border border-blue-400/30 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10">
            <div className="text-center">
              <h3 className="text-lg font-bold text-blue-400 mb-1">🎯 Network Capacity & Reach</h3>
              <div className="text-pink-400 font-semibold mb-1">🗓️ Estimated Launch: January 15, 2026</div>
              <div className="text-white/50 text-xs mb-3">*30-day written notice provided if launch date changes</div>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-blue-400 font-semibold">Testing Phase</div>
                  <div className="text-white/80">3 tablets validating</div>
                </div>
                <div className="text-center">
                  <div className="text-purple-400 font-semibold">Launch 2026</div>
                  <div className="text-white/80">10 tablets covering routes</div>
                </div>
                <div className="text-center">
                  <div className="text-pink-400 font-semibold">Year 2 Goal</div>
                  <div className="text-white/80">50 tablets expansion</div>
                </div>
                <div className="text-center">
                  <div className="text-cyan-400 font-semibold">Full Vision</div>
                  <div className="text-white/80">100+ tablets citywide</div>
                </div>
              </div>
              <p className="text-white/60 text-sm mt-2">Reserve your advertising slots for estimated launch</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab("specs")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${ 
              activeTab === "specs" 
                ? "bg-blue-500 text-white" 
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Billboard Specifications
          </button>
          <button
            onClick={() => setActiveTab("requirements")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${ 
              activeTab === "requirements" 
                ? "bg-purple-500 text-white" 
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            Design Requirements
          </button>
          <button
            onClick={() => setActiveTab("formats")}
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${ 
              activeTab === "formats" 
                ? "bg-pink-500 text-white" 
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            File Formats
          </button>
        </div>

        {/* Billboard Specifications */}
        {activeTab === "specs" && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              📱 Billboard Specifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {specs.map((spec, index) => (
                <div key={index} className="bg-gray-900 border border-blue-500/30 rounded-xl p-6 hover:border-blue-400 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="text-blue-400">{spec.icon}</div>
                    <h3 className="text-lg font-bold text-white">{spec.title}</h3>
                  </div>
                  <p className="text-gray-300">{spec.value}</p>
                </div>
              ))}
            </div>

            {/* Visual Demonstration */}
            <div className="bg-gray-900 border border-blue-500/30 rounded-2xl p-8 text-center">
              <h3 className="text-xl font-bold text-blue-400 mb-6">Display Visualization</h3>
              
              {/* Tablet mockup - Landscape orientation */}
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="w-96 h-64 bg-gray-800 rounded-3xl border-4 border-gray-600 p-4">
                    <div className="w-full h-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 rounded-2xl flex items-center justify-center">
                      <div className="text-center text-white">
                        <div className="text-2xl font-bold mb-2">Your Ad Here</div>
                        <div className="text-sm opacity-80">1920 x 1200 pixels</div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">
                    11" Samsung Galaxy Tab A9+ (Landscape)
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-300">
                <div>
                  <strong className="text-blue-400">Width:</strong> 1920 pixels
                </div>
                <div>
                  <strong className="text-blue-400">Height:</strong> 1200 pixels
                </div>
                <div>
                  <strong className="text-blue-400">Orientation:</strong> Landscape
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Design Requirements */}
        {activeTab === "requirements" && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              📋 Design Requirements
            </h2>

            <div className="space-y-8">
              {requirements.map((req, index) => (
                <div key={index} className="bg-gray-900 border border-purple-500/30 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    {req.icon}
                    <h3 className="text-xl font-bold text-white">{req.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {req.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Best Practices */}
            <div className="bg-gradient-to-r from-green-900/50 to-blue-900/50 border border-green-500/30 rounded-xl p-6 mt-8">
              <div className="flex items-center gap-3 mb-4">
                <Info className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold text-green-400">Best Practices for Mobile Billboard Ads</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-200">
                <div>
                  <h4 className="font-semibold text-white mb-2">✅ Do:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Use bold, readable fonts (minimum 24pt)</li>
                    <li>• High contrast colors for visibility</li>
                    <li>• Simple, clear messaging</li>
                    <li>• Large, prominent logos</li>
                    <li>• Strong call-to-action</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">❌ Avoid:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• Small text or fine details</li>
                    <li>• Too much information</li>
                    <li>• Low contrast color combinations</li>
                    <li>• Complex graphics or patterns</li>
                    <li>• Multiple focal points</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* File Formats */}
        {activeTab === "formats" && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              📁 Supported File Formats
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {fileFormats.map((format, index) => (
                <div key={index} className="bg-gray-900 border border-pink-500/30 rounded-xl p-8 text-center hover:border-pink-400 transition-colors">
                  <div className={`flex justify-center mb-4 ${format.color}`}>
                    {format.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{format.type}</h3>
                  <div className="space-y-2">
                    {format.formats.map((fmt, fmtIndex) => (
                      <div key={fmtIndex} className="bg-gray-800 rounded-lg py-2 px-4 text-gray-300">
                        .{fmt.toLowerCase()}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Upload Guidelines */}
            <div className="bg-gray-900 border border-pink-500/30 rounded-xl p-6">
              <h3 className="text-xl font-bold text-pink-400 mb-4 flex items-center gap-3">
                <Download className="w-6 h-6" />
                File Upload Guidelines
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
                <div>
                  <h4 className="font-semibold text-white mb-3">File Size Limits:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Images: Maximum 50MB per file</li>
                    <li>• Videos: Maximum 500MB per file</li>
                    <li>• Documents: Maximum 100MB per file</li>
                    <li>• Total campaign assets: 2GB maximum</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">Delivery Methods:</h4>
                  <ul className="space-y-2 text-sm">
                    <li>• Email: For files under 25MB</li>
                    <li>• Google Drive or Dropbox links</li>
                    <li>• WeTransfer for large files</li>
                    <li>• USB drive for local delivery</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Contact Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-gray-900 to-black border border-blue-500/30 rounded-2xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">Need Help with Your Ad Design? 🎨</h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Our design team can create professional mobile billboard ads optimized for maximum impact. 
              Contact us for custom design services or technical assistance.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:bernardo@migonow.com?subject=Ad Design Services"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <Mail className="w-5 h-5" />
                Get Design Help
              </a>
              <a
                href="tel:+14806472380"
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 justify-center"
              >
                <Phone className="w-5 h-5" />
                Call: (480) 647-2380
              </a>
            </div>

            <div className="border-t border-gray-700 pt-6">
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>bernardo@migonow.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="w-4 h-4" />
                  <span>migonow.com</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
