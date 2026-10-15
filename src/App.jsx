import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'motion/react'
import EnvelopeIntro from './components/intro/EnvelopeIntro'
import Navbar from './components/layout/Navbar'
import SmoothScroll, { scrollToTop } from './components/layout/SmoothScroll'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

const INTRO_KEY = 'fdb-opened'

function hasOpened() {
  try {
    return sessionStorage.getItem(INTRO_KEY) === '1'
  } catch {
    return false
  }
}

export default function App() {
  const location = useLocation()
  const [opened, setOpened] = useState(hasOpened)

  const open = () => {
    try {
      sessionStorage.setItem(INTRO_KEY, '1')
    } catch {
      /* storage unavailable — the letter simply arrives again next visit */
    }
    setOpened(true)
  }

  return (
    <SmoothScroll paused={!opened}>
      <AnimatePresence>{!opened && <EnvelopeIntro key="letter" onOpen={open} />}</AnimatePresence>
      <Navbar />
      <AnimatePresence mode="wait" onExitComplete={scrollToTop}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home ready={opened} />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home ready={opened} />} />
        </Routes>
      </AnimatePresence>
    </SmoothScroll>
  )
}
