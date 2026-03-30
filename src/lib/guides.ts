import fs from 'fs';
import path from 'path';
import { Guide, Category, CATEGORIES } from '@/types/guide';

const guidesDir = path.join(process.cwd(), 'content', 'guides');

export function getAllGuides(): Guide[] {
  const files = fs.readdirSync(guidesDir).filter((f) => f.endsWith('.json'));
  return files.map((file) => {
    const content = fs.readFileSync(path.join(guidesDir, file), 'utf-8');
    return JSON.parse(content) as Guide;
  });
}

export function getGuideBySlug(slug: string): Guide | undefined {
  const filePath = path.join(guidesDir, `${slug}.json`);
  if (!fs.existsSync(filePath)) return undefined;
  const content = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(content) as Guide;
}

export function getGuidesByCategory(categorySlug: string): Guide[] {
  return getAllGuides().filter((g) => g.categorySlug === categorySlug);
}

export function getCategories(): Category[] {
  return CATEGORIES;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
