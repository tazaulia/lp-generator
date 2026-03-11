export default function Checkbox({ label, checked, onChange, children }) {
  return (
    <div>
      <label className="inline-flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="accent-brand-500 w-4 h-4 rounded"
        />
        <span className="text-sm text-slate-700 dark:text-slate-300">{label}</span>
      </label>
      {checked && children && (
        <div className="mt-2 ml-6 animate-[fadeIn_0.2s_ease-in-out]">
          {children}
        </div>
      )}
    </div>
  );
}
