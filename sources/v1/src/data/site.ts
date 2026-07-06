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

/** Cloudflare Web Analytics token (cookieless beacon; empty = not rendered). */
export const CF_ANALYTICS_TOKEN = '4f0e8def1e514737a965ca85fcda51ab';

export const STATS = [
  { value: '19', label: 'Games published' },
  { value: '10M+', label: 'Downloads' },
  { value: '2020', label: 'Studio founded' },
  { value: '4', label: 'People, full stack' },
] as const;
