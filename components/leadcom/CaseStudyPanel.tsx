import Image from 'next/image'

export function CaseStudyPanel({
  imageSrc,
  imageAlt,
  quote,
  clinic,
}: {
  imageSrc: string
  imageAlt: string
  quote: string
  clinic: string
}) {
  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-50 overflow-hidden">
      <div className="flex gap-0">
        {/* Image — left half */}
        <div className="relative w-28 flex-shrink-0">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes="112px"
            className="object-cover object-center"
          />
        </div>

        {/* Text — right half */}
        <div className="flex-1 p-4">
          <p className="text-[9px] font-semibold tracking-widest text-accent uppercase mb-1.5">
            {clinic}
          </p>
          <p className="text-xs text-zinc-700 leading-relaxed">
            {quote}
          </p>
        </div>
      </div>
    </div>
  )
}
