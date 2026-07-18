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
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company */}
          <div>
            <h2 className="text-2xl font-bold">
              Arvind
              <span className="text-orange-500"> Insurance Center</span>
            </h2>

            <p className="mt-2 text-sm font-medium text-orange-400">
              Car • Bike • Commercial Vehicle Insurance
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-300">
              Arvind Insurance Center is an authorized vehicle insurance
              advisor providing Car Insurance, Bike Insurance, Commercial
              Vehicle Insurance, Policy Renewal and Claim Assistance in
              Muzaffarpur, Bihar. We help customers compare plans from
              leading insurance companies and get the best coverage at
              affordable prices.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Tata AIG",
                "Shriram",
                "Go Digit",
                "United India",
                "Bajaj Allianz",
              ].map((company) => (
                <span
                  key={company}
                  className="rounded-full bg-orange-500/20 px-3 py-1 text-xs text-orange-300"
                >
                  {company}
                </span>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Vehicle Insurance Services
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>Car Insurance</li>
              <li>Bike Insurance</li>
              <li>Commercial Vehicle Insurance</li>
              <li>Truck Insurance</li>
              <li>Bus Insurance</li>
              <li>GCV Insurance</li>
              <li>EV / E-Rickshaw Insurance</li>
              <li>Insurance Renewal</li>
              <li>Claim Assistance</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="/" className="transition hover:text-orange-500">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-orange-500"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-orange-500"
                >
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className="mt-8 flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-orange-500" />

              <span className="text-sm text-gray-300">
                Authorized Vehicle Insurance Advisor
              </span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Contact Us
            </h3>

            <div className="space-y-5 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-orange-500" />

                <p>
                  Ladaura Chowk,
                  <br />
                  By pass Patna Road,
                  <br />
                  Muzaffarpur, Bihar
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500" />

                <a
                  href="tel:+916200255088"
                  className="transition hover:text-orange-500"
                >
                  +91 6200255088
                </a>
              </div>

              <div className="flex items-center gap-3">
                <MessageCircle className="h-5 w-5 text-orange-500" />

                <a
                  href="https://wa.me/918051266584"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-orange-500"
                >
                  +91 8051266584
                </a>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <Link
                href="https://www.facebook.com/share/1D25e7SrjM/"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-orange-500"
              >
                <FaFacebookF />
              </Link>

              <Link
                href="https://www.instagram.com/kumar_sharma_arvind"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-orange-500"
              >
                <FaInstagram />
              </Link>

              <Link
                href="https://www.linkedin.com/in/arvind-kumar-8a8335237/"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition hover:bg-orange-500"
              >
                <FaLinkedinIn />
              </Link>

              <a
                href="https://wa.me/918051266584"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-green-600 transition hover:bg-green-700"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-5 text-center text-sm text-gray-400 md:flex-row">
          <p>
            © {year} Arvind Insurance Center. All Rights Reserved.
          </p>

          <p>
            Serving Muzaffarpur, Bihar with trusted Vehicle Insurance
            Solutions.
          </p>
        </div>
      </div>
    </footer>
  );
}