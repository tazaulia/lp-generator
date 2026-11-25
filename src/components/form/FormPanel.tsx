import { useState, useRef } from 'react';
import useFormState from '../../hooks/useFormState';
import { validateForm, getStepCompletion } from '../../utils/validation';
import { selectModules, buildTemplate } from '../../templates/index';
import { resolveColors, interpolate } from '../../templates/interpolate';
import Button from '../ui/Button';
import FormSection from './FormSection';
import SectionTemplateType from './SectionTemplateType';
import SectionIdentity from './SectionIdentity';
import SectionProduct from './SectionProduct';
import SectionOffer from './SectionOffer';
import SectionAudience from './SectionAudience';
import SectionColors from './SectionColors';
import SectionDeployment from './SectionDeployment';
import type { TemplateType } from '../../hooks/useFormState';

interface FormPanelProps {
  onGenerate: (prompt: string | null, errors: string[]) => void;
  isGenerating?: boolean;
}

export default function FormPanel({ onGenerate, isGenerating = false }: FormPanelProps) {
  const [state, dispatch] = useFormState();
  const formRef = useRef<HTMLDivElement>(null);
  const [hasAttempted, setHasAttempted] = useState(false);

  const activeErrors = hasAttempted ? validateForm(state).errors : [];
  const stepCompletion = getStepCompletion(state);
  const typeSelected = Boolean(state.templateType);

  const handleGenerate = () => {
    setHasAttempted(true);
    const { errors, isValid } = validateForm(state);

    if (!isValid) {
      onGenerate(null, errors);
      setTimeout(() => {
        const firstError = formRef.current?.querySelector('[data-error="true"]');
        if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
      return;
    }

    try {
      const mod = selectModules(state.templateType);
      const template = buildTemplate(mod);
      const colors = resolveColors(state.colorPalette);
      const prompt = interpolate(template, state, colors);
      setHasAttempted(false);
      onGenerate(prompt, []);
    } catch (e) {
      onGenerate(null, ['Something went wrong while generating the prompt. Please try again.']);
    }
  };

  const handleReset = () => {
    if (window.confirm('Reset all fields? Everything you have entered will be lost.')) {
      dispatch({ type: 'RESET' });
      setHasAttempted(false);
      onGenerate(null, []);
    }
  };

  return (
    <div ref={formRef} className="space-y-6">
      {/* Step 0 — Template Type (always visible) */}
      <FormSection number={0} title="Template Type" subtitle="Required before you continue" isComplete={stepCompletion[0]}>
        <SectionTemplateType
          value={state.templateType}
          onChange={(type: TemplateType) => dispatch({ type: 'SET_FIELD', field: 'templateType', value: type })}
        />
      </FormSection>

      {/* Steps 1–6 — only shown after templateType is selected */}
      {typeSelected && (
        <>
          <FormSection number={1} title="Brand & Product" isComplete={stepCompletion[1] ?? false}>
            <SectionIdentity state={state} dispatch={dispatch} errors={activeErrors} isComplete={stepCompletion[1] ?? false} />
          </FormSection>

          <FormSection number={2} title="Product Details" subtitle="Format and key strengths" isComplete={stepCompletion[2] ?? false}>
            <SectionProduct state={state} dispatch={dispatch} errors={activeErrors} isComplete={stepCompletion[2] ?? false} />
          </FormSection>

          <FormSection number={3} title="Offer" subtitle="Price, CTA and scarcity" isComplete={stepCompletion[3] ?? false}>
            <SectionOffer state={state} dispatch={dispatch} errors={activeErrors} isComplete={stepCompletion[3] ?? false} />
          </FormSection>

          <FormSection number={4} title="Target Audience" subtitle="Who will read this page" isComplete={stepCompletion[4] ?? false}>
            <SectionAudience state={state} dispatch={dispatch} errors={activeErrors} isComplete={stepCompletion[4] ?? false} />
          </FormSection>

          <FormSection number={5} title="Color Palette" subtitle="Pick one color theme" isComplete={stepCompletion[5] ?? false}>
            <SectionColors state={state} dispatch={dispatch} errors={activeErrors} isComplete={stepCompletion[5] ?? false} />
          </FormSection>

          <FormSection number={6} title="Deployment" subtitle="Checkout anchor link" isComplete={stepCompletion[6] ?? false}>
            <SectionDeployment state={state} dispatch={dispatch} errors={activeErrors} isComplete={stepCompletion[6] ?? false} />
          </FormSection>

          {activeErrors.length > 0 && (
            <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
              </svg>
              Please complete the required fields: {activeErrors.join(', ')}.
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
        </>
      )}
    </div>
  );
}
