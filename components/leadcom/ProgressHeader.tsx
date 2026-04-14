export function ProgressHeader({
  currentStep,
  totalSteps,
}: {
  currentStep: number
  totalSteps: number
}) {
  const percentage = Math.round((currentStep / totalSteps) * 100)

  return (
    <div className="px-5 pt-5 pb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-semibold tracking-wider text-muted-foreground uppercase">
          Steg {currentStep} av {totalSteps}
        </span>
        <span className="text-[10px] font-semibold tracking-wider text-muted-foreground">{percentage}%</span>
      </div>
      <div className="h-1 bg-secondary rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
