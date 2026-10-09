import { kit } from '@/content/site'

/**
 * Load the Kit newsletter script once. Kit decides when its modal appears
 * (timer and frequency are set in the Kit dashboard, not here).
 */
export function loadKit() {
  if (typeof document === 'undefined' || document.querySelector(`script[data-uid="${kit.uid}"]`)) return
  const script = document.createElement('script')
  script.async = true
  script.dataset.uid = kit.uid
  script.src = kit.script
  document.body.appendChild(script)
}
