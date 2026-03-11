import fallbacks from '../utils/fallbacks';

function resolveCustom(value, customValue, sentinel) {
  if (value === sentinel && customValue) return customValue;
  return value;
}

function deriveThemeText(theme) {
  switch (theme) {
    case 'Force Light Mode (Terang)':
      return 'Wajib menggunakan latar belakang Light Mode (Terang) di seluruh bagian. Gunakan warna teks gelap (hitam/abu-abu) untuk keterbacaan yang maksimal.';
    case 'Force Dark Mode (Gelap)':
      return 'Wajib menggunakan latar belakang Dark Mode (Gelap) di seluruh bagian. Gunakan warna teks terang (putih/abu-abu terang) untuk keterbacaan yang maksimal.';
    default:
      return 'Gunakan tema visual default yang sesuai dengan gaya desain yang dipilih.';
  }
}

function deriveHeroText(heroType) {
  switch (heroType) {
    case 'Video Sales Letter (VSL)':
      return 'Video Sales Letter (VSL). HERO SECTION: Gunakan layout VSL. Video embed (placeholder YT/Vimeo) harus menjadi fokus utama, dengan Headline besar di atasnya dan tombol CTA di bawahnya. JANGAN gunakan gambar samping.';
    case 'Typographic Only (Teks Besar)':
    case 'Typographic Driven':
      return 'Typographic Only (Teks Besar). HERO SECTION: Gunakan layout Hero berbasis tipografi besar tanpa gambar.';
    default:
      return 'Standard Image. HERO SECTION: Gunakan layout Hero standar (Gambar/Ilustrasi + Copy).';
  }
}

function deriveScarcityLogic(scarcityType) {
  if (scarcityType === 'Tidak Ada') {
    return 'Gunakan tipe kelangkaan "None".';
  }
  let extra = '';
  if (scarcityType === 'Real Timer (Countdown)') {
    extra = ' Jika Real Timer, buatkan placeholder script JS countdown sederhana.';
  } else if (scarcityType === 'Quantity Left (Sisa Slot/Stok)') {
    extra = ' Jika Quantity, tuliskan teks "Sisa Slot: X".';
  }
  return `Gunakan tipe kelangkaan "${scarcityType}".${extra}`;
}

export function processFormData(state) {
  const productType = resolveCustom(state.productType, state.productTypeCustom, 'Lainnya (Isi Manual)');
  const targetAudience = resolveCustom(state.targetAudience, state.targetAudienceCustom, 'Lainnya (Isi Manual)');
  const brandColor = resolveCustom(state.brandColor, state.brandColorCustom, 'Lainnya / Custom (Ketik Hex/Nama)');
  const cta = resolveCustom(state.cta, state.ctaCustom, 'Isi Manual');
  const painPoints = state.painPoints || fallbacks.painPoints;
  const normalPrice = state.normalPrice || fallbacks.normalPrice;
  const promoPrice = state.promoPrice || fallbacks.promoPrice;
  const objections = state.objections
    ? `${state.objections} (Gunakan ini untuk section FAQ atau Reassurance).`
    : fallbacks.objections;
  const bonus = state.hasBonus && state.bonusDetails
    ? `${state.bonusDetails} (Jika ada, buatkan tabel/list "Total Value" vs "Harga Hari Ini").`
    : fallbacks.bonus;
  const additionalSectionsText = state.additionalElements.length === 0
    ? `ADDITIONAL SECTIONS: ${fallbacks.additionalSections}`
    : `ADDITIONAL SECTIONS: Wajib masukkan section tambahan berikut: ${state.additionalElements.join(', ')}.`;
  const stickyLogic = state.stickyButton ? fallbacks.stickyOn : fallbacks.stickyOff;

  return {
    framework: state.framework,
    tone: state.tone,
    productType,
    goal: state.goal,
    awarenessLevel: state.awarenessLevel,
    targetAudience,
    painPoints,
    productName: state.productName,
    normalPrice,
    promoPrice,
    description: state.description,
    objections,
    bonus,
    cta,
    scarcityType: state.scarcityType,
    brandColor,
    backgroundTheme: state.backgroundTheme,
    designStyle: state.designStyle,
    heroType: state.heroType,
    platform: state.platform,
    additionalSectionsText,
    stickyLogic,
    themeText: deriveThemeText(state.backgroundTheme),
    heroTypeText: deriveHeroText(state.heroType),
    scarcityLogic: deriveScarcityLogic(state.scarcityType),
  };
}

