import type { FormState } from '../hooks/useFormState';

export interface ValidationResult {
  errors: string[];
  isValid: boolean;
}

const REQUIRED: (keyof FormState)[] = [
  'templateType',
  'brandProductName',
  'productFormat',
  'keySellingPoints',
  'price',
  'accessType',
  'ctaText',
  'scarcityType',
  'awarenessLevel',
  'targetAudience',
  'tone',
  'colorPalette',
  'checkoutAnchor',
];

const FIELD_LABELS: Partial<Record<keyof FormState, string>> = {
  templateType: 'Tipe Template',
  brandProductName: 'Nama Brand / Produk',
  productFormat: 'Format Produk',
  keySellingPoints: 'Keunggulan Produk',
  price: 'Harga',
  accessType: 'Tipe Akses',
  ctaText: 'Teks CTA',
  scarcityType: 'Tipe Kelangkaan',
  awarenessLevel: 'Level Awareness',
  targetAudience: 'Target Audiens',
  tone: 'Tone',
  colorPalette: 'Palet Warna',
  checkoutAnchor: 'Checkout Anchor',
  programDuration: 'Durasi Program',
};

export function validateForm(state: FormState): ValidationResult {
  const errors: string[] = [];

  for (const field of REQUIRED) {
    if (!state[field] || String(state[field]).trim() === '') {
      errors.push(FIELD_LABELS[field] ?? field);
    }
  }

  if (state.templateType === 'A' && !state.programDuration) {
    errors.push(FIELD_LABELS['programDuration']!);
  }

  if (state.ctaText === 'Isi Manual (Ketik Sendiri)' && !state.ctaCustom.trim()) {
    errors.push('Teks CTA (isi manual)');
  }
  if (state.targetAudience === 'Lainnya (Isi Manual)' && !state.targetAudienceCustom.trim()) {
    errors.push('Target Audiens (isi manual)');
  }
  if (state.programDuration === 'Lainnya (Isi Manual)' && !state.programDurationCustom.trim()) {
    errors.push('Durasi Program (isi manual)');
  }

  return { errors, isValid: errors.length === 0 };
}

export function getStepCompletion(state: FormState): boolean[] {
  return [
    Boolean(state.templateType),
    Boolean(state.brandProductName.trim()),
    Boolean(state.productFormat.trim() && state.keySellingPoints.trim()),
    Boolean(state.price.trim() && state.accessType && state.ctaText && state.scarcityType),
    Boolean(state.awarenessLevel && state.targetAudience && state.tone),
    Boolean(state.colorPalette),
    Boolean(state.checkoutAnchor.trim()),
  ];
}
