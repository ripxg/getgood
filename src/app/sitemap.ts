import { MetadataRoute } from 'next';
import { getAllGuides, getCategories } from '@/lib/guides';

const BASE_URL = 'https://getgood.page';

export default function sitemap(): MetadataRoute.Sitemap {
  const guides = getAllGuides();
  const categories = getCategories();

  const guideEntries = guides.map((g) => ({
    url: `${BASE_URL}/guide/${g.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const categoryEntries = categories.map((c) => ({
    url: `${BASE_URL}/category/${c.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    ...categoryEntries,
    ...guideEntries,
  ];
}
