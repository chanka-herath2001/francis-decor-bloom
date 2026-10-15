import { motion } from 'motion/react'
import Title from '../ui/Title'
import { Icon } from '../ui/LineArt'
import { schedule } from '../../data/site'

// "Schedule of the Day" grid of hand-drawn icons — here, how a celebration comes together.
export default function Schedule() {
  return (
    <section className="relative bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Title script="Schedule of the Day" sub="Here’s how your celebration comes together" />
        <ol className="mt-16 grid grid-cols-2 gap-x-6 gap-y-14 sm:grid-cols-3">
          {schedule.map((s, i) => (
            <motion.li
              key={s.title}
              className="group flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: (i % 3) * 0.12, duration: 0.7 }}
            >
              <motion.div
                className="relative flex h-28 w-28 items-center justify-center rounded-full text-crimson transition-colors group-hover:bg-blush/50"
                whileHover={{ rotate: [0, -8, 8, -4, 0] }}
                transition={{ duration: 0.6 }}
              >
                <span className="absolute inset-0 rounded-full border border-dashed border-crimson/30 transition-transform duration-[2s] group-hover:rotate-180" />
                <Icon name={s.icon} className="h-16 w-16" />
              </motion.div>
              <p className="mt-4 font-script text-3xl text-crimson">{s.title}</p>
              <p className="font-mono text-xs uppercase tracking-widest text-cocoa/60">{s.time}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
