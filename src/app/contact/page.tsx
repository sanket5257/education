"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/animations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import Button from "@/components/Button";

const floatingIcons = [
  { src: "/images/contact-hero/icon-star.svg", alt: "Star", className: "top-[18%] left-[12%] w-[38px] md:w-[48px]", animation: "float-bob", delay: 0 },
  { src: "/images/contact-hero/icon-sparks.svg", alt: "Sparks", className: "top-[28%] left-[28%] w-[50px] md:w-[70px]", animation: "float-bob-alt", delay: 0.2 },
  { src: "/images/contact-hero/icon-open-book.svg", alt: "Book", className: "top-[22%] left-[24%] w-[50px] md:w-[65px]", animation: "float-bob-slow", delay: 0.4 },
  { src: "/images/contact-hero/icon-compass.svg", alt: "Compass", className: "top-[22%] right-[14%] w-[55px] md:w-[75px]", animation: "float-bob", delay: 0.3 },
  { src: "/images/contact-hero/icon-book.svg", alt: "Notebook", className: "bottom-[28%] left-[22%] w-[60px] md:w-[85px]", animation: "float-bob-alt", delay: 0.1 },
  { src: "/images/contact-hero/icon-wifi.svg", alt: "Signal", className: "bottom-[30%] right-[30%] w-[65px] md:w-[90px]", animation: "float-bob-slow", delay: 0.5 },
  { src: "/images/contact-hero/icon-pen.svg", alt: "Pen", className: "bottom-[26%] right-[8%] w-[60px] md:w-[80px]", animation: "float-bob", delay: 0.6 },
];

