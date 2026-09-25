import { motion } from 'framer-motion'
import { finalMessage, finalSignature } from '../data/loveStory'

export function FinalMessage() {
  return (
    <section className="final-screen">
      <motion.div
        className="final-screen__card"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
      >
        {finalMessage.map((line, index) => (
          <motion.p
            key={line}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.18 }}
          >
            {line.split('\n').map((segment, segmentIndex) => (
              <span key={`${line}-${segmentIndex}`}>
                {segment}
                {segmentIndex < line.split('\n').length - 1 ? <br /> : null}
              </span>
            ))}
          </motion.p>
        ))}

        <motion.p
          className="final-screen__signature"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, delay: finalMessage.length * 0.18 + 0.45 }}
        >
          {finalSignature}
        </motion.p>
      </motion.div>
    </section>
  )
}
