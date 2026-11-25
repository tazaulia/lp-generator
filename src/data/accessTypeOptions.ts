const accessTypeOptions = [
  { value: "Lifetime Access (One-Time Payment)", label: "Lifetime Access (One-Time Payment)" },
  { value: "Monthly Subscription", label: "Monthly Subscription" },
  { value: "Annual Subscription", label: "Annual Subscription" },
  { value: "Limited-Time Access (Specify Duration)", label: "Limited-Time Access (Specify Duration)" },
] as const;

export default accessTypeOptions;
