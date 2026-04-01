'use client'

import { useState } from 'react'
import { Sparkles, Lock } from 'lucide-react'

interface VerifyOTPProps {
  emailHex: string | null;
  onVerified: () => void;
}

export default function VerifyOTP({ emailHex, onVerified }: VerifyOTPProps) {
  const [otp, setOtp] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    if (otp.length !== 4) {
      setError('Please enter a 4-digit code')
      return
    }

    if (!emailHex) {
      setError('Invalid invite link. Please use the exact link sent to your email.')
      return
    }

    setIsLoading(true)
    
    try {
      const response = await fetch('/api/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ emailHex, otp }),
      })

      const data = await response.json()

      if (data.success) {
        onVerified()
      } else {
        setError(data.error || 'Invalid code. Please try again.')
      }
    } catch (err) {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[url('https://wedmedia.wed-webs.com/2023/06/06035908/ART009-WK.png')] bg-cover bg-center flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 opacity-30 pointer-events-none" />

      <div className="w-full max-w-md bg-[#0D0D0D]/80 backdrop-blur-md border border-rose-gold/30 rounded-3xl p-8 relative z-10 shadow-2xl">
        <div className="text-center mb-8">
          <div className="w-16 h-16 rounded-full bg-rose-gold/10 flex items-center justify-center mx-auto mb-6 border border-rose-gold/20">
            <Lock className="w-8 h-8 text-rose-gold" />
          </div>
          <h1 className="text-2xl font-serif text-pink-200 mb-2 tracking-widest uppercase">Secure Access</h1>
          <p className="text-orange-300 text-sm font-light">
            Please enter the 4-digit access code sent to your email to view your invitation.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="flex justify-center gap-3">
              {[0, 1, 2, 3].map((index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-14 h-16 text-center text-2xl font-serif bg-gray-500/50 border-2 border-rose-gold/30 rounded-xl text-rose-gold focus:border-rose-gold focus:outline-none focus:ring-1 focus:ring-rose-gold transition-all"
                  value={otp[index] || ''}
                  onChange={(e) => {
                    const newValue = e.target.value.replace(/[^0-9]/g, '')
                    if (newValue) {
                      const newOtp = otp.substring(0, index) + newValue + otp.substring(index + 1)
                      setOtp(newOtp)
                      // Auto-focus next input
                      if (index < 3) {
                        const nextInput = e.target.parentElement?.children[index + 1] as HTMLInputElement
                        if (nextInput) nextInput.focus()
                      }
                    }
                  }}
                  onPaste={(e) => {
                    e.preventDefault()
                    const pastedData = e.clipboardData.getData('text/plain').replace(/[^0-9]/g, '').slice(0, 4)
                    if (pastedData) {
                      setOtp(pastedData)
                      // Auto-focus the last filled input or the end
                      const targetIndex = Math.min(pastedData.length, 3)
                      const targetInput = e.currentTarget.parentElement?.children[targetIndex] as HTMLInputElement
                      if (targetInput) targetInput.focus()
                    }
                  }}
                  onKeyDown={(e) => {
                    // Handle backspace
                    if (e.key === 'Backspace') {
                      e.preventDefault()
                      const newOtp = otp.substring(0, Math.max(0, index)) + otp.substring(index + 1)
                      setOtp(newOtp)
                      if (index > 0) {
                        const prevInput = e.currentTarget.parentElement?.children[index - 1] as HTMLInputElement
                        if (prevInput) prevInput.focus()
                      }
                    } else if (e.key === 'ArrowLeft' && index > 0) {
                      const prevInput = e.currentTarget.parentElement?.children[index - 1] as HTMLInputElement
                      if (prevInput) prevInput.focus()
                    } else if (e.key === 'ArrowRight' && index < 3) {
                      const nextInput = e.currentTarget.parentElement?.children[index + 1] as HTMLInputElement
                      if (nextInput) nextInput.focus()
                    }
                  }}
                />
              ))}
            </div>
            {error && (
              <p className="text-red-400 text-sm text-center mt-4 bg-red-400/10 py-2 rounded-lg border border-red-400/20 animate-fade-in">
                {error}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading || otp.length !== 4}
            className="w-full relative group overflow-hidden rounded-xl bg-gradient-to-r from-[#A68A56] via-[#C9A86B] to-[#E0C097] p-[1px] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <div className="absolute inset-0 bg-white/20 group-hover:bg-transparent transition-all duration-300" />
            <div className="h-14 bg-[#0D0D0D] rounded-[11px] flex items-center justify-center gap-2 group-hover:bg-[#0D0D0D]/90 transition-all">
              <span className="font-serif text-lg text-[#C9A86B] tracking-widest uppercase">
                {isLoading ? 'Verifying...' : 'Access Invite'}
              </span>
              <Sparkles className="w-5 h-5 text-[#C9A86B]" />
            </div>
          </button>
        </form>
      </div>
    </div>
  )
}
