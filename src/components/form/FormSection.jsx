import { useState } from 'react';

export default function FormSection({ number, title, subtitle, children, defaultOpen = true }) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 shadow-sm overflow-hidden">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
      >
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500 text-white text-sm font-bold flex items-center justify-center">
          {number}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">{title}</h3>
          {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
        </div>
        <svg
          className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-5 pb-5 pt-1 space-y-4">
          {children}
        </div>
      )}
    </div>
  );
}
