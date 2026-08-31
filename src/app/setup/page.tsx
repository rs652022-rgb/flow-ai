"use client";

import Link from "next/link";

const steps = [
  {
    provider: "Google OAuth",
    color: "from-blue-500 to-red-500",
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
    ),
    instructions: [
      { step: "Go to", link: "https://console.cloud.google.com/apis/credentials", text: "Google Cloud Console" },
      { step: "Create a new project (or select existing)" },
      { step: "Go to APIs & Services → OAuth consent screen" },
      { step: 'Set app name: "Flow.Ai"' },
      { step: "Add authorized redirect URI:", code: "http://localhost:3000/api/auth/callback/google" },
      { step: "For production, also add:", code: "https://your-domain.vercel.app/api/auth/callback/google" },
      { step: "Go to Credentials → Create Credentials → OAuth 2.0 Client ID" },
      { step: "Copy the Client ID and Client Secret" },
    ],
    envVars: [
      { name: "GOOGLE_CLIENT_ID", example: "123456789-abcdef.apps.googleusercontent.com" },
      { name: "GOOGLE_CLIENT_SECRET", example: "GOCSPX-abcdefghijklmnop" },
    ],
  },
  {
    provider: "Instagram / Meta OAuth",
    color: "from-purple-600 to-pink-500",
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
    ),
    instructions: [
      { step: "Go to", link: "https://developers.facebook.com/apps/", text: "Meta Developer Portal" },
      { step: 'Create a new app → Select "Consumer" type' },
      { step: "Add Facebook Login product to your app" },
      { step: "Go to Settings → Basic" },
      { step: "Add authorized redirect URI:", code: "http://localhost:3000/api/auth/callback/instagram" },
      { step: "For production, also add:", code: "https://your-domain.vercel.app/api/auth/callback/instagram" },
      { step: "Request Instagram permissions: instagram_basic, pages_show_list" },
      { step: "Copy the App ID and App Secret" },
    ],
    envVars: [
      { name: "INSTAGRAM_CLIENT_ID", example: "123456789012345" },
      { name: "INSTAGRAM_CLIENT_SECRET", example: "abc123def456ghi789" },
    ],
  },
];

export default function SetupPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-[#2D3436] mb-4">
            🔧 OAuth Setup Guide
          </h1>
          <p className="text-lg text-[#636E72] max-w-xl mx-auto">
            Follow these steps to enable Google and Instagram sign-in for your Flow.Ai instance.
          </p>
        </div>

        {/* Email auth works now */}
        <div className="bg-green-50 border border-green-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start gap-3">
            <div className="text-2xl">✅</div>
            <div>
              <h3 className="text-base font-bold text-green-800">Email/Password auth is working</h3>
              <p className="text-sm text-green-700 mt-1">
                You can sign up and log in with email/password right now — no extra configuration needed.
                The steps below are only for enabling Google and Instagram social login buttons.
              </p>
            </div>
          </div>
        </div>

        {/* Env file */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
          <h3 className="text-base font-bold text-[#2D3436] mb-3">Where to add credentials</h3>
          <p className="text-sm text-[#636E72] mb-4">
            Add the environment variables below to your <code className="px-1.5 py-0.5 bg-gray-100 rounded text-xs font-mono">.env</code> file (for local) or to your Vercel project&apos;s Environment Variables (Settings → Environment Variables).
          </p>
          <div className="bg-[#1a1a2e] rounded-xl p-4 font-mono text-sm text-gray-300">
            <div className="text-gray-500 mb-2"># OAuth credentials (get these from the steps below)</div>
            <div>GOOGLE_CLIENT_ID=<span className="text-green-400">your-google-client-id</span></div>
            <div>GOOGLE_CLIENT_SECRET=<span className="text-green-400">your-google-client-secret</span></div>
            <div>INSTAGRAM_CLIENT_ID=<span className="text-green-400">your-instagram-app-id</span></div>
            <div>INSTAGRAM_CLIENT_SECRET=<span className="text-green-400">your-instagram-app-secret</span></div>
          </div>
        </div>

        {/* Provider setup steps */}
        {steps.map((provider) => (
          <div key={provider.provider} className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${provider.color} flex items-center justify-center`}>
                {provider.icon}
              </div>
              <h2 className="text-xl font-bold text-[#2D3436]">{provider.provider}</h2>
            </div>

            <ol className="space-y-3">
              {provider.instructions.map((instruction, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#6C5CE7]/10 text-[#6C5CE7] text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <div className="text-sm text-[#2D3436] leading-relaxed">
                    {instruction.step}
                    {instruction.link && (
                      <a
                        href={instruction.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#6C5CE7] hover:underline font-medium ml-1"
                      >
                        {instruction.text} ↗
                      </a>
                    )}
                    {instruction.code && (
                      <code className="block mt-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-xs font-mono text-[#6C5CE7] break-all">
                        {instruction.code}
                      </code>
                    )}
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 p-4 bg-gray-50 rounded-xl">
              <div className="text-xs font-semibold text-[#636E72] uppercase tracking-wider mb-2">Environment Variables</div>
              <div className="space-y-2">
                {provider.envVars.map((envVar) => (
                  <div key={envVar.name} className="flex items-center gap-2">
                    <code className="text-xs font-mono text-[#2D3436] bg-white px-2 py-1 rounded border border-gray-200">{envVar.name}</code>
                    <span className="text-xs text-[#B2BEC3]">=</span>
                    <code className="text-xs font-mono text-[#636E72]">{envVar.example}</code>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        {/* Vercel deployment note */}
        <div className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mb-8">
          <h3 className="text-base font-bold text-blue-800 mb-2">🚀 Deploying to Vercel?</h3>
          <ol className="text-sm text-blue-700 space-y-2 list-decimal list-inside">
            <li>Go to your Vercel project → Settings → Environment Variables</li>
            <li>Add all four OAuth environment variables above</li>
            <li>Make sure to add <strong>production</strong> redirect URIs in Google/Meta consoles</li>
            <li>Redeploy your project after adding environment variables</li>
          </ol>
        </div>

        {/* Back link */}
        <div className="text-center">
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-[#6C5CE7] to-[#A29BFE] rounded-full hover:shadow-lg hover:shadow-[#6C5CE7]/25 transition-all"
          >
            ← Back to Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
}
