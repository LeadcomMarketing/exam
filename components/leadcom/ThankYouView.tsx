import { RotateCcw, CheckCircle, Calendar, ArrowRight } from 'lucide-react'
import { Button } from '@/components/shared/ui/button'
import { LeadcomHeader } from './LeadcomHeader'
import { TestimonialCard } from './TestimonialCard'
import { caseTestimonials } from '@/data/leadcom-funnel-data'

export function ThankYouView({ onRestart }: { onRestart: () => void }) {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <LeadcomHeader />

      <div className="flex-1 flex items-center justify-center py-8 md:py-12 px-4">
        <div className="w-full max-w-lg mx-auto bg-card border border-border rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="text-center">
              <div className="w-14 h-14 rounded-full bg-accent/20 mx-auto flex items-center justify-center mb-5">
                <CheckCircle className="w-7 h-7 text-accent" />
              </div>

              <h1 className="text-xl md:text-2xl font-bold text-card-foreground mb-3 text-balance">
                Tack för era svar
              </h1>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Baserat på era svar ser vi att Leadcom kan hjälpa er att skapa ett jämnare inflöde av nya patientundersökningar.
                Nästa steg är ett kort strategisamtal.
              </p>

              <div className="flex flex-col gap-3">
                <Button size="lg" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12">
                  <Calendar className="w-4 h-4 mr-2" />
                  Boka strategisamtal
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onRestart}
                  className="text-muted-foreground hover:text-card-foreground h-8"
                >
                  <RotateCcw className="w-4 h-4 mr-1" />
                  Börja om
                </Button>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              {caseTestimonials.map((t) => (
                <TestimonialCard
                  key={t.logoAlt}
                  logoSrc={t.logoSrc}
                  logoAlt={t.logoAlt}
                  photoSrc={t.photoSrc}
                  photoAlt={t.photoAlt}
                  logoInvertInLight={t.logoInvertInLight}
                >
                  {t.prefix}
                  <strong>{t.boldPart}</strong>
                  {t.middle}
                  <strong className="text-accent">{t.accentPart}</strong>
                </TestimonialCard>
              ))}
            </div>
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
