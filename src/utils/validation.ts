import type { FormState } from '../hooks/useFormState';

export interface ValidationResult {
  isValid: boolean;
  errors: string[];
}

/**
 * Validates the form state and returns which fields are invalid.
 */
export function validateForm(state: FormState): ValidationResult {
  const errors: string[] = [];

  // Section 1
  if (!state.framework) errors.push('framework');
  if (!state.tone) errors.push('tone');

  // Section 2
  if (!state.productType) {
    errors.push('productType');
  } else if (
    state.productType === 'Lainnya (Isi Manual)' &&
    !state.productTypeCustom?.trim()
  ) {
    errors.push('productTypeCustom');
  }
  if (!state.goal) errors.push('goal');

  // Section 3
  if (!state.awarenessLevel) errors.push('awarenessLevel');
  if (!state.targetAudience) {
    errors.push('targetAudience');
  } else if (
    state.targetAudience === 'Lainnya (Isi Manual)' &&
    !state.targetAudienceCustom?.trim()
  ) {
    errors.push('targetAudienceCustom');
  }

  // Section 4
  if (!state.productName?.trim()) errors.push('productName');
  if (!state.description?.trim()) errors.push('description');
  if (!state.cta) {
    errors.push('cta');
  } else if (state.cta === 'Isi Manual' && !state.ctaCustom?.trim()) {
    errors.push('ctaCustom');
  }
  if (!state.scarcityType) errors.push('scarcityType');

  // Section 6
  if (!state.brandColor) {
    errors.push('brandColor');
  } else if (
    state.brandColor === 'Lainnya / Custom (Ketik Hex/Nama)' &&
    !state.brandColorCustom?.trim()
  ) {
    errors.push('brandColorCustom');
  }
  if (!state.backgroundTheme) errors.push('backgroundTheme');
  if (!state.designStyle) errors.push('designStyle');
  if (!state.heroType) errors.push('heroType');

  // Section 7
  if (!state.platform) errors.push('platform');

  return { isValid: errors.length === 0, errors };
}
