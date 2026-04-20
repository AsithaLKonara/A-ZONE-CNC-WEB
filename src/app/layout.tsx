import type { Metadata } from "next";
import { Orbitron, Poppins, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "A ZONE | CNC & Laser Solutions",
  description: "High-precision CNC cutting, laser engraving, and custom fabrication with a futuristic touch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body
        className={`${orbitron.variable} ${poppins.variable} ${spaceGrotesk.variable} font-poppins bg-background text-foreground min-h-screen flex flex-col`}
      >
        <Navbar />
        {children}
        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}
