"use client";

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: "/images/icons/links-icon1.avif",
    heading: "CBSE Curriculum",
    subtext: "Comprehensive CBSE-aligned academics from nursery through Class XII",
    linkText: "Explore",
    href: "#programs",
  },
  {
    icon: "/images/icons/links-icon2.avif",
    heading: "IIT/NEET Foundation",
    subtext: "Dedicated coaching and preparation for competitive entrance exams",
    linkText: "Explore",
    href: "#programs",
  },
  {
    icon: "/images/icons/links-icon3.avif",
    heading: "Extracurricular Activities",
    subtext: "Sports, Indian classical arts, yoga, NCC, and leadership opportunities",
    linkText: "Browse",
    href: "#benefits",
  },
  {
    icon: "/images/icons/links-icon1.avif",
    heading: "Student Counseling",
    subtext: "Career guidance, academic counseling, and personalized learning plans",
    linkText: "Explore",
    href: "#benefits",
  },
  {
    icon: "/images/icons/links-icon2.avif",
    heading: "Smart Classrooms",
    subtext: "Technology-enabled learning with digital boards and online resources",
    linkText: "Explore",
    href: "#benefits",
  },
  {
    icon: "/images/icons/links-icon3.avif",
    heading: "Transport Facility",
    subtext: "Safe and reliable school bus service covering all major routes in Gurugram",
    linkText: "Details",
    href: "#contact",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding-sm">
      <div className="container">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-16">
          {/* LEFT column */}
          <div className="flex flex-col gap-4 lg:w-[35%] lg:sticky lg:top-32">
            <span className="section-label">What We Offer</span>
            <p className="font-heading text-[22px] leading-[1.4] text-text-primary">
              Vidya Bharati International School provides a well-rounded Indian
              education designed to nurture every student&apos;s potential, from
              the classroom to the playing field and beyond.
            </p>
          </div>

          {/* RIGHT column - cards */}
          <div className="flex flex-col gap-3 lg:w-[65%]">
            {services.map((service) => (
              <Link
                key={service.heading}
                href={service.href}
                className="flex items-center gap-5 rounded-[6px] bg-bg-secondary p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Icon */}
                <div className="shrink-0">
                  <Image
                    src={service.icon}
                    alt={service.heading}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                </div>

                {/* Text */}
                <div className="flex min-w-0 flex-1 flex-col gap-1">
                  <h2 className="font-heading text-[28px] leading-[1.2] text-text-primary">
                    {service.heading}
                  </h2>
                  <p className="text-sm text-text-muted">
                    {service.subtext}
                  </p>
                </div>

                {/* Arrow link */}
                <div className="flex shrink-0 items-center gap-2 text-sm font-medium text-text-primary">
                  <span>{service.linkText}</span>
                  <Image
                    src="/images/icons/arrow-right.svg"
                    alt="Arrow"
                    width={16}
                    height={16}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
