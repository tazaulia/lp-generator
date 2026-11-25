import type { FormState } from '../hooks/useFormState';
import colorPaletteOptions from '../data/colorPaletteOptions';
import fallbacks from '../utils/fallbacks';
import { CUSTOM_OPTION } from '../data/customOption';

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
  const ctaText = state.ctaText === CUSTOM_OPTION
    ? state.ctaCustom
    : state.ctaText;

  const targetAudience = state.targetAudience === CUSTOM_OPTION
    ? state.targetAudienceCustom
    : state.targetAudience;

  const programDuration = state.programDuration === CUSTOM_OPTION
    ? state.programDurationCustom
    : state.programDuration;

  const programDurationLine = programDuration
    ? `- **Program duration:** ${programDuration}`
    : '';

  const painPoints = state.painPoints.trim() || fallbacks.painPoints;
  const objections = state.objections.trim() || fallbacks.objections;
  const originalPrice = state.originalPrice.trim() || 'Not specified';

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
