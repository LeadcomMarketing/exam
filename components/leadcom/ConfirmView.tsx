'use client'

import { ArrowRight, RotateCcw } from 'lucide-react'
import { Button } from '@/components/shared/ui/button'
import { LeadcomHeader } from './LeadcomHeader'

export function ConfirmView({
  onProceed,
  onRestart,
}: {
  onProceed: () => void
  onRestart: () => void
}) {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <LeadcomHeader />

      <div className="flex-1 flex items-center justify-center py-8 md:py-12 px-4">
        <div className="w-full max-w-lg mx-auto">

          <div className="bg-zinc-50 border border-zinc-200 rounded-xl shadow-lg overflow-hidden">

            {/* Accent top strip */}
            <div className="h-1 w-full bg-accent" />

            <div className="p-6 md:p-8">
              {/* Eyebrow */}
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

              <Button
                onClick={onProceed}
                size="lg"
                className="w-full h-12 bg-accent text-white hover:bg-accent/90 font-semibold"
              >
                Fortsätt — boka gratis samtal
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <div className="mt-4 text-center">
                <button
                  onClick={onRestart}
                  className="text-xs text-zinc-400 hover:text-zinc-600 flex items-center gap-1 mx-auto transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  Börja om
                </button>
              </div>
            </div>
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
