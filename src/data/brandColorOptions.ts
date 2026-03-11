const brandColorOptions = [
  {
    group: "Netral / Monokrom",
    options: [
      { value: "Neutral / Monokrom", label: "Neutral / Monokrom" },
      { value: "Slate / Zinc", label: "Slate / Zinc" },
    ],
  },
  {
    group: "Oranye & Merah",
    options: [
      { value: "Brand Orange", label: "Brand Orange" },
      { value: "Red", label: "Red" },
      { value: "Rose / Pink", label: "Rose / Pink" },
      { value: "Amber / Gold", label: "Amber / Gold" },
    ],
  },
  {
    group: "Biru & Ungu",
    options: [
      { value: "Ocean Blue", label: "Ocean Blue" },
      { value: "Sky Blue", label: "Sky Blue" },
      { value: "Indigo", label: "Indigo" },
      { value: "Violet / Purple", label: "Violet / Purple" },
      { value: "Royal Purple", label: "Royal Purple" },
    ],
  },
  {
    group: "Hijau & Cyan",
    options: [
      { value: "Emerald Green", label: "Emerald Green" },
      { value: "Teal / Cyan", label: "Teal / Cyan" },
      { value: "Lime Green", label: "Lime Green" },
      { value: "Forest Green", label: "Forest Green" },
    ],
  },
  {
    group: "Kuning & Coklat",
    options: [
      { value: "Yellow", label: "Yellow" },
      { value: "Brown / Earthy", label: "Brown / Earthy" },
    ],
  },
  {
    group: "Custom",
    options: [
      { value: "Lainnya / Custom (Ketik Hex/Nama)", label: "Lainnya / Custom (Ketik Hex/Nama)" },
    ],
  },
] as const;

export default brandColorOptions;
