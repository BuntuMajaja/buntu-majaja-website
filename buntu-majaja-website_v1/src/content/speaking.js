/**
 * Speaking section: intro, topics, testimonials, past engagements, fees.
 *
 * WARNING: every testimonial and past engagement below was carried over from v0.1 as-is
 * and is marked `verified: false`. They read like AI-generated placeholders (generic names,
 * organisations and cities). Confirm each one is real, or remove it, before relying on it.
 * Tracked in Website/root.md.
 */

export const speaking = {
  intro:
    'Buntu delivers keynotes that challenge conventional thinking and equip leaders with frameworks to navigate complexity. His presentations blend frontier Technology insights with global macro trends from a Global South perspective, offering audiences actionable strategies for innovation, economic transformation, and systems-level change.',
  audience:
    'Ideal for conferences, corporate events, innovation summits, and leadership forums seeking thought-provoking content that inspires action and reframes how audiences think about technology, socio-economics, and the future.',
  reelPlaceholder: 'Speaking Reel Video Coming Soon',
  fees: 'Fees from $1,550 (plus taxes and hard costs)',

  /** `icon` names map to lucide icons in SpeakingSection. */
  topics: [
    {
      icon: 'cpu',
      title: 'The Convergence Crisis: AI, Robotics & Batteries',
      hook: 'Technology Optimist: "We\'re building tomorrow with yesterday\'s playbook"',
      description:
        'Your competitors are already leveraging AI, robotics, and battery breakthroughs—but most organizations struggle to connect the dots between these converging technologies. Buntu explores the unprecedented convergence reshaping every industry and provides frameworks for leaders to navigate this transformation and harness convergence for competitive advantage rather than disruption.',
      audience: 'Tech executives, corporate strategists, innovation teams, venture capitalists',
    },
    {
      icon: 'globe',
      title: 'Economic Sovereignty: How Money, Land & Ideas Really Work',
      hook: 'African Economic Thesis: "Money flows through colonial pipelines - here\'s how Africa breaks free"',
      description:
        'African economies remain trapped in dependency cycles despite decades of independence—wealth still aggregates in London, New York, and Paris. Buntu delivers a macro examination of how money flows through colonial structures and unpacks why Africa must master resource extraction and idea generation to achieve true economic sovereignty and break free from these persistent patterns.',
      audience: 'Development agencies, African leaders, economic forums, policy makers',
    },
    {
      icon: 'trending',
      title: '2026 Foresight: Tech & Innovation Predictions',
      hook: 'Annual Predictions: "What every leader needs to know about next year"',
      description:
        'Strategic planning fails when leaders miss the early signals of technological and market shifts that reshape entire industries overnight. Buntu shares his data-informed predictions for technology, innovation, and macro trends that will define 2026. Using African and global insights, he examines opportunities and challenges that leaders need to prepare for in the year ahead.',
      audience: 'Corporate leaders, investors, innovation managers, conference audiences',
    },
    {
      icon: 'network',
      title: 'Innovation Ecosystems: The Complexity That Impacts Everything',
      hook: 'Systems Thinking: "Why most moonshots crash before takeoff"',
      description:
        'Innovation budgets get wasted on initiatives that fail because leaders underestimate ecosystem complexity and default to linear thinking. Buntu inspires teams to embrace systems thinking, pursue moonshot goals, and build exponential innovation ecosystems that drive transformational outcomes rather than incremental improvements.',
      audience: 'Innovation teams, government officials, development agencies, corporate executives',
    },
  ],

  testimonials: [
    {
      quote: "Buntu's insights on African innovation are transformative. His ability to connect macro trends with actionable strategies is unparalleled.",
      author: 'Dr. Sarah Nkosi',
      role: 'CEO, Innovation Hub Africa',
      organization: 'Innovation Hub Africa',
      verified: false,
    },
    {
      quote: 'A powerful speaker who brings both vision and practical wisdom. Buntu inspired our entire leadership team to think differently about the future.',
      author: 'Michael Chen',
      role: 'Director of Strategy',
      organization: 'Global Tech Solutions',
      verified: false,
    },
    {
      quote: "Buntu's presentation at our summit was the highlight of the event. His passion for entrepreneurship and innovation is truly infectious.",
      author: 'Amina Mohammed',
      role: 'Event Director',
      organization: 'SA Innovation Summit',
      verified: false,
    },
    {
      quote: 'His futurism keynote equipped our team with the frameworks needed to navigate uncertainty and make better strategic decisions.',
      author: 'James Williams',
      role: 'Chief Innovation Officer',
      organization: 'Enterprise Growth Partners',
      verified: false,
    },
    {
      quote: "Buntu doesn't just speak—he transforms audiences. His leadership insights have had a lasting impact on our organization.",
      author: 'Thandiwe Dlamini',
      role: 'Head of Talent Development',
      organization: "Nelson Mandela Children's Fund",
      verified: false,
    },
  ],

  pastEngagements: [
    { title: 'African Innovation Summit', organization: 'SA Innovation Summit', location: 'Johannesburg', verified: false },
    { title: 'Innovation & African Identity', organization: 'TEDx', location: 'Cape Town', verified: false },
    { title: 'Sustainable Innovation', organization: 'Innovation Week', location: 'Dar es Salaam', verified: false },
    { title: 'Economic Sovereignty', organization: 'African Union', location: 'Addis Ababa', verified: false },
    { title: 'AI Convergence', organization: 'Tech Summit', location: 'Lagos', verified: false },
    { title: 'Ecosystem Building', organization: 'Startup Grind', location: 'Nairobi', verified: false },
    { title: 'Future of Work', organization: 'World Bank', location: 'Kigali', verified: false },
    { title: 'Innovation Policy', organization: 'Government Forum', location: 'Pretoria', verified: false },
    { title: 'Moonshot Thinking', organization: 'Corporate Leaders', location: 'Dubai', verified: false },
    { title: 'Tech & Capital', organization: 'Investment Summit', location: 'London', verified: false },
  ],
}
