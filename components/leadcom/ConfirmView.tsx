'use client'

import { useEffect } from 'react'
import Image from 'next/image'
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
    title: 'Kvalitet över kvantitet',
    body: 'Vi "filtrerar" aktivt bort leads som inte är seriösa genom att kvalificera dem längs vägen - innan de når er.',
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

              {/* Customer testimonial */}
              <div className="p-4 rounded-lg bg-zinc-100 border border-zinc-200 mb-5">
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
                <p className="text-xs text-zinc-700 leading-relaxed mb-3">
                  "Among the many marketing agencies I have used, Leadcom is by far the best. They have a wonderful determination and a clear plan/goal with their marketing and manage to deliver good results time and time again. I can highly recommend them!"
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden bg-zinc-300 flex-shrink-0">
                      <Image
                        src="/static/images/testimonials/wuba.png.png"
                        alt="Wuba Kassahun"
                        width={24}
                        height={24}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <p className="text-[11px] font-semibold text-zinc-600">Wuba Kassahun</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
                    <span>Recension på</span>
                    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
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
