const goalOptions = [
  {
    group: "Acquire",
    options: [
      { value: "Lead Generation (WA/Email)", label: "Lead Generation (WA/Email)" },
      { value: "Download (Lead Magnet)", label: "Download (Lead Magnet)" },
      { value: "Registrasi (Event/WL)", label: "Registrasi (Event/WL)" },
    ],
  },
  {
    group: "Convert",
    options: [
      { value: "Sales / Beli Langsung", label: "Sales / Beli Langsung" },
      { value: "Checkout (Keranjang)", label: "Checkout (Keranjang)" },
      { value: "Pre-Order", label: "Pre-Order" },
      { value: "Flash Sale", label: "Flash Sale" },
    ],
  },
  {
    group: "Try",
    options: [
      { value: "Trial / Demo", label: "Trial / Demo" },
      { value: "Sample / Preview", label: "Sample / Preview" },
      { value: "Free Consultation", label: "Free Consultation" },
    ],
  },
  {
    group: "Contact",
    options: [
      { value: "Chat (WA / DM)", label: "Chat (WA / DM)" },
      { value: "Booking (Jadwal)", label: "Booking (Jadwal)" },
      { value: "Konsultasi", label: "Konsultasi" },
    ],
  },
] as const;

export default goalOptions;
