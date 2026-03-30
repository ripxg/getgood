import { getAllGuides } from '@/lib/guides';
import HomePage from '@/components/HomePage';

export default function Page() {
  const guides = getAllGuides();
  return <HomePage guides={guides} />;
}
