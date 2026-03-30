export interface GuideMedia {
  type: 'youtube' | 'image' | 'gif';
  url: string;
  caption: string;
}

export interface GuideStep {
  number: number;
  title: string;
  instruction: string;
  tip: string;
  media: GuideMedia | null;
}

export interface Guide {
  slug: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  timeToNotice: string;
  timeToAchieve: string;
  steps: GuideStep[];
  tags: string[];
  sources: string[];
}

export interface Category {
  slug: string;
  name: string;
  emoji: string;
  color: string;
  bgColor: string;
}

export interface CategoryTip {
  number: number;
  title: string;
  insight: string;
  why: string;
}

export interface CategoryTips {
  categorySlug: string;
  category: string;
  emoji: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  tips: CategoryTip[];
}

export const CATEGORIES: Category[] = [
  { slug: 'sports-fitness', name: 'Sports & Fitness', emoji: '🏋️', color: 'text-orange-600', bgColor: 'bg-orange-50' },
  { slug: 'food-cooking', name: 'Food & Cooking', emoji: '🍳', color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
  { slug: 'music', name: 'Music', emoji: '🎵', color: 'text-purple-600', bgColor: 'bg-purple-50' },
  { slug: 'games-strategy', name: 'Games & Strategy', emoji: '♟️', color: 'text-blue-600', bgColor: 'bg-blue-50' },
  { slug: 'tech-tools', name: 'Tech & Tools', emoji: '💻', color: 'text-green-600', bgColor: 'bg-green-50' },
  { slug: 'social-communication', name: 'Social & Communication', emoji: '💬', color: 'text-pink-600', bgColor: 'bg-pink-50' },
  { slug: 'creative', name: 'Creative', emoji: '🎨', color: 'text-red-600', bgColor: 'bg-red-50' },
  { slug: 'productivity', name: 'Productivity', emoji: '⚡', color: 'text-indigo-600', bgColor: 'bg-indigo-50' },
];
