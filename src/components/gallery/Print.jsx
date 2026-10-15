import { motion } from 'motion/react'

// Where older prints land once a new one ejects (relative to the camera slot).
const PILE_WIDE = [
  { x: 0, y: 0, r: 0 },
  { x: 250, y: -330, r: 8 },
  { x: 300, y: -110, r: -6 },
  { x: 220, y: 80, r: 5 },
  { x: -250, y: 40, r: -9 },
]
const PILE_NARROW = [
  { x: 0, y: 0, r: 0 },
  { x: 90, y: 70, r: 8 },
  { x: -90, y: 80, r: -7 },
  { x: 60, y: 120, r: -4 },
  { x: -60, y: 130, r: 6 },
]

// One instant print: slides out of the camera, develops, then joins the pile.
export default function Print({ photo, index, wide, onOpen }) {
  const spot = (wide ? PILE_WIDE : PILE_NARROW)[index]
  const latest = index === 0

  return (
    <motion.button
      onClick={() => onOpen?.(photo)}
      className="absolute left-0 top-0 w-full cursor-zoom-in bg-[#fffdf8] p-2.5 pb-0 shadow-[0_10px_24px_rgba(40,10,10,.35)]"
      style={{ zIndex: 10 - index }}
      initial={{ y: '-100%', x: 0, rotate: 0 }}
      animate={{ y: latest ? 0 : spot.y, x: spot.x, rotate: spot.r, scale: latest ? 1 : wide ? 0.82 : 0.7 }}
      exit={{ opacity: 0 }}
      transition={latest ? { duration: 1.4, ease: [0.3, 0.7, 0.4, 1], delay: 0.3 } : { type: 'spring', stiffness: 90, damping: 15 }}
      whileHover={{ scale: latest ? 1.04 : 0.88 }}
      aria-label={`Open ${photo.title}`}
    >
      <div className="relative aspect-square overflow-hidden bg-cocoa">
        <motion.img
          src={photo.src}
          alt={photo.title}
          className="h-full w-full object-cover"
          initial={{ filter: 'brightness(0.15) sepia(1) blur(6px)', opacity: 0.6 }}
          animate={{ filter: 'brightness(1) sepia(0) blur(0px)', opacity: 1 }}
          transition={{ duration: 3, delay: 1 }}
        />
      </div>
      <p className="truncate py-2 text-center font-hand text-xl text-cocoa">{photo.title}</p>
    </motion.button>
  )
}
