import { ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FunnelOption({
  label,
  marker,
  isSelected,
  onClick,
  large = false,
}: {
  label: string
  marker?: string
  isSelected: boolean
  onClick: () => void
  large?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'w-full flex items-center gap-4 rounded-lg border transition-all duration-200 text-left group',
        large ? 'p-5' : 'p-4',
        isSelected
          ? 'border-accent bg-accent/10'
          : large
            ? 'border-zinc-300 bg-white hover:border-accent/70 hover:bg-orange-50/40 shadow-sm'
            : 'border-border bg-card hover:border-accent/40 hover:bg-secondary/30',
      )}
    >
      {marker && (
        <span
          className={cn(
            'flex-shrink-0 rounded-full flex items-center justify-center font-semibold transition-colors',
            large ? 'w-9 h-9 text-sm' : 'w-7 h-7 text-xs',
            isSelected
              ? 'bg-accent text-white'
              : large
                ? 'bg-zinc-100 text-zinc-500 border border-zinc-200'
                : 'bg-secondary text-muted-foreground',
          )}
        >
          {marker}
        </span>
      )}
      <span
        className={cn(
          'flex-1 font-semibold leading-snug',
          large ? 'text-base text-zinc-900' : 'text-sm font-medium text-card-foreground',
        )}
      >
        {label}
      </span>
      <ChevronRight
        className={cn(
          'transition-transform flex-shrink-0 group-hover:translate-x-0.5',
          large ? 'w-5 h-5 text-zinc-400' : 'w-4 h-4 text-muted-foreground',
        )}
      />
    </button>
  )
}
