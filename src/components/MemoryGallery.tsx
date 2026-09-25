import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { memoryGallery } from '../data/loveStory'
import { Section } from './Section'

type MemoryGalleryProps = {
  onInteract?: () => void
}

export function MemoryGallery({ onInteract }: MemoryGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const activeMemory = activeIndex === null ? null : memoryGallery[activeIndex]

  return (
    <Section id="memories" eyebrow="Our Memories 📸" title="A Cinematic Gallery of Us" subtitle="Polaroids, soft light, and the moments I wish I could hold onto forever.">
      <div className="memory-grid">
        {memoryGallery.map((memory, index) => (
          <motion.button
            key={memory.caption}
            type="button"
            className={`memory-card accent-${memory.accent}`}
            initial={{ opacity: 0, scale: 0.94, rotate: index % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
            whileHover={{ scale: 1.03, rotate: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            onClick={() => {
              onInteract?.()
              setActiveIndex(index)
            }}
          >
            <div className="memory-card__photo" style={{ backgroundImage: `url(${memory.image})` }}>
            </div>
            <p>{memory.caption}</p>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeMemory ? (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              className="lightbox__panel"
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: 12 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
            >
              <div className="lightbox__photo" style={{ backgroundImage: `url(${activeMemory.image})` }}>
              </div>
              <p>{activeMemory.caption}</p>
              <button
                type="button"
                className="ghost-button"
                onClick={() => {
                  onInteract?.()
                  setActiveIndex(null)
                }}
              >
                Close memory
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Section>
  )
}
