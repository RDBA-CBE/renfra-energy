// import Link from "next/link"
// import Image from "next/image"

// function NewsCard({ id, image, title, date, description }) {
//   return (
//     <Link href={`/news-details?${id}`}>
//       <div className="cursor-pointer group">
//         <div className="relative overflow-hidden rounded-lg mb-4 h-48">
//           <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
//         </div>
//         <h3 className="font-semibold text-lg mb-2  transition-colors line-clamp-2 text-[#293E52]">{title}</h3>
//         <p className="text-sm text-[#293E52] mb-3">{date}</p>
//         <p className="text-sm text-[#293E52] ">{description}</p>
//       </div>
//     </Link>
//   )
// }

// export default NewsCard



// import Link from "next/link"
// import Image from "next/image"

// function NewsCard({ data_uniq_id, image, title, date, description }) {
//   return (
//     <Link href={`/news-details?data_uniq_id=${data_uniq_id}`}>
//       <div className="cursor-pointer group">
        
//         {/* Image */}
//         <div className="relative overflow-hidden rounded-lg mb-4 h-48">
//           <Image
//             src={image || "/placeholder.svg"}
//             alt={title}
//             fill
//             className="object-cover"
//           />
//         </div>

//         {/* Title */}
//         <h3 className="font-semibold text-lg mb-2 transition-colors line-clamp-2 text-[#293E52]">
//           {title}
//         </h3>

//         {/* Date */}
//         <p className="text-sm text-[#293E52] mb-3">{date}</p>

//         {/* Description (trimmed) */}
//         <p className="text-[#293E52]">
//           {description
//             ?.replace(/<[^>]+>/g, "")      // remove HTML tags
//             .slice(0, 120)                 // limit characters
//             + "..."}
//         </p>


//         {/* Read More link */}
//         <p className="text-sm text-[#3CA948] font-medium mt-2">
//           Read More →
//         </p>

//       </div>
//     </Link>
//   );
// }

// export default NewsCard;


import Link from "next/link"
import Image from "next/image"

function NewsCard({ data_uniq_id, image, title, date, description }) {
  return (
    <Link href={`/news-details?data_uniq_id=${data_uniq_id}`}>
      <div className="cursor-pointer group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg rounded-lg">
        
        {/* Image */}
        <div className="relative overflow-hidden rounded-lg mb-4 h-48">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Title */}
        <h3 className="font-semibold text-lg mb-2 line-clamp-2 text-[#293E52] transition-colors duration-300 group-hover:text-[#3CA948]">
          {title}
        </h3>

        {/* Date */}
        <p className="text-sm text-[#293E52] mb-3">{date}</p>

        {/* Description */}
        <p className="text-[#293E52] line-clamp-3">
          {description
            ?.replace(/<[^>]+>/g, "")
            .slice(0, 120) + "..."}
        </p>

        {/* Read More */}
        <p className="text-sm text-[#3CA948] font-medium mt-2 transition-all duration-300 group-hover:translate-x-1">
          Read More →
        </p>

      </div>
    </Link>
  )
}

export default NewsCard
