import { useEffect } from 'react'
import Lenis from 'lenis'

let lenis = null

export function scrollToTop() {
  if (lenis) lenis.scrollTo(0, { immediate: true })
  else window.scrollTo(0, 0)
}

export function scrollToEl(el) {
  if (lenis) lenis.scrollTo(el, { offset: -90 })
  else el.scrollIntoView({ behavior: 'smooth' })
}

export default function SmoothScroll({ paused, children }) {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    lenis = new Lenis({ duration: 1.15, smoothWheel: true })
    let id
    const raf = (t) => {
      lenis.raf(t)
      id = requestAnimationFrame(raf)
    }
    id = requestAnimationFrame(raf)
    return () => {
      cancelAnimationFrame(id)
      lenis.destroy()
      lenis = null
    }
  }, [])

  useEffect(() => {
    document.documentElement.style.overflow = paused ? 'hidden' : ''
    if (!lenis) return
    if (paused) lenis.stop()
    else lenis.start()
  }, [paused])

  return children
}

export function stopScroll(stop) {
  document.documentElement.style.overflow = stop ? 'hidden' : ''
  if (!lenis) return
  if (stop) lenis.stop()
  else lenis.start()
}
