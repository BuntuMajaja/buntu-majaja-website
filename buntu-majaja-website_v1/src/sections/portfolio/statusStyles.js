/** Colours for each portfolio status (`metaTag`). Unknown statuses fall back to grey / cyan. */

export const statusBadge = {
  'Ongoing / Active': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Completed / Case Study': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Advisory / Board': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'Coming Soon': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
}
export const statusBadgeFallback = 'bg-gray-500/20 text-gray-400 border-gray-500/30'

export const statusFilterActive = {
  'Ongoing / Active': 'bg-green-500/20 text-green-400 border-green-500/50',
  'Completed / Case Study': 'bg-blue-500/20 text-blue-400 border-blue-500/50',
  'Advisory / Board': 'bg-purple-500/20 text-purple-400 border-purple-500/50',
  'Coming Soon': 'bg-orange-500/20 text-orange-400 border-orange-500/50',
}
export const statusFilterActiveFallback = 'bg-cyan-500/20 text-cyan-400 border-cyan-500/50'
export const statusFilterInactive = 'bg-gray-800 text-gray-400 hover:bg-gray-700'
