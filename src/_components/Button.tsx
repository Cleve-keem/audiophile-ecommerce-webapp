import React from "react";

enum Variant {
  default = "default",
  primary = "primary",
  secondary = "secondary",
  danger = "danger",
  outline = "outline",
}

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant?: keyof typeof Variant;
};

export default function Button({
  children,
  className,
  variant = "default",
}: ButtonProps) {
  const variants = {
    default:
      "text-black hover:text-primary-orange py-2 px-6 uppercase text-[13px] tracking-[1px]",
    primary:
      "mt-8 bg-primary-orange text-secondary-white py-3 px-8 uppercase text-[13px] tracking-[1px] hover:bg-secondary-orange",

    secondary:
      "bg-btn-black text-secondary-white hover:bg-hover-dark uppercase py-2 px-6",
    danger: "bg-red-600 text-white hover:bg-red-700 uppercase",
    outline:
      "bg-transparent border border-foreground text-foreground hover:bg-foreground hover:text-secondary-white",
  };

  return (
    <button className={`${variants[variant]} ${className}`}>{children}</button>
  );
}
