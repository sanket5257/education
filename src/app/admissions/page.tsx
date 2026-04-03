"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/animations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import Button from "@/components/Button";

const steps = [
  {
    number: "Step 01",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Submit Enquiry",
    description:
      "Fill out our admission enquiry form or contact our admissions team directly.",
  },
  {
    number: "Step 02",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Book a Campus Visit",
    description:
      "Visit our campus, explore classrooms, labs, and meet our faculty.",
  },
  {
    number: "Step 03",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="13" y1="8" x2="18" y2="8" />
        <line x1="13" y1="12" x2="18" y2="12" />
        <line x1="13" y1="16" x2="18" y2="16" />
      </svg>
    ),
    title: "Application & Assessment",
    description:
      "Complete the application form, submit documents, and attend the interaction round.",
  },
  {
    number: "Step 04",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Enrollment Confirmation",
    description:
      "Receive confirmation and complete fee payment to secure your child\u2019s seat.",
  },
];

const eligibility = [
  { program: "Nursery", age: "Ages 3+" },
  { program: "LKG", age: "Ages 4+" },
  { program: "UKG", age: "Ages 5+" },
  { program: "Class I–V", age: "Ages 6–10" },
  { program: "Class VI–VIII", age: "Ages 11–13" },
  { program: "Class IX–XII", age: "Ages 14–17" },
];

const documents = [
  "Birth certificate (original + copy)",
  "Transfer certificate from previous school",
  "Previous year\u2019s report card",
  "Aadhaar card of student",
  "Parent/guardian photo ID",
  "Passport-size photographs (4 nos.)",
  "Medical/vaccination records",
];

const importantDates = [
  { icon: "calendar", text: "Admissions open: January" },
  { icon: "clock", text: "New session starts: April" },
  { icon: "alert", text: "Limited seats available per class" },
];

