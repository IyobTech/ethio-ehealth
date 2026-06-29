import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ethio E-Health - Digital Healthcare Platform',
  description: 'Modern healthcare management system for Ethiopia',
  keywords: ['healthcare', 'medical', 'ethiopia', 'digital health'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-slate-900 text-slate-900 dark:text-white">
        {children}
      </body>
    </html>
  );
}
