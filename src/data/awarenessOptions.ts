const awarenessOptions = [
  { value: "Unaware (Doesn't know the problem yet)", label: "Unaware (Doesn't know the problem yet)" },
  { value: "Problem Aware (Knows the problem)", label: "Problem Aware (Knows the problem)" },
  { value: "Solution Aware (Looking for solutions)", label: "Solution Aware (Looking for solutions)" },
  { value: "Product Aware (Knows your product)", label: "Product Aware (Knows your product)" },
  { value: "Most Aware (Ready to buy)", label: "Most Aware (Ready to buy)" },
] as const;

export default awarenessOptions;
