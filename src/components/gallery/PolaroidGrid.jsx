import { AnimatePresence, motion } from 'motion/react'
import { categories } from '../../data/gallery'

const tapes = ['bg-blush/80', 'bg-sky/80', 'bg-butter/90', 'bg-sage/90']

// Filter chips plus a wall of straight polaroids that re-flow when the filter changes.
export default function PolaroidGrid({ items, filter, onFilter, counts, onOpen }) {
  return (
    <>
      <div className="mb-12 flex flex-wrap justify-center gap-2 sm:gap-3">
        {categories.map((c, i) => {
          const on = filter === c.id
          return (
            <button
              key={c.id}
              onClick={() => onFilter(c.id)}
              className={`relative rounded-[50%] px-5 py-2.5 font-mono text-sm transition-colors ${on ? 'text-cream' : 'text-cocoa hover:text-crimson'}`}
              aria-pressed={on}
            >
              {on && <motion.span layoutId="chip" className="absolute inset-0 rounded-[50%] bg-crimson" transition={{ type: 'spring', stiffness: 380, damping: 30 }} />}
              {!on && <span className={`absolute inset-0 rounded-[50%] ${['bg-blush', 'bg-sky', 'bg-butter', 'bg-sage', 'bg-blush', 'bg-sky'][i]} opacity-60`} />}
              <span className="relative">
                {c.label} <sup>{counts[c.id]}</sup>
              </span>
            </button>
          )
        })}
      </div>

      <motion.ul layout className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-8 sm:gap-y-12 lg:grid-cols-4">
        <AnimatePresence mode="popLayout">
          {items.map((p, i) => (
            <motion.li
              layout
              key={p.id}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5, delay: Math.min(i, 10) * 0.04 }}
            >
              <motion.button
                onClick={() => onOpen(p)}
                className="group relative block w-full bg-[#fffdf8] p-2.5 pb-0 text-left shadow-[0_10px_24px_rgba(74,42,31,.22)] sm:p-3 sm:pb-0"
                whileHover={{ y: -10, rotate: i % 2 ? 1.5 : -1.5 }}
                transition={{ type: 'spring', stiffness: 260, damping: 16 }}
              >
                <span className={`absolute -top-3 left-1/2 z-10 h-6 w-16 -translate-x-1/2 ${tapes[i % 4]} [clip-path:polygon(4%_0,96%_6%,100%_100%,0_94%)]`} />
                <div className="aspect-square overflow-hidden bg-cocoa/10">
                  <img src={p.src} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <p className="truncate py-2 text-center font-hand text-xl text-cocoa sm:py-3 sm:text-2xl">{p.title}</p>
              </motion.button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </>
  )
}
