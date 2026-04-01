"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Principal from "@/components/Principal";
import Benefits from "@/components/Benefits";
import Achievements from "@/components/Achievements";
import Gallery from "@/components/Gallery";
import SuccessStories from "@/components/SuccessStories";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import EnquiryModal from "@/components/EnquiryModal";

export default function Home() {
  const [enquiryOpen, setEnquiryOpen] = useState(false);

  return (
    <>
      <Navbar onEnquiryOpen={() => setEnquiryOpen(true)} />
      <main>
        <Hero onEnquiryOpen={() => setEnquiryOpen(true)} />
        <About />
        <Programs />
        <Principal />
        <Benefits />
        <Achievements />
        <Gallery />
        <SuccessStories />
        <FAQ />
        <CTA onEnquiryOpen={() => setEnquiryOpen(true)} />
      </main>
      <Footer onEnquiryOpen={() => setEnquiryOpen(true)} />
      <EnquiryModal isOpen={enquiryOpen} onClose={() => setEnquiryOpen(false)} />
    </>
  );
}
