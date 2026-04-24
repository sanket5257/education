"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/animations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import Button from "@/components/Button";

const stats = [
  { value: "2500+", label: "STUDENTS\nENROLLED" },
  { value: "150+", label: "EXPERT\nFACULTY" },
  { value: "100%", label: "CBSE\nRESULTS" },
];

const missionPoints = [
  "15:1 student-teacher ratio for personalised attention",
  "CBSE-aligned curriculum with holistic development",
  "Strong IIT/NEET foundation from Class VIII onwards",
  "Value-based education rooted in Indian culture",
];

const teachers = [
  {
    name: "Dr. Meena Sharma",
    role: "Principal & Academic Director",
    image:
      "/images/about/team-1.avif",
  },
  {
    name: "Rajiv Kulkarni",
    role: "Head of Science Department",
    image:
      "/images/about/team-2.avif",
  },
  {
    name: "Sunita Deshmukh",
    role: "Senior Mathematics Faculty",
    image:
      "/images/about/team-3.avif",
  },
  {
    name: "Arjun Nair",
    role: "Sports & Physical Education",
    image:
      "/images/about/team-4.avif",
  },
];

const values = [
  {
    icon: "/images/about/values-icon-1.svg",
    title: "Academic Excellence",
    desc: "Rigorous CBSE curriculum preparing students for competitive success.",
  },
  {
    icon: "/images/about/values-icon-2.svg",
    title: "Indian Values",
    desc: "Character building rooted in Indian culture and traditions.",
  },
  {
    icon: "/images/about/values-icon-benefit.svg",
    title: "Respect & Discipline",
    desc: "Students learn empathy, responsibility, and self-discipline.",
  },
  {
    icon: "/images/about/values-icon-3.svg",
    title: "Innovation & Curiosity",
    desc: "Encouraging creative thinking and scientific temperament.",
  },
  {
    icon: "/images/about/values-icon-4.svg",
    title: "Confidence & Leadership",
    desc: "Students develop self-belief and leadership through holistic activities.",
  },
];

const missionWords =
  "Our mission is to create a safe, disciplined, & nurturing environment where students feel supported & encouraged to explore the world around them. We focus on building strong foundations for lifelong learning through academics, creativity, & meaningful experiences.".split(
    " "
  );

function MissionText() {
  const containerRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const words = containerRef.current.querySelectorAll(".mission-word");

    gsap.fromTo(
      words,
      { color: "rgba(34,34,34,0.15)" },
      {
        color: "rgba(34,34,34,1)",
        stagger: 0.04,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "top 20%",
          scrub: 1,
        },
      }
    );
  }, []);

  return (
    <p
      ref={containerRef}
      className="font-heading text-[22px] md:text-[32px] lg:text-[40px] leading-[1.3] max-w-[900px]"
    >
      {missionWords.map((word, i) => (
        <span
          key={i}
          className="mission-word"
          style={{ color: "rgba(34,34,34,0.15)", display: "inline-block", marginRight: "0.3em" }}
        >
          {word}
        </span>
      ))}
    </p>
  );
}

