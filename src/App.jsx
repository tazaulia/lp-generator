import { useState, useRef } from 'react';
import Header from './components/layout/Header';
import HeroSection from './components/layout/HeroSection';
import TwoPanelLayout from './components/layout/TwoPanelLayout';
import Footer from './components/layout/Footer';
import FormPanel from './components/form/FormPanel';
import OutputPanel from './components/output/OutputPanel';

function App() {
  const [prompt, setPrompt] = useState('');
  const [, setErrors] = useState([]);
  const outputRef = useRef(null);

  const handleGenerate = (newPrompt, newErrors) => {
    setErrors(newErrors);
    if (newPrompt) {
      setPrompt(newPrompt);
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
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Header />
      <HeroSection />
      <main className="flex-1">
        <TwoPanelLayout
          left={<FormPanel onGenerate={handleGenerate} />}
          right={
            <div ref={outputRef}>
              <OutputPanel prompt={prompt} />
            </div>
          }
        />
      </main>
      <Footer />
    </div>
  );
}

export default App;
