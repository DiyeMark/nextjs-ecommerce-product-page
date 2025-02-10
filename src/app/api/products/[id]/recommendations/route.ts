import { NextResponse } from 'next/server';
import { products } from '@/lib/data/products';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { searchParams } = new URL(request.url);
  const limit = searchParams.get('limit') ? Number(searchParams.get('limit')) : 2;

  // Exclude the current product from recommendations
  const otherProducts = products.filter(p => p.id !== params.id);
    
  // In a real API, we would implement proper recommendation logic
  // For now, we'll just return random products
  const recommendations = otherProducts
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return NextResponse.json(recommendations);
} 