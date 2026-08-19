// "use client"

// import { useEffect, useRef, useState } from "react"
// import { ExternalLink } from "lucide-react"

// export function OurProjectsSection() {
//   const [visibleCards, setVisibleCards] = useState(4)
//   const carouselRef = useRef(null)

//   const projects = [
//     {
//       id: 1,
//       title: "50 MW Solar Projects",
//       location: "Tamil Nadu",
//       description:
//         "Successfully completed 50 MW Solar Projects within a record time of 75 days.",
//       image: "/images/about.png",
//     },
//     {
//       id: 2,
//       title: "105 MW Solar Projects",
//       location: "Tamil Nadu",
//       description:
//         "Achieved another milestone by commissioning 105 MW Solar Projects in just 90 days.",
//       image: "/images/about.png",
//     },
//     {
//       id: 3,
//       title: "110 MW (One PSS)",
//       location: "Tamil Nadu",
//       description:
//         "Continuing our growth, we successfully executed 110 MW (One PSS) and 50 MW (One PSS) ",
//       image: "/images/about.png",
//     },
//     {
//       id: 4,
//       title: "50 MW (One PSS) Solar",
//       location: "Tamil Nadu",
//       description:
//         "Solar Projects, along with 50 MW Wind Projects, further strengthening our footprint in the clean energy sector.",
//       image: "/images/about.png",
//     },
//     {
//       id: 5,
//       title: "50 MW Wind Projects",
//       location: "Tamil Nadu",
//       description:
//         "These projects, though complex in scope and coordination.",
//       image: "/images/about.png",
//     },
//   ]

  

//   // Adjust visible cards based on screen width
//   useEffect(() => {
//     const handleResize = () => {
//       const width = window.innerWidth
//       if (width < 768) setVisibleCards(1)
//       else if (width < 1024) setVisibleCards(2)
//       else setVisibleCards(4)
//     }
//     handleResize()
//     window.addEventListener("resize", handleResize)
//     return () => window.removeEventListener("resize", handleResize)
//   }, [])

//   // Continuous right-to-left scroll
//   useEffect(() => {
//     const container = carouselRef.current
//     let position = 0
//     let animationFrame

//     const move = () => {
//       if (container) {
//         position -= 0.5 // speed of movement
//         container.style.transform = `translateX(${position}px)`
//         const first = container.children[0]
//         if (first) {
//           const cardWidth = first.offsetWidth + 24 // include gap
//           if (Math.abs(position) >= cardWidth) {
//             container.appendChild(first)
//             position += cardWidth
//           }
//         }
//       }
//       animationFrame = requestAnimationFrame(move)
//     }

//     animationFrame = requestAnimationFrame(move)
//     return () => cancelAnimationFrame(animationFrame)
//   }, [])

//   return (
//     <section className="w-full bg-background py-12 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Header Section */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
//           <div>
//             <div className="flex items-center gap-2 mb-4">
//               <svg width="0" height="0">
//                 <defs>
//                   <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
//                     <stop offset="0%" stopColor="#3AB257" />
//                     <stop offset="100%" stopColor="#329ACD" />
//                   </linearGradient>
//                 </defs>
//               </svg>
//               <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#293E52]">
//                 Signature Projects
//               </h1>
//               <a href="/projects">
//                 <ExternalLink
//                   className="w-7 h-7"
//                   style={{ stroke: "url(#icon-gradient)" }}
//                 />
//               </a>
//             </div>
//             <p className="text-[#293E52] text-sm md:text-base leading-relaxed max-w-md">
//               Delivering exceptional projects in India and Overseas to clients looking for long time value. 
//             </p>
//           </div>

//           {/* Right Side - Stats */}
          
        // </div>

//         {/* Carousel */}
//         <div className="relative overflow-hidden">
//           <div
//             ref={carouselRef}
//             className="flex gap-6 transition-transform ease-linear will-change-transform"
//           >
//             {[...projects, ...projects].map((project, index) => (
//               <div
//                 key={index}
//                 className={`min-w-[calc(100%/${visibleCards})] flex-shrink-0`}
//               >
//                 <div className="flex flex-col group cursor-pointer">
//                   <div className="relative mb-8 h-[300px] overflow-visible rounded-lg">
//                     <img
//                       src={project.image}
//                       alt={project.title}
//                       className="w-full h-64 object-cover rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-500"
//                     />

//                     {/* Overlay Card */}
//                     <div
//                       className="
//                         absolute left-4 right-4 bg-white rounded-lg p-4 shadow-lg z-10
//                         transition-all duration-500 ease-out
//                         -bottom-8 group-hover:bottom-1/2 group-hover:translate-y-1/2
//                       "
//                     >
//                       <h3 className="font-bold text-foreground text-lg mb-1">
//                         {project.title}
//                       </h3>
//                       <div className="flex items-center gap-1 mb-3">
//                         <img
//                           src="/images/con-loc.png"
//                           alt="Location"
//                           className="w-4 h-4 object-contain"
//                         />
//                         <span className="text-sm text-muted-foreground">
//                           {project.location}
//                         </span>
//                       </div>
//                       <p className="text-sm text-muted-foreground leading-relaxed h-auto">
//                         {project.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }


