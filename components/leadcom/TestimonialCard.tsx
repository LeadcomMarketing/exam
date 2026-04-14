import Image from 'next/image'

interface TestimonialCardProps {
  logoSrc: string
  logoAlt: string
  photoSrc: string
  photoAlt: string
  logoInvertInLight?: boolean
  photoPosition?: 'object-top' | 'object-center' | 'object-bottom'
  children: React.ReactNode
}

export function TestimonialCard({
  logoSrc,
  logoAlt,
  photoSrc,
  photoAlt,
  logoInvertInLight = false,
  photoPosition = 'object-top',
  children,
}: TestimonialCardProps) {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      {/* Team photo */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={photoSrc}
          alt={photoAlt}
          fill
          className={`object-cover ${photoPosition}`}
        />
      </div>

      {/* Logo + Quote */}
      <div className="px-5 py-4 space-y-3">
        <Image
          src={logoSrc}
          alt={logoAlt}
          width={160}
          height={44}
          className={`h-8 w-auto object-contain ${logoInvertInLight ? 'invert dark:invert-0' : 'dark:invert'}`}
        />
        <p className="text-sm leading-relaxed text-card-foreground">{children}</p>
      </div>
    </div>
  )
}
