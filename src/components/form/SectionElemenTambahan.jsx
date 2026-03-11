import FormSection from './FormSection';
import PillSelector from '../ui/PillSelector';
import additionalElements from '../../data/additionalElements';

export default function SectionElemenTambahan({ state, dispatch }) {
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
