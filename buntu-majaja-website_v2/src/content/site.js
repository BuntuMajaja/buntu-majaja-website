/**
 * Site-wide content: identity, links, navigation, footer.
 * Edit copy here; components only handle layout.
 */

export const links = {
  linkedin: 'https://linkedin.com/in/buntumajaja',
  twitter: 'https://twitter.com/buntumajaja',
  youtube: 'https://youtube.com/@buntumajaja',
  linktree: 'https://linktr.ee/buntumajaja',
  cv: '/docs/CV_B_Majaja_v4_2.pdf',
  // WEB-012: the May 2023 profile carries old fees, an old Gmail and a phone number.
  // Do not deploy until Buntu decides to keep, replace or hide it.
  speakerProfile: '/docs/20230530-BuntuMajajaSpeakerProfilevv1.2.pdf',
  // WEB-011: Tally enquiry form (draft 44Wa1b, publish before deploy). Opens in the same tab;
  // on submit Tally redirects to /?thanks=speaking, where ThankYouNotice confirms.
  speakingForm: 'https://tally.so/r/44Wa1b?source=site',
  // Old Gmail kept until Buntu confirms the public address (see Website/root.md).
  masterclassEmail: 'mailto:buntumajaja@gmail.com?subject=Masterclass%20enquiry',
}

/** Kit (ConvertKit) newsletter form. Display rules (timer, frequency) live in the Kit dashboard. */
export const kit = {
  uid: '5b45007493',
  script: 'https://buntu-majaja.kit.com/5b45007493/index.js',
  hostedForm: 'https://buntu-majaja.kit.com/5b45007493',
}

export const person = {
  name: 'Buntu Majaja',
  firstName: 'Buntu',
  lastName: 'Majaja',
  role: 'Innovation and partnerships lead, venture strategist and AI commercialisation architect for Global South markets.',
}

/**
 * Main navigation. `path` must match a route in App.jsx and scripts/postbuild.js.
 * Explore has no page of its own in the nav: it opens a menu of `explore.items`.
 */
export const nav = [
  { name: 'About', path: '/about' },
  { name: 'Speaker', path: '/speaker' },
  { name: 'Masterclasses', path: '/masterclasses' },
]

/** Social links. `icon` names map to src/lib/icons.js. */
export const social = [
  { name: 'LinkedIn', href: links.linkedin, icon: 'linkedin' },
  { name: 'X (Twitter)', href: links.twitter, icon: 'twitter' },
  { name: 'YouTube', href: links.youtube, icon: 'youtube' },
  { name: 'Linktree', href: links.linktree, icon: 'linktree' },
]

export const footer = {
  line: 'Building ecosystems that turn vision into ventures, from Africa, for the world.',
  signature: 'Keep building... it matters.',
  copyrightHolder: 'Buntu Majaja Inc.',
}
