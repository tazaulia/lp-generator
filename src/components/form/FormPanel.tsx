import { useState, useRef } from 'react';
import useFormState from '../../hooks/useFormState';
import usePromptGenerator from '../../hooks/usePromptGenerator';
import { validateForm } from '../../utils/validation';
import Button from '../ui/Button';
import SectionFrameworkTone from './SectionFrameworkTone';
import SectionProdukTujuan from './SectionProdukTujuan';
import SectionTargetMarket from './SectionTargetMarket';
import SectionDetailProduk from './SectionDetailProduk';
import SectionElemenTambahan from './SectionElemenTambahan';
import SectionIdentitasVisual from './SectionIdentitasVisual';
import SectionPlatformTarget from './SectionPlatformTarget';

interface FormPanelProps {
  onGenerate: (prompt: string | null, errors: string[]) => void;
  isGenerating?: boolean;
}

export default function FormPanel({ onGenerate, isGenerating = false }: FormPanelProps) {
  const [state, dispatch] = useFormState();
  const generate = usePromptGenerator();
  const formRef = useRef<HTMLDivElement>(null);
  const [hasAttempted, setHasAttempted] = useState(false);

  // Reactively compute errors from current state — clears automatically when fields are filled
  const activeErrors = hasAttempted ? validateForm(state).errors : [];

  const handleGenerate = () => {
    setHasAttempted(true);
    const { prompt, errors: newErrors } = generate(state);

    if (!prompt) {
      onGenerate(null, newErrors);
      // Scroll to first error — small delay to let re-render happen
      setTimeout(() => {
        const firstError = formRef.current?.querySelector('.border-red-500');
        if (firstError) {
          firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 50);
      return;
    }

    setHasAttempted(false);
    onGenerate(prompt, []);
  };

  const handleReset = () => {
    if (window.confirm('Reset semua field? Data yang sudah diisi akan hilang.')) {
      dispatch({ type: 'RESET' });
      setHasAttempted(false);
      onGenerate(null, []);
    }
  };

  return (
    <div ref={formRef} className="space-y-6">
      <SectionFrameworkTone state={state} dispatch={dispatch} errors={activeErrors} />
      <SectionProdukTujuan state={state} dispatch={dispatch} errors={activeErrors} />
      <SectionTargetMarket state={state} dispatch={dispatch} errors={activeErrors} />
      <SectionDetailProduk state={state} dispatch={dispatch} errors={activeErrors} />
      <SectionElemenTambahan state={state} dispatch={dispatch} errors={activeErrors} />
      <SectionIdentitasVisual state={state} dispatch={dispatch} errors={activeErrors} />
      <SectionPlatformTarget state={state} dispatch={dispatch} errors={activeErrors} />

      {activeErrors.length > 0 && (
        <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          Mohon lengkapi semua kolom bertanda (Wajib) agar prompt akurat.
        </div>
      )}

      <div className="flex gap-3 pt-2">
        <Button variant="danger" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="cta" onClick={handleGenerate} disabled={isGenerating} className="flex-1">
          {isGenerating ? (
            <>
              <svg className="w-5 h-5 mr-2 inline-block animate-spin" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
              </svg>
              Generating...
            </>
          ) : (
            <>
              GENERATE PROMPT
              <svg className="w-5 h-5 ml-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
