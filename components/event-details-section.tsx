'use client'

import { MapPin, Clock, AlertCircle, Plane } from 'lucide-react'
import CountdownTimer from './countdown-timer'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function EventDetailsSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      ref={ref}
      id="event-details"
      className="py-20 md:py-32 bg-background px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4 font-light">
            With Love,
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto">
            By the grace of God, we are pleased to announce the celebration of our union to you, our family, and our friends. We request the honor of your presence on our special day.
          </p>
        </div>

        {/* Events grid */}
        <div className={`grid md:grid-cols-2 gap-8 md:gap-12 mb-16 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Joining Ceremony */}
          <div className="text-center group bg-black/40 hover:bg-black/50 p-8 rounded-lg transition-all duration-300 border border-accent/10 hover:border-accent/30">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-all">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-serif text-accent mb-2 font-light">Joining Ceremony</h3>
            <p className="text-sm text-muted-foreground mb-6">Intimate celebration</p>

            <div className="space-y-3 mb-8">
              <p className="text-3xl font-serif text-foreground font-light">Thursday</p>
              <p className="text-2xl text-accent font-medium">July 24th, 2026</p>
              <p className="text-lg text-foreground/80 font-light">Time TBA</p>
            </div>

            <div className="flex items-start justify-center gap-2 text-muted-foreground text-sm mb-6">
              <MapPin className="w-4 h-4 mt-0.5 text-accent" />
              <div className="text-left">
                <p className="font-medium text-foreground">Ile Oba-Jesu</p>
                <p>12 Donwoods Crescent</p>
                <p>Whitby, ON, L1R 0N1</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=12+Donwoods+Crescent,+Whitby,+ON,+L1R+0N1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-black transition-all text-sm font-medium"
            >
              VIEW LOCATION
            </a>
          </div>

          {/* Traditional Ceremony */}
          <div className="text-center group bg-black/40 hover:bg-black/50 p-8 rounded-lg transition-all duration-300 border border-accent/10 hover:border-accent/30">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-all">
              <Clock className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-serif text-accent mb-2 font-light">Traditional Ceremony</h3>
            <p className="text-sm text-muted-foreground mb-6">Intimate celebration</p>

            <div className="space-y-3 mb-8">
              <p className="text-3xl font-serif text-foreground font-light">Friday</p>
              <p className="text-2xl text-accent font-medium">July 25th, 2026</p>
              <p className="text-lg text-foreground/80 font-light">Time TBA</p>
            </div>

            <div className="flex items-start justify-center gap-2 text-muted-foreground text-sm mb-6">
              <MapPin className="w-4 h-4 mt-0.5 text-accent" />
              <div className="text-left">
                <p className="font-medium text-foreground">Ile Oba-Jesu</p>
                <p>12 Donwoods Crescent</p>
                <p>Whitby, ON, L1R 0N1</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=12+Donwoods+Crescent,+Whitby,+ON,+L1R+0N1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 rounded-full border border-accent text-accent hover:bg-accent hover:text-black transition-all text-sm font-medium"
            >
              VIEW LOCATION
            </a>
          </div>
        </div>

        {/* Important Notes */}
        <div className={`bg-black/40 rounded-lg p-8 md:p-10 mb-16 transition-all duration-700 delay-150 hover:bg-black/50 border border-accent/10 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertCircle className="w-6 h-6 text-accent" />
            <h3 className="text-2xl font-serif text-accent font-light">Important Notes</h3>
          </div>

          <div className="space-y-6 text-center">
            <p className="text-foreground font-medium italic text-lg max-w-2xl mx-auto">
              "Due to limited space, we kindly ask that ONLY those named on the e-invitation attend. Thank you for your understanding and we look forward to sharing our special moment with you."
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
              <div className="flex items-start gap-3 p-3 bg-background/20 rounded-lg">
                <span className="text-accent text-lg">🔒</span>
                <span className="text-foreground/90 text-sm">Strictly by invitation only</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-background/20 rounded-lg">
                <span className="text-accent text-lg">👥</span>
                <span className="text-foreground/90 text-sm">No plus ones except where stated</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-background/20 rounded-lg">
                <span className="text-accent text-lg">📵</span>
                <span className="text-foreground/90 text-sm">No posting pictures online</span>
              </div>
              <div className="flex items-start gap-3 p-3 bg-background/20 rounded-lg">
                <span className="text-accent text-lg">🎥</span>
                <span className="text-foreground/90 text-sm">No recordings during ceremonies</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 p-4 bg-accent/10 rounded-lg border border-accent/20 max-w-md mx-auto">
              <Plane className="w-5 h-5 text-accent" />
              <span className="text-foreground/90 text-sm font-medium">Book your flights early (World Cup season)</span>
            </div>
          </div>
        </div>

        {/* Hotel booking section */}
        <div className={`bg-black/40 rounded-lg p-8 md:p-10 mb-16 text-center transition-all duration-700 delay-200 hover:bg-black/50 border border-accent/10 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-2xl font-serif text-accent mb-4 font-light">Travel & Accommodation</h3>
          <p className="text-foreground mb-4 font-light">
            Hotel details will be shared soon.
          </p>
          <p className="text-muted-foreground text-sm mb-6">
            Booking Deadline: March 31st, 2026
          </p>
          <button className="px-8 py-2 rounded-full bg-accent/50 text-black font-medium text-sm cursor-not-allowed">
            COMING SOON
          </button>
        </div>

        {/* Countdown */}
        <div className={`bg-black/40 rounded-lg p-8 md:p-10 transition-all duration-700 delay-400 hover:bg-black/50 border border-accent/10 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-center text-xl font-serif text-accent mb-4 font-light">Counting Down To Our Special Day</h3>
          <CountdownTimer />
        </div>
      </div>
    </section>
  )
}

