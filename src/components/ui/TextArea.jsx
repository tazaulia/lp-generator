export default function TextArea({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  error = false,
  rows = 3,
}) {
  return (
    <div>
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-1.5">
          {label}
          {required && <span className="text-brand-500 ml-0.5">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={`w-full bg-white rounded-lg py-2.5 px-3 text-sm border transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 resize-y ${
          error ? "border-red-500" : "border-slate-300"
        }`}
      />
    </div>
  );
}
