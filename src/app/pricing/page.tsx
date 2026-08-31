"use client";

import Link from "next/link";
import { useState } from "react";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "/mo",
    desc: "Test the full automation flow — no card, no risk.",
    badge: null,
    annualPrice: null,
    cta: "Start Free",
    ctaStyle: "border-2 border-gray-200 text-[#2D3436] hover:border-[#6C5CE7] hover:text-[#6C5CE7]",
    features: [
      "1 Instagram account",
      "500 automated DMs/month",
      "Comment-to-DM automation",
      "Story reply automation",
      "Unlimited keyword triggers",
      "Done-for-you automation templates",
    ],
  },
  {
    name: "Pro",
    price: "$12",
    originalPrice: "$15",
    period: "/mo",
    desc: "For creators turning their audience into revenue.",
    badge: "Most Popular",
    annualPrice: "Billed annually ($144/year)",
    cta: "Start 14-day Free Trial",
    ctaStyle: "bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE] text-white hover:shadow-xl hover:shadow-[#6C5CE7]/25",
    features: [
      "Everything in Free, plus:",
      "2 Instagram accounts",
      "5,000 DMs/workspace/month",
      "Email gate — collect emails before sending links",
      "Follow gate — auto-grow followers with every DM",
      "Link click tracking",
      "Export contacts as CSV",
      "Geo analytics — see where your audience clicks",
      "One-time DM top-up packs",
    ],
  },
  {
    name: "Growth",
    price: "$24",
    originalPrice: "$30",
    period: "/mo",
    desc: "For agencies and creators managing multiple accounts.",
    badge: "Best Value",
    annualPrice: "Billed annually ($288/year)",
    cta: "Start 14-day Free Trial",
    ctaStyle: "bg-gradient-to-r from-[#00CEC9] to-[#55EFC4] text-[#1a1a2e] hover:shadow-xl hover:shadow-[#00CEC9]/25",
    features: [
      "Everything in Pro, plus:",
      "5 Instagram accounts",
      "10,000 DMs/workspace/month",
      "5 team seats per workspace",
      "Priority support (email)",
      "One-time DM top-up packs",
    ],
  },
];

const comparisonFeatures = [
  { name: "Workspaces (Instagram accounts)", free: "1", pro: "2", growth: "5" },
  { name: "DMs per month", free: "500", pro: "5,000 per workspace", growth: "10,000 per workspace" },
  { name: "Active automations", free: "Unlimited", pro: "Unlimited", growth: "Unlimited" },
  { name: "Comment-to-DM automation", free: true, pro: true, growth: true },
  { name: "Story reply automation", free: true, pro: true, growth: true },
  { name: "Keyword trigger DMs", free: true, pro: true, growth: true },
  { name: "DM preview", free: true, pro: true, growth: true },
  { name: "Email collection in DMs", free: false, pro: true, growth: true },
  { name: "Link click tracking", free: false, pro: true, growth: true },
  { name: "Export contacts (CSV)", free: false, pro: true, growth: true },
  { name: "DM top-up packs", free: "—", pro: true, growth: true },
  { name: "Support", free: "Email", pro: "Email", growth: "Priority email" },
];

const reviews = [
  { text: "Massive time saver. Saved me a huge amount of time sending and replying to DMs.", name: "Ian W.", location: "IE" },
  { text: "Wow!!! I am so impressed, the best and easiest to use so far.", name: "Chioma O.", location: "NG" },
  { text: "Great platform. I like how they keep things simple and easy to manage.", name: "Musashi W.", location: "TN" },
  { text: "It made it so easy for me to reply to everyone in a very quick time.", name: "Sangeeta D.", location: "IN" },
];

const pricingFaqs = [
  { q: "How does the 14-day free trial work?", a: "Every paid plan starts with a 14-day free trial. A payment method is required, nothing is charged during the trial. Cancel before it ends and pay nothing." },
  { q: "How much does Flow.Ai cost?", a: "Free ($0/mo), Pro ($15/mo or $12/mo annual), and Growth ($30/mo or $24/mo annual). Flat-rate with no per-contact fees." },
  { q: "What's included in the free plan?", a: "1 Instagram account, 500 automated DMs per month, comment-to-DM triggers, story reply automation, unlimited keyword triggers, and ready-made templates." },
  { q: "What's the difference between Pro and Growth?", a: "Pro gives you 2 accounts and 5,000 DMs. Growth scales to 5 accounts, 10,000 DMs, 5 team seats, and priority support." },
  { q: "What happens when I hit my DM limit?", a: "Automations pause until the next billing cycle. You receive a warning before reaching the cap. Automations resume automatically at cycle reset." },
  { q: "Can I cancel or change plans anytime?", a: "Yes. Downgrade or cancel from your dashboard with no contracts and no penalties." },
];

