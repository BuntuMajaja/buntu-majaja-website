import React, { useState } from 'react';
import { X, Calendar, User, Tag, ArrowRight, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeMetaFilter, setActiveMetaFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'RTIMS International Study Tour',
      role: 'Project Director',
      years: '2025 - Present',
      metaTag: 'Ongoing / Active',
      oneLiner: 'Coordinating executive stakeholder focus group, site engagements, learning reports, and business case development',
      tags: ['Innovation', 'Technology', 'International', 'Learning'],
      image: '/src/assets/rtims-study-tour.png',
      details: {
        context: 'Real-Time Information Management Systems (RTIMS) international study tour focusing on executive education and technology transfer for stakeholder organizations.',
        actions: [
          'Coordinating executive stakeholder focus groups',
          'Managing international site visits and engagements',
          'Developing comprehensive learning reports and documentation',
          'Building business cases for technology implementation',
          'Facilitating knowledge transfer between international partners'
        ],
        results: [
          'Successfully coordinating ongoing international study program',
          'Engaging executive stakeholders in meaningful learning experiences',
          'Developing actionable business cases and implementation frameworks',
          'Building international technology transfer partnerships',
          'Creating replicable study tour and learning methodologies'
        ],
        learning: 'Executive education programs require balancing high-level strategic insights with practical implementation guidance. Key insight: successful study tours must translate international best practices into locally relevant business cases.',
        leverage: 'Working with executive stakeholders, international technology partners, and learning institutions. Building relationships across government, private sector, and academic organizations.',
        nextSteps: 'Program ongoing through 2025. Opportunities for collaboration in executive education, international study programs, and technology transfer initiatives. Open to partnerships with organizations interested in similar learning and development programs.'
      }
    },
    {
      id: 2,
      title: 'National Advisory Council on Innovation — Science Parks',
      role: 'Subcommittee Member',
      years: '2025 - Present',
      metaTag: 'Advisory / Board',
      oneLiner: 'Advising on national science and innovation park strategies and frameworks',
      tags: ['Innovation', 'Policy', 'Science Parks'],
      image: '/src/assets/naci-science-parks.png',
      details: {
        context: 'Strategic advisory role on the National Advisory Council on Innovation, specifically focusing on science parks subcommittee to guide national innovation infrastructure development.',
        actions: [
          'Providing strategic guidance on science park development frameworks',
          'Contributing to national innovation policy formulation',
          'Advising on best practices for innovation ecosystem development',
          'Participating in stakeholder consultations and policy reviews',
          'Supporting evidence-based policy recommendations'
        ],
        results: [
          'Contributing to national science and innovation park strategies',
          'Influencing policy frameworks for innovation infrastructure',
          'Supporting evidence-based decision making for government initiatives',
          'Building consensus among diverse stakeholder groups',
          'Advancing South Africa\'s innovation ecosystem development'
        ],
        learning: 'Policy development requires balancing multiple stakeholder interests while maintaining focus on measurable outcomes. Key insight: effective advisory roles combine practical experience with strategic thinking to influence systemic change.',
        leverage: 'Working with government officials, academic institutions, private sector leaders, and international development organizations. Building relationships across the national innovation ecosystem.',
        nextSteps: 'Ongoing advisory role through 2025. Available for consulting on innovation policy, science park development, and government-private sector partnerships. Open to similar advisory positions with innovation-focused organizations.'
      }
    },
    {
      id: 3,
      title: 'Johannesburg Culinary Advisory Board',
      role: 'Advisory Board Member',
      years: '2023 - 2025',
      metaTag: 'Advisory / Board',
      oneLiner: 'Providing strategic guidance to Johannesburg\'s culinary innovation ecosystem',
      tags: ['Food', 'Culture', 'Ecosystem'],
      image: '/src/assets/joburg-culinary-board.png',
      details: {
        context: 'Advisory board role focused on developing Johannesburg\'s culinary innovation ecosystem, supporting food entrepreneurs and cultural preservation through business development.',
        actions: [
          'Providing strategic guidance on culinary ecosystem development',
          'Supporting food entrepreneur development programs',
          'Advising on cultural preservation through culinary innovation',
          'Contributing to policy recommendations for food industry support',
          'Facilitating connections between culinary entrepreneurs and investors'
        ],
        results: [
          'Contributing to Johannesburg\'s culinary ecosystem strategy',
          'Supporting food entrepreneur development initiatives',
          'Advancing cultural preservation through business innovation',
          'Building bridges between traditional culinary practices and modern business',
          'Strengthening Johannesburg\'s position as a culinary destination'
        ],
        learning: 'Cultural ecosystems require different approaches than technology ecosystems, with greater emphasis on heritage preservation and community engagement. Key insight: successful culinary innovation balances tradition with commercial viability.',
        leverage: 'Working with city officials, culinary entrepreneurs, cultural organizations, and tourism stakeholders. Building relationships across Johannesburg\'s food and culture sectors.',
        nextSteps: 'Advisory role concluding in 2025. Available for consulting on cultural ecosystem development, food industry innovation, and heritage-based business development. Open to similar roles in creative and cultural industries.'
      }
    },
    {
      id: 4,
      title: 'Startup20 Taskforce',
      role: 'Member',
      years: '2025',
      metaTag: 'Advisory / Board',
      oneLiner: 'Representing and contributing to Startup20 global innovation policy dialogue',
      tags: ['Startups', 'Policy', 'International'],
      image: '/src/assets/startup20-taskforce.png',
      details: {
        context: 'Member of the Startup20 Taskforce, contributing to global innovation policy dialogue and representing African startup ecosystem interests in international forums.',
        actions: [
          'Representing African startup ecosystem in global policy discussions',
          'Contributing to international innovation policy recommendations',
          'Participating in Startup20 working groups and consultations',
          'Advocating for emerging market startup ecosystem needs',
          'Building international consensus on startup-friendly policies'
        ],
        results: [
          'Successfully representing African interests in global startup policy',
          'Contributing to international policy recommendations',
          'Building awareness of African startup ecosystem challenges and opportunities',
          'Strengthening international cooperation on startup ecosystem development',
          'Advancing global understanding of emerging market innovation dynamics'
        ],
        learning: 'International policy work requires deep understanding of diverse ecosystem contexts and ability to build consensus across different economic and political systems. Key insight: effective global policy must account for emerging market realities.',
        leverage: 'Working with international startup ecosystem leaders, government officials, and policy makers from G20 countries. Building relationships across global innovation networks.',
        nextSteps: 'Taskforce engagement completed in 2025. Available for consulting on international startup policy, global ecosystem development, and emerging market representation. Open to similar international advisory roles.'
      }
    },
    {
      id: 5,
      title: 'Advertising Analytics Advisory Board',
      role: 'Advisory Board Member',
      years: '2023 - Present',
      metaTag: 'Advisory / Board',
      oneLiner: 'Advising on analytics-driven strategy and product positioning',
      tags: ['Marketing', 'Analytics', 'Data'],
      image: '/src/assets/advertising-analytics-board.png',
      details: {
        context: 'Advisory board role with advertising analytics company, providing strategic guidance on product development, market positioning, and business strategy in the data-driven marketing sector.',
        actions: [
          'Providing strategic guidance on product development and positioning',
          'Advising on analytics-driven business strategy',
          'Contributing to market expansion and customer acquisition strategies',
          'Supporting data product development and feature prioritization',
          'Facilitating connections with potential clients and partners'
        ],
        results: [
          'Contributing to strategic product development decisions',
          'Supporting business growth and market expansion',
          'Advancing analytics capabilities and customer value proposition',
          'Building strategic partnerships and client relationships',
          'Strengthening competitive positioning in advertising analytics market'
        ],
        learning: 'Data-driven businesses require balancing technical capabilities with market understanding and customer needs. Key insight: successful analytics products must translate complex data into actionable business insights.',
        leverage: 'Working with technology teams, marketing professionals, and business leaders in the advertising and analytics sectors. Building relationships across data-driven marketing ecosystem.',
        nextSteps: 'Ongoing advisory role. Available for consulting on data product development, analytics strategy, and marketing technology. Open to similar advisory positions with data-driven companies.'
      }
    },
    {
      id: 6,
      title: 'SA Innovation Summit — Ecosystem Platform',
      role: 'CEO / Ecosystem Lead',
      years: '2020 - Present',
      metaTag: 'Ongoing / Active',
      oneLiner: 'Scaled multi-stakeholder platform; 15,000+ attendees; multi-year sponsorship runway of $2M+',
      tags: ['Innovation', 'Ecosystem', 'Partnerships', 'Events'],
      image: '/src/assets/sa-innovation-summit.png',
      details: {
        context: 'Post-COVID transformation of Africa\'s largest startup event into a comprehensive ecosystem platform that connects startups, investors, and corporates across the continent.',
        actions: [
          'Led strategic pivot from physical event to hybrid ecosystem platform',
          'Scaled event reach from local to continental across 56 countries',
          'Secured $2 million in multi-year sponsorship revenue (2022-2025)',
          'Generated PR value over $500k+ with 100M+ digital impressions',
          'Built multi-stakeholder ecosystem facilitating investment deals'
        ],
        results: [
          '15,000+ attendees across 56 countries annually',
          'Partner NPS increased by 22 points',
          '$22+ million in investment deals facilitated (2022-2024)',
          'Established as Africa\'s premier innovation platform',
          'Created sustainable revenue model with multi-year partnerships'
        ],
        learning: 'Learned that ecosystem building requires balancing stakeholder interests while maintaining authentic value creation. The key insight was shifting from event-centric to relationship-centric approach, which created more sustainable engagement and measurable business outcomes.',
        leverage: 'Partnered with 200+ organizations including corporates, VCs, government agencies, and international development organizations. Built relationships across African innovation hubs and global startup ecosystems.',
        nextSteps: 'Currently expanding into new African markets and developing digital platform capabilities. Open to partnerships with organizations looking to access African innovation ecosystem or scale similar platforms in other regions.'
      }
    },
    {
      id: 7,
      title: 'SA–Switzerland Blockchain & CleanTech Innovation Challenges',
      role: 'Project Director',
      years: '2022 - 2024',
      metaTag: 'Completed / Case Study',
      oneLiner: 'Directed two-year bilateral innovation challenges bridging Swiss and South African ecosystems',
      tags: ['Innovation', 'CleanTech', 'Blockchain', 'International'],
      image: '/src/assets/sa-switzerland-innovation.png',
      details: {
        context: 'Bilateral innovation program designed to strengthen ties between Swiss and South African innovation ecosystems, focusing on blockchain and cleantech solutions with commercial and social impact potential.',
        actions: [
          'Designed and managed two-year bilateral innovation challenge program',
          'Coordinated with Swiss and South African government stakeholders',
          'Curated blockchain and cleantech startup cohorts from both countries',
          'Facilitated cross-border mentorship and investment connections',
          'Organized exchange programs and market entry support'
        ],
        results: [
          'Successfully completed two-year program with measurable outcomes',
          'Facilitated meaningful connections between Swiss and SA ecosystems',
          'Supported startups in blockchain and cleantech market entry',
          'Strengthened bilateral innovation cooperation frameworks',
          'Created replicable model for international innovation partnerships'
        ],
        learning: 'International innovation programs require deep understanding of both ecosystems and patient relationship building. Key insight: successful bilateral programs need champions in both countries and must create mutual value, not one-sided benefits.',
        leverage: 'Worked with Swiss government agencies, South African innovation institutions, and startup ecosystems in both countries. Built relationships with international development organizations and bilateral trade offices.',
        nextSteps: 'Program completed in 2024. Available for consulting on international innovation partnerships, bilateral program design, and Swiss-African business development. Open to similar roles with other international innovation initiatives.'
      }
    },
    {
      id: 8,
      title: 'TechTribe Accelerator — Virtual Program',
      role: 'Co-Founder / Program Director',
      years: '2020 - 2024',
      metaTag: 'Completed / Case Study',
      oneLiner: 'Supported 3,500 startups; $20M+ raised; mentored 200+ founders',
      tags: ['Acceleration', 'Startups', 'Mentorship', 'Virtual'],
      image: '/src/assets/techtribe-accelerator.png',
      details: {
        context: 'Co-created one of Africa\'s first virtual accelerator programs during the pandemic, addressing the critical need for accessible startup support across the continent when physical programs became impossible.',
        actions: [
          'Co-designed comprehensive virtual accelerator curriculum and delivery model',
          'Personally mentored 200+ founders through structured acceleration programs',
          'Built network of 50+ investors and corporate partners for funding pipeline',
          'Created scalable virtual program infrastructure supporting multiple cohorts',
          'Developed founder assessment and selection frameworks'
        ],
        results: [
          'Supported 3,500 startups through various program tracks',
          'Portfolio startups raised $20+ million in total funding',
          '200+ founders directly mentored with measurable business growth',
          'Established replicable virtual acceleration model adopted by other programs',
          'Created sustainable revenue model through corporate partnerships'
        ],
        learning: 'Discovered that virtual acceleration can be more effective than physical programs when designed properly. Key insight: founders need consistent accountability and peer networks more than physical proximity. The challenge was maintaining engagement and building trust remotely, solved through structured check-ins and peer matching.',
        leverage: 'Collaborated with major African VCs, international development organizations, and corporate innovation teams. Built relationships with startup ecosystems across Nigeria, Kenya, South Africa, and Ghana.',
        nextSteps: 'Program successfully concluded in 2024. Available for consulting on virtual program design, startup acceleration methodologies, and ecosystem building. Open to advisory roles with similar initiatives.'
      }
    },
    {
      id: 9,
      title: 'Africa\'s Business Heroes — Southern Africa Anchor Partnership',
      role: 'Project Manager → Project Director',
      years: '2021 - 2023',
      metaTag: 'Completed / Case Study',
      oneLiner: 'Led partnership delivery; supported African founders through ABH platform',
      tags: ['Partnerships', 'Startups', 'Investment', 'Ecosystem'],
      image: '/src/assets/africa-business-heroes.png',
      details: {
        context: 'Strategic partnership with Africa\'s Business Heroes (Jack Ma Foundation initiative) to support and scale African entrepreneurs through mentorship, funding, and ecosystem connections.',
        actions: [
          'Managed Southern Africa regional partnership delivery',
          'Coordinated founder selection and support processes',
          'Facilitated mentorship connections and program delivery',
          'Supported entrepreneurs through ABH platform and resources',
          'Progressed from Project Manager to Project Director role'
        ],
        results: [
          'Successfully delivered regional partnership objectives',
          'Supported multiple African founders through ABH program',
          'Strengthened Southern African startup ecosystem connections',
          'Built relationships with international entrepreneurship platforms',
          'Demonstrated leadership progression within the program'
        ],
        learning: 'Large-scale entrepreneurship programs require balancing individual founder needs with program scalability. Key insight: successful founder support combines access to capital with ecosystem connections and peer learning.',
        leverage: 'Worked with Jack Ma Foundation, African startup ecosystems, and international mentorship networks. Built connections with successful African entrepreneurs and global business leaders.',
        nextSteps: 'Partnership completed in 2023. Available for consulting on entrepreneurship program design, founder support initiatives, and international partnership management. Open to similar roles with global entrepreneurship platforms.'
      }
    },
    {
      id: 10,
      title: 'AndAfrica Investment Platform',
      role: 'Executive / Platform Builder',
      years: '2018 - 2019',
      metaTag: 'Completed / Case Study',
      oneLiner: 'Raised $100K seed funding; built cross-continental SaaS investment bridge',
      tags: ['Investment', 'Platform', 'International', 'SaaS'],
      image: '/src/assets/andafrica-platform.png',
      details: {
        context: 'Cross-continental investment platform designed to bridge the gap between Japanese institutional capital and high-growth African startups, addressing the information asymmetry and cultural barriers in cross-border investment.',
        actions: [
          'Built comprehensive SaaS investment platform with due diligence workflows',
          'Raised USD 100K in seed funding from Japanese and African investors',
          'Established operational presence in both Tokyo and Johannesburg',
          'Created cross-cultural investment frameworks and risk assessment models',
          'Developed startup vetting and investor matching algorithms'
        ],
        results: [
          'Successfully raised USD 100K seed funding within 6 months',
          'Established functional SaaS exchange platform with 50+ registered investors',
          'Created Japan-Africa investment bridge facilitating initial deal flow',
          'Developed replicable cross-border investment model and frameworks',
          'Built network of institutional investors and startup ecosystems in both regions'
        ],
        learning: 'Learned that cross-border investment requires deep cultural understanding beyond just financial metrics. The biggest challenge was building trust between investors and entrepreneurs across different business cultures. Key insight: successful international platforms need local champions and cultural translators, not just technology.',
        leverage: 'Worked with Japanese institutional investors, African development finance institutions, and startup ecosystems in both regions. Built relationships with government trade offices and international business development organizations.',
        nextSteps: 'Platform concluded operations in 2019. Available for consulting on cross-border investment platforms, international business development, and Japan-Africa business relationships. Open to advisory roles with similar cross-continental initiatives.'
      }
    },
    {
      id: 11,
      title: 'Mining Innovation Project',
      role: 'Senior Strategy & Innovation Consultant',
      years: '2017',
      metaTag: 'Completed / Case Study',
      oneLiner: 'Delivered strategic innovation; unlocked 5x forecasted return',
      tags: ['Innovation', 'Strategy', 'Mining', 'Consulting'],
      image: '/src/assets/mining-innovation.png',
      details: {
        context: 'Strategic consulting engagement with major mining company to develop and implement innovation frameworks that would drive operational efficiency and competitive advantage in traditional mining operations.',
        actions: [
          'Conducted comprehensive innovation audit of existing mining operations',
          'Designed strategic innovation framework tailored to mining industry requirements',
          'Led cross-functional teams through innovation implementation process',
          'Developed ROI measurement systems for innovation initiatives',
          'Created change management strategies for traditional industry transformation'
        ],
        results: [
          'Delivered strategic innovation project unlocking 5x forecasted return',
          'Implemented sustainable innovation processes within mining operations',
          'Achieved measurable efficiency gains across core mining processes',
          'Built internal innovation capabilities and change management systems',
          'Created replicable innovation model for traditional industries'
        ],
        learning: 'Learned that innovation in traditional industries requires balancing cutting-edge thinking with operational realities. The key insight was that mining companies need innovation frameworks that respect safety protocols and regulatory requirements while driving efficiency. Success came from combining technical expertise with change management.',
        leverage: 'Worked directly with C-suite executives, engineering teams, and operational managers. Built relationships with mining industry associations and technology vendors. Leveraged chemical engineering background to bridge technical and strategic perspectives.',
        nextSteps: 'Project successfully completed in 2017. Available for consulting on innovation strategy in traditional industries, operational efficiency optimization, and strategic transformation. Open to similar engagements in mining, manufacturing, and industrial sectors.'
      }
    }
  ];

  const allTags = ['All', ...new Set(projects.flatMap(project => project.tags))];
  const allMetaTags = ['All', ...new Set(projects.map(project => project.metaTag))];

  const filteredProjects = projects.filter(project => {
    const matchesMetaFilter = activeMetaFilter === 'All' || project.metaTag === activeMetaFilter;
    const matchesTagFilter = activeFilter === 'All' || project.tags.includes(activeFilter);
    return matchesMetaFilter && matchesTagFilter;
  });

  const [selectedProject, setSelectedProject] = useState(null);

  const getMetaTagColor = (metaTag) => {
    switch (metaTag) {
      case 'Ongoing / Active':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Completed / Case Study':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Advisory / Board':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Coming Soon':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  const getMetaTagFilterColor = (metaTag, isActive) => {
    if (!isActive) return 'bg-gray-800 text-gray-400 hover:bg-gray-700';
    
    switch (metaTag) {
      case 'Ongoing / Active':
        return 'bg-green-500/20 text-green-400 border-green-500/50';
      case 'Completed / Case Study':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/50';
      case 'Advisory / Board':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/50';
      case 'Coming Soon':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/50';
      default:
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50';
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">What I Do</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I advise, consult, and collaborate on innovation, technology, and economic sovereignty projects. 
            Explore my portfolio below and reach out to discuss how I can add value to your initiative.
          </p>
        </div>

        {/* Primary Meta Tag Filter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-white mb-4">Filter by Status</h3>
          <div className="flex flex-wrap gap-3">
            {allMetaTags.map((metaTag) => (
              <button
                key={metaTag}
                onClick={() => setActiveMetaFilter(metaTag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  getMetaTagFilterColor(metaTag, activeMetaFilter === metaTag)
                }`}
              >
                {metaTag}
              </button>
            ))}
          </div>
        </div>

        {/* Secondary Tag Filter */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold text-white mb-4">Filter by Category</h3>
          <div className="flex flex-wrap gap-3">
            {allTags.map((tag, index) => (
              <button
                key={tag}
                onClick={() => setActiveFilter(tag)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === tag
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700 border border-gray-700'
                }`}
              >
                {tag}
                <span className="ml-2 text-xs opacity-70">
                  {index + 1}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-xl overflow-hidden hover:bg-gray-750 transition-all duration-300 group"
            >
              <div className="aspect-video bg-gray-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 border-2 border-cyan-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-cyan-400 rounded-full"></div>
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">Project Visual</p>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-400">{project.years}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getMetaTagColor(project.metaTag)}`}>
                    {project.metaTag}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <div className="flex items-center space-x-2 mb-3">
                  <User className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">{project.role}</span>
                </div>
                
                <p className="text-gray-300 mb-4">{project.oneLiner}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded">
                      +{project.tags.length - 4} more
                    </span>
                  )}
                </div>
                
                <button
                  onClick={() => setSelectedProject(project)}
                  className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">{selectedProject.years}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getMetaTagColor(selectedProject.metaTag)}`}>
                      {selectedProject.metaTag}
                    </span>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="text-gray-400 hover:text-white p-2"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h2>
                <div className="flex items-center space-x-2 mb-4">
                  <User className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-400">{selectedProject.role}</span>
                </div>
                
                <p className="text-xl text-gray-300 mb-6">{selectedProject.oneLiner}</p>
                
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="p-6 space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Context</h3>
                  <p className="text-gray-300">{selectedProject.details.context}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Actions & Involvement</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.actions.map((action, index) => (
                      <li key={index} className="text-gray-300 flex items-start space-x-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Results & Impact</h3>
                  <ul className="space-y-2">
                    {selectedProject.details.results.map((result, index) => (
                      <li key={index} className="text-gray-300 flex items-start space-x-2">
                        <span className="text-green-400 mt-1">✓</span>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Learning & Reflection</h3>
                  <p className="text-gray-300">{selectedProject.details.learning}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Leverage & Networks</h3>
                  <p className="text-gray-300">{selectedProject.details.leverage}</p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">Next Steps / Get Involved</h3>
                  <p className="text-gray-300">{selectedProject.details.nextSteps}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PortfolioSection;
