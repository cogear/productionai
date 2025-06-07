import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Production AI Platform",
  description: "Streamline your production operations with automated communications, AI assistance, and comprehensive job management in one powerful platform.",
  icons: {
    icon: '/Logocon.png',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Logocon.png" />
        {/* Preconnect to S3 for faster image loading */}
        <link rel="preconnect" href="https://higgsvideo.s3.us-east-1.amazonaws.com" />
        <link rel="dns-prefetch" href="https://higgsvideo.s3.us-east-1.amazonaws.com" />
        
        {/* Preload critical images */}
        <link 
          rel="preload" 
          as="image" 
          href="/Logo.png"
          type="image/png"
        />
        <link 
          rel="preload" 
          as="image" 
          href="/hero.png"
          type="image/png"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MetaPixel pixelId="669673179306678" />
        {children}
      </body>
    </html>
  );
}
