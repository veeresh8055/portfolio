import { useEffect, useRef } from "react"

import { playSound } from "@/lib/sound-engine"

/**
 * Minimal sound hook compatible with the `useSound` API used by spotlight-logo.
 * It returns a play function and automatically stops the currently playing
 * sound when the component unmounts.
 */
export function useSound(sound, options = {}) {
  const activeSoundRef = useRef(null)

  useEffect(() => {
    return () => {
      activeSoundRef.current?.stop?.()
      activeSoundRef.current = null
    }
  }, [])

  const play = async () => {
    if (!sound?.dataUri) {
      return
    }

    activeSoundRef.current?.stop?.()
    activeSoundRef.current = await playSound(sound.dataUri, options)
  }

  return [play]
}
