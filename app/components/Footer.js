"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0a2540] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company */}
          <div>
            <h2 className="text-3xl font-bold mb-4">DriveSecure</h2>
            <p className="text-sm text-gray-300 leading-7">
              Protect your car and bike with affordable vehicle insurance
              plans. Get instant quotes, fast claim support, and reliable
              coverage for every journey.
            </p>
          </div>

          {/* Insurance Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Vehicle Insurance</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  Car Insurance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Bike Insurance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Commercial Vehicle Insurance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Third-Party Insurance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Comprehensive Insurance
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li>
                <Link href="#" className="hover:text-white">
                  Renew Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  File a Claim
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Claim Status
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>

            <div className="space-y-3 text-sm text-gray-300">
              <p>
                <strong className="text-white">Address:</strong>
                <br />
                221 Business Park,
                <br />
                New Delhi, India
              </p>

              <p>
                <strong className="text-white">Email:</strong>
                <br />
                support@drivesecure.com
              </p>

              <p>
                <strong className="text-white">Phone:</strong>
                <br />
                +91 98765 43210
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-300">
            © {new Date().getFullYear()} DriveSecure. All Rights Reserved.
          </p>

          <div className="flex gap-3">
            <Link
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-[#0a2540] transition"
            >
              <FaFacebookF />
            </Link>

            <Link
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-[#0a2540] transition"
            >
              <FaInstagram />
            </Link>

            <Link
              href="#"
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/30 hover:bg-white hover:text-[#0a2540] transition"
            >
              <FaLinkedinIn />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}