import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import Polaroid from './Polaroid'
import Cutout from './Cutout'
import { WaveEdge } from './Decor'
import { Doves } from './LineArt'

// Inner-page header: candy-striped backdrop with a framed card, like the striped invitation template.
export default function PageHero({ eyebrow, title, sub, image, caption, flower = '#f4d58d', edge = 'var(--color-cream)' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 140])
  const yFast = useTransform(scrollYProgress, [0, 1], [0, -120])

  return (
    <section ref={ref} className="relative overflow-hidden stripes-thin px-5 pb-28 pt-32 sm:pt-40">
      <motion.div style={{ y }} className="relative mx-auto max-w-xl">
        <motion.div
          className="border-[3px] border-double border-terracotta bg-cream p-2 shadow-2xl"
          initial={{ opacity: 0, y: 40, rotate: -2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 14, delay: 0.3 }}
        >
          <div className="border border-sky px-6 py-12 text-center sm:px-12">
            <p className="eyebrow text-terracotta">{eyebrow}</p>
            <h1 className="mt-2 font-script text-7xl leading-none text-crimson sm:text-8xl">{title}</h1>
            <Doves className="mx-auto mt-3 w-24 text-crimson" />
            <p className="mx-auto mt-3 max-w-sm font-mono text-sm leading-relaxed text-cocoa/80">{sub}</p>
          </div>
        </motion.div>

        {image && (
          <motion.div
            style={{ y: yFast }}
            className="absolute -bottom-16 -right-4 hidden w-40 sm:block md:-right-28 md:w-48"
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 80 }}
          >
            <Polaroid src={image} caption={caption} rotate={6} tapeColor="bg-sage/90" />
          </motion.div>
        )}
        <motion.div
          className="absolute -left-6 -top-12 w-28 md:-left-24 md:w-36"
          initial={{ opacity: 0, scale: 0, rotate: -40 }}
          animate={{ opacity: 1, scale: 1, rotate: -12 }}
          transition={{ delay: 0.9, type: 'spring', stiffness: 120, damping: 10 }}
        >
          <Cutout shape="flower" color={flower} className="flex aspect-square items-center justify-center">
            <span className="font-script text-3xl text-wine">hello</span>
          </Cutout>
        </motion.div>
      </motion.div>
      <WaveEdge color={edge} flip />
    </section>
  )
}
