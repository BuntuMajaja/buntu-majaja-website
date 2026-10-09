/**
 * Explore menu and page. `locked: true` items show as "Coming soon" with no link.
 * Unlock by setting `locked: false` and adding an `href` (tracked in Website/root.md).
 */

export const explore = {
  intro: 'Writing, conversations and long-form ideas on innovation, capital and Africa’s future.',
  items: [
    {
      key: 'newsletter',
      name: 'Newsletter',
      description: 'Essays on building, events on tech and ideas worth acting on, in your inbox.',
      action: 'Subscribe',
      kit: true,
      locked: false,
    },
    {
      key: 'podcast',
      name: 'Podcast',
      description: 'Long-form conversations with the people building Africa’s future.',
      locked: true,
    },
    {
      key: 'book',
      name: 'Book',
      description: 'The ideas behind the keynotes, in one place.',
      locked: true,
    },
  ],
  image: { src: '/media/explore-conversation.webp', alt: 'Buntu in conversation, holding a microphone' },
}
