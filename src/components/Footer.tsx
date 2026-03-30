"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

const quickLinks = [
  { label: "Home", href: "#hero" },
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#benefits" },
  { label: "Testimonials", href: "#stories" },
  { label: "FAQ", href: "#faq" },
];

const exploreLinks = [
  { label: "Admissions", href: "#contact" },
  { label: "Services", href: "#services" },
  { label: "Apply Now", href: "#contact" },
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

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <footer
      style={{
        backgroundColor: "#222222",
        color: "#FFFDF9",
      }}
    >
      {/* Main footer content */}
      <div
        style={{
          padding: "64px 24px",
          maxWidth: 1428,
          margin: "0 auto",
        }}
      >
        {/* ── Top Banner ── */}
        <div
          className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between"
          style={{
            paddingBottom: 48,
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Left: Text + Button */}
          <div className="flex flex-col gap-6" style={{ maxWidth: 520 }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 24,
                lineHeight: 1.4,
                color: "#FFFFFF",
              }}
            >
              <em
                style={{
                  fontFamily: '"Libre Caslon Condensed", Georgia, serif',
                  fontStyle: "italic",
                }}
              >
                A nurturing environment
              </em>{" "}
              where Indian values meet academic excellence and character development
            </p>
            <div>
              <Button variant="primary" href="#admissions">
                Apply Now
              </Button>
            </div>
          </div>

        </div>

        {/* ── Navigation Columns ── */}
        <div
          className="grid grid-cols-2 gap-10 pt-12 md:grid-cols-4"
          style={{ paddingBottom: 48 }}
        >
          {/* Column 1: Quick Links */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 600,
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.6)",
                marginBottom: 16,
                letterSpacing: "0.05em",
              }}
            >
              Quick Links
            </h4>
            <ul className="flex flex-col gap-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "rgba(255, 255, 255, 0.8)",
                      transitionDuration: "var(--transition-base)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#FFFFFF")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Explore */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 600,
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.6)",
                marginBottom: 16,
                letterSpacing: "0.05em",
              }}
            >
              Explore
            </h4>
            <ul className="flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "rgba(255, 255, 255, 0.8)",
                      transitionDuration: "var(--transition-base)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#FFFFFF")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 600,
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.6)",
                marginBottom: 16,
                letterSpacing: "0.05em",
              }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              {contactLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors"
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 14,
                      color: "rgba(255, 255, 255, 0.8)",
                      transitionDuration: "var(--transition-base)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "#FFFFFF")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)")
                    }
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Connect + Newsletter */}
          <div>
            <h4
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                fontWeight: 600,
                textTransform: "uppercase",
                color: "rgba(255, 255, 255, 0.6)",
                marginBottom: 16,
                letterSpacing: "0.05em",
              }}
            >
              Connect
            </h4>

            {/* Newsletter */}
            <div style={{ marginTop: 24 }}>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "rgba(255, 255, 255, 0.6)",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  marginBottom: 12,
                }}
              >
                Subscribe to our newsletter
              </p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    flex: 1,
                    padding: "10px 14px",
                    borderRadius: 6,
                    border: "none",
                    backgroundColor: "#333333",
                    color: "#FFFFFF",
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    outline: "none",
                  }}
                />
                <button
                  type="submit"
                  className="shrink-0 transition-opacity hover:opacity-80"
                  style={{
                    padding: "10px 16px",
                    borderRadius: 6,
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    color: "#222222",
                    fontFamily: "var(--font-body)",
                    fontSize: 14,
                    fontWeight: 500,
                    cursor: "pointer",
                    transitionDuration: "var(--transition-base)",
                  }}
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
          style={{
            paddingTop: 24,
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          {/* Left: Copyright */}
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 12,
              color: "rgba(255, 255, 255, 0.5)",
            }}
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
                className="transition-opacity hover:opacity-100"
                style={{
                  opacity: 0.6,
                  transitionDuration: "var(--transition-base)",
                }}
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
        <div style={{ marginTop: 24 }}>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 10,
              lineHeight: 1.6,
              color: "rgba(255, 255, 255, 0.3)",
            }}
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
