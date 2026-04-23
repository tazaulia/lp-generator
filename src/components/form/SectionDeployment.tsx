import TextInput from '../ui/TextInput';
import type { FormState, FormAction } from '../../hooks/useFormState';

interface Props {
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
  errors: string[];
  isComplete: boolean;
}

export default function SectionDeployment({ state, dispatch, errors }: Props) {
  const set = (field: keyof FormState) => (value: string) =>
    dispatch({ type: 'SET_FIELD', field, value });

  return (
    <div className="space-y-4">
      <TextInput
        label="Checkout / Order Anchor"
        value={state.checkoutAnchor}
        onChange={set('checkoutAnchor')}
        placeholder="#pricing"
        required
        error={errors.includes('Checkout Anchor')}
      />
      <p className="text-xs text-slate-400 dark:text-slate-500 -mt-2">
        Anchor link yang digunakan semua tombol CTA di halaman. Default <code className="font-mono bg-slate-100 dark:bg-dark-700 px-1 rounded">#pricing</code> — ubah jika checkout form kamu ada di section lain.
      </p>
    </div>
  );
}
