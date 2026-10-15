import { useState } from 'react'
import Page from '../components/layout/Page'
import PageHero from '../components/ui/PageHero'
import Title from '../components/ui/Title'
import Reveal from '../components/ui/Reveal'
import GoldFrame from '../components/ui/GoldFrame'
import ContactCards from '../components/contact/ContactCards'
import DatePicker from '../components/contact/DatePicker'
import RsvpForm from '../components/contact/RsvpForm'
import Faq from '../components/contact/Faq'
import { WaveEdge } from '../components/ui/Decor'
import { img } from '../data/gallery'

export default function Contact() {
  const [date, setDate] = useState(null)

  return (
    <Page>
      <PageHero
        eyebrow="Get in touch"
        title="Say Hello"
        sub="Tell us your date, your venue and the colours you love — we’ll take it from there."
        image={img('gold-welcome-sign')}
        caption="welcome!"
        flower="#f6c9cf"
      />
      <ContactCards />

      <section className="relative overflow-hidden bg-crimson py-28">
        <WaveEdge color="var(--color-cream)" />
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <Title script="Save the Date" sub="Pick your day and watch the countdown begin" tone="text-cream" subTone="text-blush" />
          <Reveal className="mx-auto mt-12 max-w-md">
            <DatePicker value={date} onChange={setDate} />
          </Reveal>
        </div>
        <WaveEdge color="var(--color-cream)" flip />
      </section>

      <section className="grid md:grid-cols-[0.9fr_1.1fr]">
        <div className="relative hidden min-h-[560px] stripes md:block" style={{ '--s1': '#f6c9cf', '--s2': '#fbf3e6' }}>
          <GoldFrame src={img('couple-portrait')} oval imgClass="aspect-[3/4]" className="absolute left-[10%] top-[10%] w-40 -rotate-6" />
          <GoldFrame src={img('floral-doorway-exit')} imgClass="aspect-[4/5]" className="absolute right-[10%] top-[30%] w-48 rotate-3" />
          <GoldFrame src={img('sunset-aisle')} imgClass="aspect-square" className="absolute bottom-[8%] left-[18%] w-40 -rotate-2" />
        </div>
        <div className="bg-cream px-5 py-20 sm:px-12">
          <RsvpForm date={date} />
        </div>
      </section>

      <Faq />
    </Page>
  )
}
