'use client'

import { useState } from 'react';
import Image from 'next/image';

export default function ChampignonBeurs() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', message: '', website_url: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/beurs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-[#011410] text-white font-sans flex flex-col items-center justify-center px-6 py-20">

      {/* Logo */}
      <div className="mb-12">
        <img src="/images/fungipower-logo.png" alt="FungiPower" className="h-10 object-contain" />
      </div>

      {/* Hero */}
      <div className="text-center max-w-2xl mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-8">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
          <span className="text-orange-400 text-xs font-black uppercase tracking-widest">Champignon Vakbeurs — Den Bosch</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-black leading-tight mb-6">
          It was nice<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">to meet you!</span>
        </h1>
        <p className="text-orange-100/60 text-lg leading-relaxed">
          Leave your details below and we'll send you an extra sample — on us. We'll also keep you posted on what FungiPower can do for your cultivation.
        </p>
      </div>

      {/* Products */}
      <div className="flex gap-8 mb-16 justify-center">
        <div className="text-center">
          <img src="/images/products/fungipower-start.png" alt="FungiPower Start" className="h-40 object-contain drop-shadow-xl" />
          <p className="text-orange-400 font-bold text-sm mt-2 uppercase tracking-widest">Start</p>
        </div>
        <div className="text-center">
          <img src="/images/products/fungipower-boost.png" alt="FungiPower Boost" className="h-40 object-contain drop-shadow-xl" />
          <p className="text-blue-400 font-bold text-sm mt-2 uppercase tracking-widest">Boost</p>
        </div>
      </div>

      {/* Form */}
      {status === 'success' ? (
        <div className="text-center max-w-md">
          <div className="text-5xl mb-6">🍄</div>
          <h2 className="text-3xl font-black text-orange-400 mb-4">You're all set!</h2>
          <p className="text-orange-100/60 text-lg">We'll be in touch soon. Your sample is on its way.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-5">

          {/* Honeypot */}
          <input type="text" name="website_url" value={form.website_url} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-xs font-black uppercase tracking-widest text-orange-400/70 block mb-2">Name *</label>
              <input
                required
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-orange-500/50 transition-colors"
              />
            </div>
            <div>
              <label className="text-xs font-black uppercase tracking-widest text-orange-400/70 block mb-2">Company</label>
              <input
                name="company"
                value={form.company}
                onChange={handleChange}
                placeholder="Your company"
                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-orange-500/50 transition-colors"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-black uppercase tracking-widest text-orange-400/70 block mb-2">Email *</label>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="info@yourcompany.com"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-orange-500/50 transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-black uppercase tracking-widest text-orange-400/70 block mb-2">Phone</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+31 6 ..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-orange-500/50 transition-colors"
            />
          </div>

          <div>
            <label className="text-xs font-black uppercase tracking-widest text-orange-400/70 block mb-2">Anything you'd like to share?</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={3}
              placeholder="Optional..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
            />
          </div>

          {status === 'error' && (
            <p className="text-red-400 text-sm">Something went wrong. Please try again or email us at info@fungipower.com.</p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full h-14 bg-orange-500 hover:bg-orange-400 disabled:opacity-50 text-orange-950 font-black uppercase tracking-widest text-sm rounded-lg transition-all"
          >
            {status === 'sending' ? 'Sending...' : 'Send & Claim Your Sample'}
          </button>

          <p className="text-center text-orange-100/30 text-xs">We won't spam you. Ever.</p>
        </form>
      )}
    </div>
  );
}
