"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";

const galleryImages = [
  {
    src: "https://cdn.prod.website-files.com/69936edfd4a65317864b054d/69a0118c4b680a6da0532d11_0759de215802b2cb5eb233d530f35545_gallery-1.webp",
    alt: "Students learning in a classroom",
    caption: "Where curious minds come alive",
    layout: "wide" as const,
    category: "Classroom",
  },
  {
    src: "https://cdn.prod.website-files.com/69936edfd4a65317864b054d/69a0118c12ae48912104e13f_gallery-2.webp",
    alt: "Children in group activity",
    caption: "Learning together, growing together",
    layout: "tall" as const,
    category: "Activities",
  },
  {
    src: "https://cdn.prod.website-files.com/69936edfd4a65317864b054d/69a0118d6df4430bd8c2ffe6_gallery-3.webp",
    alt: "Children smiling together",
    caption: "Friendships that last a lifetime",
    layout: "tall" as const,
    category: "Campus Life",
  },
  {
    src: "https://cdn.prod.website-files.com/69936edfd4a65317864b054d/69a0118d71a4bf079e1cfeec_4cbd803d39a5c3e7a268337a5d754917_gallery-4.webp",
    alt: "Teacher with students building blocks",
    caption: "Hands-on discovery every day",
    layout: "wide" as const,
    category: "Classroom",
  },
  {
    src: "https://cdn.prod.website-files.com/69936edfd4a65317864b054d/69a0118d245b9c9482263e46_gallery-5.webp",
    alt: "Teacher guiding children in activity",
    caption: "Guided by care and creativity",
    layout: "tall" as const,
    category: "Activities",
  },
  {
    src: "https://cdn.prod.website-files.com/69936edfd4a65317864b054d/69a0118d202d81b614c75a71_gallery-6.webp",
    alt: "Children playing with building blocks",
    caption: "Building confidence one step at a time",
    layout: "tall" as const,
    category: "Activities",
  },
  {
    src: "https://cdn.prod.website-files.com/69936edfd4a65317864b054d/69a0118d01a0bfcccabbbb4d_cbe6f52a5ab233030784c3d84487b0ff_gallery-7.webp",
    alt: "Children hands together in teamwork",
    caption: "Teamwork makes us stronger",
    layout: "wide" as const,
    category: "Events",
  },
  {
    src: "https://cdn.prod.website-files.com/69936edfd4a65317864b054d/69a0118d258ea67c7abd5f57_gallery-8.webp",
    alt: "Teacher reading to children",
    caption: "Stories that spark imagination",
    layout: "tall" as const,
    category: "Classroom",
  },
  {
    src: "https://cdn.prod.website-files.com/69936edfd4a65317864b054d/69a0118d9a97df56d9163638_gallery-9.webp",
    alt: "Children in art class",
    caption: "Expressing through art and colour",
    layout: "tall" as const,
    category: "Activities",
  },
  {
    src: "https://cdn.prod.website-files.com/69936edfd4a65317864b054d/69a0118d8c5447d045befef7_758c8139530654a0efd3ad42982a94d3_gallery-10.webp",
    alt: "Children in outdoor play",
    caption: "Joy in every moment",
    layout: "wide" as const,
    category: "Campus Life",
  },
];

const categories = ["All", "Classroom", "Activities", "Campus Life", "Events"];

function GalleryImage({
  src,
  alt,
  caption,
  aspect,
}: {
  src: string;
  alt: string;
  caption: string;
  aspect: string;
}) {
  return (
    <div
      className="group relative overflow-hidden rounded-[16px] md:rounded-[20px] cursor-pointer"
      style={{ aspectRatio: aspect }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-400 flex items-end">
        <p className="text-white font-heading text-[18px] md:text-[22px] leading-[1.3] p-5 md:p-7 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-400">
          {caption}
        </p>
      </div>
    </div>
  );
}

export default function GalleryPage() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeFilter);

  // Split filtered images into rows: wide = full-width, tall = paired
  const rows: typeof galleryImages[] = [];
  let i = 0;
  while (i < filtered.length) {
    if (filtered[i].layout === "wide") {
      rows.push([filtered[i]]);
      i++;
    } else if (i + 1 < filtered.length && filtered[i + 1].layout === "tall") {
      rows.push([filtered[i], filtered[i + 1]]);
      i += 2;
    } else {
      rows.push([filtered[i]]);
      i++;
    }
  }

  return (
    <>
      <Navbar onEnquiryOpen={() => setEnquiryOpen(true)} />
      <main>
        {/* Hero Header */}
        <section
          className="section-padding"
          style={{ backgroundColor: "var(--color-bg-secondary)" }}
        >
          <div className="container flex flex-col items-center text-center gap-5">
            <span className="section-label">Campus Gallery</span>
            <h1 className="font-heading text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] max-w-[700px]">
              A glimpse into life at{" "}
              <em className="italic">Vidya Bharati</em>
            </h1>
            <p
              className="max-w-[600px]"
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "var(--color-text-muted)",
              }}
            >
              Explore moments of learning, creativity, and growth captured
              across our campus — from classrooms to playgrounds, events to
              everyday joy.
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-2 mt-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className="px-5 py-2 rounded-full text-sm font-medium cursor-pointer transition-all duration-300"
                  style={{
                    backgroundColor:
                      activeFilter === cat
                        ? "var(--color-bg-dark)"
                        : "transparent",
                    color:
                      activeFilter === cat
                        ? "var(--color-text-light)"
                        : "var(--color-text-primary)",
                    border:
                      activeFilter === cat
                        ? "1px solid var(--color-bg-dark)"
                        : "1px solid var(--color-border-light)",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section
          className="section-padding"
          style={{ backgroundColor: "var(--color-bg-primary)" }}
        >
          <div className="container flex flex-col gap-4 md:gap-5">
            {rows.length === 0 && (
              <p
                className="text-center py-20 font-heading text-[20px]"
                style={{ color: "var(--color-text-muted)" }}
              >
                No images in this category yet.
              </p>
            )}
            {rows.map((row, ri) => {
              if (row.length === 1 && row[0].layout === "wide") {
                return (
                  <GalleryImage
                    key={ri}
                    src={row[0].src}
                    alt={row[0].alt}
                    caption={row[0].caption}
                    aspect="16 / 8"
                  />
                );
              }
              if (row.length === 1) {
                return (
                  <div key={ri} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    <GalleryImage
                      src={row[0].src}
                      alt={row[0].alt}
                      caption={row[0].caption}
                      aspect="1 / 1"
                    />
                  </div>
                );
              }
              return (
                <div key={ri} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                  {row.map((img, ci) => (
                    <GalleryImage
                      key={ci}
                      src={img.src}
                      alt={img.alt}
                      caption={img.caption}
                      aspect="1 / 1"
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </section>

      </main>
      <Footer onEnquiryOpen={() => setEnquiryOpen(true)} />
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
      />
    </>
  );
}
