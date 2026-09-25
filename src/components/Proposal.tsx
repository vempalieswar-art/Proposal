import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { proposalAlways, proposalIntro, proposalMaybe, proposalPromise, proposalQuestion, proposalYes, proposalYesPromise } from '../data/loveStory'
import { HeartAnimation } from './OverlayEffects'
import { Section } from './Section'

type ProposalProps = {
  decision: 'none' | 'yes' | 'maybe'
  celebrationPulse: number
  onYes: () => void
  onMaybe: () => void
}

export function Proposal({ decision, celebrationPulse, onYes, onMaybe }: ProposalProps) {
  const [started, setStarted] = useState(false)
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!started) {
      return undefined
    }

    if (step >= proposalIntro.length) {
      return undefined
    }

    const timeout = window.setTimeout(() => {
      setStep((value) => Math.min(value + 1, proposalIntro.length))
    }, 1500)

    return () => window.clearTimeout(timeout)
  }, [started, step])

  return (
    <Section id="proposal" eyebrow="The Final Proposal 💍" title="The Most Important Question" subtitle="The moment the story becomes the answer.">
      <motion.div
        className="proposal-stage"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        onViewportEnter={() => setStarted(true)}
        transition={{ duration: 0.7 }}
      >
        <div className="proposal-stage__script">
          {proposalIntro.slice(0, step).map((line, index) => (
            <motion.p
              key={`${line}-${index}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              {line}
            </motion.p>
          ))}
        </div>

        {step >= proposalIntro.length ? (
          <motion.div
            className="proposal-question"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <h3>{proposalQuestion}</h3>
            <p>{proposalPromise}</p>

            <div className="proposal-actions">
              <button type="button" className="primary-button primary-button--yes" onClick={onYes}>
                YES, ALWAYS
              </button>
              <button type="button" className="ghost-button" onClick={onMaybe}>
                LET ME THINK
              </button>
            </div>

            <AnimatePresence>
              {decision === 'yes' ? (
                <motion.div
                  className="proposal-response proposal-response--yes"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p>{proposalYes}</p>
                  <span>{proposalYesPromise}</span>
                  <strong>{proposalAlways}</strong>
                </motion.div>
              ) : null}

              {decision === 'maybe' ? (
                <motion.div
                  className="proposal-response proposal-response--maybe"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <p>{proposalMaybe}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        ) : null}

        <HeartAnimation active={decision === 'yes'} pulseKey={celebrationPulse} />
      </motion.div>
    </Section>
  )
}
