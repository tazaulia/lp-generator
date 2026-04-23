import React from "react";

interface PillSelectorSingleProps {
  label?: string;
  options?: readonly string[];
  selected: string;
  onChange: (value: string) => void;
  mode: "single";
  error?: boolean;
}

interface PillSelectorMultiProps {
  label?: string;
  options?: readonly string[];
  selected: string[];
  onChange: (value: string[]) => void;
  mode?: "multi";
  error?: boolean;
}

type PillSelectorProps = PillSelectorSingleProps | PillSelectorMultiProps;

export default function PillSelector({
  label,
  options = [],
  selected,
  onChange,
  mode = "multi",
  error = false,
}: PillSelectorProps) {
  const isSelected = (option: string): boolean =>
    mode === "single" ? selected === option : (selected || []).includes(option);

  const handleClick = (option: string): void => {
    if (mode === "single") {
      (onChange as (value: string) => void)(option);
    } else {
      const current = (selected as string[]) || [];
      if (current.includes(option)) {
        (onChange as (value: string[]) => void)(current.filter((item) => item !== option));
      } else {
        (onChange as (value: string[]) => void)([...current, option]);
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
