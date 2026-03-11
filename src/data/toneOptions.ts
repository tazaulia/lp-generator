const toneOptions = [
  {
    group: "Populer & Efektif",
    options: [
      { value: "Friendly & Conversational", label: "Friendly & Conversational" },
      { value: "Professional & Formal", label: "Professional & Formal" },
      { value: "Witty & Humorous", label: "Witty & Humorous" },
      { value: "Bold & Disruptive", label: "Bold & Disruptive" },
    ],
  },
  {
    group: "Emosional & Story",
    options: [
      { value: "Empathetic", label: "Empathetic" },
      { value: "Storytelling Mode", label: "Storytelling Mode" },
      { value: "Inspirational", label: "Inspirational" },
      { value: "Exciting & Energetic", label: "Exciting & Energetic" },
    ],
  },
  {
    group: "Authority & Logic",
    options: [
      { value: "Direct & To The Point", label: "Direct & To The Point" },
      { value: "Scientific / Data-Driven", label: "Scientific / Data-Driven" },
      { value: "Trustworthy", label: "Trustworthy" },
      { value: "Urgent / Scarcity", label: "Urgent / Scarcity" },
    ],
  },
  {
    group: "Vibe Khusus",
    options: [
      { value: "Luxury & Exclusive", label: "Luxury & Exclusive" },
      { value: "Minimalist & Zen", label: "Minimalist & Zen" },
    ],
  },
] as const;

export default toneOptions;
