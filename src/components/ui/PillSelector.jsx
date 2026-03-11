export default function PillSelector({
  label,
  options = [],
  selected,
  onChange,
  mode = "multi",
  error = false,
}) {
  const isSelected = (option) =>
    mode === "single" ? selected === option : (selected || []).includes(option);

  const handleClick = (option) => {
    if (mode === "single") {
      onChange(option);
    } else {
      const current = selected || [];
      if (current.includes(option)) {
        onChange(current.filter((item) => item !== option));
      } else {
        onChange([...current, option]);
      }
    }
  };

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          {label}
        </label>
      )}
      <div
        className={`flex flex-wrap gap-2 ${
          error ? "ring-1 ring-red-500 rounded-lg p-1" : ""
        }`}
      >
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => handleClick(option)}
            className={`rounded-full px-4 py-2 text-sm cursor-pointer transition-all duration-200 ${
              isSelected(option)
                ? "bg-brand-500 text-white"
                : "bg-white dark:bg-dark-800 border border-slate-300 dark:border-dark-600 text-slate-600 dark:text-slate-300 hover:border-brand-400"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
