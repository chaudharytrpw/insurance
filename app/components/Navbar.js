"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Headphones } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  // { label: "Process", href: "/process" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0 right-0 z-[9999] w-full border-b border-orange-100 bg-orange-50/95 shadow-md backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-extrabold text-slate-900 sm:text-3xl"
          >
            Autowa<span className="text-orange-500">.</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 md:flex lg:gap-10">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(link.href);

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative font-medium transition-all duration-300 ${
                      isActive
                        ? "text-orange-500"
                        : "text-slate-800 hover:text-orange-500"
                    }`}
                  >
                    {link.label}

                    {/* Active Underline */}
                    <span
                      className={`absolute -bottom-1 left-0 h-[2px] bg-orange-500 transition-all duration-300 ${
                        isActive ? "w-full" : "w-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Contact */}
          <div className="hidden items-center gap-3 md:flex">
            <Headphones
              className="h-8 w-8 text-slate-900"
              strokeWidth={1.75}
            />

            <div>
              <p className="text-xs font-medium text-slate-700">
                NEED HELP? CALL US
              </p>

              <a
                href="tel:18009876543"
                className="text-lg font-bold text-orange-500 transition-colors hover:text-orange-600"
              >
                1800 9876 543
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="rounded-md p-2 text-slate-900 transition hover:bg-orange-100 md:hidden"
          >
            <Menu className="h-7 w-7" />
          </button>
        </nav>
      </header>

      {/* Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-[9998] bg-black/50 transition-all duration-300 md:hidden ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 right-0 z-[9999] h-screen w-72 bg-white shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between border-b px-5 py-5">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="text-2xl font-extrabold text-slate-900"
          >
            Autowa<span className="text-orange-500">.</span>
          </Link>

          <button
            onClick={() => setIsOpen(false)}
            className="rounded-md p-2 transition hover:bg-orange-100"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <ul className="space-y-2 px-5 py-6">
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
                  className={`block rounded-lg px-4 py-3 text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-orange-100 text-orange-500"
                      : "text-slate-800 hover:bg-orange-100 hover:text-orange-500"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Bottom Contact */}
        <div className="absolute bottom-0 left-0 w-full border-t bg-orange-50 px-5 py-5">
          <div className="flex items-center gap-3">
            <Headphones
              className="h-8 w-8 text-slate-900"
              strokeWidth={1.75}
            />

            <div>
              <p className="text-xs font-medium text-slate-700">
                NEED HELP? CALL US
              </p>

              <a
                href="tel:18009876543"
                className="text-lg font-bold text-orange-500 transition-colors hover:text-orange-600"
              >
                1800 9876 543
              </a>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}