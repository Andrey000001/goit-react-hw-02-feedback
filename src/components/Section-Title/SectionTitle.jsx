export const SectionTitle = ({ title, children ,style}) => {
  return (
    <section>
      <h2 style={style}>{title}</h2>
      {children}
    </section>
  );
};
