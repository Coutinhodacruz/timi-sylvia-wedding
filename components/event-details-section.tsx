'use client'

import { MapPin, Clock, AlertCircle, Plane } from 'lucide-react'
import CountdownTimer from './countdown-timer'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function EventDetailsSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.05, triggerOnce: true })

  return (
    <section
      ref={ref}
      id="event-details"
      className="py-12 md:py-20 bg-background px-4 md:px-8 relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-blush-pink/10 rounded-full blur-3xl -ml-48 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-serif mb-6 font-light leading-tight text-burgundy">
            <span className="bg-clip-text text-burgundy bg-linear-to-r from-burgundy via-rose-gold to-burgundy animate-gradient-x">
              By the Grace of God
            </span>
          </h2>
          <p className="text-burgundy/70 font-light max-w-2xl mx-auto text-lg leading-relaxed">
            We are pleased to announce the celebration of our union to our family and friends.
            <br />
            We request the honor of your presence on our special day.
          </p>
        </div>

        {/* Events grid */}
        <div className={`grid md:grid-cols-2 gap-8 md:gap-12 mb-16 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Joining Ceremony */}
          <div className="text-center group bg-white p-8 rounded-3xl shadow-xl shadow-burgundy/5 transition-all duration-500 border border-blush-pink/50 hover:border-rose-gold/50 hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-burgundy/5 flex items-center justify-center group-hover:bg-burgundy/10 transition-all border border-burgundy/10 group-hover:scale-110 rotate-3 group-hover:rotate-0">
              <span className="text-3xl">💍</span>
            </div>
            <h3 className="text-2xl font-serif text-burgundy group-hover:text-rose-gold transition-colors mb-2 font-medium tracking-wide">Joining Ceremony</h3>
            <p className="text-xs text-rose-gold mb-6 tracking-[0.2em] uppercase font-bold">Solemnization of Vows</p>

            <div className="space-y-3 mb-8 py-6 border-y border-blush-pink/30">
              <p className="text-3xl font-serif text-burgundy font-light">Friday</p>
              <p className="text-2xl text-rose-gold font-medium">July 24th, 2026</p>
              <p className="text-lg text-burgundy/60 font-light italic">Time TBA</p>
            </div>

            <div className="flex items-start justify-center gap-2 text-burgundy/70 text-sm mb-8">
              <MapPin className="w-4 h-4 mt-0.5 text-rose-gold" />
              <div className="text-left">
                <p className="font-semibold text-burgundy">Private Venue</p>
                <p>N/A</p>
              </div>
            </div>

            <button
              disabled
              className="inline-block px-8 py-3 rounded-full border border-burgundy/20 text-burgundy/40 cursor-not-allowed text-xs tracking-widest font-bold uppercase"
            >
              LOCATION RESTRICTED
            </button>
          </div>

          {/* Traditional Ceremony */}
          <div className="text-center group bg-burgundy p-8 rounded-3xl shadow-xl shadow-burgundy/20 transition-all duration-500 border border-rose-gold/20 hover:border-rose-gold/50 hover:-translate-y-2">
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all group-hover:scale-110 -rotate-3 group-hover:rotate-0">
              <span className="text-3xl">🪘</span>
            </div>
            <h3 className="text-2xl font-serif text-blush-pink group-hover:text-rose-gold transition-colors mb-2 font-medium tracking-wide">Traditional Ceremony</h3>
            <p className="text-xs text-rose-gold/80 mb-6 tracking-[0.2em] uppercase font-bold">Celebration of Culture</p>

            <div className="space-y-3 mb-8 py-6 border-y border-white/10">
              <p className="text-3xl font-serif text-burgundy font-light">Saturday</p>
              <p className="text-2xl text-rose-gold font-medium">July 25th, 2026</p>
              <p className="text-lg text-burgundy font-light italic">Time TBA</p>
            </div>

            <div className="flex items-start justify-center gap-2 text-burgundy text-sm mb-8">
              <MapPin className="w-4 h-4 mt-0.5 text-rose-gold" />
              <div className="text-left">
                <p className="font-semibold text-burgundy">Ile Oba-Jesu</p>
                <p>12 Donwoods Crescent</p>
                <p>Whitby, ON, L1R 0N1</p>
              </div>
            </div>

            <a
              href="https://maps.google.com/?q=12+Donwoods+Crescent,+Whitby,+ON,+L1R+0N1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full bg-rose-gold text-burgundy hover:bg-white hover:text-burgundy transition-all text-xs tracking-widest font-bold uppercase shadow-lg shadow-rose-gold/20"
            >
              VIEW LOCATION
            </a>
          </div>
        </div>

        {/* Important Notes */}
        <div className={`bg-white rounded-3xl p-8 md:p-12 mb-16 transition-all duration-700 delay-150 border border-blush-pink shadow-xl shadow-burgundy/5 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="flex flex-col items-center text-center mb-10">
            <div className="w-12 h-12 bg-rose-gold/10 rounded-full flex items-center justify-center mb-4">
              <AlertCircle className="w-6 h-6 text-rose-gold" />
            </div>
            <h3 className="text-3xl font-serif text-burgundy font-light">Important Notes</h3>
            <div className="h-px w-16 bg-rose-gold/30 mt-4" />
          </div>

          <div className="space-y-8">
            <p className="text-burgundy font-medium italic text-xl max-w-2xl mx-auto text-center leading-relaxed">
              Due to limited space, we kindly ask that ONLY those named on the e-invitation attend. Thank you for your understanding.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                { icon: <span className="text-xl">🔒</span>, text: "Strictly by invitation only" },
                { icon: <span className="text-xl">👥</span>, text: "No plus ones except where stated" },
                { icon: <span className="text-xl">📵</span>, text: "No posting pictures online" },
                { icon: <span className="text-xl">🎥</span>, text: "No recordings during ceremonies" },
                { icon: <Plane className="w-5 h-5 text-rose-gold" />, text: "Book your flights early (World Cup season)" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-5 bg-blush-pink/10 rounded-2xl border border-blush-pink/20 hover:bg-blush-pink/20 transition-all group">
                  <div className="shrink-0 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-burgundy/80 text-sm md:text-base font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hotel booking section */}
        <div className={`bg-linear-to-br from-burgundy to-[#5A1422] rounded-3xl p-8 md:p-12 mb-16 text-center transition-all duration-700 delay-200 border border-rose-gold/20 shadow-2xl ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-3xl font-serif text-rose-gold mb-4 font-light">Travel & Accommodation</h3>
          <p className="text-white/90 mb-6 font-light text-lg">
            Hotel details will be shared soon.
          </p>
          <div className="inline-block px-6 py-2 bg-white/10 rounded-full border border-white/20 mb-8">
            <p className="text-blush-pink text-xs tracking-widest font-bold uppercase">
              Booking Deadline: March 31st, 2026
            </p>
          </div>
          <br />
          <button className="px-10 py-4 rounded-full bg-rose-gold text-white font-bold tracking-widest text-xs uppercase cursor-not-allowed opacity-50 shadow-xl shadow-rose-gold/20">
            COMING SOON
          </button>
        </div>

        {/* Countdown */}
        {/* <div className={`bg-white rounded-3xl p-8 md:p-12 transition-all duration-700 delay-400 border border-blush-pink shadow-xl shadow-burgundy/5 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-center text-xl font-serif text-burgundy mb-8 tracking-widest uppercase font-bold">Counting Down</h3>
          <CountdownTimer />
        </div> */}
      </div>
    </section>
  )
}

