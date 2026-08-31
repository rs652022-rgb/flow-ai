"use client";

import Link from "next/link";
import { useState } from "react";

const categories = [
  { id: "email", name: "Email Marketing", icon: "📧" },
  { id: "crm", name: "CRM & Contacts", icon: "👥" },
  { id: "automation", name: "Workflow Automation", icon: "⚡" },
  { id: "analytics", name: "Analytics", icon: "📊" },
  { id: "webhook", name: "Webhooks & API", icon: "🔗" },
];

const integrations = [
  {
    name: "Mailchimp",
    category: "email",
    desc: "Sync collected emails directly to your Mailchimp audience. Build segments from Instagram engagement.",
    icon: "🐵",
    color: "bg-[#FFE01B]",
    status: "connected",
    features: ["Auto-sync emails", "Tag contacts by automation", "Create segments"],
  },
  {
    name: "Kit (ConvertKit)",
    category: "email",
    desc: "Add new leads to your Kit sequences. Trigger automations based on Instagram engagement.",
    icon: "✉️",
    color: "bg-[#FB6970]",
    status: "available",
    features: ["Add to sequences", "Apply tags", "Trigger broadcasts"],
  },
  {
    name: "Flodesk",
    category: "email",
    desc: "Grow your Flodesk list from Instagram. Every email collected goes straight to your segments.",
    icon: "💌",
    color: "bg-[#1A1A2E]",
    status: "available",
    features: ["Auto-add to segments", "Trigger workflows", "Track engagement"],
  },
  {
    name: "Google Sheets",
    category: "crm",
    desc: "Export contacts to Google Sheets in real-time. Build custom reports and share with your team.",
    icon: "📊",
    color: "bg-[#0F9D58]",
    status: "connected",
    features: ["Real-time sync", "Custom columns", "Auto-export"],
  },
  {
    name: "HubSpot",
    category: "crm",
    desc: "Create contacts and deals from Instagram DMs. Track the full customer journey.",
    icon: "🔶",
    color: "bg-[#FF7A59]",
    status: "available",
    features: ["Create contacts", "Add to pipelines", "Track lifecycle"],
  },
  {
    name: "Notion",
    category: "crm",
    desc: "Add leads to your Notion database. Perfect for content creators tracking partnerships.",
    icon: "📝",
    color: "bg-[#000000]",
    status: "available",
    features: ["Database entries", "Custom fields", "Views"],
  },
  {
    name: "Zapier",
    category: "automation",
    desc: "Connect Flow.Ai to 5,000+ apps. Build custom workflows triggered by DM events.",
    icon: "⚡",
    color: "bg-[#FF4A00]",
    status: "available",
    features: ["5,000+ app connections", "Multi-step zaps", "Conditional logic"],
  },
  {
    name: "Make (Integromat)",
    category: "automation",
    desc: "Build visual automations connecting Flow.Ai to your entire tech stack.",
    icon: "🟣",
    color: "bg-[#6D00CC]",
    status: "available",
    features: ["Visual builder", "Complex scenarios", "Error handling"],
  },
  {
    name: "Google Analytics",
    category: "analytics",
    desc: "Track Instagram DM traffic in GA4. Measure the full funnel from comment to conversion.",
    icon: "📈",
    color: "bg-[#F9AB00]",
    status: "available",
    features: ["UTM tracking", "Conversion events", "Attribution"],
  },
  {
    name: "Meta Pixel",
    category: "analytics",
    desc: "Fire Meta Pixel events when DMs are sent. Optimize your ad campaigns with DM data.",
    icon: "🔷",
    color: "bg-[#0668E1]",
    status: "available",
    features: ["Custom events", "Conversion API", "Retargeting"],
  },
  {
    name: "Webhooks",
    category: "webhook",
    desc: "Get real-time notifications for every DM event. Build custom integrations with any system.",
    icon: "🪝",
    color: "bg-[#6366F1]",
    status: "available",
    features: ["Real-time events", "Custom endpoints", "JSON payloads"],
  },
  {
    name: "REST API",
    category: "webhook",
    desc: "Full API access to manage automations, contacts, and analytics programmatically.",
    icon: "🔧",
    color: "bg-[#6B7280]",
    status: "available",
    features: ["Full CRUD", "Rate limiting", "API keys"],
  },
];

const apiFeatures = [
  { title: "Manage Automations", desc: "Create, update, pause, and delete automations via API", method: "POST /api/automations" },
  { title: "Track Contacts", desc: "Query and export collected contacts with filtering", method: "GET /api/contacts" },
  { title: "Analytics Data", desc: "Pull real-time analytics for clicks, leads, and conversions", method: "GET /api/analytics" },
  { title: "Webhook Events", desc: "Receive real-time events when DMs are sent or links clicked", method: "POST /webhooks" },
];

