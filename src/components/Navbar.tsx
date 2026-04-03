"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar({ onEnquiryOpen }: { onEnquiryOpen?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-bg-primary">
      <div className="mx-auto flex max-w-[1428px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="shrink-0 flex items-center gap-2">
          <Image
            src="https://static.vecteezy.com/system/resources/previews/046/487/447/non_2x/education-logo-illustration-black-and-white-free-vector.jpg"
            alt="Vidya Bharati Logo"
            width={60}
            height={60}
            className="object-contain"
          />
          <span className="text-xl font-bold font-heading tracking-tight text-text-primary">
            Vidya Bharati
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden items-center gap-6 text-sm font-medium text-text-primary lg:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="transition-opacity duration-300 hover:opacity-70"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-4 lg:flex">
          <Button onClick={onEnquiryOpen}>Enquire Now</Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex items-center justify-center lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <Image
            src="/images/icons/hamburger.svg"
            alt="Menu"
            width={24}
            height={24}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="flex flex-col gap-4 border-t border-border bg-bg-primary px-6 py-6 text-sm font-medium text-text-primary lg:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="py-2 transition-opacity duration-300 hover:opacity-70"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button className="mt-2 text-center" onClick={() => { setMobileMenuOpen(false); onEnquiryOpen?.(); }}>
            Enquire Now
          </Button>
        </div>
      )}
    </nav>
  );
}
