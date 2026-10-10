import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail } from 'lucide-react'
import Button from '@/components/ui/Button'
import CutImage from '@/components/ui/CutImage'
import { book } from '@/content/book'
import { links } from '@/content/site'
import { usePageMeta } from '@/lib/usePageMeta'

const TALLY_SCRIPT = 'https://tally.so/widgets/embed.js'

/**
 * Load Tally's widget script once, then initialise embeds (it sets the iframe src and resizes it
 * to the form's height). Fallback: if the iframe still has no src after 2.5 s, set it directly so
 * the form always appears; it then keeps its default height.
 */
function useTallyEmbeds(frameRef) {
  useEffect(() => {
    const load = () => window.Tally?.loadEmbeds()
    if (document.querySelector(`script[src="${TALLY_SCRIPT}"]`)) load()
    else {
      const script = document.createElement('script')
      script.src = TALLY_SCRIPT
      script.async = true
      script.onload = load
      document.body.appendChild(script)
    }
    const fallback = setTimeout(() => {
      const frame = frameRef.current
      if (frame && !frame.getAttribute('src')) frame.src = frame.dataset.tallySrc
    }, 2500)
    return () => clearTimeout(fallback)
  }, [frameRef])
}

/** True once the embedded Tally form reports a submission (postMessage event). */
function useTallySubmitted() {
  const [submitted, setSubmitted] = useState(false)
  useEffect(() => {
    const onMessage = (e) => {
      if (typeof e.data === 'string' && e.data.includes('Tally.FormSubmitted')) setSubmitted(true)
    }
    window.addEventListener('message', onMessage)
    return () => window.removeEventListener('message', onMessage)
  }, [])
  return submitted
}

export default function BookBuntu() {
  usePageMeta('Book Buntu', 'Check Buntu Majaja’s availability for keynotes, masterclasses and partnerships. We reply within 1–2 business days.')
  const frameRef = useRef(null)
  useTallyEmbeds(frameRef)
  const submitted = useTallySubmitted()
  const nextRef = useRef(null)

  useEffect(() => {
    if (submitted) nextRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }, [submitted])

  return (
    <main>
      <header className="gutter flex flex-col items-center pb-12 pt-36 text-center sm:pt-44">
        <p className="flex items-center gap-2.5 rounded-full border border-line px-4 py-2 text-sm text-slate">
          <span className="h-2 w-2 rounded-full bg-teal" aria-hidden="true" />
          {book.label}
        </p>
        <h1 className="t-h1 mt-8 max-w-[16ch]">{book.title}</h1>
      </header>

      <section className="gutter" aria-labelledby="form-title">
        <div className="mx-auto max-w-2xl rounded-[28px] bg-white px-5 py-8 shadow-[0_24px_60px_-30px_rgba(26,26,26,0.25)] sm:px-10 sm:py-12">
          <h2 id="form-title" className="t-h3">{book.formHeading}</h2>
          <p className="mt-1 text-[15px] text-slate">{book.responseTime}</p>
          <iframe
            ref={frameRef}
            data-tally-src={links.tallyEmbed}
            title="Check Buntu's availability"
            width="100%"
            height="1650"
            className="mt-6 block w-full border-0"
          />
          <p className="mt-4 text-sm text-slate">
            By sending this form you agree to our{' '}
            <Link to={links.privacy} className="underline underline-offset-4 hover:text-ink">Privacy Policy</Link>.
          </p>
        </div>
      </section>

      <section className="gutter pt-6" aria-label="Other ways to work together">
        <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
          <div className="flex flex-col rounded-[28px] bg-ink p-8 text-paper">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-[17px] font-semibold">{book.contact.heading}</h2>
              <Mail className="h-5 w-5 shrink-0 text-paper/60" aria-hidden="true" />
            </div>
            <a href={`mailto:${links.email}`} className="mt-1 text-paper/80 underline-offset-4 hover:underline">{links.email}</a>
            <p className="mt-4 text-[15px] text-paper/60">{book.contact.line}</p>
            <div className="mt-auto flex flex-wrap gap-2 pt-8">
              <Button to="/masterclasses" variant="light" className="min-h-10 px-4 text-sm">Masterclasses</Button>
              <Button href={links.partnershipEmail} external={false} variant="ghostLight" className="min-h-10 px-4 text-sm">Partnership request</Button>
            </div>
          </div>
          <CutImage src={book.image.src} alt={book.image.alt} ratio="4 / 5" cut={48} corner="bl" className="rounded-[28px]" />
        </div>
      </section>

      <section ref={nextRef} className="gutter pt-28 text-center sm:pt-36" aria-labelledby="next-title">
        {submitted && (
          <p role="status" className="mx-auto mb-6 max-w-md rounded-full bg-teal/10 px-5 py-3 text-[15px] text-teal">
            {book.submitted}
          </p>
        )}
        <h2 id="next-title" className="t-h2 mx-auto max-w-[20ch]">{book.next.heading}</h2>
        <p className="t-lede mx-auto mt-4">{book.next.line}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {book.next.links.map((link, i) => (
            <Button key={link.to} to={link.to} variant={i === 0 ? 'solid' : 'outline'}>{link.label}</Button>
          ))}
        </div>
      </section>
    </main>
  )
}
