const variants = {
  primary:
    "bg-brand-500 hover:bg-brand-600 text-white rounded-xl px-6 py-3 font-semibold",
  secondary:
    "bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-xl px-6 py-3",
  danger:
    "bg-white dark:bg-slate-800 border border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 rounded-xl px-6 py-3",
  cta:
    "bg-brand-500 hover:bg-brand-600 text-white rounded-xl px-8 py-4 font-bold text-lg shadow-lg shadow-brand-500/25",
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  className = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${variants[variant] || variants.primary} ${className}`}
    >
      {children}
    </button>
  );
}
