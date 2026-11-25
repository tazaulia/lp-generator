import type { FormState } from '../hooks/useFormState';
import { CUSTOM_OPTION } from '../data/customOption';

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
  templateType: 'Template Type',
  brandProductName: 'Brand / Product Name',
  productFormat: 'Product Format',
  keySellingPoints: 'Key Selling Points',
  price: 'Price',
  accessType: 'Access Type',
  ctaText: 'CTA Text',
  scarcityType: 'Scarcity Type',
  awarenessLevel: 'Awareness Level',
  targetAudience: 'Target Audience',
  tone: 'Tone',
  colorPalette: 'Color Palette',
  checkoutAnchor: 'Checkout Anchor',
  programDuration: 'Program Duration',
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

  if (state.ctaText === CUSTOM_OPTION && !state.ctaCustom.trim()) {
    errors.push('CTA Text (custom)');
  }
  if (state.targetAudience === CUSTOM_OPTION && !state.targetAudienceCustom.trim()) {
    errors.push('Target Audience (custom)');
  }
  if (state.programDuration === CUSTOM_OPTION && !state.programDurationCustom.trim()) {
    errors.push('Program Duration (custom)');
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
