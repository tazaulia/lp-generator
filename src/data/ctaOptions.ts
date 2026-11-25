import { CUSTOM_OPTION } from './customOption';

const ctaOptions = [
  { value: "Buy Now", label: "Buy Now" },
  { value: "Sign Up Now", label: "Sign Up Now" },
  { value: "Join Now", label: "Join Now" },
  { value: "Download Now", label: "Download Now" },
  { value: "Secure Your Spot", label: "Secure Your Spot" },
  { value: "Get Started", label: "Get Started" },
  { value: CUSTOM_OPTION, label: CUSTOM_OPTION },
] as const;

export default ctaOptions;
