import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://arvao.ca'),
  title: "Arvado - Transform Your Business with 24/7 AI Phone Agents",
  description: "Leverage cutting-edge artificial intelligence to provide exceptional customer service around the clock, driving efficiency and customer satisfaction to new heights",
  keywords: "AI phone agents, customer service automation, business communication, 24/7 support, artificial intelligence",
  authors: [{ name: "Arvado Team" }],
  openGraph: {
    title: "Arvado - AI Phone Agents",
    description: "Transform your business with 24/7 AI phone agents",
    type: "website",
    locale: "en_US",
    url: 'https://arvao.ca',
  },
  twitter: {
    card: "summary_large_image",
    title: "Arvado - AI Phone Agents",
    description: "Transform your business with 24/7 AI phone agents",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
