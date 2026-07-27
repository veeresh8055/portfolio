import { useEffect, useState } from "react"
import { Volume2 } from "lucide-react"

import ElectricBorder from "./ElectricBorder"

const taglines = [
  "Open source contributor.",
  "I own a vintage iPhone.",
  "Creating with code. Small details matter.",
]

const spokenName = "Veeresh B C"
const availabilityText = "Available for work"

// CREDIT
// Component inspired by @BalintFerenczy on X
// https://codepen.io/BalintFerenczy/pen/KwdoyEN
export default function Profile() {
  const [index, setIndex] = useState(0)

  const speakName = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      return
    }

    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(spokenName)
    utterance.rate = 0.95
    utterance.pitch = 1
    utterance.lang = "en-IN"
    window.speechSynthesis.speak(utterance)
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % taglines.length)
    }, 2800)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-6 sm:px-5 sm:py-8 lg:px-7">
      <div className="flex items-start gap-4 sm:gap-5">
        <div className="flex shrink-0 items-start">
          <div className="group relative aspect-square w-[clamp(6.75rem,16vw,9rem)] sm:w-[clamp(7.5rem,15vw,10rem)] md:w-[clamp(8rem,14vw,11rem)]">
            <div className="relative h-full w-full overflow-hidden rounded-full bg-card shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
              <img
                src="/src/assets/hero.png"
                alt="Veeresh B C"
                className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            <ElectricBorder
              color="#7df9ff"
              speed={1}
              chaos={0.12}
              borderRadius={9999}
              className="pointer-events-none !absolute !inset-0 z-10 aspect-square rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{ borderRadius: "50%" }}>
              <div className="h-full w-full" />
            </ElectricBorder>
          </div>
        </div>

        <div className="relative min-w-0 flex-1 overflow-hidden rounded-3xl border border-border/60 bg-card/70 p-4 shadow-sm backdrop-blur-sm sm:p-5 lg:p-6">
          <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,rgba(15,23,42,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.05)_1px,transparent_1px)] bg-size-[48px_48px]" />
          <div className="relative flex min-h-[6.75rem] flex-col justify-center gap-2 sm:min-h-32 sm:gap-3">
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="min-w-0 space-y-1.5 sm:space-y-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3 py-1 text-[0.68rem] font-mono text-muted-foreground sm:text-xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  {availabilityText}
                </div>
                <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                  <h1 className="font-heading text-[clamp(1.55rem,4vw,3.25rem)] font-semibold tracking-tight text-foreground">
                    VEERESH B C
                  </h1>
                  <button
                    type="button"
                    onClick={speakName}
                    aria-label={`Play spoken name for ${spokenName}`}
                    className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border/60 bg-background/80 text-muted-foreground transition-colors hover:text-foreground sm:h-11 sm:w-11">
                    <Volume2 className="h-5 w-5 sm:h-6 sm:w-6" />
                  </button>
                </div>
                <div className="h-7 overflow-hidden sm:h-8">
                  <p
                    key={index}
                    className="animate-[fadeSlide_0.55s_ease] text-[clamp(0.92rem,1.8vw,1.15rem)] leading-snug text-muted-foreground">
                    {taglines[index]}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
