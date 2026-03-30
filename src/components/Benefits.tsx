"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/animations";

const features = [
  {
    icon: "/images/benefits/benefit1.avif",
    title: "Experienced Faculty",
    description:
      "Dedicated teachers with decades of expertise in CBSE curriculum who genuinely care about every student's growth.",
  },
  {
    icon: "/images/benefits/benefit2.avif",
    title: "Small Class Sizes",
    description:
      "A 15:1 student-teacher ratio ensures every child gets the individual attention they deserve.",
  },
  {
    icon: "/images/benefits/benefit3.avif",
    title: "Modern Campus",
    description:
      "Smart classrooms, science labs, sports complex, yoga hall, and digital learning centers built for the future.",
  },
];

const stats = [
  { value: "1,200+", label: "Students Enrolled" },
  { value: "15:1", label: "Student-Teacher Ratio" },
  { value: "94%", label: "University Admission" },
  { value: "50+", label: "Clubs & Activities" },
];

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".benefits-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".benefits-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".benefits-feature", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".benefits-features",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".benefits-stat", {
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".benefits-stats",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="benefits"
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="benefits-header mb-8 md:mb-16 text-center max-w-[700px] mx-auto">
          <span className="section-label mb-3 block">Why Vidya Bharati</span>
          <h2
            className="font-heading text-[32px] md:text-[40px] lg:text-[56px] leading-[1.1] mb-4"
          >
            Built for{" "}
            <em className="italic">student</em> success.
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.6,
              color: "var(--color-text-muted)",
            }}
          >
            Everything at Vidya Bharati International School is designed with one
            goal — helping every student thrive academically, socially, and personally
            while staying rooted in Indian values.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="benefits-features grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="benefits-feature rounded-[12px] p-5 md:p-8 flex flex-col items-center text-center"
              style={{
                backgroundColor: "var(--color-bg-primary)",
                border: "0.8px solid var(--color-border-light)",
              }}
            >
              <div
                className="relative overflow-hidden rounded-full mb-6"
                style={{ width: 64, height: 64 }}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3
                className="font-heading text-[20px] md:text-[24px] leading-[1.3] mb-2"
              >
                {feature.title}
              </h3>
              <p
                style={{
                  fontSize: 15,
                  lineHeight: 1.6,
                  color: "var(--color-text-muted)",
                }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="benefits-stats grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="benefits-stat rounded-[12px] p-4 md:p-6 text-center"
              style={{
                backgroundColor: "var(--color-bg-dark)",
              }}
            >
              <p
                className="font-heading text-[24px] md:text-[36px] leading-[1.1] mb-1"
                style={{
                  color: "var(--color-text-light)",
                }}
              >
                {stat.value}
              </p>
              <p
                style={{
                  fontSize: 13,
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
