import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CommandCenter MVP',
  description: 'Facilities command center SaaS MVP for multi-site operators.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
