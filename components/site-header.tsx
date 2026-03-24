import Link from 'next/link';

import { navigation, siteMeta } from '@/content/site';

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-slate-800/90 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4 md:px-10">
        <Link href="/" className="text-sm font-semibold tracking-wide text-cyan-300">
          {siteMeta.name}
        </Link>
        <nav className="flex gap-5 text-sm text-slate-300">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
