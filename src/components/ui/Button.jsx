const Button = ({
  children,
  href = "#",
  size = "md",
  variant = "primary",
  target,      // optional: "_blank"
  rel,         // optional: "noopener noreferrer"
  disabled = false,
  onClick
}) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const variantClasses = {
    primary: "bg-[var(--brand-primary)] text-white hover:opacity-90",
    secondary: "bg-[var(--brand-secondary)] text-white hover:opacity-90",
    outline:
      "border border-[var(--brand-primary)] text-[var(--brand-primary)] hover:bg-orange-50",
  };

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      aria-disabled={disabled}
      className={`
        inline-flex items-center justify-center
        rounded-md font-semibold transition
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${disabled ? "opacity-50 cursor-not-allowed" : ""}
      `}
    >
      {children}
    </a>
  );
};

export default Button;
