import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

const units = [
  ['Days', 86400000],
  ['Hours', 3600000],
  ['Minutes', 60000],
  ['Seconds', 1000],
]

function split(ms) {
  let rest = Math.max(0, ms)
  return units.map(([label, size]) => {
    const v = Math.floor(rest / size)
    rest -= v * size
    return [label, v]
  })
}

// Live countdown to the chosen date, ticking every second.
export default function Countdown({ date }) {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(t)
  }, [])

  const parts = split(date ? date.getTime() - now : 0)

  return (
    <div className="mt-3 flex items-start justify-center gap-2 sm:gap-4">
      {parts.map(([label, v], i) => (
        <div key={label} className="flex items-start gap-2 sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="h-7 overflow-hidden min-[400px]:h-10 sm:h-12">
              <motion.span
                key={v}
                className="block font-serif text-2xl tabular-nums text-crimson min-[400px]:text-4xl sm:text-5xl"
                initial={{ y: '-100%', opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35 }}
              >
                {String(v).padStart(2, '0')}
              </motion.span>
            </div>
            <span className="mt-1 text-[0.5rem] uppercase tracking-[0.15em] min-[400px]:tracking-[0.25em] text-crimson/50">{label}</span>
          </div>
          {i < parts.length - 1 && <span className="font-serif text-xl text-crimson/40 min-[400px]:text-3xl sm:text-4xl">:</span>}
        </div>
      ))}
    </div>
  )
}
