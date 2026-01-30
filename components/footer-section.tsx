'use client'

export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif mb-4">Sarah & Michael</h3>
            <p className="font-light opacity-80">
              Celebrating love, family, and forever
            </p>
          </div>

          <div className="text-center">
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="flex flex-col space-y-2 font-light">
              <button
                onClick={() => {
                  const element = document.getElementById('story')
                  if (element)
                    element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="hover:opacity-70 transition-opacity"
              >
                Our Story
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('details')
                  if (element)
                    element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="hover:opacity-70 transition-opacity"
              >
                Details
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('gallery')
                  if (element)
                    element.scrollIntoView({ behavior: 'smooth' })
                }}
                className="hover:opacity-70 transition-opacity"
              >
                Gallery
              </button>
            </div>
          </div>

          <div className="text-center md:text-right">
            <h4 className="font-semibold mb-4">Contact</h4>
            <div className="font-light opacity-80 space-y-2">
              <p>Email: hello@example.com</p>
              <p>Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm font-light opacity-70 text-center md:text-left">
              © {currentYear} Sarah & Michael. All rights reserved.
            </p>
            <button
              onClick={scrollToTop}
              className="text-sm font-light hover:opacity-70 transition-opacity flex items-center gap-2"
            >
              Back to Top
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
