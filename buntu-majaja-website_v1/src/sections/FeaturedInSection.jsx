import { useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { media } from '@/content/media'
import { cn } from '@/lib/utils'

const typeColors = {
  Article: 'text-blue-400',
  Video: 'text-red-400',
  Podcast: 'text-purple-400',
  Academic: 'text-orange-400',
}

export default function FeaturedInSection() {
  const [category, setCategory] = useState('All')
  const [showCount, setShowCount] = useState(media.pageSize)

  const filtered = category === 'All' ? media.items : media.items.filter((item) => item.type === category)
  const visible = filtered.slice(0, showCount)
  const remaining = filtered.length - showCount

  return (
    <section id="media" className="py-20 bg-slate-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">{media.heading}</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-2">{media.intro}</p>
          <p className="text-sm text-gray-400">{media.note}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12" role="group" aria-label="Filter media by type">
          {media.categories.map((name) => (
            <button
              type="button"
              key={name}
              aria-pressed={category === name}
              onClick={() => {
                setCategory(name)
                setShowCount(media.pageSize)
              }}
              className={cn(
                'px-4 py-2 rounded-full text-sm font-medium transition-all duration-300',
                category === name ? 'bg-cyan-500 text-white' : 'bg-slate-700 text-gray-300 hover:bg-slate-600',
              )}
            >
              {name}
            </button>
          ))}
        </div>

        <div className="space-y-3">
          {visible.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-4 bg-slate-900/50 hover:bg-slate-900 rounded-lg border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className={cn('text-xs font-medium', typeColors[item.type] ?? 'text-gray-400')}>{item.type}</span>
                  <span className="text-xs text-gray-500">•</span>
                  <span className="text-xs text-gray-400">{item.date}</span>
                </div>
                <h3 className="text-white font-medium group-hover:text-cyan-400 transition-colors mb-1 truncate">{item.title}</h3>
                <p className="text-sm text-gray-400">{item.publication}</p>
              </div>
              <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-cyan-400 transition-colors flex-shrink-0 ml-4" />
            </a>
          ))}
        </div>

        {remaining > 0 && (
          <div className="text-center mt-8">
            <button
              type="button"
              onClick={() => setShowCount((count) => count + media.pageSize)}
              className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors duration-300 font-medium"
            >
              Show More ({remaining} remaining)
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
