import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getAllGuides, getGuideBySlug, getGuidesByCategory, getCategoryBySlug } from '@/lib/guides';
import StepCard from '@/components/StepCard';
import ShareButton from '@/components/ShareButton';
import GuideCard from '@/components/GuideCard';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const guides = getAllGuides();
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};
  return {
    title: `${guide.title} | GetGood`,
    description: guide.description,
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const cat = getCategoryBySlug(guide.categorySlug);
  const related = getGuidesByCategory(guide.categorySlug)
    .filter((g) => g.slug !== guide.slug)
    .slice(0, 3);

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: guide.title,
    description: guide.description,
    totalTime: `PT${guide.timeToAchieve.replace(' day', 'D').replace(' hour', 'H')}`,
    step: guide.steps.map((s) => ({
      '@type': 'HowToStep',
      name: s.title,
      text: s.instruction,
      position: s.number,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#6B6B6B] mb-8">
          <Link href="/" className="hover:text-[#0a0a0a] transition-colors">Home</Link>
          <span className="text-[#E5E2DD]">/</span>
          <Link href={`/category/${guide.categorySlug}`} className="hover:text-[#0a0a0a] transition-colors">{guide.category}</Link>
          <span className="text-[#E5E2DD]">/</span>
          <span className="text-[#0a0a0a] font-medium truncate">{guide.title}</span>
        </nav>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-wide uppercase px-4 py-2 rounded-full bg-[#0a0a0a] text-[#CCFF00]">
              {cat?.emoji} {guide.category}
            </span>
            <span className="text-sm text-[#6B6B6B]">10 steps</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] mb-5 leading-tight tracking-tight">
            {guide.title}
          </h1>
          
          <p className="text-xl text-[#6B6B6B] mb-8 leading-relaxed max-w-2xl">
            {guide.description}
          </p>

          {/* Stats bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex items-center gap-6 bg-white border border-[#E5E2DD] rounded-2xl px-6 py-4">
              <div className="text-center">
                <div className="text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-1">Notice in</div>
                <div className="text-base font-bold text-[#0a0a0a]">{guide.timeToNotice}</div>
              </div>
              <div className="w-px h-10 bg-[#E5E2DD]" />
              <div className="text-center">
                <div className="text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-1">Achieve in</div>
                <div className="text-base font-bold text-[#0a0a0a]">{guide.timeToAchieve}</div>
              </div>
              <div className="w-px h-10 bg-[#E5E2DD]" />
              <div className="text-center">
                <div className="text-xs font-medium text-[#6B6B6B] uppercase tracking-wide mb-1">Steps</div>
                <div className="text-base font-bold text-[#0a0a0a]">{guide.steps.length}</div>
              </div>
            </div>
            <ShareButton />
          </div>
        </header>

        {/* Steps */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <h2 className="text-2xl font-bold text-[#0a0a0a] tracking-tight">The 10 Steps</h2>
            <div className="flex-1 h-px bg-[#E5E2DD]"></div>
          </div>
          
          <div className="bg-white rounded-3xl border border-[#E5E2DD] p-6 md:p-8">
            {guide.steps.map((step) => (
              <StepCard key={step.number} step={step} />
            ))}
          </div>
        </section>

        {/* Sources */}
        {guide.sources.length > 0 && (
          <section className="mb-16">
            <h3 className="text-sm font-bold text-[#6B6B6B] uppercase tracking-widest mb-4">Sources & References</h3>
            <div className="bg-white rounded-2xl border border-[#E5E2DD] p-6">
              <ul className="space-y-2">
                {guide.sources.map((src) => (
                  <li key={src}>
                    <a 
                      href={src} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-sm text-[#6B6B6B] hover:text-[#0a0a0a] transition-colors break-all flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#CCFF00] shrink-0"></span>
                      {src}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Related Guides */}
        {related.length > 0 && (
          <section>
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-[#0a0a0a] tracking-tight">More in {guide.category}</h2>
              <Link 
                href={`/category/${guide.categorySlug}`}
                className="text-sm font-medium text-[#6B6B6B] hover:text-[#0a0a0a] transition-colors flex items-center gap-2"
              >
                View all
                <span>→</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </section>
        )}
      </main>
    </>
  );
}
