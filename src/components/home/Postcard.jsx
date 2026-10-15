import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import Title from '../ui/Title'
import { WaxSeal, Tape } from '../ui/Decor'
import { img } from '../../data/gallery'

const backdrop = ['bride-red-bouquet', 'candles-red-blooms', 'evening-reception', 'candlelit-banquet', 'chiavari-florals', 'couple-teal-suit']

// "Gift registry" postcard over a floral collage — here, an invitation to write to us.
export default function Postcard() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-6">
        {backdrop.map((id) => (
          <img key={id} src={img(id)} alt="" className="h-full w-full object-cover" loading="lazy" />
        ))}
      </div>
      <div className="absolute inset-0 bg-crimson/70 mix-blend-multiply" />
      <div className="absolute inset-0 bg-wine/30" />

      <div className="relative mx-auto max-w-3xl px-5">
        <Title script="Send Us a Postcard" sub="Your story is the greatest gift of all" tone="text-cream" subTone="text-blush" />
        <motion.div
          className="relative mx-auto mt-12 grid max-w-2xl gap-6 bg-paper p-6 shadow-2xl sm:grid-cols-[1.3fr_1fr] sm:p-8"
          initial={{ rotate: 6, y: 80, opacity: 0 }}
          whileInView={{ rotate: -1.5, y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ type: 'spring', stiffness: 80, damping: 14 }}
          whileHover={{ rotate: 0 }}
        >
          <Tape className="-top-3 left-8 -rotate-6" color="bg-butter/90" />
          <div className="sm:border-r sm:border-dashed sm:border-cocoa/30 sm:pr-6">
            <p className="font-mono text-xs tracking-[0.4em] text-cocoa/50">P O S T C A R D</p>
            <p className="mt-4 font-hand text-2xl leading-snug text-cocoa">
              Dear Frances, we’re getting married and we’d love flowers that feel like <span className="text-crimson">us</span>…
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-[50%] bg-crimson px-7 py-3 eyebrow text-cream transition hover:bg-wine"
            >
              Write yours →
            </Link>
          </div>
          <div className="flex flex-col items-end justify-between gap-6">
            <div className="w-24 rotate-3 bg-white p-1.5 shadow [mask:radial-gradient(circle_4px,transparent_96%,#000)_-4px_-4px/12px_12px]">
              <img src={img('ivory-rose-bouquet')} alt="" className="aspect-[4/5] w-full object-cover" />
            </div>
            <div className="w-full space-y-4 font-mono text-sm text-cocoa/60">
              <p className="border-b border-cocoa/30 pb-1">To: Frances Decor</p>
              <p className="border-b border-cocoa/30 pb-1">From: You ♡</p>
            </div>
            <WaxSeal className="h-14 w-14" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
