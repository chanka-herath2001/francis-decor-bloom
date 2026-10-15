import Page from '../components/layout/Page'
import PageHero from '../components/ui/PageHero'
import Story from '../components/home/Story'
import Journey from '../components/about/Journey'
import Values from '../components/about/Values'
import Meet from '../components/about/Meet'
import QuestionCard from '../components/ui/QuestionCard'
import { Ribbon } from '../components/ui/Decor'
import { img } from '../data/gallery'

export default function About() {
  return (
    <Page>
      <PageHero
        eyebrow="About us"
        title="Our Story"
        sub="A small studio with a big love of flowers, colour and candlelight."
        image={img('couple-champagne')}
        caption="just married!"
      />
      <Journey />
      <Values />
      <Meet />
      <Ribbon items={['Colourful', 'Personal', 'Abundant', 'Calm', 'Joyful']} className="bg-sky text-wine" />
      <Story />
      <QuestionCard />
    </Page>
  )
}
