import FormSection from './FormSection';
import GroupedDropdown from '../ui/GroupedDropdown';
import TextInput from '../ui/TextInput';
import productTypeOptions from '../../data/productTypeOptions';
import goalOptions from '../../data/goalOptions';

export default function SectionProdukTujuan({ state, dispatch, errors }) {
  const showCustomType = state.productType === 'Lainnya (Isi Manual)';

  return (
    <FormSection
      number={2}
      title="Produk & Tujuan"
      subtitle="Apa yang Anda jual dan apa goal utamanya?"
    >
      <GroupedDropdown
        label="Tipe Produk"
        value={state.productType}
        onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'productType', value: v })}
        options={productTypeOptions}
        required
        error={errors.includes('productType') || errors.includes('productTypeCustom')}
        placeholder="Pilih tipe produk..."
      />
      {showCustomType && (
        <TextInput
          label="Tipe Produk (Manual)"
          value={state.productTypeCustom}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'productTypeCustom', value: v })}
          placeholder="Ketik tipe produk Anda..."
          required
          error={errors.includes('productTypeCustom')}
        />
      )}
      <GroupedDropdown
        label="Tujuan Utama (Goal)"
        value={state.goal}
        onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'goal', value: v })}
        options={goalOptions}
        required
        error={errors.includes('goal')}
        placeholder="Pilih tujuan..."
      />
    </FormSection>
  );
}
