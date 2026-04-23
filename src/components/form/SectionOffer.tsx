import TextInput from '../ui/TextInput';
import TextArea from '../ui/TextArea';
import GroupedDropdown from '../ui/GroupedDropdown';
import accessTypeOptions from '../../data/accessTypeOptions';
import ctaOptions from '../../data/ctaOptions';
import scarcityOptions from '../../data/scarcityOptions';
import type { FormState, FormAction } from '../../hooks/useFormState';

interface Props {
  state: FormState;
  dispatch: React.Dispatch<FormAction>;
  errors: string[];
  isComplete: boolean;
}

export default function SectionOffer({ state, dispatch, errors }: Props) {
  const set = (field: keyof FormState) => (value: string) =>
    dispatch({ type: 'SET_FIELD', field, value });

  const showCtaCustom = state.ctaText === 'Isi Manual (Ketik Sendiri)';

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        <TextInput
          label="Harga"
          value={state.price}
          onChange={set('price')}
          placeholder="Cth: Rp 299.000"
          required
          error={errors.includes('Harga')}
        />
        <TextInput
          label="Harga Normal (coret)"
          value={state.originalPrice}
          onChange={set('originalPrice')}
          placeholder="Cth: Rp 799.000"
        />
      </div>

      <GroupedDropdown
        label="Tipe Akses"
        value={state.accessType}
        onChange={set('accessType')}
        options={[...accessTypeOptions]}
        required
        error={errors.includes('Tipe Akses')}
      />

      <GroupedDropdown
        label="Teks Tombol CTA"
        value={state.ctaText}
        onChange={set('ctaText')}
        options={[...ctaOptions]}
        required
        error={errors.includes('Teks CTA')}
      />
      {showCtaCustom && (
        <TextInput
          label="Teks CTA (isi manual)"
          value={state.ctaCustom}
          onChange={set('ctaCustom')}
          placeholder="Cth: Daftar Sekarang Juga"
          required
          error={errors.includes('Teks CTA (isi manual)')}
        />
      )}

      <GroupedDropdown
        label="Tipe Kelangkaan / Urgensi"
        value={state.scarcityType}
        onChange={set('scarcityType')}
        options={[...scarcityOptions]}
        required
        error={errors.includes('Tipe Kelangkaan')}
      />

      <TextArea
        label="Keberatan Utama Pembeli (opsional)"
        value={state.objections}
        onChange={set('objections')}
        placeholder="Cth: Mahal, tidak punya waktu, takut tidak ngefek, udah pernah coba yang lain..."
        rows={2}
      />
    </div>
  );
}
