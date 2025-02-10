'use client'

import { useEffect, useState } from 'react'
import { Product } from '@/types/product'
import ProductRecommendations from './ProductRecommendations'
import ProductRecommendationsSkeleton from './ProductRecommendationsSkeleton'

interface AsyncProductRecommendationsProps {
  productId: string
}

export default function AsyncProductRecommendations({ productId }: AsyncProductRecommendationsProps) {
  const [recommendations, setRecommendations] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const loadRecommendations = async () => {
      try {
        setIsLoading(true)
        setError(null)
        const res = await fetch(`/api/products/${productId}/recommendations?limit=4`)
        if (!res.ok) {
          throw new Error('Failed to load recommendations')
        }
        const data = await res.json()
        setRecommendations(data)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load recommendations'))
      } finally {
        setIsLoading(false)
      }
    }

    loadRecommendations()
  }, [productId])

  if (isLoading) {
    return <ProductRecommendationsSkeleton />
  }

  if (error) {
    return (
      <div data-testid="recommendations-error" className="text-red-500">
        Error loading recommendations. Please try again later.
      </div>
    )
  }

  if (recommendations.length === 0) {
    return null
  }

  return <ProductRecommendations products={recommendations} />
} 