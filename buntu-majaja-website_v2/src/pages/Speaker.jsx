import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'
import { Pause, Play } from 'lucide-react'
import Button from '@/components/ui/Button'
import CutImage from '@/components/ui/CutImage'
import PageHeader from '@/components/ui/PageHeader'
import { links } from '@/content/site'
import { speaking } from '@/content/speaking'
import { usePageMeta } from '@/lib/usePageMeta'

/** Muted, looping speaking clip. Autoplays unless the visitor prefers reduced motion; always pausable. */
function Reel() {
  const video = useRef(null)
  const still = useReducedMotion()
  const [playing, setPlaying] = useState(!still)

  useEffect(() => {
    const v = video.current
    if (!v) return
    if (playing) v.play().catch(() => setPlaying(false))
    else v.pause()
  }, [playing])

  return (
    <div className="cut relative aspect-video overflow-hidden bg-ink" style={{ '--cut': '88px' }}>
      <video
        ref={video}
        className="absolute inset-0 h-full w-full object-cover"
        poster="/media/speaker-reel-poster.jpg"
        muted
        loop
        playsInline
        preload="metadata"
        aria-label="Buntu speaking at an Africa's Business Heroes event (silent clip)"
      >
        <source src="/media/speaker-reel.webm" type="video/webm" />
        <source src="/media/speaker-reel.mp4" type="video/mp4" />
      </video>
      <button
        type="button"
        onClick={() => setPlaying((p) => !p)}
        className="glass absolute bottom-4 left-4 flex min-h-11 items-center gap-2 rounded-full px-4 text-[14px] font-medium"
        aria-label={playing ? 'Pause video' : 'Play video'}
      >
        {playing ? <Pause className="h-4 w-4" aria-hidden="true" /> : <Play className="h-4 w-4" aria-hidden="true" />}
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  )
}

export default function Speaker() {
  usePageMeta('Speaker', 'Keynotes on AI convergence, economic sovereignty, foresight and innovation ecosystems, from a Global South perspective.')

  return (
    <main>
      <PageHeader title="Keynotes your audience will quote all year" lede={speaking.intro} />

      <section className="gutter">
        <Reel />
      </section>

      <section className="gutter pt-28 sm:pt-40" aria-labelledby="topics-title">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="topics-title" className="t-h2">Topics</h2>
            <p className="mt-5 text-ink/75">{speaking.audience}</p>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            {speaking.topics.map((topic) => (
              <article key={topic.title} className="border-t border-line py-10 first:pt-8">
                <h3 className="t-h2">{topic.title}</h3>
                <p className="mt-4 text-[17px] font-medium text-earth">{topic.hook}</p>
                <p className="mt-4 text-ink/80">{topic.description}</p>
                <p className="mt-5 text-[15px] text-slate">For {topic.audience.charAt(0).toLowerCase() + topic.audience.slice(1)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-20 sm:pt-28" aria-hidden="true">
        <div className="gutter grid gap-6 md:grid-cols-12">
          <CutImage src="/media/speaker-stage-wide.webp" alt="" ratio="3 / 2" cut={80} className="md:col-span-8" />
          <CutImage src="/media/speaker-stage-close.webp" alt="" ratio="4 / 5" cut={56} corner="bl" className="md:col-span-4 md:mt-24" />
        </div>
      </section>

      <section className="gutter pt-28 sm:pt-40" aria-labelledby="book-title">
        <div className="rounded-[28px] bg-ink px-6 py-14 text-paper sm:px-14 sm:py-20">
          <h2 id="book-title" className="t-h1 max-w-[16ch]">Bring this to your stage</h2>
          <p className="mt-6 max-w-[48ch] text-[18px] text-paper/70">
            Conferences, corporate events, summits and leadership forums. {speaking.fees}.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button to={links.bookingPage} variant="light">Check speaker availability</Button>
            <Button href={links.speakerProfile} external variant="ghostLight">Download speaker profile</Button>
          </div>
        </div>
      </section>
    </main>
  )
}
