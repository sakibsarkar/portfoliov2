import LenisProvider from "@/components/Provider/LenisProvider";
import { Footer } from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import "lenis/dist/lenis.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nazmul Islam Sakib",
    template: "%s | Nazmul Islam Sakib - Fullstack Developer",
  },
  description:
    "Explore the finest collection of stylish, high-quality clothing for all your fashion needs.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Nazmul Islam Sakib - Fullstack Developer",
    description:
      "Full Stack Developer with a strong foundation in building dynamic, scalable, and user-friendly web applications. With expertise in Next.js, Node.js, React, Prisma, SQL, JavaScript, and TypeScript, I craft seamless solutions that merge intuitive front-end interfaces with robust back-end systems.",
    url: "https://nazmul-islam-sakib.vercel.app/",
    siteName: "Nazmul Islam Sakib",
    images: [
      {
        url: "/images/assets/me.jpg",
        width: 1200,
        height: 630,
        alt: "FEROX - Premium Clothing for Every Occasion",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="rcQLrTr-CizMHtLkFInIIfNhLLe6W6mGfv7dg8r6aTk"
      />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <LenisProvider>{children}</LenisProvider>
        <Footer />
        <Toaster position="top-center" richColors={true} />
      </body>
    </html>
  );
}
