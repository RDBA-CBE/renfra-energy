import { ExternalLink } from "lucide-react"

const MediaItem = ({ item }) => {
  return (
    <div className="flex gap-4 pb-6 border-b border-slate-200 last:border-b-0">
      <div className="w-20 h-20 rounded overflow-hidden shadow-sm">
        <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs text-slate-500 mb-1">{item.date}</p>
        <p className="text-sm text-slate-700 line-clamp-2">{item.title}</p>
      </div>
      <div className="flex items-start pt-1">
        <ExternalLink className="w-5 h-5 text-teal-500" />
      </div>
    </div>
  )
}

export default MediaItem