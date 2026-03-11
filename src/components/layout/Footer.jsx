export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 dark:border-dark-700 bg-white dark:bg-dark-900 py-6 text-center">
      <p className="text-xs text-slate-400">
        &copy; {new Date().getFullYear()} CuanMania. All rights reserved.
      </p>
    </footer>
  );
}
