"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/animations";

const programs = [
  {
    image: "/images/programs/innovation-lab.jpg",
    heading: "STEM & Innovation Lab",
    description:
      "Engage in hands-on experiments, robotics challenges, and coding projects that bring science and technology to life in the classroom",
    tag: "Classes VI-XII",
  },
  {
    image: "/images/programs/arts.jpg",
    heading: "Indian Classical Arts & Humanities",
    description:
      "Discover your creative voice through Indian classical music, dance, visual arts, and a rich exploration of Indian literature, Sanskrit, and history",
    tag: "All Classes",
  },
  {
    image: "/images/programs/iit-neet.jpg",
    heading: "IIT/NEET Foundation",
    description:
      "Build a strong foundation for competitive entrance exams with advanced coaching in mathematics, physics, chemistry, and biology",
    tag: "Classes IX-XII",
  },
  {
    image: "/images/programs/sports.jpg",
    heading: "Sports & Yoga",
    description:
      "Build teamwork, discipline, and healthy habits through competitive sports, yoga, physical education, and wellness programs",
    tag: "All Classes",
  },
];

export default function Programs() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".programs-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".programs-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".programs-card", {
        scale: 0.95,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".programs-cards",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="programs"
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="programs-header flex flex-col gap-6 lg:flex-row lg:gap-16 mb-12">
          <div className="lg:w-1/2 flex flex-col gap-4">
            <span className="section-label">academics</span>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: 56,
                lineHeight: 1.1,
              }}
            >
              Explore Our{" "}
              <em style={{ fontStyle: "italic" }}>Academic</em> Programs
            </h2>
          </div>
          <div className="lg:w-1/2 flex items-end">
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "var(--color-text-muted)",
              }}
            >
              Vidya Bharati International School offers a comprehensive CBSE
              curriculum that nurtures curiosity and critical thinking. From
              primary foundations to IIT/NEET preparation, every student finds
              their path to excellence in the Indian education system.
            </p>
          </div>
        </div>

        {/* Program Cards - 2x2 grid */}
        <div className="programs-cards grid grid-cols-1 md:grid-cols-2 gap-6">
          {programs.map((program) => (
            <div
              key={program.heading}
              className="programs-card flex flex-col gap-4"
            >
              <div
                className="relative w-full overflow-hidden rounded-[6px]"
                style={{ aspectRatio: "4 / 3" }}
              >
                <Image
                  src={program.image}
                  alt={program.heading}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: 24,
                    lineHeight: 1.3,
                  }}
                >
                  {program.heading}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    lineHeight: 1.5,
                    color: "var(--color-text-muted)",
                  }}
                >
                  {program.description}
                </p>
              </div>
              <div className="flex items-center mt-auto">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  style={{
                    fontSize: 14,
                    fontWeight: 500,
                    color: "var(--color-text-primary)",
                  }}
                >
                  <span>Learn More</span>
                  <Image
                    src="/images/icons/arrow-right.svg"
                    alt="Arrow"
                    width={16}
                    height={16}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
