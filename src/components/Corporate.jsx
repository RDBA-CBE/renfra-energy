"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export function TeamCard({ title, description, image, logo, website }) {
  const [showMore, setShowMore] = useState(false)

  return (
    <div className="relative">
      {/* Image Container */}
      <div className="relative h-64 md:h-72 rounded-lg overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover w-full h-full"
        />

        {/* Logo - Top Left */}
        <div className="absolute top-0 left-0 z-10">
          <div
            className="relative bg-white/95 p-4 shadow-md"
            style={{
              width: "200px",
              clipPath: "polygon(0 0, 100% 0, 85% 100%, 0% 100%)",
              borderBottomRightRadius: "60px",
            }}
          >
            <img
              src={logo || "/placeholder.svg"}
              alt={`${title} logo`}
              className="w-30 h-24 object-contain"
            />
          </div>
        </div>

        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>

      {/* Content Card - Overlay at Bottom */}
      <div className="relative -mt-18 mx-4 md:mx-6 bg-gradient-to-r from-[#329ACD] to-[#3AB257] rounded-lg p-5 md:p-6 shadow-lg h-auto">
        {/* External Link Icon - Top Right */}
        <div className="absolute top-4 right-4">
          <button className="p-2 rounded transition-colors">
            <ExternalLink className="w-7 h-7 text-white" />
          </button>
        </div>

        {/* Title */}
        <h3 className="text-xl md:text-2xl lg:text-2xl font-bold text-white mb-2 pr-10">
          {title}
        </h3>

        {/* Website Name (with Link) */}
        {website && (
          <Link
            href={website.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/90 underline text-sm md:text-base mb-3 inline-block"
          >
            {website.name}
          </Link>
        )}

        {/* Description */}
        <p
          className={`text-white leading-relaxed text-sm sm:text-sm md:text-base lg:text-base transition-all duration-300 ${
            showMore ? "line-clamp-none" : "line-clamp-4 md:line-clamp-none"
          }`}
        >
          {description}
        </p>

        {/* Show More / Show Less (Mobile Only) */}
        <button
          className="text-white text-sm font-semibold mt-2 underline md:hidden"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  )
}
