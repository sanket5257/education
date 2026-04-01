"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/animations";

export default function Principal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".principal-image", {
        x: -60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".principal-content", {
        x: 60,
        opacity: 0,
        delay: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current!,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".principal-stats", {
        y: 20,
        opacity: 0,
        delay: 0.4,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".principal-stats",
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="principal" ref={sectionRef} className="section-padding">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-14 items-center">
          {/* Left - Image */}
          <div className="principal-image lg:col-span-2">
            <div className="relative overflow-hidden rounded-[6px]" style={{ aspectRatio: "3 / 4" }}>
              <Image
                src="/images/people/people4.jpg"
                alt="Dr. Ananya Sharma - Principal, Vidya Bharati International School"
                fill
                className="object-cover"
              />
              {/* Name card overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)" }}
              >
                <p className="font-heading text-[20px] md:text-[24px] text-white leading-tight">
                  Dr. Ananya Sharma
                </p>
                <p className="text-sm text-white/70">
                  M.Ed., Ph.D. in Education &bull; 25+ Years in Education
                </p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="principal-content lg:col-span-3">
            <span className="section-label">From The Principal&apos;s Desk</span>

            <div className="pt-2" />

            <h2 className="font-heading text-[32px] md:text-[40px] lg:text-[56px] leading-[1.1]">
              A Message of{" "}
              <em className="italic">Commitment</em>
            </h2>

            <div className="pt-6" />

            <div className="flex flex-col gap-4" style={{ fontSize: 16, lineHeight: 1.7, color: "var(--color-text-muted)" }}>
              <p>
                Dear Parents and Students,
              </p>
              <p>
                At Vidya Bharati International School, we believe that education is not merely about
                textbooks and examinations — it is about nurturing the complete individual. Every child
                who enters our campus carries within them unique potential, and our sacred responsibility
                is to help that potential flourish.
              </p>
              <p>
                Over the past three decades, we have built a community where academic rigour walks
                hand-in-hand with Indian values, where curiosity is celebrated, and where every student
                is known, valued, and guided. Our consistently outstanding CBSE results are a testament
                not to rote learning, but to the deep understanding and critical thinking we cultivate
                in each classroom.
              </p>
              <p>
                I invite you to visit our campus and experience the Vidya Bharati difference firsthand.
              </p>
              <p className="font-medium" style={{ color: "var(--color-text-primary)" }}>
                — Dr. Ananya Sharma, Principal
              </p>
            </div>

            {/* Quick stats row */}
            <div className="principal-stats grid grid-cols-3 gap-3 mt-8">
              {[
                { value: "25+", label: "Years in Education" },
                { value: "M.Ed, Ph.D.", label: "Qualifications" },
                { value: "CBSE", label: "Board Certified" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-[6px] p-3 md:p-4 text-center"
                  style={{ backgroundColor: "var(--color-bg-secondary)", border: "0.8px solid var(--color-border-light)" }}
                >
                  <p className="font-heading text-[18px] md:text-[22px] leading-tight">
                    {stat.value}
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--color-text-muted)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
