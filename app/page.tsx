import Link from 'next/link';

import { Container } from '@/components/container';
import { hero, siteMeta, strengths } from '@/content/site';

export default function HomePage() {
  return (
    <Container>
      <main className="space-y-14">
        <section className="space-y-6 pt-6">
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300">{siteMeta.location}</p>
          <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-white md:text-6xl">{hero.heading}</h1>
          <p className="max-w-2xl text-lg leading-relaxed text-slate-300">{hero.intro}</p>
          <div className="flex flex-wrap gap-3">
            <Link
              href={hero.ctaPrimary.href}
              className="rounded-full bg-cyan-300 px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:bg-cyan-200"
            >
              {hero.ctaPrimary.label}
            </Link>
            <Link
              href={hero.ctaSecondary.href}
              className="rounded-full border border-slate-700 px-5 py-2.5 text-sm font-semibold text-slate-100 transition hover:border-slate-500"
            >
              {hero.ctaSecondary.label}
            </Link>
          </div>
        </section>

        <section>
          <h2 className="mb-5 text-2xl font-semibold text-white">What I bring</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {strengths.map((item) => (
              <article key={item.title} className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
                <h3 className="mb-2 text-lg font-medium text-cyan-200">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900 to-slate-950 p-6">
          <h2 className="mb-2 text-xl font-semibold text-white">Let’s build something meaningful.</h2>
          <p className="mb-4 max-w-2xl text-slate-300">
            I’m available for product leadership roles and select consulting engagements.
          </p>
          <a href={`mailto:${siteMeta.email}`} className="font-semibold text-cyan-300 hover:text-cyan-200">
            {siteMeta.email}
          </a>
        </section>
      </main>
    </Container>
  );
}
