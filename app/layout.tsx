import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Command Center CRM',
  description: 'Brain-friendly CRM for solo founders running multiple brands.'
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 text-slate-900">
        {children}
      </body>
    </html>
  );
}
