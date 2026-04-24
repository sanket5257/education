"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/animations";

const programs = [
  {
    tag: "Classes VI–XII",
    heading: "STEM & Innovation Lab",
    description:
      "Engage in hands-on experiments, robotics challenges, and coding projects that bring science and technology to life in the classroom.",
    image:
      "/images/programs/program-remote-1.jpg",
  },
  {
    tag: "All Classes",
    heading: "Indian Classical Arts & Humanities",
    description:
      "Discover your creative voice through Indian classical music, dance, visual arts, and a rich exploration of Indian literature, Sanskrit, and history.",
    image:
      "/images/programs/program-remote-2.jpg",
  },
  {
    tag: "Classes IX–XII",
    heading: "IIT/NEET Foundation",
    description:
      "Build a strong foundation for competitive entrance exams with advanced coaching in mathematics, physics, chemistry, and biology.",
    image:
      "/images/programs/program-remote-3.jpg",
  },
];

export default function Programs() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      if (!leftRef.current || !sectionRef.current) return;

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 100px",
        end: "bottom bottom",
        pin: leftRef.current,
        pinSpacing: false,
      });
    });

    const ctx = gsap.context(() => {
      gsap.from(".programs-header-content", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".programs-header-content",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".program-card", {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".program-list",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => {
      ctx.revert();
      mm.revert();
    };
  }, []);

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="section-padding bg-bg-secondary"
    >
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left - Pinned on desktop */}
          <div ref={leftRef} className="lg:w-[42%] shrink-0">
            <div className="programs-header-content flex flex-col gap-5">
              <span className="section-label">What We Teach</span>
              <h2 className="font-heading text-[28px] md:text-[36px] lg:text-[48px] leading-[1.1]">
                Comprehensive Programs for{" "}
                <em className="italic">Academic</em> Excellence
              </h2>
              <p className="text-base leading-[1.6] text-text-muted">
                Our programs are designed to address every stage of learning.
                From early foundations to competitive exam preparation, each
                initiative focuses on creating well-rounded, confident students.
              </p>
            </div>
          </div>

          {/* Right - Scrolling image cards */}
          <div className="lg:w-[58%] program-list flex flex-col gap-6">
            {programs.map((program) => (
              <div
                key={program.heading}
                className="program-card relative overflow-hidden rounded-[20px] md:rounded-[24px] min-h-[560px]"
              >
                {/* Background image */}
                <Image
                  src={program.image}
                  alt={program.heading}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover"
                />

                {/* Frosted overlay card at bottom */}
                <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                  <div
                    className="rounded-[16px] p-5 md:p-6 bg-[rgba(255,253,249,0.88)] backdrop-blur-[16px]"
                  >
                    {/* Tag */}
                    <span
                      className="inline-block text-[12px] font-medium px-3 py-1 rounded-full mb-3 bg-[#FFF8E1] text-text-primary"
                    >
                      {program.tag}
                    </span>

                    {/* Title */}
                    <h3 className="font-heading text-[20px] md:text-[24px] leading-[1.2] mb-2">
                      {program.heading}
                    </h3>

                    {/* Description */}
                    <p className="text-sm leading-[1.55] text-text-muted">
                      {program.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
