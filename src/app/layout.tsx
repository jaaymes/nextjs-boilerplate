import type { Metadata } from 'next';

import '@/styles/globals.scss';
import { ThemeProvider } from '@/components/theme-provider/theme-provider';

export const metadata: Metadata = {
  title: 'Next.Js Boilerplate',
  description: 'Next.Js Boilerplate',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
