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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://eteolabs.com.br';
const siteName = 'Eteo Labs';
const defaultTitle = 'Sistemas que transformam negócios';
const defaultDescription =
  'Landing comercial da Eteo Labs para projetos de transformação de gestão: dashboards inteligentes, empresas da área da saúde, comércios complexos, redes de serviços premium e operações complexas.';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteName} | ${defaultTitle}`,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName,
    title: `${siteName} | ${defaultTitle}`,
    description: defaultDescription,
    images: [
      {
        url: '/eteo-labs-logo.png',
        width: 1200,
        height: 630,
        alt: 'Eteo Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${siteName} | ${defaultTitle}`,
    description: defaultDescription,
    images: ['/eteo-labs-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/eteo-labs-logo.png`,
    sameAs: [],
    brand: {
      '@type': 'Brand',
      name: siteName,
      slogan: defaultTitle,
    },
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteName,
    url: siteUrl,
    inLanguage: 'pt-BR',
    description: defaultDescription,
  };

  return (
    <html lang="pt-BR" className={`${outfit.variable} ${jetbrains.variable}`}>
      <body className="bg-void text-gray-50 font-body antialiased selection:bg-cyan-primary/20 selection:text-cyan-primary">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />

        <SmoothScroll>
          <Navbar />
          <main className="min-h-screen pt-20">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
