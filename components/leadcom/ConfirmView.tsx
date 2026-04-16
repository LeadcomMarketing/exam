'use client'

import { useEffect } from 'react'
import { ArrowRight, RotateCcw, ShieldCheck, Clock, RefreshCw, Zap, Sparkles } from 'lucide-react'
import { Button } from '@/components/shared/ui/button'
import { LeadcomHeader } from './LeadcomHeader'

const features = [
  {
    icon: RefreshCw,
    title: 'Efter 8 år vet vi vad som fungerar',
    body: 'Med år av erfarenhet och testande vet vi vilka budskap som fungerar för maximala resultat.',
  },
  {
    icon: Clock,
    title: 'Effektiv automatisk uppföljning',
    body: 'Vår AI-teknologi kontaktar automatiskt varje potentiell patient inom 3 minuter – även kvällar och helger. Ofta bokar den in patienter innan du ens hunnit ringa upp.',
  },
  {
    icon: Zap,
    title: 'Proaktiv anskaffning',
    body: 'Vi når de 80% som inte aktivt söker tandläkare — innan de börjar jämföra kliniker. Ni blir deras första val.',
  },
  {
    icon: Sparkles,
    title: 'Alla högvärdiga behandlingar',
    body: 'Undersökningar, implantat, aligners och fasader — vi anpassar mixen för maximal avkastning på er annonsbudget.',
  },
]

export function ConfirmView({
  onProceed,
  onRestart,
}: {
  onProceed: () => void
  onRestart: () => void
}) {
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  return (
    <main className="w-full min-h-screen flex flex-col">
      <LeadcomHeader />

      <div className="flex-1 py-8 md:py-12 px-4">
        <div className="w-full max-w-lg mx-auto space-y-4">

          {/* ── Single continuous card ── */}
          <div className="bg-zinc-50 border border-zinc-200 rounded-xl shadow-lg overflow-hidden">
            <div className="h-1 w-full bg-accent" />

            <div className="p-6 md:p-8">
              <p className="text-[10px] font-semibold tracking-widest text-accent uppercase mb-4">
                Perfekt — ni passar
              </p>

              <h1 className="text-xl md:text-2xl font-bold text-zinc-900 leading-snug mb-3 text-balance">
                Baserat på era svar kan vi leverera ett förutsägbart flöde av nya patienter
              </h1>

              <p className="text-sm text-zinc-500 leading-relaxed mb-6">
                Nästa steg: fyll i era kontaktuppgifter så bokar vi in ett kort samtal — utan förpliktelse — för att visa exakt vad vi kan göra för er klinik.
              </p>

              {/* Stat pills */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div className="bg-white border border-zinc-200 rounded-lg p-3 text-center shadow-sm">
                  <p className="text-base font-bold text-zinc-900">20–50</p>
                  <p className="text-[9px] uppercase tracking-wider text-zinc-500 mt-0.5">Nya patienter / mån</p>
                </div>
                <div className="bg-white border border-zinc-200 rounded-lg p-3 text-center shadow-sm">
                  <p className="text-base font-bold text-zinc-900">163 kr</p>
                  <p className="text-[9px] uppercase tracking-wider text-zinc-500 mt-0.5">Per lead i snitt</p>
                </div>
                <div className="bg-white border border-zinc-200 rounded-lg p-3 text-center shadow-sm">
                  <p className="text-base font-bold text-zinc-900">1 vecka</p>
                  <p className="text-[9px] uppercase tracking-wider text-zinc-500 mt-0.5">Till första patient</p>
                </div>
              </div>

              {/* Primary CTA */}
              <Button
                onClick={onProceed}
                size="lg"
                className="w-full h-12 bg-accent text-white hover:bg-accent/90 font-semibold"
              >
                Fortsätt — boka gratis samtal
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* ── How it works section (same card, divider) ── */}
            <div className="border-t border-zinc-200 px-6 pt-6 pb-5">
              <p className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase mb-3">
                Så fungerar det
              </p>
              <h2 className="text-lg md:text-xl font-bold text-zinc-900 leading-snug mb-5">
                Därför kan vi <em className="not-italic text-accent font-extrabold">garantera</em> resultat
              </h2>

              {/* Guarantee box */}
              <div className="flex gap-3 p-4 rounded-lg bg-emerald-50 border border-emerald-200 mb-5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-emerald-800 mb-1 uppercase tracking-wide">
                    Vår garanti
                  </p>
                  <p className="text-xs font-semibold text-emerald-800 mb-1">
                    Missar vi målet — pausar vi fakturering
                  </p>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    Vi tar bara på oss kliniker där vi är säkra på att vi kan leverera. Om vi inte når det avtalade antalet bokade undersökningar, pausar vi alla kostnader tills vi kommer ikapp.
                  </p>
                </div>
              </div>

              {/* Feature grid */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {features.map((f) => (
                  <div key={f.title} className="bg-white border border-zinc-200 rounded-lg p-4 shadow-sm">
                    <f.icon className="w-4 h-4 text-accent mb-2" />
                    <p className="text-xs font-semibold text-zinc-900 mb-1 leading-snug">{f.title}</p>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">{f.body}</p>
                  </div>
                ))}
              </div>

              {/* Founder quote */}
              <div className="flex gap-3 p-4 rounded-lg bg-zinc-100 border border-zinc-200 mb-5">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-zinc-300 flex items-center justify-center text-[10px] font-bold text-zinc-600">
                  MP
                </div>
                <div>
                  <p className="text-xs text-zinc-600 italic leading-relaxed mb-2">
                    "Skillnaden mellan en klinik som får 5 nya patienter i månaden och en som får 50 handlar aldrig om annonsbudget. Det handlar alltid om vad som händer efter att någon klickar."
                  </p>
                  <p className="text-[10px] font-semibold text-zinc-500">Maksim Polupanov — Medgrundare, Leadcom</p>
                </div>
              </div>

              {/* Secondary CTA */}
              <Button
                onClick={onProceed}
                size="lg"
                className="w-full h-12 bg-accent text-white hover:bg-accent/90 font-semibold"
              >
                Jag är redo — boka mitt samtal
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Restart */}
          <div className="text-center pb-2">
            <button
              onClick={onRestart}
              className="text-xs text-muted-foreground/50 hover:text-muted-foreground flex items-center gap-1 mx-auto transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Börja om
            </button>
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
