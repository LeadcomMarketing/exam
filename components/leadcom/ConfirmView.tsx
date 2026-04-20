'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, RotateCcw, ShieldCheck, Clock, RefreshCw, Zap, Sparkles } from 'lucide-react'
import { Button } from '@/components/shared/ui/button'
import { LeadcomHeader } from './LeadcomHeader'
import { CaseStudyPanel } from './CaseStudyPanel'

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

// Reusable fade-drop variant
const drop = (delay: number) => ({
  hidden: { opacity: 0, y: -14 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay } },
})

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
          <motion.div
            variants={drop(0)}
            initial="hidden"
            animate="show"
            className="bg-zinc-50 border border-zinc-200 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="h-1 w-full bg-accent" />

            <div className="p-6 md:p-8">
              <motion.p variants={drop(0.10)} initial="hidden" animate="show"
                className="text-[10px] font-semibold tracking-widest text-accent uppercase mb-4">
                Perfekt — ni passar
              </motion.p>

              <motion.h1 variants={drop(0.24)} initial="hidden" animate="show"
                className="text-xl md:text-2xl font-bold text-zinc-900 leading-snug mb-3 text-balance">
                Baserat på era svar kan vi leverera ett förutsägbart flöde av nya patienter
              </motion.h1>

              <motion.p variants={drop(0.38)} initial="hidden" animate="show"
                className="text-sm text-zinc-500 leading-relaxed mb-6">
                Nästa steg: fyll i era kontaktuppgifter så bokar vi in ett kort samtal — utan förpliktelse — för att visa exakt vad vi kan göra för er klinik.
              </motion.p>

              {/* Stat pills */}
              <motion.div variants={drop(0.54)} initial="hidden" animate="show"
                className="grid grid-cols-3 gap-3 mb-6">
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
              </motion.div>

              {/* Primary CTA */}
              <motion.div variants={drop(0.68)} initial="hidden" animate="show">
                <Button
                  onClick={onProceed}
                  size="lg"
                  className="w-full h-12 bg-accent text-white hover:bg-accent/90 font-semibold"
                >
                  Fortsätt — boka gratis samtal
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>

            {/* ── Case study (below first CTA) ── */}
            <motion.div variants={drop(0.84)} initial="hidden" animate="show"
              className="border-t border-zinc-200 px-6 pt-5 pb-0">
              <CaseStudyPanel
                imageSrc="/static/images/testimonials/darya-interview.png"
                imageAlt="Darya Bassari — Clear Tannlegesenter"
                quote="En tillväxtresa i en klass för sig: Daryas klinik ökade från 15,9 till 76,4 miljoner på fyra år med hjälp av Leadcom."
                clinic="Clear Tannlegesenter"
              />
            </motion.div>

            {/* ── How it works section ── */}
            <div className="border-t border-zinc-200 px-6 pt-6 pb-5 mt-5">
              <motion.p variants={drop(1.00)} initial="hidden" animate="show"
                className="text-[10px] font-semibold tracking-widest text-zinc-400 uppercase mb-3">
                Så fungerar det
              </motion.p>
              <motion.h2 variants={drop(1.14)} initial="hidden" animate="show"
                className="text-lg md:text-xl font-bold text-zinc-900 leading-snug mb-5">
                Därför kan vi <em className="not-italic text-accent font-extrabold">garantera</em> resultat
              </motion.h2>

              {/* Guarantee box */}
              <motion.div variants={drop(1.28)} initial="hidden" animate="show"
                className="flex gap-3 p-4 rounded-lg bg-emerald-50 border border-emerald-200 mb-5">
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
              </motion.div>

              {/* Feature grid — each tile staggers in */}
              <div className="grid grid-cols-2 gap-3 mb-5">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    variants={drop(1.42 + i * 0.14)}
                    initial="hidden"
                    animate="show"
                    className="bg-white border border-zinc-200 rounded-lg p-4 shadow-sm"
                  >
                    <f.icon className="w-4 h-4 text-accent mb-2" />
                    <p className="text-xs font-semibold text-zinc-900 mb-1 leading-snug">{f.title}</p>
                    <p className="text-[11px] text-zinc-500 leading-relaxed">{f.body}</p>
                  </motion.div>
                ))}
              </div>

              {/* Secondary CTA */}
              <motion.div variants={drop(1.98)} initial="hidden" animate="show">
                <Button
                  onClick={onProceed}
                  size="lg"
                  className="w-full h-12 bg-accent text-white hover:bg-accent/90 font-semibold"
                >
                  Jag är redo — boka mitt samtal
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            </div>
          </motion.div>

          {/* Restart */}
          <motion.div variants={drop(2.12)} initial="hidden" animate="show"
            className="text-center pb-2">
            <button
              onClick={onRestart}
              className="text-xs text-muted-foreground/50 hover:text-muted-foreground flex items-center gap-1 mx-auto transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              Börja om
            </button>
          </motion.div>

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
