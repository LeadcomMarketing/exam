import { LeadcomLogo } from './LeadcomLogo'

export function LeadcomHeader() {
  return (
    <header className="w-full py-4 px-4 border-b border-border/30 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-lg mx-auto flex justify-center">
        <LeadcomLogo />
      </div>
    </header>
  )
}
