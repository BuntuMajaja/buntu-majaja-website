import { useEffect } from 'react'

const SITE = 'Buntu Majaja'

/** Set the document title and meta description for the current page. */
export function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | ${SITE}` : `${SITE} | Innovation, ventures and AI from Africa`
    if (description) document.querySelector('meta[name="description"]')?.setAttribute('content', description)
  }, [title, description])
}
