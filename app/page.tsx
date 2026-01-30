'use client'

import { useState } from 'react'
import InvitationLanding from '@/components/invitation-landing'
import LoveStorySection from '@/components/love-story-section'
import CoupleProfilesSection from '@/components/couple-profiles-section'
import EventDetailsSection from '@/components/event-details-section'
import GallerySection from '@/components/gallery-section'
import GuestbookSection from '@/components/guestbook-section'
import ClosingSection from '@/components/closing-section'

export default function WeddingPage() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false)

  return (
    <>
      {!isInvitationOpen && (
        <InvitationLanding
          onOpen={() => setIsInvitationOpen(true)}
          coupleNames="Sylvia & Timi"
          eventDate="4.4.26"
        />
      )}

      {isInvitationOpen && (
        <main className="min-h-screen bg-background">
          <LoveStorySection />
          <CoupleProfilesSection />
          <EventDetailsSection />
          <GallerySection />
          <GuestbookSection />
          <ClosingSection />
        </main>
      )}
    </>
  )
}
