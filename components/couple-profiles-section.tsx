'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function CoupleProfilesSection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      ref={ref}
      id="couple"
      className="py-20 md:py-32 bg-black/40 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <h2 className={`text-center text-3xl md:text-4xl font-serif text-accent mb-4 font-light transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          The Couple
        </h2>
        <p className={`text-center text-[#F5D5D5] font-light mb-16 transition-all duration-700 delay-100 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          Two hearts, one love, forever blessed
        </p>

        {/* Profiles grid */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Groom profile */}
          <div className={`text-center transition-all duration-700 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative mb-8 w-52 h-52 mx-auto group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-transparent -rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-accent/30 group-hover:border-accent/50 transition-all shadow-lg group-hover:shadow-accent/20">
                <img
                  src="/gallery-2.jpg"
                  alt="Timi Adenipekun"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <h3 className="text-2xl font-serif text-accent mb-2 font-light">The Groom</h3>
            <p className="text-xl font-serif text-[#FAF6F0] mb-6 font-light">
              Timi Adenipekun
            </p>
            <div className="space-y-2 text-sm text-[#F5D5D5]">
              <p>Son of</p>
              <p className="text-[#FAF6F0] font-medium">
                Pastor Olubenga Joshua & Olufunke Ruth Adenipekun
              </p>
            </div>
          </div>

          {/* Bride profile */}
          <div className={`text-center transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative mb-8 w-52 h-52 mx-auto group">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/30 to-transparent rotate-45 group-hover:rotate-0 transition-transform duration-500" />
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-accent/30 group-hover:border-accent/50 transition-all shadow-lg group-hover:shadow-accent/20">
                <img
                  src="/gallery-4.jpg"
                  alt="Sylvia Okonofua"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>
            <h3 className="text-2xl font-serif text-accent mb-2 font-light">The Bride</h3>
            <p className="text-xl font-serif text-[#FAF6F0] mb-6 font-light">
              Sylvia Okonofua
            </p>
            <div className="space-y-2 text-sm text-[#F5D5D5]">
              <p>Daughter of</p>
              <p className="text-[#FAF6F0] font-medium">
                Sylvester (Late) & Avwerosuo Okonofua
              </p>
            </div>
          </div>
        </div>

        {/* Union text */}
        <div className={`text-center mt-16 transition-all duration-700 delay-300 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-accent/50" />
            <span className="text-accent text-2xl">♥</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-accent/50" />
          </div>
          <p className="text-[#F5D5D5] font-light italic">
            United in love, blessed by God
          </p>
        </div>
      </div>
    </section>
  )
}

