'use client'

import { useEffect } from "react"

import React from "react"
import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Heart, Loader2 } from 'lucide-react'

interface GuestbookEntry {
  id: string
  name: string
  message: string
  date: string
}

export default function GuestbookSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.05, triggerOnce: true })
  const [entries, setEntries] = useState<GuestbookEntry[]>([
    {
      id: '1',
      name: 'Veragold',
      message: 'God bless your home',
      date: 'January 24, 2026 6:38 am',
    },
    {
      id: '2',
      name: 'Uche and wife',
      message: 'May God continue to bless your union',
      date: 'January 23, 2026 7:00 am',
    },
    {
      id: '3',
      name: 'Olumide Johnson Fatokun',
      message: 'May this renewal bring renewed joy, fulfillment and enduring love in Jesus name.',
      date: 'January 19, 2026 8:47 am',
    },
    {
      id: '4',
      name: 'Dr Peju',
      message: 'May God continue to keep your home.',
      date: 'January 19, 2026 5:14 am',
    },
    {
      id: '5',
      name: 'Mr. Frank and Wife',
      message: 'May God continue to bless your union in Jesus mighty name Amen',
      date: 'January 18, 2026 10:51 am',
    },
    {
      id: '6',
      name: 'Margaret Iyawe',
      message: 'God will continue to uphold you and sustain you both. Congratulations',
      date: 'January 18, 2026 6:37 am',
    },
  ])
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      })
    }, { threshold: 0.3 })

    const element = document.getElementById('guestbook')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.name || !formData.message) return

    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email || undefined,
          message: formData.message,
        }),
      })

      if (!response.ok) {
        throw new Error('Failed to submit')
      }

      const newEntry: GuestbookEntry = {
        id: Date.now().toString(),
        name: formData.name,
        message: formData.message,
        date: new Date().toLocaleString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }),
      }
      setEntries([newEntry, ...entries])
      setSubmitted(true)
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitted(false), 4000)
    } catch {
      setError('Something went wrong. Please try again.')
      setTimeout(() => setError(''), 4000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section
      ref={ref}
      id="guestbook"
      className="py-20 md:py-32 bg-background px-4 md:px-8 relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-rose-gold/5 rounded-full blur-3xl -mr-40 -mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blush-pink/10 rounded-full blur-3xl -ml-40 -mb-40 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Wish Form */}
        <div className={`mb-24 bg-white rounded-[2.5rem] p-8 md:p-12 border border-blush-pink shadow-2xl shadow-burgundy/5 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-rose-gold/10 text-rose-gold mb-4 rotate-3">
              <Heart size={24} className="fill-rose-gold/20" />
            </div>
            <h2 className="text-3xl md:text-5xl font-serif text-burgundy mb-4 font-light text-center">
              Guestbook
            </h2>
            <p className="text-burgundy/50 text-center font-light italic font-serif text-lg">
              Leave a beautiful message for the couple as they begin this new chapter.
            </p>
            <div className="h-px w-12 bg-rose-gold/20 mx-auto mt-6" />
          </div>

          {submitted && (
            <div className="mb-8 p-4 bg-green-50 border border-green-100 text-green-600 rounded-2xl text-sm font-medium text-center animate-fade-in">
              ✨ Thank you for your beautiful message! Check your email for a special note from the couple.
            </div>
          )}

          {error && (
            <div className="mb-8 p-4 bg-red-50 border border-red-100 text-red-600 rounded-2xl text-sm font-medium text-center animate-fade-in">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest text-rose-gold uppercase font-bold ml-1">Your Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  required
                  className="w-full h-14 px-6 bg-blush-pink/5 border border-blush-pink/50 text-burgundy placeholder:text-burgundy/30 rounded-2xl focus:outline-none focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/10 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] tracking-widest text-rose-gold uppercase font-bold ml-1">Email (Optional)</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email for a thank you note"
                  className="w-full h-14 px-6 bg-blush-pink/5 border border-blush-pink/50 text-burgundy placeholder:text-burgundy/30 rounded-2xl focus:outline-none focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/10 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] tracking-widest text-rose-gold uppercase font-bold ml-1">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your well wishes here..."
                required
                className="w-full px-6 py-4 bg-blush-pink/5 border border-blush-pink/50 text-burgundy placeholder:text-burgundy/30 rounded-2xl focus:outline-none focus:border-rose-gold focus:ring-2 focus:ring-rose-gold/10 h-32 resize-none transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full h-16 bg-burgundy text-burgundy hover:bg-rose-gold transition-all font-bold text-[10px] tracking-[0.3em] uppercase rounded-2xl shadow-lg shadow-burgundy/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                'Sign Guestbook'
              )}
            </button>
          </form>
        </div>

        {/* Recent Wishes */}
        <div className="flex items-center gap-6 mb-12">
          <h2 className={`text-3xl md:text-4xl font-serif text-burgundy font-light transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            Recent Wishes
          </h2>
          <div className="flex-1 h-px bg-rose-gold/20" />
        </div>

        <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {entries.map((entry, idx) => (
            <div
              key={entry.id}
              className="bg-white rounded-4xl p-8 border border-blush-pink/50 hover:border-rose-gold/30 hover:shadow-xl hover:shadow-burgundy/5 transition-all duration-500 relative group"
            >
              <div className="absolute top-6 right-8 text-rose-gold/10 group-hover:text-rose-gold/20 transition-colors">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 15.1046 21.017 14V9C21.017 7.89543 20.1216 7 19.017 7H15.017C13.9124 7 13.017 7.89543 13.017 9V15L11.017 21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C11.1216 16 12.017 15.1046 12.017 14V9C12.017 7.89543 11.1216 7 10.017 7H6.017C4.91243 7 4.017 7.89543 4.017 9V15L2.017 21H5.017Z" />
                </svg>
              </div>
              <div className="flex flex-col h-full">
                <h4 className="text-xl font-serif text-burgundy mb-3 font-medium">
                  {entry.name}
                </h4>
                <p className="text-burgundy/70 font-light mb-6 grow leading-relaxed italic font-serif text-lg">
                  "{entry.message}"
                </p>
                <div className="flex items-center gap-2">
                  <div className="h-px w-6 bg-rose-gold/30" />
                  <p className="text-[10px] text-rose-gold/60 font-bold uppercase tracking-widest">
                    {entry.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
