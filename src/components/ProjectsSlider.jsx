"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"


export default function ProjectsSlider({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 3
  const totalPages = Math.ceil(projects.length / itemsPerPage)

  

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages)
  }

  // Create chunks of 3 items per slide
  const slides = Array.from({ length: totalPages }, (_, i) =>
    projects.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage)
  )

  return (
    <div className="relative overflow-hidden">
      {/* Slider Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className="min-w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {slide.map((project, i) => (
            <div
  key={i}
  className="group bg-white rounded-lg overflow-hidden shadow-md 
             transition-all duration-500 ease-out
             hover:-translate-y-2 hover:shadow-xl"
>

                <div className="relative h-48 w-full">
                  <Image
  src={project.image}
  alt={project.title}
  fill
  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
/>

                </div>
                <a href="/projects">
<div className="p-5 transition-transform duration-500 ease-out group-hover:-translate-y-1">
                  <h3 className="text-lg font-semibold text-[#293E52] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-1">
                    <span className="font-medium">Location:</span>{" "}
                    {project.location}
                  </p>
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">Capacity:</span>{" "}
                    {project.capacity}
                  </p>
                </div>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Previous projects"
          >
            <ChevronLeft className="w-6 h-6 text-[#293E52]" />
          </button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "bg-[#3CA948] w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-white shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Next projects"
          >
            <ChevronRight className="w-6 h-6 text-[#293E52]" />
          </button>
        </div>
      )}
    </div>
  )
}
