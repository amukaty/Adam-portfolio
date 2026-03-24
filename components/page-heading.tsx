import { ReactNode } from 'react';

type PageHeadingProps = {
  title: string;
  description: ReactNode;
};

export function PageHeading({ title, description }: PageHeadingProps) {
  return (
    <section className="mb-10 space-y-3">
      <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">{title}</h1>
      <p className="max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg">{description}</p>
    </section>
  );
}
