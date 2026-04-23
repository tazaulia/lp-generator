import { ReactNode } from 'react';

interface TwoPanelLayoutProps {
  left: ReactNode;
  right: ReactNode;
}

export default function TwoPanelLayout({ left, right }: TwoPanelLayoutProps) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-8 lg:py-10">
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-[55%]">{left}</div>
        <div className="w-full lg:w-[45%]">
          <div className="lg:sticky lg:top-6">{right}</div>
        </div>
      </div>
    </div>
  );
}
