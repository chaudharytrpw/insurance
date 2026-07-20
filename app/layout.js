import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import WhatsAppButton from "./components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://arvindinsurance.com"),

  verification: {
    google: "WI3DDWaGtV4EQeSl7h-XccZ01-xqVUF1JoLPld419iw",
  },

  title: {
    default:
      "Arvind Insurance Center",
    template: "%s | Arvind Insurance Center",
  },

  description:
    "Arvind Insurance Center is an authorized vehicle insurance advisor in Muzaffarpur, Bihar. Get Car Insurance, Bike Insurance, Commercial Vehicle Insurance, Policy Renewal, and Claim Assistance at affordable prices.",

  keywords: [
    "Car Insurance",
    "Bike Insurance",
    "Commercial Vehicle Insurance",
    "Vehicle Insurance",
    "Motor Insurance",
    "Car Insurance Renewal",
    "Bike Insurance Renewal",
    "Insurance Renewal",
    "Insurance Claim Assistance",
    "Car Insurance Muzaffarpur",
    "Bike Insurance Muzaffarpur",
    "Commercial Vehicle Insurance Muzaffarpur",
    "Insurance Agent Muzaffarpur",
    "Arvind Insurance Center",
  ],

  authors: [{ name: "Arvind Insurance Center" }],
  creator: "Arvind Insurance Center",
  publisher: "Arvind Insurance Center",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Arvind Insurance Center | Car, Bike & Commercial Vehicle Insurance",
    description:
      "Affordable Car, Bike & Commercial Vehicle Insurance with easy renewal and claim assistance in Muzaffarpur.",
    url: "https://arvindinsurance.com",
    siteName: "Arvind Insurance Center",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arvind Insurance Center",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Arvind Insurance Center",
    description:
      "Car, Bike & Commercial Vehicle Insurance in Muzaffarpur.",
    images: ["/og-image.jpg"],
  },

  // icons: {
  //   icon: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  // },

  category: "Vehicle Insurance",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1 pt-19">{children}</main>
        <WhatsAppButton/>
        <Toaster position="top-right" />
        <Footer />
      </body>
    </html>
  );
}
