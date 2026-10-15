import { motion } from 'motion/react'
import { categories, gallery } from '../../data/gallery'

const blurbs = {
  ceremony: 'Arches, aisles & altars dressed in blooms.',
  reception: 'Head tables, centrepieces & candlelight.',
  florals: 'Bouquets gathered by hand, season by season.',
  details: 'Welcome signs, drapery & little touches.',
  couples: 'The two people all of this is for.',
}

const counts = Object.fromEntries(categories.map((c) => [c.id, gallery.filter((g) => g.category === c.id).length]))

// Pinned paper "menu" (from the plate-and-menu reference) — each course takes a photo from that category.
export default function MenuCard({ active, onPick, className = '' }) {
  return (
    <motion.div
      className={`relative bg-[#fbf6ea] px-6 pb-7 pt-9 text-center shadow-[0_18px_40px_rgba(74,42,31,.3)] ${className}`}
      initial={{ rotate: -8, opacity: 0, y: 30 }}
      whileInView={{ rotate: -3, opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', stiffness: 120, damping: 14 }}
    >
      {['left-4', 'left-1/2 -translate-x-1/2', 'right-4'].map((p) => (
        <span key={p} className={`absolute top-3 h-3 w-3 rounded-full bg-cocoa/70 shadow-[inset_0_1px_2px_rgba(255,255,255,.5)] ${p}`} />
      ))}
      <h3 className="font-serif text-4xl tracking-[0.15em] text-cocoa">MENU</h3>
      <p className="font-hand text-xl text-crimson">pick a course, take a photo</p>
      <ul className="mt-4 space-y-3">
        {categories
          .filter((c) => c.id !== 'all')
          .map((c) => (
            <li key={c.id}>
              <button
                onClick={() => onPick(c.id)}
                className={`group w-full rounded-lg px-2 py-1 transition-colors ${active === c.id ? 'bg-blush/60' : 'hover:bg-butter/40'}`}
              >
                <span className="font-serif text-lg font-semibold italic text-cocoa underline decoration-crimson/40 underline-offset-4 group-hover:decoration-crimson">
                  {c.label}:
                </span>
                <span className="block font-mono text-xs leading-relaxed text-cocoa/75">
                  {blurbs[c.id]} <span className="text-crimson">({counts[c.id]})</span>
                </span>
              </button>
            </li>
          ))}
      </ul>
    </motion.div>
  )
}
