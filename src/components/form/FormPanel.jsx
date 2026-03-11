import { useState, useRef } from 'react';
import useFormState from '../../hooks/useFormState';
import usePromptGenerator from '../../hooks/usePromptGenerator';
import Button from '../ui/Button';
import SectionFrameworkTone from './SectionFrameworkTone';
import SectionProdukTujuan from './SectionProdukTujuan';
import SectionTargetMarket from './SectionTargetMarket';
import SectionDetailProduk from './SectionDetailProduk';
import SectionElemenTambahan from './SectionElemenTambahan';
import SectionIdentitasVisual from './SectionIdentitasVisual';
import SectionPlatformTarget from './SectionPlatformTarget';

export default function FormPanel({ onGenerate }) {
  const [state, dispatch] = useFormState();
  const generate = usePromptGenerator();
  const formRef = useRef(null);
  const [errors, setErrors] = useState([]);

  const handleGenerate = () => {
    const { prompt, errors: newErrors } = generate(state);

    if (!prompt) {
      setErrors(newErrors);
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

    setErrors([]);
    onGenerate(prompt, []);
  };

  const handleReset = () => {
    if (window.confirm('Reset semua field? Data yang sudah diisi akan hilang.')) {
      dispatch({ type: 'RESET' });
      setErrors([]);
      onGenerate(null, []);
    }
  };

  return (
    <div ref={formRef} className="space-y-4">
      <SectionFrameworkTone state={state} dispatch={dispatch} errors={errors} />
      <SectionProdukTujuan state={state} dispatch={dispatch} errors={errors} />
      <SectionTargetMarket state={state} dispatch={dispatch} errors={errors} />
      <SectionDetailProduk state={state} dispatch={dispatch} errors={errors} />
      <SectionElemenTambahan state={state} dispatch={dispatch} errors={errors} />
      <SectionIdentitasVisual state={state} dispatch={dispatch} errors={errors} />
      <SectionPlatformTarget state={state} dispatch={dispatch} errors={errors} />

      <div className="flex gap-3 pt-2">
        <Button variant="danger" onClick={handleReset}>
          Reset
        </Button>
        <Button variant="cta" onClick={handleGenerate} className="flex-1">
          Generate Prompt
          <svg className="w-5 h-5 ml-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
