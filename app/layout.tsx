import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GS Solutions Store | Toner, Ink & Refurbished Office Equipment",
  description:
    "Save up to 70% on compatible & OEM toner, ink cartridges, and certified refurbished office equipment. Flexible rentals available. Bilingual service — 30 years of experience. Call (520) 808-7203.",
  keywords:
    "toner cartridges, ink cartridges, refurbished printers, compatible toner HP Canon Brother, office supplies, office equipment rental, cheap toner, cheap ink",
  openGraph: {
    title: "GS Solutions Store | Toner, Ink & Refurbished Office Equipment",
    description:
      "Compatible & OEM toner, ink, and certified refurbished office equipment. Buy or rent. Save up to 70%.",
    url: "https://www.gssolutionsstore.com",
    siteName: "GS Solutions Store",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GS Solutions Store | Toner, Ink & Office Equipment",
    description: "Save up to 70% on toner, ink & refurbished office equipment. Bilingual service.",
  },
  alternates: { canonical: "https://www.gssolutionsstore.com" },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "GS Solutions Store",
  url: "https://www.gssolutionsstore.com",
  telephone: "+15208087203",
  description:
    "Office supplies store specializing in compatible and OEM toner cartridges, ink cartridges, and certified refurbished office equipment. Sales and rentals. Bilingual English/Spanish service.",
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Office Products",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Compatible Toner Cartridges", description: "Compatible toner for HP, Canon, Brother and more. Starting from $20." } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "OEM Toner Cartridges", description: "Original equipment manufacturer toner cartridges." } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Ink Cartridges", description: "High-yield ink for all major printer brands. From $12." } },
      { "@type": "Offer", itemOffered: { "@type": "Product", name: "Refurbished Office Equipment", description: "Certified refurbished printers, copiers, and scanners." } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Office Equipment Rental", description: "Flexible monthly rental plans for printers and copiers." } },
    ],
  },
  sameAs: ["https://ebay.us/m/R3R9Tk"],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
