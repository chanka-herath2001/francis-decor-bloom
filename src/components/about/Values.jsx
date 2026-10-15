import { useState } from 'react'
import { motion } from 'motion/react'
import Title from '../ui/Title'
import Cutout from '../ui/Cutout'
import { WaveEdge } from '../ui/Decor'
import { values } from '../../data/site'

const shapes = ['flower', 'bloom', 'scallop', 'flower']

// Four-petal paper flowers on crimson; each one spins over to reveal what we mean.
export default function Values() {
  return (
    <section className="relative overflow-hidden bg-crimson py-28 md:py-36">
      <WaveEdge color="var(--color-cream)" />
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Title script="What We Believe" sub="Tap a flower" tone="text-cream" subTone="text-blush" />
        <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-8 lg:grid-cols-4">
          {values.map((v, i) => (
            <Flower key={v.title} {...v} shape={shapes[i]} delay={i * 0.12} />
          ))}
        </div>
      </div>
      <WaveEdge color="var(--color-cream)" flip />
    </section>
  )
}

function Flower({ title, text, color, shape, delay }) {
  const [on, setOn] = useState(false)
  return (
    <motion.button
      onClick={() => setOn((o) => !o)}
      onPointerEnter={(e) => e.pointerType === 'mouse' && setOn(true)}
      onPointerLeave={(e) => e.pointerType === 'mouse' && setOn(false)}
      className="aspect-square w-full [perspective:900px]"
      initial={{ opacity: 0, scale: 0.5, rotate: -30 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: 'spring', stiffness: 110, damping: 12, delay }}
      aria-pressed={on}
      aria-label={`${title}: ${text}`}
    >
      <motion.div className="relative h-full w-full [transform-style:preserve-3d]" animate={{ rotateY: on ? 180 : 0 }} transition={{ duration: 0.8 }}>
        <Cutout shape={shape} color={color} className="absolute inset-0 flex items-center justify-center [backface-visibility:hidden]">
          <span className="font-script text-[1.7rem] text-wine sm:text-5xl">{title}</span>
        </Cutout>
        <Cutout
          shape={shape}
          color="#fbf3e6"
          className="absolute inset-0 flex items-center justify-center px-[18%] [backface-visibility:hidden] [transform:rotateY(180deg)]"
        >
          <span className="text-xs italic leading-snug text-cocoa sm:text-lg">{text}</span>
        </Cutout>
      </motion.div>
    </motion.button>
  )
}
