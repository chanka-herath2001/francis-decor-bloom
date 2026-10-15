import { motion } from 'motion/react'

// Scalloped / wavy edge that joins two coloured sections (place at a section's top or bottom).
export function WaveEdge({ color = 'var(--color-cream)', flip = false, className = '' }) {
  return (
    <svg
      viewBox="0 0 1200 40"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute inset-x-0 z-10 h-6 w-full sm:h-10 ${flip ? 'bottom-0 rotate-180' : 'top-0'} ${className}`}
      aria-hidden
    >
      <path d={`M0 0H1200V12${Array.from({ length: 24 }, (_, i) => `Q${1200 - i * 50 - 25} 44 ${1200 - (i + 1) * 50} 12`).join('')}Z`} fill={color} />
    </svg>
  )
}

// Spinning starburst sticker with a word in the middle.
export function Sticker({ children, className = '', color = 'bg-butter', text = 'text-cocoa' }) {
  return (
    <motion.div
      className={`flex aspect-square items-center justify-center ${color} ${text} [clip-path:polygon(50%_0,57%_12%,69%_3%,72%_17%,85%_12%,83%_26%,97%_27%,90%_39%,100%_50%,90%_61%,97%_73%,83%_74%,85%_88%,72%_83%,69%_97%,57%_88%,50%_100%,43%_88%,31%_97%,28%_83%,15%_88%,17%_74%,3%_73%,10%_61%,0_50%,10%_39%,3%_27%,17%_26%,15%_12%,28%_17%,31%_3%,43%_12%)] ${className}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
    >
      <span className="px-3 text-center font-script text-2xl leading-none">{children}</span>
    </motion.div>
  )
}

// Wax seal with a monogram.
export function WaxSeal({ letter = 'F', className = 'h-20 w-20', color = '#9b1b30' }) {
  return (
    <div
      className={`flex items-center justify-center rounded-[46%_54%_50%_50%/52%_46%_54%_48%] font-script text-3xl text-white/90 shadow-[inset_0_-4px_8px_rgba(0,0,0,.35),inset_0_4px_6px_rgba(255,255,255,.25),0_6px_14px_rgba(0,0,0,.3)] ${className}`}
      style={{ background: `radial-gradient(circle at 40% 35%, ${color}cc, ${color} 55%, #3d0712)` }}
    >
      <span className="flex h-[72%] w-[72%] items-center justify-center rounded-full border border-white/30 shadow-[inset_0_2px_4px_rgba(0,0,0,.35)]">
        {letter}
      </span>
    </div>
  )
}

// Spinning vinyl record — pure decoration, a nod to the first-dance playlist.
export function Vinyl({ className = 'h-28 w-28', label = '#f6c9cf' }) {
  return (
    <motion.div
      className={`rounded-full shadow-xl ${className}`}
      style={{ background: `radial-gradient(circle, ${label} 0 17%, #111 18% 20%, #222 21%, #0c0c0c 30%, #262626 31%, #0c0c0c 40%, #2a2a2a 41%, #0c0c0c 55%, #222 56%, #0b0b0b 70%)` }}
      animate={{ rotate: 360 }}
      transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
      aria-hidden
    >
      <div className="h-full w-full rounded-full bg-[conic-gradient(from_30deg,transparent_0_20%,rgba(255,255,255,.18)_25%,transparent_30%_70%,rgba(255,255,255,.12)_75%,transparent_80%)]" />
    </motion.div>
  )
}

// Strip of washi tape.
export function Tape({ className = '', color = 'bg-sky/80' }) {
  return <span className={`absolute z-10 h-7 w-24 ${color} shadow-sm [clip-path:polygon(3%_0,97%_8%,100%_100%,0_92%)] ${className}`} aria-hidden />
}

// Infinite ribbon of words (like the "you're invited" tickers).
export function Ribbon({ items, className = 'bg-cream text-crimson', speed = 35 }) {
  const row = [...items, ...items, ...items, ...items]
  return (
    <div className={`overflow-hidden py-2.5 ${className}`}>
      <div className="flex w-max" style={{ animation: `marquee ${speed}s linear infinite` }}>
        {row.map((t, i) => (
          <span key={i} className="eyebrow flex items-center gap-6 pr-6 whitespace-nowrap">
            {t} <span aria-hidden>✿</span>
          </span>
        ))}
      </div>
    </div>
  )
}
