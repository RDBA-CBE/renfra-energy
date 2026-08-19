import { ExternalLink } from "lucide-react"

export default function NewsItem({ item }) {
  return (
    <div className="flex gap-4 pb-6 border-b border-slate-200 last:border-b-0">
      {/* Image */}
      <div className="w-20 h-20 rounded overflow-hidden shadow-sm">
        <img
          src={item.image || "/placeholder.svg"}
          alt={item.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <p className="text-xs text-[#293E52] mb-1">{item.date}</p>

        {/* Title + icon tightly together */}
        <p className="text-sm text-[#293E52] line-clamp-2 flex items-center">
          {item.title}
          <ExternalLink className="w-8 h-8 sm:w-8 sm:h-8 lg:w-8 lg:h-8 text-teal-500 lg:mr-8" />
        </p>
      </div>
    </div>
  ) 
}


