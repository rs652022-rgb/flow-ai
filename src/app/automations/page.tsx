"use client";

import Link from "next/link";
import { useState } from "react";

const templates = [
  { name: "Comment to DM — Link", trigger: "Comment", keyword: "LINK", message: "Hey! Here's the link you asked for 👇", icon: "🔗", popular: true },
  { name: "Comment to DM — Guide", trigger: "Comment", keyword: "GUIDE", message: "Here's your guide 👇", icon: "📖", popular: true },
  { name: "Comment to DM — Price", trigger: "Comment", keyword: "PRICE", message: "Sent you the details 👇", icon: "💰", popular: false },
  { name: "Story Reply — Freebie", trigger: "Story Reply", keyword: "Reply", message: "Thanks for the reply! Here's your freebie 👇", icon: "🎁", popular: true },
  { name: "Keyword DM — Signup", trigger: "DM Keyword", keyword: "SIGNUP", message: "Welcome! Here's the signup link 👇", icon: "✍️", popular: false },
  { name: "Comment to DM — Giveaway", trigger: "Comment", keyword: "ENTER", message: "You're entered! Here are the rules 👇", icon: "🎉", popular: false },
];

const existingAutomations = [
  { name: "Comment to DM — LINK", status: "active", trigger: "Comment", keyword: "LINK", dms: 1842, created: "Jan 15, 2025" },
  { name: "Comment to DM — GUIDE", status: "active", trigger: "Comment", keyword: "GUIDE", dms: 956, created: "Feb 3, 2025" },
  { name: "Story Reply — Freebie", status: "active", trigger: "Story", keyword: "Reply", dms: 634, created: "Mar 12, 2025" },
  { name: "Keyword DM — PRICE", status: "paused", trigger: "DM", keyword: "PRICE", dms: 412, created: "Apr 1, 2025" },
  { name: "Comment to DM — SIGNUP", status: "active", trigger: "Comment", keyword: "SIGNUP", dms: 336, created: "May 8, 2025" },
];

