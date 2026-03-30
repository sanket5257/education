"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/animations";

const faqData = [
  {
    question: "What classes does Vidya Bharati International School offer?",
    answer:
      "We serve students from nursery through Class XII under the CBSE board, providing a continuous and cohesive educational experience that grows with your child at every stage of their development.",
  },
  {
    question: "What is the admission process?",
    answer:
      "Admissions open in January each academic session. Families can apply online through our portal, after which students are invited for an interaction and campus visit before final admission decisions are made.",
  },
  {
    question: "Does Vidya Bharati International School offer scholarships?",
    answer:
      "Yes, we offer both merit-based and need-based scholarships to ensure that a high-quality education remains accessible to deserving students from all backgrounds across India.",
  },
  {
    question: "What extracurricular activities are available?",
    answer:
      "We offer over 30 clubs and activities including sports teams, debate society, robotics club, Indian classical music and dance, yoga, NCC, community service groups, and much more.",
  },
  {
    question: "What makes Vidya Bharati different from other schools?",
    answer:
      "Our 15:1 student-teacher ratio, experienced CBSE faculty, modern campus facilities, strong IIT/NEET foundation programme, and a curriculum that balances academic rigour with Indian values and holistic development set us apart.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".faq-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".faq-accordion-item", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-accordion",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="section-padding"
      style={{ backgroundColor: "var(--color-bg-primary)" }}
    >
      <div style={{ maxWidth: 1072, margin: "0 auto", width: "100%" }}>
        {/* Centered Header */}
        <div className="faq-header flex flex-col items-center text-center gap-4 mb-14">
          <span className="section-label">FAQ</span>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: 56,
              lineHeight: 1.1,
            }}
          >
            Your <em style={{ fontStyle: "italic" }}>questions</em> answered.
          </h2>
          <p
            style={{
              fontSize: 16,
              lineHeight: 1.5,
              color: "var(--color-text-muted)",
              maxWidth: 560,
            }}
          >
            Everything you need to know about Vidya Bharati International School.
            Still have questions? Get in touch and we&apos;ll walk you through it.
          </p>
        </div>

        {/* Accordion */}
        <div className="faq-accordion">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="faq-accordion-item"
              style={{
                borderBottom: "1px solid var(--color-border-light)",
              }}
            >
              <button
                className="w-full flex items-center justify-between py-5 cursor-pointer"
                onClick={() => toggleItem(index)}
                aria-expanded={openIndex === index}
              >
                <span
                  className="text-left font-medium"
                  style={{
                    fontSize: 18,
                    color: "var(--color-text-primary)",
                  }}
                >
                  {item.question}
                </span>

                <Image
                  src="/images/icons/plus.svg"
                  alt={openIndex === index ? "Collapse" : "Expand"}
                  width={20}
                  height={20}
                  className={`faq-icon shrink-0 ml-6 ${
                    openIndex === index ? "open" : ""
                  }`}
                />
              </button>

              <div
                className={`faq-answer ${openIndex === index ? "open" : ""}`}
              >
                <p
                  className="pb-5"
                  style={{
                    fontSize: 16,
                    color: "var(--color-text-muted)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
