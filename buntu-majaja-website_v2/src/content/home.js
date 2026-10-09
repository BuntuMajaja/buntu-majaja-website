/**
 * Home page: one bold hero and nothing else.
 * The two buyer lines speak to the two people who book Buntu, in their own words.
 * DRAFT copy (2026-10-09): Buntu to confirm or rewrite.
 */

export const home = {
  image: {
    src: '/media/hero-stage.webp',
    srcMobile: '/media/hero-stage-portrait.webp',
    alt: 'Buntu Majaja speaking on stage at the SA Innovation Summit',
  },
  buyers: [
    {
      who: 'For event organisers',
      line: "Give your audience a new language for Africa's future... one they'll still be quoting at the next strategy offsite.",
      cta: { label: 'Book a keynote', to: '/speaker' },
    },
    {
      who: 'For leadership teams',
      line: "Say what your leadership has been trying to say... from a voice outside the room.",
      cta: { label: 'Explore masterclasses', to: '/masterclasses' },
    },
  ],
  download: 'Download Buntu’s profile',
}
