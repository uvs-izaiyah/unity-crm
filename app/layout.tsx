import './globals.css';
import type { Metadata } from 'next';
import { Sidebar } from './components/Sidebar';
import { TopBar } from './components/TopBar';

export const metadata: Metadata = {
  title: 'Command Center CRM',
  description: 'Brain-friendly CRM for solo founders running multiple brands.'
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-midnight text-ivory">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <TopBar />
            <div className="flex-1 px-8 py-8">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
