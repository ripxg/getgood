'use client';

import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ShareButton() {
  const [copied, setCopied] = useState(false);
  const { t } = useLanguage();

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch {
      // User cancelled or error
    }
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-5 py-3 bg-[#0a0a0a] text-white text-sm font-medium rounded-xl hover:bg-[#1a1a1a] transition-colors"
    >
      {copied ? (
        <>
          <span className="text-[#CCFF00]">✓</span>
          <span>{t.guidePage.linkCopied}</span>
        </>
      ) : (
        <>
          <span>📤</span>
          <span>{t.guidePage.shareGuide}</span>
        </>
      )}
    </button>
  );
}
