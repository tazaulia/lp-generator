import type { Dispatch } from 'react';
import type { FormState, FormAction } from '../../hooks/useFormState';
import FormSection from './FormSection';
import PillSelector from '../ui/PillSelector';
import platformOptions from '../../data/platformOptions';

interface SectionPlatformTargetProps {
  state: FormState;
  dispatch: Dispatch<FormAction>;
  errors: string[];
  isComplete?: boolean;
}

export default function SectionPlatformTarget({ state, dispatch, errors, isComplete }: SectionPlatformTargetProps) {
  return (
    <FormSection
      number={7}
      title="Platform Target"
      subtitle="Pilih platform tujuan landing page."
      isComplete={isComplete}
    >
      <PillSelector
        options={platformOptions}
        selected={state.platform}
        onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'platform', value: v })}
        mode="single"
        error={errors.includes('platform')}
      />
    </FormSection>
  );
}
