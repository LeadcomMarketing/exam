import { RotateCcw, CheckCircle } from 'lucide-react'
import { Button } from '@/components/shared/ui/button'
import { LeadcomHeader } from './LeadcomHeader'

export function DisqualifiedView({ onRestart }: { onRestart: () => void }) {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <LeadcomHeader />

      <div className="flex-1 flex items-center justify-center py-8 md:py-12 px-4">
        <div className="w-full max-w-lg mx-auto bg-card border border-border rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8 text-center">
            <div className="w-12 h-12 rounded-full bg-secondary mx-auto flex items-center justify-center mb-5">
              <CheckCircle className="w-6 h-6 text-muted-foreground" />
            </div>

            <h1 className="text-xl md:text-2xl font-bold text-card-foreground mb-3 text-balance">
              Bra — fortsätt med det som fungerar
            </h1>

            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Om kalendern redan är full eller om tillväxt inte är ett fokus just nu är det här troligen inte rätt läge.
              När ni vill skapa mer kapacitet eller växa vidare tar vi gärna ett samtal.
            </p>

            <Button
              onClick={onRestart}
              variant="outline"
              className="border-border text-card-foreground hover:bg-secondary/50"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Börja om
            </Button>
          </div>
        </div>
      </div>

      <footer className="py-6 px-4 border-t border-border/30">
        <p className="text-[11px] text-muted-foreground text-center">
          Leadcom — Datadriven patientanskaffning för tandkliniker
        </p>
      </footer>
    </main>
  )
}
