import colorPaletteOptions from '../../data/colorPaletteOptions';
import type { FormState, FormAction } from '../../hooks/useFormState';

interface Props {
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
  errors: string[];
  isComplete: boolean;
}

export default function SectionColors({ state, dispatch, errors }: Props) {
  const hasError = errors.includes('Color Palette');

  return (
    <div>
      {hasError && (
        <p className="text-xs text-red-500 mb-3">Pick a color palette to continue.</p>
      )}
      <div className="grid grid-cols-1 gap-2">
        {colorPaletteOptions.map((palette) => {
          const selected = state.colorPalette === palette.value;
          return (
            <button
              key={palette.value}
              type="button"
              onClick={() => dispatch({ type: 'SET_FIELD', field: 'colorPalette', value: palette.value })}
              className={`flex items-center gap-3 p-3 rounded-xl border-2 text-left transition-all duration-150 cursor-pointer ${
                selected
                  ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20 dark:border-brand-400'
                  : 'border-slate-200 dark:border-dark-600 bg-white dark:bg-dark-800 hover:border-slate-300 dark:hover:border-dark-500'
              }`}
            >
              <div
                className="w-8 h-8 rounded-lg flex-shrink-0 shadow-sm"
                style={{ background: palette.gradient }}
              />
              <div className="flex-1 min-w-0">
                <div className={`text-sm font-semibold ${selected ? 'text-brand-600 dark:text-brand-400' : 'text-slate-800 dark:text-slate-100'}`}>
                  {palette.label}
                </div>
                <div className="text-xs text-slate-400 dark:text-slate-500 font-mono">{palette.accent}</div>
              </div>
              {selected && (
                <svg className="w-4 h-4 text-brand-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
