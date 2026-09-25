import { motion } from 'framer-motion'

type CursorGlowProps = {
  x: number
  y: number
}

export function CursorGlow({ x, y }: CursorGlowProps) {
  return (
    <div
      className="cursor-glow"
      style={{
        transform: `translate(${x - 180}px, ${y - 180}px)`,
      }}
      aria-hidden="true"
    />
  )
}

function createItems(count: number, seed: number) {
  return Array.from({ length: count }, (_, index) => {
    const value = (seed + index * 17) % 100
    return {
      left: `${(value * 9) % 100}%`,
      top: `${(value * 13 + 11) % 100}%`,
      duration: 14 + ((index + seed) % 8),
      delay: ((index + seed) % 9) * 0.7,
      size: 0.75 + ((index + seed) % 5) * 0.18,
    }
  })
}

export function FloatingHearts() {
  const hearts = createItems(14, 7)

  return (
    <div className="ambient-layer floating-hearts" aria-hidden="true">
      {hearts.map((heart, index) => (
        <motion.span
          key={`${heart.left}-${index}`}
          className="ambient-heart"
          style={{
            left: heart.left,
            top: heart.top,
            fontSize: `${heart.size}rem`,
            animationDuration: `${heart.duration}s`,
            animationDelay: `${heart.delay}s`,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.12, 0.5, 0.12] }}
          transition={{ duration: heart.duration, repeat: Infinity, ease: 'easeInOut' }}
        >
          ♥
        </motion.span>
      ))}
    </div>
  )
}

export function RosePetals() {
  const petals = createItems(18, 29)

  return (
    <div className="ambient-layer rose-petals" aria-hidden="true">
      {petals.map((petal, index) => (
        <motion.span
          key={`${petal.left}-${index}`}
          className="rose-petal"
          style={{
            left: petal.left,
            top: `-${5 + ((index + 1) % 12)}%`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            scale: petal.size,
          }}
          animate={{ y: ['0vh', '110vh'], rotate: [0, 180, 360], opacity: [0, 0.95, 0] }}
          transition={{ duration: petal.duration, repeat: Infinity, ease: 'linear' }}
        />
      ))}
    </div>
  )
}

export function Sparkles() {
  const sparkles = createItems(24, 53)

  return (
    <div className="ambient-layer sparkles" aria-hidden="true">
      {sparkles.map((sparkle, index) => (
        <motion.span
          key={`${sparkle.left}-${index}`}
          className="sparkle-dot"
          style={{
            left: sparkle.left,
            top: sparkle.top,
          }}
          animate={{ opacity: [0.1, 0.9, 0.1], scale: [0.75, 1.15, 0.75] }}
          transition={{ duration: sparkle.duration - 4, repeat: Infinity, delay: sparkle.delay / 2, ease: 'easeInOut' }}
        />
      ))}
    </div>
  )
}

type HeartAnimationProps = {
  active: boolean
  pulseKey: number
}

export function HeartAnimation({ active, pulseKey }: HeartAnimationProps) {
  if (!active) {
    return null
  }

  const hearts = createItems(16, pulseKey + 101)

  return (
    <motion.div
      key={pulseKey}
      className="heart-celebration"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      aria-hidden="true"
    >
      {hearts.map((heart, index) => (
        <motion.span
          key={`${pulseKey}-${index}`}
          className="celebration-heart"
          style={{
            left: heart.left,
            top: heart.top,
          }}
          animate={{
            y: [0, -40 - index * 2, -10],
            opacity: [0, 1, 0],
            scale: [0.7, 1.2, 0.8],
          }}
          transition={{ duration: 2.2 + index * 0.02, delay: index * 0.04, ease: 'easeOut' }}
        >
          ♥
        </motion.span>
      ))}
    </motion.div>
  )
}
