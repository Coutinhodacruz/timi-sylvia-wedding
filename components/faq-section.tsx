'use client'

import { useState } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { ChevronDown, HelpCircle } from 'lucide-react'

interface FAQItem {
    question: string
    answer: string
    category: string
}

const faqData: FAQItem[] = [
    {
        category: 'Ceremony',
        question: 'What are the wedding dates?',
        answer: 'The White Wedding ceremony will be held on Friday, July 24th, 2026, and the Traditional Wedding will take place on Saturday, July 25th, 2026.',
    },
    {
        category: 'Ceremony',
        question: 'What time should I arrive?',
        answer: 'We recommend arriving at least 30 minutes before the ceremony begins. Specific times will be shared closer to the date via your invitation details.',
    },
    {
        category: 'Dress Code',
        question: 'What should I wear to the White Wedding?',
        answer: 'The dress code for Day 1 is Summer Formal. Ladies, please wear floor-length gowns in bright colors, floral prints, or jewel tones. Gentlemen, light-colored linen suits or classic black tuxedos are encouraged. Please avoid short dresses and white-based outfits.',
    },
    {
        category: 'Dress Code',
        question: 'What should I wear to the Traditional Wedding?',
        answer: 'The color of the day is Chocolate Brown! We kindly ask guests to wear chocolate brown, gold colors. Traditional Nigerian attire is highly encouraged. Please avoid red, forest green, lavender, and bright/neon colors.',
    },
    {
        category: 'Logistics',
        question: 'Will there be parking available?',
        answer: 'Yes, complimentary parking will be available at both venues. Detailed parking instructions will be included in your final invitation package.',
    },
    {
        category: 'Logistics',
        question: 'Can I bring a plus one?',
        answer: 'Due to limited seating, we kindly ask that only those named on the invitation attend. If you have been given a plus one, it will be indicated on your invite.',
    },
    {
        category: 'Gifts',
        question: 'Do you have a gift registry?',
        answer: 'Your presence is the greatest gift! However, if you would like to bless us further, details can be found in the Gifts section of this website.',
    },
    {
        category: 'Ceremony',
        question: 'Can I take photos during the ceremony?',
        answer: 'We kindly ask for an unplugged ceremony — please keep phones and cameras away during the vows. Our professional photographers will capture every beautiful moment. Feel free to snap away during the reception!',
    },
    {
        category: 'Logistics',
        question: 'Is the venue accessible?',
        answer: 'Yes, both venues are wheelchair accessible. If you have any specific accessibility needs, please reach out to us directly and we\'ll be happy to accommodate.',
    },
]

function FAQAccordionItem({ item, isOpen, onToggle, index }: {
    item: FAQItem
    isOpen: boolean
    onToggle: () => void
    index: number
}) {
    return (
        <div
            className={`group border-b border-white/5 last:border-b-0 transition-all duration-500`}
        >
            <button
                onClick={onToggle}
                className="w-full flex items-start gap-4 py-6 text-left hover:text-accent transition-colors duration-300"
                aria-expanded={isOpen}
            >
                <div className={`mt-1 w-6 h-6 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ${isOpen ? 'bg-accent text-black rotate-0' : 'bg-white/5 text-white/40'}`}>
                    <ChevronDown size={14} className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
                </div>
                <div className="flex-1">
                    <span className={`block text-lg md:text-xl font-light transition-colors duration-300 ${isOpen ? 'text-accent' : 'text-white/90 group-hover:text-white'}`}>
                        {item.question}
                    </span>
                </div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-white/20 mt-2 hidden md:block font-medium">
                    {item.category}
                </span>
            </button>

            <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
            >
                <div className="pl-10 pr-4">
                    <p className="text-white/60 font-light leading-relaxed text-base md:text-lg">
                        {item.answer}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)
    const { ref, isInView } = useScrollAnimation({ threshold: 0.05, triggerOnce: true })

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section
            ref={ref}
            id="faq"
            className="py-20 md:py-32 bg-background px-4 md:px-8 relative overflow-hidden"
        >
            {/* Decorative Background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-gold/[0.05] rounded-full blur-3xl pointer-events-none -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blush-pink/[0.1] rounded-full blur-3xl pointer-events-none -ml-64 -mb-64" />

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Header */}
                <div className={`text-center mb-20 transition-all duration-1000 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-3 mb-6 px-5 py-2 bg-rose-gold/5 border border-rose-gold/10 rounded-full">
                        <HelpCircle size={16} className="text-rose-gold" />
                        <span className="text-xs tracking-[0.3em] text-rose-gold uppercase font-bold">Common Questions</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-serif text-burgundy mb-6 font-light">
                        Frequently Asked
                        <span className="block text-rose-gold mt-2">Questions</span>
                    </h2>
                    <p className="text-burgundy/50 font-light max-w-xl mx-auto text-lg italic font-serif">
                        Everything you need to know about our special day. Can't find your answer? Reach out to us directly.
                    </p>
                    <div className="h-px w-24 bg-rose-gold/20 mx-auto mt-10" />
                </div>

                {/* FAQ List */}
                <div className={`bg-white rounded-4xl border border-blush-pink p-6 md:p-12 shadow-xl shadow-burgundy/5 backdrop-blur-sm transition-all duration-1000 delay-200 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="group border-b border-blush-pink/30 last:border-b-0 transition-all duration-500"
                        >
                            <button
                                onClick={() => handleToggle(index)}
                                className="w-full flex items-start gap-5 py-8 text-left transition-colors duration-300"
                                aria-expanded={openIndex === index}
                            >
                                <div className={`mt-1 w-8 h-8 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${openIndex === index ? 'bg-rose-gold text-white rotate-0 shadow-lg shadow-rose-gold/30' : 'bg-blush-pink/20 text-rose-gold'}`}>
                                    <ChevronDown size={18} className={`transition-transform duration-500 ${openIndex === index ? 'rotate-180' : ''}`} />
                                </div>
                                <div className="flex-1">
                                    <span className={`block text-xl md:text-2xl font-serif transition-colors duration-300 ${openIndex === index ? 'text-burgundy font-medium' : 'text-burgundy/80 group-hover:text-burgundy'}`}>
                                        {item.question}
                                    </span>
                                </div>
                                <span className={`text-[10px] tracking-[0.2em] uppercase mt-3 hidden md:block font-bold transition-colors ${openIndex === index ? 'text-rose-gold' : 'text-burgundy/20'}`}>
                                    {item.category}
                                </span>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100 pb-8' : 'max-h-0 opacity-0'}`}
                            >
                                <div className="pl-12 pr-6">
                                    <p className="text-burgundy/60 font-light leading-relaxed text-lg font-serif">
                                        {item.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className={`text-center mt-16 transition-all duration-1000 delay-400 ${isInView ? 'opacity-100' : 'opacity-0'}`}>
                    <p className="text-burgundy/40 font-light mb-6 text-lg font-serif">
                        Still have questions?
                    </p>
                    <a
                        href="mailto:TSApprovedenquiries@gmail.com"
                        className="inline-flex items-center gap-3 px-8 py-3 bg-blush-pink/10 border border-blush-pink/30 rounded-full text-rose-gold text-xs tracking-[0.2em] uppercase font-bold hover:bg-blush-pink/20 hover:shadow-lg hover:shadow-rose-gold/10 transition-all"
                    >
                        <span>Reach out to us</span>
                        <span className="text-rose-gold/30">•</span>
                        <span className="text-burgundy/60 normal-case tracking-normal font-medium">TSApprovedenquiries@gmail.com</span>
                    </a>
                </div>
            </div>
        </section>
    )
}
