import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TabTitle from "@/components/TabTitle";
import { ThemeProvider } from "@/context/ThemeContext";
import OfflineDetector from "@/components/OfflineDetector";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#6366f1",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Dhruvil Mistry | Full Stack Developer",
  description: "Full Stack Developer specializing in React, Node.js, MongoDB, and AI integrations. Explore my projects, experience, and get in touch.",
  keywords: ["Dhruvil Mistry", "Full Stack Developer", "React", "Next.js", "Node.js", "MERN", "Portfolio"],
  authors: [{ name: "Dhruvil Mistry" }],
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Dhruvil Mistry",
  },
  openGraph: {
    title: "Dhruvil Mistry | Full Stack Developer",
    description: "MERN Stack Developer & AI enthusiast. Building real-world applications.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`bg-bg-primary min-h-screen ${inter.className}`}>
        <ThemeProvider>
          <OfflineDetector />
          <TabTitle />
          <Header />
          <main className="pt-16 min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