"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink } from "lucide-react"
import { axiosGet, BASE_URL } from "@/lib/api";

export function OurProjectsSection() {
  const [visibleCards, setVisibleCards] = useState(4)
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [noData, setNoData] = useState(false)

  const carouselRef = useRef(null)

  /* ================= FETCH PROJECTS ================= */
  const fetchMaster = async () => {
    try {
      setLoading(true)

      const res = await axiosGet.get(
        `masters/projects/get/?web_sts=1&order_type=asc&order_field=created_date&get_sts=1`
      )

      const data = res.data?.data || []

      if (data.length === 0) {
        setNoData(true)
      } else {
        // 🔥 Map API → UI format
        const formatted = data.map((item) => ({
          id: item.data_uniq_id,
          title: item.title || item.name,
          location: item.location || "India",
          description: item.description || "",
          image: item.image_path || "/images/about.png",
        }))

        setProjects(formatted)
      }
    } catch (e) {
      console.error("Project Fetch Error:", e)
      setNoData(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchMaster()
  }, [])

  /* ================= RESPONSIVE CARD COUNT ================= */
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      if (width < 768) setVisibleCards(1)
      else if (width < 1024) setVisibleCards(2)
      else setVisibleCards(4)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  /* ================= AUTO SCROLL ================= */
  useEffect(() => {
    if (!projects.length) return

    const container = carouselRef.current
    let position = 0
    let animationFrame

    const move = () => {
      if (container) {
        position -= 0.5
        container.style.transform = `translateX(${position}px)`

        const first = container.children[0]
        if (first) {
          const cardWidth = first.offsetWidth + 24
          if (Math.abs(position) >= cardWidth) {
            container.appendChild(first)
            position += cardWidth
          }
        }
      }
      animationFrame = requestAnimationFrame(move)
    }

    animationFrame = requestAnimationFrame(move)
    return () => cancelAnimationFrame(animationFrame)
  }, [projects])

  /* ================= UI ================= */

  if (loading) {
    return (
      <section className="py-20 text-center text-muted-foreground">
        Loading projects...
      </section>
    )
  }

  if (noData) {
    return (
      <section className="py-20 text-center text-muted-foreground">
        No projects available.
      </section>
    )
  }

  return (
    <section className="w-full bg-background py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#293E52]">
                Signature Projects
              </h1>
              <a href="/projects">
                <ExternalLink className="w-7 h-7 text-green-600" />
              </a>
            </div>

            <p className="text-[#293E52] text-sm md:text-base leading-relaxed max-w-md">
              Delivering exceptional projects in India and Overseas to clients
              looking for long time value.
            </p>

            {/* Know More Button */}
            <div className="mt-4">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-5 py-2 text-sm font-semibold text-white rounded-full
               bg-gradient-to-r from-[#3AB257] to-[#329ACD]
               hover:opacity-90 transition-all duration-300"
              >
                Know More
              </a>
            </div>
          </div>
          {/* <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:justify-end lg:mt-10">
            <div className="flex flex-col">
              <span className="text-4xl md:text-3xl font-bold text-green-600">
                125
              </span>
              <span className="text-[#293E52] text-sm md:text-base mt-2">
                Ongoing Projects
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl md:text-3xl font-bold text-green-600">
                1560
              </span>
              <span className="text-[#293E52] text-sm md:text-base mt-2">
                Completed Projects
              </span>
            </div>
          </div> */}
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-6 transition-transform ease-linear will-change-transform"
          >
            {[...projects, ...projects].map((project, index) => (
              <div
                key={`${project.id}-${index}`}
                className="
    flex-shrink-0
    w-[420px]
    md:w-[460px]  
    lg:w-[440px]
  "
              >
                <div className="flex flex-col group cursor-pointer">
                  <div className="relative mb-8 h-[300px] overflow-visible rounded-lg">

                    <img
                      src={BASE_URL + project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-lg filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute left-4 right-4 bg-white rounded-lg p-4 shadow-lg z-10 transition-all duration-500 ease-out -bottom-8 group-hover:bottom-1/2 group-hover:translate-y-1/2">
                      <h3 className="font-bold text-lg mb-1">{project.title}</h3>

                      <div className="flex items-center gap-1 mb-3">
                        <img
                          src="/images/con-loc.png"
                          alt="Location"
                          className="w-4 h-4 object-contain"
                        />
                        <span className="text-sm text-muted-foreground">
                          {project.location}
                        </span>
                      </div>

                      <p
                        className="text-sm text-muted-foreground leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html:
                            (project?.description?.length > 100
                              ? project.description.slice(0, 100) + "..."
                              : project?.description) || "",
                        }}
                      />

                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