export default function AboutPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <Navbar onEnquiryOpen={() => setEnquiryOpen(true)} />
      <main>
        {/* ── Hero ── */}
        <section
          className="section-padding"
          style={{ backgroundColor: "var(--color-bg-secondary)" }}
        >
          <div className="container flex flex-col items-center text-center gap-5">
            <span className="section-label">About Us</span>
            <h1 className="font-heading text-[36px] md:text-[52px] lg:text-[64px] leading-[1.08] max-w-[650px]">
              A Safe Place to Learn
            </h1>
            <p
              className="max-w-[600px]"
              style={{ fontSize: 16, lineHeight: 1.6, color: "var(--color-text-muted)" }}
            >
              Vidya Bharati International School provides a nurturing, disciplined, and
              inspiring environment where students learn, explore, and grow into
              confident individuals.
            </p>
          </div>
        </section>

        {/* ── Hero Images ── */}
        <section style={{ backgroundColor: "var(--color-bg-secondary)" }}>
          <div className="container px-4 pb-16 md:pb-24">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
              {/* Left - abstract image */}
              <div className="relative rounded-[20px] overflow-hidden min-h-[300px] md:min-h-[400px]">
                <Image
                  src="/images/about/about-future-1.avif"
                  alt="Abstract colourful shapes"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              {/* Center - kids photo */}
              <div className="relative rounded-[20px] overflow-hidden min-h-[300px] md:min-h-[400px]">
                <Image
                  src="/images/about/about-future-2.avif"
                  alt="Children laughing together"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              {/* Right - features card */}
              <div
                className="rounded-[20px] p-7 flex flex-col justify-center gap-5 relative overflow-hidden min-h-[300px]"
                style={{ backgroundColor: "#E8EDF4" }}
              >
                <Image
                  src="/images/about/header-shape-3.svg"
                  alt=""
                  fill
                  className="object-cover opacity-30"
                />
                <div className="relative z-10 flex flex-col gap-4">
                  {["CBSE Curriculum (Nursery–XII)", "IIT/NEET Foundation Programme", "Holistic Development Focus", "30+ Extra-Curricular Clubs"].map(
                    (item, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3"
                        style={{ borderBottom: i < 3 ? "1px solid rgba(0,0,0,0.08)" : "none", paddingBottom: i < 3 ? 16 : 0 }}
                      >
                        <Image
                          src={`/images/about/features-icon-${i + 1}.svg`}
                          alt=""
                          width={24}
                          height={24}
                        />
                        <span className="text-sm font-medium" style={{ color: "var(--color-text-primary)" }}>
                          {item}
                        </span>
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Mission Statement + Stats ── */}
        <section
          className="section-padding"
          style={{ backgroundColor: "var(--color-bg-primary)" }}
        >
          <div className="container flex flex-col items-center text-center gap-10">
            <span className="section-label">About Our School</span>
            <MissionText />
            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-20 pt-4 w-full max-w-[700px]">
              {stats.map((s, i) => (
                <div key={i} className="flex flex-col items-center text-center md:flex-row md:text-left gap-1 md:gap-3">
                  <span
                    className="font-heading text-[28px] sm:text-[40px] md:text-[56px] leading-none"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider whitespace-pre-line"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Mission & Vision ── */}
        <section
          className="section-padding"
          style={{ backgroundColor: "var(--color-bg-primary)" }}
        >
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left - Image */}
            <div className="relative rounded-[20px] overflow-hidden min-h-[400px] md:min-h-[540px]">
              <Image
                src="/images/about/mission.avif"
                alt="Students walking outside school"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            {/* Right - Content */}
            <div className="flex flex-col gap-6">
              <span className="section-label">Our Mission &amp; Vision</span>
              <h2 className="font-heading text-[28px] md:text-[36px] lg:text-[44px] leading-[1.12]">
                Inspiring and Nurturing Every Student&apos;s Growth
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--color-text-muted)" }}>
                We help students develop confidence, curiosity, and essential skills
                through rigorous academics balanced with holistic development every day.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.65, color: "var(--color-text-muted)" }}>
                We envision a world where every child receives a quality education
                rooted in Indian values and builds strong foundations for lifelong success.
              </p>
              <div
                className="flex flex-col gap-4 pt-4"
                style={{ borderTop: "1px solid var(--color-border-light)" }}
              >
                {missionPoints.map((point, i) => (
                  <div key={i} className="flex items-start gap-3"
                    style={{ borderBottom: i < missionPoints.length - 1 ? "1px solid var(--color-border)" : "none", paddingBottom: i < missionPoints.length - 1 ? 16 : 0 }}
                  >
                    <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: "var(--color-text-primary)" }} />
                    <span className="text-[15px] font-medium" style={{ color: "var(--color-text-primary)" }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Teachers ── */}
        <section
          className="section-padding"
          style={{ backgroundColor: "var(--color-bg-dark)" }}
        >
          <div className="container">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
              <div>
                <span
                  className="text-[13px] font-semibold uppercase tracking-wider block mb-4"
                  style={{ color: "#D4A853" }}
                >
                  Our Dedicated Faculty
                </span>
                <h2 className="font-heading text-[28px] md:text-[36px] lg:text-[44px] leading-[1.12] text-white">
                  Experienced Educators Guiding Every Student&apos;s Learning
                </h2>
              </div>
            </div>
            {/* Teacher Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {teachers.map((t, i) => (
                <div
                  key={i}
                  className="relative overflow-hidden rounded-[20px] group"
                  style={{ aspectRatio: "3 / 4" }}
                >
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Name overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <div
                      className="rounded-[12px] px-5 py-4"
                      style={{ backgroundColor: "rgba(255,253,249,0.9)", backdropFilter: "blur(8px)" }}
                    >
                      <p className="text-[16px] font-heading font-medium" style={{ color: "var(--color-text-primary)" }}>
                        {t.name}
                      </p>
                      <p className="text-[13px]" style={{ color: "var(--color-text-muted)" }}>
                        {t.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Our Values ── */}
        <section
          className="section-padding"
          style={{ backgroundColor: "var(--color-bg-primary)" }}
        >
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left - Values list */}
            <div>
              <span className="section-label mb-4 block">Our Values</span>
              <h2 className="font-heading text-[28px] md:text-[36px] lg:text-[44px] leading-[1.12] mb-8">
                Values That Guide Every Student&apos;s Journey
              </h2>
              <div className="flex flex-col">
                {values.map((v, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-4 py-5"
                    style={{ borderBottom: i < values.length - 1 ? "1px solid var(--color-border)" : "none" }}
                  >
                    <div
                      className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "var(--color-bg-dark)" }}
                    >
                      <Image src={v.icon} alt="" width={22} height={22} style={{ filter: "brightness(0) invert(1)" }} />
                    </div>
                    <div>
                      <p className="text-[16px] font-semibold mb-1" style={{ color: "var(--color-text-primary)" }}>
                        {v.title}
                      </p>
                      <p className="text-[14px]" style={{ color: "var(--color-text-muted)", lineHeight: 1.55 }}>
                        {v.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Portrait image with quote */}
            <div className="relative rounded-[20px] overflow-hidden min-h-[500px] md:min-h-[640px]">
              <Image
                src="/images/about/values.avif"
                alt="School chairman"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Quote overlay */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div
                  className="rounded-[16px] p-5 md:p-6"
                  style={{ backgroundColor: "rgba(255,253,249,0.92)", backdropFilter: "blur(12px)", border: "1px solid var(--color-border)" }}
                >
                  <p
                    className="font-heading italic text-[15px] md:text-[17px] leading-[1.4] mb-4"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    &ldquo;At Vidya Bharati, we believe every child deserves a safe, joyful,
                    and inspiring environment to explore, learn, and grow. Our values guide
                    everything we do, ensuring students develop confidence, creativity, and
                    a love for learning from day one.&rdquo;
                  </p>
                  <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
                    Dr. Ramesh Gupta
                  </p>
                  <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                    Chairman of the Board
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="section-padding" style={{ backgroundColor: "var(--color-bg-primary)" }}>
          <div className="container">
            <div
              className="relative overflow-hidden rounded-[20px] md:rounded-[28px] flex flex-col items-center justify-center text-center p-10 md:p-20"
              style={{ minHeight: 400 }}
            >
              <Image
                src="/images/about/campus.jpg"
                alt="Students at Vidya Bharati"
                fill
                sizes="100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              <div className="relative z-10 max-w-[650px]">
                <h2 className="font-heading text-[28px] md:text-[40px] lg:text-[52px] leading-[1.1] text-white mb-4">
                  Secure Your Child&apos;s Spot at Vidya Bharati
                </h2>
                <p className="text-white/70 text-sm mb-8">
                  Join our nurturing community of learners!
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Button variant="primary" onClick={() => setEnquiryOpen(true)}>
                    Enquire Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer onEnquiryOpen={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  );
}
