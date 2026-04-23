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
      label="Nama Brand / Produk"
      value={state.brandProductName}
      onChange={set('brandProductName')}
      placeholder="Cth: Taza Nutrition · Blueprint Weight Loss 12 Minggu"
      required
      error={errors.includes('Nama Brand / Produk')}
    />
  );
}
