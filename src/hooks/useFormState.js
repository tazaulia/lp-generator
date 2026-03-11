import { useReducer } from 'react';

const initialState = {
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

function reducer(state, action) {
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

export default function useFormState() {
  return useReducer(reducer, initialState);
}
