const toneOptions = [
  {
    group: "Populer & Efektif",
    options: [
      { value: "Friendly & Conversational", label: "Friendly & Conversational" },
      { value: "Professional & Formal", label: "Professional & Formal" },
      { value: "Empathetic", label: "Empathetic" },
      { value: "Inspirational", label: "Inspirational" },
    ],
  },
  {
    group: "Authority & Logic",
    options: [
      { value: "Direct & To The Point", label: "Direct & To The Point" },
      { value: "Scientific / Data-Driven", label: "Scientific / Data-Driven" },
      { value: "Luxury & Exclusive", label: "Luxury & Exclusive" },
      { value: "Bold & Disruptive", label: "Bold & Disruptive" },
    ],
  },
] as const;

export default toneOptions;
