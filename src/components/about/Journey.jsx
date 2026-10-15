import { motion } from 'motion/react'
import Title from '../ui/Title'
import Polaroid from '../ui/Polaroid'
import Cutout from '../ui/Cutout'
import Reveal from '../ui/Reveal'
import { journey } from '../../data/site'

const bubbles = ['#f6c9cf', '#a9c8e6', '#f4d58d']
const shapes = ['wavy', 'oval', 'wavy']

// "A Journey of Love": polaroids zig-zag down the page, joined by hand-drawn dashed arrows.
export default function Journey() {
  return (
    <section className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Title script="A Journey of Love" sub="How every Frances Decor story unfolds" />
        <div className="mt-16 space-y-4">
          {journey.map((j, i) => {
            const flip = i % 2 === 1
            return (
              <div key={j.caption}>
                <div className={`flex flex-col items-center gap-8 sm:flex-row ${flip ? 'sm:flex-row-reverse' : ''}`}>
                  <Reveal from={flip ? 'right' : 'left'} className="w-56 shrink-0 sm:w-64">
                    <Polaroid src={j.image} caption={j.caption} rotate={flip ? 4 : -4} tapeColor={['bg-blush/80', 'bg-sky/80', 'bg-butter/90'][i]} />
                  </Reveal>
                  <Reveal from={flip ? 'left' : 'right'} delay={0.15} className="max-w-sm">
                    <Cutout shape={shapes[i]} color={bubbles[i]} className="px-10 py-10 text-center">
                      <p className="font-script text-4xl text-crimson">0{i + 1}</p>
                      <p className="mt-2 text-xl italic leading-snug text-cocoa">{j.text}</p>
                    </Cutout>
                  </Reveal>
                </div>
                {i < journey.length - 1 && <Arrow flip={flip} />}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Arrow({ flip }) {
  return (
    <svg viewBox="0 0 300 90" className={`mx-auto h-20 w-60 text-crimson/70 ${flip ? '-scale-x-100' : ''}`} fill="none" aria-hidden>
      <motion.path
        d="M50 8C90 80 210 0 250 72"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="7 8"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.8 }}
        transition={{ duration: 1.3 }}
      />
      <motion.path
        d="M238 66l12 8 3-14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2 }}
      />
    </svg>
  )
}
