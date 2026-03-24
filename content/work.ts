export type CaseStudy = {
  slug: string;
  title: string;
  role: string;
  timeline: string;
  summary: string;
  impact: string[];
  stack: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'onboarding-revamp',
    title: 'SaaS Onboarding Revamp',
    role: 'Lead Product Designer',
    timeline: '2024 · 4 months',
    summary:
      'Redesigned activation flow for a B2B platform, reducing time-to-value and boosting first-session completion.',
    impact: ['+31% activation rate', '-24% support tickets', '+18 NPS points among new users'],
    stack: ['Figma', 'Next.js', 'Amplitude', 'Storybook']
  },
  {
    slug: 'analytics-command-center',
    title: 'Analytics Command Center',
    role: 'Senior Product Manager',
    timeline: '2023 · 6 months',
    summary:
      'Delivered a multi-source analytics dashboard that gave account teams near real-time customer health visibility.',
    impact: ['45% faster account reviews', '+12% expansion pipeline', 'Adopted by 3 global regions'],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Looker']
  },
  {
    slug: 'mobile-checkout',
    title: 'Mobile Checkout Optimization',
    role: 'Product Lead',
    timeline: '2022 · 5 months',
    summary:
      'Simplified mobile checkout with progressive disclosure and smarter defaults for returning shoppers.',
    impact: ['+14% checkout conversion', '-19% drop-off at payment', '+9% repeat purchase rate'],
    stack: ['React Native', 'Stripe', 'Segment', 'A/B Testing']
  }
];
