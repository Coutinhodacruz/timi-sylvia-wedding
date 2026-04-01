'use client'

import { useState, useEffect, useRef, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import InvitationLanding from '@/components/invitation-landing'
import VerifyOTP from '@/components/verify-otp'
import HeroReveal from '@/components/hero-reveal'
import LoveStorySection from '@/components/love-story-section'
import CoupleProfilesSection from '@/components/couple-profiles-section'
import EventDetailsSection from '@/components/event-details-section'
import DressCodeSection from '@/components/dress-code-section'
import GallerySection from '@/components/gallery-section'
import GuestbookSection from '@/components/guestbook-section'
import GiftsSection from '@/components/gifts-section'
import FAQSection from '@/components/faq-section'
import ClosingSection from '@/components/closing-section'
import SaveTheDateVideo from '@/components/save-the-date-video'

function WeddingPageContent() {
  const searchParams = useSearchParams()
  const gParam = searchParams.get('g')

  const [isOtpVerified, setIsOtpVerified] = useState(false)
  const [isInvitationOpen, setIsInvitationOpen] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  // Initialize audio at the parent level so it persists after envelope opens
  useEffect(() => {
    const audioObj = new Audio('/Ife_by_Tchella.mp3')
    audioObj.loop = true
    audioObj.volume = 0.5
    audioRef.current = audioObj

    return () => {
      audioObj.pause()
      audioObj.src = ''
    }
  }, [])

  const handleStartMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Audio autoplay prevented:', e))
    }
  }

  return (
    <>
      {!isOtpVerified && (
        <VerifyOTP emailHex={gParam} onVerified={() => setIsOtpVerified(true)} />
      )}

      {isOtpVerified && !isInvitationOpen && (
        <InvitationLanding
          onOpen={() => setIsInvitationOpen(true)}
          onStartMusic={handleStartMusic}
          coupleNames="Sylvia & Timi"
          eventDate="July 24-25, 2026"
        />
      )}

      {isInvitationOpen && (
        <main className="min-h-screen bg-background animate-in fade-in duration-1000">
          <HeroReveal />
          <div id="love-story">
            <LoveStorySection />
          </div>
          {/* <CoupleProfilesSection /> */}
          <EventDetailsSection />
          <DressCodeSection />
          <GallerySection />
          <FAQSection />
          <GuestbookSection />
          <GiftsSection />
          <ClosingSection />
        </main>
      )}
    </>
  )
}

export default function WeddingPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0D0D0D] flex items-center justify-center">
        <p className="text-[#C9A86B] font-serif tracking-widest text-xl animate-pulse">Loading...</p>
      </div>
    }>
      <WeddingPageContent />
    </Suspense>
  )
}
