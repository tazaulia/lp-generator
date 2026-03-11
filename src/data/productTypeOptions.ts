const productTypeOptions = [
  {
    group: "Digital Product",
    options: [
      { value: "Ebook / Template", label: "Ebook / Template" },
      { value: "Mini Course / Video", label: "Mini Course / Video" },
      { value: "Toolkit / Resource Pack", label: "Toolkit / Resource Pack" },
      { value: "Membership / Komunitas", label: "Membership / Komunitas" },
      { value: "Bundle / Paket", label: "Bundle / Paket" },
    ],
  },
  {
    group: "Service / Jasa",
    options: [
      { value: "Agency / Freelance", label: "Agency / Freelance" },
      { value: "Konsultasi 1:1", label: "Konsultasi 1:1" },
      { value: "Done-For-You", label: "Done-For-You" },
      { value: "Audit / Review", label: "Audit / Review" },
      { value: "Maintenance / Retainer", label: "Maintenance / Retainer" },
    ],
  },
  {
    group: "Physical / Commerce",
    options: [
      { value: "Skincare / Fashion", label: "Skincare / Fashion" },
      { value: "Food & Beverage", label: "Food & Beverage" },
      { value: "Kesehatan Umum / Wellness", label: "Kesehatan Umum / Wellness" },
      { value: "Home & Living", label: "Home & Living" },
      { value: "Gadget / Aksesoris", label: "Gadget / Aksesoris" },
    ],
  },
  {
    group: "Software",
    options: [
      { value: "SaaS / Software", label: "SaaS / Software" },
      { value: "App / Mobile", label: "App / Mobile" },
      { value: "Plugin / Add-on", label: "Plugin / Add-on" },
    ],
  },
  {
    group: "Education",
    options: [
      { value: "Kursus / Coaching", label: "Kursus / Coaching" },
      { value: "Bootcamp / Program Intensif", label: "Bootcamp / Program Intensif" },
      { value: "Workshop", label: "Workshop" },
    ],
  },
  {
    group: "Event & Social",
    options: [
      { value: "Event / Webinar", label: "Event / Webinar" },
      { value: "Event Offline", label: "Event Offline" },
      { value: "Fundraising / Donasi", label: "Fundraising / Donasi" },
    ],
  },
  {
    group: "Lainnya",
    options: [
      { value: "Lainnya (Isi Manual)", label: "Lainnya (Isi Manual)" },
    ],
  },
] as const;

export default productTypeOptions;
