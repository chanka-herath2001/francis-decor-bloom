import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Title from '../ui/Title'
import { faqs } from '../../data/site'

const tones = ['bg-blush', 'bg-sky', 'bg-butter', 'bg-sage', 'bg-sky', 'bg-blush']

// Frequently asked questions as soft pill cards that open in place.
export default function Faq() {
  const [open, setOpen] = useState(null)
  return (
    <section className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Title script="Frequently Asked Questions" sub="Everything you might be wondering" size="text-5xl sm:text-7xl" />
        <div className="mt-14 grid items-start gap-5 sm:grid-cols-2">
          {faqs.map((f, i) => {
            const on = open === i
            return (
              <motion.div
                key={f.q}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: (i % 2) * 0.1 }}
                className={`overflow-hidden rounded-[2rem] border-2 border-cocoa/15 ${tones[i]} shadow-[4px_4px_0_rgba(74,42,31,.15)]`}
              >
                <button onClick={() => setOpen(on ? null : i)} className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left" aria-expanded={on}>
                  <span className="font-mono text-sm uppercase tracking-wider text-cocoa">{f.q}</span>
                  <motion.span animate={{ rotate: on ? 45 : 0 }} className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream text-crimson">
                    +
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-lg italic leading-relaxed text-cocoa/85"
                    >
                      {f.a}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
