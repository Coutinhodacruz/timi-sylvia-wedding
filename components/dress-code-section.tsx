'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ChevronDown, ChevronUp, Sparkles, MapPin } from 'lucide-react'

export default function DressCodeSection() {
    const { ref, isInView } = useScrollAnimation({ threshold: 0.05, triggerOnce: true })
    const [showDetails, setShowDetails] = useState(false)

    return (
        <section
            ref={ref}
            id="dress-code"
            className="py-12 md:py-20 bg-background px-4 md:px-8 relative overflow-hidden"
        >
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <h2 className="text-4xl md:text-6xl font-serif text-burgundy mb-6 font-light">
                        Wedding Dress Code
                    </h2>
                    <p className="text-burgundy/60 font-light max-w-2xl mx-auto text-lg italic font-serif">
                        "Elegance is not being noticed, but being remembered."
                    </p>
                    <div className="h-px w-24 bg-rose-gold/30 mx-auto mt-8" />
                </div>

                <div className="space-y-24">
                    {/* White Wedding Section */}
                    <div className={`transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="relative">
                            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-rose-gold/20 hidden md:block" />
                            <div className="md:pl-12">
                                <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
                                    <h3 className="text-3xl md:text-4xl font-serif text-rose-gold font-light">
                                        Friday, July 24th
                                    </h3>
                                    <span className="text-burgundy/40 tracking-[0.2em] uppercase text-xs mb-2 font-bold">The White Wedding</span>
                                </div>

                                <div className="bg-white rounded-3xl p-8 md:p-12 border border-blush-pink shadow-xl shadow-burgundy/5">
                                    <div className="max-w-3xl mb-12">
                                        <h4 className="text-2xl font-serif text-burgundy mb-4">Summer Formal</h4>
                                        <p className="text-burgundy/70 font-light leading-relaxed text-lg">
                                            We encourage guests to embrace bold, patterned attire. Have fun with your outfit and feel your absolute best — if you're wondering "is this too much?", you're likely on the right track. This is your chance to get dressed up and celebrate in style.
                                        </p>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-8">
                                        {/* For Women */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-2xl bg-rose-gold/10 flex items-center justify-center text-rose-gold border border-rose-gold/10">
                                                    <Sparkles size={18} />
                                                </div>
                                                <h5 className="text-xl font-serif text-burgundy font-medium">For Women</h5>
                                            </div>
                                            <ul className="space-y-4">
                                                {[
                                                    "Floor-length gowns only",
                                                    "Bright colors, floral prints, or rich jewel-toned fabrics",
                                                    "Cocktail dresses or anything short are not the vibe"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-burgundy/80 font-light">
                                                        <span className="text-rose-gold mt-1.5">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* For Men */}
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-2xl bg-rose-gold/10 flex items-center justify-center text-rose-gold border border-rose-gold/10">
                                                    <Sparkles size={18} />
                                                </div>
                                                <h5 className="text-xl font-serif text-burgundy font-medium">For Men</h5>
                                            </div>
                                            <ul className="space-y-4">
                                                {[
                                                    "Light-colored linen suits or a classic black tuxedo",
                                                    "Soft blues, tans, and other summer-friendly hues are encouraged"
                                                ].map((item, i) => (
                                                    <li key={i} className="flex gap-3 text-burgundy/80 font-light">
                                                        <span className="text-rose-gold mt-1.5">•</span>
                                                        <span>{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="mt-12 p-8 bg-blush-pink/10 rounded-2xl border border-blush-pink/30 text-center shadow-inner">
                                        <p className="text-rose-gold text-xs font-bold tracking-[0.2em] uppercase mb-3">Quick Note on Attire</p>
                                        <p className="text-burgundy font-light italic text-lg">
                                            Ladies, please refrain from wearing anything short or any dress with a white base. <br className="hidden md:block" /> Let the bride shine! 😊
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Traditional Wedding Section */}
                    <div className={`transition-all duration-1000 delay-400 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                        <div className="relative">
                            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-rose-gold/20 hidden md:block" />
                            <div className="md:pl-12">
                                <div className="flex flex-col md:flex-row md:items-end gap-4 mb-8">
                                    <h3 className="text-3xl md:text-4xl font-serif text-rose-gold font-light">
                                        Saturday, July 25th
                                    </h3>
                                    <span className="text-burgundy/40 tracking-[0.2em] uppercase text-xs mb-2 font-bold">The Traditional Wedding</span>
                                </div>

                                <div className="bg-white rounded-3xl p-8 md:p-12 border border-blush-pink shadow-xl shadow-burgundy/5">
                                    <div className="max-w-3xl mb-12 text-center md:text-left">
                                        <h4 className="text-2xl font-serif text-burgundy mb-4">Traditional Attire</h4>
                                        <p className="text-burgundy/70 font-light leading-relaxed text-lg">
                                            The color of the day is <span className="text-rose-gold font-bold">Chocolate Brown</span>. We kindly ask guests to wear chocolate brown, neutrals, jewel tones, or warm earthy colors that celebrate the beauty of traditional Nigerian attire.
                                        </p>
                                    </div>

                                    {/* Color Suggestions */}
                                    <div className="space-y-12">
                                        <h5 className="text-center text-xs tracking-[0.3em] text-rose-gold uppercase font-bold">Suggested Palette</h5>
                                        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
                                            {[
                                                { name: 'Chocolate Brown', hex: '#3E2723', highlight: true },
                                                // { name: 'Ivory', hex: '#FFFFF0' },
                                                // { name: 'Champagne', hex: '#F7E7CE' },
                                                // { name: 'Taupe', hex: '#483C32' },
                                                // { name: 'Teal', hex: '#008080' },
                                                // { name: 'Emerald', hex: '#50C878' },
                                                // { name: 'Royal Blue', hex: '#4169E1' },
                                                // { name: 'Plum', hex: '#8E4585' },
                                                // { name: 'Rust', hex: '#B7410E' },
                                                // { name: 'Burnt Orange', hex: '#CC5500' }
                                            ].map((color) => (
                                                <div key={color.name} className="flex flex-col items-center gap-3 group">
                                                    <div
                                                        className={`w-14 h-14 md:w-20 md:h-20 rounded-full border border-burgundy/5 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:shadow-rose-gold/20 ${color.highlight ? 'ring-4 ring-rose-gold ring-offset-4 ring-offset-white scale-110' : ''}`}
                                                        style={{ backgroundColor: color.hex }}
                                                    />
                                                    <span className={`text-[10px] md:text-xs tracking-wider transition-colors ${color.highlight ? 'text-rose-gold font-bold uppercase' : 'text-burgundy/60 group-hover:text-burgundy font-medium uppercase'}`}>{color.name}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="pt-12 border-t border-blush-pink/50">
                                            <h5 className="text-center text-xs tracking-[0.3em] text-burgundy/60 uppercase font-bold mb-8">Colors to Avoid</h5>
                                            <div className="flex flex-wrap justify-center gap-4">
                                                {['Red', 'Forest Green', 'Lavender', 'Bright/Neon Colors'].map((item) => (
                                                    <span key={item} className="px-6 py-2 rounded-full border border-burgundy/10 bg-burgundy/5 text-burgundy/60 text-sm font-medium tracking-wide">
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
                        className="group relative inline-flex items-center gap-4 px-10 py-5 bg-burgundy text-burgundy rounded-full hover:bg-burgundy/90 transition-all shadow-xl shadow-burgundy/20"
                    >
                        <span className="text-xs font-bold tracking-[0.2em] uppercase">
                            {showDetails ? 'Hide' : 'View'} Style Inspiration
                        </span>
                        {showDetails ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </button>

                    {showDetails && (
                        <div className="mt-12 p-12 bg-white rounded-3xl border border-blush-pink shadow-2xl animate-in fade-in slide-in-from-top-4 duration-500">
                            <p className="text-burgundy/60 font-light text-xl italic font-serif leading-relaxed">
                                We are curating a mood board for you. <br /> Check back soon for deeper style inspiration and fabric ideas!
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}