export default function IntegrationsPage() {
  const [activeCategory, setActiveCategory] = useState("email");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = integrations.filter((i) => {
    const matchesCategory = i.category === activeCategory;
    const matchesSearch = i.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && (searchQuery === "" || matchesSearch);
  });

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#F8F9FA] to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#2D3436] mb-6">
            Connect your <span className="gradient-text">entire stack</span>
          </h1>
          <p className="text-lg text-[#636E72] max-w-2xl mx-auto mb-8">
            Sync collected emails to your favorite tools. Build custom workflows with Zapier and webhooks. Export data to sheets and CRMs.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-4 text-base font-semibold text-white bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE] rounded-full hover:shadow-xl hover:shadow-[#6C5CE7]/25 transition-all duration-300 hover:scale-105"
          >
            Get Started Free
          </Link>
        </div>
      </section>

      {/* Category tabs + Search */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex gap-2 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                    activeCategory === cat.id
                      ? "bg-[#6C5CE7] text-white shadow-lg shadow-[#6C5CE7]/25"
                      : "bg-gray-100 text-[#636E72] hover:bg-gray-200"
                  }`}
                >
                  <span>{cat.icon}</span>
                  {cat.name}
                </button>
              ))}
            </div>
            <div className="relative sm:ml-auto">
              <input
                type="text"
                placeholder="Search integrations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-full text-sm w-64 focus:outline-none focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/20 transition-all"
              />
              <svg className="absolute left-3.5 top-3 w-4 h-4 text-[#B2BEC3]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Grid */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((intg) => (
              <div key={intg.name} className="bg-gray-50 rounded-2xl p-6 border border-gray-100 card-hover hover:border-[#6C5CE7]">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 ${intg.color} rounded-xl flex items-center justify-center text-2xl`}>
                      {intg.icon}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-[#2D3436]">{intg.name}</h3>
                      <span className="text-xs text-[#B2BEC3] capitalize">{intg.category}</span>
                    </div>
                  </div>
                  {intg.status === "connected" && (
                    <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Connected</span>
                  )}
                </div>
                <p className="text-sm text-[#636E72] mb-4 leading-relaxed">{intg.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {intg.features.map((f) => (
                    <span key={f} className="px-2 py-0.5 bg-white border border-gray-200 rounded text-xs text-[#636E72]">
                      {f}
                    </span>
                  ))}
                </div>
                <button className={`w-full py-2.5 text-sm font-semibold rounded-xl transition-all ${
                  intg.status === "connected"
                    ? "bg-green-100 text-green-700"
                    : "bg-[#6C5CE7]/10 text-[#6C5CE7] hover:bg-[#6C5CE7] hover:text-white"
                }`}>
                  {intg.status === "connected" ? "✓ Connected" : "Connect"}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#2D3436] mb-4">Developer API</h2>
            <p className="text-lg text-[#636E72]">Build custom integrations with our REST API</p>
          </div>

          {/* Code example */}
          <div className="bg-[#1a1a2e] rounded-2xl p-6 sm:p-8 mb-8 overflow-x-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
              <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              <span className="ml-4 text-xs text-gray-500">api-example.sh</span>
            </div>
            <pre className="text-sm text-gray-300 font-mono leading-relaxed">
              <code>{`# Create an automation via the Flow.Ai API
curl -X POST https://api.flow.ai/v1/automations \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "trigger": "comment",
    "keyword": "LINK",
    "message": "Hey! Here's the link 👇",
    "link": "https://yoursite.com",
    "email_gate": false,
    "follow_gate": true
  }'

# Response
{
  "id": "auto_abc123",
  "status": "active",
  "created_at": "2025-01-15T10:00:00Z",
  "trigger": "comment",
  "keyword": "LINK"
}`}</code>
            </pre>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {apiFeatures.map((f) => (
              <div key={f.title} className="bg-white rounded-2xl p-5 border border-gray-100">
                <h3 className="text-sm font-bold text-[#2D3436] mb-1">{f.title}</h3>
                <p className="text-xs text-[#636E72] mb-3">{f.desc}</p>
                <code className="px-3 py-1 bg-gray-100 rounded text-xs text-[#6C5CE7] font-mono">{f.method}</code>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1a1a2e] to-[#2d2d4e]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Connect Flow.Ai to your workflow</h2>
          <p className="text-lg text-gray-300 mb-8">Start syncing your Instagram leads to the tools you already use.</p>
          <Link href="/signup" className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-[#1a1a2e] bg-white rounded-full hover:shadow-xl transition-all duration-300 hover:scale-105">
            Get Started Free
          </Link>
        </div>
      </section>
    </>
  );
}
