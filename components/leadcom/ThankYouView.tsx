'use client'

import { useState } from 'react'
import { ArrowRight, RotateCcw } from 'lucide-react'
import { Button } from '@/components/shared/ui/button'
import { Input } from '@/components/shared/ui/input'
import { LeadcomHeader } from './LeadcomHeader'
import { TestimonialCard } from './TestimonialCard'
import { caseTestimonials } from '@/data/leadcom-funnel-data'

export function ThankYouView({ onRestart, onSubmit }: { onRestart: () => void; onSubmit: () => void }) {
  const [form, setForm] = useState({ name: '', clinic: '', phone: '', email: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    onSubmit()
  }

  const isValid = form.name.trim() && form.phone.trim() && form.email.trim()

  return (
    <main className="w-full min-h-screen flex flex-col">
      <LeadcomHeader />

      <div className="flex-1 py-8 md:py-12 px-4">
        <div className="w-full max-w-lg mx-auto space-y-4">

          {/* Main card */}
          <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">

            {/* Progress bar — step 7 of 7, almost done */}
            <div className="px-6 pt-5 pb-4 border-b border-border/40">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-semibold tracking-widest text-muted-foreground uppercase">Steg 7 av 7</span>
                <span className="text-[10px] font-semibold text-accent">98%</span>
              </div>
              <div className="h-1 w-full bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-accent rounded-full" style={{ width: '98%' }} />
              </div>
            </div>

            <div className="px-6 pt-5 pb-6">
              <h1 className="text-xl md:text-2xl font-bold text-card-foreground mb-2 leading-snug">
                Nästan klart — fyll i era uppgifter
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                Lämna era kontaktuppgifter nedan så hör vi av oss för att boka in nästa steg.
              </p>

              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  placeholder="Namn"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                  className="h-12 bg-zinc-700 border-zinc-600 text-zinc-50 placeholder:text-zinc-400 focus-visible:ring-accent/50"
                />
                <Input
                  placeholder="Kliniknamn (valfritt)"
                  value={form.clinic}
                  onChange={e => setForm(f => ({ ...f, clinic: e.target.value }))}
                  className="h-12 bg-zinc-700 border-zinc-600 text-zinc-50 placeholder:text-zinc-400 focus-visible:ring-accent/50"
                />
                <Input
                  type="tel"
                  placeholder="Telefonnummer"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  required
                  className="h-12 bg-zinc-700 border-zinc-600 text-zinc-50 placeholder:text-zinc-400 focus-visible:ring-accent/50"
                />
                <Input
                  type="email"
                  placeholder="E-postadress"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                  className="h-12 bg-zinc-700 border-zinc-600 text-zinc-50 placeholder:text-zinc-400 focus-visible:ring-accent/50"
                />

                <Button
                  type="submit"
                  size="lg"
                  disabled={!isValid || submitting}
                  className="w-full h-12 bg-accent text-white hover:bg-accent/90 font-semibold disabled:opacity-40 mt-1"
                >
                  {submitting ? 'Skickar…' : (
                    <>
                      Fortsätt
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>

              <div className="mt-4 text-center">
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

          {/* Testimonials as social proof */}
          <div className="space-y-4">
            {caseTestimonials.map((t) => (
              <TestimonialCard
                key={t.logoAlt}
                logoSrc={t.logoSrc}
                logoAlt={t.logoAlt}
                photoSrc={t.photoSrc}
                photoAlt={t.photoAlt}
                photoWidth={t.photoWidth}
                photoHeight={t.photoHeight}
                logoInvertInLight={t.logoInvertInLight}
              >
                {t.prefix}
                <strong>{t.boldPart}</strong>
                {t.middle}
                <strong className="text-accent">{t.accentPart}</strong>
              </TestimonialCard>
            ))}
          </div>

        </div>
      </div>

      <footer className="py-6 px-4 border-t border-border/30">
        <p className="text-[11px] text-muted-foreground text-center">
          Leadcom — Datadriven patientanskaffning för tandkliniker
        </p>
      </footer>
    </main>
  )
}
