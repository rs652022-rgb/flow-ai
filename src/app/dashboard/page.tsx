"use client";

import Link from "next/link";
import { useState } from "react";

const automations = [
  { name: "Comment to DM — LINK", status: "active", trigger: "Comment", keyword: "LINK", dms: 1842, clicks: 923, leads: 412 },
  { name: "Comment to DM — GUIDE", status: "active", trigger: "Comment", keyword: "GUIDE", dms: 956, clicks: 567, leads: 234 },
  { name: "Story Reply — Freebie", status: "active", trigger: "Story", keyword: "Reply", dms: 634, clicks: 389, leads: 187 },
  { name: "Keyword DM — PRICE", status: "paused", trigger: "DM", keyword: "PRICE", dms: 412, clicks: 298, leads: 156 },
  { name: "Comment to DM — SIGNUP", status: "active", trigger: "Comment", keyword: "SIGNUP", dms: 336, clicks: 189, leads: 98 },
];

const recentDMs = [
  { user: "sarah.k", time: "2 min ago", type: "Comment", keyword: "LINK", status: "sent" },
  { user: "mike.r", time: "5 min ago", type: "Story", keyword: "Reply", status: "sent" },
  { user: "jess.l", time: "8 min ago", type: "Comment", keyword: "GUIDE", status: "sent" },
  { user: "alex.m", time: "12 min ago", type: "DM", keyword: "PRICE", status: "sent" },
  { user: "emma.w", time: "15 min ago", type: "Comment", keyword: "LINK", status: "sent" },
  { user: "noah.t", time: "18 min ago", type: "Comment", keyword: "SIGNUP", status: "sent" },
];

const countries = [
  { flag: "🇺🇸", name: "United States", count: 312, pct: 38 },
  { flag: "🇬🇧", name: "United Kingdom", count: 198, pct: 24 },
  { flag: "🇩🇪", name: "Germany", count: 126, pct: 15 },
  { flag: "🇧🇷", name: "Brazil", count: 84, pct: 10 },
  { flag: "🇫🇷", name: "France", count: 62, pct: 8 },
  { flag: "🇦🇺", name: "Australia", count: 38, pct: 5 },
];

const hours = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
const hourlyData = [12, 8, 5, 3, 2, 4, 18, 35, 52, 68, 89, 95, 78, 65, 72, 88, 105, 112, 98, 85, 72, 56, 38, 22];

