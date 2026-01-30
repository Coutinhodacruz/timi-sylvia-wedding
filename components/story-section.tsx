'use client'

import { useEffect, useState } from 'react'

export default function StorySection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('story')
    if (element) {
      observer.observe(element)
    }

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [])

  return (
    <section
      id="story"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-center text-balance">
            Our Story
          </h2>
          <div className="h-1 w-20 bg-accent mx-auto mb-12" />

          <div className="space-y-6 text-foreground/80 text-lg leading-relaxed">
            <p>
              Sarah and Michael's love story began on a crisp autumn morning at a local coffee shop. What started as a casual conversation over lattes blossomed into a connection that neither of them could deny. From that first meeting, they knew they had found something special.
            </p>

            <p>
              For three wonderful years, they've shared countless adventures, quiet moments, and dreams for the future. Whether traveling to new cities, cooking dinner together, or simply enjoying each other's company, every moment has reinforced their deep commitment to one another.
            </p>

            <p>
              On a starlit evening by the seaside, Michael asked Sarah to be his wife. With tears of joy and an emphatic yes, she accepted the ring and the promise of forever. Now, they're thrilled to celebrate this milestone with the people who have supported and inspired their journey.
            </p>

            <p>
              We invite you to be part of this momentous occasion, as Sarah and Michael take the next chapter of their love story together.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
