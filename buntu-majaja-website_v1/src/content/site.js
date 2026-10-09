/**
 * Site-wide content: identity, links, navigation, hero, channels, footer.
 * Edit copy here; components only handle layout.
 */

export const links = {
  linkedin: 'https://linkedin.com/in/buntumajaja',
  twitter: 'https://twitter.com/buntumajaja',
  github: 'https://github.com/buntumajaja',
  youtube: 'https://youtube.com/@buntumajaja',
  substack: 'https://future-sight-africa.substack.com',
  substackEmbed: 'https://futuresightafrica.substack.com/embed',
  buyMeACoffee: 'https://buymeacoffee.com/buntumajaja',
  book: 'https://gumroad.com/buntumajaja',
  linktree: 'https://linktr.ee/buntumajaja',
  cv: '/docs/CV_B_Majaja_v4_2.pdf',
  speakerProfile: '/docs/20230530-BuntuMajajaSpeakerProfilevv1.2.pdf',
  speakingEmail: 'mailto:buntumajaja@gmail.com?subject=Speaking Engagement Inquiry',
}

export const person = {
  name: 'Buntu Majaja',
  tagline: 'Ecosystem Builder • Strategist • Investor',
}

export const nav = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Speaking', href: '#speaking' },
  { name: 'Newsletter', href: '#newsletter' },
]

export const hero = {
  badge: 'Available for Speaking Engagements',
  titles: [
    'Innovation & Partnerships Lead',
    'Venture Development Strategist',
    'AI Commercialisation Architect, Global South Markets',
  ],
  intro: 'I design and scale innovation systems that convert vision into ventures across Africa.',
  quote: '"It does not take time, it takes alignment" (Oct\'25)',
  image: { src: '/images/buntu-majaja-speaker-profile.webp', alt: 'Buntu Majaja - Professional Portrait' },
}

/** "Explore My Universe" cards. `icon` names map to lucide icons in ChannelsSection. */
export const channels = {
  heading: { lead: 'Explore My', highlight: 'Universe' },
  intro: 'Four channels that capture my work in innovation, partnerships, and venture ecosystems',
  items: [
    {
      title: 'About',
      target: '#about',
      icon: 'user',
      description: "The story, values, and what I'm building next. Discover my journey from chemical engineer to ecosystem builder.",
    },
    {
      title: 'Portfolio',
      target: '#portfolio',
      icon: 'briefcase',
      description: "Case studies: role, actions, outcomes. Explore the innovation systems and ventures I've built across Africa.",
    },
    {
      title: 'Speaking',
      target: '#speaking',
      icon: 'mic',
      description: 'Keynotes that challenge thinking and equip leaders. Explore speaking topics and book an engagement.',
    },
    {
      title: 'Newsletter',
      target: '#newsletter',
      icon: 'mail',
      description: "FutureSight Africa — weekly notes on innovation & capital. Join 2,000+ subscribers exploring Africa's future.",
    },
  ],
}

export const footer = {
  blurb: 'Designing and scaling innovation systems that convert vision into ventures across Africa.',
  quickLinks: [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Newsletter', href: '#newsletter' },
  ],
  social: [
    { name: 'LinkedIn', href: links.linkedin, icon: 'linkedin' },
    { name: 'Twitter', href: links.twitter, icon: 'twitter' },
    { name: 'GitHub', href: links.github, icon: 'github' },
    { name: 'YouTube', href: links.youtube, icon: 'youtube' },
  ],
  copyrightHolder: 'Buntu Majaja Inc.',
}
