const designStyleOptions = [
  {
    group: "Archetype Brand",
    options: [
      { value: "Apple Style", label: "Apple Style" },
      { value: "Stripe / Linear Style", label: "Stripe / Linear Style" },
      { value: "Airbnb Style", label: "Airbnb Style" },
      { value: "Notion Style", label: "Notion Style" },
      { value: "Nike / Adidas Style", label: "Nike / Adidas Style" },
      { value: "Tesla Style", label: "Tesla Style" },
    ],
  },
  {
    group: "Popular",
    options: [
      { value: "Clean & Minimalist", label: "Clean & Minimalist" },
      { value: "Modern SaaS", label: "Modern SaaS" },
      { value: "Bold & High Conversion", label: "Bold & High Conversion" },
      { value: "Elegant & Premium", label: "Elegant & Premium" },
      { value: "Trust & Authority", label: "Trust & Authority" },
      { value: "Dark Mode Style", label: "Dark Mode Style" },
    ],
  },
  {
    group: "Tech & Future",
    options: [
      { value: "Futuristic Cyberpunk", label: "Futuristic Cyberpunk" },
      { value: "AI / SaaS Modern", label: "AI / SaaS Modern" },
      { value: "Holographic & Glass", label: "Holographic & Glass" },
      { value: "Abstract Gradient", label: "Abstract Gradient" },
    ],
  },
  {
    group: "Trending",
    options: [
      { value: "Bento Grid / Modular", label: "Bento Grid / Modular" },
      { value: "Neobrutalism", label: "Neobrutalism" },
      { value: "Glassmorphism", label: "Glassmorphism" },
    ],
  },
  {
    group: "Industry Specific",
    options: [
      { value: "Medical / Health", label: "Medical / Health" },
      { value: "Real Estate", label: "Real Estate" },
      { value: "Wedding / Event", label: "Wedding / Event" },
      { value: "Finance / Bank", label: "Finance / Bank" },
      { value: "Gamer / Neon", label: "Gamer / Neon" },
      { value: "Organic & Natural", label: "Organic & Natural" },
      { value: "Corporate", label: "Corporate" },
    ],
  },
  {
    group: "Mood & Vibe",
    options: [
      { value: "Playful & Fun", label: "Playful & Fun" },
      { value: "Typography-Driven", label: "Typography-Driven" },
      { value: "Retro / Vintage", label: "Retro / Vintage" },
      { value: "Visual Storytelling", label: "Visual Storytelling" },
    ],
  },
] as const;

export default designStyleOptions;
