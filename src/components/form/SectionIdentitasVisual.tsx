import type { Dispatch } from 'react';
import type { FormState, FormAction } from '../../hooks/useFormState';
import FormSection from './FormSection';
import GroupedDropdown from '../ui/GroupedDropdown';
import TextInput from '../ui/TextInput';
import Checkbox from '../ui/Checkbox';
import brandColorOptions from '../../data/brandColorOptions';
import themeOptions from '../../data/themeOptions';
import designStyleOptions from '../../data/designStyleOptions';
import heroTypeOptions from '../../data/heroTypeOptions';

interface SectionIdentitasVisualProps {
  state: FormState;
  dispatch: Dispatch<FormAction>;
  errors: string[];
  isComplete?: boolean;
}

export default function SectionIdentitasVisual({ state, dispatch, errors, isComplete }: SectionIdentitasVisualProps) {
  const showCustomColor = state.brandColor === 'Lainnya / Custom (Ketik Hex/Nama)';

  return (
    <FormSection
      number={6}
      title="Identitas Visual & Desain"
      subtitle="Atur tampilan visual, warna, dan layout."
      isComplete={isComplete}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <GroupedDropdown
          label="Warna Brand Utama"
          value={state.brandColor}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'brandColor', value: v })}
          options={brandColorOptions}
          required
          error={errors.includes('brandColor') || errors.includes('brandColorCustom')}
          placeholder="Pilih warna..."
        />
        <GroupedDropdown
          label="Tema Background (Light/Dark)"
          value={state.backgroundTheme}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'backgroundTheme', value: v })}
          options={themeOptions}
          required
          error={errors.includes('backgroundTheme')}
          placeholder="Pilih tema..."
        />
      </div>
      {showCustomColor && (
        <TextInput
          label="Warna Custom (Hex/Nama)"
          value={state.brandColorCustom}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'brandColorCustom', value: v })}
          placeholder="Cth: #FF6600 atau Coral"
          required
          error={errors.includes('brandColorCustom')}
        />
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <GroupedDropdown
          label="Gaya Desain & Referensi"
          value={state.designStyle}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'designStyle', value: v })}
          options={designStyleOptions}
          required
          error={errors.includes('designStyle')}
          placeholder="Pilih gaya..."
        />
        <GroupedDropdown
          label="Hero Section Type"
          value={state.heroType}
          onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'heroType', value: v })}
          options={heroTypeOptions}
          required
          error={errors.includes('heroType')}
          placeholder="Pilih tipe hero..."
        />
      </div>
      <Checkbox
        label="Aktifkan Sticky Button di Mobile (Wajib untuk Traffic Ads)"
        checked={state.stickyButton}
        onChange={(v) => dispatch({ type: 'SET_FIELD', field: 'stickyButton', value: v })}
      />
    </FormSection>
  );
}
