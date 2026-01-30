'use client'

import { Instagram } from 'lucide-react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function CoupleProfilesSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-black/40 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <h2 className={`text-center text-3xl md:text-4xl font-serif text-accent mb-16 font-light transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          Husband and Wife
        </h2>

        {/* Profiles grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Groom profile */}
          <div className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="mb-8 w-48 h-48 mx-auto rounded-full overflow-hidden border border-accent/30">
              <img
                src="/gallery-2.jpg"
                alt="Timi Adenipekun"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif text-accent mb-2 font-light">Timi</h3>
            <p className="text-xl font-serif text-foreground mb-6 font-light">
              Timi Adenipekun
            </p>
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              <p>Son of</p>
              <p className="text-foreground font-medium">Pastor Olubenga Joshua &amp; Olufunke Ruth Adenipekun</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
              aria-label="Pius Instagram"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">Instagram</span>
            </a>
          </div>

          {/* Bride profile */}
          <div className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="mb-8 w-48 h-48 mx-auto rounded-full overflow-hidden border border-accent/30">
              <img
                src="/gallery-4.jpg"
                alt="Sylvia Okonofua"
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-serif text-accent mb-2 font-light">Sylvia</h3>
            <p className="text-xl font-serif text-foreground mb-6 font-light">
              Sylvia Okonofua
            </p>
            <div className="space-y-2 text-sm text-muted-foreground mb-6">
              <p>Daughter of</p>
              <p className="text-foreground font-medium">Sylvester (Late) &amp; Avwerosuo Okonofua</p>
            </div>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors"
              aria-label="Olutosin Instagram"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
