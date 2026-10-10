import PageHeader from '@/components/ui/PageHeader'
import { privacy } from '@/content/privacy'
import { usePageMeta } from '@/lib/usePageMeta'

function Paragraphs({ items }) {
  return items?.map((text) => (
    <p key={text} className="mt-4 text-ink/80">{text}</p>
  ))
}

export default function Privacy() {
  usePageMeta('Privacy Policy', 'How Buntu Majaja Inc. collects, uses and protects personal information.')

  return (
    <main>
      <PageHeader title="Privacy Policy" lede={privacy.intro}>
        <p className="t-small mt-6">Last updated {privacy.updated}</p>
      </PageHeader>
      <div className="gutter">
        <div className="max-w-[68ch]">
          {privacy.sections.map((section) => (
            <section key={section.heading} className="border-t border-line py-10">
              <h2 className="t-h3">{section.heading}</h2>
              <Paragraphs items={section.body} />
              {section.list && (
                <ul className="mt-4 space-y-3">
                  {section.list.map((item) => (
                    <li key={item} className="flex gap-3 text-ink/80">
                      <span className="mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-earth" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              <Paragraphs items={section.after} />
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
