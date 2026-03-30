import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { getCategories, getCategoryBySlug, getGuidesByCategory } from '@/lib/guides';
import GuideCard from '@/components/GuideCard';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getCategories().map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) return {};
  return {
    title: `${cat.name} Guides | GetGood`,
    description: `Fast-track guides for ${cat.name}. 10 steps, noticeable in under a minute, achievable in a day.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const cat = getCategoryBySlug(slug);
  if (!cat) notFound();

  const guides = getGuidesByCategory(slug);

  return (
    <main className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-[#6B6B6B] mb-8">
        <Link href="/" className="hover:text-[#0a0a0a] transition-colors">Home</Link>
        <span className="text-[#E5E2DD]">/</span>
        <span className="text-[#0a0a0a] font-medium">{cat.name}</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-start gap-6">
          <span className="text-6xl">{cat.emoji}</span>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#0a0a0a] tracking-tight mb-3">{cat.name}</h1>
            <p className="text-lg text-[#6B6B6B]">
              {guides.length} guide{guides.length !== 1 ? 's' : ''} · noticeable in under a minute · achievable in a day
            </p>
          </div>
        </div>
      </header>

      {/* Guides Grid */}
      {guides.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-lg text-[#6B6B6B] mb-4">No guides yet in this category.</p>
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-[#0a0a0a] font-medium hover:gap-3 transition-all"
          >
            Browse all guides
            <span>→</span>
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {guides.map((guide) => (
            <GuideCard key={guide.slug} guide={guide} />
          ))}
        </div>
      )}
    </main>
  );
}
