'use client'

import { useState, useEffect, useRef } from 'react'
import InvitationLanding from '@/components/invitation-landing'
import HeroReveal from '@/components/hero-reveal'
import LoveStorySection from '@/components/love-story-section'
import CoupleProfilesSection from '@/components/couple-profiles-section'
import EventDetailsSection from '@/components/event-details-section'
import DressCodeSection from '@/components/dress-code-section'
import GallerySection from '@/components/gallery-section'
import GuestbookSection from '@/components/guestbook-section'
import GiftsSection from '@/components/gifts-section'
import ClosingSection from '@/components/closing-section'
import SaveTheDateVideo from '@/components/save-the-date-video'

export default function WeddingPage() {
  const [videoCompleted, setVideoCompleted] = useState(false)
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
      {!videoCompleted && (
        <SaveTheDateVideo onComplete={() => setVideoCompleted(true)} />
      )}

      {videoCompleted && !isInvitationOpen && (
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
          <CoupleProfilesSection />
          <EventDetailsSection />
          <DressCodeSection />
          <GallerySection />
          <GuestbookSection />
          <GiftsSection />
          <ClosingSection />
        </main>
      )}
    </>
  )
}
