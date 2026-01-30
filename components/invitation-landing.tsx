'use client'

import React from "react"

import { useState, useEffect } from 'react'
import { Heart } from 'lucide-react'

interface InvitationLandingProps {
  onOpen: () => void
  coupleNames?: string
  eventDate?: string
}

export default function InvitationLanding({
  onOpen,
  coupleNames = 'Sylvia & Timi',
  eventDate = '4.4.26',
}: InvitationLandingProps) {
  const [isOpening, setIsOpening] = useState(false)
  const [liked, setLiked] = useState(false)
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null)

  // Initialize audio
  useEffect(() => {
    const audioObj = new Audio('https://elementorclass.com/UPLOAD/Crazy%20Rich%20Asians%20Official%20Soundtrack%20_%20Can’t%20Help%20Falling%20In%20Love%20-%20Kina%20Grannis%20_%20WaterTower%20(128%20kbps)-cut45.mp3')
    audioObj.loop = true
    setAudio(audioObj)

    return () => {
      audioObj.pause()
      audioObj.src = ''
    }
  }, [])

  const handleEnvelopeClick = () => {
    if (audio) {
      audio.play().catch(e => console.log('Audio autoplay prevented:', e))
    }
    setIsOpening(true)
    setTimeout(() => {
      onOpen()
    }, 1000)
  }

  const handleGoldSealClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleEnvelopeClick()
  }

  return (
    <div className="min-h-screen bg-[url('https://wedmedia.wed-webs.com/2023/06/06035908/ART009-WK.png')] bg-cover bg-center flex flex-col items-center justify-center p-4 relative overflow-hidden perspective">
      {/* Decorative flowers - positioned at top corners with opacity */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 opacity-30 pointer-events-none" />

      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-2xl gap-12 relative z-10">
        {/* Couple names and event info */}
        <div className="text-center space-y-3 mb-8">
          <h1 className="text-5xl md:text-6xl font-serif text-primary font-light">
            {coupleNames}
          </h1>
          <p className="text-2xl md:text-3xl tracking-widest text-accent font-light">
            #{eventDate.replace('.', '').substring(0, 2)}Approved
          </p>
          <div className="h-px w-16 mx-auto bg-accent/50" />
        </div>

        {/* Envelope - Main Interactive Element */}
        <div
          className={`relative w-full max-w-3xl h-[600px] cursor-pointer transition-all duration-700 ${isOpening ? 'animate-pulse' : ''
            }`}
          style={{
            perspective: '1200px',
            transformStyle: 'preserve-3d',
          }}
        >
          <div
            className={`relative w-full h-full transition-all duration-1000 ${isOpening ? 'opacity-0' : 'opacity-100'
              }`}
            style={{
              transform: isOpening
                ? 'rotateX(90deg) rotateY(45deg) scale(0.8)'
                : 'rotateX(0deg) rotateY(0deg) scale(1)',
              animation: isOpening
                ? 'none'
                : 'slideUp 0.8s ease-out, float 3s ease-in-out infinite 0.3s',
            }}
            onClick={handleEnvelopeClick}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                handleEnvelopeClick()
              }
            }}
          >
            {/* Envelope Body */}
            <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden group">
              {/* Main envelope with actual image */}
              <div
                className="w-full h-full rounded-lg flex items-end justify-center relative"
                style={{
                  boxShadow: '0 20px 60px rgba(139, 58, 58, 0.4)',
                }}
              >
                {/* Envelope image */}
                <img
                  src="/envelope.jpg"
                  alt="Wedding invitation envelope"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                />

                {/* Gold seal/wax button - transparent clickable overlay positioned on the wax seal */}
                <button
                  onClick={handleGoldSealClick}
                  className="absolute w-20 h-20 rounded-full flex items-center justify-center transition-all hover:scale-110 group cursor-pointer z-10"
                  style={{
                    bottom: '18%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                  aria-label="Click to open invitation"
                  title="Click to open"
                >
                  {/* Subtle hover glow effect */}
                  <div className="absolute inset-0 rounded-full bg-yellow-400/0 group-hover:bg-yellow-400/20 transition-all duration-300" />

                  {/* Outer ring indicator on hover */}
                  <div className="absolute inset-[-4px] rounded-full border-2 border-yellow-400/0 group-hover:border-yellow-400/50 transition-all duration-300" />
                </button>
              </div>

              {/* Envelope flap effect on opening */}
              <div
                className="absolute inset-0 rounded-t-lg bg-gradient-to-b from-burgundy/80 to-transparent pointer-events-none"
                style={{
                  height: '50%',
                  opacity: isOpening ? 1 : 0,
                  animation: isOpening
                    ? 'envelopeOpen 1s ease-in-out forwards'
                    : 'none',
                }}
              />
            </div>
          </div>
        </div>

        {/* Text below envelope */}
        <div className="text-center space-y-4 max-w-lg">
          <p className="text-sm md:text-base tracking-widest text-sage uppercase font-light">
            You are cordially invited to our vow renewal
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-accent/50" />
            <span className="text-accent text-lg">•</span>
            <div className="h-px w-8 bg-accent/50" />
          </div>
          <p className="text-foreground/70 font-light text-sm">
            Click the gold seal to open your invitation
          </p>
        </div>

        {/* Like button */}
        <button
          onClick={() => setLiked(!liked)}
          className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary hover:bg-primary/10 transition-all duration-300"
          aria-label="Like invitation"
        >
          <Heart
            className={`w-6 h-6 transition-all ${liked ? 'fill-primary text-primary' : 'text-primary'
              }`}
            strokeWidth={1.5}
          />
        </button>
      </div>

      {/* Animation page reveal */}
      {isOpening && (
        <div
          className="fixed inset-0 bg-primary/90 pointer-events-none z-50"
          style={{
            animation: 'pageReveal 1s ease-out forwards',
          }}
        />
      )}

      <style jsx>{`
        @supports (perspective: 1000px) {
          .perspective {
            perspective: 1200px;
          }
        }
      `}</style>
    </div>
  )
}
