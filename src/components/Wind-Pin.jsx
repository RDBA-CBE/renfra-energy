"use client"

export default function WindPin({ x, y, number, station }) {
  return (
    <div
      className="absolute group"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {/* PIN */}
      <div className="w-8 h-8 md:w-9 md:h-9 bg-[#329ACD] text-white rounded-full 
                      flex items-center justify-center font-bold cursor-pointer
                      shadow-lg hover:scale-110 transition-transform">
        {number}
      </div>

      {/* TOOLTIP */}
<div
  className="
    absolute left-1/2 bottom-full mb-3 w-max max-w-[240px]
    -translate-x-1/2 bg-white text-[#1A202C]
    px-4 py-3 rounded-lg shadow-xl border
    opacity-0 scale-95 pointer-events-none
    transition-all duration-300
    group-hover:opacity-100 group-hover:scale-100
  "
>
  {/* TYPE BADGE */}
  <div className="mb-1">
    <span className="inline-block text-xs font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
      Wind
    </span>
  </div>

  <p className="font-bold">{station.name}</p>
  <p className="text-sm font-semibold text-[#329ACD]">
    {station.mw}
  </p>
</div>

    </div>
  )
}
