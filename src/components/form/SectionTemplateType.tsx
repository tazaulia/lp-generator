import type { TemplateType } from '../../hooks/useFormState';

interface Template {
  type: Exclude<TemplateType, ''>;
  emoji: string;
  label: string;
  examples: string;
}

const templates: Template[] = [
  { type: 'A', emoji: '🎓', label: 'Kursus / Coaching', examples: 'Online course, bootcamp, 1:1 coaching' },
  { type: 'B', emoji: '📦', label: 'Produk Digital', examples: 'Ebook, template pack, toolkit, resource pack' },
  { type: 'C', emoji: '🏢', label: 'Agency / Jasa', examples: 'Freelance, done-for-you, retainer, konsultasi' },
  { type: 'D', emoji: '🛍️', label: 'Produk Fisik', examples: 'Skincare, suplemen, F&B, fashion, wellness' },
  { type: 'E', emoji: '💻', label: 'SaaS / Software', examples: 'Web app, mobile app, plugin, dashboard' },
  { type: 'F', emoji: '🎤', label: 'Event / Webinar', examples: 'Live webinar, workshop offline, hybrid event' },
];

interface Props {
  value: TemplateType;
  onChange: (type: TemplateType) => void;
}

export default function SectionTemplateType({ value, onChange }: Props) {
  return (
    <div>
      <p className="text-xs text-slate-400 dark:text-slate-500 mb-4">
        Pilih tipe bisnis. Ini menentukan struktur konten yang akan dihasilkan.
      </p>
      <div className="grid grid-cols-2 gap-3">
        {templates.map((t) => {
          const selected = value === t.type;
          return (
            <button
              key={t.type}
              type="button"
              onClick={() => onChange(t.type)}
              className={`text-left p-4 rounded-xl border-2 transition-all duration-150 cursor-pointer ${
                selected
                  ? 'border-brand-500 bg-brand-50 dark:bg-brand-900/20 dark:border-brand-400'
                  : 'border-slate-200 dark:border-dark-600 bg-white dark:bg-dark-800 hover:border-slate-300 dark:hover:border-dark-500'
              }`}
            >
              <div className="text-2xl mb-2">{t.emoji}</div>
              <div className={`text-sm font-bold mb-1 ${selected ? 'text-brand-600 dark:text-brand-400' : 'text-slate-800 dark:text-slate-100'}`}>
                {t.label}
              </div>
              <div className="text-xs text-slate-400 dark:text-slate-500 leading-relaxed">{t.examples}</div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
