import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { Lock } from 'lucide-react'
import CutImage from '@/components/ui/CutImage'
import PageHeader from '@/components/ui/PageHeader'
import { explore } from '@/content/explore'
import { kit } from '@/content/site'
import { loadKit } from '@/lib/kit'
import { usePageMeta } from '@/lib/usePageMeta'
import { cn } from '@/lib/utils'

function Tile({ item }) {
  return (
    <article
      id={item.key}
      className={cn(
        'flex min-h-[300px] scroll-mt-28 flex-col rounded-[28px] p-8 sm:p-10',
        item.locked ? 'border border-dashed border-ink/20 text-ink/50' : 'bg-ink text-paper',
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <h2 className="t-h2">{item.name}</h2>
        {item.locked && <Lock className="mt-2 h-5 w-5 shrink-0" aria-hidden="true" />}
      </div>
      <p className={cn('mt-4 max-w-[34ch] text-[17px]', !item.locked && 'text-paper/70')}>{item.description}</p>
      <div className="mt-auto pt-10">
        {item.locked ? (
          <p className="text-[15px] font-medium">Coming soon</p>
        ) : (
          // Kit opens its modal for links carrying data-formkit-toggle; without the script the link
          // falls back to Kit's hosted form page.
          <a
            href={kit.hostedForm}
            data-formkit-toggle={kit.uid}
            className="inline-flex min-h-11 items-center rounded-full bg-paper px-6 text-[15px] font-medium text-ink transition-colors hover:bg-white"
          >
            {item.action}
          </a>
        )}
      </div>
    </article>
  )
}

export default function Explore() {
  usePageMeta('Explore', 'Newsletter, podcast and book by Buntu Majaja.')
  const { hash } = useLocation()

  useEffect(loadKit, [])
  useEffect(() => {
    if (hash) document.querySelector(hash)?.scrollIntoView()
  }, [hash])

  return (
    <main>
      <PageHeader title="Ideas worth acting on" lede={explore.intro} />
      <section className="gutter grid gap-6 lg:grid-cols-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:col-span-8">
          <div className="sm:col-span-2">
            <Tile item={explore.items[0]} />
          </div>
          {explore.items.slice(1).map((item) => (
            <Tile key={item.key} item={item} />
          ))}
        </div>
        <CutImage src={explore.image.src} alt={explore.image.alt} ratio="4 / 5" cut={64} className="lg:col-span-4" />
      </section>
    </main>
  )
}