export function generatePrompt(d) {
  return `ANDA ADALAH: Senior Conversion Copywriter + UI/UX minded marketer yang sudah menciptakan ratusan landing page yang mengkonversi untuk penjualan di social media.

TUGAS ANDA: Menulis Copywriting Landing Page (Sales Page) dengan struktur HTML yang rapi, persuasif, dan aman untuk kebijakan iklan (Meta/Google Ads Compliance).

ATURAN PENULISAN & LAYOUT (WAJIB DIPATUHI):
1. LAYOUT & GRID SYSTEM:
STRUKTUR: FULL-WIDTH MOBILE-FIRST (Mutlak).
- Container Utama: Gunakan class 'w-full' (Width 100%). JANGAN gunakan 'container' atau 'max-w-md'.
- Padding: Gunakan padding internal section (py-10 px-4), tapi container luar harus menempel ke tepi layar (edge-to-edge).
- Grid: DILARANG menggunakan grid multi-kolom (>1 kolom).
- Behavior: Semua elemen disusun vertikal (atas ke bawah).
- Alasan: Agar saat di-embed di platform ini tidak ada celah/garis vertikal di kiri-kanan (full screen experience).
2. GLOBAL STYLE: Wajib set 'body { overflow-x: hidden; }' untuk mencegah scroll horizontal pada tampilan mobile. Pastikan wrapper/container utama tidak melebihi lebar layar (100vw).
3. FOOTER: DILARANG membuat section footer standar (Links/Menu/Sitemap) karena ini adalah Landing Page yang fokus penjualan. Cukup akhiri dengan Copyright notice kecil di bagian paling bawah atau padding kosong.
4. TEMA VISUAL: ${d.themeText}
5. HERO TYPE: ${d.heroTypeText}
6. STICKY CTA MOBILE: ${d.stickyLogic}
7. BUTTON STYLING: Teks tombol WAJIB KONSISTEN (Jangan berubah warna saat hover/klik). DILARANG menggunakan underline pada teks tombol. Gunakan '!important' pada properti warna teks dan text-decoration untuk memaksa style ini.
8. SCARCITY LOGIC: ${d.scarcityLogic}
9. Skimming-friendly: Gunakan heading yang jelas dan bullet points.
10. Anti Overclaim: Jangan gunakan kata "pasti", "jamin", "100%", atau klaim medis/finansial yang tidak realistis agar aman dari banned iklan.
11. Penyesuaian Awareness: Tulis copywriting dengan level awareness "${d.awarenessLevel}".
12. Tone: Gunakan gaya bahasa "${d.tone}".
13. GAMBAR & ICON: Gunakan placeholder dari 'https://placehold.co/600x400' untuk gambar, dan SVG inline (Lucide/Heroicons) untuk icon.

PROFIL PRODUK & MARKET:
- Nama Produk: ${d.productName}
- Deskripsi & Benefit Utama: ${d.description}
- Kategori: ${d.productType}
- Target Market: ${d.targetAudience}
- Tujuan Utama: ${d.goal}
- Framework Utama: ${d.framework}

PSIKOLOGI AUDIENS (INPUT PENTING):
- Pain Points (Ketakutan Utama): ${d.painPoints}
- Objection Handling (Alasan Ragu): ${d.objections}

PENAWARAN (OFFER STACK):
- Harga Normal: ${d.normalPrice}
- Harga Promo: ${d.promoPrice}
- Bonus / Value Stack: ${d.bonus}
- CTA Utama: "${d.cta}"

STRUKTUR HALAMAN (PLATFORM: ${d.platform}):
1. HERO SECTION: Hook maut yang relevan dengan ${d.painPoints}.
2. BODY CONTENT: Mengikuti alur framework ${d.framework}.
3. OBJECTION HANDLING BLOCK: Jawab keraguan "${d.objections}" secara elegan.
4. ${d.additionalSectionsText}
5. TRUST ELEMENTS: Masukkan Social Proof dan Reassurance.
6. CONVERSION BLOCK: Kontras harga, bonus stack, dan urgensi (${d.scarcityType}).
7. HIDDEN CTA: Pastikan ada micro-copy trust di bawah tombol.

OUTPUT: Generate kode HTML utuh (single file) dengan Tailwind CSS, visual premium sesuai gaya "${d.designStyle}" dengan nuansa warna dominan "${d.brandColor}", dan copywriting yang sangat persuasif namun aman secara regulasi.`;
}
