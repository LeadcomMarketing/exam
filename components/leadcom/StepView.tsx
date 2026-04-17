'use client'

import { useState, useEffect } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/shared/ui/button'
import { funnelSteps, optionMarkers } from '@/data/leadcom-funnel-data'
import { LeadcomHeader } from './LeadcomHeader'
import { ProgressHeader } from './ProgressHeader'
import { FunnelOption } from './FunnelOption'
import { InsightPanel, GreenPanel, Testimonial } from './panels'
import { CaseStudyPanel } from './CaseStudyPanel'

export function StepView({
  stepIndex,
  onNext,
  onBack,
  onDisqualify,
}: {
  stepIndex: number
  onNext: () => void
  onBack: () => void
  onDisqualify: () => void
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const step = funnelSteps[stepIndex]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleSelect = (index: number) => {
    setSelected(index)
    const option = step.options[index]
    setTimeout(() => {
      if (option.outcome === 'disqualify') {
        onDisqualify()
      } else {
        onNext()
      }
    }, 300)
  }

  return (
    <main className="w-full min-h-screen flex flex-col">
      <LeadcomHeader />

      <div className="flex-1 flex items-center justify-center py-6 md:py-10 px-4">
        <div className="w-full max-w-lg mx-auto bg-zinc-50 border border-zinc-200 rounded-xl shadow-lg overflow-hidden">
          <ProgressHeader currentStep={step.step} totalSteps={7} light />

          <div className="px-5 pb-4">
            <h2 className="text-lg md:text-xl font-bold leading-snug text-zinc-900">{step.title}</h2>
            <p className="mt-2 text-sm text-zinc-500">{step.supportText}</p>
          </div>

          <div className="px-5 pb-4 space-y-3">
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

          {step.caseStudy && (
            <div className="px-5 pb-4">
              <CaseStudyPanel
                imageSrc={step.caseStudy.imageSrc}
                imageAlt={step.caseStudy.imageAlt}
                quote={step.caseStudy.quote}
                clinic={step.caseStudy.clinic}
              />
            </div>
          )}

          {step.testimonial && (
            <div className="px-5 pb-4">
              <Testimonial
                quote={step.testimonial.quote}
                initials={step.testimonial.initials}
                name={step.testimonial.name}
                photoSrc={step.testimonial.photoSrc}
                role={step.testimonial.role}
                highlight={step.testimonial.highlight}
              />
            </div>
          )}

          {step.showGreenPanel && step.greenPanelTitle && step.greenPanelBody && (
            <div className="px-5 pb-4">
              <GreenPanel title={step.greenPanelTitle} body={step.greenPanelBody} light />
            </div>
          )}

          {step.insightPanel && (
            <div className="px-5 pb-4">
              <InsightPanel title={step.insightPanel.title} body={step.insightPanel.body} light />
            </div>
          )}

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
