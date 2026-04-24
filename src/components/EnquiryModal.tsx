"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import Button from "@/components/Button";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnquiryModal({ isOpen, onClose }: EnquiryModalProps) {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    studentName: "",
    classApplying: "",
    message: "",
  });

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ parentName: "", phone: "", email: "", studentName: "", classApplying: "", message: "" });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      {/* Modal */}
      <div
        className="relative w-full max-w-[500px] max-h-[90vh] overflow-y-auto rounded-[12px] p-6 md:p-8 bg-bg-primary border border-border-light"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-full transition-colors duration-200 hover:bg-black/5"
          aria-label="Close"
        >
          <X size={20} className="text-text-muted" />
        </button>

        <h3 className="font-heading text-[24px] md:text-[28px] leading-[1.2] mb-1">
          Admission <em className="italic">Enquiry</em>
        </h3>
        <p className="mb-6 text-sm text-text-muted leading-normal">
          Fill in your details and our admissions team will reach out within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
              className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10 bg-bg-secondary border-[0.8px] border-border-light text-text-primary"
              placeholder="Enter your full name"
            />
          </div>

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
                className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10 bg-bg-secondary border-[0.8px] border-border-light text-text-primary"
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
                className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10 bg-bg-secondary border-[0.8px] border-border-light text-text-primary"
                placeholder="parent@email.com"
              />
            </div>
          </div>

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
              className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10 bg-bg-secondary border-[0.8px] border-border-light text-text-primary"
              placeholder="Enter student's name"
            />
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider mb-1.5 text-text-muted">
              Class Applying For
            </label>
            <select
              name="classApplying"
              value={formData.classApplying}
              onChange={handleChange}
              required
              className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10 cursor-pointer bg-bg-secondary border-[0.8px] border-border-light text-text-primary"
            >
              <option value="">Select Class</option>
              <option value="nursery">Nursery</option>
              <option value="lkg">LKG</option>
              <option value="ukg">UKG</option>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i + 1} value={`class-${i + 1}`}>
                  Class {i + 1 <= 5 ? ["I", "II", "III", "IV", "V"][i] : ["VI", "VII", "VIII", "IX", "X", "XI", "XII"][i - 5]}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-medium uppercase tracking-wider mb-1.5 text-text-muted">
              Message (Optional)
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={3}
              className="w-full rounded-[6px] px-4 py-3 text-sm outline-none transition-all duration-300 focus:ring-2 focus:ring-black/10 resize-none bg-bg-secondary border-[0.8px] border-border-light text-text-primary"
              placeholder="Any specific questions or requirements..."
            />
          </div>

          <Button type="submit" variant="dark" fullWidth className="mt-2">
            Submit Enquiry
          </Button>

          <p className="text-center text-xs text-text-muted">
            Or call us directly at{" "}
            <a href="tel:+911123456789" className="font-medium underline text-text-primary">
              +91 11 2345 6789
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
