import { useState, useRef } from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/layout/HeroSection';
import TwoPanelLayout from './components/layout/TwoPanelLayout';
import Footer from './components/layout/Footer';
import FormPanel from './components/form/FormPanel';
import OutputPanel from './components/output/OutputPanel';

function App() {
  const [prompt, setPrompt] = useState('');
  const [, setErrors] = useState<string[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const outputRef = useRef<HTMLDivElement>(null);

  const handleGenerate = (newPrompt: string | null, newErrors: string[]) => {
    setErrors(newErrors);
    if (newPrompt) {
      if (newPrompt !== prompt) {
        setPrompt(newPrompt);
        setIsGenerating(true);
      }
      // On mobile, scroll to output panel
      setTimeout(() => {
        if (window.innerWidth < 1024 && outputRef.current) {
          outputRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    } else {
      setPrompt('');
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-950 flex flex-col">
      <Header />
      <HeroSection />
      <main className="flex-1">
        <TwoPanelLayout
          left={<FormPanel onGenerate={handleGenerate} isGenerating={isGenerating} />}
          right={
            <div ref={outputRef}>
              <OutputPanel prompt={prompt} onComplete={() => setIsGenerating(false)} />
            </div>
          }
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
