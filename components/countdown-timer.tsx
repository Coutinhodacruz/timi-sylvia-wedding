'use client'

import { useEffect, useState } from 'react'

export default function CountdownTimer() {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTime = () => {
      // Event date: April 4, 2026
      const eventDate = new Date('2026-04-04T00:00:00').getTime()
      const now = new Date().getTime()
      const difference = eventDate - now

      if (difference > 0) {
        setTime({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTime()
    const timer = setInterval(calculateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center gap-8 md:gap-12 py-8">
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-serif text-accent mb-2">
          {time.days.toString().padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm tracking-widest text-muted-foreground uppercase">
          Days
        </div>
      </div>
      <div className="text-4xl md:text-5xl text-accent/50 font-light">:</div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-serif text-accent mb-2">
          {time.hours.toString().padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm tracking-widest text-muted-foreground uppercase">
          Hours
        </div>
      </div>
      <div className="text-4xl md:text-5xl text-accent/50 font-light">:</div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-serif text-accent mb-2">
          {time.minutes.toString().padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm tracking-widest text-muted-foreground uppercase">
          Minutes
        </div>
      </div>
      <div className="text-4xl md:text-5xl text-accent/50 font-light">:</div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-serif text-accent mb-2">
          {time.seconds.toString().padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm tracking-widest text-muted-foreground uppercase">
          Seconds
        </div>
      </div>
    </div>
  )
}
