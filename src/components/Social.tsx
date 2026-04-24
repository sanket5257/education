"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function Social() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".social-fade", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="social"
      ref={sectionRef}
      className="section-padding bg-bg-secondary"
    >
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left — YouTube Video */}
          <div className="social-fade rounded-[12px] overflow-hidden aspect-video">
            <iframe
              src="https://www.youtube.com/embed/kffacxfA7G4"
              title="Vidya Bharati International School"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>

          {/* Right — CTA + Social Links */}
          <div>
            <span className="social-fade section-label">Stay Connected</span>
            <div className="pt-2" />
            <h2 className="social-fade font-heading text-[32px] md:text-[40px] lg:text-[48px] leading-[1.1]">
              See Our Campus <em className="italic">Come Alive</em>
            </h2>
            <p
              className="social-fade mt-4 text-base text-text-muted max-w-[460px] leading-[1.6]"
            >
              Watch campus tours, student stories, and event highlights on our
              YouTube channel. Follow us on Instagram for daily glimpses of life
              at Vidya Bharati.
            </p>

            {/* Social Links */}
            <div className="social-fade flex flex-col sm:flex-row gap-3 mt-8">
              {/* YouTube */}
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md bg-bg-dark text-text-light"
              >
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="shrink-0 text-white"
                >
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
                <span className="text-[14px] text-white font-medium">Subscribe on YouTube</span>
              </Link>

              {/* Instagram */}
              <Link
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-full px-5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md border border-border-light bg-bg-primary text-text-primary"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0"
                >
                  <defs>
                    <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#FFDC80" />
                      <stop offset="25%" stopColor="#F77737" />
                      <stop offset="50%" stopColor="#E1306C" />
                      <stop offset="75%" stopColor="#C13584" />
                      <stop offset="100%" stopColor="#833AB4" />
                    </linearGradient>
                  </defs>
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig-grad)" strokeWidth="2" />
                  <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="2" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="url(#ig-grad)" />
                </svg>
                <span className="text-[14px] font-medium">Follow on Instagram</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
