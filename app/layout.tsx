import type { Metadata } from "next";
import "./globals.css";
import { Inter, Lora } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-lora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "EjaGo — Freedom on the Go",
  description: "Premium bikes built for your freedom. Own your ride. Move without limits.",
  // Removed the icons object from here
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className={`${inter.variable} ${lora.variable}`}>
        {children}
      </body>
    </html>
  );
}