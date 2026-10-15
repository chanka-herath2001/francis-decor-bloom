import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'motion/react'
import Cutout from '../ui/Cutout'
import Polaroid from '../ui/Polaroid'
import Button from '../ui/Button'
import { Vinyl, WaveEdge, Sticker } from '../ui/Decor'
import { Doves } from '../ui/LineArt'
import { img } from '../../data/gallery'

const pop = (d) => ({ hidden: { opacity: 0, scale: 0.6, y: 40 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 14, delay: d } } })

// Crimson hero: scalloped invitation card surrounded by paper cut-outs and polaroids.
export default function Hero({ ready }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const up = useTransform(scrollYProgress, [0, 1], [0, -160])
  const down = useTransform(scrollYProgress, [0, 1], [0, 120])
  const spin = useTransform(scrollYProgress, [0, 1], [0, 25])
  const state = ready ? 'show' : 'hidden'

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-crimson px-4 pb-24 pt-28 sm:pt-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,#c0304a,transparent_60%)]" />

      <motion.div initial="hidden" animate={state} className="relative mx-auto h-full max-w-6xl">
        {/* floating collage */}
        <motion.div style={{ y: up }} className="absolute left-0 top-4 hidden w-44 md:block lg:w-52">
          <motion.div variants={pop(0.5)}>
          <Polaroid src={img('blush-arch-vows')} caption="vows ♡" rotate={-6} />
          </motion.div>
        </motion.div>
        <motion.div style={{ y: down }} className="absolute bottom-0 left-6 hidden w-40 md:block lg:w-48">
          <motion.div variants={pop(0.7)}>
          <Polaroid src={img('bride-red-bouquet')} caption="garnet blooms" rotate={5} tapeColor="bg-sky/80" />
          </motion.div>
        </motion.div>
        <motion.div style={{ y: up }} className="absolute right-2 top-0 hidden w-44 md:block lg:w-52">
          <motion.div variants={pop(0.6)}>
          <Polaroid src={img('circle-arch-sunset')} caption="golden hour" rotate={7} tapeColor="bg-butter/90" />
          </motion.div>
        </motion.div>
        <motion.div variants={pop(0.9)} style={{ rotate: spin }} className="absolute right-[18%] top-[-10px] hidden lg:block">
          <Vinyl className="h-28 w-28" />
        </motion.div>
        <motion.div style={{ y: down }} className="absolute bottom-6 right-0 hidden w-48 md:block lg:w-56">
          <motion.div variants={pop(0.8)}>
          <Link to="/about" className="block transition-transform hover:-rotate-3 hover:scale-105">
            <Cutout shape="flower" color="#f6c9cf" className="flex aspect-square items-center justify-center text-center">
              <p className="font-script text-3xl leading-none text-wine">The details</p>
              <Doves className="mx-auto mt-1 w-16 text-crimson" />
              <p className="eyebrow mt-1 text-[0.6rem] text-wine/60">Tap here</p>
            </Cutout>
          </Link>
          </motion.div>
        </motion.div>

        {/* the invitation */}
        <motion.div variants={pop(0.2)} className="relative z-10 mx-auto w-full max-w-[36rem]">
          <Cutout shape="oval" color="#fbf3e6" className="px-8 py-20 text-center sm:px-20 sm:py-24">
            <p className="eyebrow text-cocoa/70">Wedding & event styling</p>
            <h1 className="mt-3 font-script text-6xl leading-[0.9] text-crimson sm:text-8xl">
              Frances
              <br />
              <span className="text-rose">Decor</span>
            </h1>
            <p className="mx-auto mt-5 max-w-xs font-serif text-lg italic text-cocoa/80">
              Colourful florals, candlelit tables & every little detail in between.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button to="/contact">Plan your day</Button>
              <Button to="/gallery" variant="outline" className="text-crimson">Gallery</Button>
            </div>
          </Cutout>
          <motion.div variants={pop(1.1)} className="absolute -left-2 -top-4 w-24 sm:-left-6 sm:w-28">
            <Sticker color="bg-butter">hello!</Sticker>
          </motion.div>
        </motion.div>

        {/* mobile polaroid pair */}
        <div className="relative mt-10 flex justify-center gap-4 md:hidden">
          <Polaroid src={img('blush-arch-vows')} caption="vows ♡" rotate={-5} className="w-36" />
          <Polaroid src={img('circle-arch-sunset')} caption="golden hour" rotate={5} className="mt-6 w-36" tapeColor="bg-butter/90" />
        </div>
      </motion.div>

      <WaveEdge color="var(--color-cream)" flip />
    </section>
  )
}
