"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "@/lib/animations";

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

function FaqIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <div
      className="shrink-0 ml-4 w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-colors duration-300"
      style={{
        backgroundColor: isOpen ? "#E8613C" : "transparent",
        border: isOpen ? "none" : "1.5px solid var(--color-border-light)",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300"
        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
      >
        <path
          d="M8 3.33337V12.6667"
          stroke={isOpen ? "#fff" : "#222"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M3.33337 8H12.6667"
          stroke={isOpen ? "#fff" : "#222"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
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

      gsap.from(".faq-card-item", {
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
      style={{ backgroundColor: "var(--color-bg-secondary)" }}
    >
      <div style={{ maxWidth: 780, margin: "0 auto", width: "100%" }}>
        {/* Centered Header */}
        <div className="faq-header flex flex-col items-center text-center gap-5 mb-10 md:mb-14">
          <span className="section-label">Questions Parents Often Ask</span>
          <h2
            className="font-heading text-[28px] md:text-[40px] lg:text-[52px] leading-[1.12]"
          >
            Clear answers to help you feel confident.
          </h2>
        </div>

        {/* Accordion */}
        <div className="faq-accordion flex flex-col gap-3">
          {faqData.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="faq-card-item rounded-[16px] transition-shadow duration-300"
                style={{
                  backgroundColor: "var(--color-bg-primary)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 md:px-7 md:py-6 cursor-pointer"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-left font-heading text-[16px] md:text-[18px] leading-[1.3]"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {item.question}
                  </span>
                  <FaqIcon isOpen={isOpen} />
                </button>

                <div
                  className={`faq-answer ${isOpen ? "open" : ""}`}
                >
                  <p
                    className="px-6 pb-5 md:px-7 md:pb-6"
                    style={{
                      fontSize: 15,
                      color: "var(--color-text-muted)",
                      lineHeight: 1.65,
                    }}
                  >
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
