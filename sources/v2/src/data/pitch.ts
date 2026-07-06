/** Publisher pitch content — every claim here is the studio's own copy, preserved verbatim. */

export const PITCH_METRICS = [
  { value: '4 FTE', label: 'Team size' },
  { value: '4 wk', label: 'Preferred sprint' },
  { value: '5', label: 'Own studio titles' },
  { value: '6', label: 'Partner collabs' },
] as const;

export const PITCH_CALLOUT = `We are a compact mobile game studio building prototypes across hyper, hybrid, and casual genres — from fast HC loops to hybrid casual with meta-game depth and full casual production with progression and IAP economy. Our preferred format is a 4-week sprint — delivering a fully polished, pro-level prototype with deep mechanics, refined balance, and production-grade UA creatives. We ship on both Android and iOS, and can publish on our own Google Play and App Store developer accounts. We use AI to multiply creative and balance iterations — variants are generated fast, then benchmarked against human-made baselines before anything ships. Our founder has first-hand CrazyLabs pipeline experience.`;

export const ENGAGEMENT = `Focused sprints with a clear deliverable at the end. Every prototype ships complete — build, SDK, and creatives included. Flexible engagement: work-for-hire, rev-share, or PPP (Pay-per-prototype) — PPP is our preferred structure, but we adapt to what fits your pipeline.`;

export interface SprintFormat {
  duration: string;
  type: string;
  preferred: boolean;
  badge: string;
  features: string[];
}

export const SPRINT_FORMATS: SprintFormat[] = [
  {
    duration: '4 wk',
    type: 'Pro-level, ship-ready prototype',
    preferred: true,
    badge: 'Preferred format',
    features: [
      'Deep mechanics & refined game design',
      'Balance, progression & juice pass',
      'Full monetization: analytics + ads SDK',
      '5–6 production-grade UA creatives',
      'Dual-platform build: Android + iOS',
      'Publishable on our own store accounts',
    ],
  },
  {
    duration: '2 wk',
    type: 'Concept validation sprint',
    preferred: false,
    badge: 'Also available',
    features: [
      'Core loop proof-of-concept',
      'Android-first playable build',
      '2–3 UA hook creatives (test batch)',
      'Event-level analytics only',
      'No full monetization or balance pass',
    ],
  },
];

export interface TimelineWeek {
  num: string;
  phase: string;
  title: string;
  items: { text: string; milestone?: boolean }[];
  colorVar: string;
}

export const TIMELINE: TimelineWeek[] = [
  {
    num: 'Week 01',
    phase: 'Foundation',
    title: 'Concept & core loop',
    colorVar: '--ph-polish',
    items: [
      { text: 'Brainstorm, dev-plan, task alignment' },
      { text: 'Core mechanic prototyped' },
      { text: 'Moodboard & early assets' },
      { text: 'Style freeze · day 5', milestone: true },
    ],
  },
  {
    num: 'Week 02',
    phase: 'Build phase',
    title: 'Content & systems',
    colorVar: '--ph-dev',
    items: [
      { text: 'Final assets integrated in waves' },
      { text: 'Features, progression, tutorial' },
      { text: 'Ads SDK & analytics events wired' },
      { text: 'Feature freeze · day 10', milestone: true },
    ],
  },
  {
    num: 'Week 03',
    phase: 'Polish + UA',
    title: 'Balance & creatives',
    colorVar: '--ph-assets',
    items: [
      { text: 'Juice, balance, bug pass' },
      { text: '5–6 UA creatives rendered & stitched' },
      { text: 'Store stills, gameplay capture' },
      { text: 'QA builds · day 15', milestone: true },
    ],
  },
  {
    num: 'Week 04',
    phase: 'Release',
    title: 'Buffer & publish',
    colorVar: '--ph-rel',
    items: [
      { text: 'Test fixes (Mon–Wed)' },
      { text: 'Store listings & copy' },
      { text: 'Stores submit · day 18', milestone: true },
      { text: 'Release · day 20', milestone: true },
    ],
  },
];

export const TIMELINE_NOTE = `Hard checkpoints. Style freeze (day 5) and feature freeze (day 10) lock scope early. Week 4 is release logistics — not finishing work.`;

export const DELIVERABLES = [
  {
    title: 'Playable Android & iOS build',
    text: 'APK and iOS build ready for UA testing — stable, optimized, publisher-ready.',
  },
  {
    title: 'Analytics & ads SDK',
    text: 'Firebase, GameAnalytics, and ad network integration out of the box.',
  },
  {
    title: '5–6 UA creatives',
    text: 'Videos and statics made fully in-house by our dedicated artist.',
  },
  {
    title: 'AI-accelerated iteration',
    text: 'Creative variants and balance passes run through AI — final picks benchmarked against a human-made baseline.',
  },
  {
    title: 'Publishing on our accounts',
    text: 'We can publish on our own Google Play and App Store developer accounts — ready to go from day one.',
  },
  {
    title: 'Full source code & handoff',
    text: 'Clean Unity project, documented codebase, and smooth handoff — ready for your team to take over or scale.',
  },
] as const;

export const STRENGTHS = [
  {
    title: 'Publisher-ready by default',
    text: 'Founder knows CrazyLabs standards and publisher expectations first-hand. Every sprint ships with the SDK setup, analytics events, and creatives a publisher actually expects to receive.',
  },
  {
    title: 'AI-multiplied iteration',
    text: 'AI generates creative variants and balance passes faster than a human team alone — every output benchmarked against a human-made baseline before shipping. More tested hypotheses per sprint without compromising polish.',
  },
  {
    title: 'Proven metrics',
    text: 'D1 40%, CPI $0.80 on King’s Landing (as of 2025) — shipped via the CrazyLabs pipeline. Real numbers from a live title, not soft-launch claims.',
  },
  {
    title: 'Own dev accounts & dual-platform',
    text: 'We can publish on our own Google Play and App Store accounts on day one. Every prototype builds for both Android and iOS — no extra runway needed for store setup.',
  },
  {
    title: 'Direct line, no layers',
    text: 'Founder is your single point of contact. No PM layers, no team swaps mid-sprint. English-fluent, async-friendly, decisions land same-day.',
  },
  {
    title: 'Hard freezes, soft delivery',
    text: 'Style freeze (day 5) and feature freeze (day 10) lock scope early. Week 4 stays reserved for release logistics — not finishing work. We ship on the day we said we would.',
  },
] as const;
