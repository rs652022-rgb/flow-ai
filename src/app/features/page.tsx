"use client";

import Link from "next/link";
import { useState } from "react";

const features = [
  {
    id: "comment-to-dm",
    title: "Comment-to-DM",
    subtitle: "The highest-converting trigger for creators",
    desc: "A follower comments a keyword on your post or Reel. Flow.Ai instantly sends them a DM with your link, offer, or lead magnet. Every photo and carousel becomes a storefront.",
    icon: "💬",
    color: "from-[#6C5CE7]/10 to-[#A29BFE]/10",
    border: "border-[#6C5CE7]/20",
    details: [
      "Works on posts, Reels, and carousels",
      "Custom keyword triggers",
      "Personalized DM messages",
      "Reply variations to feel natural",
      "One-click setup per automation",
    ],
  },
  {
    id: "story-replies",
    title: "Story Reply Automation",
    subtitle: "Turn passive engagement into active conversations",
    desc: "When someone replies to or reacts to your Story, they get an automatic DM response. The moment they react, you respond — even while you sleep.",
    icon: "📱",
    color: "from-[#00CEC9]/10 to-[#55EFC4]/10",
    border: "border-[#00CEC9]/20",
    details: [
      "Auto-reply to story reactions",
      "Triggered by any story reply",
      "Instant DM delivery",
      "Works alongside comment automations",
      "No manual intervention needed",
    ],
  },
  {
    id: "keyword-dms",
    title: "Keyword DMs",
    subtitle: "Reply to anything, automatically",
    desc: "Someone sends you a DM containing a specific word or phrase. Flow.Ai detects it and replies instantly with your pre-written message. Perfect for product inquiries.",
    icon: "🔑",
    color: "from-[#FDCB6E]/10 to-[#E17055]/10",
    border: "border-[#FDCB6E]/20",
    details: [
      "Detect any keyword in incoming DMs",
      "Instant auto-replies",
      "Perfect for FAQs and product inquiries",
      "Works with any word or phrase",
      "Combine with other automations",
    ],
  },
  {
    id: "email-gate",
    title: "Email Gate",
    subtitle: "Collect emails before sending links",
    desc: "Require an email address before delivering your link or freebie. Build your email list from Instagram engagement without sending followers to external landing pages.",
    icon: "📧",
    color: "from-[#FF6B6B]/10 to-[#A29BFE]/10",
    border: "border-[#FF6B6B]/20",
    details: [
      "Require email before link delivery",
      "Built-in Contact CRM",
      "Export contacts as CSV",
      "Compatible with Mailchimp, Kit, Flodesk",
      "Zero extra landing pages needed",
    ],
  },
  {
    id: "follow-gate",
    title: "Follow Gate",
    subtitle: "Auto-grow followers with every DM",
    desc: "Require a follow before the link goes out. Every commenter who wants it becomes a follower who sees your next post too.",
    icon: "🔒",
    color: "from-[#00B894]/10 to-[#00CEC9]/10",
    border: "border-[#00B894]/20",
    details: [
      "Require follow before link delivery",
      "Automatic follow verification",
      "Grow followers on every post",
      "Works with comment-to-DM",
      "Never miss a potential follower",
    ],
  },
  {
    id: "auto-send-links",
    title: "Auto-Send Links",
    subtitle: "Instantly deliver links via DM",
    desc: "The moment someone triggers your automation, they get your link in a DM. No waiting, no manual work — just instant delivery.",
    icon: "⚡",
    color: "from-[#6C5CE7]/10 to-[#00CEC9]/10",
    border: "border-[#6C5CE7]/20",
    details: [
      "Instant link delivery",
      "Works on every post and Reel",
      "Custom link buttons",
      "Track click-through rates",
      "Support for multiple links",
    ],
  },
  {
    id: "rewind",
    title: "Rewind",
    subtitle: "New leads from content you already shared",
    desc: "Go back and DM everyone who already commented on your recent posts. Turn old engagement into new leads.",
    icon: "↺",
    color: "from-[#A29BFE]/10 to-[#6C5CE7]/10",
    border: "border-[#A29BFE]/20",
    details: [
      "Re-DM past commenters",
      "Unlock hidden leads from old posts",
      "Works with existing automations",
      "Bulk process historical comments",
      "+128 leads average per rewind",
    ],
  },
  {
    id: "link-tracking",
    title: "Link Click Tracking",
    subtitle: "See what's selling, in real time",
    desc: "Every link click is tracked and attributed to the automation that drove it. Know exactly which posts and keywords convert best.",
    icon: "📊",
    color: "from-[#00B894]/10 to-[#55EFC4]/10",
    border: "border-[#00B894]/20",
    details: [
      "Real-time click tracking",
      "Per-automation analytics",
      "Geographic distribution",
      "Click-through rate calculation",
      "Conversion attribution",
    ],
  },
];

