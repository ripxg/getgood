import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getCategories, getCategoryBySlug, getGuidesByCategory, getCategoryTips } from '@/lib/guides';
import GuideCard from '@/components/GuideCard';
import ViewToggle from '@/components/ViewToggle';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  const tips = getCategoryTips(slug);
  
  if (!cat) return {};
  
  // Use category tips metadata if available
  if (tips) {
    return {
      title: tips.metaTitle,
      description: tips.metaDescription,
    };
  }
  
  return {
    title: `${cat.name} Guides | GetGood`,
    description: `Fast-track guides for ${cat.name}. 10 steps, noticeable in under a minute, achievable in a day.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const categoryTips = getCategoryTips(slug);
  const guides = getGuidesByCategory(slug);

  // JSON-LD Schema for ItemList
  const jsonLd = categoryTips ? {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `Top 10 ${categoryTips.category} Tips`,
    description: categoryTips.intro,
    numberOfItems: categoryTips.tips.length,
    itemListElement: categoryTips.tips.map((tip) => ({
      '@type': 'ListItem',
      position: tip.number,
      name: tip.title,
      description: tip.insight,
      url: `https://getgood.page/category/${slug}#tip-${tip.number}`,
    })),
  } : null;

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      
      <main className="max-w-4xl mx-auto px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[#6B6B6B] mb-10">
          <Link href="/" className="hover:text-[#0a0a0a] transition-colors">Home</Link>
          <span className="text-[#E5E2DD]">/</span>
          <span className="text-[#0a0a0a] font-medium">{cat.name}</span>
        </nav>

        {/* Hero Header */}
        <header className="mb-16 text-center">
          <span className="text-7xl md:text-8xl block mb-6">{categoryTips?.emoji || cat.emoji}</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0a0a0a] tracking-tight mb-6">
            Top 10 {cat.name} Tips
          </h1>
          {categoryTips && (
            <>
              <p className="text-lg md:text-xl text-[#4A4A4A] max-w-2xl mx-auto leading-relaxed mb-6">
                {categoryTips.intro}
              </p>
              <p className="text-sm text-[#8B8B8B] font-medium tracking-wide uppercase">
                10 insights · curated for depth
              </p>
              <ViewToggle />
            </>
          )}
        </header>

        {/* Tips List */}
        {categoryTips && (
          <section className="mb-20">
            <div className="space-y-12">
              {categoryTips.tips.map((tip) => (
                <article 
                  key={tip.number} 
                  id={`tip-${tip.number}`}
                  className="group scroll-mt-8"
                >
                  <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                    {/* Number Badge */}
                    <div className="flex-shrink-0">
                      <span 
                        className="text-6xl md:text-7xl font-bold tracking-tighter"
                        style={{ color: '#CCFF00' }}
                      >
                        {String(tip.number).padStart(2, '0')}
                      </span>
                    </div>
                    
                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <h2 className="text-2xl md:text-3xl font-bold text-[#0a0a0a] leading-tight">
                        {tip.title}
                      </h2>
                      
                      <p className="text-lg text-[#4A4A4A] leading-relaxed">
                        {tip.insight}
                      </p>
                      
                      {/* Why It Matters Callout */}
                      <div className="mt-6 p-5 rounded-xl bg-amber-50/80 border border-amber-100">
                        <div className="flex gap-3">
                          <span className="text-amber-600 flex-shrink-0">✦</span>
                          <div>
                            <span className="text-sm font-semibold text-amber-700 uppercase tracking-wide block mb-1">
                              Why it matters
                            </span>
                            <p className="text-amber-900/90 leading-relaxed">
                              {tip.why}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Divider */}
                  {tip.number < categoryTips.tips.length && (
                    <div className="mt-12 border-b border-[#E5E2DD]" />
                  )}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Go Deeper Section */}
        <section id="go-deeper" className="pt-8 border-t border-[#E5E2DD] scroll-mt-20">
          <header className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0a0a0a] tracking-tight mb-3">
              Go Deeper
            </h2>
            <p className="text-lg text-[#6B6B6B]">
              Step-by-step guides in {cat.name}
            </p>
          </header>

          {guides.length === 0 ? (
            <div className="text-center py-16 px-8 rounded-2xl bg-[#F5F3F0]">
              <p className="text-lg text-[#6B6B6B] mb-2">More guides coming soon</p>
              <p className="text-sm text-[#8B8B8B]">
                We&apos;re crafting detailed step-by-step guides for {cat.name.toLowerCase()}.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {guides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          )}
        </section>

        {/* Back to Home */}
        <div className="mt-16 text-center">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#6B6B6B] hover:text-[#0a0a0a] font-medium transition-colors"
          >
            <span>←</span>
            Browse all categories
          </Link>
        </div>
      </main>
    </>
  );
}
