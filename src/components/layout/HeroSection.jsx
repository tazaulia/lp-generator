export default function HeroSection() {
  return (
    <section className="w-full bg-white border-b border-slate-200 py-10 sm:py-14 text-center">
      <div className="mx-auto max-w-2xl px-4">
        <div className="inline-block px-3 py-1 mb-4 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-medium">
          Landing Page Builder
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
          Buat Landing Page Professional{' '}
          <br className="hidden sm:block" />
          dalam <span className="text-brand-500">Hitungan Menit</span>
        </h1>
        <p className="mt-3 text-slate-500 text-sm sm:text-base max-w-lg mx-auto">
          Generate struktur copywriting yang menjual (High Converting) dan layout
          yang sesuai format.
        </p>
      </div>
    </section>
  );
}
