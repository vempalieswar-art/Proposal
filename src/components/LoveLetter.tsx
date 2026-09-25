import { motion } from 'framer-motion'
import { letterParagraphs } from '../data/loveStory'
import { Section } from './Section'

export function LoveLetter() {
  return (
    <Section id="letter" eyebrow="A Letter for You 💌" title="A Letter I Couldn't Say Out Loud..." subtitle="Slowly revealed, like a note passed through time.">
      <motion.article
        className="love-letter"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.01 }}
      >
        {letterParagraphs.map((paragraph, index) => (
          <motion.p
            key={paragraph}
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.01, delay: index * 0.01 }}
          >
            {paragraph.split('\n').map((line, lineIndex) => (
              <span key={`${paragraph}-${lineIndex}`}>
                {line}
                {lineIndex < paragraph.split('\n').length - 1 ? <br /> : null}
              </span>
            ))}
          </motion.p>
        ))}
      </motion.article>
    </Section>
  )
}
