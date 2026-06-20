import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SITE_URL, business } from "@/lib/site";
import { localBusinessJsonLd, webSiteJsonLd, personJsonLd } from "@/lib/jsonld";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { GtmScript, GtmNoScript } from "@/components/analytics";
import { JsonLd } from "@/components/json-ld";
import { WhatsAppFloat } from "@/components/cta";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Rena.Ser | Terapia Colónica y Tratamientos Depurativos en Acassuso",
    template: "%s | Rena.Ser",
  },
  description: business.description,
  applicationName: business.name,
  authors: [{ name: business.name }],
  generator: "Next.js",
  keywords: [
    "terapia colónica",
    "hidroterapia colónica",
    "hidroterapia de colon",
    "limpieza de colon",
    "limpieza hepática",
    "desparasitación natural",
    "detox",
    "Acassuso",
    "San Isidro",
    "Zona Norte",
    "Buenos Aires",
  ],
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: `${SITE_URL}/`,
    siteName: business.name,
    title: "Rena.Ser | Terapia Colónica y Tratamientos Depurativos",
    description: business.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Rena.Ser — Hidroterapia colónica" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rena.Ser | Terapia Colónica y Tratamientos Depurativos",
    description: business.description,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/icon.png",
  },
  category: "health",
};

export const viewport: Viewport = {
  themeColor: "#1f3d34",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-AR">
      <head>
        <GtmScript />
        <link rel="preconnect" href="https://renaserhidroterapia.com" />
        <JsonLd data={[localBusinessJsonLd(), webSiteJsonLd(), personJsonLd()]} />
      </head>
      <body>
        <GtmNoScript />
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-[var(--color-forest)]"
        >
          Ir al contenido
        </a>
        <Header />
        <main id="content">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
