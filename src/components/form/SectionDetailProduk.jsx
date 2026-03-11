import FormSection from './FormSection';
import GroupedDropdown from '../ui/GroupedDropdown';
import TextInput from '../ui/TextInput';
import TextArea from '../ui/TextArea';
import Checkbox from '../ui/Checkbox';
import ctaOptions from '../../data/ctaOptions';
import scarcityOptions from '../../data/scarcityOptions';

export default function SectionDetailProduk({ state, dispatch, errors }) {
  const showCustomCTA = state.cta === 'Isi Manual';

  return (
    <FormSection
      number={4}
      title="Detail Produk & Copy"
      subtitle="Tentukan penawaran dan copywriting utama."
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <TextInput
          label="Nama Produk"
          value={state.productName}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'productName', value: v })}
          placeholder="Contoh: Masterclass Copywriting"
          required
          error={errors.includes('productName')}
        />
        <TextInput
          label="Harga Normal"
          value={state.normalPrice}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'normalPrice', value: v })}
          placeholder="Rp 999.000"
        />
        <TextInput
          label="Harga Promo"
          value={state.promoPrice}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'promoPrice', value: v })}
          placeholder="Rp 499.000"
        />
      </div>

      <TextArea
        label="Deskripsi & Benefit Utama (Poin Penting Saja)"
        value={state.description}
        onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'description', value: v })}
        placeholder="Tulis poin-poin utama keunggulan produk secara singkat..."
        required
        error={errors.includes('description')}
        rows={4}
      />

      <TextInput
        label="Keberatan Utama (Kenapa orang ragu beli?)"
        value={state.objections}
        onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'objections', value: v })}
        placeholder="Cth: Mahal, Takut tidak ngefek, Ribet..."
      />

      <Checkbox
        label="Ada Bonus Tambahan? (Offer Stack)"
        checked={state.hasBonus}
        onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'hasBonus', value: v })}
      >
        <TextArea
          label="Bonus Details"
          value={state.bonusDetails}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'bonusDetails', value: v })}
          placeholder="Sebutkan bonus & nilainya (Cth: Ebook senilai 100rb, Template senilai 50rb...)"
          rows={3}
        />
      </Checkbox>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <GroupedDropdown
          label="Call To Action (CTA)"
          value={state.cta}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'cta', value: v })}
          options={ctaOptions}
          required
          error={errors.includes('cta') || errors.includes('ctaCustom')}
          placeholder="Pilih CTA..."
        />
        <GroupedDropdown
          label="Tipe Scarcity (Kelangkaan)"
          value={state.scarcityType}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'scarcityType', value: v })}
          options={scarcityOptions}
          required
          error={errors.includes('scarcityType')}
          placeholder="Pilih scarcity..."
        />
      </div>
      {showCustomCTA && (
        <TextInput
          label="CTA (Manual)"
          value={state.ctaCustom}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'ctaCustom', value: v })}
          placeholder="Ketik teks CTA Anda..."
          required
          error={errors.includes('ctaCustom')}
        />
      )}
    </FormSection>
  );
}
