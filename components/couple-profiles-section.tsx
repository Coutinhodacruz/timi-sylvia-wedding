'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function CoupleProfilesSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.05, triggerOnce: true })

  return (
    <section
      ref={ref}
      id="couple"
      className="py-20 md:py-32 bg-background px-4 md:px-8 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-rose-gold/5 rounded-full blur-3xl -ml-32" />
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-blush-pink/10 rounded-full blur-3xl -mr-32" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section title */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-5xl font-serif text-burgundy mb-4 font-light">
            The Couple
          </h2>
          <p className="text-burgundy/50 font-light italic font-serif">
            Two hearts, one love, forever blessed
          </p>
          <div className="h-px w-16 bg-rose-gold/30 mx-auto mt-6" />
        </div>

        {/* Profiles grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          {/* Groom profile */}
          <div className={`text-center transition-all duration-1000 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative mb-10 w-60 h-60 mx-auto group">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-rose-gold/20 to-transparent -rotate-45 group-hover:rotate-0 transition-transform duration-700" />
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-rose-gold/20 transition-all">
                <img
                  src="/gallery-2.jpg"
                  alt="Timi Adenipekun"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-burgundy text-white px-6 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold shadow-lg">
                The Groom
              </div>
            </div>
            <h3 className="text-3xl font-serif text-burgundy mb-4 font-medium">Timi Adenipekun</h3>
            <div className="space-y-1 text-sm text-burgundy/60 italic font-serif">
              <p>Son of</p>
              <p className="text-burgundy font-medium not-italic font-sans text-xs uppercase tracking-wider">
                Pastor Olubenga Joshua & Olufunke Ruth Adenipekun
              </p>
            </div>
          </div>

          {/* Bride profile */}
          <div className={`text-center transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative mb-10 w-60 h-60 mx-auto group">
              <div className="absolute inset-0 rounded-full bg-linear-to-br from-rose-gold/20 to-transparent rotate-45 group-hover:rotate-0 transition-transform duration-700" />
              <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:shadow-rose-gold/20 transition-all">
                <img
                  src="/gallery-4.jpg"
                  alt="Sylvia Okonofua"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-burgundy text-white px-6 py-1.5 rounded-full text-[10px] tracking-[0.2em] uppercase font-bold shadow-lg">
                The Bride
              </div>
            </div>
            <h3 className="text-3xl font-serif text-burgundy mb-4 font-medium">Sylvia Okonofua</h3>
            <div className="space-y-1 text-sm text-burgundy/60 italic font-serif">
              <p>Daughter of</p>
              <p className="text-burgundy font-medium not-italic font-sans text-xs uppercase tracking-wider">
                Sylvester (Late) & Avwerosuo Okonofua
              </p>
            </div>
          </div>
        </div>

        {/* Union text */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-6 mb-6">
            <div className="h-px w-20 bg-linear-to-r from-transparent to-rose-gold/50" />
            <span className="text-rose-gold text-2xl animate-pulse">♥</span>
            <div className="h-px w-20 bg-linear-to-l from-transparent to-rose-gold/50" />
          </div>
          <p className="text-burgundy/40 font-light italic font-serif text-lg">
            United in love, blessed by God
          </p>
        </div>
      </div>
    </section>
  )
}

