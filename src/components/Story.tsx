import { motion } from 'framer-motion'
import { STORY_IMAGE, storyMilestones } from '../data/loveStory'
import { Section } from './Section'

export function Story() {
  return (
    <Section
      id="our-story"
      eyebrow="Our Story ❤️"
      title="Mana Story... Naa Favourite Story ❤️"
      subtitle="Chinna chinna moments tho start ayyi, naa life lo most beautiful journey ga maarina story."
      className="story-section"
    >
      <div className="story-feature">

        <p>
          A few chapters from the story we are writing together. Each moment matters because it brought us here.
        </p>
      </div>

      <div className="timeline-grid">
        {storyMilestones.map((milestone, index) => (
          <motion.article
            key={milestone.title}
            className={`timeline-card accent-${milestone.accent}`}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: index * 0.07 }}
          >
            <div className="timeline-card__frame">
              <span>{milestone.frame}</span>
            </div>
            <div className="timeline-card__body">
              <span className="timeline-card__date">{milestone.date}</span>
              <h3>{milestone.title}</h3>
              <p style={{ whiteSpace: 'pre-line' }}>{milestone.message}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
