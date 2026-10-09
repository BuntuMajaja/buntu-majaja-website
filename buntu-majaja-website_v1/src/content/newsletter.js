/**
 * FutureSight Africa newsletter section.
 * `featuredPosts` are carried over from v0.1 unlinked and look like placeholders —
 * replace with real Substack posts (see Website/root.md).
 */

export const newsletter = {
  name: 'FutureSight Africa',
  intro:
    "Weekly notes on innovation & capital across Africa. Join a community of entrepreneurs, investors, and innovators shaping the continent's future.",
  /** `icon` names map to lucide icons in NewsletterSection. */
  stats: [
    { icon: 'users', number: '2,000+', label: 'Subscribers' },
    { icon: 'globeOutline', number: '56', label: 'Countries' },
    { icon: 'trending', number: 'Weekly', label: 'Insights' },
  ],
  subscribeHeading: 'Subscribe for Weekly Insights',
  subscribeNote: 'Join 2,000+ subscribers. No spam, unsubscribe anytime.',
  featuredPosts: [
    {
      title: 'The Future of African Innovation Ecosystems',
      excerpt: "Exploring how technology and entrepreneurship are reshaping Africa's economic landscape.",
      date: 'Dec 2024',
      readTime: '5 min read',
      verified: false,
    },
    {
      title: 'Building Sustainable Venture Capital in Africa',
      excerpt: 'Key insights on creating investment frameworks that work for African startups.',
      date: 'Nov 2024',
      readTime: '7 min read',
      verified: false,
    },
    {
      title: 'The Rise of African Tech Hubs',
      excerpt: 'How cities across Africa are becoming centres of innovation and entrepreneurship.',
      date: 'Nov 2024',
      readTime: '6 min read',
      verified: false,
    },
  ],
}
