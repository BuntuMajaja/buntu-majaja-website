import Button from '@/components/ui/Button'
import CutImage from '@/components/ui/CutImage'
import PageHeader from '@/components/ui/PageHeader'
import { masterclasses } from '@/content/masterclasses'
import { links } from '@/content/site'
import { usePageMeta } from '@/lib/usePageMeta'

export default function Masterclasses() {
  usePageMeta('Masterclasses', 'Hands-on masterclasses for founders and leadership teams: Capital 101, AI-native leadership and ecosystem design.')
  const { images } = masterclasses

  return (
    <main>
      <PageHeader title="Leave the room with a shared language" lede={masterclasses.intro} />

      <section className="gutter">
        <CutImage src={images.hero.src} alt={images.hero.alt} ratio="21 / 9" cut={96} priority imgClassName="object-[50%_35%]" />
      </section>

      <section className="gutter pt-24 sm:pt-36" aria-label="Masterclass formats">
        {masterclasses.offers.map((offer) => (
          <article key={offer.name} className="grid gap-8 border-t border-line py-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h2 className="t-h2">{offer.name}</h2>
              <p className="mt-3 text-[20px] font-medium tracking-tight text-earth">{offer.promise}</p>
            </div>
            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-[18px] leading-relaxed text-ink/80">{offer.description}</p>
              <dl className="mt-8 grid gap-6 sm:grid-cols-2">
                <div>
                  <dt className="text-sm text-slate">Who it is for</dt>
                  <dd className="mt-1 text-[15px]">{offer.for}</dd>
                </div>
                <div>
                  <dt className="text-sm text-slate">Format</dt>
                  <dd className="mt-1 text-[15px]">{offer.format}</dd>
                </div>
              </dl>
            </div>
          </article>
        ))}
      </section>

      <section className="gutter grid items-end gap-12 pt-16 lg:grid-cols-12">
        <CutImage src={images.side.src} alt={images.side.alt} ratio="4 / 5" cut={64} corner="bl" className="lg:col-span-4" />
        <div className="lg:col-span-6 lg:col-start-6 lg:pb-10">
          <p className="t-h2">{masterclasses.closing}</p>
          <Button href={links.masterclassEmail} className="mt-10">Enquire about a masterclass</Button>
        </div>
      </section>
    </main>
  )
}
