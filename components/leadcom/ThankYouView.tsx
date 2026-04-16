'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, RotateCcw, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/shared/ui/button'
import { Input } from '@/components/shared/ui/input'
import { LeadcomHeader } from './LeadcomHeader'

const expectations = [
  {
    number: '1',
    text: 'Vi analyserar er klinik, ert område och er nuvarande digitala närvaro innan samtalet.',
  },
  {
    number: '2',
    text: 'Vi bygger er skräddarsydda anskaffningsplan — vilka behandlingar, annonsbudget och garanterat antal undersökningar.',
  },
  {
    number: '3',
    text: 'Vi berättar exakt vad som krävs. Kan vi garantera det? Vi visar hur. Kan vi inte? Vi säger det ärligt och går vidare.',
  },
]

export function ThankYouView({ onRestart, onSubmit }: { onRestart: () => void; onSubmit: () => void }) {
  const [form, setForm] = useState({ name: '', email: '', clinic: '', website: '' })
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    onSubmit()
  }

  const isValid = form.name.trim() && form.email.trim() && form.clinic.trim()

  return (
    <main className="w-full min-h-screen flex flex-col">
      <LeadcomHeader />

      <div className="flex-1 py-8 md:py-12 px-4">
        <div className="w-full max-w-lg mx-auto">

          <div className="bg-zinc-50 border border-zinc-200 rounded-xl shadow-lg overflow-hidden">

            {/* Accent top strip */}
            <div className="h-1 w-full bg-accent" />

            <div className="px-6 pt-6 pb-7">
              {/* Eyebrow */}
              <p className="text-[10px] font-semibold tracking-widest text-accent uppercase mb-3">
                Sista steget
              </p>

              {/* Headline */}
              <h1 className="text-xl md:text-2xl font-bold text-zinc-900 leading-snug mb-2">
                Boka ert kostnadsfria{' '}
                <em className="not-italic font-extrabold text-accent">analyssamtal</em>
              </h1>

              <p className="text-sm text-zinc-500 leading-relaxed mb-5">
                Vi kommer förberedda med en specifik plan för er klinik — anpassad efter ert område, era behandlingar och er kapacitet.
              </p>

              {/* Exclusivity box */}
              <div className="flex gap-3 p-4 rounded-lg bg-emerald-50 border border-emerald-200 mb-6">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs font-semibold text-emerald-800 mb-1">
                    Vi arbetar med max 1 klinik per område
                  </p>
                  <p className="text-xs text-emerald-700 leading-relaxed">
                    För att skydda era konkurrensfördelar tecknar vi ett exklusivitetsavtal för ert upptagningsområde. När en klinik i ert område är ombord tar vi inte på oss en konkurrent. Platser är begränsade.
                  </p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <Input
                  placeholder="Ert namn"
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  required
                  className="h-12 bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-accent/50"
                />
                <Input
                  type="email"
                  placeholder="E-postadress"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  required
                  className="h-12 bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-accent/50"
                />
                <Input
                  placeholder="Klinikens namn"
                  value={form.clinic}
                  onChange={e => setForm(f => ({ ...f, clinic: e.target.value }))}
                  required
                  className="h-12 bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-accent/50"
                />
                <div>
                  <Input
                    type="url"
                    placeholder="Klinikens webbplats (valfritt)"
                    value={form.website}
                    onChange={e => setForm(f => ({ ...f, website: e.target.value }))}
                    className="h-12 bg-white border-zinc-300 text-zinc-900 placeholder:text-zinc-400 focus-visible:ring-accent/50"
                  />
                  <p className="text-[10px] text-zinc-400 mt-1.5 px-1">
                    Hjälper oss granska er nuvarande närvaro innan samtalet
                  </p>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={!isValid || submitting}
                  className="w-full h-12 bg-accent text-white hover:bg-accent/90 font-semibold disabled:opacity-40 mt-1"
                >
                  {submitting ? 'Skickar…' : (
                    <>
                      Boka mitt analyssamtal
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>

                <p className="text-[10px] text-zinc-400 text-center pt-1">
                  Ingen spam. Ingen bindning. Vi kommer förberedda med er specifika plan.
                </p>
              </form>

              <div className="mt-5 text-center">
                <button
                  onClick={onRestart}
                  className="text-xs text-zinc-400 hover:text-zinc-600 flex items-center gap-1 mx-auto transition-colors"
                >
                  <RotateCcw className="w-3 h-3" />
                  Börja om
                </button>
              </div>
            </div>

            {/* What to expect section */}
            <div className="border-t border-zinc-200 px-6 py-5">
              <p className="text-[9px] font-semibold tracking-widest text-zinc-500 uppercase mb-4">
                Vad ni kan förvänta er på samtalet
              </p>
              <div className="space-y-4">
                {expectations.map((item) => (
                  <div key={item.number} className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-[10px] font-bold text-accent">
                      {item.number}
                    </span>
                    <p className="text-xs text-zinc-500 leading-relaxed pt-0.5">
                      {item.text}
                    </p>
                  </div>
                ))}
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