export default function ContactPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", phone: "", location: "", message: "" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero heading entrance
      gsap.from(".contact-hero-heading", {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Floating icons entrance with stagger
      gsap.from(".floating-icon", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "back.out(1.7)",
        delay: 0.4,
      });

      // Cloud entrance - slide up
      gsap.from(".cloud-section", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.3,
      });

      // Form section
      gsap.from(".contact-form-section", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-form-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Contact details cards
      gsap.from(".contact-detail-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-details-section",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Navbar onEnquiryOpen={() => setEnquiryOpen(true)} />
      <main>
        {/* ── Cloud Hero Section (Lilstep-style) ── */}
        <section
          className="relative "
          style={{
            backgroundColor: "#FAF6E6",
            backgroundImage: "url(/images/contact-hero/bg-pattern.svg)",
            backgroundPosition: "center",
            backgroundRepeat: "repeat",
            backgroundSize: "cover",
            paddingTop: "clamp(120px, 12vw, 180px)",
            paddingBottom: "clamp(200px, 22vw, 320px)",
            maxHeight: "100vh",
          }}
        >
          {/* Centered heading */}
          <div className="container relative z-[2] text-center">
            <h1 className="contact-hero-heading font-heading text-[32px] sm:text-[44px] md:text-[56px] lg:text-[64px] leading-[1.15] max-w-[600px] mx-auto" style={{ color: "#1A1A2E" }}>
              Get in touch for joyful{" "}
              <span className="relative inline-block">
                lear
                <span className="relative">
                  ning
                  <span
                    className="absolute inset-x-[-4px] bottom-[2px] h-[45%] rounded-full -z-10"
                    style={{ backgroundColor: "#FFCB47" }}
                  />
                </span>
              </span>
            </h1>
          </div>

          {/* Floating icons */}
          {floatingIcons.map((icon, i) => (
            <div
              key={i}
              className={`floating-icon absolute ${icon.className} hidden sm:block`}
              style={{ animation: `${icon.animation} ${3 + i * 0.4}s ease-in-out infinite`, animationDelay: `${icon.delay}s`, zIndex: 2 }}
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={90}
                height={90}
                className="w-full h-auto"
              />
            </div>
          ))}

          {/* Cloud layers at the bottom */}
          <div className="cloud-section absolute left-[-10%] right-[-10%] z-[1]" style={{ bottom: "-8%", height: "clamp(220px, 30vw, 420px)" }}>
            {/* Cloud row 1 - front, fastest */}
            <div className="absolute bottom-0 left-0 right-0 flex animate-cloud-drift" style={{ width: "300%" }}>
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex-shrink-0" style={{ width: "33.333%" }}>
                  <Image
                    src="/images/contact-hero/cloud.svg"
                    alt=""
                    width={2417}
                    height={385}
                    className="w-full h-auto"
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            {/* Cloud row 2 - middle, medium speed, offset up */}
            <div className="absolute bottom-[15%] left-0 right-0 flex animate-cloud-drift-reverse opacity-70" style={{ width: "300%" }}>
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex-shrink-0" style={{ width: "33.333%" }}>
                  <Image
                    src="/images/contact-hero/cloud.svg"
                    alt=""
                    width={2417}
                    height={385}
                    className="w-full h-auto scale-90"
                  />
                </div>
              ))}
            </div>

            {/* Cloud row 3 - back, slowest, offset more */}
            <div className="absolute bottom-[25%] left-0 right-0 flex animate-cloud-drift-slow opacity-40" style={{ width: "300%" }}>
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex-shrink-0" style={{ width: "33.333%" }}>
                  <Image
                    src="/images/contact-hero/cloud.svg"
                    alt=""
                    width={2417}
                    height={385}
                    className="w-full h-auto scale-75"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact Form Section ── */}
        <section className="contact-form-section section-padding" style={{ backgroundColor: "var(--color-bg-primary)" }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-stretch">
              {/* Left: Dark card */}
              <div
                className="contact-hero-left relative overflow-hidden rounded-[20px] p-8 md:p-12 flex flex-col justify-end min-h-[320px] md:min-h-[480px]"
                style={{ backgroundColor: "#003B20" }}
              >
                <Image
                  src="/images/contact.png"
                  alt="Contact illustration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-80"
                />
                <div className="relative z-10">
                  <h2 className="font-heading text-[32px] md:text-[44px] lg:text-[52px] leading-[1.08] text-white mb-4">
                    We&apos;d Love to{" "}
                    <em className="italic">Hear From You</em>
                  </h2>
                  <p
                    className="max-w-[380px]"
                    style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.7)" }}
                  >
                    Have a question about admissions, academics, or campus life? Reach out and we&apos;ll get back to you.
                  </p>
                </div>
              </div>

              {/* Right: Contact form */}
              <div
                className="contact-hero-right rounded-[20px] p-6 md:p-10"
                style={{
                  backgroundColor: "var(--color-bg-secondary)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <h2
                  className="font-heading text-[24px] md:text-[30px] leading-[1.2] mb-6 text-center"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Submit Your Query
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-medium uppercase tracking-wider mb-1.5"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10"
                        style={{
                          backgroundColor: "var(--color-bg-primary)",
                          border: "0.8px solid var(--color-border-light)",
                          color: "var(--color-text-primary)",
                        }}
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-medium uppercase tracking-wider mb-1.5"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10"
                        style={{
                          backgroundColor: "var(--color-bg-primary)",
                          border: "0.8px solid var(--color-border-light)",
                          color: "var(--color-text-primary)",
                        }}
                        placeholder="Enter your Email"
                      />
                    </div>
                  </div>

                  {/* Phone + Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-medium uppercase tracking-wider mb-1.5"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10"
                        style={{
                          backgroundColor: "var(--color-bg-primary)",
                          border: "0.8px solid var(--color-border-light)",
                          color: "var(--color-text-primary)",
                        }}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-medium uppercase tracking-wider mb-1.5"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Location *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10"
                        style={{
                          backgroundColor: "var(--color-bg-primary)",
                          border: "0.8px solid var(--color-border-light)",
                          color: "var(--color-text-primary)",
                        }}
                        placeholder="Enter your city"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-xs font-medium uppercase tracking-wider mb-1.5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10 resize-none"
                      style={{
                        backgroundColor: "var(--color-bg-primary)",
                        border: "0.8px solid var(--color-border-light)",
                        color: "var(--color-text-primary)",
                      }}
                      placeholder="Write your message"
                    />
                  </div>

                  {/* Submit */}
                  <Button variant="dark" fullWidth>
                    Get Started
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact Details + Map ── */}
        <section
          className="contact-details-section section-padding"
          style={{ backgroundColor: "var(--color-bg-secondary)" }}
        >
          <div className="container">
            {/* Section header */}
            <div className="text-center mb-12">
              <span className="section-label">Reach Us</span>
              <h2
                className="font-heading text-[28px] md:text-[36px] lg:text-[44px] leading-[1.15] mt-3"
                style={{ color: "var(--color-text-primary)" }}
              >
                Our Contact Details
              </h2>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10">
              {/* Address */}
              <div
                className="contact-detail-card rounded-[16px] p-6 flex flex-col gap-4"
                style={{
                  backgroundColor: "var(--color-bg-primary)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-bg-dark)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFDF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-heading text-[18px] md:text-[20px] mb-1"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Address
                  </h3>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                    Sector 15, Gurugram,<br />Haryana, India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div
                className="contact-detail-card rounded-[16px] p-6 flex flex-col gap-4"
                style={{
                  backgroundColor: "var(--color-bg-primary)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-bg-dark)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFDF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-heading text-[18px] md:text-[20px] mb-1"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Phone
                  </h3>
                  <a
                    href="tel:+911123456789"
                    className="text-sm hover:underline"
                    style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}
                  >
                    +91 11 2345 6789
                  </a>
                </div>
              </div>

              {/* Email */}
              <div
                className="contact-detail-card rounded-[16px] p-6 flex flex-col gap-4"
                style={{
                  backgroundColor: "var(--color-bg-primary)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-bg-dark)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFDF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-heading text-[18px] md:text-[20px] mb-1"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Email
                  </h3>
                  <a
                    href="mailto:info@vidyabharati.edu.in"
                    className="text-sm hover:underline"
                    style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}
                  >
                    info@vidyabharati.edu.in
                  </a>
                </div>
              </div>

              {/* Working Hours */}
              <div
                className="contact-detail-card rounded-[16px] p-6 flex flex-col gap-4"
                style={{
                  backgroundColor: "var(--color-bg-primary)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "var(--color-bg-dark)" }}
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#FFFDF9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <h3
                    className="font-heading text-[18px] md:text-[20px] mb-1"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Working Hours
                  </h3>
                  <p className="text-sm" style={{ color: "var(--color-text-muted)", lineHeight: 1.6 }}>
                    Mon – Sat: 8:00 AM – 3:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-[16px] overflow-hidden" style={{ aspectRatio: "21 / 9", border: "1px solid var(--color-border)" }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.0!2d77.03!3d28.46!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI3JzM2LjAiTiA3N8KwMDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Vidya Bharati International School Location"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer onEnquiryOpen={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
