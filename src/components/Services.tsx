"use client";

import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  FlaskConical,
  Trophy,
  UserCheck,
  MonitorSmartphone,
  Bus,
} from "lucide-react";

const services = [
  {
    icon: BookOpen,
    heading: "CBSE Curriculum",
    subtext: "Comprehensive CBSE-aligned academics from nursery through Class XII",
    linkText: "Explore",
    href: "#programs",
    gradient: "linear-gradient(135deg, #667eea, #764ba2)",
  },
  {
    icon: FlaskConical,
    heading: "IIT/NEET Foundation",
    subtext: "Dedicated coaching and preparation for competitive entrance exams",
    linkText: "Explore",
    href: "#programs",
    gradient: "linear-gradient(135deg, #f093fb, #f5576c)",
  },
  {
    icon: Trophy,
    heading: "Extracurricular Activities",
    subtext: "Sports, Indian classical arts, yoga, NCC, and leadership opportunities",
    linkText: "Browse",
    href: "#benefits",
    gradient: "linear-gradient(135deg, #4facfe, #00f2fe)",
  },
  {
    icon: UserCheck,
    heading: "Student Counseling",
    subtext: "Career guidance, academic counseling, and personalized learning plans",
    linkText: "Explore",
    href: "#benefits",
    gradient: "linear-gradient(135deg, #43e97b, #38f9d7)",
  },
  {
    icon: MonitorSmartphone,
    heading: "Smart Classrooms",
    subtext: "Technology-enabled learning with digital boards and online resources",
    linkText: "Explore",
    href: "#benefits",
    gradient: "linear-gradient(135deg, #fa709a, #fee140)",
  },
  {
    icon: Bus,
    heading: "Transport Facility",
    subtext: "Safe and reliable school bus service covering all major routes in Gurugram",
    linkText: "Details",
    href: "#contact",
    gradient: "linear-gradient(135deg, #a18cd1, #fbc2eb)",
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
            <p className="font-heading text-[18px] md:text-[22px] leading-[1.4] text-text-primary">
              Vidya Bharati International School provides a well-rounded Indian
              education designed to nurture every student&apos;s potential, from
              the classroom to the playing field and beyond.
            </p>
          </div>

          {/* RIGHT column - cards */}
          <div className="flex flex-col gap-3 lg:w-[65%]">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.heading}
                  href={service.href}
                  className="flex items-center gap-3 md:gap-5 rounded-[6px] bg-bg-secondary p-4 md:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  {/* Icon */}
                  <div
                    className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full"
                    style={{ background: service.gradient, color: "#FFFFFF" }}
                  >
                    <Icon size={22} strokeWidth={1.5} fill="currentColor" />
                  </div>

                  {/* Text */}
                  <div className="flex min-w-0 flex-1 flex-col gap-1">
                    <h2 className="font-heading text-[20px] md:text-[24px] lg:text-[28px] leading-[1.2] text-text-primary">
                      {service.heading}
                    </h2>
                    <p className="text-xs md:text-sm text-text-muted">
                      {service.subtext}
                    </p>
                  </div>

                  {/* Arrow link */}
                  <div className="hidden sm:flex shrink-0 items-center gap-2 text-sm font-medium text-text-primary">
                    <span>{service.linkText}</span>
                    <Image
                      src="/images/icons/arrow-right.svg"
                      alt="Arrow"
                      width={16}
                      height={16}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
