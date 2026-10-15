import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Title from '../ui/Title'
import Reveal from '../ui/Reveal'
import GoldFrame from '../ui/GoldFrame'
import Polaroid from '../ui/Polaroid'
import { Sticker } from '../ui/Decor'
import { img } from '../../data/gallery'

// "Our Story": copy on the left, gilded frame + polaroid that drift as you scroll.
export default function Story() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const frameY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const polY = useTransform(scrollYProgress, [0, 1], [120, -120])
  const rot = useTransform(scrollYProgress, [0, 1], [-8, 6])

  return (
    <section ref={ref} className="relative overflow-hidden bg-cream py-24 md:py-32">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:px-8 md:grid-cols-[1.1fr_1fr]">
        <div>
          <Title script="Our Story" sub="From a love of flowers to forever…" align="left" />
          <Reveal delay={0.15}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-cocoa/85">
              Frances Decor began with a simple love of flowers and the way they can change a room. Today we style ceremonies,
              receptions and intimate celebrations — always by hand, and always with a little extra colour.
            </p>
            <p className="mt-4 max-w-lg text-lg leading-relaxed text-cocoa/85">
              We listen first. Your colours, your venue, your favourite song and the way you want people to feel all become
              part of the design.
            </p>
          </Reveal>
          <Reveal delay={0.3} className="mt-8 flex flex-wrap gap-3">
            {['Ceremonies', 'Receptions', 'Florals', 'Details'].map((t, i) => (
              <span key={t} className={`rounded-[50%] px-6 py-2 font-mono text-sm ${['bg-blush', 'bg-sky', 'bg-butter', 'bg-sage'][i]}`}>
                {t}
              </span>
            ))}
          </Reveal>
        </div>

        <div className="relative mx-auto w-full max-w-sm pb-16">
          <motion.div style={{ y: frameY }}>
            <GoldFrame src={img('floral-wall-couple')} alt="Couple beneath a floral wall" />
          </motion.div>
          <motion.div style={{ y: polY, rotate: rot }} className="absolute -bottom-6 -left-10 w-40 sm:-left-16 sm:w-48">
            <Polaroid src={img('couple-teal-suit')} caption="pure joy" hover={false} tapeColor="bg-sage/90" />
          </motion.div>
          <div className="absolute -right-4 -top-8 w-24 sm:-right-10">
            <Sticker color="bg-sky" text="text-wine">since day one</Sticker>
          </div>
        </div>
      </div>
    </section>
  )
}
