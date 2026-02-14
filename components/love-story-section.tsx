'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function LoveStorySection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.05, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="py-12 md:py-20 bg-linear-to-br from-green-200 via-yellow-50 to-pink-200 px-4 md:px-8 relative overflow-hidden"
    >
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-rose-gold/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blush-pink/10 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header - Scripture as bridge */}
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block relative">
            <span className="absolute -top-4 -left-2 text-4xl text-rose-gold/30 font-serif">"</span>
            <p className="text-xl md:text-2xl text-burgundy/70 italic font-light px-6 font-serif">
              So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.
            </p>
            <span className="absolute -bottom-4 -right-2 text-4xl text-rose-gold/30 font-serif">"</span>
          </div>
          <p className="text-xs text-rose-gold mt-6 tracking-[0.3em] uppercase text-center font-bold">— Matthew 19:6 —</p>
          <div className="h-px w-24 bg-linear-to-r from-transparent via-rose-gold/50 to-transparent mx-auto mt-8" />
        </div>

        {/* Story title */}
        <h2 className={`text-4xl md:text-5xl font-serif text-burgundy mb-10 font-light text-center transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="bg-clip-text text-transparent bg-linear-to-r from-burgundy via-rose-gold to-burgundy animate-gradient-x">
            Our Love Story
          </span>
        </h2>

        {/* Story content */}
        <div className={`space-y-6 text-burgundy/90 leading-relaxed text-lg font-light transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-rose-gold first-letter:mr-3 first-letter:float-left">
            We met at a birthday get-together, not knowing it would be the beginning of our love story. Call it fate, call it "love at first sight," or call it two people realizing they had finally found their soulmate.
          </p>

          <p>
            Since that first spark, we've upgraded from birthday party guests to travelers—and world-class couch potatoes 😅. Whether we're exploring a new city or debating what to watch on Netflix, life has been a whole lot more fun since that one Saturday night.
          </p>

          <p>
            Through laughter and challenges, supporting each other's dreams and building a life together, we've learned that true love is more than a feeling—it's a daily choice to cherish, honor, and stand beside one another. Every moment has been a blessing, every lesson a gift.
          </p>

          <p>
            As we celebrate our union, we reflect with gratitude on the journey we've walked hand in hand—a story of growth, resilience, and unwavering commitment to one another and to God.
          </p>

          <div className="text-center mt-16 p-8 border border-blush-pink/30 rounded-2xl bg-blush-pink/5 backdrop-blur-sm">
            <p className="italic text-burgundy/90 text-2xl font-serif mb-4">
              Looking for the full tea? You know where to find us 😉
            </p>
            <div className="flex flex-col items-center">
              <div className="h-px w-12 bg-rose-gold/30 mb-4" />
              <span className="font-sans text-sm tracking-widest text-burgundy/60 uppercase font-medium">With love,</span>
              <span className="font-serif text-2xl text-rose-gold mt-1">Timi & Sylvia</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
