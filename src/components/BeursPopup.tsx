'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function BeursPopup() {
  const searchParams = useSearchParams()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', language: '', sample: false, website_url: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useEffect(() => {
    setTimeout(() => setOpen(true), 800)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    if (e.target instanceof HTMLInputElement && e.target.type === 'checkbox') {
      setForm(prev => ({ ...prev, [name]: e.target instanceof HTMLInputElement ? e.target.checked : false }))
    } else {
      setForm(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch('/api/beurs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          message: [form.sample ? 'Wants a free sample ✓' : '', form.language ? `Preferred language: ${form.language}` : ''].filter(Boolean).join(' | ')
        }),
      })
      if (res.ok) setStatus('success')
      else setStatus('error')
    } catch {
      setStatus('error')
    }
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[999] overflow-y-auto" style={{ background: 'radial-gradient(ellipse at 60% 20%, #7a2d0a 0%, #3d1505 35%, #0d0601 100%)' }}>

      {/* Close button */}
      <button
        onClick={() => setOpen(false)}
        className="fixed top-6 right-6 z-10 text-white/30 hover:text-white/80 transition-colors text-3xl font-thin leading-none"
      >
        ×
      </button>

      <div className="min-h-screen flex flex-col items-center justify-center px-6 py-20">

        {/* Logo */}
        <div className="mb-10">
          <img src="/images/fungipower-logo.png" alt="FungiPower" className="h-10 object-contain" />
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-8">
          <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
          <span className="text-orange-400 text-xs font-black uppercase tracking-widest">Mushroom Cultivation Days · Den Bosch</span>
        </div>

        {status === 'success' ? (
          <div className="text-center max-w-md">
            <h2 className="text-5xl font-black text-orange-400 mb-4">You're all set!</h2>
            <p className="text-white/50 text-lg">We'll keep you posted on FungiPower updates and field trial results.</p>
            <button onClick={() => setOpen(false)} className="mt-8 text-white/30 hover:text-white/60 text-sm underline">Continue to website</button>
          </div>
        ) : (
          <>
            {/* Big headline */}
            <div className="text-center max-w-lg mb-12">
              <h1 className="text-5xl md:text-6xl font-black leading-tight mb-4">
                It was nice<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">to meet you!</span>
              </h1>
              <p className="text-white/50 text-lg leading-relaxed text-left">
                Leave your details and we'll send you a complete information package about FungiPower — what it is, how it works, and what it can do for your cultivation. We'll also keep you updated with field trial results and relevant news.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="w-full max-w-lg space-y-4">
              <input type="text" name="website_url" value={form.website_url} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

              <div className="grid grid-cols-2 gap-4">
                <input required name="name" value={form.name} onChange={handleChange} placeholder="Name *" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-orange-500/50" />
                <input name="company" value={form.company} onChange={handleChange} placeholder="Company" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-orange-500/50" />
              </div>
              <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email *" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-orange-500/50" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-orange-500/50" />

              <select name="language" value={form.language} onChange={handleChange} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500/50 appearance-none" style={{color: form.language ? 'white' : 'rgba(255,255,255,0.2)'}}>
                <option value="" disabled>Preferred language for information package</option>
                <option value="English">English</option>
                <option value="Dutch">Dutch</option>
                <option value="German">German</option>
                <option value="French">French</option>
                <option value="Spanish">Spanish</option>
                <option value="Polish">Polish</option>
                <option value="Chinese (Simplified)">Chinese (Simplified)</option>
                <option value="Chinese (Traditional)">Chinese (Traditional)</option>
              </select>

              <label className="flex items-center gap-3 cursor-pointer py-1">
                <input type="checkbox" name="sample" checked={form.sample} onChange={handleChange} className="w-4 h-4 accent-orange-500" />
                <span className="text-white/60 text-sm">Yes, I'd like a free sample. They're on us.</span>
              </label>

              {status === 'error' && <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>}

              <button type="submit" disabled={status === 'sending'} className="w-full h-14 bg-orange-500 hover:bg-orange-400 disabled:opacity-50 text-orange-950 font-black uppercase tracking-widest text-sm rounded-lg transition-all">
                {status === 'sending' ? 'Sending...' : 'Stay in touch'}
              </button>

              <p className="text-center text-white/20 text-xs">We won't spam you. Ever.</p>

              <p className="text-center">
                <button type="button" onClick={() => setOpen(false)} className="text-white/20 hover:text-white/40 text-xs underline">
                  Skip, take me to the website
                </button>
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
