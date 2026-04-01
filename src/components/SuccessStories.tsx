"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/animations";

const stories = [
  {
    image: "/images/reviews/review1.jpg",
    quote: "Vidya Bharati's teaching approach completely transformed my daughter's confidence and love for learning.",
    name: "Priya Sharma",
    role: "Parent, Class X",
  },
  {
    image: "/images/reviews/review2.jpg",
    quote: "The IIT foundation classes gave my son a strong head start. He comes home excited every day.",
    name: "Rajesh Mehta",
    role: "Parent, Class XII",
  },
  {
    image: "/images/reviews/review3.jpg",
    quote: "Finding a school that balances academics with Indian values was important — Vidya Bharati delivers both.",
    name: "Anita Reddy",
    role: "Parent, Class VIII",
  },
  {
    image: "/images/people/people1.avif",
    quote: "The teachers know each student by name. The small class sizes make a real difference.",
    name: "Suresh Iyer",
    role: "Parent, Class VI",
  },
  {
    image: "/images/people/people5.avif",
    quote: "My child has thrived both academically and personally since joining Vidya Bharati.",
    name: "Kavita Joshi",
    role: "Parent, Class IV",
  },
  {
    image: "/images/people/people6.avif",
    quote: "The emphasis on CBSE results alongside holistic development is truly commendable.",
    name: "Amit Verma",
    role: "Parent, Class IX",
  },
];

export default function SuccessStories() {
  const sectionRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

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

      gsap.from(".story-card", {
        scale: 0.95,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    // Auto-scrolling marquee for story cards
    let marqueeTween: gsap.core.Tween | null = null;
    const timer = setTimeout(() => {
      if (sliderRef.current) {
        const track = sliderRef.current;
        const half = track.scrollWidth / 2;
        marqueeTween = gsap.to(track, {
          x: -half,
          duration: 30,
          ease: "none",
          repeat: -1,
        });

        // Pause on hover
        track.addEventListener("mouseenter", () => marqueeTween?.pause());
        track.addEventListener("mouseleave", () => marqueeTween?.resume());
      }
    }, 100);

    return () => {
      ctx.revert();
      clearTimeout(timer);
      marqueeTween?.kill();
    };
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
        <div className="stories-header text-center mb-10 md:mb-14">
          <h2 className="font-heading text-[32px] md:text-[40px] lg:text-[56px] leading-[1.1] mb-4">
            Success stories that <em className="italic">inspire</em>
          </h2>
          <p
            className="mx-auto max-w-[550px]"
            style={{ fontSize: 16, color: "var(--color-text-muted)", lineHeight: 1.6 }}
          >
            Our parents and students have experienced transformative growth through
            Vidya Bharati&apos;s holistic education approach.
          </p>
        </div>
      </div>

      {/* Slider - marquee */}
      <div className="overflow-hidden">
        <div
          ref={sliderRef}
          className="flex gap-4 whitespace-nowrap"
        >
          {[...stories, ...stories].map((story, i) => (
          <div
            key={i}
            className="story-card group relative shrink-0 overflow-hidden rounded-[24px] cursor-pointer snap-start"
            style={{ width: 380, height: 500 }}
          >
            {/* Background image */}
            <Image
              src={story.image}
              alt={story.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Play button - only visible on hover */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm scale-75 group-hover:scale-100 transition-transform duration-300">
                <Image
                  src="/images/icons/play.svg"
                  alt="Play"
                  width={20}
                  height={20}
                />
              </div>
              <span className="mt-2 text-sm font-medium text-white/80">Play Story</span>
            </div>

            {/* Content - bottom, slides up on hover */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-400">
              <p className="text-white font-heading text-[18px] md:text-[20px] leading-[1.3]">
                &ldquo;{story.quote}&rdquo;
              </p>
              <div>
                <p className="text-white text-sm font-medium">{story.name}</p>
                <p className="text-white/60 text-xs">{story.role}</p>
              </div>
            </div>
          </div>
        ))}

        </div>
      </div>

      {/* Dots / pagination */}
      <div className="flex justify-center gap-2 mt-8">
        {stories.map((_, i) => (
          <div
            key={i}
            className="w-2 h-2 rounded-full"
            style={{ backgroundColor: i === 0 ? "var(--color-text-primary)" : "var(--color-border-light)" }}
          />
        ))}
      </div>
    </section>
  );
}
