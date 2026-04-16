'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, RotateCcw, ChevronDown, ChevronUp, Clock, Users, MapPin } from 'lucide-react'
import { Button } from '@/components/shared/ui/button'
import { LeadcomHeader } from './LeadcomHeader'

const faqItems = [
  {
    question: 'Hur snabbt kan vi förvänta oss resultat?',
    answer:
      'De flesta kliniker ser de första nya patientförfrågningarna inom 5–7 dagar efter lansering. Full fart brukar nås inom 2–4 veckor.',
  },
  {
    question: 'Hur mycket tid behöver vi lägga ned?',
    answer:
      'Väldigt lite. Vi sköter hela kampanjen — annonsering, texter och optimering. Ni behöver bara hantera de inkommande bokningarna.',
  },
  {
    question: 'Vad händer om vi inte är nöjda?',
    answer:
      'Vi jobbar utan långa bindningstider. Om ni inte ser resultat diskuterar vi öppet vad som behöver justeras — eller avslutar samarbetet.',
  },
  {
    question: 'Arbetar ni med konkurrenter i vår stad?',
    answer:
      'Nej. Vi tar bara in en klinik per stad för att säkerställa att era resultat inte påverkas av konkurrens inom vårt nätverk.',
  },
  {
    question: 'Vad kostar det?',
    answer:
      'Priset anpassas efter er kliniks storlek och målsättning. Vi går igenom det under samtalet — ingen överraskning efteråt.',
  },
]

export function BookingView({ onRestart }: { onRestart: () => void }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' }) }, [])

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <main className="w-full min-h-screen flex flex-col">
      <LeadcomHeader />

      <div className="flex-1 py-8 md:py-12 px-4">
        <div className="w-full max-w-lg mx-auto space-y-4">

          {/* Urgency card */}
          <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
            {/* Accent strip */}
            <div className="h-1 w-full bg-accent" />

            <div className="p-6 md:p-8">
              <p className="text-[10px] font-semibold tracking-widest text-accent uppercase mb-3">
                Tack — era uppgifter är mottagna
              </p>

              <h1 className="text-xl md:text-2xl font-bold text-card-foreground leading-snug mb-4 text-balance">
                Vi jobbar bara med <span className="text-accent">1 klinik per stad</span> — boka ert samtal nu
              </h1>

              <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                För att garantera er exklusivitet tar vi aldrig in fler än en klinik per stad. En av våra strateger kontaktar er inom 24 timmar — eller boka direkt nedan.
              </p>

              {/* Social proof pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground bg-secondary/50 border border-border/50 rounded-full px-3 py-1.5">
                  <Users className="w-3 h-3 text-accent flex-shrink-0" />
                  300+ kliniker hjälpta
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground bg-secondary/50 border border-border/50 rounded-full px-3 py-1.5">
                  <Clock className="w-3 h-3 text-accent flex-shrink-0" />
                  Resultat inom 1 vecka
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground bg-secondary/50 border border-border/50 rounded-full px-3 py-1.5">
                  <MapPin className="w-3 h-3 text-accent flex-shrink-0" />
                  Exklusivitet per stad
                </div>
              </div>

              <Button
                size="lg"
                className="w-full h-12 bg-accent text-white hover:bg-accent/90 font-semibold"
                onClick={() => { window.location.href = 'https://calendly.com/leadcom' }}
              >
                Boka samtal direkt
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <p className="text-[10px] text-muted-foreground/50 text-center mt-3">
                Tar 15 minuter · Ingen förpliktelse
              </p>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-card border border-border rounded-xl shadow-lg overflow-hidden">
            <div className="px-6 pt-5 pb-2 border-b border-border/40">
              <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
                Vanliga frågor
              </p>
            </div>

            <div className="divide-y divide-border/40">
              {faqItems.map((item, i) => (
                <div key={i}>
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-secondary/20 transition-colors"
                  >
                    <span className="text-sm font-medium text-card-foreground">{item.question}</span>
                    {openIndex === i
                      ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    }
                  </button>
                  {openIndex === i && (
                    <div className="px-6 pb-4">
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Restart */}
          <div className="text-center pb-4">
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
        <p className="text-[11px] text-muted-foreground text-center">
          Leadcom — Datadriven patientanskaffning för tandkliniker
        </p>
      </footer>
    </main>
  )
}
