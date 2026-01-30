'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

  const images = [
    { src: '/gallery-1.jpg', alt: 'Wedding ceremony' },
    { src: '/gallery-2.jpg', alt: 'First dance' },
    { src: '/gallery-3.jpg', alt: 'Reception details' },
    { src: '/gallery-4.jpg', alt: 'Bride portrait' },
  ]

  return (
    <section
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className={`text-4xl md:text-5xl font-serif text-primary mb-4 text-center text-balance transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          Moments & Memories
        </h2>
        <div className={`h-1 w-20 bg-accent mx-auto mb-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-4 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`relative h-80 overflow-hidden rounded-lg cursor-pointer group transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{
                animationDelay: isInView ? `${idx * 0.1}s` : '0s',
              }}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
                className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors"
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
