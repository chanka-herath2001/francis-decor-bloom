import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import Title from '../ui/Title'
import { WaveEdge } from '../ui/Decor'
import { details } from '../../data/site'
import { img } from '../../data/gallery'

const photos = [
  [img('forest-aisle'), img('drape-floral-arch')],
  [img('candle-head-table'), img('blossom-tree-centerpiece')],
  [img('bride-white-bouquet'), img('white-orchid-bouquet')],
  [img('gold-welcome-sign'), img('crystal-curtain')],
]

// "The Wedding" accordion: each service opens and swaps the photo collage.
export default function Details() {
  const [open, setOpen] = useState(0)
  const [a, b] = photos[open]

  return (
    <section className="relative overflow-hidden bg-crimson py-28 text-cream md:py-36">
      <WaveEdge color="var(--color-cream)" />
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 md:grid-cols-2">
        <div className="relative mx-auto h-[380px] w-full max-w-md sm:h-[460px]">
          <AnimatePresence mode="popLayout">
            <motion.img
              key={a}
              src={a}
              alt=""
              className="absolute left-0 top-0 h-[70%] w-[72%] object-cover shadow-2xl"
              initial={{ opacity: 0, x: -40, rotate: -6 }}
              animate={{ opacity: 1, x: 0, rotate: -2 }}
              exit={{ opacity: 0, x: 40 }}
              transition={{ duration: 0.6 }}
            />
            <motion.img
              key={b}
              src={b}
              alt=""
              className="absolute bottom-0 right-0 h-[58%] w-[60%] border-[6px] border-cream object-cover shadow-2xl"
              initial={{ opacity: 0, y: 40, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            />
          </AnimatePresence>
        </div>

        <div>
          <Title script="The Details" sub="Everything we can dress in flowers" align="left" tone="text-cream" subTone="text-blush" />
          <ul className="mt-8 border-t border-cream/30">
            {details.map((d, i) => {
              const on = open === i
              return (
                <li key={d.title} className="border-b border-cream/30">
                  <button onClick={() => setOpen(i)} className="flex w-full items-center justify-between py-4 text-left" aria-expanded={on}>
                    <span className={`font-script text-4xl transition-colors ${on ? 'text-butter' : 'text-cream'}`}>{d.title}</span>
                    <motion.span animate={{ rotate: on ? 180 : 0 }} className="text-xl text-blush">⌄</motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <ul className="space-y-1 pb-2 pl-1 font-mono text-sm text-cream/90">
                          {d.items.map((it) => (
                            <li key={it}>✿ {it}</li>
                          ))}
                        </ul>
                        <p className="pb-5 text-lg italic text-cream/80">{d.text}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      <WaveEdge color="var(--color-cream)" flip />
    </section>
  )
}
