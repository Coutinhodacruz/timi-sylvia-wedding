'use client'

import { Instagram, Facebook, MessageCircle } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function ClosingSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

  return (
    <section 
      ref={ref}
      className="py-20 md:py-32 bg-black/60 px-4 md:px-8 text-center"
    >
      <div className="max-w-3xl mx-auto">
        {/* Quote section */}
        <h2 className={`text-4xl md:text-5xl font-serif text-foreground mb-8 font-light transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          Our Journey Starts Here
        </h2>

        <p className={`text-xl md:text-2xl text-foreground/90 font-light italic mb-4 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          I don't want the heavens or the shooting stars. I don't want no gemstones or shining golds. All I want is a steady hand. A kind soul. Within you.
        </p>

        <p className={`text-accent font-light mb-16 transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          – Sylvia & Timi
        </p>

        {/* Three values */}
        <div className={`grid md:grid-cols-3 gap-8 md:gap-10 mb-16 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="space-y-3 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-serif text-accent font-light">Dream</h3>
            <p className="text-muted-foreground font-light text-sm">
              Together, building a future filled with hope and vision
            </p>
          </div>
          <div className="space-y-3 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-serif text-accent font-light">Love</h3>
            <p className="text-muted-foreground font-light text-sm">
              Unwavering, unconditional, and eternally blessed
            </p>
          </div>
          <div className="space-y-3 hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-serif text-accent font-light">Promises</h3>
            <p className="text-muted-foreground font-light text-sm">
              Kept and renewed, through every season of life
            </p>
          </div>
        </div>

        {/* Live Moment section */}
        <div className="bg-background/50 rounded-lg p-8 mb-16">
          <h3 className="text-2xl font-serif text-accent mb-4 font-light">Live Moment</h3>
          <p className="text-foreground/90 font-light mb-6">
            Help us capture the best moment in our vow renewal day with the following hashtag in your social media post:
          </p>
          <p className="text-3xl text-accent font-serif font-light tracking-widest">
            #TP2026
          </p>
        </div>

        {/* See you section */}
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-12 font-light">
          See you at our big day!
        </h2>

        {/* Social links */}
        <div className="flex justify-center gap-8 mb-12">
          <a
            href="#"
            className="text-accent hover:text-accent/80 transition-colors"
            aria-label="Instagram"
          >
            <Instagram className="w-8 h-8" />
          </a>
          <a
            href="#"
            className="text-accent hover:text-accent/80 transition-colors"
            aria-label="Facebook"
          >
            <Facebook className="w-8 h-8" />
          </a>
          <a
            href="#"
            className="text-accent hover:text-accent/80 transition-colors"
            aria-label="WhatsApp"
          >
            <MessageCircle className="w-8 h-8" />
          </a>
        </div>

        {/* Footer text */}
        <p className="text-xs text-muted-foreground/70 font-light">
          Backsound: All My Life by K-Ci & JoJo
        </p>
      </div>
    </section>
  )
}
