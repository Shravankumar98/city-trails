const Badge = ({
  children,
  color = "orange", // default brand color
  bgColor = "orange-100" // background color
}) => {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold text-${color}-700 bg-${bgColor}`}
    >
      {children}
    </span>
  );
};

export default Badge;
