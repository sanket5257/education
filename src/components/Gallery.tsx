"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/animations";

const categories = ["All", "Campus", "Classrooms", "Events", "Sports"] as const;

type Category = (typeof categories)[number];

const galleryItems: { src: string; alt: string; category: Exclude<Category, "All"> }[] = [
  { src: "/images/lifestyle/about-hero.jpg", alt: "School main building and entrance", category: "Campus" },
  { src: "/images/programs/innovation-lab.jpg", alt: "Smart classroom with digital board", category: "Classrooms" },
  { src: "/images/reviews/review1.jpg", alt: "Annual Day celebration", category: "Events" },
  { src: "/images/programs/sports.jpg", alt: "Students on the cricket ground", category: "Sports" },
  { src: "/images/lifestyle/lifestyle3.jpg", alt: "School library and reading hall", category: "Campus" },
  { src: "/images/programs/iit-neet.jpg", alt: "Science laboratory in action", category: "Classrooms" },
  { src: "/images/reviews/review2.jpg", alt: "Republic Day flag hoisting", category: "Events" },
  { src: "/images/lifestyle/lifestyle7.jpg", alt: "Yoga session in the school ground", category: "Sports" },
  { src: "/images/lifestyle/lifestyle4.jpg", alt: "School playground and sports complex", category: "Campus" },
  { src: "/images/programs/arts.jpg", alt: "Computer lab with modern systems", category: "Classrooms" },
  { src: "/images/reviews/review3.jpg", alt: "Science exhibition and project display", category: "Events" },
  { src: "/images/blog/blog1.jpg", alt: "Inter-school athletics competition", category: "Sports" },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".gallery-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".gallery-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Animate cards on filter change
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.children;
    gsap.fromTo(
      cards,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.4, stagger: 0.05, ease: "power2.out" }
    );
  }, [activeCategory]);

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-padding bg-bg-secondary"
    >
      <div className="container">
        {/* Header */}
        <div className="gallery-header flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8 md:mb-12">
          <div>
            <span className="section-label">Campus Life</span>
            <div className="pt-2" />
            <h2 className="font-heading text-[32px] md:text-[40px] lg:text-[56px] leading-[1.1]">
              Explore Our{" "}
              <em className="italic">Campus</em>
            </h2>
            <div className="pt-3" />
            <p className="text-base leading-[1.6] text-text-muted max-w-[500px]">
              A glimpse into everyday life at Vidya Bharati — our classrooms,
              events, sports, and the spaces where students grow.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-[6px] px-4 py-2 text-sm font-medium transition-all duration-300 cursor-pointer border-[0.8px] border-border-light ${
                  activeCategory === cat
                    ? "bg-bg-dark text-text-light"
                    : "bg-bg-primary text-text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div ref={gridRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {filteredItems.map((item, i) => (
            <div
              key={`${item.src}-${activeCategory}`}
              className={`group relative overflow-hidden rounded-[6px] cursor-pointer ${
                i % 5 === 0 ? "aspect-[4/5] row-span-2" : "aspect-square"
              }`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end p-3 md:p-4 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div>
                  <p className="text-sm font-medium text-white">{item.alt}</p>
                  <p className="text-xs text-white/60 mt-0.5">{item.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
