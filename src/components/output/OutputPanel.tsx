import { useRef, useEffect } from 'react';
import useTypewriter from '../../hooks/useTypewriter';
import { copyToClipboard } from '../../utils/clipboard';

function BlinkingDots() {
  return <span className="animate-[blink_1s_step-end_infinite]">...</span>;
}

interface OutputPanelProps {
  prompt: string;
  onComplete?: () => void;
}

export default function OutputPanel({ prompt, onComplete }: OutputPanelProps) {
  const { displayedText, isComplete, skip } = useTypewriter(prompt, 8000);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasPrompt = prompt && prompt.length > 0;
  const animationStartedRef = useRef(false);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [displayedText]);

  useEffect(() => {
    if (!isComplete) {
      animationStartedRef.current = true;
    } else if (animationStartedRef.current) {
      animationStartedRef.current = false;
      onComplete?.();
    }
  }, [isComplete, onComplete]);

  const handleCopy = async () => {
    const success = await copyToClipboard(prompt);
    if (success) {
      alert('Prompt berhasil di-copy!');
    }
  };

  const handleCTA = () => {
    const url = `https://chat.z.ai/?q=${encodeURIComponent(prompt)}`;
    window.open(url, '_blank');
  };

  return (
    <div>
      <div className="rounded-2xl border border-slate-200 dark:border-dark-700 bg-white dark:bg-dark-800 shadow-sm overflow-hidden">
        <div className="flex items-center justify-between px-5 py-5 border-b border-slate-200 dark:border-dark-700">
          <h2 className="text-xl font-bold text-slate-800 dark:text-slate-100">Result: AI Prompt Output</h2>
          {hasPrompt && (
            <button
              onClick={handleCopy}
              className="text-xs font-medium text-brand-600 hover:text-brand-700 flex items-center gap-1 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Salin Prompt
            </button>
          )}
        </div>

        <div
          ref={containerRef}
          className="px-5 py-4 h-[400px] overflow-y-auto bg-slate-100 text-slate-800 dark:bg-dark-900 dark:text-slate-100"
          onClick={!isComplete ? skip : undefined}
        >
          {hasPrompt ? (
            <pre className="text-xs leading-relaxed whitespace-pre-wrap font-mono">
              {displayedText}
              {!isComplete && <span className="animate-pulse">|</span>}
            </pre>
          ) : (
            <pre className="text-xs leading-relaxed whitespace-pre-wrap font-mono text-slate-400 dark:text-slate-500">
              Isi form di sebelah kiri, lalu klik &quot;Generate Prompt&quot;<BlinkingDots />
            </pre>
          )}
        </div>

        <div className={`px-5 py-4 border-t border-slate-200 dark:border-dark-700 transition-opacity duration-300 ${
          hasPrompt && isComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
          <button
            onClick={handleCTA}
            tabIndex={hasPrompt && isComplete ? 0 : -1}
            className="w-full bg-brand-500 hover:bg-brand-600 text-white font-bold py-3.5 px-6 rounded-xl text-sm shadow-lg shadow-brand-500/25 transition-all duration-200 flex items-center justify-center gap-2"
          >
            Buat Landing Page Sekarang
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
