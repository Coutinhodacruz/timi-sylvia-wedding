'use client'

import { useEffect, useState } from 'react'

export default function NavigationBar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-background/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-serif text-primary cursor-pointer hover:text-accent transition-colors" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Our Wedding
          </h1>
          <div className="hidden md:flex gap-8 items-center">
            <button
              onClick={() => scrollToSection('story')}
              className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('details')}
              className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium"
            >
              Details
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-foreground/80 hover:text-accent transition-colors text-sm font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('rsvp')}
              className="px-6 py-2 bg-accent text-accent-foreground rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
            >
              RSVP
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
