'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { Gift, Heart, CreditCard, Copy, Check } from 'lucide-react'

export default function GiftsSection() {
    const { ref, isInView } = useScrollAnimation({ threshold: 0.2, triggerOnce: true })
    const [copied, setCopied] = useState<string | null>(null)
    const [showDonation, setShowDonation] = useState(false)

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
            className="py-20 md:py-32 bg-black/40 px-4 md:px-8"
        >
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className={`text-center mb-16 transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <Gift className="w-12 h-12 mx-auto mb-6 text-accent" />
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-6 font-light">
                        Gifts & Well Wishes
                    </h2>
                    <p className="text-muted-foreground font-light max-w-2xl mx-auto">
                        Your presence at our celebration is the greatest gift of all. However, if you wish to honor us with a gift, we would be grateful for a contribution to our honeymoon fund.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className={`grid md:grid-cols-2 gap-8 transition-all duration-700 delay-100 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    {/* Honeymoon Fund Card */}
                    <div className="bg-background/10 backdrop-blur-sm rounded-lg p-8 border border-accent/20 hover:border-accent/40 transition-all group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-all">
                                <Heart className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-2xl font-serif text-accent font-light">Honeymoon Fund</h3>
                        </div>

                        <p className="text-foreground/80 font-light mb-6 leading-relaxed">
                            Help us create unforgettable memories on our honeymoon adventure together.
                        </p>

                        <button
                            onClick={() => setShowDonation(!showDonation)}
                            className="w-full py-3 bg-accent text-black rounded-lg font-medium hover:bg-accent/90 transition-all"
                        >
                            {showDonation ? 'Hide Details' : 'Contribute to Our Journey'}
                        </button>
                    </div>

                    {/* E-Transfer Card */}
                    <div className="bg-background/10 backdrop-blur-sm rounded-lg p-8 border border-accent/20 hover:border-accent/40 transition-all group">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-all">
                                <CreditCard className="w-6 h-6 text-accent" />
                            </div>
                            <h3 className="text-2xl font-serif text-accent font-light">E-Transfer</h3>
                        </div>

                        <p className="text-foreground/80 font-light mb-6 leading-relaxed">
                            Send your gift directly via Interac e-Transfer.
                        </p>

                        <div className="space-y-3">
                            <div className="flex items-center justify-between p-3 bg-black/30 rounded-lg">
                                <span className="text-sm text-muted-foreground">Email:</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-foreground font-mono">{bankDetails.email}</span>
                                    <button
                                        onClick={() => copyToClipboard(bankDetails.email, 'email')}
                                        className="p-1 hover:text-accent transition-colors"
                                        title="Copy email"
                                    >
                                        {copied === 'email' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Expanded Payment Details */}
                {showDonation && (
                    <div className={`mt-8 bg-background/10 backdrop-blur-sm rounded-lg p-8 border border-accent/20 transition-all duration-500`}>
                        <h4 className="text-xl font-serif text-accent mb-6 font-light text-center">Banking Details</h4>

                        <div className="grid md:grid-cols-3 gap-4 mb-6">
                            <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                                <span className="text-xs text-muted-foreground mb-1">Institution #</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-mono text-foreground">{bankDetails.institution}</span>
                                    <button
                                        onClick={() => copyToClipboard(bankDetails.institution, 'institution')}
                                        className="p-1 hover:text-accent transition-colors"
                                    >
                                        {copied === 'institution' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                                <span className="text-xs text-muted-foreground mb-1">Transit/Branch #</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-mono text-foreground">{bankDetails.transit}</span>
                                    <button
                                        onClick={() => copyToClipboard(bankDetails.transit, 'transit')}
                                        className="p-1 hover:text-accent transition-colors"
                                    >
                                        {copied === 'transit' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col items-center p-4 bg-black/30 rounded-lg">
                                <span className="text-xs text-muted-foreground mb-1">Account #</span>
                                <div className="flex items-center gap-2">
                                    <span className="text-lg font-mono text-foreground">{bankDetails.account}</span>
                                    <button
                                        onClick={() => copyToClipboard(bankDetails.account, 'account')}
                                        className="p-1 hover:text-accent transition-colors"
                                    >
                                        {copied === 'account' ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        <p className="text-sm text-muted-foreground text-center font-light">
                            Thank you for your generosity and love 💕
                        </p>
                    </div>
                )}

                {/* Well Wishes Note */}
                <div className={`mt-12 text-center transition-all duration-700 delay-200 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-muted-foreground font-light text-sm">
                        Leave your well wishes in our <a href="#guestbook" className="text-accent hover:underline">Guestbook</a> section above
                    </p>
                </div>
            </div>
        </section>
    )
}
