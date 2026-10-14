export default function SectionHeader({
  kicker,
  title,
  subtitle,
  align = "left",
  dark = false,
  className = ""
}) {
  const alignClass = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto"
  };

  return (
    <div className={`flex flex-col mb-10 md:mb-14 max-w-3xl ${alignClass[align]} ${className}`}>
      {kicker && (
        <div className="flex items-center gap-2 mb-3">
          <span className="w-8 h-[1px] bg-[#c5a059] gold-rule-shimmer"></span>
          <span
            className={`text-[11px] font-label-sm uppercase tracking-widest font-semibold ${
              dark ? "text-[#e8c178]" : "text-[#775a1b]"
            }`}
          >
            {kicker}
          </span>
        </div>
      )}
      <h2
        className={`font-display-md tracking-tight ${
          dark ? "text-white" : "text-[#001128]"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-3 font-body-lg text-base md:text-lg leading-relaxed ${
            dark ? "text-[#c5d4ea]" : "text-[#44474d]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
