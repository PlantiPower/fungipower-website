'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'

export default function BeursPopup() {
  const searchParams = useSearchParams()
  const [open, setOpen] = useState(false)
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', sample: false, website_url: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  useEffect(() => {
    if (searchParams.get('ref') === 'champignondagen') {
      setTimeout(() => setOpen(true), 800)
    }
  }, [searchParams])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setForm(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }))
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
          message: form.sample ? 'Wants a free sample ✓' : ''
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
    <div className="fixed inset-0 z-[999] flex items-center justify-center px-4" style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}>
      <div className="relative w-full max-w-md bg-[#0f0701] border border-orange-500/20 rounded-2xl p-8 shadow-2xl">

        {/* Close */}
        <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-white/30 hover:text-white/70 text-xl font-bold">×</button>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-500/10 border border-orange-500/20 rounded-full mb-5">
          <div className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse"></div>
          <span className="text-orange-400 text-[10px] font-black uppercase tracking-widest">Champignon Vakbeurs · Den Bosch</span>
        </div>

        {status === 'success' ? (
          <div className="text-center py-6">
            <h2 className="text-2xl font-black text-orange-400 mb-3">You're all set!</h2>
            <p className="text-white/50 text-sm">We'll keep you in touch on FungiPower updates and field trial results.</p>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-black text-white leading-tight mb-2">
              Be the first to receive our new field trial results.
            </h2>
            <p className="text-white/40 text-sm mb-6">Leave your details and we'll keep you in touch.</p>

            <form onSubmit={handleSubmit} className="space-y-3">
              <input type="text" name="website_url" value={form.website_url} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

              <input required name="name" value={form.name} onChange={handleChange} placeholder="Name *" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-orange-500/50" />
              <input name="company" value={form.company} onChange={handleChange} placeholder="Company" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-orange-500/50" />
              <input required type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email *" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-orange-500/50" />
              <input name="phone" value={form.phone} onChange={handleChange} placeholder="Phone" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder-white/20 focus:outline-none focus:border-orange-500/50" />

              <label className="flex items-center gap-3 cursor-pointer py-1">
                <input type="checkbox" name="sample" checked={form.sample} onChange={handleChange} className="w-4 h-4 accent-orange-500" />
                <span className="text-white/60 text-sm">Yes, I'd like to receive a free sample</span>
              </label>

              {status === 'error' && <p className="text-red-400 text-xs">Something went wrong. Please try again.</p>}

              <button type="submit" disabled={status === 'sending'} className="w-full h-12 bg-orange-500 hover:bg-orange-400 disabled:opacity-50 text-orange-950 font-black uppercase tracking-widest text-xs rounded-lg transition-all">
                {status === 'sending' ? 'Sending...' : 'Stay in touch'}
              </button>

              <p className="text-center text-white/20 text-xs">We won't spam you. Ever.</p>
            </form>
          </>
        )}
      </div>
    </div>
  )
}
