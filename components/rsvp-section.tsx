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
      { threshold: 0.3 }
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
      className="py-20 px-4 sm:px-6 lg:px-8 bg-muted"
    >
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-center text-balance">
          RSVP
        </h2>
        <div className="h-1 w-20 bg-accent mx-auto mb-12" />

        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {submitted ? (
            <Card className="p-12 text-center bg-background border-border">
              <div className="mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-6 h-6 text-accent"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-serif text-primary mb-2">
                Thank You!
              </h3>
              <p className="text-foreground/70 font-light">
                Your RSVP has been received. We look forward to celebrating with you!
              </p>
            </Card>
          ) : (
            <Card className="p-8 md:p-12 bg-background border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
                    className="bg-background/50 border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="bg-background/50 border-border"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Will you be attending?
                  </label>
                  <select
                    name="attending"
                    value={formData.attending}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="yes">Yes, I'll be there!</option>
                    <option value="no">Sorry, I can't attend</option>
                    <option value="maybe">Maybe</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Number of Guests
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-border rounded-md bg-background/50 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="">Select number of guests</option>
                    <option value="1">Just me</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                    <option value="5+">5+ guests</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Dietary Restrictions (Optional)
                  </label>
                  <Textarea
                    name="dietary"
                    value={formData.dietary}
                    onChange={handleChange}
                    placeholder="Let us know about any dietary restrictions..."
                    className="bg-background/50 border-border"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 py-3 text-lg font-semibold"
                >
                  Submit RSVP
                </Button>
              </form>
            </Card>
          )}

          <p className="text-center text-foreground/60 text-sm mt-8 font-light">
            Please RSVP by June 1st, 2024
          </p>
        </div>
      </div>
    </section>
  )
}
