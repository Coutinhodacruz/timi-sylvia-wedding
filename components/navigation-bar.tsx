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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
        ? 'bg-white/80 backdrop-blur-md shadow-lg shadow-burgundy/5 py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <h1
            className="text-2xl md:text-3xl font-serif text-burgundy cursor-pointer hover:text-rose-gold transition-colors tracking-tighter"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            T <span className="text-rose-gold mx-0.5">♥</span> S
          </h1>
          <div className="hidden md:flex gap-10 items-center">
            {[
              { name: 'Our Story', id: 'love-story' },
              { name: 'Details', id: 'event-details' },
              { name: 'Gallery', id: 'gallery' },
              { name: 'Dress Code', id: 'dress-code' },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-[10px] tracking-[0.2em] uppercase font-bold text-burgundy/60 hover:text-rose-gold transition-all relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-rose-gold transition-all group-hover:w-full" />
              </button>
            ))}
            <button
              onClick={() => scrollToSection('rsvp')}
              className="px-8 py-2.5 bg-burgundy text-white rounded-full text-[10px] tracking-[0.2em] uppercase font-bold hover:bg-rose-gold transition-all shadow-lg shadow-burgundy/20 hover:scale-105 active:scale-95"
            >
              RSVP NOW
            </button>
          </div>
          {/* Mobile RSVP button */}
          <button
            onClick={() => scrollToSection('rsvp')}
            className="md:hidden px-5 py-2 bg-burgundy text-white rounded-full text-[10px] tracking-widest uppercase font-bold"
          >
            RSVP
          </button>
        </div>
      </div>
    </nav>
  )
}
