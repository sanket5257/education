"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/animations";
import Button from "@/components/Button";

const steps = [
  {
    number: "01",
    title: "Online Application",
    description: "Fill out the application form on our website with your child's details, academic history, and preferred class.",
  },
  {
    number: "02",
    title: "Document Submission",
    description: "Submit birth certificate, previous report cards, transfer certificate, Aadhaar card, and passport-size photographs.",
  },
  {
    number: "03",
    title: "Interaction & Assessment",
    description: "Your child will be invited for an age-appropriate interaction. For Classes VI and above, a written assessment is conducted.",
  },
  {
    number: "04",
    title: "Campus Visit & Confirmation",
    description: "Visit our campus, meet the faculty, and complete the admission formalities with fee payment to secure your child's seat.",
  },
];

export default function Admissions() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    studentName: "",
    classApplying: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ parentName: "", phone: "", email: "", studentName: "", classApplying: "", message: "" });
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".admissions-header", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".admissions-header",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".admission-step", {
        x: -30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".admission-steps",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(".admission-form-card", {
        x: 60,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".admission-form-card",
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="admissions" ref={sectionRef} className="section-padding">
      <div className="container">
        {/* Header */}
        <div className="admissions-header text-center mb-10 md:mb-14">
          <span className="section-label">Admissions 2026–27</span>
          <div className="pt-2" />
          <h2 className="font-heading text-[32px] md:text-[40px] lg:text-[56px] leading-[1.1]">
            Begin Your Child&apos;s{" "}
            <em className="italic">Journey</em>
          </h2>
          <div className="pt-4" />
          <p className="mx-auto max-w-[600px] text-base leading-[1.6] text-text-muted">
            Applications for the 2026–27 academic session are now open for Nursery through Class XI.
            Follow the simple steps below or fill out the enquiry form.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left: Steps + Age Table */}
          <div>
            <h3 className="font-heading text-[22px] md:text-[28px] leading-[1.2] mb-6">
              Admission <em className="italic">Process</em>
            </h3>

            <div className="admission-steps flex flex-col gap-0">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className="admission-step flex gap-4 py-5 border-b-[0.8px] border-border-light"
                >
                  <span
                    className="shrink-0 font-heading text-[28px] md:text-[36px] leading-none text-border-light"
                  >
                    {step.number}
                  </span>
                  <div>
                    <p className="font-medium text-[15px] md:text-[16px] mb-1 text-text-primary">
                      {step.title}
                    </p>
                    <p className="text-sm leading-[1.6] text-text-muted">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Right: Enquiry Form */}
          <div>
            <div
              className="admission-form-card rounded-[12px] p-6 md:p-8 bg-bg-secondary border-[0.8px] border-border-light"
            >
              <h3 className="font-heading text-[22px] md:text-[28px] leading-[1.2] mb-2">
                Admission <em className="italic">Enquiry</em>
              </h3>
              <p className="mb-6 text-sm text-text-muted leading-normal">
                Fill in your details and our admissions team will reach out within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {/* Parent Name */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-1.5 text-text-muted">
                    Parent / Guardian Name
                  </label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10 bg-bg-primary border-[0.8px] border-border-light text-text-primary"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Phone + Email row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider mb-1.5 text-text-muted">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10 bg-bg-primary border-[0.8px] border-border-light text-text-primary"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium uppercase tracking-wider mb-1.5 text-text-muted">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10 bg-bg-primary border-[0.8px] border-border-light text-text-primary"
                      placeholder="parent@email.com"
                    />
                  </div>
                </div>

                {/* Student Name */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-1.5 text-text-muted">
                    Student Name
                  </label>
                  <input
                    type="text"
                    name="studentName"
                    value={formData.studentName}
                    onChange={handleChange}
                    required
                    className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10 bg-bg-primary border-[0.8px] border-border-light text-text-primary"
                    placeholder="Enter student's name"
                  />
                </div>

                {/* Class Applying For */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-1.5 text-text-muted">
                    Class Applying For
                  </label>
                  <select
                    name="classApplying"
                    value={formData.classApplying}
                    onChange={handleChange}
                    required
                    className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10 cursor-pointer bg-bg-primary border-[0.8px] border-border-light text-text-primary"
                  >
                    <option value="">Select Class</option>
                    <option value="nursery">Nursery</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    {Array.from({ length: 12 }, (_, i) => (
                      <option key={i + 1} value={`class-${i + 1}`}>Class {i + 1 <= 5 ? ["I", "II", "III", "IV", "V"][i] : ["VI", "VII", "VIII", "IX", "X", "XI", "XII"][i - 5]}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-medium uppercase tracking-wider mb-1.5 text-text-muted">
                    Message (Optional)
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                    className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10 resize-none bg-bg-primary border-[0.8px] border-border-light text-text-primary"
                    placeholder="Any specific questions or requirements..."
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-dark w-full justify-center mt-2 py-3.5 px-6 text-[15px]"
                >
                  Submit Enquiry
                </button>

                <p className="text-center text-xs text-text-muted">
                  Or call us directly at{" "}
                  <a href="tel:+911123456789" className="font-medium underline text-text-primary">
                    +91 11 2345 6789
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
