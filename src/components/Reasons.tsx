import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { reasons } from '../data/loveStory'
import { Section } from './Section'

type ReasonsProps = {
  onInteract?: () => void
}

export function Reasons({ onInteract }: ReasonsProps) {
  const [index, setIndex] = useState(0)

  const nextReason = () => {
    onInteract?.()
    setIndex((value) => (value + 1) % reasons.length)
  }

  return (
    <Section id="reasons" eyebrow="100 Reasons ❤️" title="100 Little Reasons Why I Love You" subtitle="One reason at a time, because even a hundred still feels too small.">
      <div className="reasons-panel">
        <div className="reasons-panel__header">
          <span>Reason {index + 1} of {reasons.length}</span>
          <div className="reasons-panel__bar" aria-hidden="true">
            <span style={{ width: `${((index + 1) / reasons.length) * 100}%` }} />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className="reasons-panel__card"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.35 }}
          >
            <p>{reasons[index]}</p>
          </motion.div>
        </AnimatePresence>

        <button type="button" className="primary-button" onClick={nextReason}>
          Give Me Another Reason ❤️
        </button>
      </div>
    </Section>
  )
}
