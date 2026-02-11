'use client'

import { Heart, MessageCircle } from 'lucide-react'
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
        <div className={`mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <h2 className="text-4xl md:text-6xl font-serif text-burgundy mb-10 font-light tracking-tight">
            Our Journey <span className="text-rose-gold italic">Continues</span>
          </h2>

          <div className="relative inline-block px-12 py-4">
            <div className="absolute top-0 left-0 text-rose-gold/20 text-6xl font-serif">"</div>
            <p className="text-xl md:text-3xl text-burgundy/80 font-serif italic leading-relaxed max-w-2xl mx-auto">
              I don't want the heavens or the shooting stars. I don't want no gemstones or shining golds. All I want is a steady hand. A kind soul. Within you.
            </p>
            <div className="absolute bottom-0 right-0 text-rose-gold/20 text-6xl font-serif">"</div>
          </div>

          <p className="text-rose-gold font-bold tracking-[0.3em] uppercase text-xs mt-8">
            – Sylvia & Timi
          </p>
        </div>

        {/* Three values */}
        <div className={`grid md:grid-cols-3 gap-8 md:gap-12 mb-24 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {[
            { icon: "✨", title: "Dream", desc: "Building a future filled with hope and shared vision.", delay: "0s" },
            { icon: <Heart className="w-7 h-7 text-rose-gold" />, title: "Love", desc: "Unwavering, unconditional, and eternally blessed.", delay: "0.2s" },
            { icon: "🤝", title: "Promises", desc: "Kept and renewed, through every season of life.", delay: "0.4s" }
          ].map((item, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-4xl bg-white border border-blush-pink/50 hover:border-rose-gold transition-all duration-500 shadow-xl shadow-burgundy/5 hover:-translate-y-2"
              style={{ transitionDelay: item.delay }}
            >
              <div className="w-14 h-14 mx-auto rounded-2xl bg-blush-pink/20 flex items-center justify-center mb-6 border border-blush-pink/30 group-hover:scale-110 transition-transform duration-500">
                <span className="text-2xl">{item.icon}</span>
              </div>
              <h3 className="text-2xl font-serif text-burgundy mb-4 font-medium transition-colors group-hover:text-rose-gold">{item.title}</h3>
              <p className="text-burgundy/60 font-light text-sm leading-relaxed font-serif">
                {item.desc}
              </p>
            </div>
          ))}
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

