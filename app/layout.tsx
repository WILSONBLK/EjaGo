import type { Metadata } from "next";
import "./globals.css";
import { Montserrat, Playfair_Display } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
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
      <body className={`${montserrat.variable} ${playfair.variable}`}>
        {children}
      </body>
    </html>
  );
}