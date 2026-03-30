"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/animations";
import Button from "@/components/Button";

const blogPosts = [
  {
    image: "/images/blog/blog3.jpg",
    title:
      "Students Shine at Regional Science Olympiad",
    description:
      "Vidya Bharati students brought home three gold medals and five individual honors at this year's Regional Science Olympiad, showcasing months of dedicated preparation.",
    date: "March 10, 2026",
    category: "Achievements",
  },
  {
    image: "/images/blog/blog2.jpg",
    title: "New STEM Wing Opening This Fall",
    description:
      "Our campus is expanding with a state-of-the-art STEM wing featuring advanced labs, a maker space, and collaborative learning areas designed to fuel innovation.",
    date: "March 5, 2026",
    category: "Campus Updates",
  },
  {
    image: "/images/blog/blog1.jpg",
    title: "Vidya Bharati Launches After-School Coding Club",
    description:
      "Starting this semester, students in Classes VI through XII can join the new Coding Club to explore programming, app development, and computational thinking with expert mentors.",
    date: "February 28, 2026",
    category: "Programs",
  },
];

export default function Blog() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Header: fade in + slide up
      if (headerRef.current) {
        gsap.from(headerRef.current.children, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
          },
        });
      }

      // Blog cards: stagger in
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          y: 30,
          opacity: 0,
          duration: 0.7,
          ease: "power2.out",
          stagger: 0.15,
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
          },
        });
      }

      // "Visit Blog" button: fade in
      if (buttonRef.current) {
        gsap.from(buttonRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: buttonRef.current,
            start: "top 90%",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="py-[var(--section-padding-y)] px-[var(--section-padding-x)]"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div
        className="mx-auto w-full"
        style={{ maxWidth: "var(--container-max)" }}
      >
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <span className="section-label mb-4 block">School News</span>
          <h2
            className="mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-3xl)",
              lineHeight: 1.2,
            }}
          >
            Latest From{" "}
            <em
              style={{
                fontFamily: "var(--font-heading)",
                fontStyle: "italic",
              }}
            >
              Vidya Bharati
            </em>
          </h2>
          <p
            className="mx-auto"
            style={{
              fontSize: "var(--text-base)",
              color: "var(--color-text-muted)",
              lineHeight: 1.6,
              maxWidth: 600,
            }}
          >
            Stay updated with the latest news, student achievements, and
            important announcements from Vidya Bharati International School.
          </p>
        </div>

        {/* Blog Cards */}
        <div ref={cardsRef} className="flex flex-col mb-10">
          {blogPosts.map((post, index) => (
            <div
              key={post.title}
              className="flex flex-col sm:flex-row gap-6 py-8"
              style={
                index < blogPosts.length - 1
                  ? { borderBottom: "1px solid var(--color-border)" }
                  : undefined
              }
            >
              {/* Image Thumbnail */}
              <div
                className="shrink-0 overflow-hidden relative"
                style={{
                  width: 200,
                  height: 140,
                  borderRadius: "var(--radius-md)",
                }}
              >
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="200px"
                  className="object-cover"
                  style={{ borderRadius: "var(--radius-md)" }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-between flex-1">
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "var(--text-xl)",
                      color: "var(--color-text-primary)",
                      lineHeight: 1.3,
                      marginBottom: 8,
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="line-clamp-2"
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--color-text-muted)",
                      lineHeight: 1.5,
                    }}
                  >
                    {post.description}
                  </p>
                </div>

                {/* Date + Category */}
                <div className="flex items-center gap-3 mt-4">
                  <span
                    style={{
                      fontSize: "var(--text-xs)",
                      backgroundColor: "var(--color-bg-secondary)",
                      padding: "4px 12px",
                      borderRadius: "var(--radius-sm)",
                      color: "var(--color-text-secondary)",
                    }}
                  >
                    {post.date}
                  </span>
                  <span
                    style={{
                      fontSize: "var(--text-xs)",
                      textTransform: "uppercase",
                      color: "var(--color-text-secondary)",
                      letterSpacing: "0.05em",
                      fontWeight: 500,
                    }}
                  >
                    {post.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visit Blog Button */}
        <div ref={buttonRef}>
          <Button href="#blog" fullWidth>Read All News</Button>
        </div>
      </div>
    </section>
  );
}
