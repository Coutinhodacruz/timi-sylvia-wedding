'use client'

import React from "react"

import { useState } from 'react'
import { Heart, Sparkles } from 'lucide-react'

interface InvitationLandingProps {
  onOpen: () => void
  onStartMusic?: () => void
  coupleNames?: string
  eventDate?: string
}

export default function InvitationLanding({
  onOpen,
  onStartMusic,
  coupleNames = 'Sylvia & Timi',
  eventDate = 'July 24-25, 2026',
}: InvitationLandingProps) {
  const [isOpening, setIsOpening] = useState(false)
  const [liked, setLiked] = useState(false)
  const [showFloatingHearts, setShowFloatingHearts] = useState(true)

  const handleEnvelopeClick = () => {
    if (onStartMusic) {
      onStartMusic()
    }
    setIsOpening(true)
    setShowFloatingHearts(false) // Hide floating hearts during the opening animation
    setTimeout(() => {
      onOpen()
    }, 1200)
  }

  const handleGoldSealClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    handleEnvelopeClick()
  }

  return (
    <div className="min-h-screen bg-[url('https://wedmedia.wed-webs.com/2023/06/06035908/ART009-WK.png')] bg-cover bg-center flex flex-col items-center justify-center p-4 relative overflow-hidden perspective">
      {/* Floating hearts background animation */}
      {showFloatingHearts && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <Heart
              key={i}
              className="absolute text-rose-gold/20 animate-float-heart"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
                fontSize: `${12 + Math.random() * 16}px`,
              }}
              size={16 + Math.random() * 16}
            />
          ))}
        </div>
      )}

      {/* Sparkle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Sparkles
            key={i}
            className="absolute text-rose-gold/30 animate-sparkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
            size={8 + Math.random() * 8}
          />
        ))}
      </div>

      {/* Decorative corners */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 opacity-30 pointer-events-none" />

      <div className="flex flex-col items-center justify-center flex-1 w-full max-w-2xl gap-12 relative z-10">
        {/* Couple names and event info */}
        <div className="text-center space-y-4 mb-8">
          <p className="text-sm tracking-[0.3em] text-burgundy/80 uppercase font-medium animate-fade-in font-sans">
            You are invited to celebrate
          </p>
          <div className="animate-slide-up flex justify-center">
            <img
              src="/monogram2.png"
              alt={coupleNames}
              className="w-48 h-auto md:w-64 opacity-90 brightness-110 drop-shadow-lg"
            />
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-rose-gold/50" />
            <span className="text-rose-gold text-lg">♥</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-rose-gold/50" />
          </div>
          <p className="text-lg text-burgundy font-light">
            {eventDate}
          </p>
        </div>

        {/* Envelope - Main Interactive Element */}
        <div
          className={`relative w-full max-w-md h-[450px] cursor-pointer transition-all duration-700 ${isOpening ? 'animate-pulse' : ''
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
                  boxShadow: '0 20px 60px rgba(122, 27, 46, 0.3)',
                }}
              >
                {/* Envelope image */}
                <img
                  src="/envelope.jpg"
                  alt="Wedding invitation envelope"
                  className="absolute inset-0 w-full h-full object-cover rounded-lg scale-100 group-hover:scale-105 transition-transform duration-700"
                />

                {/* Gold glow effect around envelope */}
                <div className="absolute inset-0 rounded-lg border-2 border-rose-gold/0 group-hover:border-rose-gold/30 transition-all duration-500" />

                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                {/* Gold seal/wax button - transparent clickable overlay positioned on the wax seal */}
                <button
                  onClick={handleGoldSealClick}
                  className="absolute w-24 h-24 rounded-full flex items-center justify-center transition-all hover:scale-110 group/seal cursor-pointer z-10"
                  style={{
                    bottom: '16%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    animation: 'pulse 2s ease-in-out infinite',
                  }}
                  aria-label="Click to open invitation"
                  title="Click to open"
                >
                  {/* Subtle hover glow effect */}
                  <div className="absolute inset-0 rounded-full bg-rose-gold/0 group-hover/seal:bg-rose-gold/30 transition-all duration-300 animate-glow" />

                  {/* Outer ring indicator */}
                  <div className="absolute inset-[-6px] rounded-full border-2 border-rose-gold/30 group-hover/seal:border-rose-gold/60 transition-all duration-300" />

                  {/* Inner pulse ring */}
                  <div className="absolute inset-0 rounded-full border border-rose-gold/20 animate-ping" />
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
          <p className="text-sm md:text-base tracking-widest text-burgundy/80 uppercase font-medium">
            You are cordially invited to celebrate our wedding
          </p>
          <div className="flex items-center justify-center gap-2">
            <div className="h-px w-8 bg-rose-gold/50" />
            <Sparkles className="text-rose-gold w-4 h-4" />
            <div className="h-px w-8 bg-rose-gold/50" />
          </div>
          <p className="text-burgundy/60 font-light text-sm animate-pulse">
            Click the gold seal to open your invitation
          </p>
        </div>

        {/* Like button */}
        <button
          onClick={() => setLiked(!liked)}
          className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-burgundy hover:bg-burgundy/5 transition-all duration-300 group"
          aria-label="Like invitation"
        >
          <Heart
            className={`w-6 h-6 transition-all ${liked ? 'fill-burgundy text-burgundy scale-110' : 'text-burgundy group-hover:scale-110'
              }`}
            strokeWidth={1.5}
          />
        </button>
      </div>

      {/* Animation page reveal */}
      {isOpening && (
        <div
          className="fixed inset-0 bg-gradient-to-b from-rose-gold/90 to-burgundy/90 pointer-events-none z-50"
          style={{
            animation: 'pageReveal 1.2s ease-out forwards',
          }}
        >
          {/* Reveal content preview */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-burgundy animate-pulse">
              <Heart className="w-16 h-16 mx-auto mb-4 animate-bounce" />
              <p className="text-xl font-light tracking-widest">Opening your invitation...</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @supports (perspective: 1000px) {
          .perspective {
            perspective: 1200px;
          }
        }
        
        @keyframes float-heart {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
            opacity: 0.6;
          }
        }
        
        .animate-float-heart {
          animation: float-heart 4s ease-in-out infinite;
        }
        
        @keyframes sparkle {
          0%, 100% {
            transform: scale(0) rotate(0deg);
            opacity: 0;
          }
          50% {
            transform: scale(1) rotate(180deg);
            opacity: 1;
          }
        }
        
        .animate-sparkle {
          animation: sparkle 2s ease-in-out infinite;
        }

        @keyframes pageReveal {
          0% { opacity: 0; transform: scale(1.1); }
          15% { opacity: 1; transform: scale(1); }
          85% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.95); }
        }

        @keyframes envelopeOpen {
          0% { transform: rotateX(0deg); opacity: 0; }
          100% { transform: rotateX(-180deg); opacity: 1; }
        }
      `}</style>
    </div>
  )
}

