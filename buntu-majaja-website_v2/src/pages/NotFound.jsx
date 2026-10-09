import Button from '@/components/ui/Button'
import { usePageMeta } from '@/lib/usePageMeta'

export default function NotFound() {
  usePageMeta('Page not found')
  return (
    <main className="gutter flex min-h-[70svh] flex-col justify-center pt-32">
      <h1 className="t-h1">This page is not here</h1>
      <p className="t-lede mt-6">The link may be old, or the page may have moved.</p>
      <Button to="/" className="mt-10 self-start">Go to the home page</Button>
    </main>
  )
}
