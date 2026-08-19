// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import BrochureCard from "./Brochure-Card";
// import { axiosGet, BASE_URL } from "@/lib/api";

// export default function MediaSection() {
//   const [brochures, setBrochures] = useState([]);
//   const [mediaFiles, setMediaFiles] = useState([]);

//   // const fetchProject = async () => {
//   //   try {
//   //     const res = await axiosGet.get(`/masters/media/content/get/?web_sts=1`);
//   //     const data = res.data.data || [];

//   //     // Extract sections by file type
//   //     const pdfSection = data.find((s) => s.file_type === "pdf");
//   //     const imageSection = data.find((s) => s.file_type === "image");
//   //     const urlSection = data.find((s) => s.file_type === "url");

//   //     // PDFs -> Brochures
//   //     setBrochures(pdfSection?.files || []);

//   //     // Images + YouTube Videos -> Gallery
//   //     const images = imageSection?.files || [];
//   //     const youtube = urlSection?.files || [];

//   //     setMediaFiles([...images, ...youtube]);

//   //   } catch (error) {
//   //     console.error("MEDIA FETCH ERROR:", error);
//   //   }
//   // };

//   const fetchProject = async () => {
//     try {
//       const res = await axiosGet.get(`/masters/media/content/get/?web_sts=1`);
//       const data = res.data.data || [];

//       // Extract sections by file type
//       const pdfSection = data.find((s) => s.file_type === "pdf");
//       const videoSection = data.find((s) => s.file_type === "video");
//       const imageSection = data.find((s) => s.file_type === "image");

//       // PDFs -> Brochures
//       setBrochures(pdfSection?.files || []);

//       // Videos + Images -> Gallery
//       const videos = videoSection?.files || [];
//       const images = imageSection?.files || [];

//       setMediaFiles([...videos, ...images]);

//     } catch (error) {
//       console.error("MEDIA FETCH ERROR:", error);
//     }
//   };

//   useEffect(() => {
//     fetchProject();
//   }, []);

//   return (
//     <div className="space-y-12">
//       {/* ---------------- BROCHURES ---------------- */}
//       <div>
//         <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#293E52] mb-8">
//           Brochures
//         </h2>

//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
//           {brochures.map((b, idx) => {
//             const pdfUrl = `${BASE_URL}${b.file_path?.replace(/^\/+/, "")}`;

//             return (
//               <BrochureCard
//                 key={idx}
//                 id={b.data_uniq_id}
//                 title={b.file_name || `Brochure ${idx + 1}`}
//                 file={pdfUrl}
//               />
//             );
//           })}
//         </div>
//       </div>

//       {/* ---------------- MEDIA GALLERY ---------------- */}
//       <div>
//         <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#293E52] mb-8">
//           Media Gallery
//         </h2>

//         <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-max">
//           {mediaFiles.map((file, idx) => (
//             <SimpleMediaThumbnail key={idx} file={file} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ================================================================
//    SIMPLE IMAGE + YOUTUBE COMPONENT
// ================================================================ */
// function SimpleMediaThumbnail({ file }) {
//   // Build image source
//   const imageSrc = `${BASE_URL}${file.file_path?.replace(/^\/+/, "")}`;

//   // YouTube detection
//   const url = file.url || "";
//   const isYouTube = url.includes("youtu");

//   // Convert YouTube into embed format
//   const getEmbed = (url) => {
//     if (url.includes("youtu.be"))
//       return url.replace("youtu.be/", "www.youtube.com/embed/");
//     if (url.includes("watch?v="))
//       return url.replace("watch?v=", "embed/");
//     return url;
//   };

//   const embedUrl = isYouTube ? getEmbed(url) : null;

//   return (
//     <div className="relative rounded-lg overflow-hidden h-full min-h-64 md:min-h-80 bg-gray-200">
//       {isYouTube ? (
//         <iframe
//           src={embedUrl}
//           className="w-full h-full"
//           allowFullScreen
//           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//         ></iframe>
//       ) : (
//         <Image
//           src={imageSrc}
//           alt={file.title || "Media"}
//           fill
//           className="object-cover"
//         />
//       )}
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import BrochureCard from "./Brochure-Card";
import { axiosGet, BASE_URL } from "@/lib/api";

