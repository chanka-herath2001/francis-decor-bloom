import { img } from './gallery'

export const contact = {
  email: 'hello@francesdecor.com',
  phone: '0776116045',
  phoneIntl: '+94776116045',
  // TODO: replace with the real profile links
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
}

export const tagline = 'She had love on her lips and flowers in her hair…'

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

// "The Wedding" accordion on the home page
export const details = [
  {
    title: 'Ceremony',
    items: ['Floral arches & moon gates', 'Aisle runners, petals & candles', 'Church and garden styling'],
    text: 'We frame the moment you say “I do” — arches heavy with blooms, aisles lined in candlelight and petals underfoot.',
  },
  {
    title: 'Reception',
    items: ['Head tables & tablescapes', 'Centrepieces & blossom trees', 'Lounge corners & lighting'],
    text: 'Long tables, glowing candles and centrepieces that make guests reach for their phones before their forks.',
  },
  {
    title: 'Florals',
    items: ['Bridal bouquets', 'Buttonholes & corsages', 'Floral walls & installations'],
    text: 'Bouquets and installations composed by hand, around your colours, your dress and the season.',
  },
  {
    title: 'Little Details',
    items: ['Welcome signs', 'Drapery & backdrops', 'Candles, ribbons & keepsakes'],
    text: 'The welcome sign, the ribbon on a chair, the candle by the guest book — the touches people remember.',
  },
]

// "Schedule of the day" → how a celebration comes together
export const schedule = [
  { icon: 'letter', title: 'Say Hello', time: 'Step 01' },
  { icon: 'coffee', title: 'Consultation', time: 'Step 02' },
  { icon: 'palette', title: 'Moodboard', time: 'Step 03' },
  { icon: 'bouquet', title: 'Floral Recipes', time: 'Step 04' },
  { icon: 'arch', title: 'Set-up Day', time: 'Step 05' },
  { icon: 'glasses', title: 'Celebrate', time: 'The Big Day' },
]

export const values = [
  { title: 'Colourful', color: '#f6c9cf', text: 'Joyful palettes, layered blooms and a little bit of unexpected.' },
  { title: 'Personal', color: '#a9c8e6', text: 'Every design starts with your story, your venue and your favourite things.' },
  { title: 'Abundant', color: '#f4d58d', text: 'Generous florals and greenery that feel gathered, never sparse.' },
  { title: 'Calm', color: '#a8bd9b', text: 'Clear plans and an early team, so the day feels effortless.' },
]

export const journey = [
  { image: img('couple-garden-kiss'), caption: 'first hello', text: 'It begins with a chat — a few photos, a colour you love, a venue you can already picture.' },
  { image: img('seaside-drape-arch'), caption: 'the big idea', text: 'We sketch, source and test, turning ideas into arches, aisles and tables you can walk through.' },
  { image: img('couple-portrait'), caption: 'the day!', text: 'Then the doors open, the candles are lit and the room finally feels like you.' },
]

export const faqs = [
  { q: 'How early should we book?', a: 'As soon as you have a date and venue. Popular dates fill quickly, but shorter timelines are sometimes possible.' },
  { q: 'Do you style ceremony and reception?', a: 'Yes — one moment like an arch or head table, or one look carried through the whole day.' },
  { q: 'Can we bring our own inspiration?', a: 'Please do! Pinterest boards, photos and colour swatches all help us understand what you love.' },
  { q: 'Do you travel to other venues?', a: 'Tell us where you are celebrating and we will talk through logistics together.' },
  { q: 'Is there a minimum budget?', a: 'Every celebration is different. Share a rough budget and we will suggest what works best within it.' },
  { q: 'Can you work with our planner?', a: 'Absolutely. We are happy to coordinate timings and set-up with your planner and venue.' },
]

export const notes = [
  'Every wedding is a story — we simply set the scene.',
  'Flowers speak the words that are hardest to say.',
  'More colour, more candles, more joy.',
]
