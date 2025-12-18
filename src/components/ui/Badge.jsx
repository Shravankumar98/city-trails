const Badge = ({ children, color = "orange", bgColor = "orange-100" }) => {
  return (
    <span
      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold text-${color}-700 bg-${bgColor}`}
    >
      {children}
    </span>
  );
};

export default Badge;
