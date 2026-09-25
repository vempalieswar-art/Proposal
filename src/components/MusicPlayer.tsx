import { useEffect, useRef, useState } from 'react'
import { SONG_PATH } from '../data/loveStory'

type MusicPlayerProps = {
  onInteract: () => void
}

export function MusicPlayer({ onInteract }: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const audio = new Audio(SONG_PATH)
    audio.loop = true
    audio.preload = 'none'
    audioRef.current = audio

    const handleEnded = () => setIsPlaying(false)
    const handleError = () => setHasError(true)

    audio.addEventListener('ended', handleEnded)
    audio.addEventListener('error', handleError)

    return () => {
      audio.pause()
      audio.removeEventListener('ended', handleEnded)
      audio.removeEventListener('error', handleError)
      audio.remove()
    }
  }, [])

  const togglePlayback = async () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    onInteract()

    if (audio.paused) {
      try {
        await audio.play()
        setIsPlaying(true)
      } catch {
        setHasError(true)
      }
    } else {
      audio.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current

    if (!audio) {
      return
    }

    audio.muted = !audio.muted
    setIsMuted(audio.muted)
  }

  return (
    <div className={`music-player ${isOpen ? 'open' : ''}`}>
      <button type="button" className="music-player__main" onClick={togglePlayback}>
        <span className="music-player__icon">🎵</span>
        <span>
          {isPlaying ? 'Pause Our Song' : 'Play Our Song'}
          <small>{hasError ? 'Add /assets/our-song.mp3 to play' : 'Romantic background music'}</small>
        </span>
      </button>

      <button type="button" className="music-player__toggle" onClick={() => setIsOpen((value) => !value)}>
        {isOpen ? '−' : '+'}
      </button>

      {isOpen ? (
        <div className="music-player__controls" role="group" aria-label="Music controls">
          <button type="button" className="music-control-button" onClick={togglePlayback}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
          <button type="button" className="music-control-button" onClick={toggleMute}>
            {isMuted ? 'Unmute' : 'Mute'}
          </button>
        </div>
      ) : null}
    </div>
  )
}
