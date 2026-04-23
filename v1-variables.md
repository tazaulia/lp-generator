# V1 Business Variables

All inputs collected by the V1 form (cuanmania.vercel.app). Organized by the 7 form sections.  
Source: `/Users/taza/.../lp-generator/src/`

---

## Section 1 — Framework & Tone

### `framework` *(required)*
Copywriting structure / psychological framework for the page.

| Group | Options |
|---|---|
| Conversion Focused | AIDCA (Attention–Interest–Desire–Conviction–Action) |
| | PAS (Problem-Agitate-Solution) |
| | BAB (Before-After-Bridge) |
| | 4P (Promise-Picture-Proof-Push) |
| | SLAP (Stop-Look-Act-Purchase) |
| Storytelling & Brand | StoryBrand |
| | ABT (And-But-Therefore) |
| | Hero's Journey |
| | Hook-Story-Offer (HSO) |
| Diagnostic & Educational | QUEST (Qualify–Understand–Educate–Stimulate–Transition) |
| | JTBD (Jobs To Be Done) |
| | Awareness Ladder |
| | FAB (Features-Advantages-Benefits) |
| Advanced / Hybrid | PASTOR (Problem–Amplify–Story–Transformation–Offer–Response) |
| | Problem-Promise-Proof |
| | Useful-Urgent-Unique |
| | The 3 Reasons Why |

### `tone` *(required)*
Writing voice and language style.

| Group | Options |
|---|---|
| Populer & Efektif | Friendly & Conversational |
| | Professional & Formal |
| | Witty & Humorous |
| | Bold & Disruptive |
| Emosional & Story | Empathetic |
| | Storytelling Mode |
| | Inspirational |
| | Exciting & Energetic |
| Authority & Logic | Direct & To The Point |
| | Scientific / Data-Driven |
| | Trustworthy |
| | Urgent / Scarcity |
| Vibe Khusus | Luxury & Exclusive |
| | Minimalist & Zen |

---

## Section 2 — Produk & Tujuan

### `productType` *(required)*
What category of product/service is being sold.  
If `"Lainnya (Isi Manual)"` is selected, `productTypeCustom` (free text) is shown.

| Group | Options |
|---|---|
| Digital Product | Ebook / Template |
| | Mini Course / Video |
| | Toolkit / Resource Pack |
| | Membership / Komunitas |
| | Bundle / Paket |
| Service / Jasa | Agency / Freelance |
| | Konsultasi 1:1 |
| | Done-For-You |
| | Audit / Review |
| | Maintenance / Retainer |
| Physical / Commerce | Skincare / Fashion |
| | Food & Beverage |
| | Kesehatan Umum / Wellness |
| | Home & Living |
| | Gadget / Aksesoris |
| Software | SaaS / Software |
| | App / Mobile |
| | Plugin / Add-on |
| Education | Kursus / Coaching |
| | Bootcamp / Program Intensif |
| | Workshop |
| Event & Social | Event / Webinar |
| | Event Offline |
| | Fundraising / Donasi |
| Lainnya | Lainnya (Isi Manual) → shows `productTypeCustom` text input |

### `goal` *(required)*
Primary conversion goal of the landing page.

| Group | Options |
|---|---|
| Acquire | Lead Generation (WA/Email) |
| | Download (Lead Magnet) |
| | Registrasi (Event/WL) |
| Convert | Sales / Beli Langsung |
| | Checkout (Keranjang) |
| | Pre-Order |
| | Flash Sale |
| Try | Trial / Demo |
| | Sample / Preview |
| | Free Consultation |
| Contact | Chat (WA / DM) |
| | Booking (Jadwal) |
| | Konsultasi |

---

## Section 3 — Target Market

### `awarenessLevel` *(required)*
How aware the audience is of their problem/the product.

- Unaware (Belum sadar masalah)
- Problem Aware (Tahu masalah)
- Solution Aware (Cari solusi)
- Product Aware (Tahu produk Anda)
- Most Aware (Siap beli)

### `targetAudience` *(required)*
Who the page is written for.  
If `"Lainnya (Isi Manual)"` is selected, `targetAudienceCustom` (free text) is shown.

