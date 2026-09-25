import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { GIRLFRIEND_NAME, HERO_IMAGE } from '../data/loveStory'

type HeroProps = {
  onEnterStory: () => void
  onSoftClick: () => void
}

const heroLine = 'I created this little world just for you.'

export function Hero({ onEnterStory, onSoftClick }: HeroProps) {
  const [typedLine, setTypedLine] = useState('')

  useEffect(() => {
    let index = 0
    const timer = window.setInterval(() => {
      index += 1
      setTypedLine(heroLine.slice(0, index))

      if (index >= heroLine.length) {
        window.clearInterval(timer)
      }
    }, 38)

    return () => window.clearInterval(timer)
  }, [])

  const enterStory = () => {
    onSoftClick()
    onEnterStory()
  }

  return (
    <section className="hero-section" id="top">
      <div className="hero-backdrop" aria-hidden="true" />

      <motion.div
        className="hero-copy"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <span className="hero-kicker">For {GIRLFRIEND_NAME}</span>
        <h1>Hey My Love... ❤️</h1>
        <p className="hero-typewriter" aria-live="polite">
          {typedLine}
          <span className="hero-caret" aria-hidden="true" />
        </p>
        <p className="hero-subtitle">
          A romantic little universe built from memories, promises, and every feeling I could not keep inside.
        </p>

        <div className="hero-actions">
          <button type="button" className="primary-button" onClick={enterStory}>
            Enter Our Story ❤️
          </button>
          <a href="#proposal" className="secondary-button" onClick={onSoftClick}>
            Skip to the question
          </a>
        </div>
      </motion.div>

      <motion.div
        className="hero-showcase"
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut', delay: 0.15 }}
      >
        <div className="hero-photo-frame hero-photo-frame--main">
          <div className="hero-photo-surface hero-photo-surface--image" style={{ backgroundImage: `url(${HERO_IMAGE})` }}>
            <span>Replace this with your favorite couple photo</span>
          </div>
        </div>

        <div className="hero-note hero-note--top">A quiet, glowing place made for us.</div>
        <div className="hero-note hero-note--bottom">Soft light, soft hearts, strong feelings.</div>
      </motion.div>
    </section>
  )
}
