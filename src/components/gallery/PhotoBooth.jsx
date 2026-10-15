import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'motion/react'
import MenuCard from './MenuCard'
import Print from './Print'
import { gallery } from '../../data/gallery'

const KEEP = 5

function useWide() {
  const [wide, setWide] = useState(() => window.matchMedia('(min-width: 768px)').matches)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const on = () => setWide(mq.matches)
    mq.addEventListener('change', on)
    return () => mq.removeEventListener('change', on)
  }, [])
  return wide
}

// Vintage instant camera at the back with the menu card pinned in front.
// Pressing the shutter (or a menu course) flashes and ejects a developing print.
export default function PhotoBooth({ onOpen }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.4 })
  const wide = useWide()
  const [shots, setShots] = useState([])
  const [flash, setFlash] = useState(0)
  const [active, setActive] = useState(null)
  const seq = useRef(0)

  const shoot = (category) => {
    const pool = gallery.filter((g) => (!category || g.category === category) && !shots.some((s) => s.photo.id === g.id))
    const photo = pool[Math.floor(Math.random() * pool.length)] ?? gallery[0]
    seq.current += 1
    setActive(category ?? null)
    setFlash((f) => f + 1)
    setShots((s) => [{ id: seq.current, photo }, ...s].slice(0, KEEP))
  }

  useEffect(() => {
    if (inView && !shots.length) shoot()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView])

  return (
    <div ref={ref} className="relative mx-auto grid max-w-5xl items-start gap-10 md:grid-cols-[16rem_1fr]">
      <MenuCard active={active} onPick={shoot} className="order-2 mx-auto w-full max-w-xs md:relative md:left-80 md:order-1 md:z-30 md:mt-44" />

      <div className="relative order-1 mx-auto h-[700px] w-full max-w-[34rem] sm:h-[680px] md:order-2">
        {/* the camera */}
        <div className="absolute left-1/2 top-0 z-20 w-56 -translate-x-1/2 sm:w-64">
          <motion.img
            src="/images/polaroid-camera.webp"
            alt="Vintage instant camera"
            className="w-full select-none drop-shadow-[0_24px_30px_rgba(40,10,10,.45)]"
            draggable={false}
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 0.25, repeat: 0 }}
            key={`cam-${flash}`}
          />
          <AnimatePresence>
            {flash > 0 && (
              <motion.span
                key={flash}
                className="pointer-events-none absolute left-[18%] top-[2%] h-[20%] w-[64%] rounded-md bg-white"
                initial={{ opacity: 0.95, scale: 1, boxShadow: '0 0 120px 60px rgba(255,255,255,.9)' }}
                animate={{ opacity: 0, boxShadow: '0 0 0 0 rgba(255,255,255,0)' }}
                transition={{ duration: 0.7 }}
              />
            )}
          </AnimatePresence>
          <button
            onClick={() => shoot(active)}
            aria-label="Take a photo"
            className="absolute left-[14%] top-[66%] h-[11%] w-[17%] cursor-pointer rounded-full ring-0 transition hover:ring-4 hover:ring-butter/80"
          />
          {/* prints eject from the slot */}
          <div className="absolute left-1/2 top-[92%] -z-10 w-[78%] -translate-x-1/2">
            {shots.map((s, i) => (
              <Print key={s.id} photo={s.photo} index={i} wide={wide} onOpen={onOpen} />
            ))}
          </div>
        </div>

        <motion.button
          onClick={() => shoot(active)}
          whileTap={{ scale: 0.92 }}
          className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2 whitespace-nowrap rounded-[50%] bg-crimson px-8 py-3 eyebrow text-cream shadow-lg hover:bg-wine"
        >
          📸 Take a photo
        </motion.button>
      </div>
    </div>
  )
}
