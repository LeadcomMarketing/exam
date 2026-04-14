'use client'

import { useState } from 'react'
import { funnelSteps } from '@/data/leadcom-funnel-data'
import { LandingView } from '@/components/leadcom/LandingView'
import { StepView } from '@/components/leadcom/StepView'
import { DisqualifiedView } from '@/components/leadcom/DisqualifiedView'
import { ThankYouView } from '@/components/leadcom/ThankYouView'

type ViewState = 'landing' | 'step' | 'disqualified' | 'thankyou'

export default function LeadcomFunnel() {
  const [view, setView] = useState<ViewState>('landing')
  const [currentStepIndex, setCurrentStepIndex] = useState(1)

  const handleStartFunnel = () => {
    setCurrentStepIndex(1)
    setView('step')
  }

  const handleNext = () => {
    if (currentStepIndex >= funnelSteps.length - 1) {
      setView('thankyou')
    } else {
      setCurrentStepIndex(currentStepIndex + 1)
    }
  }

  const handleBack = () => {
    if (currentStepIndex === 1) {
      setView('landing')
    } else {
      setCurrentStepIndex(currentStepIndex - 1)
    }
  }

  const handleRestart = () => {
    setView('landing')
    setCurrentStepIndex(1)
  }

  if (view === 'landing') {
    return <LandingView onStartFunnel={handleStartFunnel} onDisqualify={() => setView('disqualified')} />
  }

  if (view === 'disqualified') {
    return <DisqualifiedView onRestart={handleRestart} />
  }

  if (view === 'thankyou') {
    return <ThankYouView onRestart={handleRestart} />
  }

  return <StepView key={currentStepIndex} stepIndex={currentStepIndex} onNext={handleNext} onBack={handleBack} />
}
