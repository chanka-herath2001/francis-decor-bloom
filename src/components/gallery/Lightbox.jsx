import { useEffect, useRef } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { stopScroll } from '../layout/SmoothScroll'

// Full-screen viewer (photo shown as a big polaroid): arrows / keyboard / swipe to browse, thumbnails to jump.
export default function Lightbox({ items, index, onClose, onChange }) {
  const item = items[index]
  const dir = useRef(1)
  const thumbs = useRef(null)

  const go = (step) => {
    dir.current = step
    onChange((index + step + items.length) % items.length)
  }

  useEffect(() => {
    stopScroll(true)
    return () => stopScroll(false)
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') go(1)
      if (e.key === 'ArrowLeft') go(-1)
    }
    window.addEventListener('keydown', onKey)
    thumbs.current?.children[index]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <motion.div
      className="fixed inset-0 z-[90] flex flex-col bg-wine/95 text-cream backdrop-blur"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div className="flex items-center justify-between px-5 py-4 sm:px-8">
        <p className="font-mono text-sm text-cream/70">
          {String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}
        </p>
        <button onClick={onClose} className="rounded-[50%] border border-cream/50 px-5 py-2 eyebrow text-cream/90 hover:bg-cream hover:text-crimson">Close ✕</button>
      </div>

      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-4">
        <AnimatePresence mode="popLayout" custom={dir.current}>
          <motion.figure
            key={item.id}
            custom={dir.current}
            className="flex max-h-full flex-col items-center bg-[#fffdf8] p-3 pb-0 shadow-2xl sm:p-4 sm:pb-0"
            initial={(d) => ({ opacity: 0, x: d * 120 })}
            animate={{ opacity: 1, x: 0 }}
            exit={(d) => ({ opacity: 0, x: d * -120 })}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.4}
            onDragEnd={(_, info) => {
              if (info.offset.x < -80) go(1)
              else if (info.offset.x > 80) go(-1)
            }}
          >
            <img src={item.src} alt={item.title} draggable={false} className="max-h-[58svh] w-auto max-w-[80vw] select-none object-contain sm:max-h-[64svh]" />
            <figcaption className="py-3 text-center text-cocoa">
              <span className="block font-hand text-3xl">{item.title}</span>
              <span className="font-mono text-xs uppercase tracking-widest text-crimson">{item.category}</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>

        <NavBtn side="left" onClick={() => go(-1)} />
        <NavBtn side="right" onClick={() => go(1)} />
      </div>

      <div ref={thumbs} className="flex gap-2 overflow-x-auto px-5 py-4 sm:justify-center">
        {items.map((t, i) => (
          <button
            key={t.id}
            onClick={() => {
              dir.current = i > index ? 1 : -1
              onChange(i)
            }}
            className={`h-12 w-16 shrink-0 overflow-hidden transition-all duration-300 ${i === index ? 'opacity-100 ring-2 ring-butter' : 'opacity-40 hover:opacity-80'}`}
            aria-label={`Show ${t.title}`}
          >
            <img src={t.src} alt="" className="h-full w-full object-cover" />
          </button>
        ))}
      </div>
    </motion.div>
  )
}

function NavBtn({ side, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label={side === 'left' ? 'Previous photo' : 'Next photo'}
      className={`absolute top-1/2 hidden h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full border border-cream/40 text-xl transition hover:bg-cream hover:text-crimson sm:flex ${side === 'left' ? 'left-6' : 'right-6'}`}
    >
      {side === 'left' ? '←' : '→'}
    </button>
  )
}
