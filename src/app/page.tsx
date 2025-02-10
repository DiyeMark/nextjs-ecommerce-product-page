import { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Welcome to Storefront | Modern E-Commerce Experience',
  description: 'Explore our latest collection of premium products. Find the perfect items that match your style with our curated selection of fashion and accessories.',
};

export default function HomePage() {
  redirect('/products/fall-limited-edition-sneakers');
}
