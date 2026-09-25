import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

type SectionProps = {
  id: string
  eyebrow: string
  title: string
  subtitle?: string
  className?: string
  children: ReactNode
}

export function Section({ id, eyebrow, title, subtitle, className = '', children }: SectionProps) {
  return (
    <motion.section
      id={id}
      className={`romantic-section ${className}`.trim()}
      initial={{ opacity: 1, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.01 }}
    >
      <div className="section-heading">
        <span className="section-eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
      </div>
      {children}
    </motion.section>
  )
}
