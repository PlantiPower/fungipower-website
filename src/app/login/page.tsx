'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)
    const router = useRouter()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoading(true)
        setError(false)

        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ password }),
        })

        if (res.ok) {
            router.push('/')
        } else {
            setError(true)
            setLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-[#011410] flex items-center justify-center px-6">
            <div className="w-full max-w-sm">
                <div className="flex justify-center mb-10">
                    <img src="/images/fungipower-logo.png" alt="FungiPower" className="h-20" />
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Wachtwoord"
                        autoFocus
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-white/30 focus:outline-none focus:border-orange-500/50 text-base"
                    />
                    {error && (
                        <p className="text-red-400 text-sm text-center">Onjuist wachtwoord</p>
                    )}
                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-orange-500 hover:bg-orange-400 text-orange-950 font-black py-4 rounded-xl uppercase tracking-widest text-sm transition-all disabled:opacity-50"
                    >
                        {loading ? '...' : 'Toegang'}
                    </button>
                </form>
            </div>
        </div>
    )
}
