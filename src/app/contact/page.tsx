"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "@/lib/animations";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";
import Button from "@/components/Button";

const faqData = [
  {
    question: "What age groups do you accept?",
    answer:
      "We welcome students from age 3 (Nursery) through age 17 (Class XII). Our programmes are designed to support every stage of a child\u2019s academic and personal growth under the CBSE curriculum.",
  },
  {
    question: "What curriculum do you follow?",
    answer:
      "Vidya Bharati International School follows the CBSE (Central Board of Secondary Education) curriculum, complemented by holistic development programmes, value-based education, and a strong foundation for IIT/NEET preparation from Class VIII onwards.",
  },
  {
    question: "Are your teachers qualified?",
    answer:
      "All our faculty members hold relevant degrees (B.Ed, M.Ed, or higher) and undergo continuous professional development. Our 15:1 student-teacher ratio ensures personalised attention for every student.",
  },
  {
    question: "What are your class sizes?",
    answer:
      "We maintain a maximum of 30 students per section with a 15:1 student-teacher ratio. This ensures each student receives individual attention and participates actively in classroom discussions.",
  },
  {
    question: "How do you ensure child safety?",
    answer:
      "Our campus has CCTV surveillance, trained security staff, GPS-enabled transport, a full-time medical officer, and strict visitor management protocols. We conduct regular safety drills and maintain a zero-tolerance policy for bullying.",
  },
];

export default function ContactPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const pageRef = useRef<HTMLDivElement>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", phone: "", location: "", message: "" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-hero-left", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".contact-hero-right", {
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.from(".faq-section-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".faq-section-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".contact-faq-item", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-faq-list",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".contact-cta-left", {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-cta",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".contact-cta-right", {
        x: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-cta",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef}>
      <Navbar onEnquiryOpen={() => setEnquiryOpen(true)} />
      <main>
        {/* ── Hero: Left Card + Right Form ── */}
        <section className="section-padding" style={{ backgroundColor: "var(--color-bg-primary)" }}>
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 items-stretch">
              {/* Left: Dark card */}
              <div
                className="contact-hero-left relative overflow-hidden rounded-[20px] p-8 md:p-12 flex flex-col justify-end min-h-[320px] md:min-h-[480px]"
                style={{ backgroundColor: "#003B20" }}
              >
                <Image
                  src="/images/contact.png"
                  alt="Contact illustration"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover opacity-80"
                />
                <div className="relative z-10">
                  <h1 className="font-heading text-[32px] md:text-[44px] lg:text-[52px] leading-[1.08] text-white mb-4">
                    We&apos;d Love to{" "}
                    <em className="italic">Hear From You</em>
                  </h1>
                  <p
                    className="max-w-[380px]"
                    style={{ fontSize: 15, lineHeight: 1.6, color: "rgba(255,255,255,0.7)" }}
                  >
                    Have a question about admissions, academics, or campus life? Reach out and we&apos;ll get back to you.
                  </p>
                </div>
              </div>

              {/* Right: Contact form */}
              <div
                className="contact-hero-right rounded-[20px] p-6 md:p-10"
                style={{
                  backgroundColor: "var(--color-bg-secondary)",
                  border: "1px solid var(--color-border)",
                }}
              >
                <h2
                  className="font-heading text-[24px] md:text-[30px] leading-[1.2] mb-6 text-center"
                  style={{ color: "var(--color-text-primary)" }}
                >
                  Submit Your Query
                </h2>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-medium uppercase tracking-wider mb-1.5"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10"
                        style={{
                          backgroundColor: "var(--color-bg-primary)",
                          border: "0.8px solid var(--color-border-light)",
                          color: "var(--color-text-primary)",
                        }}
                        placeholder="Your Name"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-medium uppercase tracking-wider mb-1.5"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10"
                        style={{
                          backgroundColor: "var(--color-bg-primary)",
                          border: "0.8px solid var(--color-border-light)",
                          color: "var(--color-text-primary)",
                        }}
                        placeholder="Enter your Email"
                      />
                    </div>
                  </div>

                  {/* Phone + Location */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        className="block text-xs font-medium uppercase tracking-wider mb-1.5"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10"
                        style={{
                          backgroundColor: "var(--color-bg-primary)",
                          border: "0.8px solid var(--color-border-light)",
                          color: "var(--color-text-primary)",
                        }}
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label
                        className="block text-xs font-medium uppercase tracking-wider mb-1.5"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        Location *
                      </label>
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10"
                        style={{
                          backgroundColor: "var(--color-bg-primary)",
                          border: "0.8px solid var(--color-border-light)",
                          color: "var(--color-text-primary)",
                        }}
                        placeholder="Enter your city"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      className="block text-xs font-medium uppercase tracking-wider mb-1.5"
                      style={{ color: "var(--color-text-muted)" }}
                    >
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10 resize-none"
                      style={{
                        backgroundColor: "var(--color-bg-primary)",
                        border: "0.8px solid var(--color-border-light)",
                        color: "var(--color-text-primary)",
                      }}
                      placeholder="Write your message"
                    />
                  </div>

                  {/* Submit */}
                  <Button variant="dark" fullWidth>
                    Get Started
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

     

       
      </main>
      <Footer onEnquiryOpen={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </div>
  );
}
