import { CUSTOM_OPTION } from './customOption';

const audienceOptions = [
  {
    group: "Marketing & Ads",
    options: [
      { value: "Advertiser", label: "Advertiser" },
      { value: "Performance Marketer", label: "Performance Marketer" },
    ],
  },
  {
    group: "Business",
    options: [
      { value: "Small Business Owner", label: "Small Business Owner" },
      { value: "Startup Founder", label: "Startup Founder" },
      { value: "Brick-and-Mortar Store Owner", label: "Brick-and-Mortar Store Owner" },
    ],
  },
  {
    group: "Commerce",
    options: [
      { value: "Marketplace Seller", label: "Marketplace Seller" },
      { value: "Reseller / Dropshipper", label: "Reseller / Dropshipper" },
    ],
  },
  {
    group: "Creator Economy",
    options: [
      { value: "Content Creator / Affiliate", label: "Content Creator / Affiliate" },
      { value: "Influencer (Nano/Micro)", label: "Influencer (Nano/Micro)" },
      { value: "Coach / Mentor / Trainer", label: "Coach / Mentor / Trainer" },
    ],
  },
  {
    group: "Demographics Specific",
    options: [
      { value: "Stay-at-Home Parents", label: "Stay-at-Home Parents" },
      { value: "Students", label: "Students" },
      { value: "Fresh Graduates", label: "Fresh Graduates" },
    ],
  },
  {
    group: "Other",
    options: [
      { value: "General Audience", label: "General Audience" },
      { value: CUSTOM_OPTION, label: CUSTOM_OPTION },
    ],
  },
] as const;

export default audienceOptions;
