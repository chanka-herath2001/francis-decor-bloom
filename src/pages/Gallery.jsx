import { useMemo, useState } from 'react'
import { AnimatePresence } from 'motion/react'
import Page from '../components/layout/Page'
import PageHero from '../components/ui/PageHero'
import Title from '../components/ui/Title'
import PhotoBooth from '../components/gallery/PhotoBooth'
import PolaroidGrid from '../components/gallery/PolaroidGrid'
import Lightbox from '../components/gallery/Lightbox'
import QuestionCard from '../components/ui/QuestionCard'
import { Ribbon } from '../components/ui/Decor'
import { gallery, categories, img } from '../data/gallery'

const counts = Object.fromEntries(
  categories.map((c) => [c.id, c.id === 'all' ? gallery.length : gallery.filter((g) => g.category === c.id).length]),
)

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const [open, setOpen] = useState(null) // { list, index }
  const items = useMemo(() => (filter === 'all' ? gallery : gallery.filter((g) => g.category === filter)), [filter])
  const openIn = (list) => (item) => setOpen({ list, index: Math.max(0, list.findIndex((g) => g.id === item.id)) })

  return (
    <Page>
      <PageHero
        eyebrow="Our portfolio"
        title="Gallery"
        sub="Arches, aisles, bouquets and candlelit tables — a scrapbook of celebrations we’ve dressed."
        image={img('circle-arch-sunset')}
        caption="moon arch"
        flower="#a9c8e6"
        edge="#cfe0f1"
      />

      <section className="relative overflow-hidden stripes py-20 md:py-28" style={{ '--s1': '#cfe0f1', '--s2': '#fbf3e6' }}>
        <div className="mx-auto mb-12 w-fit bg-cream px-10 py-6 shadow-lg">
          <Title script="The Photo Booth" sub="Press the shutter or order from the menu" />
        </div>
        <div className="px-5">
          <PhotoBooth onOpen={openIn(gallery)} />
        </div>
      </section>

      <Ribbon items={['Ceremonies', 'Receptions', 'Florals', 'Details', 'Couples']} className="bg-crimson text-cream" />

      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <Title script="The Scrapbook" sub="Every print, all in one place" className="mb-10" />
        <PolaroidGrid items={items} filter={filter} onFilter={setFilter} counts={counts} onOpen={openIn(items)} />
      </section>

      <QuestionCard />

      <AnimatePresence>
        {open && (
          <Lightbox
            items={open.list}
            index={open.index}
            onClose={() => setOpen(null)}
            onChange={(index) => setOpen((o) => ({ ...o, index }))}
          />
        )}
      </AnimatePresence>
    </Page>
  )
}
