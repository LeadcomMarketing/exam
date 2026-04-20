'use client'

import { useEffect } from 'react'
import { ArrowRight, ArrowLeft, TrendingUp } from 'lucide-react'
import { Button } from '@/components/shared/ui/button'
import { LeadcomHeader } from './LeadcomHeader'
import { ProgressHeader } from './ProgressHeader'

// Lookup table indexed by step 2 option (0–3)
// Formula:
//   undersökningar = patients / 0.70  (rounded to nearest whole)
//   annonskostnad  = undersökningar × 200 kr
//   patientvärde   = patients × 3 750 kr
const STATS_BY_ANSWER = [
  // Option 0: 10–30 nya undersökningar / månad
  {
    patienter:      '10–30',
    undersökningar: '14–43',
    annonskostnad:  '~2 800–8 600 kr',
    patientvärde:   '~37 500–112 500 kr',
  },
  // Option 1: 30–60
  {
    patienter:      '30–60',
    undersökningar: '43–86',
    annonskostnad:  '~8 600–17 200 kr',
    patientvärde:   '~112 500–225 000 kr',
  },
  // Option 2: 60–100
  {
    patienter:      '60–100',
    undersökningar: '86–143',
    annonskostnad:  '~17 200–28 600 kr',
    patientvärde:   '~225 000–375 000 kr',
  },
  // Option 3: 100+
  {
    patienter:      '100+',
    undersökningar: '143+',
    annonskostnad:  '~28 600+ kr',
    patientvärde:   '~375 000+ kr',
  },
] as const

export function ClosingStepView({
  onProceed,
  onBack,
  onDisqualify,
  step2Answer = 0,
}: {
  onProceed: () => void
  onBack: () => void
  onDisqualify: () => void
  step2Answer?: number
}) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  const s = STATS_BY_ANSWER[step2Answer] ?? STATS_BY_ANSWER[0]

  const stats = [
    { label: 'Nya undersökningar / månad', sub: 'garanterat', value: s.undersökningar, accent: false },
    { label: 'Genomsnittlig bokningsprocent', sub: null,         value: '70%',            accent: false },
    { label: 'Nya patienter / månad',        sub: null,         value: s.patienter,      accent: false },
    { label: 'Annonseringskostnad',           sub: 'per månad', value: s.annonskostnad,  accent: false },
    { label: 'Uppskattat patientvärde (LTV)', sub: null,         value: s.patientvärde,  accent: true  },
  ]

  return (
    <main className="w-full min-h-screen flex flex-col">
      <LeadcomHeader />

      <div className="flex-1 flex items-center justify-center py-6 md:py-10 px-4">
        <div className="w-full max-w-lg mx-auto bg-zinc-50 border border-zinc-200 rounded-xl shadow-lg overflow-hidden">
          <ProgressHeader currentStep={7} totalSteps={7} light />

          <div className="px-5 pb-3">
            {/* Eyebrow */}
            <p className="text-[10px] font-semibold tracking-widest text-accent uppercase mb-3">
              En fråga innan vi fortsätter
            </p>

            {/* Headline */}
            <h2 className="text-xl md:text-2xl font-extrabold text-zinc-900 leading-snug mb-5 text-balance">
              Om vi <em className="not-italic text-accent">garanterade</em> att er kalender fylldes med nya undersökningar varje månad — vore det värt en investering?
            </h2>

            {/* Stats panel */}
            <div className="rounded-xl bg-zinc-800 overflow-hidden mb-5">
              {/* Panel header */}
              <div className="flex items-center gap-2 px-5 pt-4 pb-3 border-b border-zinc-700">
                <TrendingUp className="w-3.5 h-3.5 text-accent flex-shrink-0" />
                <p className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase">
                  Vad vi kan leverera för er
                </p>
              </div>

              {/* Rows */}
              <div className="divide-y divide-zinc-700/60">
                {stats.map((row) => (
                  <div key={row.label} className="flex items-center justify-between px-5 py-3.5">
                    <span className="text-sm text-zinc-300">
                      {row.label}
                      {row.sub && (
                        <span className="text-zinc-500 ml-1">({row.sub})</span>
                      )}
                    </span>
                    <span className={`text-base font-bold tabular-nums ${row.accent ? 'text-accent' : 'text-zinc-100'}`}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Primary CTA */}
            <Button
              onClick={onProceed}
              size="lg"
              className="w-full h-12 bg-accent text-white hover:bg-accent/90 font-semibold mb-3"
            >
              Ja — visa mig hur det fungerar
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            {/* Secondary / disqualify */}
            <button
              onClick={onDisqualify}
              className="w-full h-12 rounded-lg border border-zinc-300 text-sm text-zinc-500 hover:text-zinc-700 hover:border-zinc-400 transition-colors flex items-center justify-center gap-2 mb-4"
            >
              Inte just nu — jag vill tänka på det
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Back */}
          <div className="px-5 pb-5 border-t border-zinc-200 pt-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={onBack}
              className="text-zinc-400 hover:text-zinc-700 h-8 px-2"
            >
              <ArrowLeft className="w-4 h-4 mr-1" />
              Tillbaka
            </Button>
          </div>
        </div>
      </div>

      <footer className="py-6 px-4 border-t border-border/30">
        <p className="text-[11px] text-muted-foreground/60 text-center">
          Leadcom — Datadriven patientanskaffning för tandkliniker
        </p>
      </footer>
    </main>
  )
}
