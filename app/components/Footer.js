"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import {
  MapPin,
  Phone,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold">
              Arvind
              <span className="text-orange-500"> Insurance Center</span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-300">
              Authorized Vehicle Insurance Advisor providing fast insurance
              quotations, policy renewals and claim assistance for all major
              insurance companies.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs">
                Tata AIG
              </span>

              <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs">
                Shriram
              </span>

              <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs">
                GoDigit
              </span>

              <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs">
                United India
              </span>

              <span className="rounded-full bg-orange-500/20 px-3 py-1 text-xs">
                Bajaj Allianz
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Insurance Services
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>Motorcycle Insurance</li>
              <li>Private Car Insurance</li>
              <li>Bus Insurance</li>
              <li>Truck Insurance</li>
              <li>GCV Insurance</li>
              <li>EV / E-Rickshaw Insurance</li>
              <li>Commercial Vehicle Insurance</li>
              <li>Shop Insurance</li>
              <li>Term Insurance</li>
              <li>General Insurance</li>
              <li>Accident Insurance</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>
                <Link href="/about">About Us</Link>
              </li>

              <li>
                <Link href="/services">Services</Link>
              </li>

              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>

            <div className="mt-8 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-orange-500" />

              <span className="text-sm text-gray-300">
                Authorized Insurance Advisor
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact Us
            </h3>

            <div className="space-y-5 text-sm text-gray-300">
              <div className="flex gap-3">
                <MapPin className="mt-1 h-5 w-5 text-orange-500" />

                <p>
                  Ladaura,
                  <br />
                  Chawk Near Patna Bypass Road
                </p>
              </div>

              <div className="flex gap-3">
                <Phone className="h-5 w-5 text-orange-500" />

                <a
                  href="tel:6200255088"
                  className="hover:text-orange-500"
                >
                  6200255088
                </a>
              </div>

              <div className="flex gap-3">
                <MessageCircle className="h-5 w-5 text-orange-500" />

                <a
                  href="https://wa.me/918051266584"
                  target="_blank"
                  className="hover:text-orange-500"
                >
                  8051266584
                </a>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href="https://www.facebook.com/share/1D25e7SrjM/"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:bg-orange-500"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="https://www.instagram.com/kumar_sharma_arvind?utm_source=qr&igsh=aHc4OTliYTF0OTdi"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:bg-orange-500"
              >
                <FaInstagram />
              </Link>

              <Link
                href="https://www.linkedin.com/in/arvind-kumar-8a8335237/"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 hover:bg-orange-500"
              >
                <FaLinkedinIn />
              </Link>

              <a
                href="https://wa.me/918051266584"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 hover:bg-green-700"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-sm text-gray-400 md:flex-row">
          <p>
            © {new Date().getFullYear()} Arvind Insurance Center. All Rights
            Reserved.
          </p>

          <p>Designed for Mr Developer chaudhary.</p>
        </div>
      </div>
    </footer>
  );
}