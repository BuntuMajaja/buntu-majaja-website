import React from 'react';
import { ExternalLink } from 'lucide-react';

const AsFeaturedInSection = () => {
  const mediaFeatures = [
    {
      id: 1,
      title: "Africa's start-up paradox — playing small in a trillion-dollar game",
      publication: "Business Day",
      type: "Opinion Article",
      date: "March 2025",
      url: "https://www.businesslive.co.za/bd/opinion/2025-03-20-buntu-majaja-africas-start-up-paradox--playing-small-in-a-trillion-dollar-game/",
      description: "Op-ed on Africa's startup ecosystem challenges and trillion-dollar opportunities"
    },
    {
      id: 2,
      title: "Unlocking Africa's trillion-dollar potential: why startups need more than just SME policies",
      publication: "IOL Business Report",
      type: "Feature Article",
      date: "March 2025",
      url: "https://iol.co.za/business-report/entrepreneurs/2025-03-27-unlocking-africas-trillion-dollar-potential-why-startups-need-more-than-just-sme-policies/",
      description: "Analysis of startup policy frameworks and economic development strategies"
    },
    {
      id: 3,
      title: "How To Master Yourself Before Managing Your Business",
      publication: "The African CEO Podcast",
      type: "Podcast Interview",
      date: "October 2024",
      url: "https://theafricanceo.podbean.com/e/how-to-manage-yourself-before-managing-your-business-buntu-majaja-sa-innovation-ceo/",
      description: "In-depth interview on leadership, self-management, and entrepreneurial journey"
    },
    {
      id: 4,
      title: "SA Innovation Summit to 'unlock Africa's tech power'",
      publication: "Ventureburn",
      type: "Feature Coverage",
      date: "July 2023",
      url: "https://ventureburn.com/2023/07/sa-innovation-summit-to-unlock-africas-tech-power/",
      description: "Coverage of SA Innovation Summit's mission and impact on African tech ecosystem"
    },
    {
      id: 5,
      title: "Buntu Majaja is making all the right moves",
      publication: "TFG Media",
      type: "Profile Feature",
      date: "2024",
      url: "https://tfgmedia.co.za/life-style/real-life-stories/buntu-majaja-is-making-all-the-right-moves/",
      description: "Personal profile exploring entrepreneurial journey and career pivots"
    },
    {
      id: 6,
      title: "Building Platform Businesses: Opportunities for African Entrepreneurs",
      publication: "C.Cast YouTube",
      type: "Video Interview",
      date: "2023",
      url: "https://www.youtube.com/watch?v=arQ7kwp6wKM",
      description: "Discussion on platform business models and African entrepreneurship opportunities"
    },
    {
      id: 7,
      title: "Uncovering the Stories of Africa's Rising Business Stars",
      publication: "Entrepreneurs Talk Africa",
      type: "Podcast Feature",
      date: "2024",
      url: "https://www.listennotes.com/podcasts/entrepreneurs-talk-africa-uncovering-the-w84b2WhUiZg/",
      description: "Interview discussing SA Innovation Summit and African startup ecosystem development"
    },
    {
      id: 8,
      title: "Mapping the needs and challenges of SMEs: Johannesburg entrepreneurship ecosystem",
      publication: "Taylor & Francis Journal",
      type: "Academic Publication",
      date: "2022",
      url: "https://www.tandfonline.com/doi/abs/10.1080/23311975.2022.2094589",
      description: "Co-authored research paper on SME challenges in Johannesburg's entrepreneurship ecosystem"
    },
    {
      id: 9,
      title: "SA Innovation Summit 2023: Igniting Africa's Innovation Frontier",
      publication: "Tech in Africa",
      type: "Event Coverage",
      date: "August 2023",
      url: "https://www.techinafrica.com/sa-innovation-summit-2023-igniting-africas-innovation-frontier/",
      description: "Coverage of Africa's largest startup event and innovation ecosystem initiatives"
    },
    {
      id: 10,
      title: "Ubuntu Dreams Podcast - Africa Rising",
      publication: "Apple Podcasts",
      type: "Podcast Host",
      date: "2020-2021",
      url: "https://podcasts.apple.com/us/podcast/ubuntu-dreams-podcast-africa-rising/id1529498071",
      description: "Host of podcast exploring African identity, creativity, and purpose through global perspectives"
    }
  ];

  const getTypeColor = (type) => {
    switch (type) {
      case 'Opinion Article':
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'Feature Article':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Podcast Interview':
      case 'Podcast Feature':
      case 'Podcast Host':
        return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'Video Interview':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      case 'Academic Publication':
        return 'bg-orange-500/20 text-orange-400 border-orange-500/30';
      case 'Event Coverage':
      case 'Feature Coverage':
      case 'Profile Feature':
        return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <section id="media" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">As Featured In</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Media coverage, interviews, and publications showcasing insights on African innovation, 
            entrepreneurship, and economic development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mediaFeatures.map((feature) => (
            <a
              key={feature.id}
              href={feature.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-slate-900 rounded-xl p-6 hover:bg-slate-850 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-slate-700 hover:border-cyan-500/50"
            >
              {/* Publication Logo Placeholder */}
              <div className="w-full h-16 bg-slate-700 rounded-lg mb-4 flex items-center justify-center">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-6 h-6 text-cyan-400" />
                </div>
              </div>

              {/* Type Badge */}
              <div className="mb-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(feature.type)}`}>
                  {feature.type}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                {feature.title}
              </h3>

              {/* Publication & Date */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-cyan-400 font-medium">{feature.publication}</span>
                <span className="text-gray-400 text-sm">{feature.date}</span>
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm line-clamp-2 mb-4">
                {feature.description}
              </p>

              {/* External Link Indicator */}
              <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                <span>Read More</span>
                <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm">
            Selected media coverage and publications • Links open in new tab
          </p>
        </div>
      </div>
    </section>
  );
};

export default AsFeaturedInSection;
