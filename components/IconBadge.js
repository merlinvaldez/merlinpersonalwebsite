export default function IconBadge({
  label,
  icon,
  alt,
  className = "",
  iconClassName = "",
  iconContainerClassName = "",
}) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border border-slate-200/70 bg-white/80 px-4 py-3 text-sm font-medium text-slate-700 shadow-sm ${className}`}
    >
      {icon && (
        <span
          className={`flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg bg-white ${iconContainerClassName}`}
        >
          <img
            src={icon}
            alt={alt || label}
            className={`h-full w-full object-contain ${iconClassName}`}
            loading="lazy"
          />
        </span>
      )}
      <span>{label}</span>
    </div>
  );
}
