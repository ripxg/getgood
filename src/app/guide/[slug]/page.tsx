import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getAllGuides, getGuideBySlug, getGuidesByCategory, getCategoryBySlug } from '@/lib/guides';
import GuidePageContent from '@/components/GuidePageContent';

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
      <GuidePageContent guide={guide} cat={cat} related={related} />
    </>
  );
}
