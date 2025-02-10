'use client'

import { Suspense } from 'react'
import ProductDetail from './ProductDetail'
import ProductTabs from './ProductTabs'
import ProductDetailSkeleton from './ProductDetailSkeleton'
import ProductTabsSkeleton from './ProductTabsSkeleton'
import { useEffect, useState } from 'react'
import { notFound } from 'next/navigation'
import { Product } from '@/types/product'

interface AsyncProductDetailProps {
  productId: string
}

function ProductLoader({ productId }: AsyncProductDetailProps) {
  const [product, setProduct] = useState<Product | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const res = await fetch(`/api/products/${productId}`)
        if (!res.ok) {
          if (res.status === 404) {
            notFound()
          }
          throw new Error('Failed to load product')
        }
        const data = await res.json()
        setProduct(data)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Failed to load product'))
        console.error('Error loading product:', err)
      }
    }

    loadProduct()
  }, [productId])

  if (error) {
    notFound()
  }

  if (!product) {
    return (
      <>
        <ProductDetailSkeleton />
        <ProductTabsSkeleton />
      </>
    )
  }

  return (
    <>
      <ProductDetail product={product} />
      <ProductTabs product={product} />
    </>
  )
}

export default function AsyncProductDetail({ productId }: AsyncProductDetailProps) {
  return (
    <Suspense
      fallback={
        <>
          <ProductDetailSkeleton />
          <ProductTabsSkeleton />
        </>
      }
    >
      <ProductLoader productId={productId} />
    </Suspense>
  )
} 