"use client";

import Link from "next/link";
import { useState } from "react";

const steps = [
  {
    num: "1",
    title: "Connect Your Instagram",
    desc: "Log in with your Instagram Business or Creator account through Meta's official API. No passwords shared, no third-party access.",
    icon: "🔗",
    visual: (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#833AB4] to-[#FD1D1D] flex items-center justify-center">
            <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
          </div>
          <div>
            <div className="text-base font-semibold text-[#2D3436]">@yourbrand</div>
            <div className="text-sm text-[#636E72]">Instagram Business</div>
          </div>
          <div className="ml-auto px-4 py-2 bg-green-100 text-green-700 text-sm font-semibold rounded-full flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
            Connected
          </div>
        </div>
        <p className="text-xs text-[#B2BEC3] mt-4">Your account stays fully protected.</p>
      </div>
    ),
  },
  {
    num: "2",
    title: "Set Your Triggers",
    desc: "Pick what starts each automation: a keyword in comments, a story reply, or a specific DM. Write your response, add your links.",
    icon: "⚡",
    visual: (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="space-y-4">
          <div>
            <label className="text-xs text-[#B2BEC3] font-medium uppercase tracking-wider">Trigger</label>
            <div className="mt-2 flex items-center gap-2">
              <span className="px-3 py-1 bg-gray-100 text-sm text-[#636E72] rounded-lg">When comment is</span>
              <span className="px-4 py-1 bg-[#6C5CE7] text-white text-sm font-bold rounded-full">LINK</span>
            </div>
          </div>
          <div>
            <label className="text-xs text-[#B2BEC3] font-medium uppercase tracking-wider">Message</label>
            <div className="mt-2 bg-gray-50 rounded-xl p-4 text-sm text-[#2D3436] border border-gray-100">
              Hey! Here&apos;s the link you asked for 👇<br/>
              <span className="text-[#6C5CE7] underline">https://yoursite.com/link</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    num: "3",
    title: "Go Live and Let It Run",
    desc: "Flip the switch and your automations are active 24/7. Every qualifying comment or message gets an instant DM response.",
    icon: "🚀",
    visual: (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping" />
            </div>
            <span className="text-sm font-semibold text-[#2D3436]">Live · auto-replying</span>
          </div>
          <div className="w-14 h-7 bg-[#6C5CE7] rounded-full relative cursor-pointer">
            <div className="absolute right-1 top-1 w-5 h-5 bg-white rounded-full shadow transition-all" />
          </div>
        </div>
        <div className="bg-gray-50 rounded-xl p-4 space-y-2">
          <div className="flex items-center gap-2 text-xs text-[#B2BEC3]">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>Just now — DM sent to @sarah.k</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#B2BEC3]">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>2 min ago — DM sent to @mike.r</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-[#B2BEC3]">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span>5 min ago — DM sent to @jess.l</span>
          </div>
        </div>
      </div>
    ),
  },
];

const triggers = [
  {
    title: "Comment-to-DM",
    desc: "A follower comments a keyword on your post or Reel. Flow.Ai instantly sends them a DM with your link, offer, or lead magnet.",
    icon: "💬",
    badge: "Highest converting trigger",
  },
  {
    title: "Story Reply Automation",
    desc: "When someone replies to or reacts to your Story, they get an automatic DM response. Turn passive engagement into active conversations.",
    icon: "📱",
    badge: "Story replies",
  },
  {
    title: "Keyword DMs",
    desc: "Someone sends you a DM containing a specific word or phrase. Flow.Ai detects it and replies instantly with your pre-written message.",
    icon: "🔑",
    badge: "Direct messages",
  },
  {
    title: "Email Collection",
    desc: "Use Email Gate to ask for an email address before delivering your link. Emails saved in your contacts and exportable via CSV.",
    icon: "📧",
    badge: "Email Gate",
  },
];

const faqs = [
  { q: "How long does it take to set up?", a: "Most creators are up and running in under 5 minutes." },
  { q: "Do I need technical skills?", a: "No. If you can post on Instagram, you can set up Flow.Ai." },
  { q: "Is my Instagram account safe?", a: "Yes. Flow.Ai is an official Meta Tech Provider using Instagram's official API." },
  { q: "What types of DMs can I automate?", a: "Comment-to-DM, Story Reply automation, and Keyword DMs." },
  { q: "Can I customize the automated messages?", a: "Absolutely. You write every message yourself with your links, voice, and offers." },
  { q: "Does Flow.Ai work with Reels and Stories?", a: "Yes. Both are fully supported with instant DM responses." },
  { q: "How many DMs can I send per month?", a: "Free: 500/month. Pro ($15/mo): 5,000. Growth ($30/mo): 10,000." },
  { q: "How is Flow.Ai different from bots?", a: "Flow.Ai uses Meta's official API, not browser automation. It's Instagram-compliant." },
];

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2D3436] mb-6">
            How Instagram DM Automation <span className="gradient-text">Works</span>
          </h1>
          <p className="text-lg text-[#636E72] max-w-2xl mx-auto mb-8">
            Connect your account, set a trigger, and go live in under 2 minutes. See how Flow.Ai turns comments into automatic DMs.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE] rounded-full hover:shadow-xl hover:shadow-[#6C5CE7]/25 transition-all duration-300 hover:scale-105"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* 3 Steps */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3436] mb-4">3 Steps to Automate Your DMs</h2>
            <p className="text-lg text-[#636E72]">From zero to live automations in under 2 minutes. No code, no complexity.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((s) => (
              <div key={s.num} className="text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-[#6C5CE7] to-[#A29BFE] text-white text-xl font-bold mb-6">
                  {s.num}
                </div>
                <h3 className="text-xl font-bold text-[#2D3436] mb-3">{s.title}</h3>
                <p className="text-sm text-[#636E72] mb-6 leading-relaxed">{s.desc}</p>
                {s.visual}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trigger Types */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3436] mb-4">What You Can Automate</h2>
            <p className="text-lg text-[#636E72]">Four trigger types that cover every DM use case a creator needs.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {triggers.map((t) => (
              <div key={t.title} className="bg-white rounded-2xl p-6 border border-gray-100 card-hover">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{t.icon}</div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-bold text-[#2D3436]">{t.title}</h3>
                      <span className="px-2 py-0.5 bg-[#6C5CE7]/10 text-[#6C5CE7] text-xs font-medium rounded-full">{t.badge}</span>
                    </div>
                    <p className="text-sm text-[#636E72] leading-relaxed">{t.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Creators Choose */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3436] mb-4">Why Creators Choose Flow.Ai</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Official Meta Tech Provider", desc: "Uses Instagram's official API. No browser bots, no password sharing.", icon: "✅" },
              { title: "Live in Under 2 Minutes", desc: "Connect your account, pick a trigger, write your message. Done.", icon: "⚡" },
              { title: "Full Message Control", desc: "You write every word. Add your links, your tone, your offers.", icon: "✍️" },
              { title: "Email Collection Built In", desc: "Capture emails directly inside DM conversations with Email Gate.", icon: "📧" },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="text-3xl mb-4">{item.icon}</div>
                <h3 className="text-base font-bold text-[#2D3436] mb-2">{item.title}</h3>
                <p className="text-sm text-[#636E72]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meta Official API */}
      <section className="py-16 bg-gradient-to-br from-[#6C5CE7]/5 to-[#00CEC9]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sm font-semibold text-[#6C5CE7] mb-6 shadow-sm">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>
            Official Meta Tech Provider
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#2D3436] mb-4">Built on Meta&apos;s Official API</h2>
          <p className="text-lg text-[#636E72] max-w-2xl mx-auto mb-6">
            Flow.Ai is a Meta Tech Provider. Every DM is sent through Instagram&apos;s official Messenger API.
            Your account stays safe, compliant, and fully protected.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {["No password sharing", "No browser bots", "Instagram-compliant", "Fully approved"].map((tag) => (
              <span key={tag} className="px-4 py-2 bg-white rounded-full text-sm font-medium text-[#2D3436] border border-gray-100">
                ✓ {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2D3436] text-center mb-12">Common Questions</h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-[#2D3436] pr-4">{faq.q}</span>
                  <svg
                    className={`w-5 h-5 text-[#636E72] flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-[#636E72] leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d4e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Automating Your DMs Today</h2>
          <p className="text-lg text-gray-300 mb-8">Free plan. Live in 2 minutes.</p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-[#1a1a2e] bg-white rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </>
  );
}
