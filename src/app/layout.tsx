import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";
import TabTitle from "@/components/TabTitle";
import { ThemeProvider } from "@/context/ThemeContext";
import OfflineDetector from "@/components/OfflineDetector";
import JsonLd from "@/components/JsonLd";

const SITE_URL = "https://dhruvilmistry.in";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#3b82f6",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Dhruvil Mistry | Full Stack Developer — React, Node.js & AI",
  description:
    "Dhruvil Mistry is a Full Stack Developer from Gujarat, India specializing in React, Node.js, MongoDB & AI integrations. Explore projects and get in touch.",
  keywords: [
    "Dhruvil Mistry",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "MERN",
    "Portfolio",
    "Gujarat",
    "India",
    "Web Developer",
    "AI Developer",
  ],
  authors: [{ name: "Dhruvil Mistry", url: SITE_URL }],
  creator: "Dhruvil Mistry",
  publisher: "Dhruvil Mistry",
  manifest: "/manifest.json",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/profile.png", type: "image/png" }],
    shortcut: "/profile.png",
    apple: "/profile.png",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "DK Portfolio",
    startupImage: "/icons/icon-512x512.png",
  },
  openGraph: {
    title: "Dhruvil Mistry | Full Stack Developer — React, Node.js & AI",
    description:
      "Full Stack Developer from Gujarat, India. Building real-world apps with MERN stack & AI integrations.",
    url: SITE_URL,
    siteName: "Dhruvil Mistry — Portfolio",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/profile-real.jpg",
        width: 800,
        height: 800,
        alt: "Dhruvil Mistry — Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dhruvil Mistry | Full Stack Developer",
    description:
      "Full Stack Developer from Gujarat, India. MERN stack, AI integrations & published NPM packages.",
    images: ["/profile-real.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`bg-bg-primary min-h-screen ${inter.className}`}>
        <JsonLd />
        <ThemeProvider>
          <OfflineDetector />
          <TabTitle />
          <Header />
          <main className="pt-16 min-h-screen">
            {children}
          </main>
          <Footer />
          <BottomNav />
        </ThemeProvider>
      </body>
    </html>
  );
}
