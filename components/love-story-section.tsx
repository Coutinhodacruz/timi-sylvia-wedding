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
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-serif text-accent mb-6 font-light">
            We Found Love
          </h2>
          <p className="text-lg text-muted-foreground italic font-light">
            "So they are no longer two, but one flesh. Therefore what God has joined together, let no one separate."
          </p>
          <p className="text-sm text-muted-foreground/70 mt-2">(Matthew 19:6)</p>
        </div>

        {/* Story title */}
        <h3 className={`text-3xl font-serif text-foreground mb-8 font-light transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
          Our Love Story – How It All Began
        </h3>

        {/* Story content */}
        <div className={`space-y-6 text-foreground/90 leading-relaxed transition-all duration-700 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p>
            We met at a birthday get-together for free food and company (who doesn't like a free meal 😉), not knowing that was the beginning of a love story. Call it fate, call it "love at first sight," or call it two people realizing they finally found their soulmate.
          </p>

          <p>
            Since that first spark, we've upgraded from birthday party guests to travelers and world-class couch potatoes 😅. Whether we're exploring a new city or arguing over what to watch on Netflix, life has been a whole lot more fun since that one Saturday night...
          </p>

          <p>
            Through laughter and challenges, supporting each other's dreams and building a life together, we've learned that true love is more than a feeling—it's a daily choice to cherish, honor, and stand beside one another. Every moment has been a blessing, every lesson a gift, and every memory we've created together has strengthened our bond.
          </p>

          <p>
            As we celebrate the renewal of our vows, we reflect on the incredible journey we've walked hand in hand. We are grateful for every sunrise, every conversation, every sacrifice, and every unconditional moment of love. Our story is one of growth, resilience, and unwavering commitment to one another and to God.
          </p>

          <p className="italic text-accent/80">
            Looking for the full tea? You know where to find us 😉
          </p>
        </div>
      </div>
    </section>
  )
}
