'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { X, Heart } from 'lucide-react'

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [likedImages, setLikedImages] = useState<Set<number>>(new Set())
  const { ref, isInView } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })

  const images = [
    { src: '/gallery-pre-1.png', alt: 'Sylvia & Timi - Artistic Portrait', caption: 'Love in Focus' },
    { src: '/gallery-pre-2.png', alt: 'Sylvia & Timi - Close Portrait', caption: 'Intimacy' },
    { src: '/gallery-pre-3.png', alt: 'Sylvia & Timi - Smiling Portrait', caption: 'Radiant Joy' },
    { src: '/gallery-pre-4.png', alt: 'Sylvia & Timi - Elegant Standing', caption: 'Sophistication' },
    { src: '/gallery-pre-5.png', alt: 'Sylvia & Timi - Warm Smile', caption: 'Eternal Happiness' },
    { src: '/gallery-pre-6.png', alt: 'Sylvia & Timi - Expression Grid', caption: 'Moments of Us' },
    { src: '/gallery-pre-7.png', alt: 'Timi carrying Sylvia', caption: 'Pure Magic' },
    { src: '/gallery-pre-8.png', alt: 'Two Souls pose', caption: 'Two Souls, One Heart' },
    { src: '/gallery-pre-9.png', alt: 'Life together pose', caption: 'Building Our Life' },
    { src: '/gallery-pre-10.png', alt: 'Silhouette Kiss', caption: 'A Lifetime of Kisses' },
    { src: '/gallery-pre-11.png', alt: 'Sylvia & Timi - Close Embrace', caption: 'Deeply in Love' },
    { src: '/gallery-pre-12.png', alt: 'Sylvia & Timi - Holding Close', caption: 'In Your Arms' },
    { src: '/gallery-pre-13.png', alt: 'Traditional Portrait', caption: 'Unity' },
    { src: '/gallery-pre-14.png', alt: 'Elegant Pose', caption: 'Forever Yours' },
    { src: '/gallery-pre-15.png', alt: 'Sharing a Smile', caption: 'Love & Laughter' },
  ]

  const toggleLike = (idx: number, e: React.MouseEvent) => {
    e.stopPropagation()
    const newLiked = new Set(likedImages)
    if (newLiked.has(idx)) {
      newLiked.delete(idx)
    } else {
      newLiked.add(idx)
    }
    setLikedImages(newLiked)
  }

  return (
    <section
      ref={ref}
      id="gallery"
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mb-4 text-balance">
            Moments & Memories
          </h2>
          <p className="text-muted-foreground font-light max-w-lg mx-auto">
            A glimpse into our love story through cherished moments we've shared together
          </p>
        </div>
        <div className={`h-1 w-20 bg-accent mx-auto mb-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`} />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, idx) => (
            <div
              key={idx}
              className={`relative h-80 overflow-hidden rounded-lg cursor-pointer group transition-all duration-700 ${isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
              style={{
                transitionDelay: isInView ? `${idx * 0.15}s` : '0s',
              }}
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />

              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-serif text-xl font-light">{image.caption}</p>
              </div>

              {/* Like button */}
              <button
                onClick={(e) => toggleLike(idx, e)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white/30"
              >
                <Heart
                  className={`w-5 h-5 transition-all ${likedImages.has(idx) ? 'fill-red-500 text-red-500' : 'text-white'}`}
                />
              </button>

              {/* Border glow on hover */}
              <div className="absolute inset-0 border-2 border-accent/0 group-hover:border-accent/50 rounded-lg transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Hashtag */}
        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-accent font-serif text-2xl tracking-widest">
            #TSApproved
          </p>
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 animate-fade-in"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full h-full flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setSelectedImage(null)
                }}
                className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors z-10"
              >
                <X className="w-6 h-6 text-white" />
              </button>
              <Image
                src={selectedImage || "/placeholder.svg"}
                alt="Gallery image"
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

