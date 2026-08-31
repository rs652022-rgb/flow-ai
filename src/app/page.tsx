"use client";

import Link from "next/link";
import { useState } from "react";

/* ── Stats Section ── */
function StatsBar() {
  return (
    <div className="flex items-center justify-center gap-8 py-6 text-sm text-[#636E72]">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold gradient-text">20K+</span>
        <span className="text-xs">creators & brands</span>
      </div>
      <div className="w-px h-6 bg-gray-200" />
      <div className="flex items-center gap-2">
        <div className="flex -space-x-2">
          {["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4", "#FFEAA7"].map((c, i) => (
            <div key={i} className="w-7 h-7 rounded-full border-2 border-white" style={{ background: c }} />
          ))}
        </div>
        <span className="text-xs">Trusted by creators worldwide</span>
      </div>
    </div>
  );
}

/* ── Phone Mockup ── */
function PhoneMockup() {
  const [dmStep, setDmStep] = useState(0);

  return (
    <div className="relative mx-auto w-[280px] sm:w-[300px] animate-float">
      <div className="phone-mockup">
        <div className="bg-white rounded-[24px] overflow-hidden">
          {/* Status bar */}
          <div className="flex items-center justify-between px-5 pt-10 pb-2 text-xs font-semibold">
            <span>9:41</span>
            <div className="w-24 h-5 bg-black rounded-full" />
            <div className="flex gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/></svg>
            </div>
          </div>

          {/* IG DM Header */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FF6B6B] to-[#4ECDC4] flex items-center justify-center text-white text-xs font-bold">
              F
            </div>
            <div>
              <div className="text-sm font-semibold">flow.ai</div>
              <div className="text-xs text-green-500">Active now</div>
            </div>
          </div>

          {/* DM Messages */}
          <div className="px-4 py-4 flex flex-col gap-3 min-h-[260px]">
            {/* New follower notification */}
            <div className="text-center text-xs text-[#B2BEC3] py-1">Today 9:41</div>

            {/* Incoming message */}
            <div className="dm-bubble dm-bubble-incoming text-sm text-[#2D3436]">
              LINK please! 🔗
            </div>

            {/* Outgoing DM */}
            <div className="dm-bubble dm-bubble-outgoing text-sm">
              Hey! Here&apos;s the link you asked for 👇
            </div>

            {/* Link button */}
            <div className="self-end">
              <div className="bg-white border-2 border-[#6C5CE7] rounded-xl px-4 py-2 text-sm font-semibold text-[#6C5CE7] cursor-pointer hover:bg-[#6C5CE7] hover:text-white transition-colors">
                Shop Now →
              </div>
            </div>

            {/* Reply */}
            <div className="dm-bubble dm-bubble-incoming text-sm text-[#2D3436]">
              Omg that was instant, thank you! 🙌
            </div>
          </div>

          {/* Input */}
          <div className="px-4 pb-4">
            <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2">
              <span className="text-sm text-gray-400">Message...</span>
              <div className="w-6 h-6 rounded-full bg-[#6C5CE7] flex items-center justify-center ml-auto">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/></svg>
              </div>
            </div>
          </div>

          {/* DM sent notification */}
          <div className="bg-[#6C5CE7]/10 text-[#6C5CE7] text-center text-xs py-2 font-medium">
            ✓ DM sent automatically
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Trigger Types Section ── */
function TriggerTypes() {
  const triggers = [
    {
      label: "On a reel",
      username: "@emma.k",
      comment: "this is 🔥 LINK",
      reply: "Here's your link 👇",
      icon: "🎬",
    },
    {
      label: "On a post",
      username: "@noah.m",
      comment: "where's this from? PRICE",
      reply: "Sent you the details 👇",
      icon: "📸",
    },
    {
      label: "Story reply",
      username: "@ava.j",
      comment: "GUIDE please 🙏",
      reply: "Here's your guide 👇",
      icon: "📖",
    },
    {
      label: "In your DMs",
      username: "@leo.r",
      comment: "GUIDE",
      reply: "Here you go 👇",
      icon: "💬",
    },
  ];

  const [active, setActive] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3436] mb-4">
            Every trigger covered
          </h2>
          <p className="text-lg text-[#636E72] max-w-2xl mx-auto">
            Reply to anything, automatically. Pick what starts the conversation.
            Flow.Ai watches for it on every post, reel, and story, then sends your DM in seconds.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {triggers.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`p-4 rounded-2xl border-2 transition-all duration-300 text-left ${
                active === i
                  ? "border-[#6C5CE7] bg-[#6C5CE7]/5 shadow-lg shadow-[#6C5CE7]/10"
                  : "border-gray-100 hover:border-gray-200 bg-white"
              }`}
            >
              <div className="text-2xl mb-2">{t.icon}</div>
              <div className="text-sm font-semibold text-[#2D3436]">{t.label}</div>
            </button>
          ))}
        </div>

        {/* Active trigger preview */}
        <div className="max-w-lg mx-auto bg-gray-50 rounded-3xl p-6 sm:p-8">
          <div className="text-xs text-[#B2BEC3] uppercase tracking-wider mb-4 font-semibold">
            {triggers[active].label}
          </div>
          <div className="bg-white rounded-2xl p-4 mb-4 shadow-sm">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white text-xs font-bold">
                {triggers[active].username.charAt(1).toUpperCase()}
              </div>
              <span className="text-sm font-medium text-[#2D3436]">
                {triggers[active].username}
              </span>
            </div>
            <p className="text-sm text-[#636E72] ml-11">{triggers[active].comment}</p>
          </div>
          <div className="bg-[#6C5CE7] rounded-2xl p-4 text-white ml-8">
            <p className="text-sm">{triggers[active].reply}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Creator Niche Carousel ── */
