export function ProgressHeader({
  currentStep,
  totalSteps,
  light = false,
}: {
  currentStep: number
  totalSteps: number
  light?: boolean
}) {
  const percentage = Math.round((currentStep / totalSteps) * 100)

  return (
    <div className="px-5 pt-5 pb-4">
      <div className="flex items-center justify-between mb-2">
        <span className={`text-[10px] font-semibold tracking-wider uppercase ${light ? 'text-zinc-500' : 'text-muted-foreground'}`}>
          Steg {currentStep} av {totalSteps}
        </span>
        <span className={`text-[10px] font-semibold tracking-wider ${light ? 'text-zinc-500' : 'text-muted-foreground'}`}>{percentage}%</span>
      </div>
      <div className={`h-1 rounded-full overflow-hidden ${light ? 'bg-zinc-200' : 'bg-secondary'}`}>
        <div
          className="h-full bg-accent rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