const creatorTypes = [
  { name: "Content Creators", desc: "Turn your audience into a list you own.", icon: "📸" },
  { name: "Affiliate Creators", desc: "Every comment becomes a potential commission.", icon: "💰" },
  { name: "Coaches & Educators", desc: "Book calls and sell courses on autopilot.", icon: "🎯" },
  { name: "Service Businesses", desc: "Capture leads while you focus on delivery.", icon: "💼" },
];

export default function FeaturesPage() {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2D3436] mb-6">
            Everything you need to <span className="gradient-text">automate Instagram</span>
          </h1>
          <p className="text-lg text-[#636E72] max-w-2xl mx-auto mb-8">
            From comment-to-DM to email collection, Flow.Ai has every trigger covered. Set it up once, it runs on every post.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE] rounded-full hover:shadow-xl hover:shadow-[#6C5CE7]/25 transition-all duration-300 hover:scale-105"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Feature Navigation */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-4 scrollbar-hide">
            {features.map((f, i) => (
              <button
                key={f.id}
                onClick={() => setActiveFeature(i)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeFeature === i
                    ? "bg-[#6C5CE7] text-white shadow-lg shadow-[#6C5CE7]/25"
                    : "bg-gray-100 text-[#636E72] hover:bg-gray-200"
                }`}
              >
                <span>{f.icon}</span>
                {f.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active Feature Detail */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-semibold text-[#6C5CE7] mb-3 uppercase tracking-wider">{features[activeFeature].subtitle}</div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3436] mb-4">{features[activeFeature].title}</h2>
              <p className="text-lg text-[#636E72] leading-relaxed mb-8">{features[activeFeature].desc}</p>
              <ul className="space-y-4">
                {features[activeFeature].details.map((d, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#00B894]/10 flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-[#00B894]" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                    </div>
                    <span className="text-sm text-[#2D3436]">{d}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`bg-gradient-to-br ${features[activeFeature].color} border ${features[activeFeature].border} rounded-3xl p-8`}>
              <div className="text-center">
                <div className="text-6xl mb-6">{features[activeFeature].icon}</div>
                <div className="bg-white rounded-2xl p-6 shadow-sm max-w-sm mx-auto">
                  <div className="text-3xl font-bold gradient-text mb-2">{features[activeFeature].title}</div>
                  <p className="text-sm text-[#636E72]">{features[activeFeature].subtitle}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Features Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3436] mb-4">All Features</h2>
            <p className="text-lg text-[#636E72]">Everything you need in one dashboard</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <div
                key={f.id}
                onClick={() => setActiveFeature(i)}
                className={`bg-white rounded-2xl p-6 border cursor-pointer card-hover ${
                  activeFeature === i ? "border-[#6C5CE7] shadow-lg shadow-[#6C5CE7]/10" : "border-gray-100"
                }`}
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-base font-bold text-[#2D3436] mb-1">{f.title}</h3>
                <p className="text-xs text-[#636E72]">{f.subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Creator Types */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3436] mb-4">Built for every creator</h2>
            <p className="text-lg text-[#636E72]">From 1K to 200K, every size sells with Flow.Ai.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creatorTypes.map((ct) => (
              <div key={ct.name} className="text-center p-6 bg-gray-50 rounded-2xl card-hover">
                <div className="text-4xl mb-4">{ct.icon}</div>
                <h3 className="text-base font-bold text-[#2D3436] mb-2">{ct.name}</h3>
                <p className="text-sm text-[#636E72]">{ct.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d4e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to automate your DMs?</h2>
          <p className="text-lg text-gray-300 mb-8">Join 20,000+ creators already using Flow.Ai</p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-[#1a1a2e] bg-white rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get Started Free
          </Link>
        </div>
      </section>
    </>
  );
}
