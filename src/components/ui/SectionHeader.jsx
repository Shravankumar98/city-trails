const SectionHeader = ({
  title,
  description,
  align = "center" // "center", "left", "right"
}) => {
  const textAlign = {
    center: "text-center",
    left: "text-left",
    right: "text-right",
  };

  return (
    <div className={`mb-12 ${textAlign[align]}`}>
      <h2
        className="mb-4 text-3xl md:text-4xl font-bold"
        style={{ color: "var(--text-heading)" }}
      >
        {title}
      </h2>

      {description && (
        <p
          className="mx-auto max-w-2xl text-sm md:text-base"
          style={{ color: "var(--text-body)" }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
