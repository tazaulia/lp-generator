import { CUSTOM_OPTION } from './customOption';

// Only shown when templateType === 'A' (online course / coaching)
const programDurationOptions = [
  { value: "4 Weeks", label: "4 Weeks" },
  { value: "6 Weeks", label: "6 Weeks" },
  { value: "8 Weeks", label: "8 Weeks" },
  { value: "12 Weeks", label: "12 Weeks" },
  { value: "3 Months", label: "3 Months" },
  { value: "6 Months", label: "6 Months" },
  { value: CUSTOM_OPTION, label: CUSTOM_OPTION },
] as const;

export default programDurationOptions;
