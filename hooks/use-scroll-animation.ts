'use client'

import { useEffect, useRef, useState } from 'react'

export function useScrollAnimation(options?: {
  threshold?: number
  triggerOnce?: boolean
}) {
  const ref = useRef<HTMLElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          if (options?.triggerOnce && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!options?.triggerOnce) {
          setIsInView(false)
        }
      },
      {
        threshold: options?.threshold ?? 0.2,
        rootMargin: '0px 0px -100px 0px',
      }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return { ref, isInView }
}
