import { useReducer } from 'react';

export type TemplateType = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | '';

export interface FormState {
  // Step 0 — Template type
  templateType: TemplateType;

  // Step 1 — Product & Brand
  brandProductName: string;

  // Step 2 — Product Details
  productFormat: string;
  keySellingPoints: string;
  programDuration: string;       // only used when templateType === 'A'
  programDurationCustom: string; // free text when programDuration === CUSTOM_OPTION

  // Step 3 — Offer
  price: string;
  originalPrice: string;
  accessType: string;
  ctaText: string;
  ctaCustom: string;             // free text when ctaText === CUSTOM_OPTION
  scarcityType: string;
  objections: string;

  // Step 4 — Audience
  awarenessLevel: string;
  targetAudience: string;
  targetAudienceCustom: string;  // free text when targetAudience === CUSTOM_OPTION
  tone: string;
  painPoints: string;

  // Step 5 — Brand Colors
  colorPalette: string;

  // Step 6 — Deployment
  checkoutAnchor: string;
}

export type FormAction =
  | { type: 'SET_FIELD'; field: keyof FormState; value: string }
  | { type: 'RESET' };

const initialState: FormState = {
  templateType: '',
  brandProductName: '',
  productFormat: '',
  keySellingPoints: '',
  programDuration: '',
  programDurationCustom: '',
  price: '',
  originalPrice: '',
  accessType: '',
  ctaText: '',
  ctaCustom: '',
  scarcityType: '',
  objections: '',
  awarenessLevel: '',
  targetAudience: '',
  targetAudienceCustom: '',
  tone: '',
  painPoints: '',
  colorPalette: '',
  checkoutAnchor: '#pricing',
};

function reducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };
    case 'RESET':
      return { ...initialState };
    default:
      return state;
  }
}

export default function useFormState(): [FormState, React.Dispatch<FormAction>] {
  return useReducer(reducer, initialState);
}
