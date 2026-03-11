import { useCallback } from 'react';
import { processFormData, generatePrompt } from '../templates/promptTemplate';
import { validateForm } from '../utils/validation';

export default function usePromptGenerator() {
  const generate = useCallback((state) => {
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
