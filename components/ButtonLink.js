import Link from "next/link";

export default function ButtonLink({ href, children, variant = "primary", external = false }) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition";
  const styles =
    variant === "primary"
      ? "bg-teal-600 text-white hover:bg-teal-700"
      : "border border-slate-300 text-slate-700 hover:border-teal-200 hover:text-teal-700";

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${styles}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
