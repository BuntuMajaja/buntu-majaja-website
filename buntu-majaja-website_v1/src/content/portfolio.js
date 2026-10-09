/**
 * Portfolio case studies ("What I Do").
 * Order here is display order. `metaTag` drives the status filter and badge colour;
 * `tags` drive the category filter. `id` is a stable key; deep links use a slug of `title`
 * (?project=<slug>), so renaming a title breaks old shared links.
 */

export const portfolio = {
  heading: 'What I Do',
  intro:
    'I advise, consult, and collaborate on innovation, technology, and economic sovereignty projects. Explore my portfolio below and reach out to discuss how I can add value to your initiative.',
};

/** Category filter chips, in display order. */
export const categoryFilters = [
  "All",
  "Innovation",
  "Ecosystem",
  "Strategy",
  "Investment",
  "Technology",
  "International",
  "Policy",
  "Education",
  "Events",
  "Acceleration",
  "Advisory",
  "Partnerships",
  "Research",
  "Media",
  "Mining",
  "Food",
  "Analytics",
  "Blockchain",
  "CleanTech",
  "Consulting"
];

export const projects = [
  {
    id: 1,
    image: "/images/portfolio-rtims.webp",
    title: "RTIMS International Study Tour",
    role: "Consultant",
    years: "2025 - Present",
    metaTag: "Ongoing / Active",
    oneLiner: "Consulting on an international executive education program focused on Real-Time Information Management Systems in Mining Modernisation. Supporting stakeholder engagements and helping build commercialisation strategies and business cases based on technology stacks learned from the project.",
    tags: [
      "Innovation",
      "Technology",
      "International",
      "Mining"
    ],
    details: {
      context: "Real-Time Information Management Systems (RTIMS) international study tour focusing on executive education and technology transfer for stakeholder organizations.",
      actions: [
        "Supporting executive stakeholder focus groups",
        "Contributing to international site visits and engagements",
        "Helping develop comprehensive learning reports and documentation",
        "Helping build business cases for technology implementation",
        "Supporting knowledge transfer between international partners"
      ],
      results: [
        "Supporting an ongoing international study program",
        "Engaging executive stakeholders in meaningful learning experiences",
        "Helping develop actionable business cases and implementation frameworks",
        "Contributing to international technology transfer partnerships",
        "Helping create replicable study tour and learning methodologies"
      ],
      learning: "Executive education programs require balancing high-level strategic insights with practical implementation guidance. Key insight: successful study tours must translate international best practices into locally relevant business cases.",
      leverage: "Working with executive stakeholders, international technology partners, and learning institutions. Building relationships across government, private sector, and academic organizations.",
      nextSteps: "Program ongoing, following an extension of the engagement. Opportunities for collaboration in executive education, international study programs, and technology transfer initiatives. Open to partnerships with organizations interested in similar learning and development programs."
    }
  },
  {
    id: 2,
    image: "/images/portfolio-naci.webp",
    title: "National Advisory Council on Innovation — Science Parks",
    role: "Subcommittee Member",
    years: "2025 - Present",
    metaTag: "Advisory / Board",
    oneLiner: "Strategic advisory role on national innovation infrastructure development and policy formulation. Contributing to evidence-based frameworks for science parks and innovation ecosystem growth across South Africa.",
    tags: [
      "Innovation",
      "Policy",
      "Science Parks"
    ],
    details: {
      context: "Strategic advisory role on the National Advisory Council on Innovation, specifically focusing on science parks subcommittee to guide national innovation infrastructure development.",
      actions: [
        "Providing strategic guidance on science park development frameworks",
        "Contributing to national innovation policy formulation",
        "Advising on best practices for innovation ecosystem development",
        "Participating in stakeholder consultations and policy reviews",
        "Supporting evidence-based policy recommendations"
      ],
      results: [
        "Contributing to national science and innovation park strategies",
        "Influencing policy frameworks for innovation infrastructure",
        "Supporting evidence-based decision making for government initiatives",
        "Building consensus among diverse stakeholder groups",
        "Advancing South Africa's innovation ecosystem development"
      ],
      learning: "Policy development requires balancing multiple stakeholder interests while maintaining focus on measurable outcomes. Key insight: effective advisory roles combine practical experience with strategic thinking to influence systemic change.",
      leverage: "Working with government officials, academic institutions, private sector leaders, and international development organizations. Building relationships across the national innovation ecosystem.",
      nextSteps: "Ongoing advisory role through 2025. Available for consulting on innovation policy, science park development, and government-private sector partnerships. Open to similar advisory positions with innovation-focused organizations."
    }
  },
  {
    id: 3,
    image: "/images/portfolio-culinary.webp",
    title: "Johannesburg Culinary Advisory Board",
    role: "Advisory Board Member",
    years: "2023 - 2025",
    metaTag: "Advisory / Board",
    oneLiner: "Strategic advisory role developing Johannesburg's culinary innovation ecosystem and supporting food entrepreneurs. Balancing cultural preservation with business innovation to strengthen the city's position as a culinary destination.",
    tags: [
      "Food",
      "Culture",
      "Ecosystem"
    ],
    details: {
      context: "Advisory board role focused on developing Johannesburg's culinary innovation ecosystem, supporting food entrepreneurs and cultural preservation through business development.",
      actions: [
        "Providing strategic guidance on culinary ecosystem development",
        "Supporting food entrepreneur development programs",
        "Advising on cultural preservation through culinary innovation",
        "Contributing to policy recommendations for food industry support",
        "Facilitating connections between culinary entrepreneurs and investors"
      ],
      results: [
        "Contributing to Johannesburg's culinary ecosystem strategy",
        "Supporting food entrepreneur development initiatives",
        "Advancing cultural preservation through business innovation",
        "Building bridges between traditional culinary practices and modern business",
        "Strengthening Johannesburg's position as a culinary destination"
      ],
      learning: "Cultural ecosystems require different approaches than technology ecosystems, with greater emphasis on heritage preservation and community engagement. Key insight: successful culinary innovation balances tradition with commercial viability.",
      leverage: "Working with city officials, culinary entrepreneurs, cultural organizations, and tourism stakeholders. Building relationships across Johannesburg's food and culture sectors.",
      nextSteps: "Advisory role concluding in 2025. Available for consulting on cultural ecosystem development, food industry innovation, and heritage-based business development. Open to similar roles in creative and cultural industries."
    }
  },
  {
    id: 4,
    image: "/images/portfolio-startup20.webp",
    title: "Startup20 Taskforce",
    role: "Member",
    years: "2025",
    metaTag: "Advisory / Board",
    oneLiner: "Member of global Startup20 Taskforce representing African startup ecosystem interests in international policy forums. Contributing to G20 innovation policy recommendations and building consensus on startup-friendly frameworks.",
    tags: [
      "Startups",
      "Policy",
      "International"
    ],
    details: {
      context: "Member of the Startup20 Taskforce, contributing to global innovation policy dialogue and representing African startup ecosystem interests in international forums.",
      actions: [
        "Representing African startup ecosystem in global policy discussions",
        "Contributing to international innovation policy recommendations",
        "Participating in Startup20 working groups and consultations",
        "Advocating for emerging market startup ecosystem needs",
        "Building international consensus on startup-friendly policies"
      ],
      results: [
        "Successfully representing African interests in global startup policy",
        "Contributing to international policy recommendations",
        "Building awareness of African startup ecosystem challenges and opportunities",
        "Strengthening international cooperation on startup ecosystem development",
        "Advancing global understanding of emerging market innovation dynamics"
      ],
      learning: "International policy work requires deep understanding of diverse ecosystem contexts and ability to build consensus across different economic and political systems. Key insight: effective global policy must account for emerging market realities.",
      leverage: "Working with international startup ecosystem leaders, government officials, and policy makers from G20 countries. Building relationships across global innovation networks.",
      nextSteps: "Taskforce engagement completed in 2025. Available for consulting on international startup policy, global ecosystem development, and emerging market representation. Open to similar international advisory roles."
    }
  },
  {
    id: 5,
    image: "/images/portfolio-analytics.webp",
    title: "Advertising Analytics Advisory Board",
    role: "Advisory Board Member",
    years: "2023 - Present",
    metaTag: "Advisory / Board",
    oneLiner: "Strategic advisory role with advertising analytics company focusing on data-driven business strategy and product development. Contributing to market expansion strategies and translating complex analytics into actionable business insights.",
    tags: [
      "Marketing",
      "Analytics",
      "Data"
    ],
    details: {
      context: "Advisory board role with advertising analytics company, providing strategic guidance on product development, market positioning, and business strategy in the data-driven marketing sector.",
      actions: [
        "Providing strategic guidance on product development and positioning",
        "Advising on analytics-driven business strategy",
        "Contributing to market expansion and customer acquisition strategies",
        "Supporting data product development and feature prioritization",
        "Facilitating connections with potential clients and partners"
      ],
      results: [
        "Contributing to strategic product development decisions",
        "Supporting business growth and market expansion",
        "Advancing analytics capabilities and customer value proposition",
        "Building strategic partnerships and client relationships",
        "Strengthening competitive positioning in advertising analytics market"
      ],
      learning: "Data-driven businesses require balancing technical capabilities with market understanding and customer needs. Key insight: successful analytics products must translate complex data into actionable business insights.",
      leverage: "Working with technology teams, marketing professionals, and business leaders in the advertising and analytics sectors. Building relationships across data-driven marketing ecosystem.",
      nextSteps: "Ongoing advisory role. Available for consulting on data product development, analytics strategy, and marketing technology. Open to similar advisory positions with data-driven companies."
    }
  },
  {
    id: 6,
    image: "/images/portfolio-content.webp",
    title: "Content Creation & Thought Leadership Platform",
    role: "Content Creator / Strategist",
    years: "2024 - Present",
    metaTag: "Ongoing / Active",
    oneLiner: "Developing content ecosystem across multiple platforms (LinkedIn, Substack, YouTube) on innovation, AI, and African sovereignty. Building a coherent personal media brand while exploring how digital storytelling intersects with strategy and foresight.",
    tags: [
      "Media",
      "Writing",
      "AI",
      "Innovation",
      "Foresight",
      "Philosophy"
    ],
    details: {
      context: "Strategic development of comprehensive content ecosystem across multiple digital platforms to establish thought leadership in innovation, AI, and African economic sovereignty.",
      actions: [
        "Creating weekly content across LinkedIn, Substack, and YouTube platforms",
        "Developing coherent narrative threads connecting innovation, foresight, and African sovereignty",
        "Building engaged community of innovation practitioners and thought leaders",
        "Experimenting with different content formats and storytelling approaches",
        "Integrating personal brand with professional consulting and advisory work"
      ],
      results: [
        "Established consistent content publishing schedule across multiple platforms",
        "Built growing audience of innovation practitioners and strategic thinkers",
        "Created content library exploring intersection of technology and African development",
        "Developed distinctive voice in AI and foresight discourse",
        "Generated consulting and speaking opportunities through content marketing"
      ],
      learning: "Building a coherent personal media brand requires balancing authenticity with strategic positioning. Key insight: digital storytelling works best when it connects personal narrative with broader cultural and economic themes. Consistency in publishing builds trust and authority over time.",
      leverage: "Engaging with global innovation community, African tech ecosystem, and international foresight practitioners. Building relationships with content creators, researchers, and strategic thinkers across multiple disciplines.",
      nextSteps: "Expanding content ecosystem with podcast and video series. Open to content partnerships, speaking engagements, and collaborative projects exploring innovation, AI, and African sovereignty themes."
    }
  },
  {
    id: 7,
    image: "/images/portfolio-newsletter.webp",
    title: "FutureSight Africa Newsletter",
    role: "Author / Curator",
    years: "2023 - Present",
    metaTag: "Ongoing / Active",
    oneLiner: "Producing FutureSight Africa — a newsletter exploring the intersection of African innovation, foresight, and technology. Reinforced consistency in thought leadership and developed discipline in articulating foresight-driven insights weekly.",
    tags: [
      "Futures Thinking",
      "Foresight",
      "AI",
      "Innovation",
      "Writing"
    ],
    details: {
      context: "Weekly newsletter publication exploring the intersection of African innovation, foresight thinking, and emerging technology trends with focus on strategic implications for the continent.",
      actions: [
        "Researching and curating weekly content on African innovation and foresight",
        "Writing analytical pieces connecting global technology trends to African contexts",
        "Building subscriber base of innovation practitioners and strategic thinkers",
        "Developing frameworks for foresight analysis applied to African markets",
        "Creating consistent publishing schedule and editorial standards"
      ],
      results: [
        "Established weekly publication schedule with consistent subscriber growth",
        "Built reputation as thought leader in African innovation and foresight",
        "Created content library of strategic analysis and trend identification",
        "Developed distinctive analytical framework for African technology assessment",
        "Generated speaking and consulting opportunities through newsletter platform"
      ],
      learning: "Consistency in thought leadership requires discipline in research, analysis, and articulation. Key insight: foresight work is most valuable when it connects global trends to local contexts and actionable insights. Weekly publishing builds both audience and analytical capabilities.",
      leverage: "Engaging with African innovation ecosystem, global foresight community, and technology researchers. Building relationships with entrepreneurs, policymakers, and strategic thinkers across the continent.",
      nextSteps: "Expanding newsletter reach and developing premium content offerings. Open to partnerships with research institutions, consulting firms, and organizations interested in African innovation foresight."
    }
  },
  {
    id: 8,
    image: "/images/portfolio-summit.webp",
    title: "SA Innovation Summit — Ecosystem Platform",
    role: "CEO / Ecosystem Lead",
    years: "2020 - Present",
    metaTag: "Ongoing / Active",
    oneLiner: "Transformed Africa's largest startup event into a comprehensive ecosystem platform connecting startups, investors, and corporates. Scaled to cumulative 15,000+ attendees across 56 countries with $2M+ multi-year sponsorship runway and $22M+ in facilitated deals.",
    tags: [
      "Innovation",
      "Ecosystem",
      "Partnerships",
      "Events"
    ],
    details: {
      context: "Post-COVID transformation of Africa's largest startup event into a comprehensive ecosystem platform that connects startups, investors, and corporates across the continent.",
      actions: [
        "Led strategic pivot from physical event to hybrid ecosystem platform",
        "Scaled event reach from local to continental across 56 countries",
        "Secured $2 million in multi-year sponsorship revenue (2022-2025)",
        "Generated PR value over $500k+ with 100M+ digital impressions",
        "Built multi-stakeholder ecosystem facilitating investment deals"
      ],
      results: [
        "15,000+ attendees across 56 countries annually",
        "Partner NPS increased by 22 points",
        "$22+ million in investment deals facilitated (2022-2024)",
        "Established as Africa's premier innovation platform",
        "Created sustainable revenue model with multi-year partnerships"
      ],
      learning: "Learned that ecosystem building requires balancing stakeholder interests while maintaining authentic value creation. The key insight was shifting from event-centric to relationship-centric approach, which created more sustainable engagement and measurable business outcomes.",
      leverage: "Partnered with 200+ organizations including corporates, VCs, government agencies, and international development organizations. Built relationships across African innovation hubs and global startup ecosystems.",
      nextSteps: "Currently expanding into new African markets and developing digital platform capabilities. Open to partnerships with organizations looking to access African innovation ecosystem or scale similar platforms in other regions."
    }
  },
  {
    id: 9,
    image: "/images/portfolio-blockchain.webp",
    title: "SA–Switzerland Blockchain & CleanTech Innovation Challenges",
    role: "Project Director",
    years: "2022 - 2024",
    metaTag: "Completed / Case Study",
    oneLiner: "Directed comprehensive two-year bilateral innovation program strengthening ties between Swiss and South African ecosystems. Focused on blockchain and cleantech solutions with successful cross-border mentorship and market entry support.",
    tags: [
      "Innovation",
      "CleanTech",
      "Blockchain",
      "International"
    ],
    details: {
      context: "Bilateral innovation program designed to strengthen ties between Swiss and South African innovation ecosystems, focusing on blockchain and cleantech solutions with commercial and social impact potential.",
      actions: [
        "Designed and managed two-year bilateral innovation challenge program",
        "Coordinated with Swiss and South African government stakeholders",
        "Curated blockchain and cleantech startup cohorts from both countries",
        "Facilitated cross-border mentorship and investment connections",
        "Organized exchange programs and market entry support"
      ],
      results: [
        "Successfully completed two-year program with measurable outcomes",
        "Facilitated meaningful connections between Swiss and SA ecosystems",
        "Supported startups in blockchain and cleantech market entry",
        "Strengthened bilateral innovation cooperation frameworks",
        "Created replicable model for international innovation partnerships"
      ],
      learning: "International innovation programs require deep understanding of both ecosystems and patient relationship building. Key insight: successful bilateral programs need champions in both countries and must create mutual value, not one-sided benefits.",
      leverage: "Worked with Swiss government agencies, South African innovation institutions, and startup ecosystems in both countries. Built relationships with international development organizations and bilateral trade offices.",
      nextSteps: "Program completed in 2024. Available for consulting on international innovation partnerships, bilateral program design, and Swiss-African business development. Open to similar roles with other international innovation initiatives."
    }
  },
  {
    id: 10,
    image: "/images/portfolio-techtribe.webp",
    title: "TechTribe Accelerator — Virtual Program",
    role: "Co-Founder / Program Director",
    years: "2020 - 2024",
    metaTag: "Completed / Case Study",
    oneLiner: "Co-created one of Africa's first virtual accelerator programs during the pandemic, supporting accessible startup development across the continent. Directly mentored 200+ founders through structured programs, with portfolio startups raising $10M+ in total funding.",
    tags: [
      "Acceleration",
      "Startups",
      "Mentorship",
      "Virtual"
    ],
    details: {
      context: "Co-created one of Africa's first virtual accelerator programs during the pandemic, addressing the critical need for accessible startup support across the continent when physical programs became impossible.",
      actions: [
        "Co-designed comprehensive virtual accelerator curriculum and delivery model",
        "Personally mentored 200+ founders through structured acceleration programs",
        "Built network of 50+ investors and corporate partners for funding pipeline",
        "Created scalable virtual program infrastructure supporting multiple cohorts",
        "Developed founder assessment and selection frameworks"
      ],
      results: [
        "Supported 3,500 startups through various program tracks",
        "Portfolio startups raised $20+ million in total funding",
        "200+ founders directly mentored with measurable business growth",
        "Established replicable virtual acceleration model adopted by other programs",
        "Created sustainable revenue model through corporate partnerships"
      ],
      learning: "Discovered that virtual acceleration can be more effective than physical programs when designed properly. Key insight: founders need consistent accountability and peer networks more than physical proximity. The challenge was maintaining engagement and building trust remotely, solved through structured check-ins and peer matching.",
      leverage: "Collaborated with major African VCs, international development organizations, and corporate innovation teams. Built relationships with startup ecosystems across Nigeria, Kenya, South Africa, and Ghana.",
      nextSteps: "Program successfully concluded in 2024. Available for consulting on virtual program design, startup acceleration methodologies, and ecosystem building. Open to advisory roles with similar initiatives."
    }
  },
  {
    id: 11,
    image: "/images/portfolio-ark.webp",
    title: "ARK Invest Big Ideas Review Newsletter",
    role: "Author / Analyst",
    years: "2021 - 2022",
    metaTag: "Completed / Case Study",
    oneLiner: "Published analytical reviews of ARK Invest's annual \"Big Ideas\" reports, contextualising them for African markets. Learned how to critically assess frontier technologies through an African lens; improved analytical writing depth.",
    tags: [
      "Fintech",
      "Research",
      "Analysis",
      "Technology",
      "Innovation"
    ],
    details: {
      context: "Analytical newsletter series providing critical reviews and African contextualization of ARK Invest's influential annual \"Big Ideas\" reports on disruptive innovation and technology trends.",
      actions: [
        "Analyzing ARK Invest's annual Big Ideas reports for African market relevance",
        "Writing detailed analytical reviews connecting global tech trends to African contexts",
        "Developing frameworks for assessing frontier technologies in emerging markets",
        "Building audience of African tech investors and innovation practitioners",
        "Creating original research on technology adoption patterns in African markets"
      ],
      results: [
        "Published comprehensive analytical reviews of multiple ARK Invest Big Ideas reports",
        "Built reputation for critical technology analysis from African perspective",
        "Developed distinctive analytical framework for frontier technology assessment",
        "Created content library of African-contextualized technology insights",
        "Established credibility in fintech and innovation analysis community"
      ],
      learning: "Critical technology analysis requires balancing global trends with local market realities. Key insight: frontier technologies must be assessed through the lens of African infrastructure, regulatory environments, and market dynamics. Analytical writing improves through consistent practice and peer feedback.",
      leverage: "Engaging with African fintech ecosystem, global technology analysts, and investment community. Building relationships with researchers, investors, and technology entrepreneurs across emerging markets.",
      nextSteps: "Newsletter concluded in 2022. Available for consulting on technology analysis, market research, and African fintech strategy. Open to research partnerships and analytical writing projects."
    }
  },
  {
    id: 12,
    image: "/images/portfolio-podcast-ubuntu.webp",
    title: "Ubuntu Dreams Podcast",
    role: "Host / Producer",
    years: "2020 - 2021",
    metaTag: "Completed / Case Study",
    oneLiner: "Hosted and produced podcast episodes exploring identity, creativity, and purpose through African and global perspectives. Learned audio storytelling and deepened skills in connecting personal narrative with broader cultural themes.",
    tags: [
      "Media",
      "Storytelling",
      "Philosophy",
      "Personal Growth"
    ],
    details: {
      context: "Podcast series exploring themes of identity, creativity, and purpose through conversations and storytelling that connected personal narratives with broader African and global cultural themes.",
      actions: [
        "Hosting and producing regular podcast episodes on identity and creativity",
        "Conducting interviews with diverse guests on personal growth and cultural themes",
        "Developing audio storytelling skills and podcast production capabilities",
        "Creating content that connected individual stories with broader cultural narratives",
        "Building audience interested in African philosophy and personal development"
      ],
      results: [
        "Produced multiple podcast episodes exploring identity and creativity themes",
        "Developed audio storytelling and podcast production skills",
        "Built engaged audience interested in African philosophy and personal growth",
        "Created content library connecting personal narratives with cultural themes",
        "Established foundation for future media and storytelling projects"
      ],
      learning: "Audio storytelling requires different skills than written content - pacing, voice, and conversational flow become critical. Key insight: the most powerful stories connect individual experiences with universal themes. Podcast production taught me the importance of consistent publishing and audience engagement.",
      leverage: "Connected with diverse guests, storytellers, and content creators. Built relationships in African philosophy, personal development, and media production communities.",
      nextSteps: "Podcast concluded in 2021. Available for consulting on podcast strategy, audio storytelling, and content creation. Open to hosting opportunities and media production partnerships."
    }
  },
  {
    id: 13,
    image: "/images/portfolio-podcast-e3.webp",
    title: "E³ Podcast – Education, Entrepreneurship & Employability (Department of Education)",
    role: "Host / Facilitator",
    years: "2019 - 2020",
    metaTag: "Completed / Case Study",
    oneLiner: "Led podcast series under South Africa's Department of Basic Education exploring the E³ framework and innovation in education. Gained insights into public–private collaboration models and the complexity of educational reform in emerging contexts.",
    tags: [
      "Education",
      "Entrepreneurship",
      "Employability",
      "Media"
    ],
    details: {
      context: "Podcast series developed under South Africa's Department of Basic Education exploring the E³ framework (Education, Entrepreneurship, Employability) and innovation approaches to educational reform.",
      actions: [
        "Hosting podcast series on education innovation and entrepreneurship",
        "Facilitating discussions on E³ framework implementation in South African schools",
        "Interviewing education leaders, entrepreneurs, and policy makers",
        "Developing content connecting education reform with economic development",
        "Building bridges between public education sector and private innovation"
      ],
      results: [
        "Successfully produced podcast series under Department of Basic Education",
        "Created content exploring E³ framework and educational innovation",
        "Built understanding of public-private collaboration in education sector",
        "Developed relationships across education, entrepreneurship, and policy communities",
        "Contributed to national dialogue on education reform and innovation"
      ],
      learning: "Public-private collaboration requires understanding different organizational cultures and incentive structures. Key insight: educational reform in emerging contexts must balance innovation with practical implementation challenges. Working with government taught me the importance of patience and stakeholder alignment.",
      leverage: "Worked directly with Department of Basic Education officials, education entrepreneurs, and policy researchers. Built relationships across public education sector and private innovation ecosystem.",
      nextSteps: "Podcast concluded in 2020. Available for consulting on education innovation, public-private partnerships, and educational content creation. Open to advisory roles in education technology and reform initiatives."
    }
  },
  {
    id: 14,
    image: "/images/portfolio-abh.webp",
    title: "Africa's Business Heroes — Southern Africa Anchor Partnership",
    role: "Project Manager → Project Director",
    years: "2021 - 2023",
    metaTag: "Completed / Case Study",
    oneLiner: "Strategic partnership with Africa's Business Heroes (Jack Ma Foundation initiative) to support and scale African entrepreneurs. Managed Southern Africa regional delivery, progressing from Project Manager to Director while facilitating mentorship and ecosystem connections.",
    tags: [
      "Partnerships",
      "Startups",
      "Investment",
      "Ecosystem"
    ],
    details: {
      context: "Strategic partnership with Africa's Business Heroes (Jack Ma Foundation initiative) to support and scale African entrepreneurs through mentorship, funding, and ecosystem connections.",
      actions: [
        "Managed Southern Africa regional partnership delivery",
        "Coordinated founder selection and support processes",
        "Facilitated mentorship connections and program delivery",
        "Supported entrepreneurs through ABH platform and resources",
        "Progressed from Project Manager to Project Director role"
      ],
      results: [
        "Successfully delivered regional partnership objectives",
        "Supported multiple African founders through ABH program",
        "Strengthened Southern African startup ecosystem connections",
        "Built relationships with international entrepreneurship platforms",
        "Demonstrated leadership progression within the program"
      ],
      learning: "Large-scale entrepreneurship programs require balancing individual founder needs with program scalability. Key insight: successful founder support combines access to capital with ecosystem connections and peer learning.",
      leverage: "Worked with Jack Ma Foundation, African startup ecosystems, and international mentorship networks. Built connections with successful African entrepreneurs and global business leaders.",
      nextSteps: "Partnership completed in 2023. Available for consulting on entrepreneurship program design, founder support initiatives, and international partnership management. Open to similar roles with global entrepreneurship platforms."
    }
  },
  {
    id: 15,
    image: "/images/portfolio-andafrica.webp",
    title: "AndAfrica Investment Platform",
    role: "Executive / Platform Builder",
    years: "2018 - 2019",
    metaTag: "Completed / Case Study",
    oneLiner: "Cross-continental investment platform bridging Japanese institutional capital with high-growth African startups. Successfully raised $100K seed funding and established operational presence in both Tokyo and Johannesburg with functional SaaS exchange platform.",
    tags: [
      "Investment",
      "Platform",
      "International",
      "SaaS"
    ],
    details: {
      context: "Cross-continental investment platform designed to bridge the gap between Japanese institutional capital and high-growth African startups, addressing the information asymmetry and cultural barriers in cross-border investment.",
      actions: [
        "Built comprehensive SaaS investment platform with due diligence workflows",
        "Raised USD 100K in seed funding from Japanese and African investors",
        "Established operational presence in both Tokyo and Johannesburg",
        "Created cross-cultural investment frameworks and risk assessment models",
        "Developed startup vetting and investor matching algorithms"
      ],
      results: [
        "Successfully raised USD 100K seed funding within 6 months",
        "Established functional SaaS exchange platform with 50+ registered investors",
        "Created Japan-Africa investment bridge facilitating initial deal flow",
        "Developed replicable cross-border investment model and frameworks",
        "Built network of institutional investors and startup ecosystems in both regions"
      ],
      learning: "Learned that cross-border investment requires deep cultural understanding beyond just financial metrics. The biggest challenge was building trust between investors and entrepreneurs across different business cultures. Key insight: successful international platforms need local champions and cultural translators, not just technology.",
      leverage: "Worked with Japanese institutional investors, African development finance institutions, and startup ecosystems in both regions. Built relationships with government trade offices and international business development organizations.",
      nextSteps: "Platform concluded operations in 2019. Available for consulting on cross-border investment platforms, international business development, and Japan-Africa business relationships. Open to advisory roles with similar cross-continental initiatives."
    }
  },
  {
    id: 16,
    image: "/images/portfolio-cleantech.webp",
    title: "Mining Innovation Project",
    role: "Senior Strategy & Innovation Consultant",
    years: "2017",
    metaTag: "Completed / Case Study",
    oneLiner: "Strategic consulting engagement with major mining company to develop and implement innovation frameworks driving operational efficiency. Successfully delivered measurable results unlocking 5x forecasted return through systematic innovation processes.",
    tags: [
      "Innovation",
      "Strategy",
      "Mining",
      "Consulting"
    ],
    details: {
      context: "Strategic consulting engagement with major mining company to develop and implement innovation frameworks that would drive operational efficiency and competitive advantage in traditional mining operations.",
      actions: [
        "Conducted comprehensive innovation audit of existing mining operations",
        "Designed strategic innovation framework tailored to mining industry requirements",
        "Led cross-functional teams through innovation implementation process",
        "Developed ROI measurement systems for innovation initiatives",
        "Created change management strategies for traditional industry transformation"
      ],
      results: [
        "Delivered strategic innovation project unlocking 5x forecasted return",
        "Implemented sustainable innovation processes within mining operations",
        "Achieved measurable efficiency gains across core mining processes",
        "Built internal innovation capabilities and change management systems",
        "Created replicable innovation model for traditional industries"
      ],
      learning: "Learned that innovation in traditional industries requires balancing cutting-edge thinking with operational realities. The key insight was that mining companies need innovation frameworks that respect safety protocols and regulatory requirements while driving efficiency. Success came from combining technical expertise with change management.",
      leverage: "Worked directly with C-suite executives, engineering teams, and operational managers. Built relationships with mining industry associations and technology vendors. Leveraged chemical engineering background to bridge technical and strategic perspectives.",
      nextSteps: "Project successfully completed in 2017. Available for consulting on innovation strategy in traditional industries, operational efficiency optimization, and strategic transformation. Open to similar engagements in mining, manufacturing, and industrial sectors."
    }
  }
];
