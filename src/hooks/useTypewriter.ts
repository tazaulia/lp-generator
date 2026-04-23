import { useState, useEffect, useRef, useCallback } from 'react';

interface UseTypewriterResult {
  displayedText: string;
  isComplete: boolean;
  skip: () => void;
}

/**
 * Progressively reveals text over `duration` ms using requestAnimationFrame.
 * Updates DOM state in batches (~50 ms worth of characters) to avoid thrashing.
 */
export default function useTypewriter(text: string, duration: number = 8000): UseTypewriterResult {
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isComplete, setIsComplete] = useState<boolean>(true);

  const rafId = useRef<number | null>(null);
  const charIndex = useRef<number>(0);
  const lastFlush = useRef<number>(0);
  const skippedRef = useRef<boolean>(false);

  const cancel = useCallback((): void => {
    if (rafId.current !== null) {
      cancelAnimationFrame(rafId.current);
      rafId.current = null;
    }
  }, []);

  const skip = useCallback((): void => {
    cancel();
    skippedRef.current = true;
    setDisplayedText(text || '');
    setIsComplete(true);
  }, [text, cancel]);

  useEffect(() => {
    // Reset on text change
    cancel();
    skippedRef.current = false;

    if (!text) {
      setDisplayedText('');
      setIsComplete(true);
      return;
    }

    const len = text.length;
    const msPerChar = duration / len;
    // How many chars correspond to ~50 ms
    const batchSize = Math.max(1, Math.floor(50 / msPerChar));

    charIndex.current = 0;
    lastFlush.current = 0;
    setDisplayedText('');
    setIsComplete(false);

    let startTime: number | null = null;

    function tick(timestamp: number): void {
      if (skippedRef.current) return;

      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;

      // Determine how many chars should be visible by now
      const target = Math.min(len, Math.floor(elapsed / msPerChar));

      if (target >= len) {
        // Done
        setDisplayedText(text);
        setIsComplete(true);
        rafId.current = null;
        return;
      }

      // Only flush to React state every batchSize chars
      if (target - lastFlush.current >= batchSize) {
        charIndex.current = target;
        lastFlush.current = target;
        setDisplayedText(text.slice(0, target));
      }

      rafId.current = requestAnimationFrame(tick);
    }

    rafId.current = requestAnimationFrame(tick);

    return cancel;
  }, [text, duration, cancel]);

  return { displayedText, isComplete, skip };
}
