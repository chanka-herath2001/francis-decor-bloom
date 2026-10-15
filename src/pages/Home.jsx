import Page from '../components/layout/Page'
import Hero from '../components/home/Hero'
import Story from '../components/home/Story'
import Details from '../components/home/Details'
import Schedule from '../components/home/Schedule'
import GalleryTeaser from '../components/home/GalleryTeaser'
import Postcard from '../components/home/Postcard'
import QuestionCard from '../components/ui/QuestionCard'
import { Ribbon } from '../components/ui/Decor'

export default function Home({ ready = true }) {
  return (
    <Page>
      <Hero ready={ready} />
      <Story />
      <Details />
      <Schedule />
      <Ribbon items={['Ceremonies', 'Receptions', 'Bouquets', 'Candlelight', 'Moon arches']} className="bg-butter text-wine" />
      <GalleryTeaser />
      <Postcard />
      <QuestionCard />
    </Page>
  )
}
