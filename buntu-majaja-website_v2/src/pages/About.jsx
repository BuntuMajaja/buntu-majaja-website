import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import CutImage from '@/components/ui/CutImage'
import PageHeader from '@/components/ui/PageHeader'
import { about } from '@/content/about'
import { consulting } from '@/content/consulting'
import { media } from '@/content/media'
import { links } from '@/content/site'
import { usePageMeta } from '@/lib/usePageMeta'
import Portfolio from './about/Portfolio'

// Only verified media mentions are shown (WEB-002: unverified entries stay in content, hidden).
const coverage = media.items.filter((item) => item.verified !== false)

export default function About() {
  usePageMeta('About', 'From chemical engineer to ecosystem builder: the story, values and work of Buntu Majaja.')
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView()
  }, [hash])

  return (
    <main>
      <PageHeader
        title="From chemical engineer to ecosystem builder"
        lede="I design and scale innovation systems that convert vision into ventures across Africa."
      />

      {/* Story */}
      <section className="gutter grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <CutImage src="/media/about-portrait.webp" alt="Buntu Majaja speaking at an Africa's Business Heroes event" ratio="4 / 5" cut={72} priority />
        </div>
        <div className="lg:col-span-6 lg:col-start-7 lg:pt-10">
          <h2 className="t-h2">Mission</h2>
          <p className="mt-5 text-[18px] leading-relaxed text-ink/80">{about.mission}</p>

          <h2 className="t-h2 mt-14">Philosophy</h2>
          <p className="mt-5 text-[20px] font-medium tracking-tight text-earth">{about.values.replaceAll('"', '')}</p>
          <p className="mt-4 text-[18px] leading-relaxed text-ink/80">{about.philosophy}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={links.cv} external>Download CV</Button>
            <Button href={links.linkedin} variant="outline">Connect on LinkedIn</Button>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="gutter pt-28 sm:pt-40" aria-label="Impact in numbers">
        <dl className="grid grid-cols-2 gap-y-12 lg:grid-cols-4">
          {about.stats.map((stat) => (
            <div key={stat.label} className="border-l border-line pl-6">
              <dt className="text-[15px] text-slate">{stat.label}</dt>
              <dd className="mt-2 text-[clamp(2.5rem,5vw,4rem)] font-medium leading-none tracking-[-0.04em]">{stat.number}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-20 grid gap-10 md:grid-cols-3">
          {about.achievements.map((item) => (
            <div key={item.title}>
              <h3 className="t-h3">{item.title}</h3>
              <p className="mt-3 text-ink/75">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Working together */}
      <section className="gutter pt-28 sm:pt-40" aria-labelledby="advisory-title">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <h2 id="advisory-title" className="t-h2">Working with organisations</h2>
            <p className="mt-5 text-ink/75">{consulting.intro}</p>
            <Button href={links.linkedin} variant="outline" className="mt-8">Start a conversation</Button>
          </div>
          <div className="space-y-10 lg:col-span-7 lg:col-start-6">
            {consulting.services.map((service) => (
              <div key={service.title} className="border-t border-line pt-6">
                <h3 className="t-h3">{service.title}</h3>
                <p className="mt-3 text-ink/75">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Portfolio />

      {/* Coverage */}
      <section className="gutter pt-28 sm:pt-40" aria-labelledby="coverage-title">
        <h2 id="coverage-title" className="t-h2">In the media</h2>
        <ul className="mt-10 border-t border-line">
          {coverage.map((item) => (
            <li key={item.title} className="border-b border-line">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-1 py-5 sm:grid-cols-[140px_1fr_auto] sm:items-baseline sm:gap-8"
              >
                <span className="text-sm text-slate">{item.date}</span>
                <span>
                  <span className="block text-[17px] font-medium transition-colors group-hover:text-earth">{item.title}</span>
                  <span className="text-[15px] text-slate">{item.publication}, {item.type.toLowerCase()}</span>
                </span>
                <ArrowUpRight className="hidden h-5 w-5 text-slate transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink sm:block" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
