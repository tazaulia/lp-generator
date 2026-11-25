const scarcityOptions = [
  { value: "None", label: "None" },
  { value: "Real Timer (Countdown)", label: "Real Timer (Countdown)" },
  { value: "Quantity Left (Slots/Stock Remaining)", label: "Quantity Left (Slots/Stock Remaining)" },
  { value: "Price Going Up Soon", label: "Price Going Up Soon" },
] as const;

export default scarcityOptions;
