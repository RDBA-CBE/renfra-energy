// import Image from "next/image";

// export default function CompletedProjects() {
//   return (
//     <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-10">
//       <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 lg:gap-8">

//         {/* Left Image */}
//         <div className="relative w-full h-[350px]">
//           <Image
//             src="/images/completed-map.png"
//             alt="Completed Projects Left"
//             fill
//             priority
//             className="object-cover"
//           />
//         </div>

//         {/* Right Image */}
//         <div className="relative w-full h-[350px]">
//           <Image
//             src="/images/ongoing-map.png"
//             alt="Completed Projects Right"
//             fill
//             priority
//             className="object-cover"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }


import Image from "next/image";

export default function CompletedProjects() {
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pb-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* Left Image */}
   <div className="w-full">
  <Image
    src="/images/completed-map.png"
    alt="Completed Projects Left"
    width={1200}
    height={800}
    priority
    className="w-full h-auto"
  />
</div>

        {/* Right Image */}
<div className="w-full">
  <Image
    src="/images/ongoing-map.png"
    alt="Completed Projects Right"
    width={1200}
    height={800}
    priority
    className="w-full h-auto"
  />
</div>

      </div>
    </section>
  );
}