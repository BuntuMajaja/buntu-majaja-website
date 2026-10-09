/**
 * Masterclasses page.
 * DRAFT copy (2026-10-09): built from Buntu's own Capital 101 format and his keynote themes.
 * Deliberately names no client: client engagements may need written approval
 * before being referenced publicly. Buntu to confirm formats, durations and wording.
 */

export const masterclasses = {
  intro:
    'Hands-on sessions for founders and leadership teams. Less keynote, more workbench: your team leaves with a shared framework and the language to use it.',
  images: {
    hero: { src: '/media/masterclass-room.webp', alt: 'Buntu facilitating a session in a conference room' },
    side: { src: '/media/masterclass-launch.webp', alt: 'Buntu presenting at a programme launch' },
  },
  offers: [
    {
      name: 'Capital 101',
      promise: 'Match the money to the milestone.',
      description:
        'An interactive masterclass on how to read the investment landscape as a founder: which capital fits which stage, what each kind of investor needs to see, and how to protect runway while you build.',
      for: 'Founders, accelerator cohorts and ecosystem programmes',
      format: 'Two hours, in person or online, with live case work',
    },
    {
      name: 'The AI-native leadership session',
      promise: 'Turn convergence from threat into advantage.',
      description:
        "A working session on AI, robotics and energy convergence for leadership teams: what is actually changing in your industry, where the early signals are, and the decisions to make in the next twelve months.",
      for: 'Executive teams, boards and strategy offsites',
      format: 'Half day, in person, tailored to your sector',
    },
    {
      name: 'Ecosystem design lab',
      promise: 'Build the system, not just the event.',
      description:
        'For organisations building innovation programmes, hubs or partnerships: how to align talent, capital and institutions so the ecosystem keeps working after the launch.',
      for: 'Government, development agencies and corporate innovation units',
      format: 'Half or full day, in person',
    },
  ],
  closing: 'Every session is shaped around your audience. Tell me who is in the room and what has to change.',
}
