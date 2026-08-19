import Image from "next/image"
import SolarPin from "./Solar-Pin"
import WindPin from "./Wind-Pin"

export default function TamilnaduMap() {
  const solarStations = [
    { name: "Tiruvallur", kv: "33kV", mwp: "32.5 MWp", x: 42, y: 20 },
    { name: "Viluppuram", kv: "33kV", mwp: "9.1 MWp", x: 50, y: 46 },
    { name: "Kallakurichi", kv: "110kV", mwp: "97.5 MWp", x: 55, y: 52 },
    { name: "Tiruvannamalai", kv: "33kV", mwp: "6.5 MWp", x: 48, y: 56 },
    { name: "Trichy", kv: "110kV", mwp: "31.3 MWp", x: 52, y: 63 },
    { name: "Nagapattinam", kv: "33kV", mwp: "19 MWp", x: 64, y: 63 },
    { name: "Ramanathapuram", kv: "110kV", mwp: "65 MWp", x: 50, y: 80 },
    { name: "Tuticorin", kv: "110kV", mwp: "139 MWp", x: 43, y: 82 },
  ]

  const windStations = [
    { name: "Karur", mw: "49.5 MW", x: 38, y: 58 },
    { name: "Trichy", mw: "33 MW", x: 55, y: 63 },
  ]

  return (
    <section className="w-full py-16 px-4 md:px-8">
      <h2 className="text-2xl md:text-4xl font-semibold text-center mb-10">
        Renewable Reach
      </h2>

      {/* MAP */}
<div
  className="
    relative
    w-screen sm:w-full
    -mx-4 sm:mx-auto
    md:max-w-[1200px]
    lg:max-w-[1100px]
    xl:max-w-[1200px]
  "
>
        <Image
          src="/images/main-map.jpg"
          alt="Tamil Nadu Map"
          width={1200}
          height={1200}
          className="w-full h-auto"
        />

        {solarStations.map((s, i) => (
          <SolarPin
            key={i}
            x={s.x}
            y={s.y}
            number={i + 1}
            station={s}
          />
        ))}

        {windStations.map((w, i) => (
          <WindPin
            key={i}
            x={w.x}
            y={w.y}
            number={i + 1}
            station={w}
          />
        ))}
      </div>

      {/* TOTAL CAPACITY */}
      <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
        <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg border">
          <img src="/images/map-wind.svg" className="w-12 h-12" />
          <div>
            <p className="font-bold">Total Wind Capacity</p>
            <p className="text-2xl font-extrabold">82.5 MW</p>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-white shadow-md p-4 rounded-lg border">
          <img src="/images/map-solar.svg" className="w-12 h-12" />
          <div>
            <p className="font-bold">Total Solar Capacity</p>
            <p className="text-2xl font-extrabold">400 MWp</p>
          </div>
        </div>
      </div>
    </section>
  )
}
