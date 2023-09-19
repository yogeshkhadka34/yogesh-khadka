import Navbar from "@/components/common/layout/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import Footer from "@/components/common/layout/Footer";

export const metadata: Metadata = {
  title: "Yogesh Khadka",
  description: "Yogesh Khadka Portfolio Site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
      </head>
      <body className="bg-light dark:bg-dark font-primary">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
