export type Project = {
  name: string;
  description: string;
  tags: string[];
  status: 'Shipped' | 'In Progress' | 'Prototype';
  link: string;
};

export const projects: Project[] = [
  {
    name: 'Signal Notes',
    description:
      'A lightweight knowledge capture app focused on speed, context linking, and weekly reflection summaries.',
    tags: ['TypeScript', 'Next.js', 'Prisma'],
    status: 'Shipped',
    link: 'https://example.com/signal-notes'
  },
  {
    name: 'Focus Forecast',
    description:
      'A planning tool that predicts cognitive load across your week using calendar and task intensity signals.',
    tags: ['AI', 'Product Design', 'Data Visualization'],
    status: 'Prototype',
    link: 'https://example.com/focus-forecast'
  },
  {
    name: 'Crew Pulse',
    description:
      'Internal team health tracker with short, high-frequency sentiment check-ins and manager insight digests.',
    tags: ['React', 'Supabase', 'Tailwind'],
    status: 'In Progress',
    link: 'https://example.com/crew-pulse'
  }
];
