'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function LoveStorySection() {
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-background px-4 md:px-8"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header - Scripture as bridge */}
        <div className={`text-center mb-12 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block relative">
            <span className="absolute -top-4 -left-2 text-4xl text-accent/20 font-serif">"</span>
            <p className="text-xl md:text-2xl text-muted-foreground italic font-light px-6">
              So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate.
            </p>
            <span className="absolute -bottom-4 -right-2 text-4xl text-accent/20 font-serif">"</span>
          </div>
          <p className="text-sm text-accent/80 mt-4 tracking-widest uppercase text-center">— Matthew 19:6 —</p>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-accent/50 to-transparent mx-auto mt-8" />
        </div>

        {/* Story title */}
        <h2 className={`text-4xl md:text-5xl font-serif text-accent mb-10 font-light text-center transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent via-primary to-accent animate-gradient-x">
            Our Love Story
          </span>
        </h2>

        {/* Story content */}
        <div className={`space-y-6 text-foreground/90 leading-relaxed text-lg font-light transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p>
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

          <p className="italic text-accent/90 text-center mt-12 text-xl font-serif">
            Looking for the full tea? You know where to find us 😉
            <span className="block mt-2 not-italic font-sans text-base text-muted-foreground">With love,<br />T & S</span>
          </p>
        </div>
      </div>
    </section>
  )
}
