import { Metadata } from 'next';
import AsyncProductRecommendations from '@/components/ProductDetail/AsyncProductRecommendations';
import AsyncProductDetail from '@/components/ProductDetail/AsyncProductDetail';
import { headers } from 'next/headers';
import { notFound } from 'next/navigation';

interface ProductPageProps {
  params: {
    id: string;
  };
}

async function getProduct(id: string) {
  try {
    const headersList = headers();
    const host = headersList.get('host') || 'localhost:3000';
    const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
    
    const res = await fetch(`${protocol}://${host}/api/products/${id}`, {
      cache: 'no-store'
    });
    
    if (!res.ok) {
      console.error(`Failed to fetch product ${id}:`, res.status, res.statusText);
      return null;
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(`Error fetching product ${id}:`, error);
    return null;
  }
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(params.id);
  
  if (!product) {
    return {
      title: 'Product Not Found',
      description: 'Sorry, we couldn\'t find the product you\'re looking for. It might have been removed or is temporarily unavailable.',
    };
  }

  const metadata = {
    title: `${product.title} | Storefront`,
    description: product.description,
    openGraph: {
      title: `${product.title} | Storefront`,
      description: product.description,
      images: product.images.map((image: string) => ({
        url: image,
      })),
    },
  };
  
  return metadata;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = await getProduct(params.id);
  
  if (!product) {
    notFound();
  }

  return (
    <main>
      <AsyncProductDetail productId={params.id} initialProduct={product} />
      <AsyncProductRecommendations productId={params.id} />
    </main>
  );
} 