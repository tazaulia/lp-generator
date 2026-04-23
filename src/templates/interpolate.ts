import type { FormState } from '../hooks/useFormState';
import colorPaletteOptions from '../data/colorPaletteOptions';
import fallbacks from '../utils/fallbacks';

export interface ResolvedColors {
  accent: string;
  accentRgb: string;
  gradient: string;
  lightBg: string;
}

export function resolveColors(paletteValue: string): ResolvedColors {
  const palette = colorPaletteOptions.find(p => p.value === paletteValue);
  if (!palette) {
    // Default to iOS Blue if somehow unresolved
    return {
      accent: '#0a84ff',
      accentRgb: '10, 132, 255',
      gradient: 'linear-gradient(135deg, #0a84ff, #5ac8fa, #64d2ff)',
      lightBg: '#f5f5f7',
    };
  }
  return {
    accent: palette.accent,
    accentRgb: palette.accentRgb,
    gradient: palette.gradient,
    lightBg: palette.lightBg,
  };
}

export function interpolate(template: string, state: FormState, colors: ResolvedColors): string {
  const ctaText = state.ctaText === 'Isi Manual (Ketik Sendiri)'
    ? state.ctaCustom
    : state.ctaText;

  const targetAudience = state.targetAudience === 'Lainnya (Isi Manual)'
    ? state.targetAudienceCustom
    : state.targetAudience;

  const programDuration = state.programDuration === 'Lainnya (Isi Manual)'
    ? state.programDurationCustom
    : state.programDuration;

  const programDurationLine = programDuration
    ? `- **Durasi Program:** ${programDuration}`
    : '';

  const painPoints = state.painPoints.trim() || fallbacks.painPoints;
  const objections = state.objections.trim() || fallbacks.objections;
  const originalPrice = state.originalPrice.trim() || 'Tidak disebutkan';

  const values: Record<string, string> = {
    brandProductName: state.brandProductName,
    productFormat: state.productFormat,
    keySellingPoints: state.keySellingPoints,
    programDurationLine,
    price: state.price,
    originalPrice,
    accessType: state.accessType,
    ctaText,
    scarcityType: state.scarcityType,
    objections,
    awarenessLevel: state.awarenessLevel,
    targetAudience,
    painPoints,
    tone: state.tone,
    accent: colors.accent,
    accentRgb: colors.accentRgb,
    gradient: colors.gradient,
    lightBg: colors.lightBg,
    checkoutAnchor: state.checkoutAnchor,
  };

  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{{${key}}}`, value),
    template
  );
}
