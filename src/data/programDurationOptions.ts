// Only shown when templateType === 'A' (online course / coaching)
const programDurationOptions = [
  { value: "4 Minggu", label: "4 Minggu" },
  { value: "6 Minggu", label: "6 Minggu" },
  { value: "8 Minggu", label: "8 Minggu" },
  { value: "12 Minggu", label: "12 Minggu" },
  { value: "3 Bulan", label: "3 Bulan" },
  { value: "6 Bulan", label: "6 Bulan" },
  { value: "Lainnya (Isi Manual)", label: "Lainnya (Isi Manual)" },
] as const;

export default programDurationOptions;
