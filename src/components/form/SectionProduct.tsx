import TextInput from '../ui/TextInput';
import TextArea from '../ui/TextArea';
import GroupedDropdown from '../ui/GroupedDropdown';
import programDurationOptions from '../../data/programDurationOptions';
import type { FormState, FormAction } from '../../hooks/useFormState';

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
  const showDurationCustom = state.programDuration === 'Lainnya (Isi Manual)';

  return (
    <div className="space-y-4">
      <TextInput
        label="Format Produk"
        value={state.productFormat}
        onChange={set('productFormat')}
        placeholder="Cth: 5 video modul + ebook + 3 bonus tools"
        required
        error={errors.includes('Format Produk')}
      />

      <TextArea
        label="Keunggulan Produk & Core Promise"
        value={state.keySellingPoints}
        onChange={set('keySellingPoints')}
        placeholder="Tulis janji utama + 3–5 keunggulan kunci yang membedakan dari kompetitor. Cth: Turun berat badan permanen tanpa obat, tanpa pantang makan ekstrem, dalam 12 minggu."
        required
        rows={4}
        error={errors.includes('Keunggulan Produk')}
      />

      {showDuration && (
        <>
          <GroupedDropdown
            label="Durasi Program"
            value={state.programDuration}
            onChange={set('programDuration')}
            options={[...programDurationOptions]}
            required
            error={errors.includes('Durasi Program')}
          />
          {showDurationCustom && (
            <TextInput
              label="Durasi (isi manual)"
              value={state.programDurationCustom}
              onChange={set('programDurationCustom')}
              placeholder="Cth: 10 Minggu"
              required
              error={errors.includes('Durasi Program (isi manual)')}
            />
          )}
        </>
      )}
    </div>
  );
}
