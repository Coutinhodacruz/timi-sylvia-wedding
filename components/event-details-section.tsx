'use client'

import { MapPin, Clock } from 'lucide-react'
import CountdownTimer from './countdown-timer'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function EventDetailsSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-background px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 font-light">
            With Love,
          </h2>
          <p className="text-muted-foreground font-light">
            By the grace of God, we are pleased to announce our vow renewal to you, our family, and our friends. We request the honor of your presence on our special day that will be held on:
          </p>
        </div>

        {/* Events grid */}
        <div className={`grid md:grid-cols-2 gap-8 md:gap-12 mb-16 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Joining Ceremony */}
          <div className="text-center group hover:bg-white/5 p-6 rounded-lg transition-all duration-300">
            <h3 className="text-2xl font-serif text-accent mb-4 font-light">Joining Ceremony</h3>
            <p className="text-sm text-muted-foreground mb-4">Intimate celebration</p>

            <div className="space-y-3 mb-6">
              <p className="text-3xl font-serif text-foreground font-light">Thursday</p>
              <p className="text-2xl text-accent">24 July 2026</p>
              <p className="text-2xl text-foreground font-light">Time TBA</p>
            </div>

            <div className="space-y-2 text-muted-foreground text-sm">
              <p className="font-medium">12 Donwoods Crescent</p>
              <p>Whitby, ON, L1R 0N1</p>
            </div>

            <a
              href="https://maps.google.com/?q=12+Donwoods+Crescent,+Whitby,+ON,+L1R+0N1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-6 py-2 rounded-full border border-accent text-accent hover:bg-accent/10 transition-colors text-sm font-medium"
            >
              VIEW LOCATION
            </a>
          </div>

          {/* Traditional Ceremony */}
          <div className="text-center group hover:bg-white/5 p-6 rounded-lg transition-all duration-300">
            <h3 className="text-2xl font-serif text-accent mb-4 font-light">Traditional Ceremony</h3>
            <p className="text-sm text-muted-foreground mb-4">Intimate celebration</p>

            <div className="space-y-3 mb-6">
              <p className="text-3xl font-serif text-foreground font-light">Friday</p>
              <p className="text-2xl text-accent">25 July 2026</p>
              <p className="text-2xl text-foreground font-light">Time TBA</p>
            </div>

            <div className="space-y-2 text-muted-foreground text-sm">
              <p className="font-medium">12 Donwoods Crescent</p>
              <p>Whitby, ON, L1R 0N1</p>
            </div>

            <a
              href="https://maps.google.com/?q=12+Donwoods+Crescent,+Whitby,+ON,+L1R+0N1"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block px-6 py-2 rounded-full border border-accent text-accent hover:bg-accent/10 transition-colors text-sm font-medium"
            >
              VIEW LOCATION
            </a>
          </div>
        </div>

        {/* Important Notes */}
        <div className={`bg-black/40 rounded-lg p-8 md:p-10 mb-16 text-center transition-all duration-700 delay-150 hover:bg-black/50 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-2xl font-serif text-accent mb-4 font-light">Important Notes</h3>
          <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
            <p className="text-foreground font-medium italic">
              "Due to limited space, we kindly ask that ONLY those named on the e-invitation attend. Thank you for your understanding and we look forward to sharing our special moment with you."
            </p>
            <ul className="text-left max-w-md mx-auto space-y-2">
              <li>• Strictly by invitation only</li>
              <li>• No plus ones except where stated</li>
              <li>• No posting of pictures online</li>
              <li>• No recordings during ceremonies</li>
              <li>• Book your flights early (World Cup season)</li>
            </ul>
          </div>
        </div>

        {/* Hotel booking section */}
        <div className={`bg-black/40 rounded-lg p-8 md:p-10 mb-16 text-center transition-all duration-700 delay-200 hover:bg-black/50 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-2xl font-serif text-accent mb-4 font-light">Hotel Booking</h3>
          <p className="text-foreground mb-4 font-light">
            Hotel details will be shared soon.
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            Booking Deadline: March 31st, 2026
          </p>
          <button className="px-8 py-2 rounded-full bg-accent text-black hover:bg-accent/90 transition-colors font-medium text-sm opacity-50 cursor-not-allowed">
            COMING SOON
          </button>
        </div>

        {/* Countdown */}
        <div className={`bg-black/40 rounded-lg p-8 md:p-10 transition-all duration-700 delay-400 hover:bg-black/50 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <CountdownTimer />
        </div>
      </div>
    </section>
  )
}
