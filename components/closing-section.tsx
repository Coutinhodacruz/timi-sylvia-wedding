'use client'

import { Heart, MessageCircle } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function ClosingSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      ref={ref}
      id="closing"
      className="py-20 md:py-32 bg-gradient-to-t from-black via-black/80 to-primary/20 px-4 md:px-8 text-center relative overflow-hidden"
    >
      {/* Floating hearts background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-primary/10 animate-float-heart"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`,
              fontSize: `${12 + Math.random() * 16}px`,
            }}
            size={20 + Math.random() * 20}
            fill="currentColor"
          />
        ))}
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        {/* Quote section */}
        <h2 className={`text-4xl md:text-5xl font-serif text-[#FAF6F0] mb-8 font-light transition-all duration-700 hover:scale-105 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Our Journey Continues
        </h2>

        <p className={`text-xl md:text-2xl text-[#F5D5D5] font-light italic mb-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          "I don't want the heavens or the shooting stars. I don't want no gemstones or shining golds. All I want is a steady hand. A kind soul. Within you."
        </p>

        <p className={`text-accent font-light mb-16 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          – Sylvia & Timi
        </p>

        {/* Three values */}
        <div className={`grid md:grid-cols-3 gap-8 md:gap-10 mb-16 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-3 hover:scale-105 transition-transform duration-300 p-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-2xl font-serif text-accent font-light">Dream</h3>
            <p className="text-[#F5D5D5] font-light text-sm">
              Together, building a future filled with hope and vision
            </p>
          </div>
          <div className="space-y-3 hover:scale-105 transition-transform duration-300 p-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-4">
              <Heart className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-serif text-accent font-light">Love</h3>
            <p className="text-[#F5D5D5] font-light text-sm">
              Unwavering, unconditional, and eternally blessed
            </p>
          </div>
          <div className="space-y-3 hover:scale-105 transition-transform duration-300 p-4">
            <div className="w-12 h-12 mx-auto rounded-full bg-accent/20 flex items-center justify-center mb-4">
              <span className="text-2xl">🤝</span>
            </div>
            <h3 className="text-2xl font-serif text-accent font-light">Promises</h3>
            <p className="text-[#F5D5D5] font-light text-sm">
              Kept and renewed, through every season of life
            </p>
          </div>
        </div>

        {/* Hashtag section (replacing social media) */}
        <div className={`bg-background/20 backdrop-blur-sm rounded-lg p-8 mb-16 border border-accent/20 transition-all duration-700 delay-400 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <h3 className="text-2xl font-serif text-accent mb-4 font-light">Our Celebration</h3>
          <p className="text-[#FAF6F0] font-light mb-6 max-w-xl mx-auto">
            While we kindly ask that you refrain from sharing photos on social media, we'd love for you to be present in the moment with us.
          </p>
          <p className="text-4xl text-accent font-serif font-light tracking-widest mb-4">
            #TSApproved
          </p>
          <p className="text-[#F5D5D5] text-sm font-light">
            July 24th & 25th, 2026 • Whitby, Ontario
          </p>
        </div>

        {/* See you section */}
        <h2 className={`text-3xl md:text-4xl font-serif text-[#FAF6F0] mb-8 font-light transition-all duration-700 delay-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          We can't wait to celebrate with you
        </h2>

        {/* Contact */}
        <div className={`flex justify-center mb-12 transition-all duration-700 delay-600 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <a
            href="mailto:tsapprovedenquiries@gmail.com"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors px-6 py-3 rounded-full border border-accent/30 hover:border-accent/50"
          >
            <MessageCircle className="w-5 h-5" />
            <span className="text-sm">Contact Us</span>
          </a>
        </div>

        {/* Footer text */}
        <p className="text-xs text-[#F5D5D5]/70 font-light">
          Made with ♥ for Sylvia & Timi
        </p>
      </div>
    </section>
  )
}

