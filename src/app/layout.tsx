import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { cn, constructMetadata } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });


export const metadata = constructMetadata()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link rel="msapplication-TileColor" content="#da532c" />
        <link rel="theme-color" content="#ffffff" />
      </head>
      <body className={cn('min-h-screen font-sans antialiased grainy', inter.className)}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
