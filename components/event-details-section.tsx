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
          <h2 className="text-3xl md:text-5xl font-serif mb-6 font-light leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-accent animate-gradient-x">
              By the Grace of God
            </span>
          </h2>
          <p className="text-muted-foreground font-light max-w-2xl mx-auto text-lg leading-relaxed">
            We are pleased to announce the celebration of our union to our family and friends.
            <br />
            We request the honor of your presence on our special day.
          </p>
        </div>

        {/* Events grid */}
        <div className={`grid md:grid-cols-2 gap-8 md:gap-12 mb-16 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Joining Ceremony - Visual variant: Darker bg, gold border */}
          <div className="text-center group bg-gradient-to-b from-black/60 to-black/40 p-8 rounded-lg transition-all duration-300 border border-accent/20 hover:border-primary/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-primary/20 transition-all border border-accent/20 group-hover:scale-110">
              <Clock className="w-8 h-8 text-accent group-hover:text-primary transition-colors" />
            </div>
            <h3 className="text-2xl font-serif text-accent group-hover:text-primary transition-colors mb-2 font-light tracking-wide">Joining Ceremony</h3>
            <p className="text-sm text-[#F5D5D5] mb-6 tracking-widest uppercase text-xs">Solemnization of Vows</p>

            <div className="space-y-3 mb-8">
              <p className="text-3xl font-serif text-[#FAF6F0] font-light">Thursday</p>
              <p className="text-2xl text-accent font-medium">July 24th, 2026</p>
              <p className="text-lg text-[#FAF6F0]/80 font-light">Time TBA</p>
            </div>

            <div className="flex items-start justify-center gap-2 text-[#F5D5D5] text-sm mb-6">
              <MapPin className="w-4 h-4 mt-0.5 text-accent" />
              <div className="text-left">
                <p className="font-medium text-[#FAF6F0]">Private Venue</p>
                <p>N/A</p>
              </div>
            </div>

            <button
              disabled
              className="inline-block px-6 py-2 rounded-full border border-accent/30 text-accent/50 cursor-not-allowed text-sm font-medium"
            >
              LOCATON RESTRICTED
            </button>
          </div>

          {/* Traditional Ceremony - Visual variant: Lighter overlay, solid button */}
          <div className="text-center group bg-black/40 hover:bg-black/50 p-8 rounded-lg transition-all duration-300 border border-accent/10 hover:border-primary/50 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-primary/20 transition-all group-hover:scale-110">
              <span className="text-2xl group-hover:rotate-12 transition-transform">💍</span>
            </div>
            <h3 className="text-2xl font-serif text-accent group-hover:text-primary transition-colors mb-2 font-light tracking-wide">Traditional Ceremony</h3>
            <p className="text-sm text-[#F5D5D5] mb-6 tracking-widest uppercase text-xs">Celebration of Culture</p>

            <div className="space-y-3 mb-8">
              <p className="text-3xl font-serif text-[#FAF6F0] font-light">Friday</p>
              <p className="text-2xl text-accent font-medium">July 25th, 2026</p>
              <p className="text-lg text-[#FAF6F0]/80 font-light">Time TBA</p>
            </div>

            <div className="flex items-start justify-center gap-2 text-[#F5D5D5] text-sm mb-6">
              <MapPin className="w-4 h-4 mt-0.5 text-accent" />
              <div className="text-left">
                <p className="font-medium text-[#FAF6F0]">Ile Oba-Jesu</p>
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
            <p className="text-[#FAF6F0] font-medium italic text-lg max-w-2xl mx-auto">
              "Due to limited space, we kindly ask that ONLY those named on the e-invitation attend. Thank you for your understanding and we look forward to sharing our special moment with you."
            </p>

            <div className="space-y-4 max-w-xl mx-auto">
              {[
                { icon: <span className="text-xl">🔒</span>, text: "Strictly by invitation only" },
                { icon: <span className="text-xl">👥</span>, text: "No plus ones except where stated" },
                { icon: <span className="text-xl">📵</span>, text: "No posting pictures online" },
                { icon: <span className="text-xl">🎥</span>, text: "No recordings during ceremonies" },
                { icon: <Plane className="w-5 h-5 text-accent" />, text: "Book your flights early (World Cup season)" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-4 bg-background/20 rounded-lg border border-accent/10 hover:bg-background/30 transition-colors text-left">
                  <div className="flex-shrink-0 w-8 flex justify-center text-accent">
                    {item.icon}
                  </div>
                  <span className="text-[#FAF6F0]/90 text-sm md:text-base font-light">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hotel booking section */}
        <div className={`bg-black/40 rounded-lg p-8 md:p-10 mb-16 text-center transition-all duration-700 delay-200 hover:bg-black/50 border border-accent/10 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-2xl font-serif text-accent mb-4 font-light">Travel & Accommodation</h3>
          <p className="text-[#FAF6F0] mb-4 font-light">
            Hotel details will be shared soon.
          </p>
          <p className="text-[#F5D5D5] text-sm mb-6">
            Booking Deadline: March 31st, 2026
          </p>
          <button className="px-8 py-2 rounded-full bg-accent/50 text-black font-medium text-sm cursor-not-allowed">
            COMING SOON
          </button>
        </div>

        {/* Countdown */}
        <div className={`bg-black/40 rounded-lg p-4 md:p-10 transition-all duration-700 delay-400 hover:bg-black/50 border border-accent/10 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-center text-xl font-serif text-accent mb-4 font-light">Counting Down To Our Special Day</h3>
          <CountdownTimer />
        </div>
      </div>
    </section>
  )
}

