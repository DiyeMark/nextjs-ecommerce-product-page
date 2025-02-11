'use client'

import { Suspense, useEffect, useState } from 'react'
import { Product } from '@/types/product'
import ProductRecommendations from './ProductRecommendations'
import ProductRecommendationsSkeleton from './ProductRecommendationsSkeleton'

interface AsyncProductRecommendationsProps {
  productId: string
}

async function getRecommendations(productId: string): Promise<Product[]> {
  const res = await fetch(`/api/products/${productId}/recommendations?limit=4`)
  if (!res.ok) {
    throw new Error('Failed to load recommendations')
  }
  return res.json()
}

function ProductLoader({ productId }: AsyncProductRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Product[]>([])
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    getRecommendations(productId)
      .then(setRecommendations)
      .catch(setError)
  }, [productId])

  if (error) {
    return (
      <div className="text-red-500">
        Error loading recommendations. Please try again later.
      </div>
    )
  }

  if (recommendations.length === 0) {
    return null
  }

  return <ProductRecommendations products={recommendations} />
}

export default function AsyncProductRecommendations({ productId }: AsyncProductRecommendationsProps) {
  return (
    <Suspense fallback={<ProductRecommendationsSkeleton />}>
      <ProductLoader productId={productId} />
    </Suspense>
  )
} 