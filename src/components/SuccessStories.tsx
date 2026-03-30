"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/animations";

const stories = [
  {
    image: "/images/reviews/review1.jpg",
    quote:
      "Since enrolling our daughter at Vidya Bharati, we've seen her confidence soar. The teachers truly invest in each child, and the IIT foundation classes have given her a strong head start. She comes home excited to learn every single day.",
  },
  {
    image: "/images/reviews/review2.jpg",
    quote:
      "As a parent, finding a school that balances academics with cultural values was important to us. Vidya Bharati made the transition seamless — the Hindi and Sanskrit programs are excellent, and our son has thrived both academically and personally.",
  },
  {
    image: "/images/reviews/review3.jpg",
    quote:
      "We chose Vidya Bharati for its small class sizes and strong CBSE results, and it was the best decision we made. The teachers know each student by name, and the emphasis on Indian values alongside modern education is truly commendable.",
  },
];

export default function SuccessStories() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header fades in + slides up
      gsap.from(".stories-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stories-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // 2. Story cards stagger scale in
      gsap.from(".stories-card", {
        scale: 0.95,
        opacity: 0,
        duration: 0.7,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stories-cards",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="stories"
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="stories-header mb-10">
          <span className="section-label mb-4 block">Parent Voices</span>

          <h2
            className="mb-4 font-heading text-[32px] md:text-[40px] lg:text-[56px] leading-[1.1]"
          >
            <em className="italic">Voices</em>{" "}
            From Our Parents
          </h2>

          <p
            style={{
              fontSize: 16,
              color: "var(--color-text-muted)",
              lineHeight: 1.6,
            }}
          >
            Hear from parents who chose Vidya Bharati for their children
          </p>
        </div>

        {/* Cards */}
        <div className="stories-cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((story, index) => (
            <div key={index} className="stories-card flex flex-col">
              {/* Image area with overlay */}
              <div
                className="relative overflow-hidden rounded-[var(--radius-md)]"
                style={{ aspectRatio: "4 / 5" }}
              >
                <Image
                  src={story.image}
                  alt={`Success story ${index + 1}`}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/30">
                  {/* Play button */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform duration-300 hover:scale-110 cursor-pointer">
                    <Image
                      src="/images/icons/play.svg"
                      alt="Play"
                      width={20}
                      height={20}
                    />
                  </div>

                  <span
                    className="mt-3"
                    style={{
                      fontSize: "var(--text-sm)",
                      color: "var(--color-text-light)",
                      fontWeight: 500,
                    }}
                  >
                    Watch Video
                  </span>
                </div>
              </div>

              {/* Quote area */}
              <div
                className="flex flex-1 flex-col justify-between rounded-[var(--radius-md)] p-6 mt-0"
                style={{ backgroundColor: "var(--color-bg-dark)" }}
              >
                <p
                  className="mb-6"
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-light)",
                    fontStyle: "italic",
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;{story.quote}&rdquo;
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 transition-opacity duration-300 hover:opacity-80"
                  style={{
                    fontSize: "var(--text-sm)",
                    color: "var(--color-text-light)",
                    fontWeight: 500,
                  }}
                >
                  Read Story
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      d="M3.333 8h9.334M8.667 4l4 4-4 4"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
