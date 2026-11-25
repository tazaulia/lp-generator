import TextArea from '../ui/TextArea';
import GroupedDropdown from '../ui/GroupedDropdown';
import TextInput from '../ui/TextInput';
import awarenessOptions from '../../data/awarenessOptions';
import audienceOptions from '../../data/audienceOptions';
import toneOptions from '../../data/toneOptions';
import type { FormState, FormAction } from '../../hooks/useFormState';
import { CUSTOM_OPTION } from '../../data/customOption';

interface Props {
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
  errors: string[];
  isComplete: boolean;
}

export default function SectionAudience({ state, dispatch, errors }: Props) {
  const set = (field: keyof FormState) => (value: string) =>
    dispatch({ type: 'SET_FIELD', field, value });

  const showAudienceCustom = state.targetAudience === CUSTOM_OPTION;

  return (
    <div className="space-y-4">
      <GroupedDropdown
        label="Audience Awareness Level"
        value={state.awarenessLevel}
        onChange={set('awarenessLevel')}
        options={[...awarenessOptions]}
        required
        error={errors.includes('Awareness Level')}
      />

      <GroupedDropdown
        label="Target Audience"
        value={state.targetAudience}
        onChange={set('targetAudience')}
        options={[...audienceOptions]}
        required
        error={errors.includes('Target Audience')}
      />
      {showAudienceCustom && (
        <TextInput
          label="Target Audience (custom)"
          value={state.targetAudienceCustom}
          onChange={set('targetAudienceCustom')}
          placeholder="e.g. New moms who want to lose weight"
          required
          error={errors.includes('Target Audience (custom)')}
        />
      )}

      <GroupedDropdown
        label="Tone of Voice"
        value={state.tone}
        onChange={set('tone')}
        options={[...toneOptions]}
        required
        error={errors.includes('Tone')}
      />

      <TextArea
        label="Audience Pain Points (optional)"
        value={state.painPoints}
        onChange={set('painPoints')}
        placeholder="e.g. Afraid of wasting money, tried everything and nothing worked, no spare time..."
        rows={2}
      />
    </div>
  );
}
