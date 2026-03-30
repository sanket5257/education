"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/animations";
import Button from "@/components/Button";

const avatarSrcs = [
  "/images/people/people1.avif",
  "/images/people/people6.avif",
  "/images/people/people3.avif",
  "/images/people/people5.avif",
];

export default function Hero() {
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
      gsap.from("[data-hero-social]", {
        opacity: 0, duration: 0.8, delay: 0.4, ease: "power2.out",
        scrollTrigger: { trigger: "[data-hero-social]", start: "top 85%", toggleActions: "play none none none" },
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
            className="mb-4 max-w-[896px] font-heading text-[56px] font-normal leading-[1.1] text-text-primary"
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
            <Button href="#admissions">Enroll Now</Button>
          </div>

          <div
            data-hero-social
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {/* Avatar stack */}
            <div className="flex items-center">
              {avatarSrcs.map((src, i) => (
                <div
                  key={src}
                  className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-bg-primary"
                  style={{
                    marginLeft: i === 0 ? 0 : -8,
                    zIndex: avatarSrcs.length - i,
                  }}
                >
                  <Image
                    src={src}
                    alt={`Student ${i + 1}`}
                    fill
                    sizes="40px"
                    className="object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/images/stars.png"
                alt="5 stars"
                width={100}
                height={20}
                className="h-auto"
              />
              <span className="text-sm font-semibold text-text-primary">
                4.9/5
              </span>
            </div>

            <span className="text-sm text-text-muted">
              1200+ Students Enrolled
            </span>
          </div>
        </div>

        {/* Lower: three-column cards area */}
        <div
          data-hero-cards
          className="hero-cards-grid mt-8 grid gap-[6px]"
        >
          {/* 1 - Dark quote card */}
          <div
            data-hero-card
            className="flex min-h-[500px] flex-col justify-between rounded-[6px] bg-bg-dark p-6"
          >
            <p className="mb-6 font-body text-base leading-[1.7] text-white/85">
              &ldquo;Every child who walks through our doors carries a spark of
              brilliance. Our job is to{" "}
              <em className="font-heading italic">fan that spark into a flame</em>{" "}
              through rigorous academics, compassionate mentorship, and a
              community that{" "}
              <em className="font-heading italic">celebrates each student&rsquo;s unique journey</em>.
              That is the Vidya Bharati promise.&rdquo;
            </p>

            <div className="flex items-center gap-3">
              <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
                <Image
                  src="/images/people/people3.avif"
                  alt="Dr. Ananya Sharma"
                  fill
                  sizes="36px"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold leading-tight text-text-light">
                  Dr. Ananya Sharma
                </p>
                <p className="text-xs leading-tight text-text-dark-muted">
                  Principal
                </p>
              </div>
            </div>
          </div>

          {/* 2 - Video card */}
          <div
            data-hero-card
            className="relative min-h-[500px] overflow-hidden rounded-[6px]"
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
            className="relative flex min-h-[500px] flex-col justify-end overflow-hidden rounded-[6px] p-5"
          >
            <Image
              src="https://i.pinimg.com/1200x/b6/d2/69/b6d26991c26a90cae062acc789327266.jpg"
              alt="Student achievement background"
              fill
              sizes="(max-width: 1024px) 100vw, 33vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/10" />

            <div className="relative z-10 rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-xl">
              <p className="mb-2 font-heading text-[120px] font-semibold leading-none text-white">
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
