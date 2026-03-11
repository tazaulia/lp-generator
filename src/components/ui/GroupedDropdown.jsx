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
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-full appearance-none bg-white dark:bg-dark-800 rounded-lg py-2.5 pl-3 pr-10 text-sm border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 dark:text-slate-100 ${
            error ? "border-red-500" : "border-slate-300 dark:border-dark-600"
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
        <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center">
          <svg className="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
