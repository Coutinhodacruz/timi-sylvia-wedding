'use client'

import React from "react"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'

export default function RSVPSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    guests: '',
    dietary: '',
    attending: 'yes',
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.05 }
    )

    const element = document.getElementById('rsvp')
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
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        guests: '',
        dietary: '',
        attending: 'yes',
      })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section
      id="rsvp"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-gold/5 rounded-full blur-3xl -ml-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blush-pink/10 rounded-full blur-3xl -mr-48 -mb-48 pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-serif text-burgundy mb-4 text-balance font-light">
            RSVP
          </h2>
          <p className="text-burgundy/50 font-light italic font-serif text-lg">
            We can't wait to celebrate our special day with you
          </p>
          <div className="h-px w-20 bg-rose-gold/30 mx-auto mt-8" />
        </div>

        <div
          className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
        >
          {submitted ? (
            <Card className="p-12 text-center bg-white border-blush-pink shadow-2xl shadow-burgundy/5 rounded-4xl">
              <div className="mb-8">
                <div className="w-20 h-20 rounded-2xl bg-rose-gold/10 flex items-center justify-center mx-auto mb-6 border border-rose-gold/20 rotate-3 animate-bounce">
                  <svg
                    className="w-10 h-10 text-rose-gold"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-3xl font-serif text-burgundy mb-4">
                Thank You!
              </h3>
              <p className="text-burgundy/60 font-light text-lg italic font-serif">
                Your RSVP has been received. <br /> We look forward to celebrating with you!
              </p>
            </Card>
          ) : (
            <Card className="p-8 md:p-16 bg-white border-blush-pink shadow-2xl shadow-burgundy/5 rounded-4xl">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-rose-gold tracking-[0.2em] uppercase">
                      Full Name
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      className="h-14 bg-blush-pink/5 border-blush-pink/50 focus:border-rose-gold focus:ring-rose-gold/20 rounded-2xl"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-rose-gold tracking-[0.2em] uppercase">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="h-14 bg-blush-pink/5 border-blush-pink/50 focus:border-rose-gold focus:ring-rose-gold/20 rounded-2xl"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-rose-gold tracking-[0.2em] uppercase">
                      Attending?
                    </label>
                    <div className="relative group">
                      <select
                        name="attending"
                        value={formData.attending}
                        onChange={handleChange}
                        className="w-full h-14 pl-4 pr-10 border border-blush-pink/50 rounded-2xl bg-blush-pink/5 text-burgundy font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-rose-gold/20 focus:border-rose-gold transition-all"
                      >
                        <option value="yes">Yes, I'll be there!</option>
                        <option value="no">Sorry, I can't attend</option>
                        <option value="maybe">Maybe</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-rose-gold group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-rose-gold tracking-[0.2em] uppercase">
                      Guests
                    </label>
                    <div className="relative group">
                      <select
                        name="guests"
                        value={formData.guests}
                        onChange={handleChange}
                        className="w-full h-14 pl-4 pr-10 border border-blush-pink/50 rounded-2xl bg-blush-pink/5 text-burgundy font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-rose-gold/20 focus:border-rose-gold transition-all"
                      >
                        <option value="">Select number</option>
                        <option value="1">Just me</option>
                        <option value="2">2 guests</option>
                        <option value="3">3 guests</option>
                        <option value="4">4 guests</option>
                        <option value="5+">5+ guests</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-rose-gold group-hover:scale-110 transition-transform">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="block text-xs font-bold text-rose-gold tracking-[0.2em] uppercase">
                    Dietary Restrictions
                  </label>
                  <Textarea
                    name="dietary"
                    value={formData.dietary}
                    onChange={handleChange}
                    placeholder="Let us know about any dietary requirements..."
                    className="min-h-[120px] bg-blush-pink/5 border-blush-pink/50 focus:border-rose-gold focus:ring-rose-gold/20 rounded-2xl p-4 transition-all"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-16 bg-burgundy text-white hover:bg-rose-gold text-[10px] tracking-[0.3em] uppercase font-bold rounded-2xl shadow-xl shadow-burgundy/20 transition-all active:scale-95"
                >
                  Confirm Registration
                </Button>
              </form>
            </Card>
          )}

          <div className="mt-12 text-center space-y-2">
            <p className="text-burgundy/40 text-[10px] tracking-[0.2em] uppercase font-bold">
              Deadline for RSVP
            </p>
            <p className="text-rose-gold font-serif text-2xl italic">
              June 1st, 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
