'use client'

import { useState } from 'react'
import Image from 'next/image'
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
              <p className="text-xl md:text-2xl font-bold text-foreground">300+</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">Kliniker hjälpta</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-foreground">42.4</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">Nya patienter / månad i snitt</p>
            </div>
            <div className="w-px h-8 bg-border" />
            <div className="text-center">
              <p className="text-xl md:text-2xl font-bold text-foreground">1 vecka</p>
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground mt-0.5">Tid till första patient</p>
            </div>
          </div>

          {/* Google badge */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5].map(i => (
                <svg key={i} className="w-4 h-4 fill-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
              ))}
            </div>
            <span className="text-sm font-semibold text-foreground">4.8</span>
            <span className="text-xs text-muted-foreground">på</span>
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>

          {/* Eyebrow */}
          <p className="text-[10px] md:text-xs font-medium tracking-widest text-muted-foreground text-center uppercase mb-3">
            För ambitiösa tandkliniker som vill växa
          </p>

          {/* Headline */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-foreground text-center text-balance max-w-lg mx-auto">
            Få 30–50 nya patienter varje månad
          </h1>

          {/* Supporting text */}
          <p className="mt-3 text-base md:text-lg font-semibold text-foreground text-center">
            Skandinaviens #1 byrå i tandvårdsbranschen
          </p>
          <p className="mt-1 text-sm text-muted-foreground text-center">
            140 000 patienter genererade för kliniker i Skandinavien
          </p>
        </div>
      </section>

      <LogoTicker />

      {/* Question Card Section */}
      <section className="flex-1 py-8 md:py-12 px-4 bg-background">
        <div className="relative w-full max-w-lg mx-auto">

          {/* Hand-drawn annotation — visible only when there's room beside the card */}
          <div className="hidden xl:flex absolute left-full top-[290px] ml-5 flex-row items-center gap-2 text-muted-foreground/80 rotate-3 pointer-events-none select-none">
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
          className="w-full bg-card border border-border rounded-xl shadow-lg overflow-hidden ring-1 ring-accent/20"
        >
          {/* Progress — secondary */}
          <ProgressHeader currentStep={1} totalSteps={7} />

          {/* PRIMARY ACTION ZONE */}
          <div className="px-6 pt-2 pb-6">
            {/* Presenter */}
            <div className="flex items-center gap-3 mb-3 pt-4">
              <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0 border-2 border-accent/30">
                <Image
                  src="/static/images/team/bendik.avif"
                  alt="Bendik Eide Anskau"
                  fill
                  sizes="40px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <p className="text-xs font-semibold text-card-foreground leading-none">Bendik Eide Anskau</p>
                <p className="text-[10px] text-muted-foreground mt-0.5">Medgrundare, Leadcom</p>
              </div>
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-card-foreground leading-snug">
              {step.title.split('undersökningar')[0]}
              <span className="text-accent">undersökningar</span>?
            </h2>
            <p className="mt-2 text-xs text-muted-foreground">{step.supportText}</p>
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
          <div className="px-6 py-5 space-y-3">
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
        <p className="text-[11px] text-muted-foreground/60 text-center">
          Leadcom — Datadriven patientanskaffning för tandkliniker
        </p>
      </footer>
    </main>
  )
}
