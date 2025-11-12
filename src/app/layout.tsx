import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jwao | Desenvolvedor Web e Front-End",
  description: "Desenvolvedor Web e Front-End",
  keywords: ["Desenvolvedor Web", "Front-End", "Next.js", "Tailwind", "Landing Page", "Jwao"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-stone-950 text-stone-300 overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
