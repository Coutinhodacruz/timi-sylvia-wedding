'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ChevronDown, ChevronUp, Sparkles, MapPin } from 'lucide-react'

export default function DressCodeSection() {
    const { ref, isInView } = useScrollAnimation({ threshold: 0.1, triggerOnce: true })
    const [showDetails, setShowDetails] = useState(false)

    return (
        <section
            ref={ref}
            id="dress-code"
            className="py-20 md:py-32 bg-background px-4 md:px-8 relative overflow-hidden"
        >
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-6 font-light">
                        Wedding Dress Code
                    </h2>
                    <p className="text-muted-foreground font-light max-w-2xl mx-auto text-lg italic">
                        "Elegance is not being noticed, but being remembered."
                    </p>
                    <div className="h-px w-24 bg-accent/30 mx-auto mt-8" />
                </div>

                <div className="space-y-24">
                    {/* White Wedding Section */}
                    <div className={`transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="relative">
                            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent/20 hidden md:block" />
                            <div className="md:pl-12">
                                <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
                                    <h3 className="text-3xl md:text-4xl font-serif text-accent font-light">
                                        Friday, July 24th
                                    </h3>
                                    <span className="text-muted-foreground tracking-[0.2em] uppercase text-sm mb-2">The White Wedding</span>
                                </div>

                                <div className="bg-black/20 rounded-2xl p-8 md:p-12 border border-white/5 backdrop-blur-sm">
                                    <div className="max-w-3xl mb-12">
                                        <h4 className="text-xl font-serif text-white mb-4">Summer Formal</h4>
                                        <p className="text-muted-foreground font-light leading-relaxed text-lg">
                                            We encourage guests to embrace bold, patterned attire. Have fun with your outfit and feel your absolute best — if you're wondering "is this too much?", you're likely on the right track. This is your chance to get dressed up and celebrate in style.
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* For Women */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                                    <Sparkles size={16} />
                                                </div>
                                                <h5 className="text-lg font-medium text-white/90">For Women</h5>
                                            </div>
                                            <ul className="space-y-4">
                                                {[
                                                    "Floor-length gowns only",
                                                    "Bright colors, floral prints, or rich jewel-toned fabrics",
                                                    "Cocktail dresses or anything short are not the vibe"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-muted-foreground font-light">
                                                        <span className="text-accent/40 mt-1.5">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* For Men */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                                    <Sparkles size={16} />
                                                </div>
                                                <h5 className="text-lg font-medium text-white/90">For Men</h5>
                                            </div>
                                            <ul className="space-y-4">
                                                {[
                                                    "Light-colored linen suits or a classic black tuxedo",
                                                    "Soft blues, tans, and other summer-friendly hues are encouraged"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-muted-foreground font-light">
                                                        <span className="text-accent/40 mt-1.5">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-12 p-6 bg-accent/5 rounded-xl border border-accent/10 text-center">
                                        <p className="text-accent text-sm font-medium tracking-wide uppercase mb-2">Quick Note on Attire</p>
                                        <p className="text-white/90 font-light italic">
                                            Ladies, please refrain from wearing anything short or any dress with a white base. Let the bride shine! 😊
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Traditional Wedding Section */}
                    <div className={`transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="relative">
                            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-accent/20 hidden md:block" />
                            <div className="md:pl-12">
                                <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
                                    <h3 className="text-3xl md:text-4xl font-serif text-accent font-light">
                                        Saturday, July 25th
                                    </h3>
                                    <span className="text-muted-foreground tracking-[0.2em] uppercase text-sm mb-2">The Traditional Wedding</span>
                                </div>

                                <div className="bg-black/20 rounded-2xl p-8 md:p-12 border border-white/5 backdrop-blur-sm">
                                    <div className="max-w-3xl mb-12 text-center md:text-left">
                                        <h4 className="text-xl font-serif text-white mb-4">Traditional Attire</h4>
                                        <p className="text-muted-foreground font-light leading-relaxed text-lg">
                                            The color of the day is <span className="text-accent font-medium">Chocolate Brown</span>. We kindly ask guests to wear chocolate brown, neutrals, jewel tones, or warm earthy colors that celebrate the beauty of traditional Nigerian attire.
                                        </p>
                                    </div>

                                    {/* Color Suggestions */}
                                    <div className="space-y-8">
                                        <h5 className="text-center text-sm tracking-[0.3em] text-accent uppercase font-medium">Suggested Palette</h5>
                                        <div className="flex flex-wrap justify-center gap-6 md:gap-8">
                                            {[
                                                { name: 'Chocolate Brown', hex: '#3E2723', highlight: true },
                                                { name: 'Ivory', hex: '#FFFFF0' },
                                                { name: 'Champagne', hex: '#F7E7CE' },
                                                { name: 'Taupe', hex: '#483C32' },
                                                { name: 'Teal', hex: '#008080' },
                                                { name: 'Emerald', hex: '#50C878' },
                                                { name: 'Royal Blue', hex: '#4169E1' },
                                                { name: 'Plum', hex: '#8E4585' },
                                                { name: 'Rust', hex: '#B7410E' },
                                                { name: 'Burnt Orange', hex: '#CC5500' }
                                            ].map((color) => (
                                                <div key={color.name} className="flex flex-col items-center gap-3 group">
                                                    <div
                                                        className={`w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 shadow-xl transition-transform duration-300 group-hover:scale-110 ${color.highlight ? 'ring-2 ring-accent ring-offset-4 ring-offset-black' : ''}`}
                                                        style={{ backgroundColor: color.hex }}
                                                    />
                                                    <span className={`text-xs font-light transition-colors ${color.highlight ? 'text-accent font-medium' : 'text-white/60 group-hover:text-white'}`}>{color.name}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-12 border-t border-white/5">
                                            <h5 className="text-center text-sm tracking-[0.3em] text-white/80 uppercase font-medium mb-6">Colors to Avoid</h5>
                                            <div className="flex flex-wrap justify-center gap-3">
                                                {['Red', 'Forest Green', 'Lavender', 'Bright/Neon Colors'].map((item) => (
                                                    <span key={item} className="px-5 py-2 rounded-full border border-[#a4a3a3] bg-white/5 text-white/50 text-sm font-light">
                                                        {item}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Additional Info / Style Guide Link */}
                <div className={`mt-24 text-center transition-all duration-1000 delay-500 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
                    <button
                        onClick={() => setShowDetails(!showDetails)}
                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent/10 border border-accent/20 rounded-full text-accent hover:bg-accent/20 transition-all"
                    >
                        <span className="text-sm font-medium tracking-widest uppercase">
                            {showDetails ? 'Hide' : 'View'} Style Inspiration
                        </span>
                        {showDetails ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>

                    {showDetails && (
                        <div className="mt-8 p-12 bg-black/40 rounded-3xl border border-white/5 animate-in fade-in slide-in-from-top-4 duration-500">
                            <p className="text-white/60 font-light text-lg italic">
                                We are curating a mood board for you. Check back soon for deeper style inspiration and fabric ideas!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
