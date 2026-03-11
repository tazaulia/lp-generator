import { useRef } from 'react';
import useTypewriter from '../../hooks/useTypewriter';
import { copyToClipboard } from '../../utils/clipboard';

export default function OutputPanel({ prompt }) {
  const { displayedText, isComplete, skip } = useTypewriter(prompt, 8000);
  const containerRef = useRef(null);
  const hasPrompt = prompt && prompt.length > 0;

  const handleCopy = async () => {
    const success = await copyToClipboard(prompt);
    if (success) {
      alert('Prompt berhasil di-copy!');
    }
  };

  const handleCTA = async () => {
    window.open('https://z.ai', '_blank');
    const success = await copyToClipboard(prompt);
    if (!success) {
      alert('Prompt gagal di-copy. Silakan copy manual.');
    }
  };

  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-slate-200">
        <h3 className="text-sm font-semibold text-slate-800">AI Prompt Output</h3>
        {hasPrompt && (
          <button
            onClick={handleCopy}
            className="text-xs font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            Copy
          </button>
        )}
      </div>

      <div
        ref={containerRef}
        className="px-5 py-4 min-h-[300px] max-h-[600px] overflow-y-auto bg-slate-900 text-slate-100"
        onClick={!isComplete ? skip : undefined}
      >
        {hasPrompt ? (
          <pre className="text-xs leading-relaxed whitespace-pre-wrap font-mono">
            {displayedText}
            {!isComplete && <span className="animate-pulse">|</span>}
          </pre>
        ) : (
          <div className="flex items-center justify-center h-full min-h-[260px] text-slate-500 text-sm">
            Isi form di sebelah kiri, lalu klik "Generate Prompt"
          </div>
        )}
      </div>

      {hasPrompt && isComplete && (
        <div className="px-5 py-4 border-t border-slate-200">
          <button
            onClick={handleCTA}
            className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-lg shadow-brand-500/25 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Buat Landing Page Sekarang
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}
