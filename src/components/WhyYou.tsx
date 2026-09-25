import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { whyYouCards } from '../data/loveStory'
import { Section } from './Section'

type WhyYouProps = {
  onInteract?: () => void
}

export function WhyYou({ onInteract }: WhyYouProps) {
  const [index, setIndex] = useState(0)

  const nextCard = () => {
    onInteract?.()
    setIndex((value) => (value + 1) % whyYouCards.length)
  }

  return (
    <Section id="why-you" eyebrow="Why You?" title="Why You?" subtitle="A few reasons, then a few more, then the ones I have not found words for yet.">
      <div className="why-you-layout">
        <AnimatePresence mode="wait">
          <motion.article
            key={index}
            className="why-card"
            initial={{ opacity: 0, y: 28, rotate: -1 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            exit={{ opacity: 0, y: -18, rotate: 1 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <span className="why-card__index">Card {index + 1} of {whyYouCards.length}</span>
            <p>{whyYouCards[index]}</p>
          </motion.article>
        </AnimatePresence>

        <div className="why-you-meta">
          <p>
            Because every reason is true, but even together they still feel smaller than what you mean to me.
          </p>
          <button type="button" className="primary-button" onClick={nextCard}>
            Show me another reason ❤️
          </button>
        </div>
      </div>
    </Section>
  )
}