export default function AdmissionsPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".admissions-hero-content", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".step-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".steps-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".eligibility-section", {
        x: -30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".info-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".documents-section", {
        x: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".info-grid",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".fees-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".fees-grid",
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
        {/* ── Hero Section ── */}
        <section
          className="section-padding"
          style={{ backgroundColor: "var(--color-bg-secondary)" }}
        >
          <div className="container">
            <div className="admissions-hero-content flex flex-col items-center text-center gap-5 pb-8 md:pb-12">
              <span className="section-label">Admissions 2026–27</span>
              <h1 className="font-heading text-[36px] md:text-[52px] lg:text-[64px] leading-[1.08] max-w-[700px]">
                School <em className="italic">Admissions</em>
              </h1>
              <p
                className="max-w-[520px]"
                style={{
                  fontSize: 16,
                  lineHeight: 1.6,
                  color: "var(--color-text-muted)",
                }}
              >
                We aim to make the admission process simple and stress-free for
                families. Applications are now open for Nursery through Class XI.
              </p>
            </div>
          </div>
        </section>

        {/* ── 4-Step Process ── */}
        <section
          style={{ backgroundColor: "var(--color-bg-secondary)" }}
        >
          <div className="container px-4 md:px-6 pb-16 md:pb-24">
            <div className="steps-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="step-card rounded-[16px] p-6 md:p-7 flex flex-col"
                  style={{
                    backgroundColor: "var(--color-bg-primary)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <span
                    className="text-[11px] font-semibold uppercase tracking-widest mb-6"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {step.number}
                  </span>
                  <div
                    className="w-14 h-14 rounded-[12px] flex items-center justify-center mb-5"
                    style={{ backgroundColor: "var(--color-bg-secondary)" }}
                  >
                    {step.icon}
                  </div>
                  <h3
                    className="font-heading text-[18px] md:text-[20px] leading-[1.2] mb-2"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      lineHeight: 1.6,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Full-Width Image ── */}
        <section>
          <div className="relative w-full" style={{ height: "clamp(280px, 40vw, 500px)" }}>
            <Image
              src="/images/admisssion banner.jpg"
              alt="Admissions banner"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* ── Eligibility & Documents ── */}
        <section className="section-padding" style={{ backgroundColor: "var(--color-bg-primary)" }}>
          <div className="container">
            <div className="info-grid grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Left: Eligibility */}
              <div className="eligibility-section">
                <h2 className="font-heading text-[28px] md:text-[36px] lg:text-[44px] leading-[1.12] mb-8">
                  Eligibility &amp; Age{" "}
                  <em className="italic">Requirements</em>
                </h2>
                <div className="flex flex-col">
                  {eligibility.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center justify-between py-4"
                      style={{
                        borderBottom:
                          i < eligibility.length - 1
                            ? "1px solid var(--color-border-light)"
                            : "none",
                      }}
                    >
                      <span
                        className="text-[15px] md:text-[16px] font-medium"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {item.program}
                      </span>
                      <span
                        className="text-[14px] md:text-[15px] rounded-full px-4 py-1.5"
                        style={{
                          backgroundColor: "var(--color-bg-secondary)",
                          color: "var(--color-text-muted)",
                          fontWeight: 500,
                        }}
                      >
                        {item.age}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Documents */}
              <div className="documents-section">
                <h2 className="font-heading text-[28px] md:text-[36px] lg:text-[44px] leading-[1.12] mb-8">
                  Documents Needed{" "}
                  <em className="italic">for Admission</em>
                </h2>
                <div className="flex flex-col">
                  {documents.map((doc, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 py-4"
                      style={{
                        borderBottom:
                          i < documents.length - 1
                            ? "1px solid var(--color-border-light)"
                            : "none",
                      }}
                    >
                      <span
                        className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "var(--color-bg-dark)" }}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#fff"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span
                        className="text-[15px] md:text-[16px]"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {doc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Tuition, Fees & Important Dates ── */}
        <section
          className="section-padding"
          style={{ backgroundColor: "var(--color-bg-secondary)" }}
        >
          <div className="container">
            <div className="fees-grid grid grid-cols-1 lg:grid-cols-3 gap-4">
              {/* Tuition Card */}
              <div
                className="fees-card rounded-[16px] p-7 md:p-8 flex flex-col justify-between"
                style={{
                  backgroundColor: "var(--color-bg-primary)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <div>
                  <h3
                    className="font-heading text-[22px] md:text-[26px] leading-[1.2] mb-3"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Tuition &amp; Fees
                  </h3>
                  <p
                    className="mb-6"
                    style={{
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    Tuition fees vary by class and programme. Our admissions team
                    will provide detailed fee information during the application
                    process.
                  </p>
                </div>
                <Button
                  variant="outline"
                  onClick={() => setEnquiryOpen(true)}
                >
                  Request Fee Details
                </Button>
              </div>

              {/* Scholarships Card */}
              <div
                className="fees-card rounded-[16px] p-7 md:p-8 flex flex-col justify-between"
                style={{
                  backgroundColor: "var(--color-bg-dark)",
                }}
              >
                <div>
                  <h3
                    className="font-heading text-[22px] md:text-[26px] leading-[1.2] mb-3"
                    style={{ color: "var(--color-text-light)" }}
                  >
                    Scholarships
                  </h3>
                  <p
                    className="mb-6"
                    style={{
                      fontSize: 14,
                      lineHeight: 1.65,
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    We offer merit-based and need-based scholarships to ensure
                    quality education is accessible to deserving students from
                    all backgrounds.
                  </p>
                </div>
                <Button
                  variant="primary"
                  onClick={() => setEnquiryOpen(true)}
                >
                  Contact Admissions
                </Button>
              </div>

              {/* Important Dates Card */}
              <div
                className="fees-card rounded-[16px] p-7 md:p-8"
                style={{
                  backgroundColor: "var(--color-bg-primary)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <h3
                  className="font-heading text-[22px] md:text-[26px] leading-[1.2] mb-6"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Important Admission{" "}
                  <em className="italic">Dates</em>
                </h3>
                <div className="flex flex-col gap-4">
                  {importantDates.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 py-3"
                      style={{
                        borderBottom:
                          i < importantDates.length - 1
                            ? "1px solid var(--color-border-light)"
                            : "none",
                      }}
                    >
                      <span
                        className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: "var(--color-bg-secondary)" }}
                      >
                        {item.icon === "calendar" && (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                            <line x1="16" y1="2" x2="16" y2="6" />
                            <line x1="8" y1="2" x2="8" y2="6" />
                            <line x1="3" y1="10" x2="21" y2="10" />
                          </svg>
                        )}
                        {item.icon === "clock" && (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                          </svg>
                        )}
                        {item.icon === "alert" && (
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12.01" y2="16" />
                          </svg>
                        )}
                      </span>
                      <span
                        className="text-[14px] md:text-[15px] font-medium"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer onEnquiryOpen={() => setEnquiryOpen(true)} />
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
      />
    </div>
  );
}
