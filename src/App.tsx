import { useEffect, useState } from 'react'
import confetti from 'canvas-confetti'
import { EntryScreen } from './components/EntryScreen'
import { FinalMessage } from './components/FinalMessage'
import { ApologyLetter } from './components/ApologyLetter'
import { Future } from './components/Future'
import { Hero } from './components/Hero'
import { LoveLetter } from './components/LoveLetter'
import { MemoryGallery } from './components/MemoryGallery'
import { MusicPlayer } from './components/MusicPlayer'
import { Navbar } from './components/Navbar'
import { CursorGlow, FloatingHearts, RosePetals, Sparkles } from './components/OverlayEffects'
import { Proposal } from './components/Proposal'
import { Reasons } from './components/Reasons'
import { Story } from './components/Story'
import { WhyYou } from './components/WhyYou'
import { useRomanticSounds } from './lib/useRomanticSounds'
import './App.css'

type Decision = 'none' | 'yes' | 'maybe'

function App() {
  const [hasEntered, setHasEntered] = useState(() => Boolean(window.location.hash))
  const [pendingSection, setPendingSection] = useState<string | null>(() =>
    window.location.hash ? window.location.hash.slice(1) : null,
  )
  const [cursor, setCursor] = useState({ x: 0, y: 0 })
  const [decision, setDecision] = useState<Decision>('none')
  const [celebrationPulse, setCelebrationPulse] = useState(0)
  const { playClick, playReveal, playYes } = useRomanticSounds()

  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash

      if (!hash) {
        return
      }

      setHasEntered(true)
      setPendingSection(hash.slice(1))
    }

    scrollToHash()

    window.addEventListener('hashchange', scrollToHash)

    return () => window.removeEventListener('hashchange', scrollToHash)
  }, [])

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setCursor({ x: event.clientX, y: event.clientY })
    }

    window.addEventListener('pointermove', handleMove)

    return () => window.removeEventListener('pointermove', handleMove)
  }, [])

  useEffect(() => {
    if (!hasEntered || !pendingSection) {
      return
    }

    const timeout = window.setTimeout(() => {
      document.getElementById(pendingSection)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setPendingSection(null)
    }, 120)

    return () => window.clearTimeout(timeout)
  }, [hasEntered, pendingSection])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const enterStory = () => {
    playReveal()
    scrollToSection('our-story')
  }

  const enterExperience = () => {
    playReveal()
    setHasEntered(true)
    setPendingSection('our-story')
    window.setTimeout(() => scrollToSection('our-story'), 150)
  }

  const celebrateYes = () => {
    playYes()
    setDecision('yes')
    setCelebrationPulse((value) => value + 1)

    confetti({
      particleCount: 120,
      spread: 72,
      origin: { y: 0.68 },
      colors: ['#ff8fb1', '#ffd6e7', '#fff7fb', '#ffc4d6', '#f5c5ff'],
      scalar: 1.08,
    })

    confetti({
      particleCount: 50,
      angle: 60,
      spread: 55,
      origin: { x: 0.2, y: 0.72 },
      colors: ['#ff9ec1', '#ffe4ef', '#ffd166'],
    })

    confetti({
      particleCount: 50,
      angle: 120,
      spread: 55,
      origin: { x: 0.8, y: 0.72 },
      colors: ['#ff9ec1', '#ffe4ef', '#ffd166'],
    })
  }

  const maybeLater = () => {
    playClick()
    setDecision('maybe')
  }

  return (
    <div className="app-shell">
      <CursorGlow x={cursor.x} y={cursor.y} />
      <FloatingHearts />
      <RosePetals />
      <Sparkles />

      {hasEntered ? <Navbar /> : null}

      {!hasEntered ? (
        <EntryScreen onEnter={enterExperience} />
      ) : (
        <main className="page-stack">
          <Hero onEnterStory={enterStory} onSoftClick={playClick} />
          <Story />
          <WhyYou onInteract={playClick} />
          <MemoryGallery onInteract={playClick} />
          <ApologyLetter />
          <LoveLetter />
          <Reasons onInteract={playClick} />
          <Future />
          <Proposal
            decision={decision}
            celebrationPulse={celebrationPulse}
            onYes={celebrateYes}
            onMaybe={maybeLater}
          />
          <FinalMessage />
        </main>
      )}

      {hasEntered ? <MusicPlayer onInteract={playClick} /> : null}
    </div>
  )
}

export default App
