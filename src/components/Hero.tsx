"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/animations";
import Button from "@/components/Button";

export default function Hero({ onEnquiryOpen }: { onEnquiryOpen?: () => void }) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-label]", {
        y: -20, opacity: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: "[data-hero-label]", start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from("[data-hero-heading]", {
        y: 40, opacity: 0, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: "[data-hero-heading]", start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from("[data-hero-paragraph]", {
        y: 40, opacity: 0, duration: 0.8, delay: 0.2, ease: "power2.out",
        scrollTrigger: { trigger: "[data-hero-paragraph]", start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from("[data-hero-buttons]", {
        y: 40, opacity: 0, duration: 0.8, delay: 0.3, ease: "power2.out",
        scrollTrigger: { trigger: "[data-hero-buttons]", start: "top 85%", toggleActions: "play none none none" },
      });
gsap.from("[data-hero-card]", {
        scale: 0.95, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power2.out",
        scrollTrigger: { trigger: "[data-hero-cards]", start: "top 85%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="section-padding bg-bg-primary"
    >
      <div className="container">
        {/* Upper: centered text + buttons + social proof */}
        <div className="flex flex-col items-center text-center">
          <span data-hero-label className="section-label mb-2">
            Welcome to Vidya Bharati International
          </span>

          <h1
            data-hero-heading
            className="mb-4 max-w-[896px] font-heading text-[32px] md:text-[40px] lg:text-[56px] font-normal leading-[1.1] text-text-primary"
          >
            Where Knowledge Meets Values,{" "}
            <em className="font-heading italic">Futures</em> Take Shape
          </h1>

          <p
            data-hero-paragraph
            className="mb-6 max-w-[600px] font-body text-base leading-[1.5] text-text-muted"
          >
            At Vidya Bharati International School, we nurture every student with
            a rigorous CBSE curriculum, dedicated teachers, and a values-based
            education where lifelong learners thrive from nursery through Class XII.
          </p>

          <div data-hero-buttons className="mb-6 flex items-center gap-3">
            <Button onClick={onEnquiryOpen}>Enquire Now</Button>
          </div>

        </div>

        {/* Lower: three-column cards area */}
        <div
          data-hero-cards
          className="hero-cards-grid mt-8 grid gap-2 md:gap-[6px]"
        >
          {/* 1 - Announcements & Updates card */}
          <div
            data-hero-card
            className="flex min-h-0 md:min-h-[500px] flex-col justify-between rounded-[6px] bg-bg-dark p-4 md:p-6"
          >
            <div>
              <span className="inline-block text-xs font-medium uppercase tracking-wider text-white/40 mb-5">
                Latest Updates
              </span>
              <div className="flex flex-col gap-0">
                {[
                  { date: "Mar 2026", title: "Admissions Open 2026–27", desc: "Applications now accepted for Nursery to Class XI. Limited seats available.", highlight: true },
                  { date: "Feb 2026", title: "Board Results: 100% Pass Rate", desc: "Class XII achieves 100% pass rate for the third consecutive year." },
                  { date: "Jan 2026", title: "Annual Sports Day", desc: "Inter-house athletics, yoga demonstrations, and prize distribution ceremony." },
                  { date: "Dec 2025", title: "Science Exhibition Winners", desc: "Our students secured 1st place at the District-Level Science Exhibition." },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex gap-3 py-3.5"
                    style={{ borderBottom: "0.8px solid rgba(255,255,255,0.06)" }}
                  >
                    <span className="shrink-0 text-xs text-white/30 min-w-[62px] pt-0.5">
                      {item.date}
                    </span>
                    <div>
                      <p className="text-sm font-medium leading-tight text-white/90 flex items-center gap-2">
                        {item.title}
                        {item.highlight && (
                          <span className="inline-block px-1.5 py-0.5 text-[10px] font-medium uppercase rounded bg-white/10 text-white/50">
                            New
                          </span>
                        )}
                      </p>
                      <p className="text-xs leading-[1.5] text-white/40 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#admissions"
              className="flex items-center justify-center gap-2 mt-4 rounded-[6px] py-3 text-sm font-medium text-white/70 transition-colors duration-300 hover:text-white"
              style={{ border: "0.8px solid rgba(255,255,255,0.1)" }}
            >
              View All Updates
              <Image src="/images/icons/arrow-right.svg" alt="" width={14} height={14} style={{ opacity: 0.5, filter: "invert(1)" }} />
            </a>
          </div>

          {/* 2 - Video card */}
          <div
            data-hero-card
            className="relative min-h-[200px] md:min-h-[500px] overflow-hidden rounded-[6px]"
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/images/hero-video.mp4" type="video/mp4" />
            </video>
          </div>

          {/* 3 - Gradient stat card */}
          <div
            data-hero-card
            className="relative flex min-h-[250px] md:min-h-[500px] flex-col justify-end overflow-hidden rounded-[6px] p-3 md:p-5"
          >
            <Image
              src="https://img.freepik.com/premium-photo/indian-school-students-group-sitting-classroom_130568-364.jpg?w=2000"
              alt="Student achievement background"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />

            <div className="relative z-10 rounded-2xl border border-white/20 bg-white/10 p-4 md:p-6 backdrop-blur-xl">
              <p className="mb-2 font-heading text-[48px] md:text-[80px] lg:text-[120px] font-semibold leading-none text-white">
                96%
              </p>
              <p className="text-sm leading-[1.5] text-white/90">
                of Vidya Bharati graduates secure admission to top Indian universities and IITs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
