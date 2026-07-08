"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Headphones, Phone } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  // { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-orange-100 bg-white/95 backdrop-blur-md shadow-sm">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-xl font-extrabold text-slate-900 sm:text-2xl lg:text-3xl">
              Arvind
            </span>
            <span className="text-xs font-semibold tracking-wide text-orange-500 sm:text-sm">
              INSURANCE CENTER
            </span>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative py-2 text-[16px] font-medium transition ${
                      isActive
                        ? "text-orange-500"
                        : "text-slate-800 hover:text-orange-500"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute bottom-0 left-0 h-[2px] bg-orange-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Contact */}
          <div className="hidden items-center gap-3 lg:flex">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100">
              <Headphones className="h-6 w-6 text-orange-500" />
            </div>

            <div>
              <p className="text-xs font-medium uppercase text-slate-500">
                Need Help?
              </p>

              <a
                href="tel:+916200255088"
                className="text-lg font-bold text-slate-900 hover:text-orange-500"
              >
                +91 62002 55088
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-lg p-2 transition hover:bg-orange-100 lg:hidden"
          >
            <Menu className="h-7 w-7 text-slate-900" />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-40 bg-black/50 transition-all duration-300 lg:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-50 h-screen w-[280px] bg-white shadow-2xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between border-b p-5">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex flex-col leading-none"
          >
            <span className="text-xl font-extrabold text-slate-900">
              Arvind
            </span>

            <span className="text-xs font-semibold tracking-wide text-orange-500">
              INSURANCE CENTER
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-lg p-2 hover:bg-orange-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation */}
        <div className="px-5 py-6">
          <ul className="space-y-2">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-lg px-4 py-3 text-base font-medium transition ${
                      isActive
                        ? "bg-orange-100 text-orange-500"
                        : "text-slate-700 hover:bg-orange-50 hover:text-orange-500"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact Section */}
        <div className="absolute bottom-0 left-0 w-full border-t bg-orange-50 p-5">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100">
              <Phone className="h-5 w-5 text-orange-500" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase text-slate-500">
                Call Us
              </p>

              <a
                href="tel:+916200255088"
                className="text-lg font-bold text-slate-900 hover:text-orange-500"
              >
                +91 62002 55088
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}