| Group | Options |
|---|---|
| Marketing & Ads | Advertiser |
| | Performance Marketer |
| Business | Business Owner (UMKM) |
| | Founder Startup |
| | Owner Toko Offline |
| Commerce | Seller Marketplace |
| | Reseller / Dropshipper |
| Creator Economy | Content Creator / Affiliate |
| | Influencer (Nano/Micro) |
| | Coach / Mentor / Trainer |
| Demographics Specific | Ibu Rumah Tangga / Moms |
| | Pelajar / Mahasiswa |
| | Fresh Graduate |
| Other | Umum (General Audience) |
| | Lainnya (Isi Manual) → shows `targetAudienceCustom` text input |

### `painPoints` *(optional)*
3 main fears/problems of the audience, free text.  
Placeholder: "Cth: Takut boncos iklan, Gaptek, Tidak punya waktu..."  
Fallback if empty: `"Tidak dispesifikan, harap riset mandiri."`

---

## Section 4 — Detail Produk & Copy

### `productName` *(required)*
Product name. Free text.  
Placeholder: "Cth: Masterclass Copywriting"

### `normalPrice` *(optional)*
Original / crossed-out price. Free text.  
Placeholder: "Rp 999.000"  
Fallback if empty: `"Tidak disebutkan"`

### `promoPrice` *(optional)*
Promotional / final price. Free text.  
Placeholder: "Rp 499.000"  
Fallback if empty: `"Tidak ada promo"`

### `description` *(required)*
Key benefits and product description. Free text (textarea).  
Placeholder: "Tulis poin-poin utama keunggulan produk secara singkat..."

### `objections` *(optional)*
Main buyer objections / reasons for hesitation. Free text.  
Placeholder: "Cth: Mahal, Takut tidak ngefek, Ribet..."  
Fallback if empty: `"Umum (Harga/Kualitas). (Gunakan ini untuk section FAQ atau Reassurance)."`

### `hasBonus` *(optional)*
Boolean checkbox. If true, shows `bonusDetails` textarea.

### `bonusDetails` *(optional, conditional on `hasBonus`)*
Description of bonus items and their values. Free text (textarea).  
Placeholder: "Sebutkan bonus & nilainya (Cth: Ebook senilai 100rb, Template senilai 50rb...)"  
Fallback if empty/unchecked: `"Tidak ada bonus tambahan. (Jika ada, buatkan tabel/list 'Total Value' vs 'Harga Hari Ini')."`

### `cta` *(required)*
Primary call-to-action button text.  
If `"Isi Manual"`, shows `ctaCustom` text input.

- Beli Sekarang
- Daftar Sekarang
- Gabung Sekarang
- Konsultasi Gratis
- Download Sekarang
- Amankan Slot
- Mulai Sekarang
- Isi Manual → shows `ctaCustom` text input

### `scarcityType` *(required)*
Type of urgency/scarcity element on the page.

- Tidak Ada
- Real Timer (Countdown) — prompt adds: placeholder JS countdown script
- Quantity Left (Sisa Slot/Stok) — prompt adds: "Sisa Slot: X" text
- Harga Naik Segera

---

## Section 5 — Elemen Tambahan

### `additionalElements` *(optional, multi-select)*
Additional page sections to include beyond the standard framework structure.  
Fallback if none selected: standard framework section order.

- Social Proof
- Testimonial
- FAQ
- Bonus
- Guarantee
- Scarcity
- Comparison
- Pricing Table
- Timeline
- Team

---

## Section 6 — Identitas Visual & Desain

### `brandColor` *(required)*
Dominant brand color. If `"Lainnya / Custom (Ketik Hex/Nama)"`, shows `brandColorCustom` text input.

| Group | Options |
|---|---|
| Netral / Monokrom | Neutral / Monokrom |
| | Slate / Zinc |
| Oranye & Merah | Brand Orange |
| | Red |
| | Rose / Pink |
| | Amber / Gold |
| Biru & Ungu | Ocean Blue |
| | Sky Blue |
| | Indigo |
| | Violet / Purple |
| | Royal Purple |
| Hijau & Cyan | Emerald Green |
| | Teal / Cyan |
| | Lime Green |
| | Forest Green |
| Kuning & Coklat | Yellow |
| | Brown / Earthy |
| Custom | Lainnya / Custom (Ketik Hex/Nama) → shows `brandColorCustom` text input |