export default function DashboardPage() {
  const [period, setPeriod] = useState<"7d" | "30d" | "90d">("7d");

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* Dashboard Header */}
      <div className="bg-white border-b border-gray-100 px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-[#2D3436]">Dashboard</h1>
            <p className="text-sm text-[#636E72] mt-1">Monitor your automations and track performance</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-1 p-1 bg-gray-100 rounded-lg">
              {(["7d", "30d", "90d"] as const).map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
                    period === p ? "bg-white shadow text-[#2D3436]" : "text-[#636E72]"
                  }`}
                >
                  {p === "7d" ? "Last 7 days" : p === "30d" ? "Last 30 days" : "Last 90 days"}
                </button>
              ))}
            </div>
            <Link
              href="/automations"
              className="px-4 py-2 text-sm font-semibold text-white bg-[#6C5CE7] rounded-lg hover:bg-[#5A4BD1] transition-colors"
            >
              + New Automation
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total DMs Sent", value: "4,180", change: "+12.4%", up: true, icon: "💬" },
            { label: "Link Clicks", value: "3,180", change: "+8.2%", up: true, icon: "🔗" },
            { label: "Leads Captured", value: "1,284", change: "+15.7%", up: true, icon: "📧" },
            { label: "Click-Through Rate", value: "9.4%", change: "+1.2%", up: true, icon: "📊" },
          ].map((stat) => (
            <div key={stat.label} className="stat-card bg-white rounded-2xl p-5 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xl">{stat.icon}</span>
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${stat.up ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-2xl font-bold text-[#2D3436]">{stat.value}</div>
              <div className="text-xs text-[#636E72] mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Link Clicks Chart */}
          <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-[#2D3436] mb-4">Link clicks over time</h3>
            <div className="flex items-end gap-1 h-40">
              {hourlyData.map((val, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-1">
                  <div
                    className="w-full bg-gradient-to-t from-[#6C5CE7] to-[#A29BFE] rounded-t transition-all hover:opacity-80"
                    style={{ height: `${(val / 112) * 100}%`, minHeight: "4px" }}
                    title={`${hours[i]}:00 — ${val} clicks`}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2 text-xs text-[#B2BEC3]">
              <span>12 AM</span>
              <span>6 AM</span>
              <span>12 PM</span>
              <span>6 PM</span>
              <span>11 PM</span>
            </div>
          </div>

          {/* Geo Analytics */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-[#2D3436] mb-4">Link clicks by country</h3>
            <div className="space-y-3">
              {countries.map((c) => (
                <div key={c.name} className="flex items-center gap-3">
                  <span className="text-lg">{c.flag}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-[#2D3436]">{c.name}</span>
                      <span className="text-xs text-[#636E72]">{c.count}</span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE]"
                        style={{ width: `${c.pct}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Active Hours */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-[#2D3436] mb-4">When they engage</h3>
            <div className="flex items-end gap-0.5 h-24">
              {hourlyData.map((val, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t transition-all hover:opacity-80"
                  style={{
                    height: `${(val / 112) * 100}%`,
                    minHeight: "2px",
                    backgroundColor: val > 80 ? "#00B894" : val > 40 ? "#FDCB6E" : "#DFE6E9",
                  }}
                  title={`${hours[i]}:00 — ${val} clicks`}
                />
              ))}
            </div>
            <div className="flex items-center gap-4 mt-3 text-xs text-[#636E72]">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#00B894]" /> Peak</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#FDCB6E]" /> Medium</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-[#DFE6E9]" /> Low</span>
            </div>
          </div>

          {/* Recent DMs */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-[#2D3436] mb-4">Recent DMs</h3>
            <div className="space-y-3">
              {recentDMs.map((dm) => (
                <div key={dm.user} className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#6C5CE7] to-[#A29BFE] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                    {dm.user.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-medium text-[#2D3436]">@{dm.user}</div>
                    <div className="text-xs text-[#B2BEC3]">{dm.type} · {dm.keyword}</div>
                  </div>
                  <div className="text-xs text-[#B2BEC3] flex-shrink-0">{dm.time}</div>
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0" />
                </div>
              ))}
            </div>
          </div>

          {/* Top Automations */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="text-sm font-semibold text-[#2D3436] mb-4">Top automations</h3>
            <div className="space-y-3">
              {automations.slice(0, 4).map((a) => (
                <div key={a.name} className="p-3 bg-gray-50 rounded-xl">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs font-medium text-[#2D3436] truncate">{a.name}</div>
                    <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${a.status === "active" ? "bg-green-500" : "bg-yellow-500"}`} />
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#636E72]">
                    <span>{a.dms} DMs</span>
                    <span>{a.clicks} clicks</span>
                    <span>{a.leads} leads</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Automations Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-[#2D3436]">Your Automations</h3>
            <Link href="/automations" className="text-sm font-medium text-[#6C5CE7] hover:text-[#5A4BD1]">
              View all →
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-50">
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#636E72] uppercase">Automation</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#636E72] uppercase">Status</th>
                  <th className="text-left px-6 py-3 text-xs font-semibold text-[#636E72] uppercase">Trigger</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-[#636E72] uppercase">DMs</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-[#636E72] uppercase">Clicks</th>
                  <th className="text-right px-6 py-3 text-xs font-semibold text-[#636E72] uppercase">Leads</th>
                </tr>
              </thead>
              <tbody>
                {automations.map((a) => (
                  <tr key={a.name} className="border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-[#2D3436]">{a.name}</div>
                    </td>
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
                    <td className="px-6 py-4 text-sm font-medium text-[#2D3436] text-right">{a.clicks.toLocaleString()}</td>
                    <td className="px-6 py-4 text-sm font-medium text-[#00B894] text-right">{a.leads.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
