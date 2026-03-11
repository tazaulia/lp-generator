import { useCallback } from 'react';
import { processFormData, generatePrompt } from '../templates/promptTemplate';
import { validateForm } from '../utils/validation';
import type { FormState } from './useFormState';

interface GenerateResult {
  prompt: string | null;
  errors: string[];
}

export default function usePromptGenerator(): (state: FormState) => GenerateResult {
  const generate = useCallback((state: FormState): GenerateResult => {
    const { isValid, errors } = validateForm(state);
    if (!isValid) {
      return { prompt: null, errors };
    }
    const processed = processFormData(state);
    const prompt = generatePrompt(processed);
    return { prompt, errors: [] };
  }, []);

  return generate;
}
