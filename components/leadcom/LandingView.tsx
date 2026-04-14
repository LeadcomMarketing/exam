'use client'

import { useState } from 'react'
import { funnelSteps, serviceCategories, optionMarkers } from '@/data/leadcom-funnel-data'
import { LeadcomHeader } from './LeadcomHeader'
import { LogoTicker } from './LogoTicker'
import { ProgressHeader } from './ProgressHeader'
import { FunnelOption } from './FunnelOption'
import { InsightPanel, GreenPanel } from './panels'

export function LandingView({
  onStartFunnel,
  onDisqualify,
}: {
  onStartFunnel: () => void
  onDisqualify: () => void
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const step = funnelSteps[0]

  const handleSelect = (index: number) => {
    setSelected(index)
    const option = step.options[index]
    setTimeout(() => {
      if (option.outcome === 'disqualify') {
        onDisqualify()
      } else {
        onStartFunnel()
      }
    }, 300)
  }

  return (
    <main className="w-full min-h-screen flex flex-col">
      <LeadcomHeader />

      {/* Hero Band */}
      <section className="w-full bg-background py-8 md:py-12 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Stats row */}
          <div className="flex items-center justify-center gap-6 md:gap-10 mb-8">
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-foreground">150+</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">Kliniker hjälpta</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-foreground">2 500+</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">Nya patienter / månad</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-foreground">2–4 v</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">Tid till resultat</p>
            </div>
          </div>

          {/* Eyebrow */}
          <p className="text-[10px] md:text-xs font-medium tracking-widest text-muted-foreground text-center uppercase mb-3">
            För ambitiösa tandkliniker som vill växa
          </p>

          {/* Headline */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground text-center text-balance max-w-lg mx-auto">
            Fyll din kalender med 20–100 nya patienter varje månad – utan att förlita dig på mun-till-mun
          </h1>

          {/* Supporting text */}
          <p className="mt-4 text-sm md:text-base text-muted-foreground text-center max-w-md mx-auto leading-relaxed">
            Skapa ett jämnt inflöde av nya patienter via undersökningar. Datadriven patientanskaffning utan att vara beroende av rekommendationer.
          </p>
        </div>
      </section>

      <LogoTicker />

      {/* Question Card Section */}
      <section className="flex-1 py-8 md:py-12 px-4 bg-background">
        <div className="relative w-full max-w-lg mx-auto">

          {/* Hand-drawn annotation — visible only when there's room beside the card */}
          <div className="hidden xl:flex absolute left-full top-[290px] ml-5 flex-row items-center gap-2 text-muted-foreground/60 rotate-3 pointer-events-none select-none">
            {/* Arrow pointing left toward the options */}
            <svg width="80" height="30" viewBox="0 0 80 30" fill="none">
              <path
                d="M 76 14 C 58 5 35 6 10 16"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
              />
              <path
                d="M 10 16 L 22 8 M 10 16 L 22 23"
                stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"
              />
            </svg>
            <span
              className="text-2xl leading-tight whitespace-nowrap"
              style={{ fontFamily: 'var(--font-handwritten)' }}
            >
              Börja här
            </span>
          </div>

        <div
          id="question-card"
          className="w-full bg-card border border-border rounded-xl shadow-lg overflow-hidden"
        >
          {/* Progress — secondary */}
          <ProgressHeader currentStep={1} totalSteps={6} />

          {/* PRIMARY ACTION ZONE */}
          <div className="px-6 pt-2 pb-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-card-foreground leading-snug">
              {step.title.split('undersökningar')[0]}
              <span className="text-accent">undersökningar</span>?
            </h2>
            <p className="mt-2 text-xs text-muted-foreground/70">{step.supportText}</p>
          </div>

          <div className="px-6 pb-8 space-y-3">
            {step.options.map((option, i) => (
              <FunnelOption
                key={option.label}
                label={option.label}
                marker={optionMarkers[i]}
                isSelected={selected === i}
                onClick={() => handleSelect(i)}
                large
              />
            ))}
          </div>

          {/* Divider — clear visual break */}
          <div className="mx-6 border-t border-border/40" />

          {/* SUPPORT ZONE — tertiary, deliberately quieter */}
          <div className="opacity-80 px-6 py-5 space-y-3">
            {/* Service categories */}
            <div>
              <p className="text-[9px] font-semibold tracking-wider text-muted-foreground mb-2 uppercase">
                Områden vi hjälper kliniker att växa
              </p>
              <div className="flex flex-wrap gap-1.5">
                {serviceCategories.map((category) => (
                  <span
                    key={category}
                    className="text-[10px] text-muted-foreground py-1 px-2 rounded-md bg-secondary/60 border border-border/50"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            {step.showGreenPanel && step.greenPanelTitle && step.greenPanelBody && (
              <GreenPanel title={step.greenPanelTitle} body={step.greenPanelBody} />
            )}

            {step.insightPanel && (
              <InsightPanel title={step.insightPanel.title} body={step.insightPanel.body} />
            )}
          </div>
        </div>
        </div>
      </section>

      <footer className="py-6 px-4 border-t border-border/30">
        <p className="text-[11px] text-muted-foreground/50 text-center">
          Leadcom — Datadriven patientanskaffning för tandkliniker
        </p>
      </footer>
    </main>
  )
}
