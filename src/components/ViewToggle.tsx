'use client';

import { useState } from 'react';

interface ViewToggleProps {
  onViewChange?: (view: 'overview' | 'deeper') => void;
}

export default function ViewToggle({ onViewChange }: ViewToggleProps) {
  const [activeView, setActiveView] = useState<'overview' | 'deeper'>('overview');

  const handleViewChange = (view: 'overview' | 'deeper') => {
    setActiveView(view);
    onViewChange?.(view);
    
    if (view === 'deeper') {
      document.getElementById('go-deeper')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Scroll to top of tips section
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 mt-6">
      <button
        onClick={() => handleViewChange('overview')}
        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
          activeView === 'overview'
            ? 'bg-[#0a0a0a] text-[#FAF8F5]'
            : 'bg-transparent text-[#6B6B6B] border border-[#E5E2DD] hover:border-[#0a0a0a] hover:text-[#0a0a0a]'
        }`}
      >
        Overview
      </button>
      <button
        onClick={() => handleViewChange('deeper')}
        className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-200 ${
          activeView === 'deeper'
            ? 'bg-[#0a0a0a] text-[#FAF8F5]'
            : 'bg-transparent text-[#6B6B6B] border border-[#E5E2DD] hover:border-[#0a0a0a] hover:text-[#0a0a0a]'
        }`}
      >
        Go Deeper
      </button>
    </div>
  );
}
