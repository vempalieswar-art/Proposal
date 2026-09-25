import { motion } from 'framer-motion'
import {
  entryButtonText,
  entryClosingLine,
  entryGreeting,
  entryQuotes,
  entrySubtitle,
  entryTitle,
} from '../data/loveStory'

type EntryScreenProps = {
  onEnter: () => void
}

export function EntryScreen({ onEnter }: EntryScreenProps) {
  return (
    <section className="entry-screen" aria-label="Romantic entry page">
      <div className="entry-screen__backdrop" aria-hidden="true" />
      <motion.div
        className="entry-card"
        initial={{ opacity: 0, scale: 0.96, y: 18 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="entry-card__phone">
          <div className="entry-card__status" aria-hidden="true">
            <span className="entry-card__pill" />
            <span className="entry-card__time">Love mode</span>
            <span className="entry-card__signal">•••</span>
          </div>

          <div className="entry-card__hero">
            <span className="entry-card__greeting">{entryGreeting}</span>
            <h1>{entryTitle}</h1>
            <p>{entrySubtitle}</p>
          </div>

          <div className="entry-card__quotes" aria-label="Romantic quotes">
            {entryQuotes.map((quote) => (
              <motion.div
                key={quote}
                className="entry-quote"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
              >
                {quote.split('\n').map((line, lineIndex) => (
                  <span key={`${quote}-${lineIndex}`}>
                    {line}
                    {lineIndex < quote.split('\n').length - 1 ? <br /> : null}
                  </span>
                ))}
              </motion.div>
            ))}
          </div>

          <div className="entry-card__footer">
            <button type="button" className="entry-button" onClick={onEnter}>
              {entryButtonText}
            </button>
            <span>{entryClosingLine}</span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
