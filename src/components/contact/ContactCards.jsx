import { motion } from 'motion/react'
import Cutout from '../ui/Cutout'
import { contact } from '../../data/site'

const cards = [
  { label: 'Write to us', value: contact.email, href: `mailto:${contact.email}`, shape: 'flower', color: '#f6c9cf', rot: -4, mono: true },
  { label: 'Call or WhatsApp', value: contact.phone, href: `tel:${contact.phoneIntl}`, shape: 'oval', color: '#a9c8e6', rot: 3, mono: true },
  { label: 'Instagram', value: 'Latest work', href: contact.instagram, shape: 'star', color: '#f4d58d', rot: -2, external: true },
  { label: 'Facebook', value: 'Say hello', href: contact.facebook, shape: 'bloom', color: '#a8bd9b', rot: 4, external: true },
]

// Contact options as colourful paper cut-outs that wobble on hover.
export default function ContactCards() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <ul className="mx-auto grid max-w-xs grid-cols-1 gap-5 min-[420px]:max-w-none min-[420px]:grid-cols-2 sm:gap-8 lg:grid-cols-4">
        {cards.map((c, i) => (
          <motion.li
            key={c.label}
            initial={{ opacity: 0, y: 40, rotate: 0 }}
            whileInView={{ opacity: 1, y: 0, rotate: c.rot }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ type: 'spring', stiffness: 110, damping: 12, delay: i * 0.1 }}
            whileHover={{ rotate: 0, scale: 1.05 }}
          >
            <a href={c.href} target={c.external ? '_blank' : undefined} rel={c.external ? 'noreferrer' : undefined} className="block">
              <Cutout shape={c.shape} color={c.color} className="flex aspect-square flex-col items-center justify-center px-[16%] text-center">
                <span className="eyebrow block text-wine/70">{c.label}</span>
                <span className={`mt-2 block break-all leading-tight text-wine ${c.mono ? 'font-mono text-xs sm:text-sm' : 'font-script text-2xl sm:text-3xl'}`}>{c.value}</span>
              </Cutout>
            </a>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
