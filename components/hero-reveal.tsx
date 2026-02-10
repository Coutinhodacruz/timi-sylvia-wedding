'use client'

import { useState, useEffect } from 'react'
import CountdownTimer from './countdown-timer'

interface HeroRevealProps {
    onComplete?: () => void
}

export default function HeroReveal({ onComplete }: HeroRevealProps) {
    const [isVisible, setIsVisible] = useState(false)
    const [showContent, setShowContent] = useState(false)

    useEffect(() => {
        // Trigger reveal animation
        setTimeout(() => setIsVisible(true), 100)
        setTimeout(() => setShowContent(true), 800)
    }, [])

    const scrollToContent = () => {
        const element = document.getElementById('love-story')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
        onComplete?.()
    }

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Video Background */}
            <div className="absolute inset-0 z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/save%20the%20date%20.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/70" />

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
                className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 flex flex-col items-center mb-24 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-32'
                    }`}
            >
                {/* Decorative line - Order 1 */}
                <div className={`flex items-center justify-center gap-4 mb-4 md:mb-8 transition-all duration-700 delay-300 order-1 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'
                    }`}>
                    <div className="h-px w-10 md:w-16 bg-gradient-to-r from-transparent to-accent" />
                    <span className="text-accent text-xl md:text-2xl">♥</span>
                    <div className="h-px w-10 md:w-16 bg-gradient-to-l from-transparent to-accent" />
                </div>

                {/* Couple names - Order 2 (Animate from bottom) */}
                <h1 className={`text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-2 md:mb-6 tracking-wide transition-all duration-1000 delay-500 order-2 drop-shadow-2xl ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[200px]'
                    }`}>
                    <span className="block text-accent font-light">Sylvia</span>
                    <span className="text-4xl md:text-5xl text-white/60 font-light">&</span>
                    <span className="block text-accent font-light">Timi</span>
                </h1>

                {/* Date - Order 3 (Animate from bottom) */}
                <div className={`mb-4 md:mb-8 transition-all duration-1000 delay-700 order-3 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[250px]'
                    }`}>
                    <p className="text-xl md:text-2xl text-white/90 font-light mb-1 drop-shadow-lg">
                        July 24th & 25th, 2026
                    </p>

                </div>

                {/* Hashtag - Order 4 (Animate from bottom) */}
                <div className={`transition-all duration-1000 delay-900 order-4 mb-8 md:mb-12 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[300px]'
                    }`}>
                    <p className="text-lg md:text-xl tracking-[0.2em] text-white/70 font-light italic drop-shadow-lg">
                        United in love, blessed by God
                    </p>
                    <p className="text-sm md:text-base tracking-widest text-accent/60 mt-2 uppercase font-medium">
                        #TSApproved
                    </p>
                </div>

                {/* Scroll prompt - Order 5 */}
                <button
                    onClick={scrollToContent}
                    className={`group inline-flex flex-col items-center gap-2 text-white/60 hover:text-accent transition-all duration-500 delay-1100 order-5 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                        }`}
                >
                    <span className="text-sm tracking-widest uppercase">Discover Our Story</span>
                    <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-2">
                        <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
                    </div>
                </button>
            </div>

            {/* Countdown at the bottom */}
            <div className={`absolute bottom-0 left-0 right-0 z-20 transition-all duration-1000 delay-300 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-black/40 backdrop-blur-md py-4 border-t border-white/10">
                    <div className="max-w-4xl mx-auto px-4">
                        <CountdownTimer />
                    </div>
                </div>
            </div>
        </section>
    )
}
