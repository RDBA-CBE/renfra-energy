import { Geist, Geist_Mono } from "next/font/google";
import { Manrope } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";
import DisableRightClick from "@/components/DisableRightClick";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
})

export const metadata = {
  title: "Renfra Energy",
  description: "As a fast-growing turkey solution provider for clean energy in the region, Renfra Energy takes pride in the fact that the company has been acting as a catalyst in the renewable energy landscape by bringing positive changes that creates a greener and a sustainable future! Renfra Energy is a green-field project developer and provides end-to-end solutions for wind, solar and energy storage that are critical to meet the power demands of industrial, commercial and residential.",
      keywords: [
        "Renfra Energy in Indsia",
        "Wind Energy",
        "Solar Power Plants",
        "Battery Energy Storage Systems",
        "Hybrid Renewable Solutions ",
        "Commercial & Industrial",
        "Operations & Maintenance",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" as="image" />
        {/* <link rel="preload" href="/images/favicon.svg" as="image" /> */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${manrope.variable} antialiased`}
      >
        {/* <DisableRightClick /> */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
