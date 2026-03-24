import Link from 'next/link';

import { Project } from '@/content/projects';

const statusStyles: Record<Project['status'], string> = {
  Shipped: 'bg-emerald-500/20 text-emerald-300',
  'In Progress': 'bg-amber-500/20 text-amber-300',
  Prototype: 'bg-violet-500/20 text-violet-300'
};

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-card">
      <div>
        <div className="mb-3 flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-white">{project.name}</h2>
          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[project.status]}`}>
            {project.status}
          </span>
        </div>
        <p className="mb-4 text-slate-300">{project.description}</p>
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-slate-700 px-3 py-1 text-xs text-slate-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
      <Link href={project.link} className="text-sm font-medium text-cyan-300 transition hover:text-cyan-200">
        View project →
      </Link>
    </article>
  );
}
