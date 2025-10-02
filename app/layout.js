import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MetaPixel from "@/components/MetaPixel";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL('https://www.productionai.ai'),
  title: {
    default: "Production AI Platform - Construction Management Software",
    template: "%s | Production AI Platform"
  },
  description: "Streamline your construction operations with AI-powered automated communications, task management, and comprehensive job tracking. Integrates with AccuLynx and JobNimbus.",
  keywords: ["construction management software", "production AI", "contractor software", "job management platform", "construction CRM", "roofing software", "AI construction", "AccuLynx integration", "JobNimbus integration", "automated contractor communications"],
  authors: [{ name: "Production AI" }],
  creator: "Production AI",
  publisher: "Production AI",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/Logocon.png',
    apple: '/Logocon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.productionai.ai',
    siteName: 'Production AI Platform',
    title: 'Production AI Platform - Construction Management Software',
    description: 'Streamline your construction operations with AI-powered automated communications, task management, and comprehensive job tracking.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Production AI Platform Dashboard',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Production AI Platform - Construction Management Software',
    description: 'Streamline your construction operations with AI-powered automated communications, task management, and comprehensive job tracking.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here when available
    // google: 'your-google-search-console-verification-code',
    // Note: Google Analytics (G-LTD4JE28C3) is configured via GoogleAnalytics component
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
        <GoogleAnalytics />
        <StructuredData />
        <MetaPixel pixelId="669673179306678" />
        {children}
      </body>
    </html>
  );
}
