import { useNavigate } from 'react-router-dom'
import Title from '../ui/Title'
import Button from '../ui/Button'
import PhotoBooth from '../gallery/PhotoBooth'

// Striped "photo booth" section: the camera teases the full gallery.
export default function GalleryTeaser() {
  const navigate = useNavigate()
  return (
    <section className="relative overflow-hidden stripes py-24 md:py-32" style={{ '--s1': '#cfe0f1', '--s2': '#fbf3e6' }}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto mb-14 w-fit bg-cream px-10 py-6 shadow-lg ring-1 ring-crimson/10">
          <Title script="Say Cheese!" sub="Our gallery, one print at a time" />
        </div>
        <PhotoBooth onOpen={() => navigate('/gallery')} />
        <div className="mt-12 flex justify-center">
          <Button to="/gallery">See the full gallery</Button>
        </div>
      </div>
    </section>
  )
}
