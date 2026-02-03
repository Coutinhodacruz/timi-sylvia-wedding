'use client'

import { useEffect } from "react"

import React from "react"
import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

interface GuestbookEntry {
  id: string
  name: string
  message: string
  date: string
}

export default function GuestbookSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
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
  const [formData, setFormData] = useState({ name: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (formData.name && formData.message) {
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
      setFormData({ name: '', message: '' })
      setTimeout(() => setSubmitted(false), 2000)
    }
  }

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-background px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* RSVP Form */}
        <div className={`mb-20 bg-black/40 rounded-lg p-8 md:p-10 transition-all duration-700 hover:bg-black/50 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-serif text-accent mb-2 font-light text-center">
            RSVP
          </h2>
          <p className="text-muted-foreground text-center mb-8 font-light">
            Please kindly help us prepare everything better by confirming your attendance to our celebration with the following RSVP form. RSVP deadline: March 31st, 2026.
          </p>

          {submitted && (
            <div className="mb-6 p-4 bg-accent/10 border border-accent text-accent rounded-lg text-sm font-medium text-center">
              Thank you! We look forward to celebrating with you.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                required
                className="px-4 py-3 bg-background/50 border border-muted text-foreground placeholder-muted-foreground rounded-lg focus:outline-none focus:border-accent"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 py-3 bg-background/50 border border-muted text-foreground placeholder-muted-foreground rounded-lg focus:outline-none focus:border-accent"
              />
              <input
                type="tel"
                placeholder="Phone"
                className="px-4 py-3 bg-background/50 border border-muted text-foreground placeholder-muted-foreground rounded-lg focus:outline-none focus:border-accent"
              />
              <select className="px-4 py-3 bg-background/50 border border-muted text-foreground rounded-lg focus:outline-none focus:border-accent">
                <option>Will you be attending?</option>
                <option>Yes, I will attend</option>
                <option>Sorry, I can't attend</option>
              </select>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Say something for our vow renewal"
              required
              className="w-full px-4 py-3 bg-background/50 border border-muted text-foreground placeholder-muted-foreground rounded-lg focus:outline-none focus:border-accent h-24 resize-none"
            />

            <button
              type="submit"
              className="w-full px-6 py-3 bg-accent text-black hover:bg-accent/90 transition-colors font-medium rounded-lg text-center"
            >
              SUBMIT
            </button>
          </form>
        </div>

        {/* Recent Wishes */}
        <h2 className={`text-3xl md:text-4xl font-serif text-foreground mb-10 font-light transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          Recent Wishes
        </h2>

        <div className={`grid md:grid-cols-2 gap-6 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {entries.map((entry, idx) => (
            <div
              key={entry.id}
              className={`bg-black/40 rounded-lg p-6 border border-muted/20 hover:border-accent/30 hover:bg-black/50 transition-all duration-500 stagger-item ${isInView ? '' : ''}`}
              style={{
                animationDelay: isInView ? `${0.3 + idx * 0.1}s` : '0s',
                animation: isInView ? `fadeIn 0.6s ease-out forwards` : 'none',
              }}
            >
              <h4 className="text-lg font-medium text-foreground mb-2">
                {entry.name}
              </h4>
              <p className="text-foreground/90 font-light mb-3">
                {entry.message}
              </p>
              <p className="text-xs text-muted-foreground font-light">
                {entry.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
