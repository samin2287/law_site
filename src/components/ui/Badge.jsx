export default function Badge({
  children,
  variant = "gold",
  className = ""
}) {
  const variantStyles = {
    gold: "bg-[#775a1b]/10 text-[#775a1b] border border-[#775a1b]/30",
    navy: "bg-[#001128] text-white border border-[#001128]",
    navyLight: "bg-[#14263f] text-[#c5d4ea] border border-[#364762]",
    neutral: "bg-[#eeeeee] text-[#1a1c1c] border border-[#dadada]",
    white: "bg-white text-[#001128] border border-[#e2e2e2]"
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[10px] font-label-sm uppercase tracking-widest rounded-none ${variantStyles[variant] || variantStyles.gold} ${className}`}
    >
      {children}
    </span>
  );
}
