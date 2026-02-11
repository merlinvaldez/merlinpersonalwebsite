export default function Section({ children, className = "" }) {
  return (
    <section className={`w-full ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-6">{children}</div>
    </section>
  );
}
