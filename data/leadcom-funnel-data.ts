export interface FunnelStep {
  step: number
  title: string
  supportText: string
  options: { label: string; outcome?: 'continue' | 'disqualify' }[]
  insightPanel?: { title: string; body: string }
  testimonial?: { quote: string; initials: string; role: string; highlight: string }
  caseStudy?: { imageSrc: string; imageAlt: string; quote: string; clinic: string }
  showGreenPanel?: boolean
  greenPanelTitle?: string
  greenPanelBody?: string
}

export const funnelSteps: FunnelStep[] = [
  {
    step: 1,
    title: 'Försöker ni aktivt få in fler nya patienter via undersökningar?',
    supportText: 'Svara ärligt — det avgör om vi kan hjälpa er.',
    options: [
      { label: 'Ja — vi vill få in fler bokade undersökningar och är redo att växa', outcome: 'continue' },
      { label: 'Nej — vår kalender är redan full eller detta är inte ett fokus just nu', outcome: 'disqualify' },
    ],
    insightPanel: {
      title: 'VARFÖR VI FRÅGAR',
      body: 'Vi arbetar endast med kliniker som aktivt vill växa. Det säkerställer att vårt samarbete ger resultat för båda parter.',
    },
    showGreenPanel: true,
    greenPanelTitle: 'Ni har redan det som krävs',
    greenPanelBody:
      'Ni behöver inte bli en annan klinik. Ni behöver ett bättre system för att få rätt patienter att boka sin första undersökning hos er.',
  },
  {
    step: 2,
    title: 'Hur många nya undersökningsbokningar per månad vill ni få in?',
    supportText: 'Tänk nya patienter som ännu inte har varit hos er tidigare.',
    options: [
      { label: '10–30 nya undersökningar / månad' },
      { label: '30–60 nya undersökningar / månad' },
      { label: '60–100 nya undersökningar / månad' },
      { label: '100+ nya undersökningar / månad' },
    ],
    insightPanel: {
      title: 'GENOMSNITTLIGT PATIENTVÄRDE',
      body: 'En ny undersökning kan leda till behandlingar värda 15 000–50 000 kr över tid. Rätt volym gör skillnad.',
    },
    caseStudy: {
      imageSrc: '/static/images/testimonials/darya-interview.png',
      imageAlt: 'Darya Bassari — Clear Tannlegesenter',
      quote: 'En tillväxtresa i en klass för sig: Daryas klinik ökade från 15,9 till 76,4 miljoner på fyra år med hjälp av Leadcom.',
      clinic: 'Clear Tannlegesenter',
    },
  },
  {
    step: 3,
    title: 'Hur stor andel av era bokade undersökningar blir faktiskt patienter hos er?',
    supportText: 'Av de nya som bokar tid — hur många går vidare till behandling och återkommande vård?',
    options: [
      { label: 'Under 20 %' },
      { label: '20–40 %' },
      { label: '40–60 %' },
      { label: '60 % eller mer' },
    ],
    insightPanel: {
      title: 'KONVERTERING AVGÖR',
      body: 'Kliniker med hög konvertering får mer värde från varje ny patient. Vi hjälper er optimera hela kedjan.',
    },
    testimonial: {
      quote: 'Vi startade fredagen den 1 november. När vi kom in på måndagen hade vi fått 36 leads … Det var helt kaotiskt! Vi var tvungna att pausa kampanjen, få kontroll igen och därefter fortsätta.',
      initials: 'JK',
      role: 'Klinikägare, Stockholm',
      highlight: '36 leads på en helg',
    },
  },
  {
    step: 4,
    title: 'Hur får ni in flest nya patientförfrågningar idag?',
    supportText: 'Välj det alternativ som bäst beskriver nuläget.',
    options: [
      { label: 'Främst via rekommendationer' },
      { label: 'Google / organiska sökningar' },
      { label: 'Annonsering fungerar redan lite grann' },
      { label: 'Vi har ingen stabil kanal idag' },
    ],
    insightPanel: {
      title: 'BEROENDE AV REKOMMENDATIONER?',
      body: 'Kliniker som bara förlitar sig på rekommendationer får ofta ett ojämnt inflöde. Med rätt system blir nya undersökningsbokningar förutsägbara.',
    },
  },
  {
    step: 5,
    title: 'Hur snabbt följer ni vanligtvis upp nya förfrågningar?',
    supportText: 'Snabb uppföljning påverkar hur många bokningar som faktiskt blir av.',
    options: [
      { label: 'Inom 5–10 minuter' },
      { label: 'Samma dag' },
      { label: 'Nästa dag' },
      { label: 'Oregelbundet / när vi hinner' },
    ],
    insightPanel: {
      title: 'SVARSTID = BOKNINGSGRAD',
      body: 'Snabb uppföljning gör stor skillnad. Ju snabbare ni svarar på en ny förfrågan, desto större chans att den blir en bokad tid.',
    },
  },
  {
    step: 6,
    title: 'När vill ni helst komma igång med att öka inflödet av nya undersökningar?',
    supportText: 'Det här hjälper oss förstå prioritet och timing.',
    options: [
      { label: 'Omgående' },
      { label: 'Inom 30 dagar' },
      { label: 'Inom 1–3 månader' },
      { label: 'Vi undersöker bara alternativ just nu' },
    ],
    insightPanel: {
      title: 'SNABBA RESULTAT',
      body: 'De flesta kliniker ser de första nya patientförfrågningarna inom 2–4 veckor efter start.',
    },
    showGreenPanel: true,
    greenPanelTitle: 'Sista steget',
    greenPanelBody:
      'Efter detta berättar vi exakt vad vi kan leverera för er klinik — utan förpliktelse.',
  },
  {
    step: 7,
    title: 'Baserat på era svar — verkar det värt ett snack?',
    supportText: 'Ingen förpliktelse. Vi berättar vad vi kan leverera för just er klinik.',
    options: [
      { label: 'Ja, absolut — visa mig vad ni kan göra', outcome: 'continue' },
      { label: 'Nej, inte just nu', outcome: 'disqualify' },
    ],
    showGreenPanel: true,
    greenPanelTitle: 'Typiskt resultat för er klinikprofil',
    greenPanelBody: '20–50 nya patienter per månad, 163 kr per lead i snitt. Resultat inom 1 vecka.',
  },
]

