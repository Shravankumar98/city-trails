const Section = ({ children, id, background = "bg-white" }) => {
  return (
    <section id={id} className={`${background} py-16 md:py-24`}>
      <div className="mx-auto max-w-[1300px] px-6 md:px-10">{children}</div>
    </section>
  );
};

export default Section;
