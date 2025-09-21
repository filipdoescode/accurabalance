import type { Metadata } from 'next';
import { DM_Sans, Roboto as FontSans } from 'next/font/google';

import { TailwindIndicator } from '@/components/tailwind-indicator';

import '../globals.css';

import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';

import { siteConfig } from '@/config/site';
import { cn } from '@/lib/utils';

const fontSans = FontSans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  variable: '--font-sans',
});

const fontHeading = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-heading',
});

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: [
    'bookkeeping',
    'accounting',
    'small business',
    'taxes',
    'financial',
    'services',
  ],
  // TODO: Icons & manifest
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon-16x16.png",
  //   apple: "/apple-touch-icon.png",
  // },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body
        className={cn(
          'bg-background min-h-screen font-sans',
          fontSans.variable,
          fontHeading.variable
        )}
      >
        <div className='flex min-h-screen flex-col'>
          <SiteHeader />

          <main className='mt-[88px] flex-1'>{children}</main>

          <SiteFooter />
        </div>

        <TailwindIndicator />
      </body>
    </html>
  );
}
