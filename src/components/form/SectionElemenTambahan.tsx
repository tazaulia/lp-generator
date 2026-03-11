import type { Dispatch } from 'react';
import type { FormState, FormAction } from '../../hooks/useFormState';
import FormSection from './FormSection';
import PillSelector from '../ui/PillSelector';
import additionalElements from '../../data/additionalElements';

interface SectionElemenTambahanProps {
  state: FormState;
  dispatch: Dispatch<FormAction>;
  errors?: string[];
}

export default function SectionElemenTambahan({ state, dispatch }: SectionElemenTambahanProps) {
  return (
    <FormSection
      number={5}
      title="Elemen Tambahan"
      subtitle="Pilih section tambahan yang ingin dimasukkan."
    >
      <PillSelector
        options={additionalElements}
        selected={state.additionalElements}
        onChange={(elements) => dispatch({ type: 'SET_FIELD', field: 'additionalElements', value: elements })}
        mode="multi"
      />
    </FormSection>
  );
}
