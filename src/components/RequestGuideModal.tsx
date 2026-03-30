'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface RequestGuideModalProps {
  query: string;
  onClose: () => void;
  isOpen: boolean;
}

export default function RequestGuideModal({ query, onClose, isOpen }: RequestGuideModalProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [submittedEmail, setSubmittedEmail] = useState('');
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClose = useCallback(() => {
    setEmail('');
    setStatus('idle');
    setSubmittedEmail('');
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleClose]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || status === 'loading') return;

    setStatus('loading');
    try {
      const res = await fetch('/api/request-guide', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query, email }),
      });

      if (res.ok) {
        setSubmittedEmail(email);
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="relative w-full max-w-md bg-[#FAF8F5] rounded-2xl shadow-2xl p-8"
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-[#6B6B6B] hover:text-[#0a0a0a] hover:bg-[#E5E2DD] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4L4 12M4 4L12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {status === 'success' ? (
          <div className="text-center py-4">
            <div className="text-4xl mb-4">✓</div>
            <h2 className="text-xl font-semibold text-[#0a0a0a] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
              You&apos;re on the list!
            </h2>
            <p className="text-[#6B6B6B] text-sm">
              We&apos;ll email you at <strong className="text-[#0a0a0a]">{submittedEmail}</strong> when your guide is ready.
            </p>
          </div>
        ) : (
          <>
            <h2 
              id="modal-title"
              className="text-xl font-semibold text-[#0a0a0a] mb-3"
              style={{ fontFamily: 'Space Grotesk, sans-serif' }}
            >
              We&apos;re building this guide
            </h2>
            <p className="text-[#6B6B6B] text-sm mb-6">
              There&apos;s no GetGood guide for <strong className="text-[#0a0a0a]">&ldquo;{query}&rdquo;</strong> yet — but we&apos;ll build one. Enter your email and we&apos;ll send it to you when it&apos;s ready.
            </p>

            <form onSubmit={handleSubmit}>
              <input
                ref={inputRef}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                required
                className="w-full px-5 py-3.5 text-base font-medium rounded-xl border-2 border-[#E5E2DD] bg-white text-[#0a0a0a] placeholder:text-[#6B6B6B] focus:outline-none focus:border-[#0a0a0a] transition-colors mb-4"
                aria-label="Email address"
              />

              {status === 'error' && (
                <p className="text-red-600 text-sm mb-4">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-3.5 px-6 bg-[#0a0a0a] text-white font-semibold rounded-xl hover:bg-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#CCFF00] focus:ring-offset-2 focus:ring-offset-[#FAF8F5] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ fontFamily: 'Space Grotesk, sans-serif' }}
              >
                {status === 'loading' ? 'Submitting...' : 'Notify me'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
