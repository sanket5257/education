"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/animations";

const featured = {
  image:
    "/images/success/testimonial.jpg",
  quote:
    "Vidya Bharati's teaching approach completely transformed my daughter's confidence and love for learning.",
  name: "Priya Sharma",
  role: "Parent of Class X student",
  rating: "4.8",
};

const sideCards = [
  {
    avatar:
      "/images/success/join-1.avif",
    quote:
      "The IIT foundation classes gave my son a strong head start. He comes home excited every day!",
    name: "Rajesh Mehta",
    role: "Parent of Class XII student",
    date: "15.03.2026",
  },
  {
    avatar:
      "/images/success/testi-7.avif",
    quote:
      "Finding a school that balances academics with Indian values was important — Vidya Bharati delivers both.",
    name: "Anita Reddy",
    role: "Parent of Class VIII student",
    date: "10.02.2026",
  },
];

function QuoteIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6 28C8.93333 28 7.6 27.4667 6.6 26.4C5.66667 25.3333 5.2 23.8667 5.2 22C5.2 20.2 5.6 18.4 6.4 16.6C7.26667 14.8 8.46667 13.2 10 11.8C11.5333 10.3333 13.2667 9.2 15.2 8.4L16.4 10.6C14.4 11.5333 12.8 12.7333 11.6 14.2C10.4 15.6 9.73333 17.0667 9.6 18.6C10.2667 18.2 11.0667 18 12 18C13.4667 18 14.6667 18.4667 15.6 19.4C16.5333 20.3333 17 21.5333 17 23C17 24.4667 16.5 25.6667 15.5 26.6C14.5667 27.5333 13.0667 28 10.6 28ZM26.6 28C24.9333 28 23.6 27.4667 22.6 26.4C21.6667 25.3333 21.2 23.8667 21.2 22C21.2 20.2 21.6 18.4 22.4 16.6C23.2667 14.8 24.4667 13.2 26 11.8C27.5333 10.3333 29.2667 9.2 31.2 8.4L32.4 10.6C30.4 11.5333 28.8 12.7333 27.6 14.2C26.4 15.6 25.7333 17.0667 25.6 18.6C26.2667 18.2 27.0667 18 28 18C29.4667 18 30.6667 18.4667 31.6 19.4C32.5333 20.3333 33 21.5333 33 23C33 24.4667 32.5 25.6667 31.5 26.6C30.5667 27.5333 29.0667 28 26.6 28Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 1.66669L12.575 6.88335L18.3334 7.72502L14.1667 11.7834L15.15 17.5167L10 14.8084L4.85002 17.5167L5.83335 11.7834L1.66669 7.72502L7.42502 6.88335L10 1.66669Z"
        fill="#222222"
        stroke="#222222"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function SuccessStories() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
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

      gsap.from(".testimonial-featured", {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonial-grid",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".testimonial-side-card", {
        x: 60,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".testimonial-grid",
          start: "top 80%",
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
      className="section-padding bg-bg-secondary"
    >
      <div className="container">
        {/* Header */}
        <div className="stories-header text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 mb-5">
            <Image
              src="/images/icons/about-icon1.svg"
              alt=""
              width={18}
              height={18}
            />
            <span className="section-label">Parent Testimonials</span>
          </div>
          <h2 className="font-heading text-[28px] md:text-[40px] lg:text-[52px] leading-[1.15] max-w-[600px] mx-auto">
            Stories from parents who trust{" "}
            <em className="italic">Vidya Bharati</em>
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="testimonial-grid grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left - Featured Card */}
          <div className="testimonial-featured relative overflow-hidden rounded-[20px] md:rounded-[24px] min-h-[480px] md:min-h-[580px]">
            <Image
              src={featured.image}
              alt={featured.name}
              fill
              className="object-cover"
            />
            {/* Bottom overlay */}
            <div className="absolute inset-x-0 bottom-0 p-5 md:p-7">
              <div
                className="rounded-[16px] p-5 md:p-6 bg-[rgba(255,253,249,0.92)] backdrop-blur-[12px]"
              >
                <p
                  className="font-heading italic text-[17px] md:text-[20px] leading-[1.35] mb-5 text-text-primary"
                >
                  &ldquo;{featured.quote}&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <StarIcon />
                      <span className="text-[22px] font-semibold text-text-primary">
                        {featured.rating}
                      </span>
                    </div>
                    <div
                      className="w-px h-8 mx-1 bg-border-light"
                    />
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {featured.name}
                      </p>
                      <p className="text-xs text-text-muted">
                        {featured.role}
                      </p>
                    </div>
                  </div>
                  <QuoteIcon className="text-[var(--color-border-light)] w-8 h-8 md:w-10 md:h-10" />
                </div>
              </div>
            </div>
          </div>

          {/* Right - Stacked Cards */}
          <div className="flex flex-col gap-5">
            {sideCards.map((card, i) => (
              <div
                key={i}
                className="testimonial-side-card flex-1 rounded-[20px] md:rounded-[24px] p-6 md:p-8 flex flex-col justify-between bg-bg-primary border border-border"
              >
                {/* Quote */}
                <p
                  className="font-heading italic text-[18px] md:text-[22px] lg:text-[24px] leading-[1.35] mb-6 text-text-primary"
                >
                  &ldquo;{card.quote}&rdquo;
                </p>

                {/* Footer */}
                <div className="flex items-end justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden shrink-0">
                      <Image
                        src={card.avatar}
                        alt={card.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-text-primary">
                        {card.name}
                      </p>
                      <p className="text-xs font-medium text-[#5B8C7B]">
                        {card.role}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-xs text-text-muted">
                      {card.date}
                    </span>
                    <QuoteIcon className="text-[var(--color-border-light)] w-8 h-8 md:w-10 md:h-10" />
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
