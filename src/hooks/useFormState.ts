import { useReducer } from 'react';

export interface FormState {
  // Section 1
  framework: string;
  tone: string;
  // Section 2
  productType: string;
  productTypeCustom: string;
  goal: string;
  // Section 3
  awarenessLevel: string;
  targetAudience: string;
  targetAudienceCustom: string;
  painPoints: string;
  // Section 4
  productName: string;
  normalPrice: string;
  promoPrice: string;
  description: string;
  objections: string;
  hasBonus: boolean;
  bonusDetails: string;
  cta: string;
  ctaCustom: string;
  scarcityType: string;
  // Section 5
  additionalElements: string[];
  // Section 6
  brandColor: string;
  brandColorCustom: string;
  backgroundTheme: string;
  designStyle: string;
  heroType: string;
  stickyButton: boolean;
  // Section 7
  platform: string;
}

export type FormAction =
  | { type: 'SET_FIELD'; field: keyof FormState; value: FormState[keyof FormState] }
  | { type: 'TOGGLE_ELEMENT'; element: string }
  | { type: 'RESET' };

const initialState: FormState = {
  // Section 1
  framework: '',
  tone: '',
  // Section 2
  productType: '',
  productTypeCustom: '',
  goal: '',
  // Section 3
  awarenessLevel: '',
  targetAudience: '',
  targetAudienceCustom: '',
  painPoints: '',
  // Section 4
  productName: '',
  normalPrice: '',
  promoPrice: '',
  description: '',
  objections: '',
  hasBonus: false,
  bonusDetails: '',
  cta: '',
  ctaCustom: '',
  scarcityType: '',
  // Section 5
  additionalElements: [],
  // Section 6
  brandColor: '',
  brandColorCustom: '',
  backgroundTheme: '',
  designStyle: '',
  heroType: '',
  stickyButton: false,
  // Section 7
  platform: '',
};

function reducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.field]: action.value };

    case 'TOGGLE_ELEMENT': {
      const elements = state.additionalElements;
      const exists = elements.includes(action.element);
      return {
        ...state,
        additionalElements: exists
          ? elements.filter((el) => el !== action.element)
          : [...elements, action.element],
      };
    }

    case 'RESET':
      return { ...initialState, additionalElements: [] };

    default:
      return state;
  }
}

export default function useFormState(): [FormState, React.Dispatch<FormAction>] {
  return useReducer(reducer, initialState);
}
