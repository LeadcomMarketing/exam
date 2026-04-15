import { Lightbulb, CheckCircle2 } from 'lucide-react'

export function InsightPanel({ title, body, light = false }: { title: string; body: string; light?: boolean }) {
  return (
    <div className={`p-4 rounded-lg border ${light ? 'bg-zinc-100 border-zinc-200' : 'bg-background border-border'}`}>
      <div className="flex items-start gap-3">
        <Lightbulb className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-[10px] font-semibold tracking-wider text-accent uppercase mb-1">{title}</p>
          <p className={`text-xs leading-relaxed ${light ? 'text-zinc-600' : 'text-muted-foreground'}`}>{body}</p>
        </div>
      </div>
    </div>
  )
}

export function GreenPanel({ title, body, light = false }: { title: string; body: string; light?: boolean }) {
  return (
    <div className={`p-4 rounded-lg border ${light ? 'bg-emerald-50 border-emerald-200' : 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900/30'}`}>
      <div className="flex items-start gap-3">
        <CheckCircle2 className={`w-4 h-4 flex-shrink-0 mt-0.5 ${light ? 'text-emerald-600' : 'text-emerald-600 dark:text-emerald-400'}`} />
        <div>
          <p className={`text-[10px] font-semibold tracking-wider uppercase mb-1 ${light ? 'text-emerald-700' : 'text-emerald-600 dark:text-emerald-400'}`}>
            {title}
          </p>
          <p className={`text-xs leading-relaxed ${light ? 'text-emerald-800' : 'text-emerald-700 dark:text-emerald-100/90'}`}>{body}</p>
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
    <div className="p-4 rounded-lg bg-zinc-100 border border-zinc-200">
      <p className="text-sm text-zinc-700 italic leading-relaxed">&ldquo;{quote}&rdquo;</p>
      <div className="mt-3 flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-zinc-200 flex items-center justify-center">
          <span className="text-xs font-medium text-zinc-600">{initials}</span>
        </div>
        <div>
          <p className="text-xs font-medium text-zinc-700">{role}</p>
          <p className="text-[10px] text-accent">{highlight}</p>
        </div>
      </div>
    </div>
  )
}
