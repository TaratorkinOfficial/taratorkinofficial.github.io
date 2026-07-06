/** Site-wide constants — single source of truth for contact/identity. */
export const SITE = {
  name: 'Taratorkin Official',
  url: 'https://taratorkinofficial.github.io',
  email: 'taratorkin.official@gmail.com',
  linkedin: 'https://www.linkedin.com/in/taratorkinofficial',
  description:
    'Independent mobile games studio crafting polished, retention-driven experiences since 2020.',
  foundingYear: 2020,
} as const;

/**
 * Cloudflare Web Analytics site token.
 * Get it at dash.cloudflare.com → Web Analytics → Add a site (no domain proxy
 * needed, just the JS snippet) → copy the token from the snippet and paste it
 * here. Empty string = beacon is not rendered at all.
 */
export const CF_ANALYTICS_TOKEN = '4f0e8def1e514737a965ca85fcda51ab';

export const STATS = [
  { value: '19', suffix: '', label: 'Games published' },
  { value: '10', suffix: 'M+', label: 'Downloads' },
  { value: '2020', suffix: '', label: 'Studio founded' },
  { value: '4', suffix: '', label: 'People, full stack' },
] as const;
