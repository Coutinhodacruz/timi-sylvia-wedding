'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface HeroRevealProps {
    onComplete?: () => void
}

export default function HeroReveal({ onComplete }: HeroRevealProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [showContent, setShowContent] = useState(false)
    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const heroImages = [
        { src: '/engagement-1.png', alt: 'Sylvia & Timi with Champagne' },
        { src: '/engagement-3.png', alt: 'Sylvia Smiling at Timi' },
        { src: '/engagement-4.jpg', alt: 'Sylvia with Will You Marry Me sign', caption: 'The Moment' },
        { src: '/engagement-6.png', alt: 'Sylvia with bouquet', caption: 'She Said Yes!' },
    ]

    useEffect(() => {
        // Trigger reveal animation
        setTimeout(() => setIsVisible(true), 100)
        setTimeout(() => setShowContent(true), 800)

        // Auto-advance images with slower, elegant timing
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
        }, 6000)

        return () => clearInterval(interval)
    }, [heroImages.length])

    const scrollToContent = () => {
        const element = document.getElementById('love-story')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        onComplete?.()
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background with gradient overlay */}
            <div className="absolute inset-0 z-0">
                {heroImages.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-all duration-[2000ms] ease-in-out ${currentImageIndex === index
                            ? 'opacity-100 scale-100'
                            : 'opacity-0 scale-105'
                            }`}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            priority={index === 0}
                            className="object-cover"
                        />
                    </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

                {/* Animated particles/shimmer effect */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-accent/30 rounded-full animate-float-particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${3 + Math.random() * 4}s`,
                            }}
                        />
                    ))}
                </div>
            </div>

            {/* Main content */}
            <div
                className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 flex flex-col items-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
            >
                {/* Decorative line - Order 1 */}
                <div className={`flex items-center justify-center gap-4 mb-4 md:mb-8 transition-all duration-700 delay-300 order-1 ${showContent ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <div className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-accent" />
                    <span className="text-accent text-xl md:text-2xl">♥</span>
                    <div className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-accent" />
                </div>

                {/* Couple names - Order 2 (Leading the hierarchy) */}
                <h1 className={`text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-2 md:mb-6 tracking-wide transition-all duration-700 delay-500 order-2 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    <span className="block text-accent/90 font-light">Sylvia</span>
                    <span className="text-3xl md:text-4xl text-white/60 font-light">&</span>
                    <span className="block text-accent/90 font-light">Timi</span>
                </h1>

                {/* Date - Order 3 (Moved up for mobile hierarchy) */}
                <div className={`mb-4 md:mb-8 transition-all duration-700 delay-900 order-3 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}>
                    <p className="text-lg md:text-xl text-white/90 font-light mb-1">
                        July 24th & 25th, 2026
                    </p>
                    <p className="text-sm md:text-base text-white/60 font-light">
                        Ile Oba-Jesu • Whitby, Ontario
                    </p>
                </div>

                {/* Hashtag - Order 4 (Softened) */}
                <div className={`transition-all duration-700 delay-700 order-4 mb-8 md:mb-12 ${showContent ? 'opacity-100' : 'opacity-0'
                    }`}>
                    <p className="text-sm md:text-base tracking-[0.2em] text-white/60 font-light italic">
                        United in love, approved by God
                    </p>
                    <p className="text-xs md:text-sm tracking-widest text-accent/40 mt-2 uppercase">
                        #TSApproved
                    </p>
                </div>

                {/* Scroll prompt - Order 5 */}
                <button
                    onClick={scrollToContent}
                    className={`group inline-flex flex-col items-center gap-2 text-white/60 hover:text-accent transition-all duration-500 delay-1000 order-5 ${showContent ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <span className="text-sm tracking-widest uppercase">Discover Our Story</span>
                    <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-2">
                        <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
                    </div>
                </button>
            </div>

            {/* Image indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                {heroImages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentImageIndex === index
                            ? 'bg-accent w-6'
                            : 'bg-white/40 hover:bg-white/60'
                            }`}
                        aria-label={`Go to image ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    )
}
