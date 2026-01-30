'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-couple.jpg"
          alt="Wedding couple"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/50" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-3xl mx-auto transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-serif text-white mb-4 text-balance">
            Sarah & Michael
          </h1>
          <div className="h-1 w-24 bg-accent mx-auto mb-8" />
          <p className="text-xl md:text-2xl text-white/90 font-light mb-4">
            Together with their parents request the honor of their presence at the marriage of
          </p>
        </div>

        <div className="text-white/80 mb-12">
          <p className="text-lg mb-2">Saturday, June 15, 2024</p>
          <p className="text-sm font-light">At four o'clock in the afternoon</p>
        </div>

        <button
          onClick={() => scrollToSection('rsvp')}
          className="px-8 py-3 bg-accent text-accent-foreground rounded-full text-lg font-semibold hover:bg-accent/90 transition-all transform hover:scale-105 inline-block"
        >
          Plan Your Visit
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="flex flex-col items-center gap-2">
          <p className="text-white/60 text-sm">Scroll</p>
          <svg
            className="w-6 h-6 text-white/60"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  )
}
