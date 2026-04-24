"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "/about" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#benefits" },
  { label: "Testimonials", href: "#stories" },
  { label: "FAQ", href: "#faq" },
];

const exploreLinks = [
  { label: "Results", href: "#achievements" },
  { label: "Gallery", href: "/gallery" },
  { label: "Services", href: "#services" },
];

const contactLinks = [
  { label: "info@vidyabharati.edu.in", href: "mailto:info@vidyabharati.edu.in" },
  { label: "+91 11 2345 6789", href: "tel:+911123456789" },
  { label: "Sector 15, Gurugram, Haryana", href: "#" },
];

const socialIcons = [
  { src: "/images/social/linkedin.svg", alt: "LinkedIn", href: "#" },
  { src: "/images/social/instagram.svg", alt: "Instagram", href: "#" },
  { src: "/images/social/twitter.svg", alt: "Twitter", href: "#" },
];

export default function Footer({ onEnquiryOpen }: { onEnquiryOpen?: () => void }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer
      className="bg-[#222222] text-[#FFFDF9] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/footer/footer-bg.avif')",
      }}
    >
      {/* Main footer content */}
      <div
        className="px-4 py-10 md:px-6 md:py-16 mx-auto max-w-[1428px]"
      >
        {/* ── Top Banner ── */}
        <div
          className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between pb-12 border-b border-white/10"
        >
          {/* Left: Text + Button */}
          <div className="flex flex-col gap-6 max-w-[520px]">
            <p
              className="text-[18px] md:text-[24px] font-body leading-[1.4] text-white"
            >
              <em className="font-heading italic"
              >
                A nurturing environment
              </em>{" "}
              where Indian values meet academic excellence and character development
            </p>
            <div>
              <Button variant="primary" onClick={onEnquiryOpen}>
                Apply Now
              </Button>
            </div>
          </div>

        </div>

        {/* ── Navigation Columns ── */}
        <div
          className="grid grid-cols-2 gap-10 pt-12 md:grid-cols-4 pb-12"
        >
          {/* Column 1: Quick Links */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase text-white/60 mb-4 tracking-[0.05em]">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase text-white/60 mb-4 tracking-[0.05em]">
              Explore
            </h4>
            <ul className="flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase text-white/60 mb-4 tracking-[0.05em]">
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-white/80 transition-colors duration-300 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect + Newsletter */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase text-white/60 mb-4 tracking-[0.05em]">
              Connect
            </h4>

            {/* Newsletter */}
            <div className="mt-6">
              <p className="font-body text-sm font-semibold uppercase text-white/60 mb-4 tracking-[0.05em]"
              >
                Subscribe to our newsletter
              </p>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 py-2.5 px-3.5 rounded-md border-none bg-[#333333] text-white font-body text-sm outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 transition-opacity hover:opacity-80 py-2.5 px-4 rounded-md border-none bg-white text-[#222222] font-body text-sm font-medium cursor-pointer duration-300"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ── CBSE Affiliation + Map ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start pb-8 border-b border-white/10"
        >
          {/* CBSE Affiliation Details */}
          <div>
            <h4 className="font-body text-sm font-semibold uppercase text-white/60 mb-4 tracking-[0.05em]">
              Affiliation &amp; Recognition
            </h4>
            <div className="flex flex-col gap-3">
              {[
                { label: "CBSE Affiliation No.", value: "2730XXX" },
                { label: "School Code", value: "XXXXX" },
                { label: "Estd.", value: "1995" },
                { label: "Board", value: "CBSE, New Delhi" },
                { label: "Classes", value: "Nursery to XII" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-2">
                  <span className="text-xs text-white/40 min-w-[140px]">
                    {item.label}
                  </span>
                  <span className="text-[13px] text-white/80 font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="rounded-[6px] overflow-hidden aspect-video">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0!2d77.03!3d28.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM2LjAiTiA3N8KwMDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              className="border-0 invert-[.9] hue-rotate-180"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Vidya Bharati International School Location"
            />
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="flex flex-col items-center justify-between gap-4 md:flex-row pt-6 border-t border-white/10"
        >
          {/* Left: Copyright */}
          <p className="font-body text-xs text-white/50"
          >
            &copy; 2026 Vidya Bharati International School. All rights reserved.
          </p>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4">
            {socialIcons.map((icon) => (
              <Link
                key={icon.alt}
                href={icon.href}
                aria-label={icon.alt}
                className="transition-opacity hover:opacity-100 opacity-60 duration-300"
              >
                <Image
                  src={icon.src}
                  alt={icon.alt}
                  width={20}
                  height={20}
                />
              </Link>
            ))}
          </div>
        </div>

        {/* ── Legal Disclaimer ── */}
        <div className="mt-6">
          <p className="font-body text-[10px] leading-[1.6] text-white/30"
          >
            The information provided on this website is for general
            informational purposes only and does not constitute professional
            advice. Vidya Bharati International School strives to ensure the
            accuracy of all published content, including academic programmes,
            schedules, and policies, but reserves the right to make changes at
            any time without prior notice. Individual student outcomes may vary.
            Vidya Bharati International School does not discriminate on the basis
            of race, colour, religion, gender, national origin, or disability in
            its educational programmes, activities, or employment practices.
          </p>
        </div>
      </div>
    </footer>
  );
}