function NicheSection() {
  const niches = [
    "Fitness", "Fashion", "Beauty", "Finance", "Food & Recipes",
    "Travel", "Coaching", "Courses", "Affiliates", "Photography",
    "Real Estate", "Skincare", "Parenting", "Music", "Art & Prints",
    "Local Business", "Restaurants", "Tech & SaaS", "Pets", "Gaming",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3436] mb-4">
          Built for your niche
        </h2>
        <p className="text-lg text-[#636E72] max-w-2xl mx-auto mb-10">
          From 1K to 200K, every size sells with Flow.Ai. Coaches, influencers, brands, and shops use the same simple tool.
        </p>

        {/* Niche tags */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-12">
          {niches.map((n) => (
            <span
              key={n}
              className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-[#636E72] hover:border-[#6C5CE7] hover:text-[#6C5CE7] hover:bg-[#6C5CE7]/5 transition-all cursor-pointer"
            >
              {n}
            </span>
          ))}
        </div>

        {/* Size tiers */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              tier: "Under 5K",
              label: "Just starting",
              desc: "Capture every early lead and build a list from day one.",
              color: "from-[#6C5CE7]/10 to-[#A29BFE]/10",
              border: "border-[#6C5CE7]/20",
            },
            {
              tier: "5K – 50K",
              label: "Growing",
              desc: "Handle the comment spikes you can't answer by hand.",
              color: "from-[#00CEC9]/10 to-[#55EFC4]/10",
              border: "border-[#00CEC9]/20",
            },
            {
              tier: "50K – 200K+",
              label: "Established",
              desc: "Run campaigns, giveaways, and launches across accounts.",
              color: "from-[#FDCB6E]/10 to-[#E17055]/10",
              border: "border-[#FDCB6E]/20",
            },
          ].map((item) => (
            <div
              key={item.tier}
              className={`bg-gradient-to-br ${item.color} border ${item.border} rounded-2xl p-6 text-left card-hover`}
            >
              <div className="text-lg font-bold text-[#2D3436]">{item.tier}</div>
              <div className="text-sm font-semibold text-[#6C5CE7] mt-1">{item.label}</div>
              <p className="text-sm text-[#636E72] mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── 3-Step Setup ── */
function ThreeStepSetup() {
  const steps = [
    {
      num: "1",
      title: "Connect your Instagram",
      desc: "One secure tap with the official Meta login. No passwords shared, fully approved.",
      visual: (
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#833AB4] to-[#FD1D1D] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
            </div>
            <div>
              <div className="text-sm font-semibold">@yourbrand</div>
              <div className="text-xs text-[#636E72]">Instagram Business</div>
            </div>
            <div className="ml-auto px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
              Connected ✓
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "2",
      title: "Pick a trigger, write your DM",
      desc: "Choose a keyword, type your message in your own voice, and drop in your link.",
      visual: (
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#B2BEC3]">When comment is</span>
              <span className="px-3 py-1 bg-[#6C5CE7]/10 text-[#6C5CE7] text-sm font-semibold rounded-full">LINK</span>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-sm text-[#2D3436]">
              Here&apos;s your link 👇
            </div>
          </div>
        </div>
      ),
    },
    {
      num: "3",
      title: "Turn it on",
      desc: "Flip it live and Flow.Ai starts replying on your very next post, day and night.",
      visual: (
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-[#2D3436]">Live · auto-replying</span>
            </div>
            <div className="w-12 h-6 bg-[#6C5CE7] rounded-full relative">
              <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3436] mb-4">
            Up and running today
          </h2>
          <p className="text-lg text-[#636E72]">Three steps. No flowcharts. Most creators are live on their very next post.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-[#6C5CE7] to-[#A29BFE] text-white text-lg font-bold mb-6">
                {s.num}
              </div>
              <h3 className="text-lg font-bold text-[#2D3436] mb-2">{s.title}</h3>
              <p className="text-sm text-[#636E72] mb-6">{s.desc}</p>
              {s.visual}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Why Flow.Ai ── */
function WhySection() {
  const benefits = [
    {
      icon: "📧",
      title: "You own every email",
      desc: "Instagram can change the rules tomorrow. Your list is still yours.",
    },
    {
      icon: "💬",
      title: "It sells in the DM",
      desc: "Right where people are ready to tap, not on a separate page.",
    },
    {
      icon: "⚡",
      title: "You run it, not an agency",
      desc: "No developers, no setup fees, no middleman taking a cut.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3436] mb-4">
            Why Flow.Ai
          </h2>
          <p className="text-lg text-[#636E72] max-w-2xl mx-auto">
            A link in bio just sits there. Flow.Ai goes and gets the click.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 mb-12">
          {benefits.map((b) => (
            <div key={b.title} className="text-center p-6">
              <div className="text-4xl mb-4">{b.icon}</div>
              <h3 className="text-lg font-bold text-[#2D3436] mb-2">{b.title}</h3>
              <p className="text-sm text-[#636E72]">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Comparison */}
        <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left px-6 py-4 text-sm font-semibold text-[#636E72]">What you get</th>
                <th className="text-center px-4 py-4 text-sm font-semibold text-[#6C5CE7]">Flow.Ai</th>
                <th className="text-center px-4 py-4 text-sm font-semibold text-[#B2BEC3]">By hand</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Replies to every comment & DM instantly",
                "Captures the email before sending the link",
                "Works on every post, reel & story",
                "Keeps selling 24/7 while you sleep",
                "Never misses a buyer when a post blows up",
              ].map((feat) => (
                <tr key={feat} className="border-b border-gray-50">
                  <td className="px-6 py-3 text-sm text-[#2D3436]">{feat}</td>
                  <td className="text-center px-4 py-3">
                    <span className="text-[#00B894] text-lg">✓</span>
                  </td>
                  <td className="text-center px-4 py-3">
                    <span className="text-[#FF7675] text-lg">✗</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

/* ── Testimonials ── */
function Testimonials() {
  const reviews = [
    { text: "Massive time saver. Saved me a huge amount of time sending and replying to DMs and helped me build a substantial following much quicker.", name: "Ian W.", location: "IE" },
    { text: "Wow!!! I am so impressed, the best and easiest to use so far.", name: "Chioma O.", location: "NG" },
    { text: "Great platform. I like how they keep things simple and easy to manage. This platform really helped me a lot.", name: "Musashi W.", location: "TN" },
    { text: "It made it so easy for me to reply to everyone in a very quick time.", name: "Sangeeta D.", location: "IN" },
    { text: "I love it. I have more performance with my followers.", name: "Federico S.", location: "AR" },
    { text: "It's a great tool to automate Instagram DMs and comments. I only wish it could support other social media platforms.", name: "Bassel F.", location: "LB" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3436] mb-4">
            Don&apos;t take our word for it
          </h2>
          <p className="text-lg text-[#636E72]">What creators say in their own words</p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <svg key={i} className="w-5 h-5 text-[#FDCB6E]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
              <svg className="w-5 h-5 text-[#FDCB6E]" fill="currentColor" viewBox="0 0 20 20" opacity="0.3"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
            </div>
            <span className="text-sm text-[#636E72] font-medium">Rated 4.3/5 on Trustpilot · 11 reviews</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-gray-50 rounded-2xl p-6 card-hover">
              <div className="flex gap-0.5 mb-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <svg key={i} className="w-4 h-4 text-[#FDCB6E]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <p className="text-sm text-[#2D3436] mb-4 leading-relaxed">&ldquo;{r.text}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#6C5CE7] to-[#A29BFE] flex items-center justify-center text-white text-xs font-bold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-[#2D3436]">{r.name}</div>
                  <div className="text-xs text-[#B2BEC3]">{r.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Analytics Preview ── */
function AnalyticsPreview() {
  const countries = [
    { flag: "🇺🇸", name: "United States", count: 312 },
    { flag: "🇬🇧", name: "United Kingdom", count: 198 },
    { flag: "🇩🇪", name: "Germany", count: 126 },
    { flag: "🇧🇷", name: "Brazil", count: 84 },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3436] mb-4">Know what works</h2>
          <p className="text-lg text-[#636E72]">Stop guessing. See every click, lead, and conversion as it happens.</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-6 sm:p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-semibold text-[#636E72] uppercase tracking-wider">Performance · last 7 days</h3>
          </div>

          {/* Stats cards */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {[
              { value: "3,180", label: "Link clicks", color: "#6C5CE7" },
              { value: "1,284", label: "Leads", color: "#00CEC9" },
              { value: "9.4%", label: "CTR", color: "#00B894" },
            ].map((stat) => (
              <div key={stat.label} className="stat-card bg-gray-50 rounded-xl p-4">
                <div className="text-2xl sm:text-3xl font-bold" style={{ color: stat.color }}>{stat.value}</div>
                <div className="text-xs text-[#636E72] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Chart placeholder */}
          <div className="mb-6">
            <div className="text-sm font-semibold text-[#2D3436] mb-3">Link clicks by country</div>
            <div className="space-y-3">
              {countries.map((c) => (
                <div key={c.name} className="flex items-center gap-3">
                  <span className="text-lg">{c.flag}</span>
                  <span className="text-sm text-[#2D3436] w-32">{c.name}</span>
                  <div className="flex-1 bg-gray-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE]"
                      style={{ width: `${(c.count / 312) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-[#2D3436] w-10 text-right">{c.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Growth Features ── */
function GrowthFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3436] mb-4">Grows with you</h2>
          <p className="text-lg text-[#636E72]">The tools that turn one good automation into a real growth engine.</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8">
          {/* Rewind */}
          <div className="bg-gradient-to-br from-[#6C5CE7]/5 to-[#A29BFE]/5 border border-[#6C5CE7]/10 rounded-2xl p-6 card-hover">
            <div className="text-3xl mb-4">↺</div>
            <h3 className="text-lg font-bold text-[#2D3436] mb-2">Rewind</h3>
            <p className="text-sm text-[#636E72] mb-4">Go back and DM everyone who already commented on your recent posts. New leads from content you already shared.</p>
            <div className="bg-white rounded-xl p-3 border border-gray-100">
              <div className="text-xs text-[#636E72]">Re-DM past comments</div>
              <div className="text-sm font-semibold text-[#00B894]">+128 leads</div>
            </div>
          </div>

          {/* Workspaces */}
          <div className="bg-gradient-to-br from-[#00CEC9]/5 to-[#55EFC4]/5 border border-[#00CEC9]/10 rounded-2xl p-6 card-hover">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-lg font-bold text-[#2D3436] mb-2">Workspaces</h3>
            <p className="text-sm text-[#636E72] mb-4">For agencies & multi-brand creators. Run one account or twenty from a single login.</p>
            <div className="space-y-2">
              {[
                { name: "Fashion brand", automations: 3 },
                { name: "Coaching biz", automations: 2 },
                { name: "Client account", automations: 5 },
              ].map((w) => (
                <div key={w.name} className="bg-white rounded-xl p-3 border border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-xs font-medium text-[#2D3436]">{w.name}</span>
                  </div>
                  <span className="text-xs text-[#636E72]">{w.automations} automations</span>
                </div>
              ))}
            </div>
          </div>

          {/* Follow Gate */}
          <div className="bg-gradient-to-br from-[#FDCB6E]/5 to-[#E17055]/5 border border-[#FDCB6E]/10 rounded-2xl p-6 card-hover">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-lg font-bold text-[#2D3436] mb-2">Follow Gate</h3>
            <p className="text-sm text-[#636E72] mb-4">Require a follow before the link goes out. Every commenter becomes a follower.</p>
            <div className="bg-white rounded-xl p-3 border border-gray-100">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs text-[#636E72]">Follow to get the link</span>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-4 py-1.5 bg-[#6C5CE7] text-white text-xs font-semibold rounded-lg">Follow</button>
                <span className="text-xs text-[#636E72]">Following · link sent 👇</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ── */
function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const faqs = [
    {
      q: "What is Flow.Ai and how does it work?",
      a: "Flow.Ai is an Instagram DM automation platform. You set a trigger keyword (like \"LINK\"), write a message, and Flow.Ai sends it as a DM whenever someone comments that keyword on your posts, Reels, or Stories. Setup takes under 2 minutes. Free plan includes 500 DMs per month.",
    },
    {
      q: "Is Flow.Ai safe for my Instagram account?",
      a: "Yes. Flow.Ai is a Meta Tech Provider using Instagram's official Graph API. There are no bots, browser extensions, or password sharing. Over 20,000 creators use Flow.Ai without account issues.",
    },
    {
      q: "How much does Flow.Ai cost?",
      a: "Free: 500 DMs/month. Pro ($15/month): 5,000 DMs, email collection, and link tracking. Growth ($30/month): 10,000 DMs and 5 workspaces for agencies.",
    },
    {
      q: "What is the difference between Flow.Ai and ManyChat?",
      a: "Flow.Ai includes unlimited automations on every plan, including Free. Pricing is flat monthly with no per-contact fees. Setup takes under 2 minutes. Built for solo creators and small businesses.",
    },
    {
      q: "Do I need a business or creator Instagram account?",
      a: "Yes. Instagram DM automation requires a Business or Creator account due to Meta API restrictions. Switching from a personal account is free and takes about 2 minutes.",
    },
    {
      q: "Can I collect emails through Instagram DMs?",
      a: "Yes. Flow.Ai can require an email before delivering your link. Collected emails are saved in the built-in Contact CRM and can be exported as CSV to Mailchimp, Kit, Flodesk, or any email platform.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3436] text-center mb-12">
          Instagram DM automation FAQ
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="text-sm font-semibold text-[#2D3436] pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-[#636E72] flex-shrink-0 transition-transform ${openIdx === i ? "rotate-180" : ""}`}
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIdx === i && (
                <div className="px-6 pb-5 text-sm text-[#636E72] leading-relaxed animate-fade-in">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Final CTA ── */
function FinalCTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d4e]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          Get started with Flow.Ai today
        </h2>
        <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
          Join 20,000+ creators and brands turning Instagram comments into conversations.
        </p>
        <Link
          href="/signup"
          className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-[#1a1a2e] bg-white rounded-full hover:shadow-xl hover:shadow-white/20 transition-all duration-300 hover:scale-105"
        >
          Get Started Free
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </Link>
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-400">
          <span>3,180 link clicks</span>
          <span className="w-1 h-1 bg-gray-500 rounded-full" />
          <span>1,284 leads</span>
          <span className="w-1 h-1 bg-gray-500 rounded-full" />
          <span>9.4% CTR</span>
        </div>
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════
   HOMEPAGE
   ══════════════════════════════════════════ */
export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#F8F9FA] to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#6C5CE7]/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#00CEC9]/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#6C5CE7]/10 rounded-full text-sm font-medium text-[#6C5CE7] mb-6">
              <span className="w-2 h-2 bg-[#00B894] rounded-full animate-pulse" />
              Meta Tech Provider
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#2D3436] leading-tight max-w-4xl mx-auto">
              Instagram DM automation
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mt-4 max-w-4xl mx-auto">
              <span className="gradient-text">More clicks, leads &amp; sales</span>
            </h2>
            <p className="mt-6 text-lg text-[#636E72] max-w-2xl mx-auto leading-relaxed">
              Instagram DM automation that turns comments, story replies, and DMs into instant links, captured emails, and sales, on autopilot. Set it up once, it runs on every post, reel or story.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE] rounded-full hover:shadow-xl hover:shadow-[#6C5CE7]/25 transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Get Started Free
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/how-it-works"
                className="px-8 py-4 text-base font-semibold text-[#636E72] bg-white border border-gray-200 rounded-full hover:border-[#6C5CE7] hover:text-[#6C5CE7] transition-all duration-300 flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                Watch it work
              </Link>
            </div>
          </div>

          <StatsBar />

          {/* Phone mockup */}
          <div className="mt-12">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ── The Opportunity ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#2D3436] mb-6">
              The opportunity
            </h2>
            <p className="text-lg text-[#636E72] leading-relaxed mb-8">
              Your Instagram is already full of buyers. You&apos;re just not catching them. Every comment, story reply, and DM is someone raising their hand. Miss them and the moment is gone. Flow.Ai answers all of them in seconds.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["Comment to DM", "Collect leads", "Send links", "Grow your list", "Run giveaways", "Share codes", "Book calls", "Save emails"].map((tag) => (
                <span key={tag} className="px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-sm font-medium text-[#2D3436]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TriggerTypes />
      <NicheSection />
      <ThreeStepSetup />
      <WhySection />
      <Testimonials />
      <AnalyticsPreview />
      <GrowthFeatures />
      <FAQ />
      <FinalCTA />
    </>
  );
}
