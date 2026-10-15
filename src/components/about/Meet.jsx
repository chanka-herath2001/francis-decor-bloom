import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Title from '../ui/Title'
import Reveal from '../ui/Reveal'
import GoldFrame from '../ui/GoldFrame'
import { Vinyl, Sticker } from '../ui/Decor'
import { img } from '../../data/gallery'

const frames = [
  { id: 'garland-backdrop', label: 'Backdrops', tone: 'border-sky' },
  { id: 'monstera-tablescape', label: 'Tables', tone: 'border-terracotta' },
  { id: 'ivory-rose-bouquet', label: 'Bouquets', tone: 'border-sage' },
]

// "Further details": a gilded oval portrait of the work, with coloured mini frames.
export default function Meet() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [50, -50])

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 md:grid-cols-2">
        <motion.div style={{ y }} className="relative mx-auto w-full max-w-xs">
          <GoldFrame src={img('candle-head-table')} alt="Candlelit head table" oval imgClass="aspect-[3/4]" />
          <div className="absolute -bottom-8 -left-8 w-24">
            <Vinyl className="h-24 w-24" label="#a9c8e6" />
          </div>
          <div className="absolute -right-6 top-6 w-24">
            <Sticker color="bg-blush" text="text-wine">by hand</Sticker>
          </div>
        </motion.div>

        <div>
          <Title script="Further Details" sub="A little more about how we work" align="left" />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-cocoa/85">
              We source blooms with the season, build every installation ourselves and arrive early on the day to set the
              scene. When guests walk in, all you need to do is enjoy it.
            </p>
          </Reveal>
          <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
            {frames.map((f, i) => (
              <Reveal key={f.id} from="up" delay={0.2 + i * 0.1}>
                <motion.figure whileHover={{ y: -6, rotate: i === 1 ? 2 : -2 }} className={`border-4 border-double bg-white p-1.5 ${f.tone}`}>
                  <img src={img(f.id)} alt={f.label} className="aspect-[3/4] w-full object-cover" loading="lazy" />
                  <figcaption className="pt-1 text-center font-hand text-lg text-cocoa">{f.label}</figcaption>
                </motion.figure>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
