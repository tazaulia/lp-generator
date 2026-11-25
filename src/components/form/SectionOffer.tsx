import TextInput from '../ui/TextInput';
import TextArea from '../ui/TextArea';
import GroupedDropdown from '../ui/GroupedDropdown';
import accessTypeOptions from '../../data/accessTypeOptions';
import ctaOptions from '../../data/ctaOptions';
import scarcityOptions from '../../data/scarcityOptions';
import type { FormState, FormAction } from '../../hooks/useFormState';
import { CUSTOM_OPTION } from '../../data/customOption';

interface Props {
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
  errors: string[];
  isComplete: boolean;
}

export default function SectionOffer({ state, dispatch, errors }: Props) {
  const set = (field: keyof FormState) => (value: string) =>
    dispatch({ type: 'SET_FIELD', field, value });

  const showCtaCustom = state.ctaText === CUSTOM_OPTION;

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <TextInput
          label="Price"
          value={state.price}
          onChange={set('price')}
          placeholder="e.g. $49"
          required
          error={errors.includes('Price')}
        />
        <TextInput
          label="Original Price (crossed out)"
          value={state.originalPrice}
          onChange={set('originalPrice')}
          placeholder="e.g. $129"
        />
      </div>

      <GroupedDropdown
        label="Access Type"
        value={state.accessType}
        onChange={set('accessType')}
        options={[...accessTypeOptions]}
        required
        error={errors.includes('Access Type')}
      />

      <GroupedDropdown
        label="CTA Button Text"
        value={state.ctaText}
        onChange={set('ctaText')}
        options={[...ctaOptions]}
        required
        error={errors.includes('CTA Text')}
      />
      {showCtaCustom && (
        <TextInput
          label="CTA Text (custom)"
          value={state.ctaCustom}
          onChange={set('ctaCustom')}
          placeholder="e.g. Sign Me Up Today"
          required
          error={errors.includes('CTA Text (custom)')}
        />
      )}

      <GroupedDropdown
        label="Scarcity / Urgency Type"
        value={state.scarcityType}
        onChange={set('scarcityType')}
        options={[...scarcityOptions]}
        required
        error={errors.includes('Scarcity Type')}
      />

      <TextArea
        label="Main Buyer Objections (optional)"
        value={state.objections}
        onChange={set('objections')}
        placeholder="e.g. Too expensive, no time, worried it won't work, already tried others..."
        rows={2}
      />
    </div>
  );
}
