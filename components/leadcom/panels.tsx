import { Lightbulb, CheckCircle2 } from 'lucide-react'

export function InsightPanel({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-4 rounded-lg bg-background border border-border">
      <div className="flex items-start gap-3">
        <Lightbulb className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-[10px] font-semibold tracking-wider text-accent uppercase mb-1">{title}</p>
          <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  )
}

export function GreenPanel({ title, body }: { title: string; body: string }) {
  return (
    <div className="p-4 rounded-lg bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/30">
      <div className="flex items-start gap-3">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-[10px] font-semibold tracking-wider text-emerald-600 dark:text-emerald-400 uppercase mb-1">
            {title}
          </p>
          <p className="text-xs text-emerald-700 dark:text-emerald-100/90 leading-relaxed">{body}</p>
        </div>
      </div>
    </div>
  )
}

export function Testimonial({
  quote,
  initials,
  role,
  highlight,
}: {
  quote: string
  initials: string
  role: string
  highlight: string
}) {
  return (
    <div className="p-4 rounded-lg bg-secondary/40 border border-border/50">
      <p className="text-sm text-card-foreground italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="mt-3 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
          <span className="text-xs font-medium text-muted-foreground">{initials}</span>
        </div>
        <div>
          <p className="text-xs font-medium text-card-foreground">{role}</p>
          <p className="text-[10px] text-accent">{highlight}</p>
        </div>
      </div>
    </div>
  )
}
