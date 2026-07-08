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
  title: "Arvind Insurance Center | Car & Bike Insurance",
  description:
    "Arvind Insurance Center provides Car Insurance, Bike Insurance, Commercial Vehicle Insurance, Insurance Renewal, New Policy, and Claim Assistance at the best prices.",
  keywords: [
    "Car Insurance",
    "Bike Insurance",
    "Vehicle Insurance",
    "Commercial Vehicle Insurance",
    "Car Insurance Renewal",
    "Bike Insurance Renewal",
    "Motor Insurance",
    "Insurance Claim",
    "Arvind Insurance Center",
  ],
  authors: [{ name: "Arvind Insurance Center" }],
  creator: "Arvind Insurance Center",
  publisher: "Arvind Insurance Center",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Arvind Insurance Center | Vehicle Insurance",
    description:
      "Get affordable Car, Bike, and Commercial Vehicle Insurance with easy renewals and claim support.",
    type: "website",
  },
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
