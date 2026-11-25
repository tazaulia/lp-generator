import TextInput from '../ui/TextInput';
import TextArea from '../ui/TextArea';
import GroupedDropdown from '../ui/GroupedDropdown';
import programDurationOptions from '../../data/programDurationOptions';
import type { FormState, FormAction } from '../../hooks/useFormState';
import { CUSTOM_OPTION } from '../../data/customOption';

interface Props {
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
  errors: string[];
  isComplete: boolean;
}

export default function SectionProduct({ state, dispatch, errors }: Props) {
  const set = (field: keyof FormState) => (value: string) =>
    dispatch({ type: 'SET_FIELD', field, value });

  const showDuration = state.templateType === 'A';
  const showDurationCustom = state.programDuration === CUSTOM_OPTION;

  return (
    <div className="space-y-4">
      <TextInput
        label="Product Format"
        value={state.productFormat}
        onChange={set('productFormat')}
        placeholder="e.g. 5 video modules + ebook + 3 bonus tools"
        required
        error={errors.includes('Product Format')}
      />

      <TextArea
        label="Key Selling Points & Core Promise"
        value={state.keySellingPoints}
        onChange={set('keySellingPoints')}
        placeholder="Write your core promise + 3–5 key strengths that set you apart from competitors. e.g. Lose weight for good — no pills, no extreme diets — in 12 weeks."
        required
        rows={4}
        error={errors.includes('Key Selling Points')}
      />

      {showDuration && (
        <>
          <GroupedDropdown
            label="Program Duration"
            value={state.programDuration}
            onChange={set('programDuration')}
            options={[...programDurationOptions]}
            required
            error={errors.includes('Program Duration')}
          />
          {showDurationCustom && (
            <TextInput
              label="Program Duration (custom)"
              value={state.programDurationCustom}
              onChange={set('programDurationCustom')}
              placeholder="e.g. 10 Weeks"
              required
              error={errors.includes('Program Duration (custom)')}
            />
          )}
        </>
      )}
    </div>
  );
}
