import '../style/globals.css';
import type { Metadata } from 'next';
import { SFPRO } from '../assets/fonts/SFPRO';
import DarkModeProvider from '@/providers/DarkModeProvider';

const sfpro = SFPRO;

export const metadata: Metadata = {
  title: 'Rasmus Elmersson',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      style={{ height: '100%', width: '100%', backgroundColor: 'black' }}
    >
      <head />
      <body className={sfpro.className}>
        <DarkModeProvider
          attribute="class"
          storageKey="nightwind-mode"
          defaultTheme="system"
          enableSystem={true}
        >
          <main>{children}</main>
        </DarkModeProvider>
      </body>
    </html>
  );
}
