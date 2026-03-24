import { CaseStudy } from '@/content/work';

type WorkCardProps = {
  item: CaseStudy;
};

export function WorkCard({ item }: WorkCardProps) {
  return (
    <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-card">
      <div className="mb-3 flex flex-wrap items-baseline justify-between gap-2">
        <h2 className="text-xl font-semibold text-white">{item.title}</h2>
        <p className="text-sm text-slate-400">{item.timeline}</p>
      </div>
      <p className="mb-4 text-sm font-medium text-cyan-300">{item.role}</p>
      <p className="mb-5 text-slate-300">{item.summary}</p>

      <div className="mb-5">
        <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">Impact</h3>
        <ul className="list-disc space-y-1 pl-5 text-slate-200">
          {item.impact.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-2">
        {item.stack.map((tech) => (
          <span key={tech} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