### `backgroundTheme` *(required)*
Light/dark mode preference.

- Default (Ikuti Gaya Desain)
- Force Light Mode (Terang) — forces light backgrounds + dark text throughout
- Force Dark Mode (Gelap) — forces dark backgrounds + light text throughout

### `designStyle` *(required)*
Visual design reference/archetype.

| Group | Options |
|---|---|
| Archetype Brand | Apple Style |
| | Stripe / Linear Style |
| | Airbnb Style |
| | Notion Style |
| | Nike / Adidas Style |
| | Tesla Style |
| Popular | Clean & Minimalist |
| | Modern SaaS |
| | Bold & High Conversion |
| | Elegant & Premium |
| | Trust & Authority |
| | Dark Mode Style |
| Tech & Future | Futuristic Cyberpunk |
| | AI / SaaS Modern |
| | Holographic & Glass |
| | Abstract Gradient |
| Trending | Bento Grid / Modular |
| | Neobrutalism |
| | Glassmorphism |
| Industry Specific | Medical / Health |
| | Real Estate |
| | Wedding / Event |
| | Finance / Bank |
| | Gamer / Neon |
| | Organic & Natural |
| | Corporate |
| Mood & Vibe | Playful & Fun |
| | Typography-Driven |
| | Retro / Vintage |
| | Visual Storytelling |

### `heroType` *(required)*
Layout of the hero section.

- Standard (Image Samping/Belakang) — image + copy layout
- Video Sales Letter (VSL) — video embed as main focus, headline above, CTA below
- Typographic Only (Teks Besar) — large type, no image

### `stickyButton` *(optional)*
Boolean checkbox. If true: adds a sticky bottom CTA button visible on mobile only.

---

## Section 7 — Platform Target

### `platform` *(required)*
Deployment platform the generated HTML is intended for.

- Scalev
- Lynk.id
- WordPress
- Shopify

---

## Summary: required vs optional

| Field | Required |
|---|---|
| `framework` | ✓ |
| `tone` | ✓ |
| `productType` | ✓ |
| `goal` | ✓ |
| `awarenessLevel` | ✓ |
| `targetAudience` | ✓ |
| `productName` | ✓ |
| `description` | ✓ |
| `cta` | ✓ |
| `scarcityType` | ✓ |
| `brandColor` | ✓ |
| `backgroundTheme` | ✓ |
| `designStyle` | ✓ |
| `heroType` | ✓ |
| `platform` | ✓ |
| `painPoints` | optional |
| `normalPrice` | optional |
| `promoPrice` | optional |
| `objections` | optional |
| `hasBonus` | optional |
| `bonusDetails` | conditional on `hasBonus` |
| `additionalElements` | optional (multi) |
| `stickyButton` | optional |

---

## What V2 uses vs what V1 had

V2 templates currently cover a subset of these. Variables shared with V2:
- `productName`, `normalPrice`, `promoPrice` → pricing variables
- `tone` → brand tone
- `targetAudience` / `painPoints` → audience profiling
- `brandColor` → accent color
- `cta` → CTA text
- `scarcityType` → countdown timer

Variables in V1 that V2 templates do not currently have fields for:
- `framework` — V2 hardcodes PAS structure, doesn't expose this as a choice
- `awarenessLevel` — V2 doesn't adjust copy by awareness stage
- `goal` — V2 always targets direct sale; other goals (lead gen, consultation) not templated
- `designStyle` — V2 hardcodes Apple-inspired aesthetic, doesn't expose as a choice
- `heroType` — V2 always uses standard image hero
- `backgroundTheme` — V2 hardcodes alternating light/dark sections
- `additionalElements` — V2 has fixed 10-section structure
- `platform` — V2 generates generic HTML, not platform-specific
- `stickyButton` — not in V2 templates yet