export const TOTAL_FUNNEL_STEPS = funnelSteps.length

export const serviceCategories = [
  'Undersökningar',
  'Aligners',
  'Implantat',
  'Fasader',
]

export const clinicLogos = [
  { src: '/static/images/clinic-logos/clinic-1.avif', alt: 'Klinik 1' },
  { src: '/static/images/clinic-logos/clinic-2.avif', alt: 'Klinik 2' },
  { src: '/static/images/clinic-logos/clinic-3.avif', alt: 'Klinik 3' },
  { src: '/static/images/clinic-logos/clinic-4.avif', alt: 'Klinik 4' },
  { src: '/static/images/clinic-logos/clinic-5.avif', alt: 'Klinik 5' },
  { src: '/static/images/clinic-logos/clinic-6.avif', alt: 'Klinik 6' },
  { src: '/static/images/clinic-logos/clinic-7.svg', alt: 'Klinik 7' },
]

export const optionMarkers = ['A', 'B', 'C', 'D', 'E', 'F']

export interface CaseTestimonial {
  logoSrc: string
  logoAlt: string
  photoSrc: string
  photoAlt: string
  photoWidth: number
  photoHeight: number
  logoInvertInLight?: boolean
  prefix: string
  boldPart: string
  middle: string
  accentPart: string
}

export const caseTestimonials: CaseTestimonial[] = [
  {
    logoSrc: '/static/images/testimonials/tannami-logo.avif',
    logoAlt: 'Tannami Klinikk',
    photoSrc: '/static/images/testimonials/tannami-team.avif',
    photoAlt: 'Tannami Klinikk team',
    photoWidth: 774,
    photoHeight: 1024,
    boldPart: '252 nye pasienter de første 3 månedene',
    accentPart: 'økte inntektene med ytterligere ca. 550 000 kr.',
    prefix: 'Tannami fikk ',
    middle: ' med Leadcom, og ',
  },
  {
    logoSrc: '/static/images/testimonials/vital-logo.avif',
    logoAlt: 'Vital Tannhelse',
    photoSrc: '/static/images/testimonials/vital-clinic.avif',
    photoAlt: 'Vital Tannhelse klinikk',
    photoWidth: 1015,
    photoHeight: 1024,
    logoInvertInLight: true,
    boldPart: '1402 leads på 3 måneder, til 163 kr per lead.',
    accentPart: '351 nye pasienter på 30 dager.',
    prefix: 'Vital Tannhelse fikk ',
    middle: ' Rekorden deres var ',
  },
  {
    logoSrc: '/static/images/testimonials/tannami-logo.avif',
    logoAlt: 'Darya Bassari',
    photoSrc: '/static/images/testimonials/darya-interview.png',
    photoAlt: 'Darya Bassari intervju',
    photoWidth: 800,
    photoHeight: 534,
    prefix: 'Daryas klinik växte ',
    boldPart: 'från 15,9 till 76,4 miljoner kr på fyra år',
    middle: ' med hjälp av Leadcom. ',
    accentPart: '"En tillväxtresa i en klass för sig."',
  },
]
