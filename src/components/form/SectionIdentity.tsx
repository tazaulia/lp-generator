import TextInput from '../ui/TextInput';
import type { FormState, FormAction } from '../../hooks/useFormState';

interface Props {
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
  errors: string[];
  isComplete: boolean;
}

export default function SectionIdentity({ state, dispatch, errors }: Props) {
  const set = (field: keyof FormState) => (value: string) =>
    dispatch({ type: 'SET_FIELD', field, value });

  return (
    <TextInput
      label="Brand / Product Name"
      value={state.brandProductName}
      onChange={set('brandProductName')}
      placeholder="e.g. Taza Nutrition · 12-Week Weight Loss Blueprint"
      required
      error={errors.includes('Brand / Product Name')}
    />
  );
}
