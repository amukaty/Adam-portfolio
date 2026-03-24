import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { SiteHeader } from '@/components/site-header';
import { siteMeta } from '@/content/site';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: siteMeta.title,
  description: siteMeta.description
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}
