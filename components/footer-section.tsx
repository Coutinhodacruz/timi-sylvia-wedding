'use client'

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-burgundy text-white py-20 px-6 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-gold/5 rounded-full blur-3xl -ml-48 -mt-48 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20 text-center md:text-left">
          <div className="space-y-6">
            <h3 className="text-3xl font-serif text-rose-gold tracking-tight">Timi <span className="text-white">♥</span> Sylvia</h3>
            <p className="font-serif italic text-lg text-white/60 leading-relaxed">
              Celebrating love, family, and a beautiful journey together.
            </p>
            <div className="h-0.5 w-12 bg-rose-gold/30 mx-auto md:mx-0" />
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-rose-gold">Quick Links</h4>
            <div className="flex flex-col space-y-4 text-sm font-medium tracking-wide">
              {[
                { name: 'Our Story', id: 'love-story' },
                { name: 'Event Details', id: 'event-details' },
                { name: 'Gallery', id: 'gallery' },
                { name: 'RSVP', id: 'rsvp' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    const element = document.getElementById(item.id)
                    if (element) element.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-white/70 hover:text-rose-gold transition-colors text-xs uppercase tracking-widest text-center md:text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-rose-gold">Contact</h4>
            <div className="space-y-4 text-sm font-medium">
              <p className="text-white/70 flex flex-col items-center md:items-start gap-1">
                <span className="text-[8px] uppercase tracking-widest text-rose-gold/50">Say hello at</span>
                tsaaproved2026@gmail.com
              </p>
              <p className="text-white/70 flex flex-col items-center md:items-start gap-1">
                <span className="text-[8px] uppercase tracking-widest text-rose-gold/50">Date of celebration</span>
                June 1st, 2026
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left space-y-2">
              <p className="text-[10px] tracking-widest uppercase font-bold text-white/40">
                © {currentYear} Timi & Sylvia. All rights reserved.
              </p>
              <p className="text-[8px] tracking-[0.2em] uppercase font-medium text-rose-gold/40">
                Crafted with love for our special day
              </p>
            </div>
            <button
              onClick={scrollToTop}
              className="group flex flex-col items-center gap-3 transition-all"
            >
              <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-rose-gold group-hover:bg-rose-gold/10 transition-all shadow-lg">
                <svg
                  className="w-5 h-5 text-white/50 group-hover:text-rose-gold transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 10l7-7m0 0l7 7m-7-7v18"
                  />
                </svg>
              </div>
              <span className="text-[8px] tracking-[0.3em] uppercase font-bold text-white/30 group-hover:text-rose-gold">Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
