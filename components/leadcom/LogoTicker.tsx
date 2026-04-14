import Image from 'next/image'
import { clinicLogos } from '@/data/leadcom-funnel-data'

const repeated = [...clinicLogos, ...clinicLogos, ...clinicLogos]

export function LogoTicker() {
  return (
    <div className="w-full border-t border-b border-border/50 bg-background/50 py-4 overflow-hidden">
      <div className="flex items-center animate-marquee">
        {repeated.map((logo, i) => (
          <div
            key={`${logo.alt}-${i}`}
            className="flex-shrink-0 mx-4 h-10 flex items-center px-3 rounded-md bg-slate-100 dark:bg-transparent"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120}
              height={32}
              className="h-7 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
