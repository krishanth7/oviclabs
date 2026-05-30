import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://oviclabs.com'),
  title: "OVIC Labs | Autonomous Systems & Advanced Robotics",
  description: "Pioneering the future of advanced robotic mobility, fail-safe security systems, and global fleet orchestration platforms.",
  keywords: ["OVIC Labs", "Robotics", "Autonomous Navigation", "Fleet Orchestration", "Enterprise Robotics", "Artificial Intelligence", "Mobility Engineering"],
  authors: [{ name: "OVIC Labs Engineering" }],
  creator: "OVIC Labs",
  publisher: "OVIC Labs International",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "OVIC Labs | Autonomous Systems & Advanced Robotics",
    description: "Designing dynamic physical architectures and versatile locomotion systems for complex operational environments.",
    url: "https://oviclabs.com",
    siteName: "OVIC Labs",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "OVIC Labs Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OVIC Labs | Autonomous Systems & Advanced Robotics",
    description: "Pioneering next-generation enterprise-grade robotic systems.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-gray-50 text-neutral-900 flex flex-col font-sans">
        <main className="flex-grow">
          {children}
        </main>
        <SpeedInsights />
      </body>
    </html>
  );
}
