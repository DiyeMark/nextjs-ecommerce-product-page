import ProductDetailSkeleton from '@/components/ProductDetail/ProductDetailSkeleton'
import ProductTabsSkeleton from '@/components/ProductDetail/ProductTabsSkeleton'
import ProductRecommendationsSkeleton from '@/components/ProductDetail/ProductRecommendationsSkeleton'
export default function Loading() {
  return (
    <div className="animate-pulse">
      <ProductDetailSkeleton />
      <ProductTabsSkeleton />
      <ProductRecommendationsSkeleton />
    </div>
  )
} 