import {Camera} from "lucide-react";

export default function Hero() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-100 bg-[url(/hero-bg.png)] bg-no-repeat bg-cover bg-bottom rounded-2xl border border-white/20">
      <h1 className="text-6xl font-bold text-shadow-md">
        Clickism
      </h1>
      <p className="mt-4 max-w-lg text-lg text-white/90 text-shadow-md text-center">
        Software engineer and Minecraft mod developer creating open-source
        tools, mods, and libraries.
      </p>

      <div className="absolute bottom-4 left-5 flex items-center gap-2 text-xs text-white/80 text-shadow-md">
        <Camera size="16"/>
        <span>
          Me, 2026
        </span>
      </div>
    </div>
  )
}
