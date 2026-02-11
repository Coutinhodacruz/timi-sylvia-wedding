'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Gift, Heart, CreditCard, Copy, Check } from 'lucide-react'

export default function GiftsSection() {
    const { ref, isInView } = useScrollAnimation({ threshold: 0.05, triggerOnce: true })
    const [copied, setCopied] = useState<string | null>(null)

    const copyToClipboard = (text: string, field: string) => {
        navigator.clipboard.writeText(text)
        setCopied(field)
        setTimeout(() => setCopied(null), 2000)
    }

    const bankDetails = {
        email: 'tsaaproved2026@gmail.com',
        institution: '703',
        transit: '00001',
        account: '31750912',
    }

    return (
        <section
            ref={ref}
            id="gifts"
            className="py-20 md:py-32 bg-background px-4 md:px-8 relative overflow-hidden"
        >
            {/* Decorative background elements */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-rose-gold/5 rounded-full blur-3xl -ml-40" />
            <div className="absolute top-1/2 right-0 w-80 h-80 bg-blush-pink/10 rounded-full blur-3xl -mr-40" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="w-16 h-16 mx-auto mb-6 bg-rose-gold/10 rounded-2xl flex items-center justify-center border border-rose-gold/20 rotate-3 transition-all duration-500 shadow-lg shadow-rose-gold/10">
                        <Gift className="w-8 h-8 text-rose-gold" />
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-burgundy mb-6 font-light">
                        Gifts & Well Wishes
                    </h2>
                    <p className="text-burgundy/60 font-light max-w-2xl mx-auto text-lg italic font-serif">
                        Your presence at our celebration is the greatest gift of all. However, if you wish to honor us with a gift, we would be grateful for a contribution towards our lives together.
                    </p>
                </div>

                {/* Combined Card */}
                <div className={`transition-all duration-1000 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="bg-white rounded-4xl p-8 md:p-12 border border-blush-pink shadow-xl shadow-burgundy/5 transition-all duration-500">
                        <div className="grid md:grid-cols-2 gap-12">
                            {/* Honeymoon fund Section */}
                            <div>
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-rose-gold/10 flex items-center justify-center border border-rose-gold/10">
                                        <Heart className="w-6 h-6 text-rose-gold" />
                                    </div>
                                    <h3 className="text-2xl font-serif text-burgundy font-medium">Honeymoon Fund</h3>
                                </div>
                                <p className="text-burgundy/60 font-light mb-auto leading-relaxed font-serif text-lg">
                                    Help us create unforgettable memories on our honeymoon adventure together. We are grateful for your love and support.
                                </p>
                            </div>

                            {/* E-Transfer Section */}
                            <div>
                                <div className="flex items-center gap-5 mb-6">
                                    <div className="w-12 h-12 rounded-xl bg-rose-gold/10 flex items-center justify-center border border-rose-gold/10">
                                        <CreditCard className="w-6 h-6 text-rose-gold" />
                                    </div>
                                    <h3 className="text-2xl font-serif text-burgundy font-medium">Registry Details</h3>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between p-4 bg-blush-pink/5 border border-blush-pink/30 rounded-2xl group/input transition-all hover:bg-blush-pink/10">
                                        <div className="flex flex-col">
                                            <span className="text-[8px] tracking-widest text-rose-gold uppercase font-bold mb-1">Email Address (Zelle/E-Transfer)</span>
                                            <span className="text-sm text-burgundy font-medium">{bankDetails.email}</span>
                                        </div>
                                        <button
                                            onClick={() => copyToClipboard(bankDetails.email, 'email')}
                                            className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-burgundy hover:text-rose-gold transition-colors shadow-sm"
                                        >
                                            {copied === 'email' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                        </button>
                                    </div>

                                    <div className="grid grid-cols-3 gap-3">
                                        {[
                                            { label: 'Inst. #', value: bankDetails.institution, field: 'institution' },
                                            { label: 'Trans. #', value: bankDetails.transit, field: 'transit' },
                                            { label: 'Account #', value: bankDetails.account, field: 'account' }
                                        ].map((item) => (
                                            <div key={item.field} className="flex flex-col items-center p-4 bg-blush-pink/5 border border-blush-pink/20 rounded-2xl group/bank">
                                                <span className="text-[7px] text-rose-gold uppercase tracking-[0.2em] font-bold mb-2">{item.label}</span>
                                                <div className="flex items-center gap-1.5">
                                                    <span className="text-xs font-sans font-bold text-burgundy tabular-nums">{item.value}</span>
                                                    <button
                                                        onClick={() => copyToClipboard(item.value, item.field)}
                                                        className="text-burgundy/30 hover:text-rose-gold transition-colors"
                                                    >
                                                        {copied === item.field ? <Check className="w-3 h-3 text-green-500" /> : <Copy className="w-3 h-3" />}
                                                    </button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 pt-8 border-t border-blush-pink/30 text-center">
                            <p className="text-sm text-burgundy/40 font-bold tracking-[0.3em] uppercase">
                                Thank you for your generosity and love 💕
                            </p>
                        </div>
                    </div>
                </div>

                {/* Well Wishes Note */}
                <div className={`mt-16 text-center transition-all duration-1000 delay-200 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-burgundy/40 font-medium text-[11px] tracking-widest uppercase">
                        Leave your well wishes in our <a href="#guestbook" className="text-rose-gold hover:text-burgundy underline transition-colors">Guestbook</a>
                    </p>
                </div>
            </div>
        </section>
    )
}
