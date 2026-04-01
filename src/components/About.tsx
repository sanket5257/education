"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/animations";
import Button from "@/components/Button";

const features = [
  {
    icon: "/images/icons/about-icon1.svg",
    title: "Academic Excellence",
    description:
      "A tradition of academic achievement, CBSE board results, and holistic development",
  },
  {
    icon: "/images/icons/about-icon2.svg",
    title: "Cultural Values",
    description:
      "Rooted in Indian traditions, fostering respect, discipline, and a sense of belonging",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(imageRef.current!, {
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

      gsap.from(contentRef.current!, {
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

      const featureItems = featuresRef.current!.children;
      gsap.from(featureItems, {
        y: 20,
        opacity: 0,
        stagger: 0.15,
        delay: 0.4,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: featuresRef.current!,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="section-padding">
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column - Image composition */}
        <div
          ref={imageRef}
          className="relative"
          style={{ overflow: "visible" }}
        >
          {/* Main photo - offset left 10%, 90% width like reference */}
          <div
            className="relative ml-12 overflow-hidden"
            style={{ borderRadius: 32, aspectRatio: "598 / 700", width: "80%" }}
          >
            <Image
              src="/images/lifestyle/about-hero.jpg"
              alt="Students at Vidya Bharati International School"
              fill
              className="object-cover"
            />
          </div>

          {/* Drawing - top right, rotated 12deg clockwise */}
          <Image
            src="/images/about/drawing.webp"
            alt="Child's drawing"
            width={200}
            height={200}
            className="absolute hidden lg:block pointer-events-none"
            style={{ top: "-10%", left: "62%", width: "40%", height: "auto", transform: "rotate(-15deg)" }}
          />

          {/* Pink SVG - bottom right, extending below */}
          <Image
            src="/images/about/story-pink.svg"
            alt=""
            width={300}
            height={307}
            className="absolute hidden lg:block pointer-events-none"
            style={{ bottom: "-14%", left: "68%", width: "45%", height: "auto" }}
          />

          {/* Light SVG - bottom left */}
          <Image
            src="/images/about/light-story.svg"
            alt=""
            width={160}
            height={160}
            className="absolute hidden lg:block pointer-events-none"
            style={{ bottom: "-2%", left: "0%", width: "24%", height: "auto" }}
          />
        </div>

        {/* Right Column - Content */}
        <div ref={contentRef}>
          <span className="section-label">About Us</span>

          <div className="pt-2" />

          <h2
            className="font-heading text-[32px] md:text-[40px] lg:text-[56px] leading-[1.1]"
          >
            <em className="italic">Our Story</em>
            {" "}&amp; Mission
          </h2>

          <div className="pt-6" />

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.5,
              color: "var(--color-text-muted)",
            }}
          >
            Established in 1995, Vidya Bharati International School has spent
            nearly three decades preparing young minds for the future. Our mission
            is to foster curiosity, integrity, and resilience in every student
            through a rigorous CBSE curriculum, Indian values, and a vibrant
            school community committed to holistic education.
          </p>

          <div className="pt-6" />

          <Button href="#about">Learn More</Button>

          <div className="pt-6" />

          {/* Feature Items */}
          <div ref={featuresRef} className="grid gap-1.5">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-1.5 p-4"
                style={{
                  borderTop: "0.8px solid #f5f4f4",
                  borderBottom: "0.8px solid #f5f4f4",
                }}
              >
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={20}
                  height={20}
                  className="shrink-0 mt-0.5"
                />
                <div>
                  <p
                    className="font-medium"
                    style={{
                      fontSize: 14,
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {feature.title}
                  </p>
                  <p
                    style={{
                      fontSize: 16,
                      lineHeight: 1.5,
                      color: "var(--color-text-muted)",
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
