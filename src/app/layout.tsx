import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'sonner';


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Diet Plans - Download Your Perfect Diet Plan",
  description: "Browse and download personalized diet plans for your health goals",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <div className="min-h-screen flex flex-col">
          {/* <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
              <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                DietPlans
              </Link>
              <nav className="flex gap-6">
                <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
                  Browse Plans
                </Link>
                <Link href="/admin/login" className="text-sm font-medium hover:text-primary transition-colors">
                  Admin
                </Link>
              </nav>
            </div>
          </header> */}
          <Navbar />
          <main className="flex-1">
            <SessionProvider>
            {children}
                    <Toaster position="top-center" />

            </SessionProvider>
          </main>
         <Footer />
        </div>
      </body>
    </html>
  );
}