export default function AutomationsPage() {
  const [view, setView] = useState<"list" | "create">("list");
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    keyword: "",
    message: "",
    emailGate: false,
    followGate: false,
    linkUrl: "",
  });

  const handleTemplateSelect = (idx: number) => {
    setSelectedTemplate(idx);
    setFormData({
      keyword: templates[idx].keyword,
      message: templates[idx].message,
      emailGate: false,
      followGate: false,
      linkUrl: "",
    });
    setView("create");
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#2D3436]">Automations</h1>
            <p className="text-sm text-[#636E72] mt-1">Create and manage your Instagram DM automations</p>
          </div>
          <button
            onClick={() => setView(view === "list" ? "create" : "list")}
            className="px-4 py-2 text-sm font-semibold text-white bg-[#6C5CE7] rounded-lg hover:bg-[#5A4BD1] transition-colors"
          >
            {view === "list" ? "+ New Automation" : "← Back to List"}
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {view === "list" ? (
          <>
            {/* Existing Automations */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-8">
              <div className="px-6 py-4 border-b border-gray-100">
                <h3 className="text-sm font-semibold text-[#2D3436]">Your Automations ({existingAutomations.length})</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-50">
                      <th className="text-left px-6 py-3 text-xs font-semibold text-[#636E72] uppercase">Name</th>
                      <th className="text-left px-6 py-3 text-xs font-semibold text-[#636E72] uppercase">Status</th>
                      <th className="text-left px-6 py-3 text-xs font-semibold text-[#636E72] uppercase">Trigger</th>
                      <th className="text-right px-6 py-3 text-xs font-semibold text-[#636E72] uppercase">DMs Sent</th>
                      <th className="text-left px-6 py-3 text-xs font-semibold text-[#636E72] uppercase">Created</th>
                      <th className="text-right px-6 py-3 text-xs font-semibold text-[#636E72] uppercase">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {existingAutomations.map((a) => (
                      <tr key={a.name} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4 text-sm font-medium text-[#2D3436]">{a.name}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                            a.status === "active" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                          }`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${a.status === "active" ? "bg-green-500" : "bg-yellow-500"}`} />
                            {a.status === "active" ? "Active" : "Paused"}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-[#636E72]">{a.trigger} · {a.keyword}</td>
                        <td className="px-6 py-4 text-sm font-medium text-[#2D3436] text-right">{a.dms.toLocaleString()}</td>
                        <td className="px-6 py-4 text-sm text-[#636E72]">{a.created}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="px-3 py-1 text-xs font-medium text-[#636E72] hover:text-[#2D3436] bg-gray-100 rounded-md">
                              Edit
                            </button>
                            <button className={`px-3 py-1 text-xs font-medium rounded-md ${
                              a.status === "active"
                                ? "text-yellow-700 bg-yellow-100 hover:bg-yellow-200"
                                : "text-green-700 bg-green-100 hover:bg-green-200"
                            }`}>
                              {a.status === "active" ? "Pause" : "Activate"}
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Templates */}
            <div>
              <h2 className="text-lg font-bold text-[#2D3436] mb-4">Start from a template</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {templates.map((t, i) => (
                  <div
                    key={i}
                    onClick={() => handleTemplateSelect(i)}
                    className="bg-white rounded-2xl p-5 border border-gray-100 cursor-pointer card-hover hover:border-[#6C5CE7]"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="text-2xl">{t.icon}</div>
                      {t.popular && (
                        <span className="px-2 py-0.5 bg-[#6C5CE7]/10 text-[#6C5CE7] text-xs font-semibold rounded-full">Popular</span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-[#2D3436] mb-1">{t.name}</h3>
                    <p className="text-xs text-[#636E72] mb-3 line-clamp-2">{t.message}</p>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-gray-100 text-xs text-[#636E72] rounded">{t.trigger}</span>
                      <span className="px-2 py-0.5 bg-gray-100 text-xs text-[#636E72] rounded">"{t.keyword}"</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : (
          /* Create Automation View */
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-8">
              <h2 className="text-xl font-bold text-[#2D3436] mb-6">Create Automation</h2>

              {/* Step 1: Trigger */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#6C5CE7] text-white text-sm font-bold flex items-center justify-center">1</div>
                  <h3 className="text-base font-bold text-[#2D3436]">Choose your trigger</h3>
                </div>
                <div className="grid sm:grid-cols-3 gap-3 ml-11">
                  {[
                    { label: "Comment keyword", icon: "💬", desc: "When someone comments a keyword" },
                    { label: "Story reply", icon: "📱", desc: "When someone replies to your story" },
                    { label: "DM keyword", icon: "🔑", desc: "When someone DMs a keyword" },
                  ].map((t) => (
                    <button key={t.label} className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-left hover:border-[#6C5CE7] transition-all">
                      <div className="text-xl mb-2">{t.icon}</div>
                      <div className="text-sm font-semibold text-[#2D3436]">{t.label}</div>
                      <div className="text-xs text-[#636E72] mt-1">{t.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Keyword */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#6C5CE7] text-white text-sm font-bold flex items-center justify-center">2</div>
                  <h3 className="text-base font-bold text-[#2D3436]">Set your keyword</h3>
                </div>
                <div className="ml-11">
                  <input
                    type="text"
                    value={formData.keyword}
                    onChange={(e) => setFormData({ ...formData, keyword: e.target.value.toUpperCase() })}
                    placeholder="e.g. LINK, GUIDE, PRICE"
                    className="w-full max-w-xs px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-semibold text-[#2D3436] focus:outline-none focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/20 transition-all"
                  />
                </div>
              </div>

              {/* Step 3: Message */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#6C5CE7] text-white text-sm font-bold flex items-center justify-center">3</div>
                  <h3 className="text-base font-bold text-[#2D3436]">Write your DM message</h3>
                </div>
                <div className="ml-11">
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Hey! Here's the link you asked for 👇"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#2D3436] focus:outline-none focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/20 transition-all resize-none"
                  />
                  <input
                    type="url"
                    value={formData.linkUrl}
                    onChange={(e) => setFormData({ ...formData, linkUrl: e.target.value })}
                    placeholder="https://yoursite.com/link"
                    className="w-full mt-3 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm text-[#2D3436] focus:outline-none focus:border-[#6C5CE7] focus:ring-2 focus:ring-[#6C5CE7]/20 transition-all"
                  />
                </div>
              </div>

              {/* Step 4: Options */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-[#6C5CE7] text-white text-sm font-bold flex items-center justify-center">4</div>
                  <h3 className="text-base font-bold text-[#2D3436]">Advanced options</h3>
                </div>
                <div className="ml-11 space-y-3">
                  <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 cursor-pointer hover:border-[#6C5CE7] transition-all">
                    <input
                      type="checkbox"
                      checked={formData.emailGate}
                      onChange={(e) => setFormData({ ...formData, emailGate: e.target.checked })}
                      className="w-4 h-4 text-[#6C5CE7] rounded"
                    />
                    <div>
                      <div className="text-sm font-semibold text-[#2D3436]">Email Gate</div>
                      <div className="text-xs text-[#636E72]">Require an email before sending the link</div>
                    </div>
                    <span className="ml-auto px-2 py-0.5 bg-[#6C5CE7]/10 text-[#6C5CE7] text-xs font-semibold rounded-full">Pro</span>
                  </label>
                  <label className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl border border-gray-200 cursor-pointer hover:border-[#6C5CE7] transition-all">
                    <input
                      type="checkbox"
                      checked={formData.followGate}
                      onChange={(e) => setFormData({ ...formData, followGate: e.target.checked })}
                      className="w-4 h-4 text-[#6C5CE7] rounded"
                    />
                    <div>
                      <div className="text-sm font-semibold text-[#2D3436]">Follow Gate</div>
                      <div className="text-xs text-[#636E72]">Require a follow before sending the link</div>
                    </div>
                    <span className="ml-auto px-2 py-0.5 bg-[#6C5CE7]/10 text-[#6C5CE7] text-xs font-semibold rounded-full">Pro</span>
                  </label>
                </div>
              </div>

              {/* Preview */}
              <div className="bg-gray-50 rounded-2xl p-6 mb-8">
                <h3 className="text-sm font-semibold text-[#2D3436] mb-4">Preview</h3>
                <div className="max-w-xs mx-auto bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                  <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#6C5CE7] to-[#A29BFE] flex items-center justify-center text-white text-xs font-bold">Y</div>
                    <span className="text-xs font-semibold text-[#2D3436]">yourbrand</span>
                  </div>
                  <div className="px-4 py-4 space-y-3">
                    <div className="bg-gray-100 rounded-2xl rounded-bl-sm px-3 py-2 text-xs text-[#2D3436] max-w-[85%]">
                      {formData.keyword || "LINK"} please! 🔗
                    </div>
                    <div className="bg-[#6C5CE7] text-white rounded-2xl rounded-br-sm px-3 py-2 text-xs max-w-[85%]">
                      {formData.message || "Here's your link 👇"}
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <button className="px-8 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE] rounded-full hover:shadow-lg hover:shadow-[#6C5CE7]/25 transition-all">
                  Save & Activate
                </button>
                <button className="px-6 py-3 text-sm font-medium text-[#636E72] bg-gray-100 rounded-full hover:bg-gray-200 transition-colors">
                  Save as Draft
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
