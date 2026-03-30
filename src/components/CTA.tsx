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

export default function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-animate", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    // Play video when it scrolls into view
    const video = videoRef.current;
    if (!video) return () => ctx.revert();

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        }
      },
      { threshold: 0.25 }
    );
    observer.observe(video);

    return () => {
      ctx.revert();
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div className="container">
        <div
          className="rounded-[12px] flex flex-col items-center text-center relative overflow-hidden"
          style={{
            padding: "clamp(32px, 8vw, 64px) clamp(16px, 4vw, 32px)",
          }}
        >
          {/* Background Video */}
          <div className="absolute inset-0 bg-bg-dark" />
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/images/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/70" />

          {/* Content - above video */}
          <div className="relative z-10 flex flex-col items-center">
          {/* Avatar stack */}
          <div className="cta-animate flex items-center mb-4">
            {avatarSrcs.map((src, i) => (
              <div
                key={src}
                className="relative overflow-hidden rounded-full border-2"
                style={{
                  width: 40,
                  height: 40,
                  marginLeft: i === 0 ? 0 : -8,
                  borderColor: "var(--color-bg-dark)",
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

          <span
            className="cta-animate mb-6"
            style={{
              fontSize: 14,
              color: "rgba(255, 255, 255, 0.5)",
            }}
          >
            1200+ Students Enrolled
          </span>

          {/* Heading */}
          <h2
            className="cta-animate mb-5 font-heading text-[32px] md:text-[40px] lg:text-[56px] leading-[1.1] max-w-[600px]"
            style={{
              color: "var(--color-text-light)",
            }}
          >
            Begin your child&apos;s{" "}
            <em className="italic">journey</em>, today.
          </h2>

          {/* Description */}
          <p
            className="cta-animate mb-8"
            style={{
              fontSize: 16,
              color: "rgba(255, 255, 255, 0.6)",
              maxWidth: 500,
              lineHeight: 1.6,
            }}
          >
            Applications for the 2026-27 academic session are now open. Secure
            your child&apos;s place at Vidya Bharati International School today.
          </p>

          {/* Buttons */}
          <div className="cta-animate flex flex-col sm:flex-row items-center gap-3">
            <Button variant="primary" href="#admissions">
              Apply Now
            </Button>
            <Button variant="primary" href="#contact">
              Contact Us
            </Button>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
