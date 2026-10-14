export default function Card({
  children,
  className = "",
  hover = true,
  variant = "white",
  ...props
}) {
  const variantStyles = {
    white: "bg-white border border-[#e2e2e2]",
    ivory: "bg-[#f3f3f4] border border-[#e2e2e2]",
    navy: "bg-[#001128] text-white border border-[#14263f]",
    navyContainer: "bg-[#14263f] text-white border border-[#364762]/30",
    goldFramed: "bg-white border border-[#c5a059]/40"
  };

  const hoverStyle = hover
    ? "transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,17,40,0.06)] hover:border-[#c5a059]/60"
    : "";

  return (
    <div
      className={`rounded-none p-6 sm:p-8 ${variantStyles[variant] || variantStyles.white} ${hoverStyle} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
