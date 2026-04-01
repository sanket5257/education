"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/animations";

const toppers = [
  { name: "Priya Mehta", score: "98.4%", stream: "Science", year: "2025", image: "/images/people/people1.avif" },
  { name: "Arjun Reddy", score: "97.8%", stream: "Commerce", year: "2024", image: "/images/people/people6.avif" },
  { name: "Sneha Iyer", score: "97.2%", stream: "Science", year: "2023", image: "/images/people/people3.avif" },
  { name: "Rahul Sharma", score: "96.8%", stream: "Humanities", year: "2025", image: "/images/people/people5.avif" },
];

export default function Achievements() {
  const sectionRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ach-fade", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // GSAP marquee for toppers
      if (marqueeRef.current) {
        const track = marqueeRef.current;
        const totalWidth = track.scrollWidth / 2;

        gsap.set(track, { x: 0 });
        gsap.to(track, {
          x: -totalWidth,
          duration: 30,
          ease: "none",
          repeat: -1,
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="achievements"
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div className="container">
        {/* Header */}
        <div className="ach-fade text-center mb-10 md:mb-14">
          <span className="section-label">Results & Achievements</span>
          <div className="pt-2" />
          <h2 className="font-heading text-[32px] md:text-[40px] lg:text-[56px] leading-[1.1]">
            Board Exam <em className="italic">Results</em>
          </h2>
        </div>

        {/* Stats Strip */}
        <div className="ach-fade grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 md:mb-14">
          {[
            { value: "100%", label: "Pass Rate" },
            { value: "96.2%", label: "Avg. Score (Top 10)" },
            { value: "78%", label: "Distinction" },
            { value: "45+", label: "IIT / AIIMS / NIT" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-[8px] p-5 text-center bg-white"
              style={{ border: "1px solid var(--color-border-light)" }}
            >
              <p className="font-heading text-[32px] md:text-[40px] leading-[1]" style={{ color: "var(--color-text-primary)" }}>
                {stat.value}
              </p>
              <p className="text-sm mt-1" style={{ color: "var(--color-text-muted)" }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Toppers */}
        <div className="ach-fade mb-10 md:mb-14">
          <h3 className="font-heading text-[22px] md:text-[28px] leading-[1.2] mb-6">
            Our <em className="italic">Toppers</em>
          </h3>
          <div className="overflow-hidden">
            <div ref={marqueeRef} className="flex whitespace-nowrap">
              {[...toppers, ...toppers, ...toppers, ...toppers].map((topper, i) => (
                <div
                  key={`${topper.name}-${i}`}
                  className="shrink-0 w-[220px] md:w-[260px] mx-2 rounded-[8px] overflow-hidden bg-white whitespace-normal"
                  style={{ border: "1px solid var(--color-border-light)" }}
                >
                  <div className="relative w-full aspect-[3/4]">
                    <Image src={topper.image} alt={topper.name} fill className="object-cover" />
                  </div>
                  <div className="p-4 text-center">
                    <p className="font-medium text-sm" style={{ color: "var(--color-text-primary)" }}>{topper.name}</p>
                    <p className="font-heading text-[28px] leading-tight mt-1" style={{ color: "var(--color-text-primary)" }}>
                      {topper.score}
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--color-text-muted)" }}>
                      {topper.stream} &bull; {topper.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements List */}
        <div className="ach-fade pt-10 md:pt-14">
          <h2 className="font-heading text-[32px] md:text-[40px] lg:text-[56px] leading-[1.1] text-center mb-10 md:mb-14">
            Awards & <em className="italic">Recognitions</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "Best CBSE School", subtitle: "Gurugram District", year: "2025", image: "/images/awards/best-school.png" },
              { title: "Science Olympiad", subtitle: "3 Gold Medals — National", year: "2024", image: "/images/awards/best-school.png" },
              { title: "Green School", subtitle: "CSE Certification", year: "2024", image: "/images/awards/best-school.png" },
              { title: "Debate Championship", subtitle: "Regional Winners", year: "2023", image: "/images/awards/best-school.png" },
            ].map((award) => (
              <div
                key={award.title}
                className="group relative rounded-[10px] overflow-hidden aspect-square cursor-pointer"
              >
                <Image src={award.image} alt={award.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/60 transition-all duration-400" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-400 translate-y-4 group-hover:translate-y-0">
                  <p className="font-heading text-xl leading-tight text-white">{award.title}</p>
                  <p className="text-sm mt-2 text-white/70">{award.subtitle}</p>
                  <span className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-medium bg-white/15 text-white/80">
                    {award.year}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
