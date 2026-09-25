import { useCallback, useRef } from 'react'

type Note = {
  frequency: number
  duration: number
  delay: number
  gain?: number
}

const getAudioContext = () => {
  const AudioContextCtor = window.AudioContext || (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext

  if (!AudioContextCtor) {
    return null
  }

  return new AudioContextCtor()
}

export function useRomanticSounds() {
  const contextRef = useRef<AudioContext | null>(null)

  const ensureContext = useCallback(() => {
    if (typeof window === 'undefined') {
      return null
    }

    if (!contextRef.current) {
      contextRef.current = getAudioContext()
    }

    const context = contextRef.current

    if (context?.state === 'suspended') {
      void context.resume()
    }

    return context
  }, [])

  const playNotes = useCallback(
    (notes: Note[]) => {
      const context = ensureContext()

      if (!context) {
        return
      }

      const start = context.currentTime + 0.02

      notes.forEach((note) => {
        const oscillator = context.createOscillator()
        const gainNode = context.createGain()

        oscillator.type = 'sine'
        oscillator.frequency.value = note.frequency

        gainNode.gain.setValueAtTime(0.0001, start + note.delay)
        gainNode.gain.exponentialRampToValueAtTime(note.gain ?? 0.1, start + note.delay + 0.03)
        gainNode.gain.exponentialRampToValueAtTime(0.0001, start + note.delay + note.duration)

        oscillator.connect(gainNode)
        gainNode.connect(context.destination)

        oscillator.start(start + note.delay)
        oscillator.stop(start + note.delay + note.duration + 0.02)
      })
    },
    [ensureContext],
  )

  const playClick = useCallback(() => {
    playNotes([
      { frequency: 520, duration: 0.12, delay: 0, gain: 0.06 },
      { frequency: 740, duration: 0.08, delay: 0.05, gain: 0.04 },
    ])
  }, [playNotes])

  const playReveal = useCallback(() => {
    playNotes([
      { frequency: 392, duration: 0.18, delay: 0, gain: 0.05 },
      { frequency: 523.25, duration: 0.2, delay: 0.12, gain: 0.05 },
      { frequency: 659.25, duration: 0.24, delay: 0.24, gain: 0.05 },
    ])
  }, [playNotes])

  const playYes = useCallback(() => {
    playNotes([
      { frequency: 523.25, duration: 0.16, delay: 0, gain: 0.08 },
      { frequency: 659.25, duration: 0.16, delay: 0.08, gain: 0.08 },
      { frequency: 783.99, duration: 0.2, delay: 0.16, gain: 0.08 },
      { frequency: 1046.5, duration: 0.28, delay: 0.24, gain: 0.08 },
    ])
  }, [playNotes])

  return {
    playClick,
    playReveal,
    playYes,
  }
}
