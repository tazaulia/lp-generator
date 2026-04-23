import TextArea from '../ui/TextArea';
import GroupedDropdown from '../ui/GroupedDropdown';
import TextInput from '../ui/TextInput';
import awarenessOptions from '../../data/awarenessOptions';
import audienceOptions from '../../data/audienceOptions';
import toneOptions from '../../data/toneOptions';
import type { FormState, FormAction } from '../../hooks/useFormState';

interface Props {
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
  errors: string[];
  isComplete: boolean;
}

export default function SectionAudience({ state, dispatch, errors }: Props) {
  const set = (field: keyof FormState) => (value: string) =>
    dispatch({ type: 'SET_FIELD', field, value });

  const showAudienceCustom = state.targetAudience === 'Lainnya (Isi Manual)';

  return (
    <div className="space-y-4">
      <GroupedDropdown
        label="Level Awareness Audiens"
        value={state.awarenessLevel}
        onChange={set('awarenessLevel')}
        options={[...awarenessOptions]}
        required
        error={errors.includes('Level Awareness')}
      />

      <GroupedDropdown
        label="Target Audiens"
        value={state.targetAudience}
        onChange={set('targetAudience')}
        options={[...audienceOptions]}
        required
        error={errors.includes('Target Audiens')}
      />
      {showAudienceCustom && (
        <TextInput
          label="Target Audiens (isi manual)"
          value={state.targetAudienceCustom}
          onChange={set('targetAudienceCustom')}
          placeholder="Cth: Ibu menyusui yang ingin turun berat badan"
          required
          error={errors.includes('Target Audiens (isi manual)')}
        />
      )}

      <GroupedDropdown
        label="Tone Bahasa"
        value={state.tone}
        onChange={set('tone')}
        options={[...toneOptions]}
        required
        error={errors.includes('Tone')}
      />

      <TextArea
        label="Pain Points Audiens (opsional)"
        value={state.painPoints}
        onChange={set('painPoints')}
        placeholder="Cth: Takut boncos, sudah coba banyak cara tapi gagal, tidak punya waktu extra..."
        rows={2}
      />
    </div>
  );
}
