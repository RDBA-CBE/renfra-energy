
"use client";

import Image from "next/image";

export default function BrochureCard({ id,title,label, file }) {
  return (
    
    <a
      href={file}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      <div className="flex flex-col items-center justify-center p-4 rounded-lg border-2 border-[#D3D3D3] border-dotted w-full h-48 hover:bg-gray-100 transition-colors">
        <div className="rounded-lg overflow-hidden w-20 h-20 flex items-center justify-center">
        
        <Image
          src={"/images/pdf.png"}
          alt={title}
          width={80}
          height={80}
          className="mx-auto"
        />

        
      </div>
      
        </div>
        <p className="text-center mt-2 text-sm font-medium text-[#293E52]">
          {title}
        </p>
    </a>
    
  );
}
