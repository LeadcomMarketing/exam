'use client'

import { useState } from 'react'
import { funnelSteps } from '@/data/leadcom-funnel-data'
import { LandingView } from '@/components/leadcom/LandingView'
import { StepView } from '@/components/leadcom/StepView'
import { DisqualifiedView } from '@/components/leadcom/DisqualifiedView'
import { ThankYouView } from '@/components/leadcom/ThankYouView'
import { ConfirmView } from '@/components/leadcom/ConfirmView'
import { BookingView } from '@/components/leadcom/BookingView'
import { ClosingStepView } from '@/components/leadcom/ClosingStepView'

type ViewState = 'landing' | 'step' | 'disqualified' | 'thankyou' | 'confirm' | 'booking'

export default function LeadcomFunnel() {
  const [view, setView] = useState<ViewState>('landing')
  const [currentStepIndex, setCurrentStepIndex] = useState(1)
  // Tracks the selected option index (0-based) for each step (keyed by stepIndex)
  const [answers, setAnswers] = useState<Record<number, number>>({})

  const handleAnswer = (stepIndex: number, optionIndex: number) => {
    setAnswers(prev => ({ ...prev, [stepIndex]: optionIndex }))
  }

  const handleStartFunnel = () => {
    setCurrentStepIndex(1)
    setView('step')
  }

  const handleNext = () => {
    if (currentStepIndex >= funnelSteps.length - 1) {
      setView('confirm')
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
    setAnswers({})
  }

  if (view === 'landing') {
    return <LandingView onStartFunnel={handleStartFunnel} onDisqualify={() => setView('disqualified')} />
  }

  if (view === 'disqualified') {
    return <DisqualifiedView onRestart={handleRestart} />
  }

  if (view === 'thankyou') {
    return <ThankYouView onRestart={handleRestart} onSubmit={() => setView('booking')} />
  }

  if (view === 'confirm') {
    return <ConfirmView onProceed={() => setView('thankyou')} onRestart={handleRestart} />
  }

  if (view === 'booking') {
    return <BookingView onRestart={handleRestart} />
  }

  // Step 2 is at funnelSteps index 1; default to slider default if unanswered
  const step2Answer = answers[1] ?? 30

  if (currentStepIndex === funnelSteps.length - 1) {
    return (
      <ClosingStepView
        onProceed={handleNext}
        onBack={handleBack}
        onDisqualify={() => setView('disqualified')}
        step2Answer={step2Answer}
      />
    )
  }

  return (
    <StepView
      key={currentStepIndex}
      stepIndex={currentStepIndex}
      onNext={handleNext}
      onBack={handleBack}
      onDisqualify={() => setView('disqualified')}
      onAnswer={handleAnswer}
    />
  )
}
