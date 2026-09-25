import { motion } from 'framer-motion'
import { futureDreams } from '../data/loveStory'
import { Section } from './Section'

export function Future() {
  return (
    <Section id="future" eyebrow="Our Future 🌙" title="Can You Imagine Us?" subtitle="The kind of future that begins with small moments and ends with forever.">
      <div className="future-grid">
        {futureDreams.map((dream, index) => (
          <motion.article
            key={dream.title}
            className="future-card"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.06 }}
          >
            <span className="future-card__icon">{dream.icon}</span>
            <h3>{dream.title}</h3>
            <p>{dream.note}</p>
          </motion.article>
        ))}
      </div>

      <motion.p
        className="future-ending"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        I do not know exactly what tomorrow looks like... But I know who I want beside me.
      </motion.p>
    </Section>
  )
}
