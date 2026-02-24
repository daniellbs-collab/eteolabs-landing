import type { Metadata } from 'next';
import { JetBrains_Mono, Outfit } from 'next/font/google';
import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import './globals.css';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jetbrains',
});

export const metadata: Metadata = {
  title: 'Eteo Labs | Sistemas que transformam negocios',
  description:
    'Landing comercial da Eteo Labs para projetos de transformacao de gestao: dashboards inteligentes, clinicas, varejo, barbearias e operacoes complexas.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${outfit.variable} ${jetbrains.variable}`}>
      <body className="bg-void text-gray-50 font-body antialiased selection:bg-cyan-primary/20 selection:text-cyan-primary">
        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}