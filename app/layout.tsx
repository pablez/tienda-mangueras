import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Doña Maria - Tuberías de Calidad | Distribuidor de tuberías PVC y Galvanizadas',
  description:
    'Distribuidor confiable de tuberías PVC, galvanizadas y accesorios para proyectos residenciales e industriales. Contacta por WhatsApp +74325440',
  keywords:
    'tuberías, PVC, galvanizadas, accesorios, distribuidor, Bolivia, plomería',
  authors: [{ name: 'Doña Maria' }],
  openGraph: {
    type: 'website',
    locale: 'es_BO',
    url: 'https://donamaria-tuberias.netlify.app',
    siteName: 'Doña Maria Tuberías',
    title: 'Doña Maria - Tuberías de Calidad',
    description:
      'Distribuidor confiable de tuberías PVC, galvanizadas y accesorios de quality premium',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Doña Maria Tuberías',
      },
    ],
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={poppins.variable}>
        {children}
      </body>
    </html>
  );
}
