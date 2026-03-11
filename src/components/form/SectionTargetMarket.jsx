import FormSection from './FormSection';
import GroupedDropdown from '../ui/GroupedDropdown';
import TextInput from '../ui/TextInput';
import awarenessOptions from '../../data/awarenessOptions';
import audienceOptions from '../../data/audienceOptions';

export default function SectionTargetMarket({ state, dispatch, errors }) {
  const showCustomAudience = state.targetAudience === 'Lainnya (Isi Manual)';

  return (
    <FormSection
      number={3}
      title="Target Market"
      subtitle="Siapa audiens Anda dan seberapa tahu mereka?"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <GroupedDropdown
          label="Level Awareness"
          value={state.awarenessLevel}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'awarenessLevel', value: v })}
          options={awarenessOptions}
          required
          error={errors.includes('awarenessLevel')}
          placeholder="Pilih level..."
        />
        <GroupedDropdown
          label="Target Audience"
          value={state.targetAudience}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'targetAudience', value: v })}
          options={audienceOptions}
          required
          error={errors.includes('targetAudience') || errors.includes('targetAudienceCustom')}
          placeholder="Pilih target..."
        />
      </div>
      {showCustomAudience && (
        <TextInput
          label="Target Audience (Manual)"
          value={state.targetAudienceCustom}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'targetAudienceCustom', value: v })}
          placeholder="Ketik target audience Anda..."
          required
          error={errors.includes('targetAudienceCustom')}
        />
      )}
      <TextInput
        label="3 Masalah Utama / Ketakutan Audiens (Pain Points)"
        value={state.painPoints}
        onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'painPoints', value: v })}
        placeholder="Cth: Takut boncos iklan, Gaptek, Tidak punya waktu..."
      />
    </FormSection>
  );
}