export default function PricingPage() {
  const [billing, setBilling] = useState<"monthly" | "annual">("annual");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2D3436] mb-6">
            One flat price. <span className="gradient-text">Unlimited automations.</span>
          </h1>
          <p className="text-lg text-[#636E72] max-w-2xl mx-auto mb-8">
            Start free. Every paid plan opens with 14 free days, so you can test everything before you pay.
          </p>
          {/* Billing toggle */}
          <div className="inline-flex items-center gap-3 p-1 bg-gray-100 rounded-full">
            <button
              onClick={() => setBilling("monthly")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                billing === "monthly" ? "bg-white shadow text-[#2D3436]" : "text-[#636E72]"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBilling("annual")}
              className={`px-5 py-2 text-sm font-medium rounded-full transition-all ${
                billing === "annual" ? "bg-white shadow text-[#2D3436]" : "text-[#636E72]"
              }`}
            >
              Annual <span className="text-[#00B894] text-xs font-semibold ml-1">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 ${
                  plan.badge === "Most Popular"
                    ? "bg-white border-2 border-[#6C5CE7] shadow-xl shadow-[#6C5CE7]/10"
                    : "bg-gray-50 border border-gray-100"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE] text-white text-xs font-semibold rounded-full">
                    {plan.badge}
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-lg font-bold text-[#2D3436] mb-2">{plan.name}</h3>
                  <p className="text-sm text-[#636E72]">{plan.desc}</p>
                </div>
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-[#2D3436]">
                      {billing === "annual" && plan.annualPrice ? plan.price : (plan.originalPrice || plan.price)}
                    </span>
                    <span className="text-sm text-[#636E72]">{plan.period}</span>
                  </div>
                  {billing === "annual" && plan.annualPrice && (
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-sm text-[#B2BEC3] line-through">{plan.originalPrice}{plan.period}</span>
                      <span className="text-sm text-[#00B894] font-semibold">Save 2 months</span>
                    </div>
                  )}
                  {plan.annualPrice && billing === "annual" && (
                    <p className="text-xs text-[#636E72] mt-1">{plan.annualPrice}</p>
                  )}
                </div>
                <Link
                  href="/signup"
                  className={`block w-full py-3 text-center text-sm font-semibold rounded-full transition-all duration-300 hover:scale-105 ${plan.ctaStyle}`}
                >
                  {plan.cta}
                </Link>
                <p className="text-xs text-[#B2BEC3] text-center mt-2">
                  {plan.name !== "Free" ? "14-day free trial · Cancel anytime" : ""}
                </p>
                <div className="mt-8 space-y-3">
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-start gap-3">
                      {i === 0 && plan.name !== "Free" ? (
                        <span className="text-[#6C5CE7] font-semibold text-sm mt-0.5">{f}</span>
                      ) : (
                        <>
                          <svg className="w-5 h-5 text-[#00B894] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                          </svg>
                          <span className="text-sm text-[#2D3436]">{f}</span>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2D3436] text-center mb-8">Compare plans</h2>
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="text-left px-6 py-4 text-sm font-semibold text-[#636E72]">Feature</th>
                  <th className="text-center px-4 py-4 text-sm font-semibold text-[#2D3436]">Free</th>
                  <th className="text-center px-4 py-4 text-sm font-semibold text-[#6C5CE7]">Pro</th>
                  <th className="text-center px-4 py-4 text-sm font-semibold text-[#00CEC9]">Growth</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((feat, i) => (
                  <tr key={i} className="border-b border-gray-50 last:border-0">
                    <td className="px-6 py-3 text-sm text-[#2D3436]">{feat.name}</td>
                    <td className="text-center px-4 py-3 text-sm">
                      {typeof feat.free === "boolean" ? (
                        feat.free ? <span className="text-[#00B894] text-lg">✓</span> : <span className="text-[#B2BEC3]">—</span>
                      ) : (
                        <span className="text-sm text-[#636E72]">{feat.free}</span>
                      )}
                    </td>
                    <td className="text-center px-4 py-3 text-sm">
                      {typeof feat.pro === "boolean" ? (
                        feat.pro ? <span className="text-[#00B894] text-lg">✓</span> : <span className="text-[#B2BEC3]">—</span>
                      ) : (
                        <span className="text-sm text-[#2D3436] font-medium">{feat.pro}</span>
                      )}
                    </td>
                    <td className="text-center px-4 py-3 text-sm">
                      {typeof feat.growth === "boolean" ? (
                        feat.growth ? <span className="text-[#00B894] text-lg">✓</span> : <span className="text-[#B2BEC3]">—</span>
                      ) : (
                        <span className="text-sm text-[#2D3436] font-medium">{feat.growth}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2D3436] mb-4">What creators say</h2>
            <div className="flex items-center justify-center gap-2">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <svg key={i} className="w-5 h-5 text-[#FDCB6E]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <span className="text-sm text-[#636E72]">4.3/5 on Trustpilot</span>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((r) => (
              <div key={r.name} className="bg-gray-50 rounded-2xl p-6 card-hover">
                <div className="flex gap-0.5 mb-3">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-[#FDCB6E]" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-sm text-[#2D3436] mb-4">&ldquo;{r.text}&rdquo;</p>
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#6C5CE7] to-[#A29BFE] flex items-center justify-center text-white text-xs font-bold">{r.name.charAt(0)}</div>
                  <div>
                    <div className="text-xs font-semibold text-[#2D3436]">{r.name}</div>
                    <div className="text-xs text-[#B2BEC3]">{r.location}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#2D3436] text-center mb-12">Pricing FAQ</h2>
          <div className="space-y-3">
            {pricingFaqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-sm font-semibold text-[#2D3436] pr-4">{faq.q}</span>
                  <svg className={`w-5 h-5 text-[#636E72] flex-shrink-0 transition-transform ${openFaq === i ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5 text-sm text-[#636E72] leading-relaxed animate-fade-in">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d4e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Get started with Flow.Ai today</h2>
          <p className="text-lg text-gray-300 mb-8">Join 20,000+ creators and brands turning Instagram comments into conversations.</p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-[#1a1a2e] bg-white rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get Started Free
          </Link>
        </div>
      </section>
    </>
  );
}
