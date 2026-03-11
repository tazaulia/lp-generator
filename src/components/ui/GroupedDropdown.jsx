export default function GroupedDropdown({
  label,
  value,
  onChange,
  options = [],
  required = false,
  error = false,
  placeholder = "Pilih...",
}) {
  const isGrouped = options.length > 0 && options[0].group !== undefined;

  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5">
          {label}
          {required && <span className="text-brand-500 ml-0.5">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full bg-white dark:bg-slate-800 rounded-lg py-2.5 px-3 text-sm border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:text-slate-100 ${
          error ? "border-red-500" : "border-slate-300 dark:border-slate-600"
        }`}
      >
        <option value="" disabled>
          {placeholder}
        </option>
        {isGrouped
          ? options.map((group) => (
              <optgroup key={group.group} label={group.group}>
                {group.options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </optgroup>
            ))
          : options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
      </select>
    </div>
  );
}
