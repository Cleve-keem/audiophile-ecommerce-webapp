import Link from "next/link";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "default" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
};

export default function Button({
  children,
  className,
  variant = "default",
  href = "#",
  onClick,
}: ButtonProps) {
  const baseStyles = "transition-all duration-300 ";

  const variants = {
    default:
      baseStyles +
      "text-black hover:text-primary-orange text-[13px] tracking-[1px]",
    primary:
      baseStyles +
      "mt-8 bg-primary-orange text-secondary-white py-3 px-8 uppercase text-[13px] tracking-[1px] hover:bg-secondary-orange inline-block",

    secondary:
      baseStyles +
      "bg-btn-black text-secondary-white hover:bg-hover-dark uppercase py-2 px-6 inline-block",
    outline:
      baseStyles +
      "bg-transparent border py-2 px-6 uppercase text-[13px] border-foreground text-foreground hover:bg-foreground hover:text-secondary-white inline-block",
  };

  if (onClick) {
    return (
      <button onClick={onClick} className={`${variants[variant]} ${className}`}>
        {children}
      </button>
    );
  }

  return (
    <Link href={href} className={`${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
