'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Volume2, VolumeX, ChevronRight } from 'lucide-react'

interface SaveTheDateVideoProps {
    onComplete: () => void
}

export default function SaveTheDateVideo({ onComplete }: SaveTheDateVideoProps) {
    const [isMuted, setIsMuted] = useState(true)
    const [progress, setProgress] = useState(0)
    const videoRef = useRef<HTMLVideoElement>(null)

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay blocked:", error)
                // If autoplay fails, we might still need a subtle interaction, 
                // but we'll try to start muted first as it's more reliable.
            })
        }
    }, [])

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100
            setProgress(currentProgress)
        }
    }

    const handleVideoEnd = () => {
        onComplete()
    }

    return (
        <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
            <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src="/std_v2.mp4"
                playsInline
                autoPlay
                muted={isMuted}
                onEnded={handleVideoEnd}
                onTimeUpdate={handleTimeUpdate}
            />

            {/* Controls Overlay - Always available */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-8 right-8 flex gap-4 pointer-events-auto">
                    {/* <button
                        onClick={() => setIsMuted(!isMuted)}
                        className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md border border-white/10 flex items-center justify-center text-white hover:bg-black/40 transition-colors"
                        title={isMuted ? "Unmute" : "Mute"}
                    >
                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button> */}
                    {/* <button
                        onClick={onComplete}
                        className="px-6 py-2 rounded-full bg-accent text-white font-light tracking-widest flex items-center gap-2 hover:bg-accent/80 transition-colors shadow-lg"
                    >
                        SKIP <ChevronRight size={18} />
                    </button> */}
                </div>

                {/* Optional subtle branding that fades out */}
                <div className="absolute top-8 left-8 animate-out fade-out fill-mode-forwards duration-3000 delay-2000">
                    <h2 className="text-white/40 text-xs tracking-[0.4em] uppercase font-light">Sylvia & Timi</h2>
                </div>

                <div className="absolute bottom-8 left-8 right-8 pointer-events-auto">
                    <div className="h-1 bg-white/20 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-rose-gold transition-[width] duration-300"
                            style={{
                                width: `${progress}%`
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
