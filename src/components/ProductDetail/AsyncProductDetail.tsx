'use client'

import { Suspense } from 'react'
import ProductDetail from './ProductDetail'
import ProductTabs from './ProductTabs'
import ProductDetailSkeleton from './ProductDetailSkeleton'
import ProductTabsSkeleton from './ProductTabsSkeleton'
import { useState } from 'react'
import { Product } from '@/types/product'

interface AsyncProductDetailProps {
  productId: string
  initialProduct: Product
}

function ProductLoader({ initialProduct }: AsyncProductDetailProps) {
  const [product] = useState<Product | null>(initialProduct)

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

export default function AsyncProductDetail({ productId, initialProduct }: AsyncProductDetailProps) {
  return (
    <Suspense
      fallback={
        <>
          <ProductDetailSkeleton />
          <ProductTabsSkeleton />
        </>
      }
    >
      <ProductLoader productId={productId} initialProduct={initialProduct} />
    </Suspense>
  )
} 