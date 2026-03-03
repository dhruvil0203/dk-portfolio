import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import TabTitle from "@/components/TabTitle";

export const metadata: Metadata = {
  title: "Dhruvil Mistry | Full Stack Developer",
  description: "Full Stack Developer specializing in React, Node.js, MongoDB, and AI integrations. Explore my projects, experience, and get in touch.",
  keywords: ["Dhruvil Mistry", "Full Stack Developer", "React", "Next.js", "Node.js", "MERN", "Portfolio"],
  authors: [{ name: "Dhruvil Mistry" }],
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-bg-primary min-h-screen">
        <TabTitle />
        <Header />
        <main className="pt-16 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
