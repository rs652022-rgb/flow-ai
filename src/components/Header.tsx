"use client";

import Link from "next/link";
import { useState } from "react";

const useCases = [
  { name: "Comment-to-DM", href: "/features#comment-to-dm", desc: "Auto-reply to comments with a DM" },
  { name: "Auto-Send Links", href: "/features#auto-send-links", desc: "Instantly send links via DM" },
  { name: "Lead Capture", href: "/features#lead-capture", desc: "Collect emails before sending links" },
  { name: "Story Replies", href: "/features#story-replies", desc: "Respond to story replies automatically" },
];

const creatorTypes = [
  { name: "Content Creators", href: "/features#creators", emoji: "📸" },
  { name: "Affiliate Creators", href: "/features#affiliates", emoji: "💰" },
  { name: "Coaches & Educators", href: "/features#coaches", emoji: "🎯" },
  { name: "Service Businesses", href: "/features#services", emoji: "💼" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#6C5CE7] to-[#00CEC9] flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold">
              <span className="gradient-text">Flow</span>
              <span className="text-[#636E72]">.Ai</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {/* Use Case Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("usecase")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-3 py-2 text-sm font-medium text-[#636E72] hover:text-[#2D3436] transition-colors rounded-lg hover:bg-gray-100/50 flex items-center gap-1">
                Use Cases
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === "usecase" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "usecase" && (
                <div className="absolute top-full left-0 mt-1 w-80 bg-white rounded-xl shadow-xl border border-gray-100 p-2 animate-fade-in">
                  {useCases.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <div className="font-medium text-sm text-[#2D3436]">{item.name}</div>
                      <div className="text-xs text-[#636E72] mt-0.5">{item.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Creator Type Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("creator")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="px-3 py-2 text-sm font-medium text-[#636E72] hover:text-[#2D3436] transition-colors rounded-lg hover:bg-gray-100/50 flex items-center gap-1">
                For Creators
                <svg className={`w-4 h-4 transition-transform ${activeDropdown === "creator" ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {activeDropdown === "creator" && (
                <div className="absolute top-full left-0 mt-1 w-72 bg-white rounded-xl shadow-xl border border-gray-100 p-2 animate-fade-in">
                  {creatorTypes.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-lg">{item.emoji}</span>
                      <span className="font-medium text-sm text-[#2D3436]">{item.name}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/how-it-works" className="px-3 py-2 text-sm font-medium text-[#636E72] hover:text-[#2D3436] transition-colors rounded-lg hover:bg-gray-100/50">
              How It Works
            </Link>
            <Link href="/features" className="px-3 py-2 text-sm font-medium text-[#636E72] hover:text-[#2D3436] transition-colors rounded-lg hover:bg-gray-100/50">
              Features
            </Link>
            <Link href="/automations" className="px-3 py-2 text-sm font-medium text-[#636E72] hover:text-[#2D3436] transition-colors rounded-lg hover:bg-gray-100/50">
              Automations
            </Link>
            <Link href="/integrations" className="px-3 py-2 text-sm font-medium text-[#636E72] hover:text-[#2D3436] transition-colors rounded-lg hover:bg-gray-100/50">
              Integrations
            </Link>
            <Link href="/pricing" className="px-3 py-2 text-sm font-medium text-[#636E72] hover:text-[#2D3436] transition-colors rounded-lg hover:bg-gray-100/50">
              Pricing
            </Link>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/login" className="px-4 py-2 text-sm font-medium text-[#636E72] hover:text-[#2D3436] transition-colors">
              Login
            </Link>
            <Link
              href="/signup"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE] rounded-full hover:shadow-lg hover:shadow-[#6C5CE7]/25 transition-all duration-300 hover:scale-105"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              <div className="px-3 py-2 text-xs font-semibold text-[#B2BEC3] uppercase tracking-wider">Use Cases</div>
              {useCases.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-2 text-sm text-[#636E72] hover:text-[#2D3436] hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="border-t border-gray-100 my-2" />
              <Link href="/how-it-works" onClick={() => setMobileOpen(false)} className="px-4 py-2 text-sm text-[#636E72] hover:text-[#2D3436] hover:bg-gray-50 rounded-lg transition-colors">
                How It Works
              </Link>
              <Link href="/features" onClick={() => setMobileOpen(false)} className="px-4 py-2 text-sm text-[#636E72] hover:text-[#2D3436] hover:bg-gray-50 rounded-lg transition-colors">
                Features
              </Link>
              <Link href="/pricing" onClick={() => setMobileOpen(false)} className="px-4 py-2 text-sm text-[#636E72] hover:text-[#2D3436] hover:bg-gray-50 rounded-lg transition-colors">
                Pricing
              </Link>
              <div className="border-t border-gray-100 my-2" />
              <Link href="/login" onClick={() => setMobileOpen(false)} className="px-4 py-2 text-sm text-[#636E72] hover:text-[#2D3436] hover:bg-gray-50 rounded-lg transition-colors">
                Login
              </Link>
              <Link
                href="/signup"
                onClick={() => setMobileOpen(false)}
                className="mx-4 mt-2 px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE] rounded-full text-center hover:shadow-lg transition-all"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
