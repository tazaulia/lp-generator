import type { ReactNode } from 'react';

interface FormSectionProps {
  number: number;
  title: string;
  subtitle?: string;
  children: ReactNode;
  isComplete?: boolean;
}

export default function FormSection({ number, title, subtitle, children, isComplete = false }: FormSectionProps) {
  return (
    <div className={`rounded-2xl border bg-white dark:bg-dark-800 shadow-sm overflow-hidden transition-colors duration-300 ${
      isComplete
        ? 'border-emerald-400/60 dark:border-emerald-500/40'
        : 'border-slate-200 dark:border-dark-700'
    }`}>
      <div className="w-full flex items-center gap-3 px-5 py-4">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-brand-500 text-white text-sm font-bold flex items-center justify-center transition-all duration-300">
          {isComplete ? (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            number
          )}
        </span>
        <div className="flex-1 min-w-0">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">{title}</h2>
          {subtitle && <p className="text-xs text-slate-400 mt-0.5">{subtitle}</p>}
        </div>
      </div>
      <div className="px-5 pb-5 pt-4 space-y-4">
        {children}
      </div>
    </div>
  );
}
