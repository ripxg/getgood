'use client';

import { GuideStep } from '@/types/guide';

interface StepCardProps {
  step: GuideStep;
  categoryColor?: string;
}

export default function StepCard({ step }: StepCardProps) {
  return (
    <div className="group flex gap-6 py-8 border-b border-[#E5E2DD] last:border-0">
      {/* Step Number */}
      <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#0a0a0a] flex items-center justify-center font-bold text-xl text-[#CCFF00]">
        {String(step.number).padStart(2, '0')}
      </div>
      
      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-lg font-bold text-[#0a0a0a] mb-3 tracking-tight">{step.title}</h3>
        <p className="text-[#6B6B6B] leading-relaxed mb-4">{step.instruction}</p>

        {/* Tip */}
        {step.tip && (
          <div className="flex items-start gap-3 bg-[#CCFF00]/10 border border-[#CCFF00]/30 rounded-xl px-4 py-3">
            <span className="text-lg mt-0.5">💡</span>
            <span className="text-sm text-[#0a0a0a]">{step.tip}</span>
          </div>
        )}

        {/* Media */}
        {step.media && step.media.type === 'youtube' && (
          <div className="mt-5">
            <div className="aspect-video w-full rounded-xl overflow-hidden bg-[#E5E2DD]">
              <iframe
                src={step.media.url}
                title={step.media.caption}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            {step.media.caption && (
              <p className="text-xs text-[#6B6B6B] mt-2 text-center">{step.media.caption}</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
