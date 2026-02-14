'use client'

import { Heart, MessageCircle, Flower2, Sparkles } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function ClosingSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.05, triggerOnce: true })

  return (
    <section
      ref={ref}
      id="closing"
      className="py-24 md:py-40 bg-background px-4 md:px-8 text-center relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-transparent via-blush-pink/5 to-transparent pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-rose-gold/[0.03] rounded-full blur-3xl pointer-events-none" />

      {/* Floating hearts background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-rose-gold/10 animate-float-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 6}s`,
            }}
            size={16 + Math.random() * 24}
            fill="currentColor"
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Quote section */}
        {/* Floral Bed of Love */}
        <div className={`relative mb-24 py-24 rounded-[3rem] bg-linear-to-br from-rose-gold/10 via-pink-100/30 to-rose-gold/10 overflow-hidden border border-white/50 shadow-2xl shadow-rose-gold/10 transition-all duration-1000 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          {/* Animated Background Flowers */}
          {[...Array(15)].map((_, i) => (
            <div
              key={`flower-${i}`}
              className="absolute animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`,
                opacity: 0.1 + Math.random() * 0.1,
                transform: `rotate(${Math.random() * 360}deg) scale(${0.5 + Math.random()})`
              }}
            >
              <Flower2
                size={40 + Math.random() * 60}
                className="text-rose-gold"
                strokeWidth={1}
              />
            </div>
          ))}

          {/* Central Animated Element */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-rose-gold/30 blur-3xl rounded-full scale-150 animate-pulse" />
              <div className="relative animate-float-heart">
                <Heart
                  size={120}
                  className="text-rose-gold/80 fill-rose-gold/20"
                  strokeWidth={0.5}
                />
                <Sparkles
                  className="absolute -top-4 -right-4 text-rose-gold animate-bounce"
                  size={32}
                />
                <Sparkles
                  className="absolute -bottom-2 -left-4 text-rose-gold animate-bounce"
                  style={{ animationDelay: '1s' }}
                  size={24}
                />
              </div>
            </div>

            <h2 className="text-5xl md:text-7xl font-serif text-burgundy/80 font-light italic mb-2 tracking-wide">
              Love
            </h2>
            <div className="h-px w-24 bg-rose-gold/50 my-4" />
            <div className="flex gap-3 text-rose-gold/60">
              <Flower2 size={24} className="animate-spin" style={{ animationDuration: '10s' }} />
              <Flower2 size={24} className="animate-spin" style={{ animationDuration: '15s' }} />
              <Flower2 size={24} className="animate-spin" style={{ animationDuration: '12s' }} />
            </div>
          </div>
        </div>

        {/* Hashtag section */}
        <div className={`relative bg-burgundy rounded-[3rem] p-10 md:p-16 mb-24 overflow-hidden transition-all duration-1000 delay-500 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95 shadow-2xl shadow-burgundy/20'}`}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-gold/10 rounded-full blur-3xl -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -ml-32 -mb-32" />

          <div className="relative z-10">
            <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-rose-gold mb-6">Our Celebration</h3>
            <p className="text-burgundy font-light mb-10 max-w-xl mx-auto text-lg italic font-serif">
              While we kindly ask that you refrain from sharing photos on social media, we'd love for you to be present in the moment with us.
            </p>
            <div className="inline-block px-10 py-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 mb-8 transform hover:scale-105 transition-transform duration-500">
              <p className="text-4xl md:text-5xl text-rose-gold font-serif font-light tracking-[0.2em]">
                #TSApproved
              </p>
            </div>
            <p className="text-white/40 text-xs tracking-widest uppercase font-bold">
              June 1st, 2026 • Whitby, Ontario
            </p>
          </div>
        </div>

        {/* See you section */}
        <div className={`transition-all duration-1000 delay-700 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-serif text-burgundy mb-10 font-light">
            We can't wait to celebrate <span className="text-rose-gold">with you</span>
          </h2>

          {/* Contact */}
          <div className="flex justify-center mb-16">
            <a
              href="mailto:tsapprovedenquiries@gmail.com"
              className="group relative inline-flex items-center gap-3 px-10 py-4 bg-blush-pink/10 border border-blush-pink/30 rounded-full hover:bg-blush-pink/20 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-linear-to-r from-rose-gold/20 to-transparent -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
              <MessageCircle className="w-5 h-5 text-rose-gold relative z-10" />
              <span className="text-[10px] tracking-[0.2em] font-bold uppercase text-rose-gold relative z-10">Contact Us</span>
            </a>
          </div>

          {/* Footer text */}
          <div className="flex items-center justify-center gap-4 text-burgundy/30 uppercase tracking-[0.3em] text-[10px] font-bold">
            <div className="h-px w-8 bg-burgundy/10" />
            <span>Made with ♥ for Sylvia & Timi</span>
            <div className="h-px w-8 bg-burgundy/10" />
          </div>
        </div>
      </div>
    </section>
  )
}

