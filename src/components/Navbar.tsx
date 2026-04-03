"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "@/lib/animations";
import Button from "@/components/Button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

export default function Navbar({ onEnquiryOpen }: { onEnquiryOpen?: () => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  // Animate in when menu opens
  useEffect(() => {
    if (!mobileMenuOpen || !overlayRef.current) return;

    const overlay = overlayRef.current;
    const links = overlay.querySelectorAll(".nav-link-item");
    const footer = overlay.querySelector(".nav-footer");
    const divider = overlay.querySelector(".nav-divider");

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
    tlRef.current = tl;

    tl.fromTo(overlay, { clipPath: "inset(0 0 100% 0)" }, { clipPath: "inset(0 0 0% 0)", duration: 0.6 })
      .fromTo(links, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.06 }, "-=0.25")
      .fromTo(divider, { scaleX: 0 }, { scaleX: 1, duration: 0.4 }, "-=0.3")
      .fromTo(footer, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, "-=0.2");

    return () => { tl.kill(); };
  }, [mobileMenuOpen]);

  const closeMenu = useCallback(() => {
    if (!overlayRef.current) { setMobileMenuOpen(false); return; }

    const overlay = overlayRef.current;
    gsap.to(overlay, {
      clipPath: "inset(0 0 100% 0)",
      duration: 0.4,
      ease: "power3.in",
      onComplete: () => setMobileMenuOpen(false),
    });
  }, []);

  const handleLinkClick = useCallback(() => {
    closeMenu();
  }, [closeMenu]);

  return (
    <>
      <nav className="sticky top-0 z-[60] w-full border-b border-border bg-bg-primary">
        <div className="mx-auto flex max-w-[1428px] items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="shrink-0 flex items-center gap-2 relative z-[60]">
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

          {/* Mobile Hamburger / Close */}
          <button
            className="relative z-[60] flex items-center justify-center w-10 h-10 mr-2 lg:hidden cursor-pointer"
            onClick={() => mobileMenuOpen ? closeMenu() : setMobileMenuOpen(true)}
            aria-label="Toggle menu"
          >
            <div className="relative w-6 h-5">
              <span
                className="absolute left-0 block h-[2px] rounded-full bg-text-primary transition-all duration-300"
                style={{
                  width: mobileMenuOpen ? 24 : 24,
                  top: mobileMenuOpen ? 9 : 0,
                  transform: mobileMenuOpen ? "rotate(45deg)" : "none",
                }}
              />
              <span
                className="absolute left-0 block h-[2px] rounded-full bg-text-primary transition-all duration-300"
                style={{
                  width: mobileMenuOpen ? 0 : 16,
                  top: 9,
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
              />
              <span
                className="absolute left-0 block h-[2px] rounded-full bg-text-primary transition-all duration-300"
                style={{
                  width: 24,
                  top: mobileMenuOpen ? 9 : 18,
                  transform: mobileMenuOpen ? "rotate(-45deg)" : "none",
                }}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu Overlay — starts below navbar */}
      {mobileMenuOpen && (
        <div
          ref={overlayRef}
          className="fixed left-0 right-0 bottom-0 z-[55] flex flex-col lg:hidden"
          style={{
            top: 0,
            height: "100dvh",
            backgroundColor: "var(--color-bg-primary)",
            clipPath: "inset(0 0 100% 0)",
            paddingTop: 76,
          }}
        >
          {/* Nav Links */}
          <div className="flex-1 min-h-0 flex flex-col justify-center px-8 md:px-12 overflow-y-auto py-4">
            <div className="flex flex-col gap-0">
              {navLinks.map((link, i) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="nav-link-item group flex items-baseline justify-between py-2.5 md:py-4"
                  style={{
                    borderBottom: i < navLinks.length - 1 ? "1px solid var(--color-border-light)" : "none",
                    opacity: 0,
                  }}
                  onClick={handleLinkClick}
                >
                  <span className="font-heading text-[28px] md:text-[48px] leading-[1.15] transition-all duration-300 group-hover:translate-x-3">
                    {link.label}
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-50 group-hover:translate-x-0"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>

          {/* Footer area */}
          <div className="shrink-0 px-8 md:px-12 pb-6 md:pb-10">
            <div
              className="nav-divider mb-4 md:mb-6"
              style={{
                height: 1,
                backgroundColor: "var(--color-border-light)",
                transformOrigin: "left center",
              }}
            />
            <div className="nav-footer flex items-center justify-between gap-4" style={{ opacity: 0 }}>
              <p
                className="text-[10px] md:text-xs uppercase tracking-widest"
                style={{ color: "var(--color-text-muted)" }}
              >
                Vidya Bharati International
              </p>
              <button
                className="shrink-0 text-sm font-medium px-5 py-2.5 md:px-6 md:py-3 rounded-full cursor-pointer transition-colors duration-300"
                style={{
                  backgroundColor: "var(--color-bg-dark)",
                  color: "var(--color-text-light)",
                }}
                onClick={() => { closeMenu(); setTimeout(() => onEnquiryOpen?.(), 450); }}
              >
                Enquire Now
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
