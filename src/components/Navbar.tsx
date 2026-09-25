import { motion } from 'framer-motion'
import { GIRLFRIEND_NAME } from '../data/loveStory'

const links = [
  { href: '#our-story', label: 'Story' },
  { href: '#why-you', label: 'Why You' },
  { href: '#memories', label: 'Memories' },
  { href: '#letter', label: 'Letter' },
  { href: '#reasons', label: '100 Reasons' },
  { href: '#future', label: 'Future' },
  { href: '#proposal', label: 'Proposal' },
]

export function Navbar() {
  return (
    <motion.header
      className="topbar"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <a className="brand" href="#top" aria-label={`Back to the start for ${GIRLFRIEND_NAME}`}>
        <span className="brand-mark">❤</span>
        <span>
          <strong>{GIRLFRIEND_NAME}</strong>
          <small>Our little universe</small>
        </span>
      </a>

      <nav className="topbar-nav" aria-label="Romantic site sections">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </motion.header>
  )
}
