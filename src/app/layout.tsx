import type { Metadata } from "next";
import { Urbanist, MuseoModerno } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const museoModerno = MuseoModerno({
  variable: "--font-museo",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "CMS T&amp;M - Reliable Mobility. Structured Operations",
  description: "Proud operator of the Lekki-Ajah Transport Corridor, delivering safe, regulated, and reliable mobility solutions for Lagos residents.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
      <body  className={`${urbanist.variable} ${museoModerno.variable} antialiased`}>
        <Navbar />

        <main className="">{children}</main>

        <Footer />
      </body>
    </html>
  );
}


