'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LANGUAGES } from '@/lib/translations';

export default function LanguageSelector() {
  const { language, setLanguage, isHydrated } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const currentLang = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  // Close on click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape key
  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    }
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Don't render content until hydrated to prevent flash
  if (!isHydrated) {
    return (
      <div className="w-24 h-8 bg-[#FAF8F5] rounded-lg animate-pulse" />
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsOpen(!isOpen);
          }
          if (e.key === 'ArrowDown' && !isOpen) {
            e.preventDefault();
            setIsOpen(true);
          }
        }}
        className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium text-[#6B6B6B] hover:text-[#0a0a0a] transition-colors rounded-lg hover:bg-[#E5E2DD]/50"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label="Select language"
      >
        <span className="text-base">{currentLang.flag}</span>
        <span className="hidden sm:inline">{currentLang.name}</span>
        <svg
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          role="listbox"
          aria-label="Language options"
          className="absolute right-0 top-full mt-2 w-48 bg-white rounded-xl border border-[#E5E2DD] shadow-lg overflow-hidden z-50"
        >
          {LANGUAGES.map((lang, index) => (
            <button
              key={lang.code}
              role="option"
              aria-selected={language === lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setLanguage(lang.code);
                  setIsOpen(false);
                }
                if (e.key === 'ArrowDown') {
                  e.preventDefault();
                  const next = containerRef.current?.querySelector(
                    `[data-index="${index + 1}"]`
                  ) as HTMLElement;
                  next?.focus();
                }
                if (e.key === 'ArrowUp') {
                  e.preventDefault();
                  const prev = containerRef.current?.querySelector(
                    `[data-index="${index - 1}"]`
                  ) as HTMLElement;
                  prev?.focus();
                }
              }}
              data-index={index}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left hover:bg-[#FAF8F5] transition-colors ${
                language === lang.code ? 'bg-[#FAF8F5] font-medium text-[#0a0a0a]' : 'text-[#6B6B6B]'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
              {language === lang.code && (
                <span className="ml-auto text-[#CCFF00]">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
