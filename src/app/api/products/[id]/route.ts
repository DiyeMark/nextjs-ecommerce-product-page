import { NextResponse } from 'next/server';
import { products } from '@/lib/data/products';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const product = products.find(p => p.id === params.id);
  
  if (!product) {
    return new NextResponse('Product not found', { status: 404 });
  }

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 400));

  return NextResponse.json(product);
} 