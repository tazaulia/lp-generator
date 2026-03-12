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

/**
 * Returns a 7-element array indicating whether each section's mandatory fields are complete.
 * Section 5 (ElemenTambahan) has no mandatory fields and always returns false (nothing to complete).
 */
export function getSectionCompletion(state: FormState): boolean[] {
  const s1 = !!state.framework && !!state.tone;

  const productTypeOk =
    !!state.productType &&
    (state.productType !== 'Lainnya (Isi Manual)' || !!state.productTypeCustom?.trim());
  const s2 = productTypeOk && !!state.goal;

  const targetAudienceOk =
    !!state.targetAudience &&
    (state.targetAudience !== 'Lainnya (Isi Manual)' || !!state.targetAudienceCustom?.trim());
  const s3 = !!state.awarenessLevel && targetAudienceOk;

  const ctaOk =
    !!state.cta && (state.cta !== 'Isi Manual' || !!state.ctaCustom?.trim());
  const s4 =
    !!state.productName?.trim() &&
    !!state.description?.trim() &&
    ctaOk &&
    !!state.scarcityType;

  const s5 = false; // no mandatory fields

  const brandColorOk =
    !!state.brandColor &&
    (state.brandColor !== 'Lainnya / Custom (Ketik Hex/Nama)' || !!state.brandColorCustom?.trim());
  const s6 =
    brandColorOk && !!state.backgroundTheme && !!state.designStyle && !!state.heroType;

  const s7 = !!state.platform;

  return [s1, s2, s3, s4, s5, s6, s7];
}
