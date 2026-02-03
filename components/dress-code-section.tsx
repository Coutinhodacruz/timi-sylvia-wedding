'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ChevronDown, ChevronUp } from 'lucide-react'

export default function DressCodeSection() {
    const { ref, isInView } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    const [activeTab, setActiveTab] = useState<'white' | 'traditional'>('white')
    const [showDetails, setShowDetails] = useState(false)

    return (
        <section
            ref={ref}
            id="dress-code"
            className="py-20 md:py-32 bg-background px-4 md:px-8"
        >
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 font-light">
                        Dress Code
                    </h2>
                    <p className="text-muted-foreground font-light">
                        We're envisioning a vibrant, fashionable celebration
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className={`flex justify-center gap-4 mb-12 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <button
                        onClick={() => setActiveTab('white')}
                        className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'white'
                            ? 'bg-accent text-black'
                            : 'bg-black/40 text-foreground hover:bg-black/60'
                            }`}
                    >
                        July 24th - White Wedding
                    </button>
                    <button
                        onClick={() => setActiveTab('traditional')}
                        className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${activeTab === 'traditional'
                            ? 'bg-accent text-black'
                            : 'bg-black/40 text-foreground hover:bg-black/60'
                            }`}
                    >
                        July 25th - Traditional
                    </button>
                </div>

                {/* White Wedding Content */}
                {activeTab === 'white' && (
                    <div className={`transition-all duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="bg-black/40 rounded-lg p-8 md:p-10 mb-8 hover:bg-black/50 transition-all">
                            <h3 className="text-2xl font-serif text-[#8B3A3A] mb-6 font-light text-center">
                                Summer Formal
                            </h3>

                            <p className="text-[#FAF6F0] text-center mb-8 font-light leading-relaxed">
                                We encourage guests to embrace bold, patterned attire. Have fun with your outfit and feel your absolute best — if you're wondering "is this too much?", you're likely on the right track. This is your chance to get dressed up and celebrate in style.
                            </p>

                            {/* Dress Code Grid */}
                            <div className="grid md:grid-cols-2 gap-8 mb-8">
                                {/* For Women */}
                                <div className="bg-background/20 rounded-lg p-6 border border-accent/20 hover:border-accent/40 transition-all">
                                    <h4 className="text-xl font-serif text-[#8B3A3A] mb-4 font-light">For Women</h4>
                                    <ul className="space-y-2 text-[#FAF6F0] font-light text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent mt-1">✦</span>
                                            <span>Floor-length gowns only</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent mt-1">✦</span>
                                            <span>Bright colors, floral prints, or rich jewel-toned fabrics</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent mt-1">✦</span>
                                            <span>Cocktail dresses or anything short are not the vibe</span>
                                        </li>
                                    </ul>
                                </div>

                                {/* For Men */}
                                <div className="bg-background/20 rounded-lg p-6 border border-accent/20 hover:border-accent/40 transition-all">
                                    <h4 className="text-xl font-serif text-[#8B3A3A] mb-4 font-light">For Men</h4>
                                    <ul className="space-y-2 text-[#FAF6F0] font-light text-sm">
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent mt-1">✦</span>
                                            <span>Light-colored linen suits or a classic black tuxedo</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <span className="text-accent mt-1">✦</span>
                                            <span>Soft blues, tans, and other summer-friendly hues are encouraged</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* What Not to Wear */}
                            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
                                <h4 className="text-lg font-serif text-destructive mb-3 font-light">What Not to Wear</h4>
                                <p className="text-[#FAF6F0]/80 font-light text-sm">
                                    Ladies, please refrain from wearing anything short or any dress with a white base.
                                    It's okay to wear a dress with some white in it, as long as you're not wearing a wedding gown. All will be OK. 😊
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Traditional Wedding Content */}
                {activeTab === 'traditional' && (
                    <div className={`transition-all duration-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
                        <div className="bg-black/40 rounded-lg p-8 md:p-10 hover:bg-black/50 transition-all">
                            <h3 className="text-2xl font-serif text-[#8B3A3A] mb-6 font-light text-center">
                                Traditional Attire
                            </h3>

                            <p className="text-[#FAF6F0] text-center mb-8 font-light leading-relaxed">
                                We kindly ask guests to wear neutrals, jewel tones, or warm earthy colors that celebrate the beauty of traditional Nigerian attire.
                            </p>

                            {/* Color Suggestions */}
                            <div className="bg-background/20 rounded-lg p-6 border border-accent/20 mb-8">
                                <h4 className="text-xl font-serif text-[#8B3A3A] mb-4 font-light text-center">Suggested Colors</h4>
                                <div className="flex flex-wrap justify-center gap-4">
                                    {['Ivory', 'Champagne', 'Taupe', 'Teal', 'Emerald', 'Royal Blue', 'Plum', 'Rust', 'Burnt Orange'].map((color) => (
                                        <span
                                            key={color}
                                            className="px-4 py-2 bg-accent/20 text-[#FAF6F0] rounded-full text-sm font-light border border-accent/30"
                                        >
                                            {color}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Colors to Avoid */}
                            <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-6">
                                <h4 className="text-lg font-serif text-destructive mb-3 font-light text-center">Colors to Avoid</h4>
                                <div className="flex flex-wrap justify-center gap-3">
                                    {['Red', 'Forest Green', 'Lavender', 'Bright/Neon Colors'].map((color) => (
                                        <span
                                            key={color}
                                            className="px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-light border border-destructive/20"
                                        >
                                            {color}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Mood Board Placeholder */}
                <button
                    onClick={() => setShowDetails(!showDetails)}
                    className={`w-full mt-8 py-4 flex items-center justify-center gap-2 text-accent hover:text-accent/80 transition-all ${isInView ? 'opacity-100' : 'opacity-0'}`}
                >
                    <span className="text-sm font-medium tracking-wider uppercase">
                        {showDetails ? 'Hide' : 'View'} Style Inspiration
                    </span>
                    {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>

                {showDetails && (
                    <div className="mt-6 p-8 bg-black/40 rounded-lg text-center">
                        <p className="text-[#F5D5D5] font-light">
                            Mood board and style inspiration coming soon...
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}
