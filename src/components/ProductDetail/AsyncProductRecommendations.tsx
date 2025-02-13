'use client'

import { useEffect, useState } from 'react'
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
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)
    getRecommendations(productId)
      .then(setRecommendations)
      .catch(setError)
      .finally(() => setIsLoading(false))
  }, [productId])

  if (error) {
    return (
      <div data-testid="recommendations-error" className="text-red-500">
        Error loading recommendations. Please try again later.
      </div>
    )
  }

  if (isLoading) {
    return <ProductRecommendationsSkeleton />
  }

  if (recommendations.length === 0) {
    return null
  }

  return <ProductRecommendations products={recommendations} />
}

export default function AsyncProductRecommendations({ productId }: AsyncProductRecommendationsProps) {
  return <ProductLoader productId={productId} />
} 