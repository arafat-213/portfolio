import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Tai Arfat - Senior Full-Stack Developer",
  description: "Experienced Senior Software Developer with 6+ years in full-stack and frontend web application development.",
  keywords: ["Tai Arfat", "Full-Stack Developer", "React", "Next.js", "Node.js", "Portfolio"],
  authors: [{ name: "Tai Arfat" }],
  creator: "Tai Arfat",
  publisher: "Tai Arfat",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    title: "Tai Arfat - Senior Full-Stack Developer",
    description: "Experienced Senior Software Developer with 6+ years in full-stack and frontend web application development.",
    type: "website",
    locale: "en_US",
    siteName: "Tai Arfat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tai Arfat - Senior Full-Stack Developer",
    description: "Experienced Senior Software Developer with 6+ years in full-stack and frontend web application development.",
  },
  metadataBase: process.env.NEXT_PUBLIC_SITE_URL
    ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
    : undefined,
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
