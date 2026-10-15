import { motion } from 'motion/react'
import Cutout from '../ui/Cutout'
import { WaxSeal } from '../ui/Decor'

const ease = [0.65, 0, 0.35, 1]

// Paper envelope: seal pops, flap folds back, the invitation card slides out.
// stage 0 = sealed, 1 = opening, 2 = card out
export default function Envelope({ stage }) {
  return (
    <div className="relative mx-auto aspect-[3/2] w-[min(84vw,420px)] [perspective:1200px]">
      {/* back of the envelope */}
      <div className="absolute inset-0 rounded-md bg-[#e9dcc4] shadow-[0_30px_60px_rgba(30,0,8,.45)]" />

      {/* invitation card */}
      <motion.div
        className="absolute inset-x-[6%] top-[6%] z-[2] h-[88%]"
        animate={{ y: stage >= 2 ? '-62%' : '0%' }}
        transition={{ duration: 1, ease, delay: stage >= 2 ? 0.1 : 0 }}
      >
        <Cutout shape="wavy" color="#fbf3e6" className="flex h-full items-start justify-center pt-[7%] text-center">
          <img src="/images/logo.png" alt="" className="mx-auto h-16 sm:h-20" />
          <p className="font-script text-3xl leading-none text-crimson sm:text-4xl">you’re invited</p>
          <p className="eyebrow mt-2 text-cocoa/70">step inside our world</p>
        </Cutout>
      </motion.div>

      {/* front pocket */}
      <div className="absolute inset-0 z-[3] rounded-md bg-[#f3e9d6] [clip-path:polygon(0_0,50%_52%,100%_0,100%_100%,0_100%)]" />
      <div className="absolute inset-0 z-[3] rounded-md bg-gradient-to-t from-black/5 to-transparent [clip-path:polygon(0_0,50%_52%,100%_0,100%_100%,0_100%)]" />

      {/* flap with lace edge */}
      <motion.div
        className="absolute inset-x-0 top-0 h-[62%] origin-top [transform-style:preserve-3d]"
        style={{ zIndex: stage >= 2 ? 1 : 4 }}
        animate={{ rotateX: stage >= 1 ? 180 : 0 }}
        transition={{ duration: 0.9, ease }}
      >
        <div className="absolute inset-0 bg-[#f6dfe2] [clip-path:polygon(0_0,100%_0,50%_100%)]" />
        <div className="absolute inset-[3%_5%_8%] bg-[radial-gradient(circle,#fff_1.5px,transparent_2px)] bg-[length:10px_10px] opacity-70 [clip-path:polygon(0_0,100%_0,50%_100%)]" />
        <div className="absolute inset-0 bg-[#e9dcc4] [backface-visibility:hidden] [clip-path:polygon(0_0,100%_0,50%_100%)] [transform:rotateX(180deg)]" />
      </motion.div>

      {/* seal */}
      <motion.div
        className="absolute left-1/2 top-[52%] z-[5] -translate-x-1/2 -translate-y-1/2"
        animate={stage >= 1 ? { scale: [1, 1.25, 0], rotate: [0, -15, 30], opacity: [1, 1, 0] } : { scale: [1, 1.06, 1] }}
        transition={stage >= 1 ? { duration: 0.5 } : { duration: 1.8, repeat: Infinity }}
      >
        <WaxSeal className="h-16 w-16 sm:h-20 sm:w-20" />
      </motion.div>
    </div>
  )
}
