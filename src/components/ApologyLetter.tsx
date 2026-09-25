import { motion } from 'framer-motion'
import { apologyParagraphs } from '../data/loveStory'
import { Section } from './Section'

export function ApologyLetter() {
  return (
    <Section
      id="apology"
      eyebrow="NEKU CHALA CHALA SORRY MAHH"
      title="Mundhu nenu neku oka maata cheppali mahh..."
      subtitle="A slow, handwritten apology before the promise and the final question."
    >
      <motion.article
        className="apology-letter"
        initial={{ opacity: 1, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.01 }}
      >
        {apologyParagraphs.map((paragraph, index) => (
          <motion.p
            key={`${paragraph}-${index}`}
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
