import FormSection from './FormSection';
import GroupedDropdown from '../ui/GroupedDropdown';
import frameworkOptions from '../../data/frameworkOptions';
import toneOptions from '../../data/toneOptions';

export default function SectionFrameworkTone({ state, dispatch, errors }) {
  return (
    <FormSection
      number={1}
      title="Framework & Tone"
      subtitle="Tentukan struktur psikologi dan gaya bahasa copywriting."
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <GroupedDropdown
          label="Pilih Framework"
          value={state.framework}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'framework', value: v })}
          options={frameworkOptions}
          required
          error={errors.includes('framework')}
          placeholder="Pilih framework..."
        />
        <GroupedDropdown
          label="Gaya Bahasa (Tone)"
          value={state.tone}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'tone', value: v })}
          options={toneOptions}
          required
          error={errors.includes('tone')}
          placeholder="Pilih tone..."
        />
      </div>
    </FormSection>
  );
}
