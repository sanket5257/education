"use client";

import Link from "next/link";

type ButtonVariant = "dark" | "outline" | "primary";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  fullWidth?: boolean;
  className?: string;
  onClick?: () => void;
}

const variantConfig: Record<
  ButtonVariant,
  { bg: string; color: string; hoverBg: string; hoverColor: string; border: string }
> = {
  dark: {
    bg: "#222222",
    color: "#ffffff",
    hoverBg: "#ffffff",
    hoverColor: "#222222",
    border: "transparent",
  },
  outline: {
    bg: "transparent",
    color: "#222222",
    hoverBg: "#222222",
    hoverColor: "#ffffff",
    border: "#E0DFDE",
  },
  primary: {
    bg: "#FFFDF9",
    color: "#222222",
    hoverBg: "#222222",
    hoverColor: "#ffffff",
    border: "#E0DFDE",
  },
};

export default function Button({
  children,
  variant = "dark",
  href,
  fullWidth = false,
  className = "",
  onClick,
}: ButtonProps) {
  const config = variantConfig[variant];

  const baseClasses = [
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden",
    "font-body text-sm font-medium rounded-full cursor-pointer",
    "transition-shadow duration-500 ease-out",
    "hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]",
    "active:shadow-none",
    fullWidth ? "flex w-full py-5 px-8 font-heading text-xl" : "py-3 px-7",
    className,
  ].join(" ");

  const content = (
    <>
      {/* Hover fill - slides up from bottom */}
      <span
        className="absolute inset-0 translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"
        style={{ backgroundColor: config.hoverBg }}
      />

      {/* Text row 1 - slides up and out */}
      <span
        className="relative z-10 flex items-center gap-2 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:-translate-y-[150%]"
        style={{ color: config.color }}
      >
        {children}
      </span>

      {/* Text row 2 - slides up into view */}
      <span
        className="absolute z-10 flex items-center gap-2 translate-y-[150%] transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:translate-y-0"
        style={{ color: config.hoverColor }}
      >
        {children}
      </span>
    </>
  );

  const inlineStyle = {
    backgroundColor: config.bg,
    color: config.color,
    border: `1px solid ${config.border}`,
  };

  if (href) {
    return (
      <Link href={href} className={baseClasses} style={inlineStyle} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button className={baseClasses} style={inlineStyle} onClick={onClick}>
      {content}
    </button>
  );
}
