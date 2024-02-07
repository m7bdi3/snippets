import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Snippets",
  description: "Where snippets comes alive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} style={{height:"100vh"}}>
        <div className="h-full flex flex-col justify-between items-stretch">
        <NavBar />
        {children}
        <Footer />
        </div>
      </body>
    </html>
  );
}
