"use client";

import Link from "next/link";

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
  type = "button",
  disabled = false,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-label-md tracking-wider uppercase transition-all duration-200 ease-out cursor-pointer select-none rounded-none disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-[1px] active:translate-y-0 active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c5a059] focus-visible:ring-offset-2";

  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-[11px]",
    md: "px-5 py-2.5 text-[12px]",
    lg: "px-7 py-3.5 text-[13px]",
  };

  const variantStyles = {
    primary:
      "bg-[#001128] text-white hover:bg-[#14263f] hover:shadow-[0_4px_14px_rgba(0,17,40,0.25)] active:bg-[#000a18]",
    secondary:
      "bg-[#775a1b] text-white hover:bg-[#5c4202] hover:shadow-[0_4px_14px_rgba(119,90,27,0.25)] active:bg-[#463101]",
    gold:
      "bg-[#c5a059] text-[#001128] font-bold hover:bg-[#d8b56f] hover:shadow-[0_4px_16px_rgba(197,160,89,0.35)] active:bg-[#b08d48]",
    outline:
      "bg-transparent text-[#001128] border border-[#001128] hover:bg-[#001128] hover:text-white hover:shadow-sm",
    "outline-gold":
      "bg-transparent text-[#c5a059] border border-[#c5a059] hover:bg-[#c5a059] hover:text-[#001128] hover:shadow-[0_4px_14px_rgba(197,160,89,0.25)]",
    "outline-light":
      "bg-transparent text-white border border-white/50 hover:bg-white hover:text-[#001128] hover:shadow-sm",
    ghost: "bg-transparent text-[#001128] hover:bg-black/5 hover:translate-y-0",
    "ghost-light": "bg-transparent text-white/90 hover:bg-white/10 hover:translate-y-0",
  };

  const combinedStyles = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={combinedStyles}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
