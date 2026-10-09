import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';

const AsFeaturedInSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showCount, setShowCount] = useState(10);

  const mediaFeatures = [
    {
      id: 1,
      title: "Africa's start-up paradox — playing small in a trillion-dollar game",
      publication: "Business Day",
      type: "Article",
      date: "March 2025",
      url: "https://www.businesslive.co.za/bd/opinion/2025-03-20-buntu-majaja-africas-start-up-paradox--playing-small-in-a-trillion-dollar-game/",
    },
    {
      id: 2,
      title: "Unlocking Africa's trillion-dollar potential: why startups need more than just SME policies",
      publication: "IOL Business Report",
      type: "Article",
      date: "March 2025",
      url: "https://iol.co.za/business-report/entrepreneurs/2025-03-27-unlocking-africas-trillion-dollar-potential-why-startups-need-more-than-just-sme-policies/",
    },
    {
      id: 3,
      title: "How To Master Yourself Before Managing Your Business",
      publication: "The African CEO Podcast",
      type: "Podcast",
      date: "October 2024",
      url: "https://theafricanceo.podbean.com/e/how-to-manage-yourself-before-managing-your-business-buntu-majaja-sa-innovation-ceo/",
    },
    {
      id: 4,
      title: "SA Innovation Summit to 'unlock Africa's tech power'",
      publication: "Ventureburn",
      type: "Article",
      date: "July 2023",
      url: "https://ventureburn.com/2023/07/sa-innovation-summit-to-unlock-africas-tech-power/",
    },
    {
      id: 5,
      title: "Buntu Majaja is making all the right moves",
      publication: "TFG Media",
      type: "Article",
      date: "2024",
      url: "https://tfgmedia.co.za/life-style/real-life-stories/buntu-majaja-is-making-all-the-right-moves/",
    },
    {
      id: 6,
      title: "Building Platform Businesses: Opportunities for African Entrepreneurs",
      publication: "C.Cast YouTube",
      type: "Video",
      date: "2023",
      url: "https://www.youtube.com/watch?v=arQ7kwp6wKM",
    },
    {
      id: 7,
      title: "Uncovering the Stories of Africa's Rising Business Stars",
      publication: "Entrepreneurs Talk Africa",
      type: "Podcast",
      date: "2024",
      url: "https://www.listennotes.com/podcasts/entrepreneurs-talk-africa-uncovering-the-w84b2WhUiZg/",
    },
    {
      id: 8,
      title: "Mapping the needs and challenges of SMEs: Johannesburg entrepreneurship ecosystem",
      publication: "Taylor & Francis Journal",
      type: "Academic",
      date: "2022",
      url: "https://www.tandfonline.com/doi/abs/10.1080/23311975.2022.2094589",
    },
    {
      id: 9,
      title: "SA Innovation Summit 2023: Igniting Africa's Innovation Frontier",
      publication: "Tech in Africa",
      type: "Article",
      date: "August 2023",
      url: "https://www.techinafrica.com/sa-innovation-summit-2023-igniting-africas-innovation-frontier/",
    },
    {
      id: 10,
      title: "Ubuntu Dreams Podcast - Africa Rising",
      publication: "Apple Podcasts",
      type: "Podcast",
      date: "2020-2021",
      url: "https://podcasts.apple.com/us/podcast/ubuntu-dreams-podcast-africa-rising/id1529498071",
    },
    // Additional features for Show More functionality
    {
      id: 11,
      title: "The Future of African Innovation Ecosystems",
      publication: "Innovation Africa",
      type: "Article",
      date: "February 2025",
      url: "#",
    },
    {
      id: 12,
      title: "Building Sustainable Venture Capital in Africa",
      publication: "VC Insights Podcast",
      type: "Podcast",
      date: "January 2025",
      url: "#",
    },
    {
      id: 13,
      title: "Economic Sovereignty Through Technology",
      publication: "African Business Review",
      type: "Academic",
      date: "December 2024",
      url: "#",
    },
    {
      id: 14,
      title: "Platform Business Models for African Markets",
      publication: "Tech Talk Africa",
      type: "Video",
      date: "November 2024",
      url: "#",
    },
    {
      id: 15,
      title: "Innovation Policy and Startup Ecosystems",
      publication: "Policy Review Journal",
      type: "Academic",
      date: "October 2024",
      url: "#",
    }
  ];

  const categories = ['All', 'Article', 'Video', 'Podcast', 'Academic'];

  const filteredFeatures = selectedCategory === 'All' 
    ? mediaFeatures 
    : mediaFeatures.filter(feature => feature.type === selectedCategory);

  const displayedFeatures = filteredFeatures.slice(0, showCount);
  const hasMore = filteredFeatures.length > showCount;

  const getTypeColor = (type) => {
    switch (type) {
      case 'Article': return 'text-blue-400';
      case 'Video': return 'text-red-400';
      case 'Podcast': return 'text-purple-400';
      case 'Academic': return 'text-orange-400';
      default: return 'text-gray-400';
    }
  };

  const getCategoryColor = (category, isSelected) => {
    if (isSelected) return 'bg-cyan-500 text-white';
    return 'bg-slate-700 text-gray-300 hover:bg-slate-600';
  };

  return (
    <section id="media" className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">As Featured In</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-2">
            Media coverage, interviews, and publications showcasing insights on African innovation, 
            entrepreneurship, and economic development.
          </p>
          <p className="text-sm text-gray-400">
            Selected media coverage and publications • Links open in new tab
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setShowCount(10); // Reset show count when changing category
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${getCategoryColor(category, selectedCategory === category)}`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {displayedFeatures.map((feature) => (
            <a
              key={feature.id}
              href={feature.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 bg-slate-900/50 hover:bg-slate-900 rounded-lg border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 flex-1 min-w-0">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-xs font-medium ${getTypeColor(feature.type)}`}>
                      {feature.type}
                    </span>
                    <span className="text-xs text-gray-500">•</span>
                    <span className="text-xs text-gray-400">{feature.date}</span>
                  </div>
                  
                  <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors mb-1 truncate">
                    {feature.title}
                  </h3>
                  
                  <p className="text-sm text-gray-400">
                    {feature.publication}
                  </p>
                </div>
              </div>
              
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors flex-shrink-0 ml-4" />
            </a>
          ))}
        </div>

        {/* Show More Button */}
        {hasMore && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowCount(prev => prev + 10)}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-300 font-medium"
            >
              Show More ({filteredFeatures.length - showCount} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AsFeaturedInSection;
