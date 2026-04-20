'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
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
  onAnswer,
}: {
  stepIndex: number
  onNext: () => void
  onBack: () => void
  onDisqualify: () => void
  onAnswer?: (stepIndex: number, optionIndex: number) => void
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const step = funnelSteps[stepIndex]

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const handleSelect = (index: number) => {
    setSelected(index)
    onAnswer?.(stepIndex, index)
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

          {step.googleReview && (
            <div className="px-5 pb-4">
              <div className="p-4 rounded-lg bg-zinc-100 border border-zinc-200">
                <div className="flex items-center gap-1 mb-3">
                  {[1,2,3,4,5].map(i => (
                    <svg key={i} className="w-3.5 h-3.5 fill-yellow-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-xs text-zinc-700 leading-relaxed mb-3 italic">
                  &ldquo;{step.googleReview.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full overflow-hidden bg-zinc-300 flex-shrink-0">
                      <Image src={step.googleReview.photoSrc} alt={step.googleReview.name} width={24} height={24} className="w-full h-full object-cover" />
                    </div>
                    <p className="text-[11px] font-semibold text-zinc-600">{step.googleReview.name}</p>
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-zinc-400">
                    <span>Recension på</span>
                    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>
                </div>
              </div>
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