export default function MediaSection() {
  const [brochures, setBrochures] = useState([]);
  const [mediaFiles, setMediaFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noData, setNoData] = useState(false);
  
  

  const fetchProject = async () => {
    try {
      setLoading(true);

      const res = await axiosGet.get(`/masters/media/content/get/?web_sts=1`);
      const data = res.data?.data || [];

      if (!data.length) {
        setNoData(true);
        setLoading(false);
        return;
      }

      const pdfSection = data.find((s) => s.file_type === "pdf");
      const videoSection = data.find((s) => s.file_type === "video");
      const imageSection = data.find((s) => s.file_type === "image");

      setBrochures(pdfSection?.files || []);

      const videos = videoSection?.files || [];
      const images = imageSection?.files || [];

      setMediaFiles([...videos, ...images]);

      setNoData(pdfSection?.files?.length === 0 && videos.length === 0);
    } catch (error) {
      console.error("MEDIA FETCH ERROR:", error);
      setNoData(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProject();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-[#293E52] text-lg font-semibold">
        Loading...
      </div>
    );
  }

  // --------------------- NO DATA FOUND ---------------------
  if (noData) {
    return (
      <div className="py-20 text-center text-red-600 text-lg font-semibold">
        No Media Found
      </div>
    );
  }


  return (
    <div className="space-y-12">
      {/* ---------------- BROCHURES ---------------- */}
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#293E52] mb-8">
          Brochures
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {brochures.length > 0 ? (
            brochures.map((b, idx) => {
              const pdfUrl = `${BASE_URL}${b.file_path?.replace(/^\/+/, "")}`;

              return (
                <BrochureCard
                  key={idx}
                  id={b.data_uniq_id}
                  title={b.file_name || `Brochure ${idx + 1}`}
                  file={pdfUrl}
                />
              );
            })
          ) : (
            <div className="flex justify-center mt-6 items-center space-x-2">
              <p className="text-gray-700">No Brochures Found</p>
            </div>
          )}
        </div>
      </div>

      {/* ---------------- MEDIA GALLERY ---------------- */}
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#293E52] mb-8">
          Media Gallery
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {mediaFiles.length > 0 ? (
            mediaFiles.map((file, idx) => (
              <SimpleMediaThumbnail
                key={idx}
                file={file}
                className="h-64"
              />
            ))
          ) : (

            <div className="flex justify-center mt-6 items-center space-x-2">
              <p className="text-gray-700">No Media Found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function SimpleMediaThumbnail({ file, className = "" }) {
  // Build image source
  const imageSrc = `${BASE_URL}${file.file_path?.replace(/^\/+/, "")}`;

  // YouTube detection
  const url = file.url || "";
  const isYouTube = url.includes("youtu");

  // Convert YouTube into embed format
  const getEmbed = (url) => {
    if (url.includes("youtu.be"))
      return url.replace("youtu.be/", "www.youtube.com/embed/");
    if (url.includes("watch?v=")) return url.replace("watch?v=", "embed/");
    return url;
  };

  const embedUrl = isYouTube ? getEmbed(url) + "?modestbranding=1&rel=0" : null;

  return (
    <div
      className={`relative rounded-lg overflow-hidden bg-gray-200 group cursor-pointer ${className}`}
    >
      {isYouTube ? (
        <div className="relative w-full h-full">
          <iframe
            src={embedUrl}
            className="w-full h-full"
            allowFullScreen
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
          ></iframe>
          {/* Play button overlay */}
          {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg opacity-90 group-hover:opacity-100 transition-opacity">
              <svg
                className="w-8 h-8 text-gray-800 ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div> */}
        </div>
      ) : (
        <div className="relative w-full h-full">
          <Image
            src={imageSrc}
            alt={file.title || "Media"}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
    </div>
  );
}
